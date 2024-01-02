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
var store_1 = __importDefault(require("../store/store"));
var Slider_1 = __importDefault(require("../Layouts/Slider"));
var BeatLoader_1 = __importDefault(require("react-spinners/BeatLoader"));
var dv = (0, framework7_1.getDevice)();
exports.default = function (_a) {
    var itemProps = _a.itemProps;
    if (!itemProps) {
        return false;
    }
    var _b = (0, react_1.useState)([]), images = _b[0], setImages = _b[1];
    var items = (0, framework7_react_1.useStore)("codes");
    var _c = (0, react_1.useState)(true), loading = _c[0], setLoading = _c[1];
    var _d = (0, react_1.useState)({
        items: [],
    }), vlData = _d[0], setVlData = _d[1];
    (0, react_1.useEffect)(function () {
        (0, framework7_1.request)({
            url: "ShopItems/get-item-codes/" + itemProps.unique_code,
            dataType: "json",
            contentType: "application/json",
            async: true,
            beforeCreate: function (xhr, pa) {
            },
            beforeOpen: function (xhr, parameters) {
            },
            beforeSend: function (xhr) {
            },
            error: function (xhr, status, message) {
                console.log(message);
            },
            success: function (data, status, xhr) {
                store_1.default.dispatch("setCodes", data);
                renderList(data);
            },
            complete: function (xhr, status) {
                setLoading(false);
            },
            statusCode: {},
        });
    }, [itemProps.unique_code]);
    (0, react_1.useEffect)(function () {
        (0, Helper_1.postData)(framework7_react_1.f7.params.home + "ShopItems/get-item-images", {
            unique_code: itemProps.unique_code,
        })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            if (data.length > 0) {
                setImages(__spreadArray([], data, true));
            }
            else {
                framework7_react_1.f7.notification
                    .create({
                    subtitle: [fa_1.default.alert.not_image], closeTimeout: 2000, closeOnClick: true,
                })
                    .open();
            }
        });
    }, []);
    var renderList = function (items) {
        framework7_react_1.f7.virtualList.create({
            el: framework7_react_1.f7.popup.get('.item_detail').$el.find('.virtual-list'),
            items: items,
            on: {
                itemBeforeInsert: function (virtualList, fragment) {
                    framework7_react_1.f7.progressbar.show();
                },
                itemsAfterInsert: function (virtualList, fragment) {
                    framework7_react_1.f7.progressbar.hide();
                }
            },
            renderItem: function (item) {
                return "\n          <li>\n            <a href=\"#\" class=\"item-content\">\n              <div class=\"item-inner\">\n                <div class=\"item-title-row\">\n                  <div class=\"item-title\">".concat(item.item_code, "</div>\n                  <div class=\"item-after\"><i class=\"f7-icons\">").concat(item.icon, "</i></div>\n                </div>\n                \n                <div class=\"item-subtitle small-5 text-color-gray\">\n                                    ").concat(item.buy_date, "\n                                </div>\n              </div>\n            </a>\n          </li>");
            },
            height: framework7_react_1.theme.ios ? 63 : (framework7_react_1.theme.md ? 73 : 77),
        });
    };
    return (react_1.default.createElement(framework7_react_1.Popup, { className: "item_detail", swipeToClose: true }, react_1.default.createElement(framework7_react_1.Page, null, react_1.default.createElement(framework7_react_1.Navbar, { title: fa_1.default.detail }, react_1.default.createElement(framework7_react_1.NavRight, null, react_1.default.createElement(framework7_react_1.Link, { popupClose: true, iconF7: "multiply_circle_fill" }))), react_1.default.createElement(framework7_react_1.Block, { strong: true, className: "current-theme-color text-align-center", style: { fontWeight: "600", position: "sticky", top: "0", zIndex: "200" } }, itemProps.item_name), react_1.default.createElement(framework7_react_1.Block, { style: { margin: "5px 0" } }, react_1.default.createElement(framework7_react_1.Swiper, { spaceBetween: 5, slidesPerView: 3, scrollbar: true, zoom: true }, react_1.default.createElement(framework7_react_1.SwiperSlide, null, react_1.default.createElement(framework7_react_1.Block, { inset: true, strong: true, className: "col mt-0 mb-0 ml-0 mr-0 pastel-orange-01 text-align-center", style: { minHeight: '120px', maxHeight: '150px', border: '1px solid #ae6706' } }, react_1.default.createElement(framework7_react_1.BlockHeader, { className: "text-align-center", style: { borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#ae6706", } }, fa_1.default.supplier), itemProps.item_supplier ? (0, Helper_1.limitString)(itemProps.item_supplier) : '---')), react_1.default.createElement(framework7_react_1.SwiperSlide, null, react_1.default.createElement(framework7_react_1.Block, { inset: true, strong: true, className: "col mt-0 mb-0 ml-0 mr-0 pastel-orange-01 text-align-center", style: { minHeight: '120px', maxHeight: '150px', border: '1px solid #ae6706' } }, react_1.default.createElement(framework7_react_1.BlockHeader, { className: "text-align-center", style: { borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#ae6706", } }, fa_1.default.category), itemProps.item_category ? (0, Helper_1.limitString)(itemProps.item_category) : '---')), react_1.default.createElement(framework7_react_1.SwiperSlide, null, react_1.default.createElement(framework7_react_1.Block, { inset: true, strong: true, className: "col mt-0 mb-0 ml-0 mr-0 pastel-orange-01 text-align-center", style: { minHeight: '120px', maxHeight: '150px', border: '1px solid #ae6706' } }, react_1.default.createElement(framework7_react_1.BlockHeader, { className: "text-align-center", style: { borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#ae6706", } }, fa_1.default.type), itemProps.item_type ? (0, Helper_1.limitString)(itemProps.item_type) : '---')), react_1.default.createElement(framework7_react_1.SwiperSlide, null, react_1.default.createElement(framework7_react_1.Block, { inset: true, strong: true, className: "col mt-0 mb-0 ml-0 mr-0 pastel-orange-01 text-align-center", style: { minHeight: '120px', maxHeight: '150px', border: '1px solid #ae6706' } }, react_1.default.createElement(framework7_react_1.BlockHeader, { className: "text-align-center", style: { borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#ae6706", } }, fa_1.default.model), itemProps.item_model ? (0, Helper_1.limitString)(itemProps.item_model) : '---')), react_1.default.createElement(framework7_react_1.SwiperSlide, null, react_1.default.createElement(framework7_react_1.Block, { inset: true, strong: true, className: "col mt-0 mb-0 ml-0 mr-0 pastel-orange-01 text-align-center", style: { minHeight: '120px', maxHeight: '150px', border: '1px solid #ae6706' } }, react_1.default.createElement(framework7_react_1.BlockHeader, { className: "text-align-center", style: { borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#ae6706", } }, fa_1.default.size), itemProps.item_size ? (0, Helper_1.limitString)(itemProps.item_size) : '---')), react_1.default.createElement(framework7_react_1.SwiperSlide, null, react_1.default.createElement(framework7_react_1.Block, { inset: true, strong: true, className: "col mt-0 mb-0 ml-0 mr-0 pastel-orange-01 text-align-center", style: { minHeight: '120px', maxHeight: '150px' } }, react_1.default.createElement(framework7_react_1.BlockHeader, { className: "text-align-center", style: { borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#ae6706", } }, fa_1.default.color), itemProps.item_color ? (0, Helper_1.limitString)(itemProps.item_color) : '---')))), react_1.default.createElement(framework7_react_1.Block, { className: "row text-align-center", style: { margin: "5px 0" } }, react_1.default.createElement(framework7_react_1.Block, { inset: true, strong: true, className: "col mt-0 mb-0 ml-0 mr-0 pastel-green-01", style: { border: "1px solid rgb(35 136 18 / 47%)" } }, react_1.default.createElement(framework7_react_1.BlockHeader, { className: "text-align-center", style: { borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#238812", } }, fa_1.default.price), (0, Helper_1.number)(itemProps.price)), react_1.default.createElement(framework7_react_1.Block, { inset: true, strong: true, className: "col mt-0 mb-0 ml-1 mr-1 pastel-green-01", style: { border: "1px solid rgb(35 136 18 / 47%)" } }, react_1.default.createElement(framework7_react_1.BlockHeader, { className: "text-align-center", style: { borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#238812", } }, fa_1.default.cashless_score), (0, Helper_1.number)(itemProps.score)), react_1.default.createElement(framework7_react_1.Block, { inset: true, strong: true, className: "col mt-0 mb-0 ml-0 mr-0 pastel-green-01", style: { border: "1px solid rgb(35 136 18 / 47%)" } }, react_1.default.createElement(framework7_react_1.BlockHeader, { className: "text-align-center", style: { borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#238812", } }, fa_1.default.credit), (0, Helper_1.number)(itemProps.credit))), react_1.default.createElement(framework7_react_1.Block, { className: "row text-align-center", style: { margin: "5px 0" } }, react_1.default.createElement(framework7_react_1.Block, { inset: true, strong: true, className: "col mt-0 mb-0 ml-0 mr-0 pastel-blue-01", style: { border: "1px solid rgb(2 2 94 / 49%)" } }, react_1.default.createElement(framework7_react_1.BlockHeader, { className: "text-align-center", style: { borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#0a4d9e", } }, fa_1.default.total_item), itemProps.TotalItem), react_1.default.createElement(framework7_react_1.Block, { inset: true, strong: true, className: "col mt-0 mb-0 ml-1 mr-1 pastel-blue-01", style: { border: "1px solid rgb(2 2 94 / 49%)" } }, react_1.default.createElement(framework7_react_1.BlockHeader, { className: "text-align-center", style: { borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#0a4d9e", } }, fa_1.default.total_sell), itemProps.Sold), react_1.default.createElement(framework7_react_1.Block, { inset: true, strong: true, className: "col mt-0 mb-0 ml-0 mr-0 pastel-blue-01", style: { border: "1px solid rgb(2 2 94 / 49%)" } }, react_1.default.createElement(framework7_react_1.BlockHeader, { className: "text-align-center", style: { borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#0a4d9e", } }, fa_1.default.remaining), itemProps.Remain)), react_1.default.createElement(framework7_react_1.List, null, react_1.default.createElement(framework7_react_1.ListItem, { link: "#", id: "image_show", onClick: function () { return framework7_react_1.f7.popup.open('.slider-popup'); }, title: fa_1.default.buttons.show_images }, react_1.default.createElement(framework7_react_1.Icon, { slot: "after", f7: "photo_fill_on_rectangle_fill" }))), react_1.default.createElement(Slider_1.default, { images: images, pagination: true, navigation: true, scrollbar: true, zoom: true, dir: 'ltr', effect: "creative", creativeEffect: {
            prev: {
                shadow: true,
                translate: [0, 0, -400],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        } }), react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(framework7_react_1.BlockTitle, { medium: true }), react_1.default.createElement("div", { className: "list virtual-list media-list searchbar-found" }), react_1.default.createElement("div", { className: "text-align-center" }, react_1.default.createElement(BeatLoader_1.default, { color: "var(--f7-theme-color)", loading: loading }))), react_1.default.createElement(framework7_react_1.Fab, { position: "right-bottom", slot: "fixed", id: "go_top", style: { color: "var(--f7-fab-text-color)", bottom: '-200px' }, color: "var(--f7-theme-color)", onClick: function () {
            framework7_react_1.f7.virtualList.get(".virtual-list").scrollToItem(1);
        } }, react_1.default.createElement(framework7_react_1.Icon, { f7: 'arrow_up' })))));
};
//# sourceMappingURL=ItemDetailPopup.js.map