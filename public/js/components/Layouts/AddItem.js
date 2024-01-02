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
var fa_1 = __importDefault(require("../lang/fa"));
var framework7_react_1 = require("framework7-react");
var ItemDetailPopup_1 = __importDefault(require("../Popups/ItemDetailPopup"));
var framework7_1 = require("framework7");
var Helper_1 = require("../Helper");
var AddItemPopup_1 = __importDefault(require("../Popups/AddItemPopup"));
var store_1 = __importDefault(require("../store/store"));
var BeatLoader_1 = __importDefault(require("react-spinners/BeatLoader"));
var dv = (0, framework7_1.getDevice)();
exports.default = function (_a) {
    var f7router = _a.f7router;
    var _b = (0, react_1.useState)([]), shopSelect = _b[0], setShopSelect = _b[1];
    var _c = (0, react_1.useState)(), itemId = _c[0], setItemId = _c[1];
    var itemList = (0, framework7_react_1.useStore)('getItemDetail');
    var loading = (0, framework7_react_1.useStore)('loading');
    var _d = (0, react_1.useState)(), list = _d[0], setList = _d[1];
    var shopId = (0, framework7_react_1.useStore)('shopId');
    var initPage = (0, react_1.useCallback)(function () {
        framework7_1.request.json(framework7_react_1.f7.params.home + "get-my-shops-name", function (fetchData) {
            setShopSelect(fetchData);
            store_1.default.dispatch('setItemDetail', fetchData[0].id);
            (0, framework7_1.Dom7)("#s_id_g656534")
                .find(".item-after")
                .text(fetchData[0].shop_name);
            store_1.default.dispatch('setShopId', fetchData[0].id);
        });
        console.log(shopId);
    }, [shopSelect, shopId, itemList]);
    (0, react_1.useEffect)(function () {
        if (!loading) {
            (0, framework7_1.Dom7)("#add_item-fab").removeClass("disabled");
            (0, framework7_1.Dom7)("#add_item-fab").animate({
                bottom: 0,
            }, {
                duration: 300,
                easing: "ease-in-out",
            });
            store_1.default.dispatch("setLoading", false);
        }
    }, [loading, itemList.length]);
    return (react_1.default.createElement(framework7_react_1.Page, { onPageInit: initPage }, react_1.default.createElement(framework7_react_1.Navbar, { title: "\u0644\u06CC\u0633\u062A \u06A9\u0627\u0644\u0627", innerClass: 'current-theme-color' }, react_1.default.createElement(framework7_react_1.Subnavbar, { inner: false }, react_1.default.createElement(framework7_react_1.Searchbar, { searchContainer: ".search-items", searchIn: ".item-title", placeholder: fa_1.default.search }))), react_1.default.createElement(framework7_react_1.List, { inset: true }, react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.form.shop_name, smartSelect: true, smartSelectParams: {
            openIn: "popover",
            sheetCloseLinkText: fa_1.default.close_icon,
            closeOnSelect: true,
            on: {
                close: function (e) {
                    store_1.default.dispatch('setItemDetail', e.getValue());
                    store_1.default.dispatch('setShopId', e.getValue());
                },
            },
        }, id: "s_id_g656534" }, react_1.default.createElement("select", { name: "shop", id: "shop", className: "text-align-right" }, shopSelect.map(function (shop, index) { return (react_1.default.createElement("option", { key: index, i: index, value: shop.id }, " ", shop.shop_name, " ")); })))), react_1.default.createElement("div", { className: "text-align-center" }, react_1.default.createElement(BeatLoader_1.default, { color: "var(--f7-theme-color)", loading: loading })), react_1.default.createElement("div", { className: "list item-list search-items" }, react_1.default.createElement("ul", null, itemList.map(function (item) { return react_1.default.createElement("li", { key: item.id, className: "row no-gap", style: { borderBottom: '1px solid #ccc', margin: 0, alignItems: 'normal' } }, react_1.default.createElement("a", { onClick: function () {
            f7router.navigate("/item_detail_popup/", { props: { itemProps: item } });
            setItemId(item.id);
        }, className: "item-link col-70" }, react_1.default.createElement("div", { className: "item-content" }, react_1.default.createElement("div", { className: "item-inner" }, react_1.default.createElement("div", { className: "item-title-row" }, react_1.default.createElement("div", { className: "item-title" }, item.item_name), react_1.default.createElement("div", { slot: "after-title", className: "text-primary mr-1" }, "(", item.Remain, ")"), react_1.default.createElement("div", { className: "item-after" }, (0, Helper_1.number)(item.price)))))), react_1.default.createElement("a", { className: "col-15 custom-list_button link button-red_shadow", href: "/delete-item/" + item.id }, react_1.default.createElement("span", { className: "material-icons" }, "delete")), react_1.default.createElement("a", { className: "col-15 button-blue_shadow custom-list_button link", onClick: function () { return f7router.navigate("/edit-item/" + item.id, { props: { uc: item.unique_code, name: item.item_name, remain: item.Remain, price: item.price } }); } }, react_1.default.createElement("span", { className: "material-icons" }, "edit"))); }))), react_1.default.createElement(ItemDetailPopup_1.default, null), react_1.default.createElement(AddItemPopup_1.default, { edit: false }), react_1.default.createElement(framework7_react_1.Fab, { position: "center-bottom", slot: "fixed", id: "add_item-fab", className: "disabled", text: fa_1.default.buttons.add_item, style: { color: "var(--f7-fab-text-color)", bottom: '-200px' }, color: "var(--f7-theme-color)", onClick: function () {
            framework7_react_1.f7.popup.open(".add-item");
        } }, react_1.default.createElement(framework7_react_1.Icon, { ios: "f7:plus", aurora: "f7:plus", md: "material:add" }))));
};
//# sourceMappingURL=AddItem.js.map