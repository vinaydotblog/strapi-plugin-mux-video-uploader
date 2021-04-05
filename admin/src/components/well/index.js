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
var ContainerStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  padding: 22px 25px 0 25px;\n  background: #ffffff;\n  border-radius: 2px;\n  box-shadow: 0 2px 4px #e3e9f3;\n  margin-bottom: 17px;\n"], ["\n  width: 100%;\n  padding: 22px 25px 0 25px;\n  background: #ffffff;\n  border-radius: 2px;\n  box-shadow: 0 2px 4px #e3e9f3;\n  margin-bottom: 17px;\n"])));
var Well = function (props) {
    return react_1.default.createElement(ContainerStyled, null, props.children);
};
exports.default = react_1.default.memo(Well);
var templateObject_1;
