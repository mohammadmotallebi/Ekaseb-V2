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
var framework7_1 = require("framework7");
var store_1 = __importDefault(require("../store/store"));
var Helper_1 = require("../Helper");
var DatePicker_1 = __importDefault(require("../Components/DatePicker"));
var BeatLoader_1 = __importDefault(require("react-spinners/BeatLoader"));
var EditItem = function (_a) {
    var uc = _a.uc, remain = _a.remain, name = _a.name, price = _a.price, f7router = _a.f7router;
    var _b = (0, react_1.useState)(), navbar = _b[0], setNavbar = _b[1];
    var itemCount = (0, framework7_react_1.useStore)('itemCount');
    var itemName = (0, framework7_react_1.useStore)('itemName');
    var percent = (0, framework7_react_1.useStore)('off_percent');
    var off = (0, framework7_react_1.useStore)('off_price');
    var start_date = (0, framework7_react_1.useStore)('start_date');
    var end_date = (0, framework7_react_1.useStore)('end_date');
    var images = (0, framework7_react_1.useStore)('image');
    var loading = (0, framework7_react_1.useStore)('loading');
    var data = (0, framework7_react_1.useStore)('itemEditData');
    var finalPrice = (0, framework7_react_1.useStore)('price');
    var _c = (0, react_1.useState)(), headPrice = _c[0], setHeadPrice = _c[1];
    var _d = (0, react_1.useState)(0), counter = _d[0], setCounter = _d[1];
    var dv = (0, framework7_1.getDevice)();
    (0, react_1.useEffect)(function () {
        if (dv.android) {
            setNavbar(react_1.default.createElement(framework7_react_1.Navbar, null, react_1.default.createElement(framework7_react_1.NavRight, null, react_1.default.createElement(framework7_react_1.Link, { popupClose: true, iconF7: "multiply_circle_fill" }), react_1.default.createElement(framework7_react_1.NavTitle, null, fa_1.default.edit_item)), react_1.default.createElement(framework7_react_1.NavLeft, null, react_1.default.createElement(framework7_react_1.Button, { id: 'submit', fill: true, text: fa_1.default.buttons.edit, onClick: submit }))));
        }
        if (dv.ios) {
            setNavbar(react_1.default.createElement(framework7_react_1.Navbar, null, react_1.default.createElement(framework7_react_1.NavLeft, null, react_1.default.createElement(framework7_react_1.Link, { popupClose: true, iconF7: "multiply_circle_fill" }), react_1.default.createElement(framework7_react_1.NavTitle, null, fa_1.default.edit_item)), react_1.default.createElement(framework7_react_1.NavRight, null, react_1.default.createElement(framework7_react_1.Button, { id: 'submit', fill: true, text: fa_1.default.buttons.edit, onClick: submit }))));
        }
    }, [dv.os]);
    var submit = function () {
        store_1.default.dispatch('setActiveDate', { s: (0, framework7_1.Dom7)('#start_date').val(), e: (0, framework7_1.Dom7)('#end_date').val() });
        store_1.default.dispatch('setItemEdit');
        f7router.navigate('/update-item/');
    };
    (0, react_1.useEffect)(function () {
        console.log(data);
    }, [counter]);
    var offCalHandlerPercent = function (e) {
        (0, Helper_1.inputNumber)(e);
        store_1.default.dispatch('setActivePercent', { data: e.target.value.replaceAll(',', ''), e: price });
        store_1.default.dispatch('setPrice', price);
    };
    var offCalHandlerPrice = function (e) {
        store_1.default.dispatch('setActivePrice', { data: e, e: price });
        store_1.default.dispatch('setPrice', price);
    };
    (0, react_1.useEffect)(function () {
        store_1.default.dispatch('setItemEditData', uc);
    }, []);
    (0, react_1.useEffect)(function () {
        store_1.default.dispatch('setProp', price);
    }, []);
    (0, react_1.useEffect)(function () {
        store_1.default.dispatch('setItemName', name);
        store_1.default.dispatch('setItemCount', remain);
    }, []);
    (0, react_1.useEffect)(function () {
        setHeadPrice((off === '0' || off === 0) ? react_1.default.createElement("span", { className: "text-color-green" }, (0, Helper_1.number)(price))
            :
                react_1.default.createElement("div", null, react_1.default.createElement("span", { className: "text-color-green" }, (0, Helper_1.number)(finalPrice)), react_1.default.createElement("i", { className: "icon f7-icons color-red", style: { fontSize: '10px' } }, "arrow_right"), react_1.default.createElement("span", { className: "text-color-red" }, react_1.default.createElement("del", null, (0, Helper_1.number)(price)))));
    }, [finalPrice]);
    var CalendarMemo = (0, react_1.useCallback)(function () {
        return react_1.default.createElement(framework7_react_1.List, { id: 'block-546465789a7d4a65', noHairlines: true }, react_1.default.createElement(DatePicker_1.default, { floatingLabel: true, className: 'col-50', outline: true, minYear: framework7_react_1.f7.params.date.year, maxYear: framework7_react_1.f7.params.date.year + 10, label: fa_1.default.form.start_date, type: "text", parentId: 'block-546465789a7d4a65', placeholder: fa_1.default.form.placeholder.start_date, name: 'start_date', id: 'start_date', value: start_date }), react_1.default.createElement(DatePicker_1.default, { floatingLabel: true, outline: true, className: 'col-50', label: fa_1.default.form.end_date, type: "text", minYear: framework7_react_1.f7.params.date.year, maxYear: framework7_react_1.f7.params.date.year + 10, parentId: 'block-546465789a7d4a65', indexAfter: 0, placeholder: fa_1.default.form.placeholder.end_date, name: 'end_date', id: 'end_date', value: end_date }));
    }, [loading]);
    (0, react_1.useEffect)(function () {
        return function () {
            store_1.default.dispatch('emptyItemEditData');
        };
    }, []);
    var handleHeadPrice = (0, react_1.useCallback)(function () {
        store_1.default.dispatch('setPrice', price);
        setHeadPrice((store_1.default.getters.off_price.value === '0' || store_1.default.getters.off_price.value === 0 || store_1.default.getters.off_price.value === undefined) ? react_1.default.createElement("span", { className: "text-color-green" }, (0, Helper_1.number)(price))
            :
                react_1.default.createElement("div", null, react_1.default.createElement("span", { className: "text-color-green" }, (0, Helper_1.number)(finalPrice)), react_1.default.createElement("i", { className: "icon f7-icons color-red", style: { fontSize: '10px' } }, "arrow_right"), react_1.default.createElement("span", { className: "text-color-red" }, react_1.default.createElement("del", null, (0, Helper_1.number)(price)))));
    }, []);
    return (react_1.default.createElement(framework7_react_1.Popup, { className: "edit-item", noSwipeback: true, onPopupOpened: handleHeadPrice, onPopupOpen: function () { return store_1.default.dispatch('setPrice', price); } }, react_1.default.createElement(framework7_react_1.Page, { noNavbar: true, noToolbar: false, withSubnavbar: true, className: "bg-color-white" }, navbar, react_1.default.createElement(framework7_react_1.Block, null, react_1.default.createElement(framework7_react_1.List, { noHairlines: true }, react_1.default.createElement(framework7_react_1.ListInput, { floatingLabel: true, outline: true, autocomplete: "off", label: fa_1.default.form.item_name, type: "text", name: "item_name", inputId: "item_name", id: "item_name_li", required: true, defaultValue: name, onChange: function (e) { return store_1.default.dispatch('setItemName', e.target.value); }, clearButton: true }), react_1.default.createElement(framework7_react_1.ListItem, { title: "\u0645\u0648\u062C\u0648\u062F\u06CC : ".concat(itemCount) }, react_1.default.createElement(framework7_react_1.Stepper, { buttonsOnly: true, large: true, value: itemCount, min: 0, max: 1000, raised: true, fill: true, slot: "after", autorepeatDynamic: true, autorepeat: true, onStepperChange: function (e) { return store_1.default.dispatch('setItemCount', parseInt(e)); } })))), react_1.default.createElement(framework7_react_1.Block, { className: 'text-align-center', inset: true, strong: true, style: { border: '1px solid rgba(var(--f7-theme-color-rgb),0.6)' } }, react_1.default.createElement(framework7_react_1.BlockHeader, { className: "display-flex justify-content-space-between" }, react_1.default.createElement("div", { className: "right" }, fa_1.default.create_off), react_1.default.createElement("div", { className: "left" }, headPrice)), react_1.default.createElement(framework7_react_1.List, { noHairlines: true }, react_1.default.createElement(framework7_react_1.ListInput, { floatingLabel: true, outline: true, autocomplete: "off", label: fa_1.default.form.off_price, name: "off_price", inputId: "off_price", id: "off_price_li", pattern: "[0-9]*", value: off, onChange: offCalHandlerPercent }), react_1.default.createElement(framework7_react_1.ListItem, null, react_1.default.createElement(framework7_react_1.Range, { id: 'off_percent', min: 0, label: true, scale: true, value: percent, formatLable: function (val) {
            return '%' + val;
        }, formatScaleLabel: function (val) {
            return val + '<b class="text-color-green">%</b>';
        }, scaleSteps: 5, scaleSubSteps: 4, max: 100, step: 1, onRangeChange: offCalHandlerPrice }))), react_1.default.createElement(BeatLoader_1.default, { color: "var(--f7-theme-color)", loading: loading }), react_1.default.createElement(CalendarMemo, null)), react_1.default.createElement(framework7_react_1.List, null, react_1.default.createElement("input", { type: "file", id: "item_images_i65497654654654d", name: "user_pic", accept: "image/*;capture=camera", style: { display: "none" }, multiple: true, onChange: function (e) { return store_1.default.dispatch('uploadImage', e); } }), react_1.default.createElement(framework7_react_1.ListItem, { link: "#", title: fa_1.default.buttons.images_list, onClick: function () {
            document
                .getElementById("item_images_i65497654654654d")
                .click();
        } }, react_1.default.createElement("div", { slot: "after-title", style: {
            fontSize: "11px",
            color: "var(--f7-theme-color)",
            marginRight: "2px",
        } }, fa_1.default.image_count_limit), react_1.default.createElement(framework7_react_1.Icon, { slot: "after", f7: "photo_fill_on_rectangle_fill" }))), react_1.default.createElement(framework7_react_1.Block, { className: "align-content-center" }, images.map(function (img, index) { return (react_1.default.createElement("div", { className: "chip", key: index, style: { height: "70px", marginLeft: "3px", borderRadius: '5px' } }, react_1.default.createElement("div", { className: "chip-media", style: { width: "70px", height: "70px" } }, react_1.default.createElement("img", { slot: "media", style: {
            width: "70px",
            height: "70px",
            borderRadius: '5px'
        }, src: img })), react_1.default.createElement("div", { className: "chip-label" }, index + 1), react_1.default.createElement("a", { href: "#", id: index, className: "chip-delete", onClick: function (e) { return store_1.default.dispatch('removeImage', e.target.id); } }))); })))));
};
exports.default = EditItem;
//# sourceMappingURL=EditItem.js.map