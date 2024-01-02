// First import createStore function from Framework7 core
import { createStore, Dom7 as $$, request, getDevice } from "framework7";

import {
    Button,
    f7,
    f7ready,
    Link,
    ListItem,
    Navbar,
    NavLeft,
    NavRight,
    NavTitle,
} from "framework7-react";
import fa from "../lang/fa";
import imageCompression from "browser-image-compression";
import { number, postData } from "../Helper";
import React, { useCallback } from "react";

const dv = getDevice({ userAgent: "SOME_USER_AGENT" });
// create store

const store = createStore({
    // start with the state (store data)

    state: {
        prop: null,
        itemDetail: [],
        item: {},
        shopData: {},
        shopId: 0,
        currentUserRole: "",
        jsonProps: {},
        arrayProps: [],
        userDetail: {},
        cities: [],
        states: [],
        favShop: 0,
        isLoading: true,
        hasError: false,
        theme: 0,
        doRefresh: true,
        userShops: [],
        countApBill: 0,
        suppliers: [],
        image: [],
        sid: 0,
        items: [],
        codes: [],
        offs: [],
        price: 0,
        itemCount: 0,
        itemName: "",
        permissions: [],
        itemEditData: {
            unique_code: "",
            shop: "",
            status: false,
            codes: [],
            count: 0,
            name: "",
            images: [],
            offs: [],
            active: {
                off_percent: 0,
                off_price: 0,
                start_date: "",
                end_date: "",
                status: 0,
            },
        },
        active: {
            off_percent: 0,
            off_price: 0,
            start_date: "",
            end_date: "",
        },
        unique_code: "",
    },

    // actions to operate with state and for async manipulations

    actions: {
        setProp({ state }, data) {
            state.prop = data;
        },
        setUniqueCode({ state }, data) {
            state.unique_code = data;
        },
        setActivePercent({ state, dispatch }, { data, e }) {
            state.active = {
                ...state.active,
                ...{
                    off_percent: parseInt((data * 100) / e),
                    off_price: number(data),
                },
            };
        },
        setActivePrice({ state, dispatch }, { data, e }) {
            state.active = {
                ...state.active,
                ...{ off_price: number((data * e) / 100), off_percent: data },
            };
        },
        setPrice({ state, dispatch }, data) {
            state.price =
                data -
                parseInt(
                    store.getters.off_price.value &&
                        store.getters.off_price.value.replaceAll(",", "")
                );
        },
        emptyItemEditData({ state }) {
            state.itemEditData = {
                unique_code: "",
                shop: "",
                status: false,
                codes: [],
                count: 0,
                name: "",
                images: [],
                offs: [],
                active: {
                    off_percent: 0,
                    off_price: 0,
                    start_date: "",
                    end_date: "",
                    status: 0,
                }
            }
        },
        emptyActive({state}){
            state.active = {...state.active,
            ...{off_percent: 0,
                    off_price: 0,
                    status: 0,}
            }
        },
        setActive({ state, dispatch }, res) {
            state.active = {
                ...state.active,
                ...{
                    off_price: res.off_price > 0 ? number(res.off_price) : '0',
                    off_percent: res.off_percent,
                    start_date: res.start_date,
                    end_date: res.end_date,
                    status: 1,
                },
            };
        },
        setActiveDate({ state }, { s, e }) {
            state.active = {
                ...state.active,
                ...{ start_date: s, end_date: e },
            };
        },
        setItemEdit({ state, dispatch }) {
            dispatch("setActiveToOff");
            state.itemEditData = {
                ...state.itemEditData,
                ...{
                    codes: [...store.getters.codes.value],
                    count: parseInt(store.getters.itemCount.value),
                    name: store.getters.itemName.value,
                    images: [...store.getters.image.value],
                    offs: [...store.getters.offs.value],
                    active: { ...store.getters.active.value },
                    unique_code: store.getters.uc.value,
                    shop: store.getters.shopId.value,
                    status: 1,
                },
            };
        },
        setItemEditData({ state, dispatch }, data) {
            request({
                url: "ShopItems/edit-mobile",
                method: "POST",
                dataType: "json",
                async: true,
                contentType: "application/json",
                data: { unique_code: data },
                beforeSend(xhr) {
                    dispatch("setLoading", true);
                },
                success(res, status, xhr) {
                    dispatch("setActive", {...res.active});
                    dispatch("setImages", [...res.images]);
                    dispatch("setCodes", [...res.codes]);
                    dispatch("setOffs", [...res.offs]);
                    dispatch("setUniqueCode", res.unique_code);
                    dispatch("setShopId", res.shopId);
                },
                error(xhr, status, message) {
                    console.log(message);
                },
                complete(xhr, status) {
                    dispatch("setLoading", false);
                },
            });
        },
        setImages({ state }, image = []) {
            state.image = image;
        },
        setItemName({ state }, name) {
            state.itemName = name;
        },
        setItemCount({ state }, count) {
            state.itemCount = parseInt(count);
        },
        setOffs({ state, dispatch }, data) {
            state.offs = data;
            dispatch("setActiveToOff");
        },
        setActiveToOff({ state }) {
            // const f = store.getters.offs.value.find(({start_date,end_date}) => start_date === data.start_date && end_date === data.end_date && data.off_price?.replaceAll(',','') === 0)
            const arr = store.getters.offs.value.filter((arr) =>
                arr.hasOwnProperty("id")
            );
            state.offs = [...arr];
            const f = store.getters.offs.value.some((a) => {
                return (
                    a.start_date === store.getters.active.value.start_date &&
                    a.end_date === store.getters.active.value.end_date &&
                    store.getters.active.value.off_price.length > 0
                );
            });

                if (
                    !f &&
                    store.getters.active.value.off_price.replaceAll(",", "") > 0 &&
                    store.getters.active.value.start_date.length === 10 &&
                    store.getters.active.value.end_date.length === 10
                )
                    state.offs = [
                        ...store.getters.offs.value,
                        {...store.getters.active.value},
                    ];

        },
        setPermissions({ state }) {
            state.permissions = [];
            request.get(
                "user_permission-mobile",
                "",
                (data, status, xhr) => {
                    data.map((d) => {
                        state.permissions = [...state.permissions, d.name];
                    });
                },
                (xhr, status, message) => {

                },
                "json"
            );
        },
        setItem({ state }, { ...item }) {
            state.item = item;
        },
        setCodes({ state }, codes) {
            state.codes = codes;
        },
        setShopData({ state }, data) {
            state.isLoading = true;
            request.json(
                f7.params.home + "get-shop-detail/" + data,
                function (fetchData) {
                    state.shopData = fetchData;
                    state.isLoading = false;
                }
            );
        },
        setShopId({ state }, shopId) {
            state.shopId = shopId;
        },
        setError({ state }, hasError) {
            state.hasError = hasError;
        },
        setLoading({ state }, isLoading) {
            state.isLoading = isLoading;
        },
        setUserShops({ state }) {
            request.json(f7.params.home + "get-user-shops", function (data) {
                state.userShops = data;
            });
        },
        setCountApproveBill({ state }) {
            request.get("count-of-approve-bill", (data) => {
                state.countApBill = data;
            });
        },
        setTheme({ state }) {
            request.json(f7.params.home + "get-user-theme", function (data) {
                if (data.auto_darktheme === "1") {
                    state.theme = 1;
                    f7.enableAutoDarkMode();
                } else {
                    state.theme = 0;
                    f7.disableAutoDarkMode();
                }
            });
        },
        setFavShop({ state }, data) {
            request.json(
                f7.params.home + "fav-shop-check/" + data,
                function (fetchData) {
                    state.favShop = fetchData;
                }
            );
        },
        setItemDetail({ state, dispatch }, data) {
            request({
                url: f7.params.home + "Shops/get-shopItems-data/" + data,
                dataType: "json",
                beforeCreate(xhr, pa) {
                    dispatch("setLoading", true);
                },
                beforeOpen(xhr, parameters) {
                    /**/
                },
                beforeSend(xhr) {
                },
                error(xhr, status, message) {
                    console.log(message);
                },
                success(fetchItems, status, xhr) {
                    if (fetchItems.length > 0) {
                        state.itemDetail = fetchItems;
                    } else {
                        state.itemDetail = [];
                    }
                },
                complete(xhr, status) {
                    dispatch("setLoading", false);
                },
                statusCode: {
                    404: function (xhr) {
                    },
                },
            })
        },
        setUserRole({ state }, data) {
            state.currentUserRole = data;
        },
        setJsonProps({ state, dispatch }, data) {
            dispatch("setLoading", true);
            state.jsonProps = data;
            if (state.jsonProps.hasOwnProperty("id")) {
                dispatch("setLoading", false);
            }
        },
        setDoRefresh({ state }, data) {
            state.doRefresh = data;
        },
        setArrayProps({ state }, data) {
            state.arrayProps = { data };
        },
        getUserDetail({ state, dispatch }) {
            fetch(`${f7.params.home}get-user-info`)
                .then((res) => {
                    if (!res.ok) {
                        state.userDetail = {};
                        dispatch("setLoading", false);
                        dispatch("setError", !state.hasError);
                    }
                    return res.json();
                })
                .then((info) => {
                    if (info.hasOwnProperty("mobile")) {
                        state.userDetail = info;
                        dispatch("setLoading", false);
                    } else {
                        state.userDetail = {};
                        dispatch("setLoading", false);
                        dispatch("setError", !state.hasError);
                    }
                })
                .catch((error) => {
                    state.userDetail = {};
                    dispatch("setLoading", false);
                    dispatch("setError", !state.hasError);
                });
            dispatch("setLoading", true);
        },
        getCities({ state }) {
            fetch(`${f7.params.home}get-city-list`)
                .then((res) => res.json())
                .then((data) => {
                    state.cities = data;
                });
        },
        getStates({ state }, city) {
            fetch(`${f7.params.home}get-state-list/${city}`)
                .then((res) => res.json())
                .then((data) => {
                    state.states = data;
                });
        },
        deleteFromSmartSelect({ state }, data) {
            f7.dialog
                .create({
                    title: `${fa.delete} <span class="text-color-gray text-size-12">(${data.caption})</span>`,
                    buttons: [
                        {
                            text: fa.buttons.delete,
                            close: false,
                            color: "red",
                            bold: true,
                            onClick: (dialog, e) => {
                                request({
                                    url: data.link,
                                    dataType: "json",
                                    method: "DELETE",
                                    data: { id: data.id },
                                    success(res, status, xhr) {
                                        f7.notification
                                            .create({
                                                icon: '<i class="f7-icons">checkmark_circle</i>',
                                                subtitle: fa.alert.save_ok,
                                                closeTimeout: 3000,
                                                closeOnClick: true,
                                                cssClass: "success",
                                            })
                                            .open();
                                        dialog.close();
                                        $$(
                                            "div.smart-select-list-" +
                                                store.state.sid +
                                                " ul"
                                        )
                                            .find("div#row-" + data.id)
                                            .remove();
                                        $$(data.select)
                                            .find(`option[value='${data.id}']`)
                                            .remove();
                                    },
                                    error(xhr, status, message) {
                                        f7.notification
                                            .create({
                                                subtitle: fa.alert.save_error,
                                                closeTimeout: 3000,
                                                closeOnClick: true,
                                                cssClass: "error",
                                            })
                                            .open();
                                    },
                                });
                            },
                        },
                        {
                            text: fa.close,
                            close: true,
                            color: "green",
                        },
                    ],
                })
                .open();
        },
        addToSmartSelect({ state }, data) {
            const el = `<div id="addItem" class="list no-hairlines no-margin">
     <ul style="background-color: rgba(0,0,0, 0)">
    <li class="item-content item-input item-input-outline">
      <div class="item-inner">
        <div class="item-title item-floating-label"  style="background-color: ${
            dv.ios ? "#e9e9ea" : "#ffffff"
        }">${fa.name + " " + data.caption}</div>
        <div class="item-input-wrap">
        <input id="inputText" dir="rtl" autocomplete="off" type="text" class="text-align-center" value="" />
          <span class="input-clear-button"></span>
        </div>
      </div>
    </li>
    </ul>
                    </div>`;

            f7.dialog
                .create({
                    title: `${fa.add} <span class="text-color-gray text-size-12">(${data.caption})</span>`,
                    content: el,
                    buttons: [
                        {
                            text: fa.buttons.add,
                            close: false,
                            color: "green",
                            bold: true,
                            onClick: (dialog, e) => {
                                request
                                    .postJSON(data.uri, {
                                        id: data.id,
                                        item_name: $$("#inputText").val(),
                                        prId: data.prId ? data.prId : null,
                                    })
                                    .then((res) => {
                                        f7.notification
                                            .create({
                                                icon: '<i class="f7-icons">checkmark_circle</i>',
                                                subtitle: fa.alert.save_ok,
                                                closeTimeout: 3000,
                                                closeOnClick: true,
                                                cssClass: "success",
                                            })
                                            .open();
                                        dialog.close();
                                        $$(data.select).append(
                                            `<option value="${res.data.id}">${res.data.name}</option>`
                                        );
                                        $$(
                                            "div.smart-select-list-" +
                                                store.state.sid +
                                                " ul"
                                        )
                                            .append(`<div class="row no-gap" id="row-${
                                            res.data.id
                                        }" style="border-bottom : 1px solid #ccc;margin:0;align-items: normal;">
                                                <div class="col-70">
                                                    <li class="" style="top:4px">
                                                    <label class="item-radio item-content">
                                                        <input type="radio" name="radio-${
                                                            store.state.sid
                                                        }" value="${
                                            res.data.id
                                        }" />
                                                            <i class="icon icon-radio"></i>
                                                            <div class="item-inner">
                                                                <div class="item-title">${
                                                                    res.data
                                                                        .name
                                                                }</div>
                                                            </div>
                                                            </label>
                                                    </li>
                                                </div>
                                                <a class="col-15 rosso-corsa_red custom-list_button" href="${
                                                    data.delete_uri +
                                                    res.data.id
                                                }"><span class="material-icons">delete</span></a>
                                                <a class="col-15 crayola-blue custom-list_button" href="${
                                                    data.edit_uri + res.data.id
                                                }"><span class="material-icons">edit</span></a>
                                            </div>`);
                                    })
                                    .catch(function (err) {
                                        f7.notification
                                            .create({
                                                subtitle: fa.alert.save_error,
                                                closeTimeout: 3000,
                                                closeOnClick: true,
                                                cssClass: "error",
                                            })
                                            .open();
                                    });
                            },
                        },
                        {
                            text: fa.close,
                            close: true,
                            color: "red",
                        },
                    ],
                    on: {
                        opened: () => {
                            $$("#inputText").focus();
                        },
                    },
                })
                .open();
        },
        editSmartSelectItem({ state }, data) {
            f7.dialog
                .create({
                    title: `${fa.edit} <span class="text-color-gray text-size-12">(${data.caption})</span>`,
                    content: `<div id="addItem" class="list no-hairlines no-margin">
     <ul style="background-color: rgba(0,0,0, 0)">
    <li class="item-content item-input item-input-outline">
      <div class="item-inner">
        <div class="item-title item-floating-label"  style="background-color: ${
            dv.ios ? "#e9e9ea" : "#ffffff"
        }">${fa.name + " " + data.caption}</div>
        <div class="item-input-wrap">
        <input id="inputText" dir="rtl" autocomplete="off" type="text" class="text-align-center" onfocus="let value = this.value; this.value = null; this.value=value" value="${$$(
            "div#row-" + data.id
        )
            .find("div.item-title")
            .text()}" />
          <span class="input-clear-button"></span>
        </div>
      </div>
    </li>
    </ul>
                    </div>`,
                    buttons: [
                        {
                            text: fa.buttons.edit,
                            close: false,
                            color: "green",
                            bold: true,
                            onClick: (dialog, e) => {
                                postData(
                                    data.link,
                                    {
                                        id: data.id,
                                        item_name: $$("#inputText").val(),
                                    },
                                    "PATCH"
                                )
                                    .then((res) => res.json())
                                    .then((d) => {
                                        if (d === 1) {
                                            f7.notification
                                                .create({
                                                    icon: '<i class="f7-icons">checkmark_circle</i>',
                                                    subtitle: fa.alert.save_ok,
                                                    closeTimeout: 3000,
                                                    closeOnClick: true,
                                                    cssClass: "success",
                                                })
                                                .open();
                                            dialog.close();
                                            $$(
                                                "div.smart-select-list-" +
                                                    store.state.sid +
                                                    " ul"
                                            )
                                                .find("div#row-" + data.id)
                                                .find("div.item-title")
                                                .text($$("#inputText").val());
                                            $$(data.select)
                                                .find(
                                                    `option[value='${data.id}']`
                                                )
                                                .text($$("#inputText").val());
                                        } else {
                                            f7.notification
                                                .create({
                                                    subtitle:
                                                        fa.alert.save_error,
                                                    closeTimeout: 3000,
                                                    closeOnClick: true,
                                                    cssClass: "error",
                                                })
                                                .open();
                                        }
                                    });
                            },
                        },
                        {
                            text: fa.close,
                            close: true,
                            color: "red",
                        },
                    ],
                    destroyOnClose: true,
                    on: {
                        open: () => {
                            $$("#inputText").focus();
                        },
                    },
                })
                .open();
        },
        getSupplier({ state, dispatch }, { id, sup_id = "" }) {
            dispatch("setLoading", true);
            state.shopId = id;
            let options = "";
            request.json(
                f7.params.home + "get-shop-suppliers/" + id,
                {},
                (fetchData, status, xhr) => {
                    state.suppliers = fetchData;
                    fetchData.forEach(function (opt) {
                        options += `<option value=${opt.id} ${
                            String(opt.id) === String(sup_id) ? "selected" : ""
                        } >${opt.item_supplier}</option>`;
                    });

                    if (sup_id !== "") {
                        $$("#s_id_c656535")
                            .find(".item-after")
                            .text(
                                fetchData.filter(
                                    (o) => String(o.id) === String(sup_id)
                                )[0].item_supplier
                            );
                    }
                    if (fetchData.length < 1) {
                        $$("select#item_supplier_id").html("");
                        $$("#s_id_c656535")
                            .find(".item-after")
                            .text("یافت نشد!");
                        return false;
                    }
                    options =
                        `<option value="select">${fa.select}</option>` +
                        options;
                    $$("select#item_supplier_id").html(options);
                    if (sup_id === "") {
                        $$("#s_id_c656535").find(".item-after").text(fa.select);
                    }
                    dispatch("setLoading", false);
                }
            );
        },
        getCategory(
            { state, dispatch },
            { id, cat_id = "", type_id = "", mod_id = "", size_id = "" }
        ) {
            let options = "";
            dispatch("setLoading", true);
            request.json(
                f7.params.home + "get-shop-categories/" + id,
                {},
                (fetchData, status, xhr) => {
                    if (fetchData.length < 1) {
                        $$("select#item_cat_id").html("");
                        $$("#s_id_g656535")
                            .find(".item-after")
                            .text("یافت نشد!");
                        $$("#s_id_m656535").find("a").addClass("disabled");
                        $$("#s_id_t656535").find("a").removeClass("disabled");
                        return false;
                    }

                    fetchData.forEach(function (opt) {
                        options += `<option value=${opt.id}  ${
                            String(opt.id) === String(cat_id) ? " selected" : ""
                        } >${opt.item_category}</option>`;
                    });

                    if (cat_id !== "") {
                        $$("#s_id_g656535")
                            .find(".item-after")
                            .text(
                                fetchData.filter(
                                    (o) => String(o.id) === String(cat_id)
                                )[0].item_category
                            );
                    }
                    if (cat_id !== "" && type_id !== "") {
                        store.dispatch("getType", {
                            id: cat_id,
                            type_id: type_id,
                        });
                        store.dispatch("getModel", {
                            id: type_id,
                            mod_id: mod_id,
                        });
                        store.dispatch("getSize", {
                            id: type_id,
                            size_id: size_id,
                        });
                    }
                    options =
                        `<option value="select">${fa.select}</option>` +
                        options;
                    $$("select#item_cat_id").html(options);
                    if (cat_id === "") {
                        $$("#s_id_g656535").find(".item-after").text(fa.select);
                    }
                    dispatch("setLoading", false);
                }
            );
        },
        getColor({ state, dispatch }, { id, col_id = "" }) {
            dispatch("setLoading", true);
            let options = "";
            request.json(
                f7.params.home + "get-shop-colors/" + id,
                {},
                (fetchData, status, xhr) => {
                    fetchData.forEach(function (opt) {
                        options += `<option value=${opt.id} ${
                            String(opt.id) === String(col_id) ? " selected" : ""
                        }>${opt.item_color}</option>`;
                    });
                    if (col_id !== "") {
                        $$("#s_id_r656535")
                            .find(".item-after")
                            .text(
                                fetchData.filter(
                                    (o) => String(o.id) === String(col_id)
                                )[0].item_color
                            );
                    }
                    if (fetchData.length < 1) {
                        $$("select#item_color_id").html("");
                        $$("#s_id_r656535")
                            .find(".item-after")
                            .text("یافت نشد!");
                        return false;
                    }
                    options =
                        `<option value="select">${fa.select}</option>` +
                        options;
                    $$("select#item_color_id").html(options);
                    if (col_id === "") {
                        $$("#s_id_r656535").find(".item-after").text(fa.select);
                    }
                    dispatch("setLoading", false);
                }
            );
        },
        getType({ state, dispatch }, { id, type_id = "" }) {
            dispatch("setLoading", true);
            $$("select#item_type_id").html("");
            let options = "";
            request.json(
                f7.params.home + "get-shop-types/" + id,
                {},
                (fetchData, status, xhr) => {
                    if (fetchData.length < 1) {
                        $$("select#item_type_id").html("");
                        $$("#s_id_t656535")
                            .find(".item-after")
                            .text("یافت نشد!");
                        $$("#s_id_m656535").find("a").addClass("disabled");
                        $$("#s_id_s656535").find("a").addClass("disabled");
                        $$("#s_id_t656535").find("a").removeClass("disabled");
                        return false;
                    }
                    fetchData.forEach(function (opt) {
                        options += `<option value=${opt.id} ${
                            String(opt.id) === String(type_id)
                                ? " selected"
                                : ""
                        }>${opt.item_type}</option>`;
                    });
                    if (type_id !== "") {
                        $$("#s_id_t656535")
                            .find(".item-after")
                            .text(
                                fetchData.filter(
                                    (o) => String(o.id) === String(type_id)
                                )[0].item_type
                            );
                    }
                    $$("#s_id_t656535").find("a").removeClass("disabled");
                    options =
                        `<option value="select">${fa.select}</option>` +
                        options;
                    $$("select#item_type_id").html(options);
                    if (type_id === "") {
                        $$("#s_id_t656535").find(".item-after").text(fa.select);
                    }
                    dispatch("setLoading", false);
                }
            );
        },
        getModel({ state, dispatch }, { id, mod_id = "" }) {
            dispatch("setLoading", true);
            $$("select#item_model_id").html("");
            let options = "";
            request.json(
                f7.params.home + "get-shop-models/" + id,
                {},
                (fetchData, status, xhr) => {
                    if (fetchData.length < 1) {
                        $$("select#item_model_id").html("");
                        $$("#s_id_m656535")
                            .find(".item-after")
                            .text("یافت نشد!");
                        $$("#s_id_m656535").find("a").removeClass("disabled");
                        return false;
                    }

                    fetchData.forEach(function (opt) {
                        options += `<option value=${opt.id} ${
                            String(opt.id) === String(mod_id) ? " selected" : ""
                        }>${opt.item_model}</option>`;
                    });
                    if (mod_id !== "") {
                        $$("#s_id_m656535")
                            .find(".item-after")
                            .text(
                                fetchData.filter(
                                    (o) => String(o.id) === String(mod_id)
                                )[0].item_model
                            );
                    }
                    $$("#s_id_m656535").find("a").removeClass("disabled");
                    options =
                        `<option value="select">${fa.select}</option>` +
                        options;
                    $$("select#item_model_id").html(options);
                    if (mod_id === "") {
                        $$("#s_id_m656535").find(".item-after").text(fa.select);
                    }
                    dispatch("setLoading", false);
                }
            );
        },
        getSize({ state, dispatch }, { id, size_id = "" }) {
            dispatch("setLoading", true);
            $$("select#item_size_id").html("");

            let options = "";
            request.json(
                f7.params.home + "get-shop-sizes/" + id,
                function (fetchData) {
                    if (fetchData.length < 1) {
                        $$("select#item_size_id").html("");
                        $$("#s_id_s656535")
                            .find(".item-after")
                            .text("یافت نشد!");
                        $$("#s_id_s656535").find("a").removeClass("disabled");
                        return false;
                    }
                    fetchData.forEach(function (opt) {
                        options += `<option value=${opt.id} ${
                            String(opt.id) === String(size_id)
                                ? " selected"
                                : ""
                        }>${opt.item_size}</option>`;
                    });
                    if (size_id !== "") {
                        $$("#s_id_s656535")
                            .find(".item-after")
                            .text(
                                fetchData.filter(
                                    (o) => String(o.id) === String(size_id)
                                )[0].item_size
                            );
                    }
                    $$("#s_id_s656535").find("a").removeClass("disabled");
                    options =
                        `<option value="select">${fa.select}</option>` +
                        options;
                    $$("select#item_size_id").html(options);
                    if (size_id === "")
                        $$("#s_id_s656535").find(".item-after").text(fa.select);
                }
            );
        },

        uploadImage({ state, dispatch }, data) {
            let images = state.image.length < 1 ? [] : state.image,
                count = 0;
            if (data.target.files.length > 4) {
                count = 4;
            } else {
                count = data.target.files.length;
            }
            dispatch("setImages", images);
            // state.image = [...images];
            for (let i = 0; i < count; i++) {
                let options = {
                    maxSizeMB: 0.1,
                    maxWidthOrHeight: 500,
                    useWebWorker: true,
                };
                imageCompression(data.target.files[i], options)
                    .then(function (compressedFile) {
                        imageCompression
                            .getDataUrlFromFile(compressedFile)
                            .then(function (result) {
                                images = [...images, result];
                                dispatch("setImages", images);
                            });
                    })
                    .catch(function (error) {
                        console.log(error.message);
                    });
            }
        },
        removeImage({ state }, data) {
            state.image.splice(data, 1);
            store.state.image = [...state.image];
        }, // ...
    },

    // getters to retrieve the state
    getters: {
        prop({ state }) {
            return state.prop;
        },
        getUserDetail({ state }) {
            return state.userDetail;
        },
        getItemDetail({ state }) {
            return state.itemDetail;
        },
        approve({ state }) {
            return state.countApBill;
        },
        image({ state }) {
            return state.image;
        },
        getUserShops({ state }) {
            return state.userShops;
        },
        getDoRefresh({ state }) {
            return state.doRefresh;
        },
        getTheme({ state }) {
            return state.listener;
        },
        getFavShop({ state }) {
            return state.favShop;
        },
        getShopData({ state }) {
            return state.shopData;
        },
        shopId({ state }) {
            return state.shopId;
        },
        role({ state }) {
            return state.currentUserRole;
        },
        getJsonProps({ state }) {
            return state.jsonProps;
        },
        getArrayProps({ state }) {
            return state.arrayProps;
        },
        detail({ state }) {
            return state.userDetail;
        },
        cities({ state }) {
            return state.cities;
        },
        states({ state }) {
            return state.states;
        },
        loading({ state }) {
            return state.isLoading;
        },
        error({ state }) {
            return state.hasError;
        },
        getSid({ state }) {
            return state.sid;
        },
        codes({ state }) {
            return state.codes;
        },
        item({ state }) {
            return state.item;
        },
        offs({ state }) {
            return state.offs;
        },
        itemEditData({ state }) {
            return state.itemEditData;
        },
        off_price({ state }) {
            return state.active.off_price;
        },
        active({ state }) {
            return state.active;
        },
        off_percent({ state }) {
            return state.active.off_percent;
        },
        start_date({ state }) {
            return state.active.start_date;
        },
        end_date({ state }) {
            return state.active.end_date;
        },
        price({ state }) {
            return state.price;
        },
        itemCount({ state }) {
            return state.itemCount;
        },
        itemName({ state }) {
            return state.itemName;
        },
        uc({ state }) {
            return state.unique_code;
        },
    },
});

// export store
export default store;
