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
var styled_components_1 = __importDefault(require("styled-components"));
var strapi_helper_plugin_1 = require("strapi-helper-plugin");
var core_1 = require("@buffetjs/core");
var FirstRowStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  width: 100%;\n  grid-template-columns: 33% auto;\n  grid-gap: 1rem;\n  padding-bottom: 3rem;\n"], ["\n  display: grid;\n  width: 100%;\n  grid-template-columns: 33% auto;\n  grid-gap: 1rem;\n  padding-bottom: 3rem;\n"])));
var SecondRowStyled = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: grid;\n  width: 100%;\n  grid-template-columns: 75% auto;\n  grid-gap: 1rem;\n  padding-bottom: 3rem;\n"], ["\n  display: grid;\n  width: 100%;\n  grid-template-columns: 75% auto;\n  grid-gap: 1rem;\n  padding-bottom: 3rem;\n"])));
var FileInputText = styled_components_1.default.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  border: 1px solid #E3E9F3;\n  width: 100%;\n  padding: .5rem;\n"], ["\n  display: block;\n  border: 1px solid #E3E9F3;\n  width: 100%;\n  padding: .5rem;\n"])));
var Form = function (props, ref) {
    var _a = react_1.default.useState(''), title = _a[0], setTitle = _a[1];
    var _b = react_1.default.useState([]), titleErrs = _b[0], setTitleErrs = _b[1];
    var _c = react_1.default.useState(''), url = _c[0], setUrl = _c[1];
    var _d = react_1.default.useState([]), urlErrs = _d[0], setUrlErrs = _d[1];
    var _e = react_1.default.useState('url'), uploadMethod = _e[0], setUploadMethod = _e[1];
    var _f = react_1.default.useState(), file = _f[0], setFile = _f[1];
    react_1.default.useImperativeHandle(ref, function () { return ({
        submit: function () { return __awaiter(void 0, void 0, void 0, function () {
            var media, errors;
            return __generator(this, function (_a) {
                setTitleErrs([]);
                setUrlErrs([]);
                media = uploadMethod === 'url' ? url : file;
                errors = props.onSubmit(title, uploadMethod, media);
                if (errors === undefined)
                    return [2 /*return*/];
                setTitleErrs(errors.title || []);
                setUrlErrs(errors.url || []);
                return [2 /*return*/];
            });
        }); }
    }); }, [title, uploadMethod, url, file]);
    var handleOnUploadMethodChange = function (_a) {
        var value = _a.target.value;
        setUrlErrs([]);
        setUploadMethod(value);
    };
    var renderUploadMethod = react_1.default.useCallback(function () {
        if (uploadMethod === "url") {
            return (react_1.default.createElement("div", null,
                react_1.default.createElement(strapi_helper_plugin_1.Label, { message: 'Url' }),
                react_1.default.createElement(core_1.InputText, { name: 'upload-url', onChange: function (_a) {
                        var value = _a.target.value;
                        setUrl(value);
                    }, type: "text", placeholder: 'https://storage.googleapis.com/muxdemofiles/mux-video-intro.mp4', value: url }),
                react_1.default.createElement(strapi_helper_plugin_1.InputErrors, { errors: urlErrs })));
        }
        else if (uploadMethod === "upload") {
            return (react_1.default.createElement("div", null,
                react_1.default.createElement(strapi_helper_plugin_1.Label, { message: 'File' }),
                react_1.default.createElement(FileInputText, { name: 'upload-file', onChange: function (_a) {
                        var files = _a.target.files;
                        return files && setFile(files[0]);
                    }, type: "file", accept: "video/*" }),
                react_1.default.createElement(strapi_helper_plugin_1.InputErrors, { errors: urlErrs })));
        }
        else {
            return null;
        }
    }, [uploadMethod, url, urlErrs]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(FirstRowStyled, null,
            react_1.default.createElement("div", null,
                react_1.default.createElement(strapi_helper_plugin_1.Label, { message: 'Title' }),
                react_1.default.createElement(core_1.InputText, { name: "title", onChange: function (_a) {
                        var value = _a.target.value;
                        setTitle(value);
                    }, placeholder: "Title of asset", type: "text", value: title }),
                react_1.default.createElement(strapi_helper_plugin_1.InputErrors, { errors: (titleErrs) || [] })),
            react_1.default.createElement("div", null,
                react_1.default.createElement(strapi_helper_plugin_1.Label, { message: '' }),
                react_1.default.createElement(core_1.Enumeration, { name: "uploadMethod", onChange: handleOnUploadMethodChange, options: [
                        {
                            value: 'url',
                            label: 'Url',
                        },
                        {
                            value: 'upload',
                            label: 'Upload',
                        },
                    ], value: uploadMethod }))),
        react_1.default.createElement(SecondRowStyled, null, renderUploadMethod())));
};
exports.default = react_1.default.forwardRef(Form);
var templateObject_1, templateObject_2, templateObject_3;
