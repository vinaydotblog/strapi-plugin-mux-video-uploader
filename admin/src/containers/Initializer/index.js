"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var pluginId_1 = __importDefault(require("../../pluginId"));
var Initializer = function (_a) {
    var updatePlugin = _a.updatePlugin;
    var ref = react_1.default.useRef();
    ref.current = updatePlugin;
    react_1.default.useEffect(function () {
        ref.current(pluginId_1.default, 'isReady', true);
    }, []);
    return null;
};
Initializer.propTypes = {
    updatePlugin: prop_types_1.default.func.isRequired,
};
exports.default = Initializer;
