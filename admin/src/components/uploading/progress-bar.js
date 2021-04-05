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
var ContainerStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"], ["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"])));
var BarStyled = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 6px;\n  width: 100%;\n  background-color: #f3f3f4;\n  border-radius: 3px;\n  flex-grow: 1;\n  margin-right: 1.5rem;\n"], ["\n  height: 6px;\n  width: 100%;\n  background-color: #f3f3f4;\n  border-radius: 3px;\n  flex-grow: 1;\n  margin-right: 1.5rem;\n"])));
var ProgressStyled = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 6px;\n  background-color: #007EFF;\n  border-radius: 3px;\n"], ["\n  height: 6px;\n  background-color: #007EFF;\n  border-radius: 3px;\n"])));
var ProgressTextStyled = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  color: #B4B6BA;\n\n  :after {\n    position: absolute;\n    content: '100%';\n    opacity: 0;\n  }\n"], ["\n  position: relative;\n  color: #B4B6BA;\n\n  :after {\n    position: absolute;\n    content: '100%';\n    opacity: 0;\n  }\n"])));
var ProgressBar = function (props) {
    var percent = props.percent;
    var _a = react_1.default.useState(0), progress = _a[0], setProgress = _a[1];
    react_1.default.useEffect(function () {
        if (percent <= progress)
            return;
        setProgress(percent);
    }, [percent]);
    return (react_1.default.createElement(ContainerStyled, null,
        react_1.default.createElement(BarStyled, null,
            react_1.default.createElement(ProgressStyled, { style: { width: progress + "%" } })),
        react_1.default.createElement(ProgressTextStyled, null, progress + "%")));
};
exports.default = ProgressBar;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
