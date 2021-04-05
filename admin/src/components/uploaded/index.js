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
var ContainerStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 3rem;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 3rem;\n"])));
var SvgStyled = styled_components_1.default.svg(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  vertical-align: bottom;\n"], ["\n  vertical-align: bottom;\n"])));
var RowStyled = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-bottom: 3rem;\n"], ["\n  margin-bottom: 3rem;\n"])));
var Uploaded = function (props) {
    return (react_1.default.createElement(ContainerStyled, null,
        react_1.default.createElement(RowStyled, null,
            react_1.default.createElement("h1", null,
                "Uploading Complete\u00A0",
                react_1.default.createElement(SvgStyled, { width: "24px", height: "24px", viewBox: "0 0 24 24", version: "1.1" },
                    react_1.default.createElement("defs", null,
                        react_1.default.createElement("rect", { id: "path-1", x: "270", y: "171", width: "1140", height: "196" }),
                        react_1.default.createElement("filter", { x: "-0.6%", y: "-2.6%", width: "101.2%", height: "107.1%", filterUnits: "objectBoundingBox", id: "filter-2" },
                            react_1.default.createElement("feOffset", { dx: "0", dy: "2", in: "SourceAlpha", result: "shadowOffsetOuter1" }),
                            react_1.default.createElement("feGaussianBlur", { stdDeviation: "2", in: "shadowOffsetOuter1", result: "shadowBlurOuter1" }),
                            react_1.default.createElement("feColorMatrix", { values: "0 0 0 0 0.890196078   0 0 0 0 0.91372549   0 0 0 0 0.952941176  0 0 0 1 0", type: "matrix", in: "shadowBlurOuter1" }))),
                    react_1.default.createElement("g", { id: "Strapi-Plugin", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                        react_1.default.createElement("g", { id: "Desktop---Upload-Complete", transform: "translate(-924.000000, -204.000000)" },
                            react_1.default.createElement("rect", { id: "Rectangle", fillOpacity: "0.05", x: "0", y: "0", width: "1440", height: "1024" }),
                            react_1.default.createElement("g", { id: "Rectangle" },
                                react_1.default.createElement("use", { fill: "black", fillOpacity: "1", filter: "url(#filter-2)" }),
                                react_1.default.createElement("use", { fill: "#FFFFFF", fillRule: "evenodd" })),
                            react_1.default.createElement("g", { id: "Group-2", transform: "translate(731.000000, 196.000000)", fillRule: "nonzero" },
                                react_1.default.createElement("g", { id: "fa-regular:check-circle", transform: "translate(193.000000, 8.000000)" },
                                    react_1.default.createElement("g", { id: "Icon", fill: "#6DBB1A" },
                                        react_1.default.createElement("path", { d: "M12,0.375 C5.57967187,0.375 0.375,5.57967187 0.375,12 C0.375,18.4203281 5.57967187,23.625 12,23.625 C18.4203281,23.625 23.625,18.4203281 23.625,12 C23.625,5.57967188 18.4203281,0.375 12,0.375 Z M12,2.625 C17.1811875,2.625 21.375,6.81801562 21.375,12 C21.375,17.1811875 17.1819844,21.375 12,21.375 C6.8188125,21.375 2.625,17.1819844 2.625,12 C2.625,6.8188125 6.81801562,2.625 12,2.625 M18.5720625,8.73126562 L17.5156875,7.66635937 C17.2969219,7.4458125 16.9407656,7.44435937 16.7202187,7.66317187 L10.0943437,14.2357969 L7.29159375,11.4103125 C7.07282812,11.1897656 6.71667187,11.1883125 6.496125,11.4070781 L5.43117187,12.4634531 C5.210625,12.6822188 5.20917188,13.038375 5.42798437,13.2589688 L9.68334375,17.5487813 C9.90210937,17.7693281 10.2582656,17.7707813 10.4788125,17.5519688 L18.5689219,9.52678125 C18.7894219,9.30796875 18.7908281,8.9518125 18.5720625,8.73126563 L18.5720625,8.73126562 Z", id: "Icon-Shape" })),
                                    react_1.default.createElement("rect", { id: "ViewBox", x: "0", y: "0", width: "24", height: "24" })))))))),
        react_1.default.createElement(RowStyled, null,
            react_1.default.createElement("p", null, "The file has been successfully uploaded to Mux and is now able to be referenced by other Content Types within Strapi.")),
        react_1.default.createElement(core_1.Button, { color: "primary", label: "Go Back", onClick: props.onReset })));
};
Uploaded.defaultProps = {
    onReset: function () { }
};
exports.default = Uploaded;
var templateObject_1, templateObject_2, templateObject_3;
