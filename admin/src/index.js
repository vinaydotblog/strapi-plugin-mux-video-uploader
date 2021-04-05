"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var package_json_1 = __importDefault(require("../../package.json"));
var pluginId_1 = __importDefault(require("./pluginId"));
var App_1 = __importDefault(require("./containers/App"));
var Initializer_1 = __importDefault(require("./containers/Initializer"));
var lifecycles_1 = __importDefault(require("./lifecycles"));
var translations_1 = __importDefault(require("./translations"));
var Settings_1 = __importDefault(require("./containers/Settings"));
exports.default = (function (strapi) {
    var pluginDescription = package_json_1.default.strapi.description || package_json_1.default.description;
    var icon = package_json_1.default.strapi.icon;
    var name = package_json_1.default.strapi.name;
    var menuSection = {
        id: pluginId_1.default,
        title: {
            id: pluginId_1.default + ".foo",
            defaultMessage: 'Mux Video Uploader',
        },
        links: [
            {
                title: 'General',
                to: strapi.settingsBaseURL + "/" + pluginId_1.default + "/general",
                name: 'General',
            }
        ],
    };
    var plugin = {
        blockerComponent: null,
        blockerComponentProps: {},
        description: pluginDescription,
        icon: icon,
        id: pluginId_1.default,
        initializer: Initializer_1.default,
        injectedComponents: [],
        isReady: false,
        // isRequired: pluginPkg.strapi.required || false,
        layout: null,
        lifecycles: lifecycles_1.default,
        mainComponent: App_1.default,
        name: name,
        preventComponentRendering: false,
        trads: translations_1.default,
        settings: {
            mainComponent: Settings_1.default,
            menuSection: menuSection,
        },
        menu: {
            pluginsSectionLinks: [
                {
                    destination: "/plugins/" + pluginId_1.default,
                    icon: icon,
                    label: {
                        id: pluginId_1.default + ".plugin.name",
                        defaultMessage: name,
                    },
                    name: name,
                    permissions: [
                    // Uncomment to set the permissions of the plugin here
                    // {
                    //   action: '', // the action name should be plugins::plugin-name.actionType
                    //   subject: null,
                    // },
                    ],
                },
            ],
        },
    };
    return strapi.registerPlugin(plugin);
});
