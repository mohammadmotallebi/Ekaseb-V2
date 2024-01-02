"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var framework7_react_1 = require("framework7-react");
exports.default = function (_a) {
    var images = _a.images, rest = __rest(_a, ["images"]);
    return (react_1.default.createElement(framework7_react_1.Popup, { className: "slider-popup" }, react_1.default.createElement(framework7_react_1.Page, null, react_1.default.createElement(framework7_react_1.Navbar, { title: "Popup Title" }, react_1.default.createElement(framework7_react_1.NavRight, null, react_1.default.createElement(framework7_react_1.Link, { popupClose: true, iconF7: 'multiply_circle_fill' }))), react_1.default.createElement(framework7_react_1.Swiper, Object.assign({ style: { margin: '0', top: '50%', transform: 'translateY(-50%)' } }, rest), images.map(function (image, i) {
        return react_1.default.createElement(framework7_react_1.SwiperSlide, { key: i, zoom: rest.zoom }, react_1.default.createElement("img", { src: image }));
    })))));
};
//# sourceMappingURL=Slider.js.map