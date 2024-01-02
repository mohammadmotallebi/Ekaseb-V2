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
var ItemDetailPopup_1 = __importDefault(require("../Popups/ItemDetailPopup"));
var framework7_1 = require("framework7");
var dv = (0, framework7_1.getDevice)();
var Helper_1 = require("../Helper");
function ShopDetails(props) {
    console.log(props);
    var favShop = (0, framework7_react_1.useStore)('getFavShop');
    var _a = (0, react_1.useState)(), sd = _a[0], setSd = _a[1];
    var loadItems = function () {
        framework7_1.request.json(framework7_react_1.f7.params.home + 'Shops/get-shopItems-data/' + props.data.id, function (fetchData) {
            framework7_react_1.f7.store.dispatch('setFavShop', props.data.id);
            setSd(fetchData.map(function (item) { return react_1.default.createElement(framework7_react_1.ListItem, { href: item.id, key: item.id, title: item.item_name, onClick: framework7_react_1.f7.store.dispatch('setItemDetail', item), popupOpen: ".item_detail" }, react_1.default.createElement("div", { slot: "after" }, (0, Helper_1.number)(item.price)), react_1.default.createElement("div", { slot: "after-title", className: 'text-primary mr-1' }, " (", item.Remain, ")")); }));
        });
    };
    var addToFav = function () {
        if (favShop > 0) {
            framework7_1.request.post(framework7_react_1.f7.params.home + 'Shop/delete-from-fav', { 'id': props.data.id }, function () {
                framework7_react_1.f7.store.dispatch('setFavShop', 0);
                framework7_react_1.f7.toast.create({
                    icon: '<i class="f7-icons">heart</i>',
                    text: fa_1.default.alert.not_fav,
                    position: 'center',
                    closeTimeout: 2000,
                }).open();
                framework7_react_1.f7.$('body').find('i#fav-f654987465465' + props.data.id).text('heart');
            });
        }
        else {
            (0, Helper_1.postData)(framework7_react_1.f7.params.home + 'Shop/add-to-fav', { 'id': props.data.id })
                .then(function (res) {
                framework7_react_1.f7.store.dispatch('setFavShop', 1);
                framework7_react_1.f7.toast.create({
                    icon: '<i class="f7-icons">heart_fill</i>',
                    text: fa_1.default.alert.fav,
                    position: 'center',
                    closeTimeout: 2000,
                }).open();
                framework7_react_1.f7.$('body').find('#fav-f654987465465' + props.data.id).text('heart_fill');
            });
        }
    };
    return (react_1.default.createElement(framework7_react_1.Popup, { className: "shop-details", swipeToClose: true, onPopupOpened: loadItems }, react_1.default.createElement(framework7_react_1.Navbar, { title: fa_1.default.shop_details }, react_1.default.createElement(framework7_react_1.NavRight, null, react_1.default.createElement(framework7_react_1.Link, { popupClose: true, iconF7: 'multiply_circle_fill' }))), react_1.default.createElement(framework7_react_1.Page, { noSwipeback: true, noNavbar: false, noToolbar: true, id: 'shop-details' }, react_1.default.createElement(framework7_react_1.List, { className: "search-list searchbar-found" }, react_1.default.createElement(framework7_react_1.ListItem, { href: '#', title: fa_1.default.shop_name, medialist: true, onClick: addToFav }, react_1.default.createElement("div", { className: 'item-after text-align-right' }, props.data.shop_name), react_1.default.createElement("div", { slot: 'before-title' }, react_1.default.createElement("i", { className: 'f7-icons theme-font-color' }, (favShop > 0) ? 'heart_fill' : 'heart'))), react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.shop_number, medialist: true }, react_1.default.createElement("div", { className: 'item-after text-align-right' }, props.data.shop_number)), react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.tel, medialist: true }, react_1.default.createElement("div", { className: 'item-after text-align-right' }, react_1.default.createElement(framework7_react_1.Link, { external: true, href: 'tel:' + props.data.tel }, props.data.tel))), react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.mobile, medialist: true }, react_1.default.createElement("div", { className: 'item-after text-align-right' }, react_1.default.createElement(framework7_react_1.Link, { external: true, href: 'tel:' + props.data.mobile }, props.data.mobile))), react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.email, medialist: true }, react_1.default.createElement("div", { className: 'item-after text-align-right' }, react_1.default.createElement(framework7_react_1.Link, { external: true, href: 'mailto:' + props.data.email }, props.data.email))), react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.website, medialist: true }, react_1.default.createElement("div", { className: 'item-after text-align-right' }, (props.data.website) ?
        react_1.default.createElement(framework7_react_1.Link, { href: 'http://' + props.data.website, external: true, target: '_blank' }, props.data.website) : '---')), react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.manager, medialist: true }, react_1.default.createElement("div", { className: 'item-after text-align-right' }, props.data.shop_manager))), react_1.default.createElement(framework7_react_1.Block, { strong: true }, react_1.default.createElement(framework7_react_1.Searchbar, { searchContainer: ".search-items", searchIn: ".item-title", disableButton: !dv.desktop, disableButton: !dv.ios, placeholder: fa_1.default.search, backdrop: false, spellcheck: true, style: { position: 'sticky', top: '0' } }), react_1.default.createElement(framework7_react_1.List, { mediaList: true, className: 'search-items' }, sd)), react_1.default.createElement(ItemDetailPopup_1.default, null))));
}
exports.default = ShopDetails;
//# sourceMappingURL=ShopDetails.js.map