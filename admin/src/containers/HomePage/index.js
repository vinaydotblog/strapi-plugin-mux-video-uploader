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
var upchunk_1 = require("@mux/upchunk");
var well_1 = __importDefault(require("../../components/well"));
var header_1 = __importDefault(require("../../components/header"));
var form_1 = __importDefault(require("../../components/form"));
var uploading_1 = __importDefault(require("../../components/uploading"));
var uploaded_1 = __importDefault(require("../../components/uploaded"));
var setup_needed_1 = __importDefault(require("../../components/setup-needed"));
var strapi_1 = require("../../services/strapi");
var ContainerStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 3.1rem 2.5rem 0 2.5rem;\n"], ["\n  padding: 3.1rem 2.5rem 0 2.5rem;\n"])));
var HomePage = function () {
    var formRef = react_1.default.useRef(null);
    var _a = react_1.default.useState(), isReady = _a[0], setIsReady = _a[1];
    var _b = react_1.default.useState(false), isSubmitting = _b[0], setIsSubmitting = _b[1];
    var _c = react_1.default.useState(), uploadPercent = _c[0], setUploadPercent = _c[1];
    var _d = react_1.default.useState(false), isComplete = _d[0], setIsComplete = _d[1];
    var _e = react_1.default.useState(), uploadError = _e[0], setUploadError = _e[1];
    react_1.default.useEffect(function () {
        strapi_1.getIsConfigured().then(function (data) {
            console.log(data);
            setIsReady(data === true);
            if (!data)
                setIsSubmitting(true);
        });
    }, []);
    var uploadFile = function (endpoint, file) {
        setUploadPercent(0);
        var uploadTask = upchunk_1.createUpload({ endpoint: endpoint, file: file });
        uploadTask.on('error', function (err) { return setUploadError(err.detail); });
        uploadTask.on('progress', function (progressEvt) { return setUploadPercent(Math.floor(progressEvt.detail)); });
        uploadTask.on('success', function () { return setIsComplete(true); });
    };
    var handleOnClick = react_1.default.useCallback(function () { var _a; return (_a = formRef.current) === null || _a === void 0 ? void 0 : _a.submit(); }, []);
    var handleOnSubmit = react_1.default.useCallback(function (title, uploadMethod, media) { return __awaiter(void 0, void 0, void 0, function () {
        var result, error_1, statusCode, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsSubmitting(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, strapi_1.submitUpload(title, uploadMethod, media)];
                case 2:
                    result = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    setUploadError(error_1);
                    return [2 /*return*/];
                case 4:
                    statusCode = result.statusCode, data = result.data;
                    if (statusCode && statusCode !== 200) {
                        setIsSubmitting(false);
                        return [2 /*return*/, data === null || data === void 0 ? void 0 : data.errors];
                    }
                    else if (uploadMethod === "upload") {
                        uploadFile(result.url, media);
                    }
                    else {
                        setUploadPercent(100);
                        setIsComplete(true);
                    }
                    return [2 /*return*/];
            }
        });
    }); }, []);
    var handleOnReset = function () {
        setIsSubmitting(false);
        setUploadPercent(undefined);
        setIsComplete(false);
        setUploadError(undefined);
    };
    var renderBody = function () {
        if (!isReady) {
            return (react_1.default.createElement(setup_needed_1.default, null));
        }
        else if (isComplete) {
            return (react_1.default.createElement(uploaded_1.default, { onReset: handleOnReset }));
        }
        else if (uploadPercent !== undefined) {
            return (react_1.default.createElement(uploading_1.default, { percent: uploadPercent }));
        }
        else {
            return (react_1.default.createElement(form_1.default, { ref: formRef, onSubmit: handleOnSubmit }));
        }
    };
    if (isReady === undefined)
        return null;
    return (react_1.default.createElement(ContainerStyled, null,
        react_1.default.createElement(header_1.default, { onSubmitClick: handleOnClick, disableSubmit: isSubmitting }),
        react_1.default.createElement(well_1.default, null, renderBody())));
};
exports.default = react_1.default.memo(HomePage);
var templateObject_1;
