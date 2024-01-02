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
var framework7_react_1 = require("framework7-react");
var react_1 = __importStar(require("react"));
var fa_1 = __importDefault(require("../lang/fa"));
var framework7_1 = require("framework7");
exports.default = function () {
    var _a = (0, react_1.useState)([]), cardsList = _a[0], setCardsList = _a[1];
    var _b = (0, react_1.useState)(''), noData = _b[0], setNoData = _b[1];
    var handleCardsList = function () {
        framework7_react_1.f7.preloader.show();
        framework7_1.request.json(framework7_react_1.f7.params.home + 'get-home-data', function (fetchData) {
            setCardsList(fetchData.data.card);
            framework7_react_1.f7.preloader.hide();
            if (fetchData.data.card.length < 1) {
                setNoData("<div className=\"card\">\n                        <div className=\"card-content  card-content-padding text-align-center\">\n                            ".concat(fa_1.default.alert.not_card, "\n                        </div>\n                    </div>"));
            }
        });
    };
    return (react_1.default.createElement(framework7_react_1.Popup, { className: "cards-list", swipeToClose: true, onPopupOpen: handleCardsList }, react_1.default.createElement(framework7_react_1.Page, null, react_1.default.createElement(framework7_react_1.Navbar, { title: fa_1.default.cards }, react_1.default.createElement(framework7_react_1.NavRight, null, react_1.default.createElement(framework7_react_1.Link, { popupClose: true, iconF7: 'multiply_circle_fill' }))), noData, react_1.default.createElement(framework7_react_1.List, { mediaList: true }, cardsList.map(function (card) { return react_1.default.createElement(framework7_react_1.ListItem, { title: card.card_number, key: card.id }, react_1.default.createElement("span", { slot: "after" }, (card.status === '1') ?
        react_1.default.createElement(framework7_react_1.Icon, { className: 'green-light', f7: 'checkmark_circle_fill' })
        : react_1.default.createElement(framework7_react_1.Icon, { className: 'red-light', f7: 'xmark_circle_fill' }))); })))));
};
//# sourceMappingURL=CardsListPopup.js.map