import React, {useEffect, useState, useMemo} from 'react';
import {
    View,
    App,
    Page,
    theme,
    Link,
    Tab,
    Tabs,
    Toolbar, f7, useStore, f7ready, Badge, Icon
} from 'framework7-react';

import fa from './lang/fa'
import routes from './routes';
import store from './store/store';
import {Dom7 as $$, request} from "framework7";

const PersainDate = require('persian-date')


export default (props) => {
    console.log(1.11)
    const [app, setApp] = useState();
    // const faMoment = moment().locale('fa');
    PersainDate.toLocale('en')
    const faMoment = new PersainDate()
    const f7params = useMemo(() => ({
        id: 'io.loyalty.app',
        name: 'Loyalty',
        theme: 'auto', // Automatic theme detection
        version: '1.0.0906',
        home: '/',
        rtl: true,
        iosTouchRipple: true,
        date: {
            fullDate: faMoment.format('YYYY/MM/DD'),
            fullDateArray: faMoment.format('YYYY/MM/DD').split('/').reverse(),
            year: parseInt(faMoment.format('YYYY')),
            daysInMonth: faMoment.daysInMonth(),
            moment: PersainDate,
            months : faMoment.toLocale('fa').rangeName().months.reverse(),
        },
        statusbar: {
            iosOverlaysWebView: true,
            androidOverlaysWebView: false,
            iosBackgroundColor: '#000',
        },
        store: store,
        touch: {
            tapHold: false, //enable tap hold events
            disableContextMenu: true,
        },
        routes: routes,
        serviceWorker: {
            path: '/sw.js',
        },
        on: {
            init: function () {

                store.dispatch('setPermissions')
                document.getElementById("app-loading").style.display = "none";
                store.dispatch('setTheme');
                store.dispatch('setCountApproveBill');
                request.get('get-role-name', function (data) {
                    store.dispatch('setUserRole', data);
                    if (data === 'shop_admin') {
                        setApp(
                            <Page>
                                <View url={'/home'} main/>
                                <Toolbar id={'customer_tab'} bottom labels tabbar noHairline noShadow>
                                    <Link href="/add-buy" tabLink="#add-buy_987984651651" style={{fontSize: '10px'}}
                                          text={fa.menu.add_buy} iconF7='plus_circle_fill' iconSize={'28'}></Link>
                                    <Link href="/shops" style={{fontSize: '10px'}} tabLink="#shops_654654984516" text={fa.menu.shops}
                                          iconMaterial='store_mall_directory' iconSize={'28'}></Link>
                                    <Link tabLinkActive style={{color: 'var(--f7-theme-color)', top: '10px'}} iconF7='house_fill'
                                          tabLink="#customer_home_2374987399" iconSize={'40'} href="/home"
                                    ></Link>
                                    <Link iconF7='chart_pie_fill' text={fa.menu.buys} tabLink="#buys_54846545151" href="/buys"
                                          style={{fontSize: '10px'}} iconSize={'28'}></Link>
                                    <Link href="/menu" iconF7='ellipsis_circle_fill' tabLink="#menu_3651465489429" style={{fontSize: '10px'}}
                                          text={fa.menu.menu} iconSize={'28'}></Link>
                                </Toolbar>
                                <Tabs>
                                    <Tab id="add-buy_987984651651"></Tab>
                                    <Tab id="shops_654654984516"></Tab>
                                    <Tab tabLinkActive id="customer_home_2374987399"></Tab>
                                    <Tab id="buys_54846545151"></Tab>
                                    <Tab id="menu_3651465489429"></Tab>
                                </Tabs>
                                <Toolbar id={'shopper_tab'} bottom labels tabbar>
                                    <Link href="/confirm-sell" tabLink="#confirm-sell_56419494165" style={{fontSize: '11px'}}
                                    >
                                        <Icon f7="checkmark_alt_circle_fill" size={28}>
                                            <Badge id={'count'} color="red">{store.state.countApBill}</Badge>
                                        </Icon>
                                        {fa.menu.confirm_sell}
                                    </Link>
                                    <Link href="/add-item" style={{fontSize: '11px'}} tabLink="#add-item_65449494" text={fa.menu.add_item}
                                          iconF7='cube_box_fill' iconSize={'28'}></Link>
                                    <Link tabLinkActive style={{color: 'var(--f7-theme-color)', top: '10px'}}
                                          iconF7='house_fill' tabLink="#shopper_home_56465161649" iconSize={'40'} href="/home"></Link>
                                    <Link iconF7='chart_pie_fill' text={fa.menu.sell} tabLink="#sells_65416549846" href={"/sells"}
                                          style={{fontSize: '10px'}} iconSize={'28'}></Link>
                                    <Link href="/menu" iconF7='ellipsis_circle_fill' tabLink="#menu_6546512315616"
                                          style={{fontSize: '10px'}} text={fa.menu.menu} iconSize={'28'}></Link>
                                </Toolbar>
                                <Tabs>
                                    <Tab id="confirm-sell_56419494165"></Tab>
                                    <Tab id="add-item_65449494"></Tab>
                                    <Tab tabActive id="shopper_home_56465161649"></Tab>
                                    <Tab id="sells_65416549846"></Tab>
                                    <Tab id="menu_6546512315616"></Tab>
                                </Tabs> </Page>);

                    } else {
                        setApp(
                            <Page>
                                <View url={'/home'} main/>
                                <Toolbar id={'customer_tab'} bottom labels tabbar>
                                    <Link href="/add-buy" tabLink="#add-buy_654651613215" style={{fontSize: '10px'}}
                                          text={fa.menu.add_buy} iconF7='plus_circle_fill' iconSize={'28'}></Link>
                                    <Link href="/shops" style={{fontSize: '10px'}} tabLink="#shops_654654654616" text={fa.menu.shops}
                                          iconMaterial='store_mall_directory' iconSize={'28'}></Link>
                                    <Link tabLinkActive style={{color: 'var(--f7-theme-color)', top: '10px'}} iconF7='house_fill'
                                          tabLink="#customer_home_5641654984798" iconSize={'40'} href="/home"
                                    ></Link>
                                    <Link iconF7='chart_pie_fill' text={fa.menu.buys} tabLink="#buys_8949846541" href="/buys"
                                          style={{fontSize: '10px'}} iconSize={'28'}></Link>
                                    <Link href="/menu" iconF7='ellipsis_circle_fill' tabLink="#menu_8489651521" style={{fontSize: '10px'}}
                                          text={fa.menu.menu} iconSize={'28'}></Link>
                                </Toolbar>
                                <Tabs>
                                    <Tab id="add-buy_654651613215"></Tab>
                                    <Tab id="shops_654654654616"></Tab>
                                    <Tab tabLinkActive id="customer_home_5641654984798"></Tab>
                                    <Tab id="buys_8949846541"></Tab>
                                    <Tab id="menu_8489651521"></Tab>
                                </Tabs>
                            </Page>
                        );
                    }

                })
            },
        }

    }), [app])

    return (
        <App {...f7params}>
            {app}
        </App>
    )

};
