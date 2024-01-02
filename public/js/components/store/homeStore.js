import { createStore, Dom7 as $$, request } from 'framework7';
import { f7 } from 'framework7-react';
import fa from "../lang/fa";
var homeStore = createStore({
    state: {
        homePageAllData: {},
        homeData: {},
        oneYearGraphBuy: { datasets: [] },
        totalGraphBuy: { datasets: [] },
        userTotalBuy: '',
        userActiveCard: '',
        shopperData: {},
        loyalty: 0,
        activeTab: '',
    },
    actions: {
        setHomePage: function (_a) {
            var state = _a.state;
            f7.dialog.preloader('درحال بارگذاری');
            request.json(f7.params.home + 'get-home-data', function (fetchData) {
                state.userActiveCard = fetchData.user_info.active_card.card_number;
                state.userTotalBuy = fetchData.data.total;
                state.homeData = fetchData.data;
                state.loyalty = fetchData.tLoyalty;
                if (fetchData.role_name === 'shop_admin') {
                    request.json(f7.params.home + 'Shops/get-shopper-home', function (fetchData) {
                        state.shopperData = fetchData;
                    });
                }
                state.oneYearGraphBuy = {
                    labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
                    datasets: [{
                            label: fa.buy + ' ' + fetchData.cyear,
                            lineTension: 0.5,
                            backgroundColor: "rgba(" + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ",0.2)",
                            borderColor: "rgba(" + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ",0.5)",
                            pointRadius: 10,
                            pointBackgroundColor: "rgba(" + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ",0.5)",
                            pointBorderColor: "rgba(" + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ",0.5)",
                            pointHoverRadius: 15,
                            pointHoverBackgroundColor: "rgba(" + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ",0.5)",
                            pointHoverBorderColor: "rgba(" + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ",0.5)",
                            pointHitRadius: 10,
                            pointBorderWidth: 3,
                            data: fetchData.total
                        }]
                };
                state.totalGraphBuy = {
                    labels: fetchData.year,
                    datasets: [{
                            label: fa.total_buy,
                            lineTension: 0.5,
                            backgroundColor: "rgba(" + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ",0.2)",
                            borderColor: "rgba(" + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ",0.5)",
                            pointRadius: 10,
                            pointBackgroundColor: "rgba(" + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ",0.5)",
                            pointBorderColor: "rgba(" + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ",0.5)",
                            pointHoverRadius: 15,
                            pointHoverBackgroundColor: "rgba(" + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ",0.5)",
                            pointHoverBorderColor: "rgba(" + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ",0.5)",
                            pointHitRadius: 10,
                            pointBorderWidth: 2,
                            data: fetchData.tot
                        }]
                };
                f7.dialog.close();
                $$('#card_list65498743541351').on('click', function () {
                    f7.popup.get('.cards-list').open();
                });
                $$('#buy_list65498743541351').on('click', function () {
                    f7.popup.get('.buy-list').open();
                });
                if (state.activeTab === 'customer_page') {
                    f7.tab.show('#customer_page', '#customer_tab65467849874564', false);
                }
                else {
                    f7.tab.show('#shopper_page', '#shopper_tab65467849874564', false);
                }
            });
        },
        setOneYearGraphBuy: function (_a, data) {
            var state = _a.state;
            state.oneYearGraphBuy = data;
        },
        setShopperData: function (_a, data) {
            var state = _a.state;
            state.shopperData = data;
        },
        setTotalGraphBuy: function (_a, data) {
            var state = _a.state;
            state.totalGraphBuy = data;
        },
        setUserTotalBuy: function (_a, data) {
            var state = _a.state;
            state.userTotalBuy = data;
        },
        setLoyalty: function (_a, data) {
            var state = _a.state;
            state.loyalty = data;
        },
        setUserActiveCard: function (_a, data) {
            var state = _a.state;
            state.userActiveCard = data;
        },
        setHomeData: function (_a, data) {
            var state = _a.state;
            state.homeData = data;
        },
        setActiveTab: function (_a, data) {
            var state = _a.state;
            state.activeTab = data;
        },
    },
    getters: {
        getOneYearGraphBuy: function (_a) {
            var state = _a.state;
            return state.oneYearGraphBuy;
        },
        getTotalGraphBuy: function (_a) {
            var state = _a.state;
            return state.totalGraphBuy;
        },
        getHomeData: function (_a) {
            var state = _a.state;
            return state.homeData;
        },
        getUserTotalBuy: function (_a) {
            var state = _a.state;
            return state.userTotalBuy;
        },
        getShopperData: function (_a) {
            var state = _a.state;
            return state.shopperData;
        },
        getUserActiveCard: function (_a) {
            var state = _a.state;
            return state.userActiveCard;
        },
        getLoyalty: function (_a) {
            var state = _a.state;
            return state.loyalty;
        },
        getActiveTab: function (_a) {
            var state = _a.state;
            return state.activeTab;
        },
    }
});
export default homeStore;
//# sourceMappingURL=homeStore.js.map