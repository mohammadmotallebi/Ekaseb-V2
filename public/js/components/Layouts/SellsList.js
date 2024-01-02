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
var SellListItemDetailPopup_1 = __importDefault(require("../Popups/SellListItemDetailPopup"));
var Helper_1 = require("../Helper");
var dv = (0, framework7_1.getDevice)();
exports.default = function () {
    var _a = (0, react_1.useState)([]), list = _a[0], setList = _a[1];
    var _b = (0, react_1.useState)([]), shops = _b[0], setShops = _b[1];
    var _c = (0, react_1.useState)(0), prices = _c[0], setPrices = _c[1];
    var _d = (0, react_1.useState)([]), sellListDetail = _d[0], setSellListDetail = _d[1];
    function getShopList() {
        framework7_1.request.json(framework7_react_1.f7.params.home + 'get-my-shops-name', function (data) {
            setShops(__spreadArray([], data, true));
        });
    }
    function renderList() {
        var sum = 0;
        framework7_react_1.f7.progressbar.show('white');
        framework7_1.request.json(framework7_react_1.f7.params.home + 'Shop/get-first-shop', function (firstShop) {
            (0, framework7_1.Dom7)('#s_id_g65653456').find('.item-after').html(firstShop.shop_name);
            framework7_1.request.json(framework7_react_1.f7.params.home + 'Shop/get-sell-list/' + firstShop.id, function (data) {
                setList(__spreadArray([], data, true));
                data.map(function (d) { return sum += parseInt(d.price * d.Sold); });
                setPrices((0, Helper_1.number)(sum));
                framework7_react_1.f7.progressbar.hide();
            });
        });
    }
    function getSearchedValue() {
        var sum = 0;
        var c = 0;
        for (var i = 0; i < framework7_react_1.f7.searchbar.get('.searchbar-list').$searchContainer[0].childNodes[0].childElementCount; i++) {
            if (!framework7_react_1.f7.searchbar.get('.searchbar-list').$searchContainer[0].getElementsByTagName('li').item(i).classList.contains('hidden-by-searchbar')) {
                sum += parseInt(framework7_react_1.f7.searchbar.get('.searchbar-list').searchContainer.getElementsByClassName('item-after')[i].innerText.replaceAll(',', '')
                    * parseInt(framework7_react_1.f7.searchbar.get('.searchbar-list').searchContainer.querySelectorAll('#sold .chip-media')[i].innerHTML));
                c++;
            }
        }
        setPrices((0, Helper_1.number)(sum));
    }
    return (react_1.default.createElement(framework7_react_1.Page, { noSwipeback: true, onPageInit: function () { return renderList(); }, onPageBeforeIn: function () { return getShopList(); } }, react_1.default.createElement(framework7_react_1.Navbar, { innerClass: 'current-theme-color', title: fa_1.default.sells }, react_1.default.createElement(framework7_react_1.Subnavbar, null, react_1.default.createElement(framework7_react_1.Searchbar, { className: "searchbar-list", searchContainer: "#sell-list", searchIn: ".item-title", backdrop: false, disableButton: false, placeholder: fa_1.default.item_search, onChange: function () { return getSearchedValue(); } }))), react_1.default.createElement(framework7_react_1.List, { mediaList: true, inset: true }, react_1.default.createElement(framework7_react_1.ListItem, { style: { borderBottom: '1px solid rgba(var(--f7-theme-color-rgb),0.15)', borderTop: '1px solid rgba(var(--f7-theme-color-rgb),0.15)' }, title: fa_1.default.form.shop_name, smartSelect: true, smartSelectParams: {
            openIn: 'sheet',
            closeOnSelect: true,
            scrollToSelectedItem: true,
            sheetCloseLinkText: [fa_1.default.close_icon],
            on: {
                close: function (e) {
                    setList([]);
                    var sum = 0;
                    framework7_react_1.f7.progressbar.show('white');
                    framework7_1.request.json(framework7_react_1.f7.params.home + 'Shop/get-sell-list/' + e.getValue(), function (data) {
                        setList(__spreadArray([], data, true));
                        data.map(function (d) { return sum += parseInt(d.price); });
                        setPrices((0, Helper_1.number)(sum));
                        framework7_react_1.f7.progressbar.hide();
                    });
                }
            }
        }, id: 's_id_g65653456' }, react_1.default.createElement("select", { name: "shop", id: 'shop_s65496798', className: 'text-align-right' }, shops.map(function (shop, index) { return react_1.default.createElement("option", { key: index, value: shop.id }, "  ", shop.shop_name, "  "); })))), react_1.default.createElement(framework7_react_1.List, { mediaList: true, inlineLabels: true, noHairlinesMd: true, id: 'sell-list', className: "search-list searchbar-found pb-2 list-item-custom" }, list.map(function (item, index) { return react_1.default.createElement(framework7_react_1.ListItem, { href: "#", key: item.id, title: item.item_name, onClick: function () { return setSellListDetail(item); }, popupOpen: ".item_detail", after: (0, Helper_1.number)(item.price), subtitle: [
            react_1.default.createElement(framework7_react_1.Chip, { id: 'sold', text: fa_1.default.sold, key: index + 1, className: 'margin-left-half', mediaBgColor: "blue", media: item.Sold }),
            react_1.default.createElement(framework7_react_1.Chip, { text: fa_1.default.remaining, key: index + 2, mediaBgColor: "green", className: 'margin-left-half', media: item.Remain }),
            react_1.default.createElement(framework7_react_1.Chip, { text: fa_1.default.not_approved, key: index + 3, mediaBgColor: "red", media: item.Approve }),
        ] }); })), react_1.default.createElement(framework7_react_1.Block, { strong: true, className: 'current-theme-color text-align-center', style: { position: 'fixed', width: '100%', bottom: 'var(--f7-toolbar-height)', margin: '0' } }, fa_1.default.price, " : ", prices, " ", fa_1.default.currency), react_1.default.createElement(SellListItemDetailPopup_1.default, { sell: sellListDetail })));
};
//# sourceMappingURL=SellsList.js.map