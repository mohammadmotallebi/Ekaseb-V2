"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var framework7_1 = require("framework7");
var fa_1 = __importDefault(require("../lang/fa"));
require("../../style.css");
exports.default = function (props) {
    var _a = (0, react_1.useState)(), userFullName = _a[0], setUserFullName = _a[1];
    var detail = (0, framework7_react_1.useStore)('detail');
    var isLoading = (0, framework7_react_1.useStore)('loading');
    var hasError = (0, framework7_react_1.useStore)('error');
    (0, react_1.useEffect)(function () {
        framework7_react_1.f7.store.dispatch('getUserDetail');
    }, []);
    (0, react_1.useEffect)(function () {
        if (isLoading) {
            setUserFullName('');
        }
        else if (hasError) {
            setUserFullName('---');
            framework7_react_1.f7.notification.create({
                icon: '<i class="f7-icons">checkmark_circle</i>',
                subtitle: [fa_1.default.alert.loading_error],
                closeTimeout: 3000,
                closeOnClick: true,
                cssClass: 'danger',
            }).open();
        }
        else {
            setUserFullName((detail.name !== '' || detail.family !== '') ? detail.name + ' ' + detail.family : detail.mobile);
        }
        framework7_react_1.f7.routes.find(function (_a) {
            var name = _a.name;
            return name === 'profile';
        }).options.props.detail = detail;
    }, [isLoading]);
    (0, react_1.useEffect)(function () {
        if (detail.city > 0) {
            framework7_1.request.json("".concat(framework7_react_1.f7.params.home, "get-city-list"), function (cities) {
                framework7_react_1.f7.routes.find(function (_a) {
                    var name = _a.name;
                    return name === 'profile';
                }).options.props.cities = __spreadArray([], cities, true);
                framework7_1.request.json("".concat(framework7_react_1.f7.params.home, "get-state-list/").concat(detail.city), function (states) {
                    framework7_react_1.f7.routes.find(function (_a) {
                        var name = _a.name;
                        return name === 'profile';
                    }).options.props.states = __spreadArray([], states, true);
                });
            });
        }
    }, [detail.city]);
    return (react_1.default.createElement(framework7_react_1.Page, { noToolbar: false, noSwipeback: true }, react_1.default.createElement(framework7_react_1.Navbar, { innerClass: 'current-theme-color', title: fa_1.default.menu.menu }), react_1.default.createElement(framework7_react_1.List, null, react_1.default.createElement(framework7_react_1.ListItem, { link: '/edit-profile', title: userFullName, className: 'text-align-center' }, react_1.default.createElement("img", { slot: "media", src: (detail.user_pic) ? detail.user_pic : 'img/avatar.png', className: 'img-profile' })), react_1.default.createElement(framework7_react_1.ListItem, { link: '/fav-shops', title: fa_1.default.menu.fav_shop }, react_1.default.createElement(framework7_react_1.Icon, { style: { color: 'var(--f7-theme-color)' }, slot: "media", f7: 'suit_heart' })), react_1.default.createElement(framework7_react_1.ListItem, { href: '/theme', title: fa_1.default.menu.theme }, react_1.default.createElement(framework7_react_1.Icon, { style: { color: 'var(--f7-theme-color)' }, slot: "media", f7: 'paintbrush' })), react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.menu.reports }, react_1.default.createElement(framework7_react_1.Icon, { style: { color: 'var(--f7-theme-color)' }, slot: "media", f7: 'doc_chart' })), react_1.default.createElement(framework7_react_1.ListItem, { link: '/edit-security', title: fa_1.default.menu.security }, react_1.default.createElement(framework7_react_1.Icon, { style: { color: 'var(--f7-theme-color)' }, slot: "media", f7: 'lock' })), react_1.default.createElement(framework7_react_1.ListItem, { href: '/logout', external: true, title: fa_1.default.menu.logout }, react_1.default.createElement(framework7_react_1.Icon, { style: { color: 'var(--f7-theme-color)' }, slot: "media", f7: 'square_arrow_right' })))));
};
//# sourceMappingURL=Menu.js.map