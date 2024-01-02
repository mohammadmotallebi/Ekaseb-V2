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
var framework7_react_1 = require("framework7-react");
var react_1 = __importStar(require("react"));
var fa_1 = __importDefault(require("../lang/fa"));
var framework7_1 = require("framework7");
var Helper_1 = require("../Helper");
exports.default = function (props) {
    var _a = (0, react_1.useState)([]), code_c8798546546555 = _a[0], setCode_c8798546546555 = _a[1];
    var role = (0, framework7_react_1.useStore)('role');
    var getCardList_f445449789877 = function (id) {
        {
            framework7_react_1.f7.$('#loader_l6546546544').show();
            var lists_v654984654 = '';
            framework7_1.request.json(framework7_react_1.f7.params.home + 'ShopItems/get-item-codes/' + id, function (fetchData) {
                setCode_c8798546546555(__spreadArray([], fetchData, true));
                framework7_react_1.f7.$('#loader_l6546546544').hide();
            });
        }
    };
    return (react_1.default.createElement(framework7_react_1.Popup, { className: 'item_detail', swipeToClose: true, onPopupOpened: function () { return getCardList_f445449789877(props.sell.unique_code); } }, react_1.default.createElement(framework7_react_1.Page, null, react_1.default.createElement(framework7_react_1.Navbar, { title: fa_1.default.detail }, react_1.default.createElement(framework7_react_1.NavRight, null, react_1.default.createElement(framework7_react_1.Link, { popupClose: true, iconF7: 'multiply_circle_fill' }))), react_1.default.createElement(framework7_react_1.Block, { strong: true, className: 'current-theme-color text-align-center', style: { fontWeight: '600', position: 'sticky', top: '0', zIndex: '200' } }, props.sell.item_name), react_1.default.createElement(framework7_react_1.List, null, react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.price, after: (0, Helper_1.number)(props.sell.price) }), react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.credit, after: (0, Helper_1.number)(props.sell.credit) }), react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.category, after: props.sell.item_category_name })), (role === 'shop_admin') ? (react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(framework7_react_1.BlockTitle, { medium: true }, fa_1.default.item_code_list), react_1.default.createElement(framework7_react_1.Block, { strong: true }, react_1.default.createElement(framework7_react_1.Col, { id: 'loader_l6546546544', className: "text-align-center margin-top" }, react_1.default.createElement(framework7_react_1.Preloader, { size: 42 })), react_1.default.createElement(framework7_react_1.List, null, code_c8798546546555.map(function (item, index) { return react_1.default.createElement(framework7_react_1.ListItem, { key: index, title: item.item_code, style: { fontSize: "15px" } }, react_1.default.createElement("div", { slot: "after-title", className: 'small text-primary mr-2' }, " ", item.buy_date, " "), react_1.default.createElement("div", { slot: "after" }, (item.status === 1) ?
        react_1.default.createElement(framework7_react_1.Icon, { f7: "checkmark_circle_fill" }) :
        react_1.default.createElement(framework7_react_1.Icon, { f7: "xmark_circle_fill" }))); }))))) : (''))));
};
//# sourceMappingURL=SellListItemDetailPopup.js.map