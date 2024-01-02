"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var FavShops = (function (_super) {
    __extends(FavShops, _super);
    function FavShops(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            shopsDetails: [],
            shopId: 0,
            shopFav: 0,
            menu: '',
            fav: 0,
            noData: ''
        };
        return _this;
    }
    FavShops.prototype.componentDidMount = function () {
        var self = this;
        self.setState({ menu: framework7_react_1.f7.views.main.router.currentRoute.name });
        framework7_react_1.f7.$('.back').click(function (e) {
            if (self.state.menu == 'shops') {
                console.log('1');
                self.props.router.back('/home', { force: true });
            }
            else {
                console.log('0');
                self.props.router.back('/menu');
            }
        });
        framework7_react_1.f7.preloader.show();
        framework7_1.request.json(framework7_react_1.f7.params.home + 'get-fav-shops-data', function (fetchData) {
            if (fetchData.length < 1) {
                self.setState({
                    noData: react_1.default.createElement("div", { className: "card" }, react_1.default.createElement("div", { className: "card-content  card-content-padding text-align-center" }, fa_1.default.alert.not_fav_shop))
                });
            }
            if (fetchData) {
                self.setState({ shopsDetails: __spreadArray([], fetchData, true) });
                framework7_react_1.f7.preloader.hide();
            }
            else {
                framework7_react_1.f7.preloader.hide();
                framework7_react_1.f7.popup.close();
                framework7_react_1.f7.dialog.alert('error');
            }
        });
    };
    FavShops.prototype.render = function () {
        return (react_1.default.createElement(framework7_react_1.Page, { noNavbar: false, noToolbar: true }, react_1.default.createElement(framework7_react_1.Navbar, { backLinkForce: true }, react_1.default.createElement("div", { className: "left" }, react_1.default.createElement("a", { href: '/menu', className: "link icon-only" }, react_1.default.createElement("i", { className: "icon icon-back" }))), react_1.default.createElement("div", { className: "title" }, fa_1.default.menu.fav_shop), react_1.default.createElement(framework7_react_1.NavRight, null, react_1.default.createElement(framework7_react_1.Link, { searchbarEnable: ".searchbar-list", iconIos: "f7:search", iconAurora: "f7:search", iconMd: "material:search" })), react_1.default.createElement(framework7_react_1.Searchbar, { className: "searchbar-list", searchContainer: ".search-list", searchIn: ".item-title", expandable: true, disableButton: !dv.desktop, placeholder: fa_1.default.search })), this.state.noData, react_1.default.createElement(framework7_react_1.List, { className: "search-list searchbar-found", medialist: true }, this.state.shopsDetails.map(function (shop) { return react_1.default.createElement(framework7_react_1.ListItem, { key: shop.id, title: shop.shop_name, href: '#', onClick: function () {
                framework7_react_1.f7.store.dispatch('setJsonProps', { id: shop.id, fav: shop.fav });
                framework7_react_1.f7.popup.open('.shop-details', true);
            } }, react_1.default.createElement("div", { slot: "media", className: 'item-after' }, react_1.default.createElement("i", { id: 'fav-f654987465465' + shop.id, className: 'f7-icons' }, "heart_fill"))); })), react_1.default.createElement(ShopDetails_1.default, null)));
    };
    return FavShops;
}(react_1.Component));
exports.default = FavShops;
//# sourceMappingURL=FavShops.js.map