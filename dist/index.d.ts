import { z } from 'zod';

declare const ResponseSchema: z.ZodObject<{
    result: z.ZodObject<{
        id: z.ZodString;
        filename: z.ZodString;
        uploaded: z.ZodString;
        requireSignedURLs: z.ZodBoolean;
        variants: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        filename: string;
        uploaded: string;
        requireSignedURLs: boolean;
        variants: string[];
    }, {
        id: string;
        filename: string;
        uploaded: string;
        requireSignedURLs: boolean;
        variants: string[];
    }>;
    success: z.ZodBoolean;
    errors: z.ZodArray<z.ZodUnknown, "many">;
    messages: z.ZodArray<z.ZodUnknown, "many">;
}, "strip", z.ZodTypeAny, {
    result: {
        id: string;
        filename: string;
        uploaded: string;
        requireSignedURLs: boolean;
        variants: string[];
    };
    success: boolean;
    errors: unknown[];
    messages: unknown[];
}, {
    result: {
        id: string;
        filename: string;
        uploaded: string;
        requireSignedURLs: boolean;
        variants: string[];
    };
    success: boolean;
    errors: unknown[];
    messages: unknown[];
}>;
type ParsedResponse = z.infer<typeof ResponseSchema>;
declare class Uploader {
    private CF_ACCOUNT_ID;
    private CF_API_TOKEN;
    constructor(CF_ACCOUNT_ID: string, CF_API_TOKEN: string);
    fromBase64: (base64Text: string, filename?: string, fileExtension?: string) => Promise<ParsedResponse>;
    private sendRequest;
    fromURL: (url: string) => Promise<ParsedResponse>;
}

export { Uploader as default };
