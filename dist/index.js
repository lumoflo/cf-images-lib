"use strict";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// index.ts
var cf_images_lib_exports = {};
__export(cf_images_lib_exports, {
    default: function() {
        return Uploader;
    }
});
module.exports = __toCommonJS(cf_images_lib_exports);
var import_form_data = __toESM(require("form-data"));
var import_uuid = require("uuid");
var import_zod = require("zod");
var axios = require("axios").default;
var ResultSchema = import_zod.z.object({
    id: import_zod.z.string(),
    filename: import_zod.z.string(),
    uploaded: import_zod.z.string(),
    // Assuming date string format, you can specify a Date schema if required
    requireSignedURLs: import_zod.z.boolean(),
    variants: import_zod.z.array(import_zod.z.string())
});
var ResponseSchema = import_zod.z.object({
    result: ResultSchema,
    success: import_zod.z.boolean(),
    errors: import_zod.z.array(import_zod.z.unknown()),
    // Assuming errors can be of any type
    messages: import_zod.z.array(import_zod.z.unknown())
});
var Uploader = function Uploader(CF_ACCOUNT_ID, CF_API_TOKEN) {
    _class_call_check(this, Uploader);
    var _this = this;
    this.fromBase64 = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(base64Text) {
            var filename, fileExtension;
            var _arguments = arguments;
            return _ts_generator(this, function(_state) {
                filename = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : (0, import_uuid.v4)(), fileExtension = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : "png";
                return [
                    2,
                    new Promise(function(resolve, reject) {
                        if (!base64Text) {
                            reject(new Error("base64Text cannot be empty"));
                            return;
                        }
                        if (base64Text.includes("base64")) {
                            reject(new Error("Remove data:***/***;base64 tag from input."));
                            return;
                        }
                        var formData = new import_form_data.default();
                        formData.append("file", Buffer.from(base64Text, "base64"), "".concat(filename, ".").concat(fileExtension));
                        _this.sendRequest(formData).then(function(data) {
                            var parsedData = ResponseSchema.parse(data);
                            resolve(parsedData);
                        }).catch(function(err) {
                            reject(new Error(err === null || err === void 0 ? void 0 : err.toString()));
                        });
                    })
                ];
            });
        });
        return function(base64Text) {
            return _ref.apply(this, arguments);
        };
    }();
    this.sendRequest = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(formData) {
            var _this1, options;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        options = {
                            method: "POST",
                            url: "https://api.cloudflare.com/client/v4/accounts/".concat(_this.CF_ACCOUNT_ID, "/images/v1"),
                            headers: {
                                "Content-Type": "multipart/form-data",
                                Authorization: "Bearer ".concat(_this.CF_API_TOKEN)
                            },
                            data: formData
                        };
                        return [
                            4,
                            axios.request(options)
                        ];
                    case 1:
                        return [
                            2,
                            (_this1 = _state.sent()) === null || _this1 === void 0 ? void 0 : _this1.data
                        ];
                }
            });
        });
        return function(formData) {
            return _ref.apply(this, arguments);
        };
    }();
    this.fromURL = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(url) {
            return _ts_generator(this, function(_state) {
                return [
                    2,
                    new Promise(function(resolve, reject) {
                        if (!url) {
                            reject(new Error("url cannot be empty"));
                            return;
                        }
                        var formData = new import_form_data.default();
                        formData.append("url", url);
                        _this.sendRequest(formData).then(function(data) {
                            var parsedData = ResponseSchema.parse(data);
                            resolve(parsedData);
                        }).catch(function(err) {
                            reject(new Error(err === null || err === void 0 ? void 0 : err.toString()));
                        });
                    })
                ];
            });
        });
        return function(url) {
            return _ref.apply(this, arguments);
        };
    }();
    if (!(CF_ACCOUNT_ID && CF_API_TOKEN)) throw new Error("CF_ACCOUNT_ID or CF_API_TOKEN cannot be empty");
    this.CF_ACCOUNT_ID = CF_ACCOUNT_ID;
    this.CF_API_TOKEN = CF_API_TOKEN;
};
//# sourceMappingURL=index.js.map