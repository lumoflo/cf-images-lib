import FormData from "form-data";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
const axios = require("axios").default;

const ResultSchema = z.object({
  id: z.string(),
  filename: z.string(),
  uploaded: z.string(), // Assuming date string format, you can specify a Date schema if required
  requireSignedURLs: z.boolean(),
  variants: z.array(z.string()),
});

const ResponseSchema = z.object({
  result: ResultSchema,
  success: z.boolean(),
  errors: z.array(z.unknown()), // Assuming errors can be of any type
  messages: z.array(z.unknown()), // Assuming messages can be of any type
});

type ParsedResponse = z.infer<typeof ResponseSchema>;

export default class Uploader {
  private CF_ACCOUNT_ID: string;
  private CF_API_TOKEN: string;

  constructor(CF_ACCOUNT_ID: string, CF_API_TOKEN: string) {
    if (!(CF_ACCOUNT_ID && CF_API_TOKEN))
      throw new Error("CF_ACCOUNT_ID or CF_API_TOKEN cannot be empty");
    this.CF_ACCOUNT_ID = CF_ACCOUNT_ID;
    this.CF_API_TOKEN = CF_API_TOKEN;
  }

  public fromBase64 = async (
    base64Text: string,
    filename: string = uuidv4(),
    fileExtension = "png",
  ): Promise<ParsedResponse> => {
    return new Promise((resolve, reject) => {
      if (!base64Text) {
        reject(new Error("base64Text cannot be empty"));
        return;
      }
      if (base64Text.includes("base64")) {
        reject(new Error("Remove data:***/***;base64 tag from input."));
        return;
      }

      const formData = new FormData();
      formData.append(
        "file",
        Buffer.from(base64Text, "base64"),
        `${filename}.${fileExtension}`,
      );

      this.sendRequest(formData)
        .then((data) => {
          const parsedData = ResponseSchema.parse(data);
          resolve(parsedData);
        })
        .catch((err) => {
          reject(new Error(err?.toString()));
        });
    });
  };

  private sendRequest = async (formData: FormData): Promise<unknown> => {
    const options = {
      method: "POST",
      url: `https://api.cloudflare.com/client/v4/accounts/${this.CF_ACCOUNT_ID}/images/v1`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${this.CF_API_TOKEN}`,
      },
      data: formData,
    };
    return (await axios.request(options))?.data;
  };

  public fromURL = async (url: string): Promise<ParsedResponse> => {
    return new Promise((resolve, reject) => {
      if (!url) {
        reject(new Error("url cannot be empty"));
        return;
      }
      const formData = new FormData();
      formData.append("url", url);
      this.sendRequest(formData)
        .then((data) => {
          const parsedData = ResponseSchema.parse(data);
          resolve(parsedData);
        })
        .catch((err) => {
          reject(new Error(err?.toString()));
        });
    });
  };
}
