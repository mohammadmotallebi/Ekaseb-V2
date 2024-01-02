"use strict";
var _this = this;
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
var fa_1 = __importDefault(require("../lang/fa"));
var Helper_1 = require("../Helper");
var react_1 = __importStar(require("react"));
var framework7_1 = require("framework7");
var store_1 = __importDefault(require("../store/store"));
exports.default = function (_a) {
    var itemProps = _a.itemProps, edit = _a.edit;
    var _b = (0, react_1.useState)(0), max = _b[0], setMax = _b[1];
    var shopId = (0, framework7_react_1.useStore)('shopId');
    var image = (0, framework7_react_1.useStore)('image');
    var _c = (0, react_1.useState)({}), formDataState = _c[0], setFormDataState = _c[1];
    var _d = (0, react_1.useState)(), navbar = _d[0], setNavbar = _d[1];
    var loading = (0, framework7_react_1.useStore)('loading');
    var dv = (0, framework7_1.getDevice)();
    var notificationOk = framework7_react_1.f7.notification.create({
        icon: '<i class="f7-icons">checkmark_circle</i>',
        subtitle: [fa_1.default.alert.save_ok],
        closeTimeout: 3000,
        closeOnClick: true,
    });
    var notificationError = framework7_react_1.f7.notification.create({
        icon: '<i class="f7-icons">multiply_circle_fill</i>',
        subtitle: [fa_1.default.alert.save_error],
        closeTimeout: 3000,
        closeOnClick: true,
    });
    var notificationEmpty = framework7_react_1.f7.notification.create({
        icon: '<i class="f7-icons">multiply_circle_fill</i>',
        subtitle: [fa_1.default.alert.fill],
        closeTimeout: 3000,
        closeOnClick: true,
    });
    (0, react_1.useEffect)(function () {
        if (dv.android) {
            setNavbar(react_1.default.createElement(framework7_react_1.Navbar, null, react_1.default.createElement(framework7_react_1.NavRight, null, react_1.default.createElement(framework7_react_1.Link, { popupClose: true, iconF7: "multiply_circle_fill" }), react_1.default.createElement(framework7_react_1.NavTitle, null, edit ? fa_1.default.edit_item : fa_1.default.add_item)), react_1.default.createElement(framework7_react_1.NavLeft, null, react_1.default.createElement(framework7_react_1.Button, { id: 'submit', fill: true, text: edit ? fa_1.default.buttons.edit : fa_1.default.buttons.add, onClick: submit }))));
        }
        if (dv.ios) {
            setNavbar(react_1.default.createElement(framework7_react_1.Navbar, null, react_1.default.createElement(framework7_react_1.NavLeft, null, react_1.default.createElement(framework7_react_1.Link, { popupClose: true, iconF7: "multiply_circle_fill" }), react_1.default.createElement(framework7_react_1.NavTitle, null, edit ? fa_1.default.edit_item : fa_1.default.add_item)), react_1.default.createElement(framework7_react_1.NavRight, null, react_1.default.createElement(framework7_react_1.Button, { id: 'submit', fill: true, text: edit ? fa_1.default.buttons.edit : fa_1.default.buttons.add, onClick: submit }))));
        }
    }, [dv.os]);
    (0, react_1.useEffect)(function () {
        setFormDataState(Object.assign({}, itemProps));
    }, []);
    var calScore = function (price, change) {
        if (change === void 0) { change = false; }
        var arr = [{ price: 100000, min: 1, max: 5 }, { price: 1000000, min: 6, max: 30 }, { price: 10000000, min: 31, max: 80 }, { price: 100000000, min: 81, max: 200 }];
        var max, score = 0;
        if (price > 0) {
            (0, framework7_1.Dom7)(edit ? '#range_score_slider-edit' : '#range_score_slider-add').empty();
            framework7_react_1.f7.range.destroy(edit ? '#range_score_slider-edit' : '#range_score_slider-add');
            var a = arr.filter(function (a) { return a.price >= price; }).shift();
            var res = Math.ceil((price * (((a.max * 100) / a.price)) / 100));
            max = (res < a.min) ? a.min : res;
            score = change ? (res < a.min) ? a.min : res : formDataState.score;
            (0, framework7_1.Dom7)('#item_score').val(score);
            setMax(max);
            framework7_react_1.f7.range.create({
                el: edit ? '#range_score_slider-edit' : '#range_score_slider-add',
                min: 1,
                max: max,
                value: score,
                label: true,
                scale: true,
                step: 1,
                scaleSteps: 5,
                scaleSubSteps: 5,
                formatScaleLabel: function (value) {
                    return parseInt(value);
                },
                on: {
                    change: function (e, v) {
                        (0, framework7_1.Dom7)('#item_score').val(v);
                    },
                    changed: function (e, v) {
                        setFormDataState(Object.assign(Object.assign({}, formDataState), { score: v }));
                        console.log(formDataState);
                    }
                }
            });
        }
    };
    var loadFunctions = function () {
        framework7_react_1.f7.preloader.show();
        framework7_react_1.f7.form.fillFromData('#add_item_form', {
            id: 1,
            images: [],
            item_cat_id: "select",
            item_color_id: "select",
            item_count: "",
            item_model_id: "select",
            item_name: "",
            item_price: "",
            item_score: "",
            item_size_id: "select",
            item_supplier_id: "select",
            item_type_id: "select",
        });
        (0, framework7_1.Dom7)("#s_id_t656535").find("a").addClass("disabled");
        (0, framework7_1.Dom7)("#s_id_t656535")
            .find(".item-after")
            .text("دسته بندی را انتخاب کنید.");
        (0, framework7_1.Dom7)("#s_id_m656535").find("a").addClass("disabled");
        (0, framework7_1.Dom7)("#s_id_m656535")
            .find(".item-after")
            .text("نوع کالا را انتخاب کنید.");
        (0, framework7_1.Dom7)("#s_id_s656535").find("a").addClass("disabled");
        (0, framework7_1.Dom7)("#s_id_s656535")
            .find(".item-after")
            .text("نوع کالا را انتخاب کنید.");
    };
    var handleHTML = (0, react_1.useCallback)(function () {
        store_1.default.dispatch('getSupplier', { id: shopId, sup_id: itemProps === null || itemProps === void 0 ? void 0 : itemProps.supplier_id });
        store_1.default.dispatch('getCategory', { id: shopId, cat_id: itemProps === null || itemProps === void 0 ? void 0 : itemProps.category_id, type_id: itemProps === null || itemProps === void 0 ? void 0 : itemProps.type_id, mod_id: itemProps === null || itemProps === void 0 ? void 0 : itemProps.model_id, size_id: itemProps === null || itemProps === void 0 ? void 0 : itemProps.size_id });
        store_1.default.dispatch('getColor', { id: shopId, col_id: itemProps === null || itemProps === void 0 ? void 0 : itemProps.color_id });
        framework7_react_1.f7.preloader.hide();
    }, [shopId]);
    var clearImages = function () {
        store_1.default.dispatch('setImages', []);
        store_1.default.state.images = [];
        (0, framework7_1.Dom7)('#item_images_i65497654654654').val('');
    };
    var submit = function (e) {
        var form = edit ? "#edit_item_form" : "#add_item_form";
        (0, framework7_1.Dom7)(_this).addClass("disabled");
        framework7_react_1.f7.form.fillFromData("#add_item_form", {
            'item_name': formDataState.item_name,
            'item_price': formDataState.price,
            'item_count': formDataState.Remain,
            'item_score': formDataState.score
        });
        var formData = framework7_react_1.f7.form.convertToData(form);
        formData["id"] = store_1.default.getters.shopId.value;
        formData.images = store_1.default.state.image;
        formData.unique_code = itemProps === null || itemProps === void 0 ? void 0 : itemProps.unique_code;
        console.log(formData);
        if (formData.item_name === "" ||
            formData.item_price < 1 ||
            formData.item_count < 1 ||
            formData.item_score < 1) {
            (0, framework7_1.Dom7)(_this).html(fa_1.default.buttons.add);
            (0, framework7_1.Dom7)(_this).removeClass("disabled");
            notificationEmpty.open();
            return false;
        }
        if ((0, framework7_1.Dom7)("select#item_supplier_id")[0][0].selected) {
            formData.item_supplier_id = "";
        }
        if ((0, framework7_1.Dom7)("select#item_cat_id")[0][0].selected) {
            formData.item_cat_id = "";
        }
        if ((0, framework7_1.Dom7)("select#item_type_id")[0].length > 0) {
            if ((0, framework7_1.Dom7)("select#item_type_id")[0][0].selected) {
                formData.item_type_id = "";
            }
        }
        if ((0, framework7_1.Dom7)("select#item_model_id")[0].length > 0) {
            if ((0, framework7_1.Dom7)("select#item_model_id")[0][0].selected) {
                formData.item_model_id = "";
            }
        }
        if ((0, framework7_1.Dom7)("select#item_size_id")[0].length > 0) {
            if ((0, framework7_1.Dom7)("select#item_size_id")[0][0].selected) {
                formData.item_size_id = "";
            }
        }
        if ((0, framework7_1.Dom7)("select#item_color_id")[0].length > 0) {
            if ((0, framework7_1.Dom7)("select#item_color_id")[0][0].selected) {
                formData.item_color_id = "";
            }
        }
        (0, Helper_1.postData)(framework7_react_1.f7.params.home + "ShopItems/store-mobile", formData)
            .then(function (response) { return response.json(); })
            .then(function (userData) {
            console.log(userData);
            if (userData > 0) {
                store_1.default.state.image = [];
                framework7_react_1.f7.$("#add_item_form").find("input").val("");
                (0, framework7_1.Dom7)(_this).html(fa_1.default.buttons.add);
                (0, framework7_1.Dom7)(_this).removeClass("disabled");
                notificationOk.open();
                store_1.default.dispatch('setItemDetail', shopId);
            }
            else {
                (0, framework7_1.Dom7)(_this).html(fa_1.default.buttons.add);
                (0, framework7_1.Dom7)(_this).removeClass("disabled");
                notificationError.open();
            }
        });
    };
    return (react_1.default.createElement(framework7_react_1.Popup, { className: edit ? "edit-item" : "add-item", noSwipeback: true, onPopupOpened: handleHTML, onPopupOpen: loadFunctions, onPopupClose: clearImages }, react_1.default.createElement(framework7_react_1.Page, { noNavbar: true, noToolbar: false, withSubnavbar: true }, navbar, react_1.default.createElement(framework7_react_1.List, { form: true, id: edit ? "edit_item_form" : "add_item_form", method: "post", className: "text-align-right" }, react_1.default.createElement(framework7_react_1.ListInput, { floatingLabel: true, outline: true, autocomplete: "off", label: fa_1.default.form.item_name, type: "text", name: "item_name", inputId: "item_name", id: "item_name_li", required: true, defaultValue: formDataState.item_name, onChange: function (e) { return setFormDataState(Object.assign(Object.assign({}, formDataState), { item_name: e.target.value })); }, clearButton: true, style: { marginBottom: "-13px" } }), react_1.default.createElement(framework7_react_1.ListInput, { floatingLabel: true, outline: true, autocomplete: "off", label: fa_1.default.form.price, inputmode: "decimal", name: "item_price", inputId: "item_price", id: "item_price_li", pattern: "[0-9]*", required: true, defaultValue: formDataState.price, clearButton: true, style: { marginBottom: "-13px" }, onChange: function (e) {
            (0, Helper_1.inputNumber)(e);
            setFormDataState(Object.assign(Object.assign({}, formDataState), { price: e.target.value }));
            calScore(e.target.value.replaceAll(',', ''), true);
        } }), react_1.default.createElement(framework7_react_1.ListInput, { floatingLabel: true, outline: true, autocomplete: "off", label: fa_1.default.form.count, name: "item_count", inputId: "item_count", id: "item_count_li", pattern: "[0-9]*", required: true, defaultValue: formDataState.Remain, onChange: function (e) { return setFormDataState(Object.assign(Object.assign({}, formDataState), { Remain: e.target.value })); }, clearButton: true, style: { marginBottom: "-13px" } }), react_1.default.createElement(framework7_react_1.ListInput, { floatingLabel: true, outline: true, autocomplete: "off", label: fa_1.default.form.score, name: "item_score", inputId: "item_score", id: "item_score_li", pattern: "[0-9]*", required: true, defaultValue: formDataState.score, errorMessage: "حداکثر امتباز مجاز : " + max, errorMessageForce: true, clearButton: true, style: { marginBottom: "-10px" }, onChange: function (e) {
            setFormDataState(Object.assign(Object.assign({}, formDataState), { score: e.target.value }));
            if (e.target.value > max) {
                setFormDataState(Object.assign(Object.assign({}, formDataState), { score: max }));
            }
            framework7_react_1.f7.range.get(edit ? '#range_score_slider-edit' : '#range_score_slider-add').setValue(e.target.value);
        } }), react_1.default.createElement(framework7_react_1.ListItem, { className: "mb-2 block mt-0" }, react_1.default.createElement("div", { className: 'range-slider', id: edit ? 'range_score_slider-edit' : 'range_score_slider-add' })), react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.form.item_supplier, smartSelect: true, smartSelectParams: {
            openIn: "popup",
            scrollToSelectedItem: true,
            popupCloseLinkText: fa_1.default.close_icon,
            closeOnSelect: true,
            renderItem: function (item) {
                if (item.value === (itemProps === null || itemProps === void 0 ? void 0 : itemProps.supplier_id)) {
                    item.selected = true;
                }
                store_1.default.state.sid = item.id;
                return "\n                    <div class=\"row no-gap\" id=\"row-".concat(item.value, "\" style=\"border-bottom : 1px solid rgba(0,0,0,0.05);margin:0;align-items: normal;\">\n                    <div class=").concat(item.value === "select" ? "col" : "col-70", ">\n                     <li class=\"\" style=\"top:4px\">\n                    <label class=\"item-radio item-content  ").concat(item.value === "select" ? "text-color-gray" : "", "\">\n                    <input type=\"radio\" name=\"radio-").concat(item.id, "\" value=\"").concat(item.value, "\" ").concat(item.selected ? "checked" : "", " />\n                    <i class=\"icon icon-radio\"></i>\n                    <div class=\"item-inner\">\n                    <div class=\"item-title\">").concat(item.text, "</div>\n                    </div>\n                    </label></li></div>\n                    ").concat(item.value === "select"
                    ? ""
                    : "<a class=\"col-15 rosso-corsa_red custom-list_button link\" href=\"/delete-supplier/".concat(item.value, "/\"><span class=\"material-icons\">delete</span></a>\n                               <a class=\"col-15 crayola-blue custom-list_button link\" href=\"/edit-supplier/").concat(item.value, "/\"><span class=\"material-icons\">edit</span></a>"), "\n\n                    </div>");
            },
            on: {
                opened: function (popup) {
                    console.log(store_1.default.state.shopId);
                    (0, framework7_1.Dom7)("<div class=\"fab fab-extended fab-center-bottom\"><a href=\"/add-supplier/".concat(store_1.default.state.shopId, "\"><i class=\"icon f7-icons\">plus</i></a></div>")).insertAfter('div[data-select-name = "item_supplier_id"] .navbar');
                }
            },
        }, id: "s_id_c656535" }, react_1.default.createElement("select", { name: "item_supplier_id", id: "item_supplier_id", className: "text-align-right" })), react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.form.item_category, smartSelect: true, smartSelectParams: {
            openIn: "popup",
            scrollToSelectedItem: true,
            popupCloseLinkText: fa_1.default.close_icon,
            closeOnSelect: true,
            renderItem: function (item) {
                if (item.value === (itemProps === null || itemProps === void 0 ? void 0 : itemProps.category_id)) {
                    item.selected = true;
                }
                store_1.default.state.sid = item.id;
                return "\n                    <div class=\"row no-gap\" id=\"row-".concat(item.value, "\" style=\"border-bottom : 1px solid #ccc;margin:0;align-items: normal;\">\n                    <div class=").concat(item.value === "select" ? "col" : "col-70", ">\n                     <li class=\"\" style=\"top:4px\">\n                    <label class=\"item-radio item-content  ").concat(item.value === "select" ? "text-color-gray" : "", "\">\n                    <input type=\"radio\" name=\"radio-").concat(item.id, "\" value=\"").concat(item.value, "\" ").concat(item.selected ? "checked" : "", " />\n                    <i class=\"icon icon-radio\"></i>\n                    <div class=\"item-inner\">\n                    <div class=\"item-title\">").concat(item.text, "</div>\n                    </div>\n                    </label></li></div>\n                    ").concat(item.value === "select"
                    ? ""
                    : "<a class=\"col-15 rosso-corsa_red custom-list_button link\" href=\"/delete-category/".concat(item.value, "\"><span class=\"material-icons\">delete</span></a>\n                               <a class=\"col-15 crayola-blue custom-list_button link\" href=\"/edit-category/").concat(item.value, "\"><span class=\"material-icons\">edit</span></a>"), "\n\n                    </div>");
            },
            on: {
                opened: function (popup) {
                    (0, framework7_1.Dom7)("<div class=\"fab fab-extended fab-center-bottom\"><a href=\"/add-category/".concat(store_1.default.state.shopId, "\"><i class=\"icon f7-icons\">plus</i></a></div>")).insertAfter('div[data-select-name = "item_cat_id"] .navbar');
                },
                close: function (e) {
                    if (e.getValue() === 'select') {
                        (0, framework7_1.Dom7)("#s_id_t656535").find("a").addClass("disabled");
                        (0, framework7_1.Dom7)("#s_id_t656535")
                            .find(".item-after")
                            .text("دسته بندی را انتخاب کنید.");
                        (0, framework7_1.Dom7)("#s_id_m656535").find("a").addClass("disabled");
                        (0, framework7_1.Dom7)("#s_id_m656535")
                            .find(".item-after")
                            .text("نوع کالا را انتخاب کنید.");
                        (0, framework7_1.Dom7)("#s_id_s656535").find("a").addClass("disabled");
                        (0, framework7_1.Dom7)("#s_id_s656535")
                            .find(".item-after")
                            .text("نوع کالا را انتخاب کنید.");
                        (0, framework7_1.Dom7)("select#item_type_id").prop('selectedIndex', 0);
                        (0, framework7_1.Dom7)("select#item_cat_id").prop('selectedIndex', 0);
                        (0, framework7_1.Dom7)("select#item_model_id").prop('selectedIndex', 0);
                        (0, framework7_1.Dom7)("select#item_size_id").prop('selectedIndex', 0);
                        console.log((0, framework7_1.Dom7)("select#item_type_id"));
                        return false;
                    }
                    store_1.default.dispatch('getType', { id: e.getValue(), type_id: itemProps === null || itemProps === void 0 ? void 0 : itemProps.type_id });
                },
            },
        }, id: "s_id_g656535" }, react_1.default.createElement("select", { name: "item_cat_id", id: "item_cat_id", className: "text-align-right", defaultValue: itemProps === null || itemProps === void 0 ? void 0 : itemProps.category_id })), react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.form.item_type, smartSelect: true, smartSelectParams: {
            openIn: "popup",
            scrollToSelectedItem: true,
            popupCloseLinkText: fa_1.default.close_icon,
            closeOnSelect: true,
            disabled: true,
            renderItem: function (item) {
                if (item.value === (itemProps === null || itemProps === void 0 ? void 0 : itemProps.type_id)) {
                    item.selected = true;
                }
                store_1.default.state.sid = item.id;
                return "\n                    <div class=\"row no-gap\" id=\"row-".concat(item.value, "\" style=\"border-bottom : 1px solid #ccc;margin:0;align-items: normal;\">\n                    <div class=").concat(item.value === "select" ? "col" : "col-70", ">\n                     <li class=\"\" style=\"top:4px\">\n                    <label class=\"item-radio item-content  ").concat(item.value === "select" ? "text-color-gray" : "", "\">\n                    <input type=\"radio\" name=\"radio-").concat(item.id, "\" value=\"").concat(item.value, "\" ").concat(item.selected ? "checked" : "", " />\n                    <i class=\"icon icon-radio\"></i>\n                    <div class=\"item-inner\">\n                    <div class=\"item-title\">").concat(item.text, "</div>\n                    </div>\n                    </label></li></div>\n                    ").concat(item.value === "select"
                    ? ""
                    : "<a class=\"col-15 rosso-corsa_red custom-list_button link\" href=\"/delete-type/".concat(item.value, "\"><span class=\"material-icons\">delete</span></a>\n                               <a class=\"col-15 crayola-blue custom-list_button link\" href=\"/edit-type/").concat(item.value, "\"><span class=\"material-icons\">edit</span></a>"), "\n\n                    </div>");
            },
            on: {
                opened: function (popup) {
                    (0, framework7_1.Dom7)("<div class=\"fab fab-extended fab-center-bottom\"><a href=\"/add-type/".concat((0, framework7_1.Dom7)('#item_cat_id').val(), "/").concat(store_1.default.state.shopId, "\"><i class=\"icon f7-icons\">plus</i></a></div>")).insertAfter('div[data-select-name = "item_type_id"] .navbar');
                },
                close: function (e) {
                    store_1.default.dispatch('getModel', { id: e.getValue(), mod_id: itemProps === null || itemProps === void 0 ? void 0 : itemProps.model_id });
                    store_1.default.dispatch('getSize', { id: e.getValue(), size_id: itemProps === null || itemProps === void 0 ? void 0 : itemProps.size_id });
                },
            },
        }, id: "s_id_t656535" }, react_1.default.createElement("select", { name: "item_type_id", id: "item_type_id", className: "text-align-right" })), react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.form.item_model, smartSelect: true, smartSelectParams: {
            openIn: "popup",
            scrollToSelectedItem: true,
            popupCloseLinkText: fa_1.default.close_icon,
            closeOnSelect: true,
            renderItem: function (item) {
                if (item.value === (itemProps === null || itemProps === void 0 ? void 0 : itemProps.model_id)) {
                    item.selected = true;
                }
                store_1.default.state.sid = item.id;
                return "\n                    <div class=\"row no-gap\" id=\"row-".concat(item.value, "\" style=\"border-bottom : 1px solid #ccc;margin:0;align-items: normal;\">\n                    <div class=").concat(item.value === "select" ? "col" : "col-70", ">\n                     <li class=\"\" style=\"top:4px\">\n                    <label class=\"item-radio item-content  ").concat(item.value === "select" ? "text-color-gray" : "", "\">\n                    <input type=\"radio\" name=\"radio-").concat(item.id, "\" value=\"").concat(item.value, "\" ").concat(item.selected ? "checked" : "", " />\n                    <i class=\"icon icon-radio\"></i>\n                    <div class=\"item-inner\">\n                    <div class=\"item-title\">").concat(item.text, "</div>\n                    </div>\n                    </label></li></div>\n                    ").concat(item.value === "select"
                    ? ""
                    : "<a class=\"col-15 rosso-corsa_red custom-list_button link\" href=\"/delete-model/".concat(item.value, "\"><span class=\"material-icons\">delete</span></a>\n                               <a class=\"col-15 crayola-blue custom-list_button link\" href=\"/edit-model/").concat(item.value, "\"><span class=\"material-icons\">edit</span></a>"), "\n\n                    </div>");
            },
            on: {
                opened: function (popup) {
                    (0, framework7_1.Dom7)("<div class=\"fab fab-extended fab-center-bottom\"><a href=\"/add-model/".concat((0, framework7_1.Dom7)('#item_type_id').val(), "/").concat(store_1.default.state.shopId, "\"><i class=\"icon f7-icons\">plus</i></a></div>")).insertAfter('div[data-select-name = "item_model_id"] .navbar');
                }
            },
        }, id: "s_id_m656535" }, react_1.default.createElement("select", { name: "item_model_id", id: "item_model_id", className: "text-align-right" })), react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.form.item_size, smartSelect: true, smartSelectParams: {
            openIn: "popup",
            scrollToSelectedItem: true,
            popupCloseLinkText: fa_1.default.close_icon,
            closeOnSelect: true,
            renderItem: function (item) {
                if (item.value === (itemProps === null || itemProps === void 0 ? void 0 : itemProps.size_id)) {
                    item.selected = true;
                }
                store_1.default.state.sid = item.id;
                return "\n                    <div class=\"row no-gap\" id=\"row-".concat(item.value, "\" style=\"border-bottom : 1px solid #ccc;margin:0;align-items: normal;\">\n                    <div class=").concat(item.value === "select" ? "col" : "col-70", ">\n                     <li class=\"\" style=\"top:4px\">\n                    <label class=\"item-radio item-content  ").concat(item.value === "select" ? "text-color-gray" : "", "\">\n                    <input type=\"radio\" name=\"radio-").concat(item.id, "\" value=\"").concat(item.value, "\" ").concat(item.selected ? "checked" : "", " />\n                    <i class=\"icon icon-radio\"></i>\n                    <div class=\"item-inner\">\n                    <div class=\"item-title\">").concat(item.text, "</div>\n                    </div>\n                    </label></li></div>\n                    ").concat(item.value === "select"
                    ? ""
                    : "<a class=\"col-15 rosso-corsa_red custom-list_button link\" href=\"/delete-size/".concat(item.value, "\"><span class=\"material-icons\">delete</span></a>\n                               <a class=\"col-15 crayola-blue custom-list_button link\" href=\"/edit-size/").concat(item.value, "\"><span class=\"material-icons\">edit</span></a>"), "\n\n                    </div>");
            },
            on: {
                opened: function (popup) {
                    (0, framework7_1.Dom7)("<div class=\"fab fab-extended fab-center-bottom\"><a href=\"/add-size/".concat((0, framework7_1.Dom7)('#item_type_id').val(), "/").concat(store_1.default.state.shopId, "\"><i class=\"icon f7-icons\">plus</i></a></div>")).insertAfter('div[data-select-name = "item_size_id"] .navbar');
                }
            },
        }, id: "s_id_s656535" }, react_1.default.createElement("select", { name: "item_size_id", id: "item_size_id", className: "text-align-right" })), react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.form.item_color, smartSelect: true, smartSelectParams: {
            openIn: 'popup',
            scrollToSelectedItem: true,
            popupCloseLinkText: fa_1.default.close_icon,
            closeOnSelect: true,
            renderItem: function (item) {
                if (item.value === (itemProps === null || itemProps === void 0 ? void 0 : itemProps.color_id)) {
                    item.selected = true;
                }
                return "<div class=\"row no-gap\" id=\"row-".concat(item.value, "\" style=\"border-bottom : 1px solid #ccc;margin:0;align-items: normal;\">\n                                    <div class=").concat(item.value === "select" ? "col" : "col-70", ">\n                                     <li class=\"\" style=\"top:4px\">\n                                    <label class=\"item-radio item-content  ").concat(item.value === "select" ? "text-color-gray" : "", "\">\n                                    <input type=\"radio\" name=\"radio-").concat(item.id, "\" value=\"").concat(item.value, "\" ").concat(item.selected ? "checked" : "", " />\n                                    <i class=\"icon icon-radio\"></i>\n                                    <div class=\"item-inner\">\n                                    <div class=\"item-title\">").concat(item.text, "</div>\n                                    </div>\n                                    </label></li></div>\n                                    ").concat(item.value === "select"
                    ? ""
                    : "<a class=\"col-15 rosso-corsa_red custom-list_button link\" href=\"/delete-color/".concat(item.value, "\"><span class=\"material-icons\">delete</span></a>\n                                               <a class=\"col-15 crayola-blue custom-list_button link\" href=\"/edit-color/").concat(item.value, "\"><span class=\"material-icons\">edit</span></a>"), "\n                                    </div>");
            },
            on: {
                open: function (popup) {
                    var a = (0, framework7_1.Dom7)('div[data-select-name = "item_color_id"] a').attr('can');
                    console.log(a);
                    console.log(store_1.default.state.permissions.filter(function (permission) { return permission.includes(a); }));
                    (0, framework7_1.Dom7)("<div class=\"fab fab-extended fab-center-bottom\"><a href=\"/add-size/".concat((0, framework7_1.Dom7)('#item_type_id').val(), "/").concat(store_1.default.state.shopId, "\"><i class=\"icon f7-icons\">plus</i></a></div>")).insertAfter('div[data-select-name = "item_color_id"] .navbar');
                }
            },
        }, id: "s_id_r656535" }, react_1.default.createElement("select", { name: "item_color_id", id: "item_color_id", className: "text-align-right" })), react_1.default.createElement("input", { type: "file", id: "item_images_i65497654654654", name: "user_pic", accept: "image/*;capture=camera", style: { display: "none" }, multiple: true, onChange: function (e) { return store_1.default.dispatch('uploadImage', e); } }), react_1.default.createElement(framework7_react_1.ListItem, { link: "#", title: fa_1.default.buttons.images_list, onClick: function () {
            document
                .getElementById("item_images_i65497654654654")
                .click();
        } }, react_1.default.createElement("div", { slot: "after-title", style: {
            fontSize: "11px",
            color: "var(--f7-theme-color)",
            marginRight: "2px",
        } }, fa_1.default.image_count_limit), react_1.default.createElement(framework7_react_1.Icon, { slot: "after", f7: "photo_fill_on_rectangle_fill" }))), react_1.default.createElement(framework7_react_1.Block, { strong: true, className: "align-content-center" }, image.map(function (img, index) { return (react_1.default.createElement("div", { className: "chip", key: index, style: { height: "70px", marginLeft: "3px", borderRadius: '5px' } }, react_1.default.createElement("div", { className: "chip-media", style: { width: "70px", height: "70px" } }, react_1.default.createElement("img", { slot: "media", style: {
            width: "70px",
            height: "70px",
            borderRadius: '5px'
        }, src: img })), react_1.default.createElement("div", { className: "chip-label" }, index + 1), react_1.default.createElement("a", { href: "#", id: index, className: "chip-delete", onClick: function (e) { return store_1.default.dispatch('removeImage', e.target.id); } }))); })))));
};
//# sourceMappingURL=AddItemPopup.js.map