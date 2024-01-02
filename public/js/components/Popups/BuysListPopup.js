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
var framework7_react_1 = require("framework7-react");
var react_1 = __importStar(require("react"));
var fa_1 = __importDefault(require("../lang/fa"));
var framework7_1 = require("framework7");
var Helper_1 = require("../Helper");
exports.default = function () {
    var _a = (0, react_1.useState)([]), buysList = _a[0], setBuysList = _a[1];
    var _b = (0, react_1.useState)(''), noData = _b[0], setNoData = _b[1];
    var handleBuysList = function () {
        framework7_react_1.f7.preloader.show();
        framework7_1.request.json(framework7_react_1.f7.params.home + 'get-home-data', function (fetchData) {
            if (fetchData) {
                setBuysList(fetchData.data.report);
                framework7_react_1.f7.preloader.hide();
                if (fetchData.data.report.length < 1) {
                    setNoData("<div className=\"card\">\n                            <div className=\"card-content  card-content-padding text-align-center\">\n                                {fa.alert.not_buy}\n                            </div>\n                        </div>");
                }
            }
            else {
                framework7_react_1.f7.preloader.hide();
                framework7_react_1.f7.popup.close();
                framework7_react_1.f7.dialog.alert('error');
            }
        });
    };
    return (react_1.default.createElement(framework7_react_1.Popup, { name: 'l', className: "buy-list", swipeToClose: true, onPopupOpen: handleBuysList }, react_1.default.createElement(framework7_react_1.Page, null, react_1.default.createElement(framework7_react_1.Navbar, { title: fa_1.default.buys }, react_1.default.createElement(framework7_react_1.NavRight, null, react_1.default.createElement(framework7_react_1.Link, { popupClose: true, iconF7: 'multiply_circle_fill' }))), noData, react_1.default.createElement(framework7_react_1.List, { mediaList: true }, buysList.map(function (buy) { return react_1.default.createElement(framework7_react_1.ListItem, { key: buy.bitem_id }, react_1.default.createElement("div", { className: "item-title-row" }, react_1.default.createElement("div", { className: "item-title" }, react_1.default.createElement("div", null, react_1.default.createElement(framework7_react_1.Icon, { f7: 'arrowtriangle_left_fill' }), " ", buy.item_name, " ", react_1.default.createElement("span", { className: "small text-primary" }, "(", buy.buy_date, ")"))), react_1.default.createElement("div", { className: "item-after" }, react_1.default.createElement("span", null, (0, Helper_1.number)(buy.price), " ", react_1.default.createElement(framework7_react_1.Icon, { f7: 'money_dollar' })))), react_1.default.createElement("div", { className: 'item-subtitle' }, react_1.default.createElement(framework7_react_1.Icon, { f7: 'cart' }), " ", buy.shop_name), react_1.default.createElement("div", { className: 'item-text', style: { color: 'rgb(11 142 0 / 71%)' } }, buy.credit, " ", (buy.credit) ?
        react_1.default.createElement(framework7_react_1.Icon, { f7: 'gift' }) : '')); })))));
};
//# sourceMappingURL=BuysListPopup.js.map