"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var react_1 = __importDefault(require("react"));
var core_1 = require("@buffetjs/core");
var strapi_helper_plugin_1 = require("strapi-helper-plugin");
var styled_components_1 = __importDefault(require("styled-components"));
var well_1 = __importDefault(require("./../../components/well"));
var strapi_1 = require("../../services/strapi");
var ContainerStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &> * {\n    margin-bottom: 30px;\n  }\n"], ["\n  &> * {\n    margin-bottom: 30px;\n  }\n"])));
var H1Styled = styled_components_1.default.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin: 5px 0 0 0;\n"], ["\n  margin: 5px 0 0 0;\n"])));
var SubHeadingStyled = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: #787E8F;\n  font-size: 1.3rem;\n"], ["\n  color: #787E8F;\n  font-size: 1.3rem;\n"])));
var ButtonWrapperStyled = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  &> * {\n    margin-left: 15px;\n  }\n"], ["\n  &> * {\n    margin-left: 15px;\n  }\n"])));
var ShortRowStyled = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: grid;\n  width: 100%;\n  grid-template-columns: 40% auto;\n  grid-gap: 1rem;\n  padding-bottom: 3rem;\n"], ["\n  display: grid;\n  width: 100%;\n  grid-template-columns: 40% auto;\n  grid-gap: 1rem;\n  padding-bottom: 3rem;\n"])));
var LongRowStyled = styled_components_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: grid;\n  width: 100%;\n  grid-template-columns: 65% auto;\n  grid-gap: 1rem;\n  padding-bottom: 3rem;\n"], ["\n  display: grid;\n  width: 100%;\n  grid-template-columns: 65% auto;\n  grid-gap: 1rem;\n  padding-bottom: 3rem;\n"])));
var Settings = function () {
    var _a = react_1.default.useState(true), cancelDisabled = _a[0], setCancelDisabled = _a[1];
    var _b = react_1.default.useState(), accessToken = _b[0], setAccesToken = _b[1];
    var _c = react_1.default.useState(), secretKey = _c[0], setSecretKey = _c[1];
    var _d = react_1.default.useState(), webhookSigningSecret = _d[0], setWebhookSigningSecret = _d[1];
    var onSaveClick = react_1.default.useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var body, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    body = new FormData();
                    if (accessToken !== undefined) {
                        body.append("access_token", accessToken);
                    }
                    if (secretKey !== undefined) {
                        body.append("secret_key", secretKey);
                    }
                    if (webhookSigningSecret !== undefined) {
                        body.append("webhook_signing_secret", webhookSigningSecret);
                    }
                    if (body.entries().next().done) {
                        strapi.notification.info('No changes made');
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, strapi_1.setMuxSettings(body)];
                case 1:
                    response = _a.sent();
                    if (response.status === 200) {
                        strapi.notification.success('Changes saved');
                        onCancelClick();
                    }
                    else {
                        strapi.notification.error('Error while saving changes');
                    }
                    return [2 /*return*/];
            }
        });
    }); }, [accessToken, secretKey, webhookSigningSecret]);
    var onCancelClick = react_1.default.useCallback(function () {
        setAccesToken(undefined);
        setSecretKey(undefined);
        setWebhookSigningSecret(undefined);
        setCancelDisabled(true);
    }, []);
    return (react_1.default.createElement(ContainerStyled, null,
        react_1.default.createElement(core_1.Flex, { alignItems: 'center', justifyContent: 'space-between' },
            react_1.default.createElement("div", null,
                react_1.default.createElement(H1Styled, null, "Settings"),
                react_1.default.createElement(SubHeadingStyled, null, "Mux Video Uploader")),
            react_1.default.createElement(ButtonWrapperStyled, null,
                react_1.default.createElement(core_1.Button, { color: "cancel", label: "Cancel", onClick: onCancelClick, disabled: cancelDisabled }),
                react_1.default.createElement(core_1.Button, { color: "success", label: "Save", onClick: onSaveClick }))),
        react_1.default.createElement(core_1.Flex, null,
            react_1.default.createElement(well_1.default, null,
                react_1.default.createElement(ShortRowStyled, null,
                    react_1.default.createElement("div", null,
                        react_1.default.createElement(strapi_helper_plugin_1.Label, { message: 'Access Token' }),
                        react_1.default.createElement(core_1.InputText, { name: "access_token", onChange: function (_a) {
                                var value = _a.target.value;
                                setAccesToken(value);
                                setCancelDisabled(false);
                            }, type: "password", value: accessToken }))),
                react_1.default.createElement(LongRowStyled, null,
                    react_1.default.createElement("div", null,
                        react_1.default.createElement(strapi_helper_plugin_1.Label, { message: 'Secret Key' }),
                        react_1.default.createElement(core_1.InputText, { name: "secret_key", onChange: function (_a) {
                                var value = _a.target.value;
                                setSecretKey(value);
                                setCancelDisabled(false);
                            }, type: "password", value: secretKey }))),
                react_1.default.createElement(ShortRowStyled, null,
                    react_1.default.createElement("div", null,
                        react_1.default.createElement(strapi_helper_plugin_1.Label, { message: 'Webhook Signing Secret' }),
                        react_1.default.createElement(core_1.InputText, { name: "webhook_signing_secret", onChange: function (_a) {
                                var value = _a.target.value;
                                setWebhookSigningSecret(value);
                                setCancelDisabled(false);
                            }, type: "password", value: webhookSigningSecret })))))));
};
exports.default = Settings;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
