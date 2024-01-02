"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var framework7_react_1 = require("framework7-react");
var react_1 = __importDefault(require("react"));
var fa_jsx_1 = __importDefault(require("../lang/fa.jsx"));
var number = function (num) {
    return new Intl.NumberFormat().format(num);
};
exports.default = function (props) {
    return (react_1.default.createElement(framework7_react_1.Popup, { className: 'add-credit', swipeToClose: true }, react_1.default.createElement(framework7_react_1.Page, null, react_1.default.createElement(framework7_react_1.Navbar, { title: fa_jsx_1.default.add_credit }, react_1.default.createElement(framework7_react_1.NavRight, null, react_1.default.createElement(framework7_react_1.Link, { popupClose: true, iconF7: 'multiply_circle_fill' }))), react_1.default.createElement(framework7_react_1.Card, { content: ' برای افزایش اعتبار با پشتیبانی تماس بگیرید.', className: 'text-align-center' }))));
};
//# sourceMappingURL=AddCreditPopup.js.map