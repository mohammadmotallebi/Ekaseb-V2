import React, { useEffect, useState, useCallback, useMemo } from "react";
import {
    Block,
    BlockHeader,
    BlockTitle,
    Button,
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    f7,
    Icon,
    Link,
    Page,
    Segmented,
    Subnavbar,
    Tab,
    Tabs,
    Row,
    Col,
    useStore,
    f7ready,
    Navbar,
} from "framework7-react";

import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
} from "chart.js";
import fa from "../lang/fa";
import CardsListPopup from "../Popups/CardsListPopup";
import BuysListPopup from "../Popups/BuysListPopup";
import AddCreditPopup from "../Popups/AddCreditPopup";
import {Dom7, Dom7 as $$, request} from "framework7";
import homeStore from "../store/homeStore";
import store from "../store/store";

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

export default (props) => {
    const oneYearGraphBuy = useStore(homeStore, "getOneYearGraphBuy");
    const totalGraphBuy = useStore(homeStore, "getTotalGraphBuy");
    const homeData = useStore(homeStore, "getHomeData");
    const shopperData = useStore(homeStore, "getShopperData");
    const role = useStore("role");
    const loyalty = useStore(homeStore, "getLoyalty");
    const userActiveCard = useStore(homeStore, "getUserActiveCard");
    const userTotalBuy = useStore(homeStore, "getUserTotalBuy");
    const refresh = useStore("getDoRefresh");
    const approve = useStore("approve");
    $$("#shopper_tab65467849874564").on("click", (e) => {
        $$("#customer_tab").hide();
        if ($$("#customer_tab")[0].style.display === "none") {
            $$("#shopper_tab").show();
            if ($$("#shopper_tab")[0].style.display !== "none") {
                homeStore.dispatch("setActiveTab", "shopper_page")
            }
        }
    });

    const chartOption = {
        options: {
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 11,
                            family: "Samim-FD",
                        },
                    },
                },
                y: {
                    ticks: {
                        font: {
                            size: 10,
                            family: "Samim-FD",
                        },
                    },
                },
            },
        },
    };
    $$("#customer_tab65467849874564").on("click", (e) => {
        $$("#shopper_tab").hide();
        if ($$("#shopper_tab")[0].style.display === "none") {
            $$("#customer_tab").show();
            if ($$("#customer_tab")[0].style.display !== "none") {
                homeStore.dispatch("setActiveTab", "customer_page");
            }
        }
    });
    useEffect(() => {
        f7ready(() => {
            homeStore.dispatch("setHomePage");
        });
    }, [refresh]);

    useEffect(() => {
        f7ready(() => {
            store.dispatch("setCountApproveBill");
            $$("#count").text(approve);
        })

    }, [approve]);

    const SHome = useCallback(() => {
        return (
            <Tabs animated>
                {/*Shopper Tab*/}
                <Tab id="shopper_page" className="page-content">
                    <Block
                        strong
                        className={"row text-align-center"}
                        style={{ margin: "10px 0" }}
                    >
                        <Block
                            inset
                            strong
                            id={"sum_sell"}
                            className={
                                "col mt-0 mb-0 ml-0 mr-0 current-theme-color-light"
                            }
                            style={{
                                border: "1px solid rgba(var(--f7-theme-color-rgb),0.6)",
                            }}
                        >
                            <BlockHeader
                                className="theme-font-color"
                                style={{
                                    borderBottom:
                                        "1px dotted rgba(var(--f7-theme-color-rgb),1)",
                                    width: "100%",
                                    paddingBottom: "3px",
                                }}
                            >
                                <Row>
                                    <Col className={"text-align-right"}>
                                        {fa.total_sell}
                                    </Col>
                                    <Col className="text-align-left">
                                        {" "}
                                        <Icon
                                            f7={"cart_fill_badge_minus"}
                                        ></Icon>
                                    </Col>
                                </Row>
                            </BlockHeader>
                            {shopperData.totalSell + " " + fa.currency}
                        </Block>

                        <Block
                            inset
                            strong
                            id={"remain_credit"}
                            className={
                                "col mt-0 mb-0 ml-1 mr-1 current-theme-color-light"
                            }
                            style={{
                                border: "1px solid rgba(var(--f7-theme-color-rgb),0.6)",
                            }}
                        >
                            <BlockHeader
                                className={"theme-font-color"}
                                style={{
                                    borderBottom:
                                        "1px dotted rgba(var(--f7-theme-color-rgb),1)",
                                    width: "100%",
                                    paddingBottom: "3px",
                                }}
                            >
                                <Row>
                                    <Col className={"text-align-right"}>
                                        {fa.shopper_credit}
                                    </Col>
                                    <Col className="text-align-left">
                                        {" "}
                                        <Icon
                                            f7={"money_dollar_circle_fill"}
                                        ></Icon>
                                    </Col>
                                </Row>
                            </BlockHeader>
                            {new Intl.NumberFormat().format(
                                shopperData.RemainCredit
                            ) +
                                " " +
                                fa.currency}
                        </Block>
                    </Block>
                </Tab>
                {/*Customer Tab*/}
                <Tab id="customer_page" className="page-content">
                    <Block
                        strong
                        className={"row text-align-center"}
                        style={{ margin: "10px 0" }}
                    >
                        <BlockTitle
                            className={"theme-font-color text-align-center"}
                            style={{
                                borderBottom:
                                    "1px dotted var(--f7-theme-color)",
                                width: "100%",
                                paddingBottom: "3px",
                            }}
                        >
                            {fa.scores}
                        </BlockTitle>
                        <Block
                            inset
                            strong
                            className={
                                "col mt-0 mb-0 ml-0 mr-0 current-theme-color"
                            }
                        >
                            <BlockHeader
                                className={"font-wight text-align-center"}
                                style={{
                                    borderBottom:
                                        "1px solid rgba(255,255,255,0.4)",
                                    width: "100%",
                                    paddingBottom: "3px",
                                }}
                            >
                                {fa.cash}
                            </BlockHeader>
                            {String(homeData.tCredit)}
                        </Block>

                        <Block
                            inset
                            strong
                            className={
                                "col mt-0 mb-0 ml-1 mr-1 current-theme-color"
                            }
                        >
                            <BlockHeader
                                className={"font-wight text-align-center"}
                                style={{
                                    borderBottom:
                                        "1px solid rgba(255,255,255,0.4)",
                                    width: "100%",
                                    paddingBottom: "3px",
                                }}
                            >
                                {fa.cashless}
                            </BlockHeader>
                            {String(homeData.cashlessScore)}
                        </Block>

                        <Block
                            inset
                            strong
                            className={
                                "col mt-0 mb-0 ml-0 mr-0 current-theme-color"
                            }
                        >
                            <BlockHeader
                                className={"font-wight text-align-center"}
                                style={{
                                    borderBottom:
                                        "1px solid rgba(255,255,255,0.4)",
                                    width: "100%",
                                    paddingBottom: "3px",
                                }}
                            >
                                {fa.loyalty}
                            </BlockHeader>
                            {String(loyalty)}
                        </Block>
                    </Block>
                    <Block
                        strong
                        className={"row text-align-center"}
                        style={{ margin: "10px 0" }}
                    >
                        <Block
                            inset
                            strong
                            id={"card_list65498743541351"}
                            className={
                                "col mt-0 mb-0 ml-0 mr-0 current-theme-color-light"
                            }
                            style={{
                                border: "1px solid rgba(var(--f7-theme-color-rgb),0.6)",
                            }}
                        >
                            <BlockHeader
                                className="theme-font-color"
                                style={{
                                    borderBottom:
                                        "1px dotted rgba(var(--f7-theme-color-rgb),1)",
                                    width: "100%",
                                    paddingBottom: "3px",
                                }}
                            >
                                <Row>
                                    <Col className={"text-align-right"}>
                                        {fa.card}
                                    </Col>
                                    <Col className="text-align-left">
                                        {" "}
                                        <Icon f7={"creditcard_fill"}></Icon>
                                    </Col>
                                </Row>
                            </BlockHeader>
                            {String(userActiveCard)}
                        </Block>

                        <Block
                            inset
                            strong
                            id={"buy_list65498743541351"}
                            className={
                                "col mt-0 mb-0 ml-1 mr-1 current-theme-color-light"
                            }
                            style={{
                                border: "1px solid rgba(var(--f7-theme-color-rgb),0.6)",
                            }}
                        >
                            <BlockHeader
                                className={"theme-font-color"}
                                style={{
                                    borderBottom:
                                        "1px dotted rgba(var(--f7-theme-color-rgb),1)",
                                    width: "100%",
                                    paddingBottom: "3px",
                                }}
                            >
                                <Row>
                                    <Col className={"text-align-right"}>
                                        {fa.total_buy}
                                    </Col>
                                    <Col className="text-align-left">
                                        {" "}
                                        <Icon f7={"cart_fill"}></Icon>
                                    </Col>
                                </Row>
                            </BlockHeader>
                            {String(userTotalBuy + " " + fa.currency)}
                        </Block>
                    </Block>

                    <Line
                        redraw={true}
                        data={oneYearGraphBuy}
                        options={chartOption.options}
                    />
                    <Line
                        redraw={true}
                        data={totalGraphBuy}
                        options={chartOption.options}
                    />
                </Tab>
            </Tabs>
        );
    }, [
        oneYearGraphBuy,
        totalGraphBuy,
        shopperData,
        homeData,
        userTotalBuy,
        userActiveCard,
    ]);
    const CHome = useCallback(() => {
        return (
            <>
                <Block
                    strong
                    className={"row text-align-center"}
                    style={{ margin: "10px 0" }}
                >
                    <BlockTitle
                        className={"theme-font-color text-align-center"}
                        style={{
                            borderBottom: "1px dotted var(--f7-theme-color)",
                            width: "100%",
                            paddingBottom: "3px",
                        }}
                    >
                        {fa.scores}
                    </BlockTitle>
                    <Block
                        inset
                        strong
                        className={
                            "col mt-0 mb-0 ml-0 mr-0 current-theme-color"
                        }
                    >
                        <BlockHeader
                            className={"font-wight text-align-center"}
                            style={{
                                borderBottom: "1px solid rgba(255,255,255,0.4)",
                                width: "100%",
                                paddingBottom: "3px",
                            }}
                        >
                            {fa.cash}
                        </BlockHeader>
                        {String(homeData.tCredit)}
                    </Block>

                    <Block
                        inset
                        strong
                        className={
                            "col mt-0 mb-0 ml-1 mr-1 current-theme-color"
                        }
                    >
                        <BlockHeader
                            className={"font-wight text-align-center"}
                            style={{
                                borderBottom: "1px solid rgba(255,255,255,0.4)",
                                width: "100%",
                                paddingBottom: "3px",
                            }}
                        >
                            {fa.cashless}
                        </BlockHeader>
                        {String(homeData.cashlessScore)}
                    </Block>

                    <Block
                        inset
                        strong
                        className={
                            "col mt-0 mb-0 ml-0 mr-0 current-theme-color"
                        }
                    >
                        <BlockHeader
                            className={"font-wight text-align-center"}
                            style={{
                                borderBottom: "1px solid rgba(255,255,255,0.4)",
                                width: "100%",
                                paddingBottom: "3px",
                            }}
                        >
                            {fa.loyalty}
                        </BlockHeader>
                        {String(loyalty)}
                    </Block>
                </Block>

                <Card className={"elevation-2"}>
                    <CardHeader>
                        {fa.card}
                        <Icon material="credit_card"></Icon>
                    </CardHeader>
                    <CardContent className={"text-align-center"}>
                        {userActiveCard == null
                            ? fa.alert.you_dont_have_card
                            : userActiveCard}
                    </CardContent>
                    <CardFooter className="justify-content-center">
                        <Link style={{ width: "100%" }} popupOpen=".cards-list">
                            {fa.desc.view_all_card}{" "}
                        </Link>
                    </CardFooter>
                </Card>

                <Card className={"elevation-2"}>
                    <CardHeader>
                        {fa.total_buy}
                        <Icon material="local_mall"></Icon>
                    </CardHeader>
                    <CardContent className={"text-align-center"}>
                        {userTotalBuy + " " + fa.currency}
                    </CardContent>
                    <CardFooter className="justify-content-center">
                        <Link style={{ width: "100%" }} popupOpen=".buy-list">
                            {fa.desc.view_all_buy}{" "}
                        </Link>
                    </CardFooter>
                </Card>

                <Line
                    redraw={true}
                    data={oneYearGraphBuy}
                    options={{ responsive: true }}
                />
                <Line
                    redraw={true}
                    data={totalGraphBuy}
                    options={{ responsive: true }}
                />
            </>
        );
    }, [
        oneYearGraphBuy,
        totalGraphBuy,
        shopperData,
        homeData,
        userTotalBuy,
        userActiveCard,
    ]);

    return (
        <Page noSwipeback pageContent={false}>
            <Navbar innerClass={"current-theme-color"} title={fa.app_name}>
                {role === "shop_admin" ? (
                    <Subnavbar>
                        <Segmented raised style={{ margin: "5px 0" }}>
                            <Button
                                id={"shopper_tab65467849874564"}
                                tabLink="#shopper_page"
                            >
                                {fa.shopper}
                            </Button>
                            <Button
                                id={"customer_tab65467849874564"}
                                tabLink="#customer_page"
                            >
                                {fa.customer}
                            </Button>
                        </Segmented>
                    </Subnavbar>
                ) : (
                    ""
                )}
            </Navbar>
            {role === "shop_admin" ? SHome() : CHome()}

            <CardsListPopup />
            <BuysListPopup />
            <AddCreditPopup />
        </Page>
    );
};
