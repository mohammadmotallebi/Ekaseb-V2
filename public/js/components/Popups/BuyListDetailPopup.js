"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var framework7_react_1 = require("framework7-react");
var react_1 = __importDefault(require("react"));
var fa_1 = __importDefault(require("../lang/fa"));
var Helper_1 = require("../Helper");
exports.default = function (props) {
    return (react_1.default.createElement(framework7_react_1.Popup, { className: 'buy_list_detail', swipeToClose: true }, react_1.default.createElement(framework7_react_1.Page, null, react_1.default.createElement(framework7_react_1.Navbar, { title: fa_1.default.detail }, react_1.default.createElement(framework7_react_1.NavRight, null, react_1.default.createElement(framework7_react_1.Link, { popupClose: true, iconF7: 'multiply_circle_fill' }))), react_1.default.createElement(framework7_react_1.Block, { strong: true, className: 'current-theme-color text-align-center' }, props.buy_detail_props.item_name), react_1.default.createElement(framework7_react_1.Card, { className: (props.buy_detail_props.status === '1') ? 'bg-green-light text-align-center' : 'bg-red-light text-align-center', content: (props.buy_detail_props.status === '1') ? fa_1.default.approved : fa_1.default.not_approved }), react_1.default.createElement(framework7_react_1.List, null, react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.bill_number, after: props.buy_detail_props.bill_number }), react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.buy_date, after: props.buy_detail_props.buy_date }), react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.shop_name, after: props.buy_detail_props.shop_name }), react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.price, after: (0, Helper_1.number)(props.buy_detail_props.price) }), react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.credit, after: (0, Helper_1.number)(props.buy_detail_props.credit) }), react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.item_code, after: props.buy_detail_props.item_code })))));
};
//# sourceMappingURL=BuyListDetailPopup.js.map