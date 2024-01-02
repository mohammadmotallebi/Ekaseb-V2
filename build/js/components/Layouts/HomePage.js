import React, { useCallback, useEffect, useState } from "react";
import { Block, BlockHeader, BlockTitle, Button, Card, CardContent, CardFooter, CardHeader, Col, f7ready, Icon, Link, Navbar, Page, Row, Segmented, Subnavbar, Tab, Tabs, useStore, } from "framework7-react";
import { Line } from "react-chartjs-2";
import { CategoryScale, Chart as ChartJS, LinearScale, LineElement, PointElement, Title, } from "chart.js";
import fa from "../lang/fa";
import CardsListPopup from "../Popups/CardsListPopup";
import BuysListPopup from "../Popups/BuysListPopup";
import AddCreditPopup from "../Popups/AddCreditPopup";
import { Dom7 as $$ } from "framework7";
import homeStore from "../store/homeStore";
import store from "../store/store";
ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);
export default (function (props) {
    var _a = useState(), shopperLayout = _a[0], setShopperLayout = _a[1];
    var _b = useState(), customerLayout = _b[0], setCustomerLayout = _b[1];
    var oneYearGraphBuy = useStore(homeStore, 'getOneYearGraphBuy');
    var totalGraphBuy = useStore(homeStore, 'getTotalGraphBuy');
    var homeData = useStore(homeStore, 'getHomeData');
    var shopperData = useStore(homeStore, 'getShopperData');
    var role = useStore('role');
    var _c = useState({}), animation = _c[0], setAnimation = _c[1];
    var loyalty = useStore(homeStore, 'getLoyalty');
    var userActiveCard = useStore(homeStore, 'getUserActiveCard');
    var userTotalBuy = useStore(homeStore, 'getUserTotalBuy');
    var refresh = useStore('getDoRefresh');
    var approve = useStore('approve');
    $$('#shopper_tab65467849874564').on('click', function (e) {
        $$("#customer_tab").hide();
        $$('#shopper_tab').show();
        homeStore.dispatch('setActiveTab', 'shopper_page');
    });
    var chartOption = {
        options: {
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 11,
                            family: 'Samim-FD'
                        }
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 10,
                            family: 'Samim-FD'
                        }
                    }
                }
            }
        }
    };
    $$('#customer_tab65467849874564').on('click', function (e) {
        $$('#shopper_tab').hide();
        $$('#customer_tab').show();
        homeStore.dispatch('setActiveTab', 'customer_page');
    });
    useEffect(function () {
        f7ready(function () {
            homeStore.dispatch('setHomePage');
        });
    }, [refresh]);
    useEffect(function () {
        store.dispatch('setCountApproveBill');
        $$('#count').text(approve);
    }, [approve]);
    var SHome = useCallback(function () {
        return React.createElement(Tabs, { animated: true },
            React.createElement(Tab, { id: "shopper_page", className: "page-content" },
                React.createElement(Block, { strong: true, className: 'row text-align-center', style: { margin: '10px 0' } },
                    React.createElement(Block, { inset: true, strong: true, id: 'sum_sell', className: 'col mt-0 mb-0 ml-0 mr-0 current-theme-color-light', style: { border: '1px solid rgba(var(--f7-theme-color-rgb),0.6)' } },
                        React.createElement(BlockHeader, { className: 'theme-font-color', style: {
                                borderBottom: '1px dotted rgba(var(--f7-theme-color-rgb),1)',
                                width: '100%',
                                paddingBottom: '3px'
                            } },
                            React.createElement(Row, null,
                                React.createElement(Col, { className: 'text-align-right' }, fa.total_sell),
                                React.createElement(Col, { className: 'text-align-left' },
                                    " ",
                                    React.createElement(Icon, { f7: 'cart_fill_badge_minus' })))),
                        shopperData.totalSell + ' ' + fa.currency),
                    React.createElement(Block, { inset: true, strong: true, id: 'remain_credit', className: 'col mt-0 mb-0 ml-1 mr-1 current-theme-color-light', style: { border: '1px solid rgba(var(--f7-theme-color-rgb),0.6)' } },
                        React.createElement(BlockHeader, { className: 'theme-font-color', style: {
                                borderBottom: '1px dotted rgba(var(--f7-theme-color-rgb),1)',
                                width: '100%',
                                paddingBottom: '3px'
                            } },
                            React.createElement(Row, null,
                                React.createElement(Col, { className: 'text-align-right' }, fa.shopper_credit),
                                React.createElement(Col, { className: 'text-align-left' },
                                    " ",
                                    React.createElement(Icon, { f7: 'money_dollar_circle_fill' })))),
                        new Intl.NumberFormat().format(shopperData.RemainCredit) + ' ' + fa.currency))),
            React.createElement(Tab, { id: "customer_page", className: "page-content" },
                React.createElement(Block, { strong: true, className: 'row text-align-center', style: { margin: '10px 0' } },
                    React.createElement(BlockTitle, { className: 'theme-font-color text-align-center', style: {
                            borderBottom: '1px dotted var(--f7-theme-color)',
                            width: '100%',
                            paddingBottom: '3px'
                        } }, fa.scores),
                    React.createElement(Block, { inset: true, strong: true, className: 'col mt-0 mb-0 ml-0 mr-0 current-theme-color' },
                        React.createElement(BlockHeader, { className: 'font-wight text-align-center', style: {
                                borderBottom: '1px solid rgba(255,255,255,0.4)',
                                width: '100%',
                                paddingBottom: '3px'
                            } }, fa.cash),
                        String(homeData.tCredit)),
                    React.createElement(Block, { inset: true, strong: true, className: 'col mt-0 mb-0 ml-1 mr-1 current-theme-color' },
                        React.createElement(BlockHeader, { className: 'font-wight text-align-center', style: {
                                borderBottom: '1px solid rgba(255,255,255,0.4)',
                                width: '100%',
                                paddingBottom: '3px'
                            } }, fa.cashless),
                        String(homeData.cashlessScore)),
                    React.createElement(Block, { inset: true, strong: true, className: 'col mt-0 mb-0 ml-0 mr-0 current-theme-color' },
                        React.createElement(BlockHeader, { className: 'font-wight text-align-center', style: {
                                borderBottom: '1px solid rgba(255,255,255,0.4)',
                                width: '100%',
                                paddingBottom: '3px'
                            } }, fa.loyalty),
                        String(loyalty))),
                React.createElement(Block, { strong: true, className: 'row text-align-center', style: { margin: '10px 0' } },
                    React.createElement(Block, { inset: true, strong: true, id: 'card_list65498743541351', className: 'col mt-0 mb-0 ml-0 mr-0 current-theme-color-light', style: { border: '1px solid rgba(var(--f7-theme-color-rgb),0.6)' } },
                        React.createElement(BlockHeader, { className: 'theme-font-color', style: {
                                borderBottom: '1px dotted rgba(var(--f7-theme-color-rgb),1)',
                                width: '100%',
                                paddingBottom: '3px'
                            } },
                            React.createElement(Row, null,
                                React.createElement(Col, { className: 'text-align-right' }, fa.card),
                                React.createElement(Col, { className: 'text-align-left' },
                                    " ",
                                    React.createElement(Icon, { f7: 'creditcard_fill' })))),
                        String(userActiveCard)),
                    React.createElement(Block, { inset: true, strong: true, id: 'buy_list65498743541351', className: 'col mt-0 mb-0 ml-1 mr-1 current-theme-color-light', style: { border: '1px solid rgba(var(--f7-theme-color-rgb),0.6)' } },
                        React.createElement(BlockHeader, { className: 'theme-font-color', style: {
                                borderBottom: '1px dotted rgba(var(--f7-theme-color-rgb),1)',
                                width: '100%',
                                paddingBottom: '3px'
                            } },
                            React.createElement(Row, null,
                                React.createElement(Col, { className: 'text-align-right' }, fa.total_buy),
                                React.createElement(Col, { className: 'text-align-left' },
                                    " ",
                                    React.createElement(Icon, { f7: 'cart_fill' })))),
                        String(userTotalBuy + ' ' + fa.currency))),
                React.createElement(Line, { redraw: true, data: oneYearGraphBuy, options: chartOption.options }),
                React.createElement(Line, { redraw: true, data: totalGraphBuy, options: chartOption.options })));
    }, [oneYearGraphBuy, totalGraphBuy, shopperData, homeData, userTotalBuy, userActiveCard]);
    var CHome = useCallback(function () {
        return React.createElement(React.Fragment, null,
            React.createElement(Block, { strong: true, className: 'row text-align-center', style: { margin: '10px 0' } },
                React.createElement(BlockTitle, { className: 'theme-font-color text-align-center', style: {
                        borderBottom: '1px dotted var(--f7-theme-color)',
                        width: '100%',
                        paddingBottom: '3px'
                    } }, fa.scores),
                React.createElement(Block, { inset: true, strong: true, className: 'col mt-0 mb-0 ml-0 mr-0 current-theme-color' },
                    React.createElement(BlockHeader, { className: 'font-wight text-align-center', style: {
                            borderBottom: '1px solid rgba(255,255,255,0.4)',
                            width: '100%',
                            paddingBottom: '3px'
                        } }, fa.cash),
                    String(homeData.tCredit)),
                React.createElement(Block, { inset: true, strong: true, className: 'col mt-0 mb-0 ml-1 mr-1 current-theme-color' },
                    React.createElement(BlockHeader, { className: 'font-wight text-align-center', style: {
                            borderBottom: '1px solid rgba(255,255,255,0.4)',
                            width: '100%',
                            paddingBottom: '3px'
                        } }, fa.cashless),
                    String(homeData.cashlessScore)),
                React.createElement(Block, { inset: true, strong: true, className: 'col mt-0 mb-0 ml-0 mr-0 current-theme-color' },
                    React.createElement(BlockHeader, { className: 'font-wight text-align-center', style: {
                            borderBottom: '1px solid rgba(255,255,255,0.4)',
                            width: '100%',
                            paddingBottom: '3px'
                        } }, fa.loyalty),
                    String(loyalty))),
            React.createElement(Card, { className: 'elevation-2' },
                React.createElement(CardHeader, null,
                    fa.card,
                    React.createElement(Icon, { material: 'credit_card' })),
                React.createElement(CardContent, { className: 'text-align-center' }, (userActiveCard == null) ? fa.alert.you_dont_have_card : userActiveCard),
                React.createElement(CardFooter, { className: "justify-content-center" },
                    React.createElement(Link, { style: { width: '100%' }, popupOpen: ".cards-list" },
                        fa.desc.view_all_card,
                        " "))),
            React.createElement(Card, { className: 'elevation-2' },
                React.createElement(CardHeader, null,
                    fa.total_buy,
                    React.createElement(Icon, { material: 'local_mall' })),
                React.createElement(CardContent, { className: 'text-align-center' }, userTotalBuy + ' ' + fa.currency),
                React.createElement(CardFooter, { className: "justify-content-center" },
                    React.createElement(Link, { style: { width: '100%' }, popupOpen: ".buy-list" },
                        fa.desc.view_all_buy,
                        " "))),
            React.createElement(Line, { redraw: true, data: oneYearGraphBuy, options: { responsive: true } }),
            React.createElement(Line, { redraw: true, data: totalGraphBuy, options: { responsive: true } }));
    }, [oneYearGraphBuy, totalGraphBuy, shopperData, homeData, userTotalBuy, userActiveCard]);
    return (React.createElement(Page, { noSwipeback: true, pageContent: false },
        React.createElement(Navbar, { innerClass: 'current-theme-color', title: fa.app_name }, (role === 'shop_admin') ?
            React.createElement(Subnavbar, null,
                React.createElement(Segmented, { raised: true, style: { margin: '5px 0' } },
                    React.createElement(Button, { id: 'shopper_tab65467849874564', tabLink: "#shopper_page" }, fa.shopper),
                    React.createElement(Button, { id: 'customer_tab65467849874564', tabLink: "#customer_page" }, fa.customer))) : ''),
        (role === 'shop_admin') ?
            SHome()
            :
                CHome(),
        React.createElement(CardsListPopup, null),
        React.createElement(BuysListPopup, null),
        React.createElement(AddCreditPopup, null)));
});
//# sourceMappingURL=HomePage.js.map