"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function () { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var framework7_react_1 = require("framework7-react");
var fa_1 = __importDefault(require("../lang/fa"));
require("../../style.css");
var framework7_1 = require("framework7");
var Helper_1 = require("../Helper");
exports.default = function () {
    var _a = (0, react_1.useState)([]), data_d654654665 = _a[0], setData_a654654665 = _a[1];
    (0, react_1.useEffect)(function () {
        framework7_1.request.json(framework7_react_1.f7.params.home + 'get-user-theme', function (data) {
            setData_a654654665([data]);
        });
    }, []);
    var setDarktheme_f654654665 = function () {
        if ((0, framework7_1.Dom7)('body').hasClass('theme-dark')) {
            (0, Helper_1.postData)(framework7_react_1.f7.params.home + 'user-darktheme', { darktheme: 0 }, 'PATCH')
                .then(function (userData) {
                (0, framework7_1.Dom7)('body').removeClass('theme-dark');
            });
        }
        if (!(0, framework7_1.Dom7)('body').hasClass('theme-dark')) {
            (0, Helper_1.postData)(framework7_react_1.f7.params.home + 'user-darktheme', { darktheme: 1 }, 'PATCH')
                .then(function (userData) {
                (0, framework7_1.Dom7)('body').addClass('theme-dark');
            });
        }
    };
    var setAutoDarktheme_f654654665 = function () {
        framework7_1.request.json(framework7_react_1.f7.params.home + 'get-user-theme', function (data) {
            if (data.auto_darktheme === '0') {
                (0, Helper_1.postData)(framework7_react_1.f7.params.home + 'user-auto_darktheme', { auto_darktheme: '1' }, 'PATCH')
                    .then(function (userData) {
                    framework7_react_1.f7.enableAutoDarkTheme();
                });
            }
            else {
                (0, Helper_1.postData)(framework7_react_1.f7.params.home + 'user-auto_darktheme', { auto_darktheme: '0' }, 'PATCH')
                    .then(function (userData) {
                    framework7_react_1.f7.disableAutoDarkTheme();
                });
            }
        });
    };
    return (react_1.default.createElement(framework7_react_1.Page, { noNavbar: false, noToolbar: true }, react_1.default.createElement(framework7_react_1.Navbar, { backLinkForce: true, innerClass: 'current-theme-color' }, react_1.default.createElement("div", { className: "left" }, react_1.default.createElement("a", { href: '/menu', className: "link icon-only" }, react_1.default.createElement("i", { className: "icon icon-back text-color-white" }))), react_1.default.createElement("div", { className: "title" }, fa_1.default.menu.theme), react_1.default.createElement(framework7_react_1.NavRight, null)), data_d654654665.map(function (item, index) { return react_1.default.createElement(framework7_react_1.List, { key: index }, react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.form.color_theme, smartSelect: true, smartSelectParams: {
            openIn: 'sheet',
            closeOnSelect: true,
            scrollToSelectedItem: true,
            sheetCloseLinkText: [fa_1.default.close_icon],
            on: {
                close: function (e) {
                    framework7_1.request.json(framework7_react_1.f7.params.home + 'get-user-theme', function (data) {
                        (0, Helper_1.postData)(framework7_react_1.f7.params.home + 'user-change-theme', { default_theme: e.getValue() }, 'PATCH')
                            .then(function (userData) {
                            (0, framework7_1.Dom7)('body').removeClass('color-theme-' + data.default_theme);
                            (0, framework7_1.Dom7)('body').addClass('color-theme-' + e.getValue());
                        });
                    });
                }
            }
        } }, react_1.default.createElement("select", { name: "default_theme", defaultValue: item.default_theme }, react_1.default.createElement("option", { value: "green" }, "\u0633\u0628\u0632 \u0631\u0648\u0634\u0646"), react_1.default.createElement("option", { value: "teal" }, "\u0633\u0628\u0632 \u062A\u06CC\u0631\u0647"), react_1.default.createElement("option", { value: "lime" }, "\u0644\u06CC\u0645\u0648\u0626\u06CC"), react_1.default.createElement("option", { value: "pink" }, "\u0635\u0648\u0631\u062A\u06CC"), react_1.default.createElement("option", { value: "blue" }, "\u0622\u0628\u06CC"), react_1.default.createElement("option", { value: "lightblue" }, "\u0622\u0628\u06CC \u0631\u0648\u0634\u0646"), react_1.default.createElement("option", { value: "darkblue" }, "\u06A9\u0627\u0631\u0628\u0646\u06CC"), react_1.default.createElement("option", { value: "red" }, "\u0642\u0631\u0645\u0632"), react_1.default.createElement("option", { value: "darkred" }, "\u0632\u0631\u0634\u06A9\u06CC"), react_1.default.createElement("option", { value: "deeporange" }, "\u0646\u0627\u0631\u0646\u062C\u06CC \u062A\u06CC\u0631\u0647"), react_1.default.createElement("option", { value: "orange" }, "\u0646\u0627\u0631\u0646\u062C\u06CC \u0631\u0648\u0634\u0646"), react_1.default.createElement("option", { value: "deeppurple" }, "\u0628\u0646\u0641\u0634 \u062A\u06CC\u0631\u0647"), react_1.default.createElement("option", { value: "purple" }, "\u0628\u0646\u0641\u0634 \u0631\u0648\u0634\u0646"), react_1.default.createElement("option", { value: "customgray" }, "\u062E\u0627\u06A9\u0633\u062A\u0631\u06CC"))), react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.form.darktheme }, (item.darktheme === '1') ?
        react_1.default.createElement(framework7_react_1.Toggle, { id: 'darktheme_d654654665', defaultChecked: true, onChange: function () { return setDarktheme_f654654665(); } })
        :
            react_1.default.createElement(framework7_react_1.Toggle, { id: 'darktheme_d654654665', onChange: function () { return setDarktheme_f654654665(); } })), react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.form.auto_darktheme }, (item.auto_darktheme === '1') ?
        react_1.default.createElement(framework7_react_1.Toggle, { id: 'auto_darktheme_a654654665', defaultChecked: true, onChange: function () { return setAutoDarktheme_f654654665(); } })
        :
            react_1.default.createElement(framework7_react_1.Toggle, { id: 'auto_darktheme_a654654665', onChange: function () { return setAutoDarktheme_f654654665(); } }))); })));
};
//# sourceMappingURL=EditTheme.js.map