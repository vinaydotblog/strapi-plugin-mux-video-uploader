"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var progress_bar_1 = __importDefault(require("./progress-bar"));
var ContainerStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 3rem;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 3rem;\n"])));
var RowStyled = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: 3rem;\n"], ["\n  margin-bottom: 3rem;\n"])));
var ProgressBarWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 60%;\n"], ["\n  width: 60%;\n"])));
var Uploading = function (props) {
    return (react_1.default.createElement(ContainerStyled, null,
        react_1.default.createElement(RowStyled, null,
            react_1.default.createElement("h1", null, "Uploading to Mux")),
        react_1.default.createElement(ProgressBarWrapper, null,
            react_1.default.createElement(progress_bar_1.default, { percent: props.percent }))));
};
exports.default = Uploading;
var templateObject_1, templateObject_2, templateObject_3;
