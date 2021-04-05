"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.muxWebhookHandler = exports.submitRemoteUpload = exports.submitDirectUpload = exports.index = void 0;
var axios_1 = __importDefault(require("axios"));
var mux_node_1 = __importDefault(require("@mux/mux-node"));
var mux_1 = require("../services/mux");
var pluginId_1 = __importDefault(require("../admin/src/pluginId"));
var Webhooks = mux_node_1.default.Webhooks;
var model = "plugins::" + pluginId_1.default + ".mux-asset";
var index = function (ctx) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, ctx.send({ message: 'ok' })];
}); }); };
exports.index = index;
var submitDirectUpload = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var data, config, result, body;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = ctx.request.body;
                return [4 /*yield*/, mux_1.getConfig('general')];
            case 1:
                config = _a.sent();
                return [4 /*yield*/, axios_1.default({
                        url: 'https://api.mux.com/video/v1/uploads',
                        method: "post",
                        auth: {
                            username: config.access_token,
                            password: config.secret_key
                        },
                        headers: { 'Content-Type': 'application/json' },
                        data: { "cors_origin": ctx.request.header.origin, "new_asset_settings": { "playback_policy": ["public"] } }
                    })];
            case 2:
                result = _a.sent();
                body = result.data.data;
                data.upload_id = body.id;
                return [4 /*yield*/, strapi.entityService.create({ data: data }, { model: model })];
            case 3:
                _a.sent();
                ctx.send(body);
                return [2 /*return*/];
        }
    });
}); };
exports.submitDirectUpload = submitDirectUpload;
var submitRemoteUpload = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var data, config, body, result, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = ctx.request.body;
                return [4 /*yield*/, mux_1.getConfig('general')];
            case 1:
                config = _a.sent();
                body = { "input": data.url, "playback_policy": ["public"] };
                if (!data.url) {
                    ctx.badRequest("ValidationError", { errors: { "url": ["url cannot be empty"] } });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, axios_1.default({
                        url: 'https://api.mux.com/video/v1/assets',
                        method: "post",
                        validateStatus: false,
                        auth: {
                            username: config.access_token,
                            password: config.secret_key
                        },
                        headers: { 'Content-Type': 'application/json' },
                        data: body
                    })];
            case 2:
                result = _a.sent();
                data.asset_id = result.data.data.id;
                return [4 /*yield*/, strapi.entityService.create({ data: data }, { model: model })];
            case 3:
                response = _a.sent();
                ctx.send(response);
                return [2 /*return*/];
        }
    });
}); };
exports.submitRemoteUpload = submitRemoteUpload;
var muxWebhookHandler = function (ctx) { return __awaiter(void 0, void 0, void 0, function () {
    var body, sig, config, isSigValid, type, data, payload, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                body = ctx.request.body;
                sig = ctx.request.headers['mux-signature'];
                return [4 /*yield*/, mux_1.getConfig('general')];
            case 1:
                config = _a.sent();
                if (sig === undefined || sig === '') {
                    ctx.throw(401, 'Webhook signature is missing');
                }
                try {
                    isSigValid = Webhooks.verifyHeader(JSON.stringify(body), sig, config.webhook_signing_secret);
                }
                catch (err) {
                    ctx.throw(403, err);
                    return [2 /*return*/];
                }
                type = body.type, data = body.data;
                if (type === 'video.upload.asset_created') {
                    payload = {
                        params: { upload_id: data.id },
                        data: { asset_id: data.asset_id }
                    };
                }
                else if (type === 'video.asset.ready') {
                    payload = {
                        params: { asset_id: body.data.id },
                        data: {
                            playback_id: data.playback_ids[0].id,
                            isReady: true
                        }
                    };
                }
                else {
                    ctx.send('ignored');
                    return [2 /*return*/];
                }
                return [4 /*yield*/, strapi.entityService.update(payload, { model: model })];
            case 2:
                result = _a.sent();
                ctx.send(result);
                return [2 /*return*/];
        }
    });
}); };
exports.muxWebhookHandler = muxWebhookHandler;
