var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { createStore, Dom7 as $$, request, getDevice } from "framework7";
import { f7, } from "framework7-react";
import fa from "../lang/fa";
import imageCompression from "browser-image-compression";
import { number, postData } from "../Helper";
var dv = getDevice({ userAgent: "SOME_USER_AGENT" });
var store = createStore({
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
    actions: {
        setProp: function (_a, data) {
            var state = _a.state;
            state.prop = data;
        },
        setUniqueCode: function (_a, data) {
            var state = _a.state;
            state.unique_code = data;
        },
        setActivePercent: function (_a, _b) {
            var state = _a.state, dispatch = _a.dispatch;
            var data = _b.data, e = _b.e;
            state.active = __assign(__assign({}, state.active), {
                off_percent: parseInt((data * 100) / e),
                off_price: number(data),
            });
        },
        setActivePrice: function (_a, _b) {
            var state = _a.state, dispatch = _a.dispatch;
            var data = _b.data, e = _b.e;
            state.active = __assign(__assign({}, state.active), { off_price: number((data * e) / 100), off_percent: data });
        },
        setPrice: function (_a, data) {
            var state = _a.state, dispatch = _a.dispatch;
            state.price =
                data -
                    parseInt(store.getters.off_price.value &&
                        store.getters.off_price.value.replaceAll(",", ""));
        },
        emptyItemEditData: function (_a) {
            var state = _a.state;
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
                },
            };
        },
        setActive: function (_a, res) {
            var state = _a.state, dispatch = _a.dispatch;
            state.active = __assign(__assign({}, state.active), {
                off_price: number(res.off_price),
                off_percent: res.off_percent,
                start_date: res.start_date,
                end_date: res.end_date,
                status: 1,
            });
        },
        setActiveDate: function (_a, _b) {
            var state = _a.state;
            var s = _b.s, e = _b.e;
            state.active = __assign(__assign({}, state.active), { start_date: s, end_date: e });
        },
        setItemEdit: function (_a) {
            var state = _a.state, dispatch = _a.dispatch;
            dispatch("setActiveToOff");
            state.itemEditData = __assign(__assign({}, state.itemEditData), {
                codes: __spreadArray([], store.getters.codes.value, true),
                count: parseInt(store.getters.itemCount.value),
                name: store.getters.itemName.value,
                images: __spreadArray([], store.getters.image.value, true),
                offs: __spreadArray([], store.getters.offs.value, true),
                active: __assign({}, store.getters.active.value),
                unique_code: store.getters.uc.value,
                shop: store.getters.shopId.value,
                status: 1,
            });
        },
        setItemEditData: function (_a, data) {
            var state = _a.state, dispatch = _a.dispatch;
            request({
                url: "ShopItems/edit-mobile",
                method: "POST",
                dataType: "json",
                async: true,
                contentType: "application/json",
                data: { unique_code: data },
                beforeSend: function (xhr) {
                    dispatch("setLoading", true);
                },
                success: function (res, status, xhr) {
                    dispatch("setActive", res.active);
                    dispatch("setImages", __spreadArray([], res.images, true));
                    dispatch("setCodes", __spreadArray([], res.codes, true));
                    dispatch("setOffs", __spreadArray([], res.offs, true));
                    dispatch("setUniqueCode", res.unique_code);
                    dispatch("setShopId", res.shopId);
                },
                error: function (xhr, status, message) {
                    console.log(message);
                },
                complete: function (xhr, status) {
                    dispatch("setLoading", false);
                },
            });
        },
        setImages: function (_a, image) {
            var state = _a.state;
            if (image === void 0) { image = []; }
            state.image = image;
        },
        setItemName: function (_a, name) {
            var state = _a.state;
            state.itemName = name;
        },
        setItemCount: function (_a, count) {
            var state = _a.state;
            state.itemCount = parseInt(count);
        },
        setOffs: function (_a, data) {
            var state = _a.state, dispatch = _a.dispatch;
            state.offs = data;
            dispatch("setActiveToOff");
        },
        setActiveToOff: function (_a) {
            var state = _a.state;
            var arr = store.getters.offs.value.filter(function (arr) {
                return arr.hasOwnProperty("id");
            });
            state.offs = __spreadArray([], arr, true);
            var f = store.getters.offs.value.some(function (a) {
                return (a.start_date === store.getters.active.value.start_date &&
                    a.end_date === store.getters.active.value.end_date &&
                    store.getters.active.value.off_price.length > 0);
            });
            if (!f &&
                store.getters.active.value.off_price.replaceAll(",", "") > 0 &&
                store.getters.active.value.start_date.length === 10 &&
                store.getters.active.value.end_date.length === 10)
                state.offs = __spreadArray(__spreadArray([], store.getters.offs.value, true), [
                    __assign({}, store.getters.active.value),
                ], false);
        },
        setPermissions: function (_a) {
            var state = _a.state;
            state.permissions = [];
            request.get("user_permission-mobile", "", function (data, status, xhr) {
                data.map(function (d) {
                    state.permissions = __spreadArray(__spreadArray([], state.permissions, true), [d.name], false);
                });
            }, function (xhr, status, message) {
                console.log(message);
            }, "json");
        },
        setItem: function (_a, _b) {
            var state = _a.state;
            var item = __rest(_b, []);
            state.item = item;
        },
        setCodes: function (_a, codes) {
            var state = _a.state;
            state.codes = codes;
        },
        setShopData: function (_a, data) {
            var state = _a.state;
            state.isLoading = true;
            request.json(f7.params.home + "get-shop-detail/" + data, function (fetchData) {
                state.shopData = fetchData;
                state.isLoading = false;
            });
        },
        setShopId: function (_a, shopId) {
            var state = _a.state;
            state.shopId = shopId;
        },
        setError: function (_a, hasError) {
            var state = _a.state;
            state.hasError = hasError;
        },
        setLoading: function (_a, isLoading) {
            var state = _a.state;
            state.isLoading = isLoading;
        },
        setUserShops: function (_a) {
            var state = _a.state;
            request.json(f7.params.home + "get-user-shops", function (data) {
                state.userShops = data;
            });
        },
        setCountApproveBill: function (_a) {
            var state = _a.state;
            request.get("count-of-approve-bill", function (data) {
                state.countApBill = data;
            });
        },
        setTheme: function (_a) {
            var state = _a.state;
            request.json(f7.params.home + "get-user-theme", function (data) {
                if (data.auto_darktheme === "1") {
                    state.theme = 1;
                    f7.enableAutoDarkMode();
                }
                else {
                    state.theme = 0;
                    f7.disableAutoDarkMode();
                }
            });
        },
        setFavShop: function (_a, data) {
            var state = _a.state;
            request.json(f7.params.home + "fav-shop-check/" + data, function (fetchData) {
                state.favShop = fetchData;
            });
        },
        setItemDetail: function (_a, data) {
            var state = _a.state, dispatch = _a.dispatch;
            request({
                url: f7.params.home + "Shops/get-shopItems-data/" + data,
                dataType: "json",
                beforeCreate: function (xhr, pa) {
                    dispatch("setLoading", !state.isLoading);
                },
                beforeOpen: function (xhr, parameters) {
                },
                beforeSend: function (xhr) { },
                error: function (xhr, status, message) {
                    console.log(message);
                },
                success: function (fetchItems, status, xhr) {
                    if (fetchItems.length > 0) {
                        state.itemDetail = fetchItems;
                    }
                    else {
                        state.itemDetail = [];
                    }
                },
                complete: function (xhr, status) {
                    dispatch("setLoading", !state.isLoading);
                },
                statusCode: {
                    404: function (xhr) { },
                },
            });
            dispatch("setLoading", true);
        },
        setUserRole: function (_a, data) {
            var state = _a.state;
            state.currentUserRole = data;
        },
        setJsonProps: function (_a, data) {
            var state = _a.state, dispatch = _a.dispatch;
            dispatch("setLoading", true);
            state.jsonProps = data;
            if (state.jsonProps.hasOwnProperty("id")) {
                dispatch("setLoading", false);
            }
        },
        setDoRefresh: function (_a, data) {
            var state = _a.state;
            state.doRefresh = data;
        },
        setArrayProps: function (_a, data) {
            var state = _a.state;
            state.arrayProps = { data: data };
        },
        getUserDetail: function (_a) {
            var state = _a.state, dispatch = _a.dispatch;
            fetch("".concat(f7.params.home, "get-user-info"))
                .then(function (res) {
                if (!res.ok) {
                    state.userDetail = {};
                    dispatch("setLoading", false);
                    dispatch("setError", !state.hasError);
                }
                return res.json();
            })
                .then(function (info) {
                if (info.hasOwnProperty("mobile")) {
                    state.userDetail = info;
                    dispatch("setLoading", false);
                }
                else {
                    state.userDetail = {};
                    dispatch("setLoading", false);
                    dispatch("setError", !state.hasError);
                }
            })
                .catch(function (error) {
                state.userDetail = {};
                dispatch("setLoading", false);
                dispatch("setError", !state.hasError);
            });
            dispatch("setLoading", true);
        },
        getCities: function (_a) {
            var state = _a.state;
            fetch("".concat(f7.params.home, "get-city-list"))
                .then(function (res) { return res.json(); })
                .then(function (data) {
                state.cities = data;
            });
        },
        getStates: function (_a, city) {
            var state = _a.state;
            fetch("".concat(f7.params.home, "get-state-list/").concat(city))
                .then(function (res) { return res.json(); })
                .then(function (data) {
                state.states = data;
            });
        },
        deleteFromSmartSelect: function (_a, data) {
            var state = _a.state;
            f7.dialog
                .create({
                title: "".concat(fa.delete, " <span class=\"text-color-gray text-size-12\">(").concat(data.caption, ")</span>"),
                buttons: [
                    {
                        text: fa.buttons.delete,
                        close: false,
                        color: "red",
                        bold: true,
                        onClick: function (dialog, e) {
                            request({
                                url: data.link,
                                dataType: "json",
                                method: "DELETE",
                                data: { id: data.id },
                                success: function (res, status, xhr) {
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
                                    $$("div.smart-select-list-" +
                                        store.state.sid +
                                        " ul")
                                        .find("div#row-" + data.id)
                                        .remove();
                                    $$(data.select)
                                        .find("option[value='".concat(data.id, "']"))
                                        .remove();
                                },
                                error: function (xhr, status, message) {
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
        addToSmartSelect: function (_a, data) {
            var state = _a.state;
            var el = "<div id=\"addItem\" class=\"list no-hairlines no-margin\">\n     <ul style=\"background-color: rgba(0,0,0, 0)\">\n    <li class=\"item-content item-input item-input-outline\">\n      <div class=\"item-inner\">\n        <div class=\"item-title item-floating-label\"  style=\"background-color: ".concat(dv.ios ? "#e9e9ea" : "#ffffff", "\">").concat(fa.name + " " + data.caption, "</div>\n        <div class=\"item-input-wrap\">\n        <input id=\"inputText\" dir=\"rtl\" autocomplete=\"off\" type=\"text\" class=\"text-align-center\" value=\"\" />\n          <span class=\"input-clear-button\"></span>\n        </div>\n      </div>\n    </li>\n    </ul>\n                    </div>");
            f7.dialog
                .create({
                title: "".concat(fa.add, " <span class=\"text-color-gray text-size-12\">(").concat(data.caption, ")</span>"),
                content: el,
                buttons: [
                    {
                        text: fa.buttons.add,
                        close: false,
                        color: "green",
                        bold: true,
                        onClick: function (dialog, e) {
                            request
                                .postJSON(data.uri, {
                                id: data.id,
                                item_name: $$("#inputText").val(),
                                prId: data.prId ? data.prId : null,
                            })
                                .then(function (res) {
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
                                $$(data.select).append("<option value=\"".concat(res.data.id, "\">").concat(res.data.name, "</option>"));
                                $$("div.smart-select-list-" +
                                    store.state.sid +
                                    " ul")
                                    .append("<div class=\"row no-gap\" id=\"row-".concat(res.data.id, "\" style=\"border-bottom : 1px solid #ccc;margin:0;align-items: normal;\">\n                                                <div class=\"col-70\">\n                                                    <li class=\"\" style=\"top:4px\">\n                                                    <label class=\"item-radio item-content\">\n                                                        <input type=\"radio\" name=\"radio-").concat(store.state.sid, "\" value=\"").concat(res.data.id, "\" />\n                                                            <i class=\"icon icon-radio\"></i>\n                                                            <div class=\"item-inner\">\n                                                                <div class=\"item-title\">").concat(res.data
                                    .name, "</div>\n                                                            </div>\n                                                            </label>\n                                                    </li>\n                                                </div>\n                                                <a class=\"col-15 rosso-corsa_red custom-list_button\" href=\"").concat(data.delete_uri +
                                    res.data.id, "\"><span class=\"material-icons\">delete</span></a>\n                                                <a class=\"col-15 crayola-blue custom-list_button\" href=\"").concat(data.edit_uri + res.data.id, "\"><span class=\"material-icons\">edit</span></a>\n                                            </div>"));
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
                    opened: function () {
                        $$("#inputText").focus();
                    },
                },
            })
                .open();
        },
        editSmartSelectItem: function (_a, data) {
            var state = _a.state;
            f7.dialog
                .create({
                title: "".concat(fa.edit, " <span class=\"text-color-gray text-size-12\">(").concat(data.caption, ")</span>"),
                content: "<div id=\"addItem\" class=\"list no-hairlines no-margin\">\n     <ul style=\"background-color: rgba(0,0,0, 0)\">\n    <li class=\"item-content item-input item-input-outline\">\n      <div class=\"item-inner\">\n        <div class=\"item-title item-floating-label\"  style=\"background-color: ".concat(dv.ios ? "#e9e9ea" : "#ffffff", "\">").concat(fa.name + " " + data.caption, "</div>\n        <div class=\"item-input-wrap\">\n        <input id=\"inputText\" dir=\"rtl\" autocomplete=\"off\" type=\"text\" class=\"text-align-center\" onfocus=\"let value = this.value; this.value = null; this.value=value\" value=\"").concat($$("div#row-" + data.id)
                    .find("div.item-title")
                    .text(), "\" />\n          <span class=\"input-clear-button\"></span>\n        </div>\n      </div>\n    </li>\n    </ul>\n                    </div>"),
                buttons: [
                    {
                        text: fa.buttons.edit,
                        close: false,
                        color: "green",
                        bold: true,
                        onClick: function (dialog, e) {
                            postData(data.link, {
                                id: data.id,
                                item_name: $$("#inputText").val(),
                            }, "PATCH")
                                .then(function (res) { return res.json(); })
                                .then(function (d) {
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
                                    $$("div.smart-select-list-" +
                                        store.state.sid +
                                        " ul")
                                        .find("div#row-" + data.id)
                                        .find("div.item-title")
                                        .text($$("#inputText").val());
                                    $$(data.select)
                                        .find("option[value='".concat(data.id, "']"))
                                        .text($$("#inputText").val());
                                }
                                else {
                                    f7.notification
                                        .create({
                                        subtitle: fa.alert.save_error,
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
                    open: function () {
                        $$("#inputText").focus();
                    },
                },
            })
                .open();
        },
        getSupplier: function (_a, _b) {
            var state = _a.state, dispatch = _a.dispatch;
            var id = _b.id, _c = _b.sup_id, sup_id = _c === void 0 ? "" : _c;
            dispatch("setLoading", true);
            state.shopId = id;
            var options = "";
            request.json(f7.params.home + "get-shop-suppliers/" + id, {}, function (fetchData, status, xhr) {
                state.suppliers = fetchData;
                fetchData.forEach(function (opt) {
                    options += "<option value=".concat(opt.id, " ").concat(String(opt.id) === String(sup_id) ? "selected" : "", " >").concat(opt.item_supplier, "</option>");
                });
                if (sup_id !== "") {
                    $$("#s_id_c656535")
                        .find(".item-after")
                        .text(fetchData.filter(function (o) { return String(o.id) === String(sup_id); })[0].item_supplier);
                }
                if (fetchData.length < 1) {
                    $$("select#item_supplier_id").html("");
                    $$("#s_id_c656535")
                        .find(".item-after")
                        .text("یافت نشد!");
                    return false;
                }
                options =
                    "<option value=\"select\">".concat(fa.select, "</option>") +
                        options;
                $$("select#item_supplier_id").html(options);
                if (sup_id === "") {
                    $$("#s_id_c656535").find(".item-after").text(fa.select);
                }
                dispatch("setLoading", false);
            });
        },
        getCategory: function (_a, _b) {
            var state = _a.state, dispatch = _a.dispatch;
            var id = _b.id, _c = _b.cat_id, cat_id = _c === void 0 ? "" : _c, _d = _b.type_id, type_id = _d === void 0 ? "" : _d, _e = _b.mod_id, mod_id = _e === void 0 ? "" : _e, _f = _b.size_id, size_id = _f === void 0 ? "" : _f;
            var options = "";
            dispatch("setLoading", true);
            request.json(f7.params.home + "get-shop-categories/" + id, {}, function (fetchData, status, xhr) {
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
                    options += "<option value=".concat(opt.id, "  ").concat(String(opt.id) === String(cat_id) ? " selected" : "", " >").concat(opt.item_category, "</option>");
                });
                if (cat_id !== "") {
                    $$("#s_id_g656535")
                        .find(".item-after")
                        .text(fetchData.filter(function (o) { return String(o.id) === String(cat_id); })[0].item_category);
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
                    "<option value=\"select\">".concat(fa.select, "</option>") +
                        options;
                $$("select#item_cat_id").html(options);
                if (cat_id === "") {
                    $$("#s_id_g656535").find(".item-after").text(fa.select);
                }
                dispatch("setLoading", false);
            });
        },
        getColor: function (_a, _b) {
            var state = _a.state, dispatch = _a.dispatch;
            var id = _b.id, _c = _b.col_id, col_id = _c === void 0 ? "" : _c;
            dispatch("setLoading", true);
            var options = "";
            request.json(f7.params.home + "get-shop-colors/" + id, {}, function (fetchData, status, xhr) {
                fetchData.forEach(function (opt) {
                    options += "<option value=".concat(opt.id, " ").concat(String(opt.id) === String(col_id) ? " selected" : "", ">").concat(opt.item_color, "</option>");
                });
                if (col_id !== "") {
                    $$("#s_id_r656535")
                        .find(".item-after")
                        .text(fetchData.filter(function (o) { return String(o.id) === String(col_id); })[0].item_color);
                }
                if (fetchData.length < 1) {
                    $$("select#item_color_id").html("");
                    $$("#s_id_r656535")
                        .find(".item-after")
                        .text("یافت نشد!");
                    return false;
                }
                options =
                    "<option value=\"select\">".concat(fa.select, "</option>") +
                        options;
                $$("select#item_color_id").html(options);
                if (col_id === "") {
                    $$("#s_id_r656535").find(".item-after").text(fa.select);
                }
                dispatch("setLoading", false);
            });
        },
        getType: function (_a, _b) {
            var state = _a.state, dispatch = _a.dispatch;
            var id = _b.id, _c = _b.type_id, type_id = _c === void 0 ? "" : _c;
            dispatch("setLoading", true);
            $$("select#item_type_id").html("");
            var options = "";
            request.json(f7.params.home + "get-shop-types/" + id, {}, function (fetchData, status, xhr) {
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
                    options += "<option value=".concat(opt.id, " ").concat(String(opt.id) === String(type_id)
                        ? " selected"
                        : "", ">").concat(opt.item_type, "</option>");
                });
                if (type_id !== "") {
                    $$("#s_id_t656535")
                        .find(".item-after")
                        .text(fetchData.filter(function (o) { return String(o.id) === String(type_id); })[0].item_type);
                }
                $$("#s_id_t656535").find("a").removeClass("disabled");
                options =
                    "<option value=\"select\">".concat(fa.select, "</option>") +
                        options;
                $$("select#item_type_id").html(options);
                if (type_id === "") {
                    $$("#s_id_t656535").find(".item-after").text(fa.select);
                }
                dispatch("setLoading", false);
            });
        },
        getModel: function (_a, _b) {
            var state = _a.state, dispatch = _a.dispatch;
            var id = _b.id, _c = _b.mod_id, mod_id = _c === void 0 ? "" : _c;
            dispatch("setLoading", true);
            $$("select#item_model_id").html("");
            var options = "";
            request.json(f7.params.home + "get-shop-models/" + id, {}, function (fetchData, status, xhr) {
                if (fetchData.length < 1) {
                    $$("select#item_model_id").html("");
                    $$("#s_id_m656535")
                        .find(".item-after")
                        .text("یافت نشد!");
                    $$("#s_id_m656535").find("a").removeClass("disabled");
                    return false;
                }
                fetchData.forEach(function (opt) {
                    options += "<option value=".concat(opt.id, " ").concat(String(opt.id) === String(mod_id) ? " selected" : "", ">").concat(opt.item_model, "</option>");
                });
                if (mod_id !== "") {
                    $$("#s_id_m656535")
                        .find(".item-after")
                        .text(fetchData.filter(function (o) { return String(o.id) === String(mod_id); })[0].item_model);
                }
                $$("#s_id_m656535").find("a").removeClass("disabled");
                options =
                    "<option value=\"select\">".concat(fa.select, "</option>") +
                        options;
                $$("select#item_model_id").html(options);
                if (mod_id === "") {
                    $$("#s_id_m656535").find(".item-after").text(fa.select);
                }
                dispatch("setLoading", false);
            });
        },
        getSize: function (_a, _b) {
            var state = _a.state, dispatch = _a.dispatch;
            var id = _b.id, _c = _b.size_id, size_id = _c === void 0 ? "" : _c;
            dispatch("setLoading", true);
            $$("select#item_size_id").html("");
            var options = "";
            request.json(f7.params.home + "get-shop-sizes/" + id, function (fetchData) {
                if (fetchData.length < 1) {
                    $$("select#item_size_id").html("");
                    $$("#s_id_s656535")
                        .find(".item-after")
                        .text("یافت نشد!");
                    $$("#s_id_s656535").find("a").removeClass("disabled");
                    return false;
                }
                fetchData.forEach(function (opt) {
                    options += "<option value=".concat(opt.id, " ").concat(String(opt.id) === String(size_id)
                        ? " selected"
                        : "", ">").concat(opt.item_size, "</option>");
                });
                if (size_id !== "") {
                    $$("#s_id_s656535")
                        .find(".item-after")
                        .text(fetchData.filter(function (o) { return String(o.id) === String(size_id); })[0].item_size);
                }
                $$("#s_id_s656535").find("a").removeClass("disabled");
                options =
                    "<option value=\"select\">".concat(fa.select, "</option>") +
                        options;
                $$("select#item_size_id").html(options);
                if (size_id === "")
                    $$("#s_id_s656535").find(".item-after").text(fa.select);
            });
        },
        uploadImage: function (_a, data) {
            var state = _a.state, dispatch = _a.dispatch;
            var images = state.image.length < 1 ? [] : state.image, count = 0;
            if (data.target.files.length > 4) {
                count = 4;
            }
            else {
                count = data.target.files.length;
            }
            dispatch("setImages", images);
            for (var i = 0; i < count; i++) {
                var options = {
                    maxSizeMB: 0.1,
                    maxWidthOrHeight: 500,
                    useWebWorker: true,
                };
                imageCompression(data.target.files[i], options)
                    .then(function (compressedFile) {
                    imageCompression
                        .getDataUrlFromFile(compressedFile)
                        .then(function (result) {
                        images = __spreadArray(__spreadArray([], images, true), [result], false);
                        dispatch("setImages", images);
                    });
                })
                    .catch(function (error) {
                    console.log(error.message);
                });
            }
        },
        removeImage: function (_a, data) {
            var state = _a.state;
            state.image.splice(data, 1);
            store.state.image = __spreadArray([], state.image, true);
        },
    },
    getters: {
        prop: function (_a) {
            var state = _a.state;
            return state.prop;
        },
        getUserDetail: function (_a) {
            var state = _a.state;
            return state.userDetail;
        },
        getItemDetail: function (_a) {
            var state = _a.state;
            return state.itemDetail;
        },
        approve: function (_a) {
            var state = _a.state;
            return state.countApBill;
        },
        image: function (_a) {
            var state = _a.state;
            return state.image;
        },
        getUserShops: function (_a) {
            var state = _a.state;
            return state.userShops;
        },
        getDoRefresh: function (_a) {
            var state = _a.state;
            return state.doRefresh;
        },
        getTheme: function (_a) {
            var state = _a.state;
            return state.listener;
        },
        getFavShop: function (_a) {
            var state = _a.state;
            return state.favShop;
        },
        getShopData: function (_a) {
            var state = _a.state;
            return state.shopData;
        },
        shopId: function (_a) {
            var state = _a.state;
            return state.shopId;
        },
        role: function (_a) {
            var state = _a.state;
            return state.currentUserRole;
        },
        getJsonProps: function (_a) {
            var state = _a.state;
            return state.jsonProps;
        },
        getArrayProps: function (_a) {
            var state = _a.state;
            return state.arrayProps;
        },
        detail: function (_a) {
            var state = _a.state;
            return state.userDetail;
        },
        cities: function (_a) {
            var state = _a.state;
            return state.cities;
        },
        states: function (_a) {
            var state = _a.state;
            return state.states;
        },
        loading: function (_a) {
            var state = _a.state;
            return state.isLoading;
        },
        error: function (_a) {
            var state = _a.state;
            return state.hasError;
        },
        getSid: function (_a) {
            var state = _a.state;
            return state.sid;
        },
        codes: function (_a) {
            var state = _a.state;
            return state.codes;
        },
        item: function (_a) {
            var state = _a.state;
            return state.item;
        },
        offs: function (_a) {
            var state = _a.state;
            return state.offs;
        },
        itemEditData: function (_a) {
            var state = _a.state;
            return state.itemEditData;
        },
        off_price: function (_a) {
            var state = _a.state;
            return state.active.off_price;
        },
        active: function (_a) {
            var state = _a.state;
            return state.active;
        },
        off_percent: function (_a) {
            var state = _a.state;
            return state.active.off_percent;
        },
        start_date: function (_a) {
            var state = _a.state;
            return state.active.start_date;
        },
        end_date: function (_a) {
            var state = _a.state;
            return state.active.end_date;
        },
        price: function (_a) {
            var state = _a.state;
            return state.price;
        },
        itemCount: function (_a) {
            var state = _a.state;
            return state.itemCount;
        },
        itemName: function (_a) {
            var state = _a.state;
            return state.itemName;
        },
        uc: function (_a) {
            var state = _a.state;
            return state.unique_code;
        },
    },
});
export default store;
//# sourceMappingURL=store.js.map