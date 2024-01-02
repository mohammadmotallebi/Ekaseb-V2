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
var framework7_1 = require("framework7");
var fa_1 = __importDefault(require("../lang/fa"));
exports.default = function () {
    var _a = (0, react_1.useState)([]), sells = _a[0], setSells = _a[1];
    var _b = (0, react_1.useState)(), empty = _b[0], setEmpty = _b[1];
    (0, react_1.useEffect)(function () {
        framework7_react_1.f7.progressbar.show('white');
        framework7_1.request.json('confirm-sells', function (data) {
            setSells(data);
            if (data.length == 0) {
                setEmpty(react_1.default.createElement(framework7_react_1.Card, { className: 'text-align-center', content: fa_1.default.alert.not_items }));
            }
            framework7_react_1.f7.progressbar.hide();
        });
    }, []);
    var approve = function (id) {
        framework7_1.request.postJSON('approve-bill', { id: id })
            .then(function (res) {
            framework7_react_1.f7.store.state.countApBill = res.data;
            (0, framework7_1.Dom7)('#count').text(res.data);
        });
    };
    return (react_1.default.createElement(framework7_react_1.Page, { noSwipeback: true }, react_1.default.createElement(framework7_react_1.Navbar, { innerClass: 'current-theme-color', title: fa_1.default.approve_list }), react_1.default.createElement(framework7_react_1.List, { mediaList: true }, sells.map(function (sell) { return react_1.default.createElement(framework7_react_1.ListItem, { swipeout: true, key: sell.id, title: sell.item_name, after: Intl.NumberFormat().format(sell.price), subtitle: sell.buy_date, text: sell.item_code, onClick: function (e) { return console.log(e); } }, react_1.default.createElement(framework7_react_1.SwipeoutActions, { left: true }, react_1.default.createElement(framework7_react_1.SwipeoutButton, { color: "green", delete: true, onClick: function () { return approve(sell.id); } }, fa_1.default.buttons.approve))); })), empty));
};
//# sourceMappingURL=ConfirmSell.js.map