"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var strapi_helper_plugin_1 = require("strapi-helper-plugin");
var pluginId_1 = __importDefault(require("../../pluginId"));
var HomePage_1 = __importDefault(require("../HomePage"));
var App = function () {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_router_dom_1.Switch, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/plugins/" + pluginId_1.default, component: HomePage_1.default, exact: true }),
            react_1.default.createElement(react_router_dom_1.Route, { component: strapi_helper_plugin_1.NotFound }))));
};
exports.default = App;
