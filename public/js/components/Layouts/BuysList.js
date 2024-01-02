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
var BuyListDetailPopup_1 = __importDefault(require("../Popups/BuyListDetailPopup"));
var Helper_1 = require("../Helper");
exports.default = function () {
    var _a = (0, react_1.useState)([]), buyList = _a[0], setBuyList = _a[1];
    var _b = (0, react_1.useState)([]), buyListDetail = _b[0], setBuyListDetail = _b[1];
    var _c = (0, react_1.useState)(0), prices = _c[0], setPrices = _c[1];
    var _d = (0, react_1.useState)(0), count = _d[0], setCount = _d[1];
    (0, react_1.useEffect)(function () {
        framework7_react_1.f7.progressbar.show('white');
        framework7_1.request.json(framework7_react_1.f7.params.home + 'get-user-buy-list', function (data) {
            if (data.length < 1) {
                (0, framework7_1.Dom7)('div#buy_l654654987654163465').find('.card-content').html(fa_1.default.alert.you_dont_have_buy);
            }
            else {
                (0, framework7_1.Dom7)('div#buy_l654654987654163465').hide();
                setBuyList(__spreadArray([], data, true));
            }
            framework7_react_1.f7.progressbar.hide();
        });
    }, []);
    function getSearchedValue() {
        var sum = 0;
        var c = 0;
        for (var i = 0; i < framework7_react_1.f7.searchbar.get('.searchbar-list').$searchContainer[0].childNodes.length; i++) {
            if (!framework7_react_1.f7.searchbar.get('.searchbar-list').$searchContainer[0].getElementsByTagName('li').item(i).classList.contains('hidden-by-searchbar')) {
                sum += parseInt(framework7_react_1.f7.searchbar.get('.searchbar-list').searchContainer.getElementsByClassName('item-after')[i].innerText.replaceAll(',', ''));
                c++;
            }
        }
        setPrices((0, Helper_1.number)(sum));
        setCount(c);
    }
    return (react_1.default.createElement(framework7_react_1.Page, { noSwipeback: true, noToolbar: true, onPageAfterIn: function () { return getSearchedValue(); } }, react_1.default.createElement(framework7_react_1.Navbar, { innerClass: 'current-theme-color', title: fa_1.default.buy_list }, react_1.default.createElement(framework7_react_1.Subnavbar, null, react_1.default.createElement(framework7_react_1.Searchbar, { className: "searchbar-list", searchContainer: ".search-list", searchIn: ".item-title", backdrop: false, disableButton: false, placeholder: fa_1.default.item_search, onChange: function () { return getSearchedValue(); }, style: { margin: '0' } }))), react_1.default.createElement("div", { className: "card", id: 'buy_l654654987654163465' }, react_1.default.createElement("div", { className: "card-content  card-content-padding text-align-center" })), react_1.default.createElement(framework7_react_1.List, { inlineLabels: true, noHairlinesMd: true, id: 'sell-list', className: "search-list searchbar-found pb-2 pt-0", style: { marginTop: 'var(--f7-navbar-height)' } }, buyList.map(function (item) { return react_1.default.createElement(framework7_react_1.ListItem, { style: { fontSize: '14px' }, href: item.bill_number, key: item.bill_number, title: item.item_name, popupOpen: ".buy_list_detail", onClick: function () { return setBuyListDetail(item); } }, (item.status === '1') ?
        react_1.default.createElement(framework7_react_1.Icon, { f7: "checkmark_circle_fill", className: 'green-light', slot: 'media' })
        :
            react_1.default.createElement(framework7_react_1.Icon, { f7: "hourglass", className: 'red-light', slot: 'media' }), react_1.default.createElement("div", { slot: "after" }, " ", (0, Helper_1.number)(item.price)), react_1.default.createElement("div", { slot: "after-title", className: 'text-primary mr-1' }, " (", item.buy_date, ")"), react_1.default.createElement("div", { slot: "after-title", className: 'text-color-gray mr-5' }, " (", item.shop_name, ")")); })), react_1.default.createElement(framework7_react_1.Block, { strong: true, className: 'current-theme-color', style: { position: 'fixed', width: '100%', bottom: 'var(--f7-toolbar-height)', margin: '0' } }, react_1.default.createElement(framework7_react_1.Row, { className: 'text-align-center' }, react_1.default.createElement(framework7_react_1.Col, null, fa_1.default.price, " : ", prices, " ", fa_1.default.currency), react_1.default.createElement(framework7_react_1.Col, null, fa_1.default.count, " : ", count))), react_1.default.createElement(BuyListDetailPopup_1.default, { buy_detail_props: buyListDetail })));
};
//# sourceMappingURL=BuysList.js.map