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
var fa_1 = __importDefault(require("../lang/fa"));
require("../../style.css");
var ShopDetails_1 = __importDefault(require("./ShopDetails"));
var framework7_1 = require("framework7");
var dv = (0, framework7_1.getDevice)();
function Shops(props) {
    var _a = (0, react_1.useState)([]), shopsDetails = _a[0], setShopsDetails = _a[1];
    var _b = (0, react_1.useState)(""), menu = _b[0], setMenu = _b[1];
    var _c = (0, react_1.useState)({}), shopDetail = _c[0], setShopDetail = _c[1];
    (0, react_1.useEffect)(function () {
        framework7_react_1.f7.store.dispatch("setJsonProps", {});
        setMenu(framework7_react_1.f7.views.main.router.currentRoute.name);
        framework7_react_1.f7.$(".back").click(function (e) {
            if (self.state.menu == "shops") {
                console.log("1");
                props.router.back(framework7_react_1.f7.params.home + "/home", { force: true });
            }
            else {
                console.log("0");
                props.router.back(framework7_react_1.f7.params.home + "/menu");
            }
        });
        framework7_react_1.f7.preloader.show();
        framework7_1.request.json(framework7_react_1.f7.params.home + "get-shops-data", function (fetchData) {
            if (fetchData) {
                setShopsDetails(__spreadArray([], fetchData, true));
                framework7_react_1.f7.preloader.hide();
            }
            else {
                framework7_react_1.f7.preloader.hide();
                framework7_react_1.f7.popup.close();
                framework7_react_1.f7.dialog.alert("error");
            }
        });
    }, [shopsDetails.id]);
    return (react_1.default.createElement(framework7_react_1.Page, { noSwipeback: true }, react_1.default.createElement(framework7_react_1.Navbar, { innerClass: "current-theme-color", title: fa_1.default.shops }, react_1.default.createElement(framework7_react_1.Subnavbar, null, react_1.default.createElement(framework7_react_1.Searchbar, { className: "searchbar-list", searchContainer: ".search-list", searchIn: ".item-title", disableButtonText: fa_1.default.close, disableButton: !dv.desktop, placeholder: fa_1.default.search }))), react_1.default.createElement(framework7_react_1.List, { className: "searchbar-not-found" }, react_1.default.createElement(framework7_react_1.ListItem, { title: "\u0641\u0631\u0648\u0634\u06AF\u0627\u0647\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F!" })), react_1.default.createElement(framework7_react_1.List, { className: "search-list searchbar-found", medialist: true }, shopsDetails.map(function (shop) { return (react_1.default.createElement(framework7_react_1.ListItem, { key: shop.id, title: shop.shop_name, href: "#", onClick: function () {
            setShopDetail(Object.assign({}, shop));
            framework7_react_1.f7.popup.open(".shop-details", true);
        } }, react_1.default.createElement("div", { slot: "media", className: "item-after" }, react_1.default.createElement("i", { id: "fav-f654987465465" + shop.id, className: shop.fav > 0 ? "f7-icons" : "f7-icons" }, shop.fav > 0 ? "heart_fill" : "heart")))); })), react_1.default.createElement(ShopDetails_1.default, { data: 0.58 })));
}
exports.default = Shops;
//# sourceMappingURL=Shops.js.map