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
var core_1 = require("@buffetjs/core");
var react_router_dom_1 = require("react-router-dom");
var pluginId_1 = __importDefault(require("../../pluginId"));
var ContainerStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 3rem;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 3rem;\n"])));
var RowStyled = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: 3rem;\n"], ["\n  margin-bottom: 3rem;\n"])));
var SetupNeeded = function () {
    var history = react_router_dom_1.useHistory();
    var onSettingsClick = react_1.default.useCallback(function () {
        history.push("/settings/" + pluginId_1.default + "/general");
    }, []);
    return (react_1.default.createElement(ContainerStyled, null,
        react_1.default.createElement(RowStyled, null,
            react_1.default.createElement("h1", null, "Setup Needed")),
        react_1.default.createElement(RowStyled, null,
            react_1.default.createElement("p", null, "In order for uploads to function, an administrator will need to complete the setup of this plugin by visiting the settings page.  Click the button below to be taken there now.")),
        react_1.default.createElement(core_1.Button, { color: "primary", label: "Settings", onClick: onSettingsClick })));
};
exports.default = SetupNeeded;
var templateObject_1, templateObject_2;
