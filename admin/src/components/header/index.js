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
var core_1 = require("@buffetjs/core");
var styled_components_1 = __importDefault(require("styled-components"));
var logo_1 = __importDefault(require("../../components/logo"));
var ContainerStyled = styled_components_1.default(core_1.Flex)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: 3rem;\n"], ["\n  margin-bottom: 3rem;\n"])));
var TitleStyled = styled_components_1.default.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-left: 3rem;\n"], ["\n  margin-left: 3rem;\n"])));
var Header = function (props) {
    return (react_1.default.createElement(ContainerStyled, { justifyContent: 'space-between', alignItems: 'center' },
        react_1.default.createElement(core_1.Flex, { alignItems: 'center' },
            react_1.default.createElement(logo_1.default, null),
            react_1.default.createElement(TitleStyled, null, "Video Uploader")),
        react_1.default.createElement(core_1.Button, { color: "primary", label: "Save", onClick: props.onSubmitClick, disabled: props.disableSubmit })));
};
Header.defaultProps = {
    onSubmitClick: function () { }
};
exports.default = Header;
var templateObject_1, templateObject_2;
