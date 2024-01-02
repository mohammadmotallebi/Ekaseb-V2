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
var fa_1 = __importDefault(require("./lang/fa"));
var routes_1 = __importDefault(require("./routes"));
var store_1 = __importDefault(require("./store/store"));
var framework7_1 = require("framework7");
var PersainDate = require('persian-date');
exports.default = function (props) {
    console.log(window);
    var _a = (0, react_1.useState)(), app = _a[0], setApp = _a[1];
    PersainDate.toLocale('en');
    var faMoment = new PersainDate();
    var f7params = (0, react_1.useMemo)(function () { return ({
        id: 'io.loyalty.app',
        name: 'Loyalty',
        theme: 'auto',
        version: '1.1',
        home: '/',
        rtl: true,
        iosTouchRipple: true,
        date: {
            fullDate: faMoment.format('YYYY/MM/DD'),
            fullDateArray: faMoment.format('YYYY/MM/DD').split('/').reverse(),
            year: parseInt(faMoment.format('YYYY')),
            daysInMonth: faMoment.daysInMonth(),
            moment: PersainDate,
            months: faMoment.toLocale('fa').rangeName().months.reverse(),
        },
        statusbar: {
            iosOverlaysWebView: true,
            androidOverlaysWebView: false,
            iosBackgroundColor: '#000',
        },
        store: store_1.default,
        touch: {
            tapHold: false,
            disableContextMenu: true,
        },
        routes: routes_1.default,
        serviceWorker: {
            path: '/sw.js',
        },
        on: {
            init: function () {
                console.log('1.1');
                store_1.default.dispatch('setPermissions');
                document.getElementById("app-loading").style.display = "none";
                store_1.default.dispatch('setTheme');
                store_1.default.dispatch('setCountApproveBill');
                framework7_1.request.get('get-role-name', function (data) {
                    store_1.default.dispatch('setUserRole', data);
                    if (data === 'shop_admin') {
                        setApp(react_1.default.createElement(framework7_react_1.Page, null, react_1.default.createElement(framework7_react_1.View, { url: '/home', main: true }), react_1.default.createElement(framework7_react_1.Toolbar, { id: 'customer_tab', bottom: true, labels: true, tabbar: true, noHairline: true, noShadow: true }, react_1.default.createElement(framework7_react_1.Link, { href: "/add-buy", tabLink: "#add-buy_987984651651", style: { fontSize: '10px' }, text: fa_1.default.menu.add_buy, iconF7: 'plus_circle_fill', iconSize: '28' }), react_1.default.createElement(framework7_react_1.Link, { href: "/shops", style: { fontSize: '10px' }, tabLink: "#shops_654654984516", text: fa_1.default.menu.shops, iconMaterial: 'store_mall_directory', iconSize: '28' }), react_1.default.createElement(framework7_react_1.Link, { tabLinkActive: true, style: { color: 'var(--f7-theme-color)', top: '10px' }, iconF7: 'house_fill', tabLink: "#customer_home_2374987399", iconSize: '40', href: "/home" }), react_1.default.createElement(framework7_react_1.Link, { iconF7: 'chart_pie_fill', text: fa_1.default.menu.buys, tabLink: "#buys_54846545151", href: "/buys", style: { fontSize: '10px' }, iconSize: '28' }), react_1.default.createElement(framework7_react_1.Link, { href: "/menu", iconF7: 'ellipsis_circle_fill', tabLink: "#menu_3651465489429", style: { fontSize: '10px' }, text: fa_1.default.menu.menu, iconSize: '28' })), react_1.default.createElement(framework7_react_1.Tabs, null, react_1.default.createElement(framework7_react_1.Tab, { id: "add-buy_987984651651" }), react_1.default.createElement(framework7_react_1.Tab, { id: "shops_654654984516" }), react_1.default.createElement(framework7_react_1.Tab, { tabLinkActive: true, id: "customer_home_2374987399" }), react_1.default.createElement(framework7_react_1.Tab, { id: "buys_54846545151" }), react_1.default.createElement(framework7_react_1.Tab, { id: "menu_3651465489429" })), react_1.default.createElement(framework7_react_1.Toolbar, { id: 'shopper_tab', bottom: true, labels: true, tabbar: true }, react_1.default.createElement(framework7_react_1.Link, { href: "/confirm-sell", tabLink: "#confirm-sell_56419494165", style: { fontSize: '11px' } }, react_1.default.createElement(framework7_react_1.Icon, { f7: "checkmark_alt_circle_fill", size: 28 }, react_1.default.createElement(framework7_react_1.Badge, { id: 'count', color: "red" }, store_1.default.state.countApBill)), fa_1.default.menu.confirm_sell), react_1.default.createElement(framework7_react_1.Link, { href: "/add-item", style: { fontSize: '11px' }, tabLink: "#add-item_65449494", text: fa_1.default.menu.add_item, iconF7: 'cube_box_fill', iconSize: '28' }), react_1.default.createElement(framework7_react_1.Link, { tabLinkActive: true, style: { color: 'var(--f7-theme-color)', top: '10px' }, iconF7: 'house_fill', tabLink: "#shopper_home_56465161649", iconSize: '40', href: "/home" }), react_1.default.createElement(framework7_react_1.Link, { iconF7: 'chart_pie_fill', text: fa_1.default.menu.sell, tabLink: "#sells_65416549846", href: "/sells", style: { fontSize: '10px' }, iconSize: '28' }), react_1.default.createElement(framework7_react_1.Link, { href: "/menu", iconF7: 'ellipsis_circle_fill', tabLink: "#menu_6546512315616", style: { fontSize: '10px' }, text: fa_1.default.menu.menu, iconSize: '28' })), react_1.default.createElement(framework7_react_1.Tabs, null, react_1.default.createElement(framework7_react_1.Tab, { id: "confirm-sell_56419494165" }), react_1.default.createElement(framework7_react_1.Tab, { id: "add-item_65449494" }), react_1.default.createElement(framework7_react_1.Tab, { tabActive: true, id: "shopper_home_56465161649" }), react_1.default.createElement(framework7_react_1.Tab, { id: "sells_65416549846" }), react_1.default.createElement(framework7_react_1.Tab, { id: "menu_6546512315616" })), " "));
                    }
                    else {
                        setApp(react_1.default.createElement(framework7_react_1.Page, null, react_1.default.createElement(framework7_react_1.View, { url: '/home', main: true }), react_1.default.createElement(framework7_react_1.Toolbar, { id: 'customer_tab', bottom: true, labels: true, tabbar: true }, react_1.default.createElement(framework7_react_1.Link, { href: "/add-buy", tabLink: "#add-buy_654651613215", style: { fontSize: '10px' }, text: fa_1.default.menu.add_buy, iconF7: 'plus_circle_fill', iconSize: '28' }), react_1.default.createElement(framework7_react_1.Link, { href: "/shops", style: { fontSize: '10px' }, tabLink: "#shops_654654654616", text: fa_1.default.menu.shops, iconMaterial: 'store_mall_directory', iconSize: '28' }), react_1.default.createElement(framework7_react_1.Link, { tabLinkActive: true, style: { color: 'var(--f7-theme-color)', top: '10px' }, iconF7: 'house_fill', tabLink: "#customer_home_5641654984798", iconSize: '40', href: "/home" }), react_1.default.createElement(framework7_react_1.Link, { iconF7: 'chart_pie_fill', text: fa_1.default.menu.buys, tabLink: "#buys_8949846541", href: "/buys", style: { fontSize: '10px' }, iconSize: '28' }), react_1.default.createElement(framework7_react_1.Link, { href: "/menu", iconF7: 'ellipsis_circle_fill', tabLink: "#menu_8489651521", style: { fontSize: '10px' }, text: fa_1.default.menu.menu, iconSize: '28' })), react_1.default.createElement(framework7_react_1.Tabs, null, react_1.default.createElement(framework7_react_1.Tab, { id: "add-buy_654651613215" }), react_1.default.createElement(framework7_react_1.Tab, { id: "shops_654654654616" }), react_1.default.createElement(framework7_react_1.Tab, { tabLinkActive: true, id: "customer_home_5641654984798" }), react_1.default.createElement(framework7_react_1.Tab, { id: "buys_8949846541" }), react_1.default.createElement(framework7_react_1.Tab, { id: "menu_8489651521" }))));
                    }
                });
            },
        }
    }); }, [app]);
    return (react_1.default.createElement(framework7_react_1.App, Object.assign({}, f7params), app));
};
//# sourceMappingURL=App.js.map