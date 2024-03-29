import {
    Block,
    Button,
    f7,
    Fab,
    Icon,
    Link,
    List,
    ListInput,
    ListItem,
    Navbar,
    NavLeft,
    NavRight,
    NavTitle,
    Page,
    Popup,
    Row,
    useStore,
} from "framework7-react";
import fa from "../lang/fa";
import { inputNumber, postData, number } from "../Helper";
import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { Dom7 as $$, request, getDevice } from "framework7";
import store from "../store/store";
export default (props) => {
    const [max, setMax] = useState(0);
    const [shopId, setShopId] = useState(0);
    const image = useStore("image");
    const [formDataState, setFormDataState] = useState({});
    const [navbar, setNavbar] = useState();
    const price = useRef("");
    const [priceString, setPriceString] = useState({price : ""});
    const [itemDetails, setItemDetails] = useState([]);
    const [colors, setColors] = useState([]);
    const [typeId, setTypeId] = useState("");
    const [modelId, setModelId] = useState("");
    const [sizeId, setSizeId] = useState("");
    const dv = getDevice();
    let notificationOk = f7.notification.create({
        icon: '<i class="f7-icons">checkmark_circle</i>',
        subtitle: [fa.alert.save_ok],
        closeTimeout: 3000,
        closeOnClick: true,
    });
    let notificationError = f7.notification.create({
        icon: '<i class="f7-icons">multiply_circle_fill</i>',
        subtitle: [fa.alert.save_error],
        closeTimeout: 3000,
        closeOnClick: true,
    });
    let notificationEmpty = f7.notification.create({
        icon: '<i class="f7-icons">multiply_circle_fill</i>',
        subtitle: [fa.alert.fill],
        closeTimeout: 3000,
        closeOnClick: true,
    });
    
    // const handleItemDetails = async () => {
    //     await fetch(f7.params.home + "Shops/get-shopItems-data/" + props.shopId)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log('ItemDetails =>', data)
    //             setItemDetails(data);
    //         });
    // }

    useEffect(() => {

        if (dv.android) {
            setNavbar(
                <Navbar>
                    <NavRight>
                        <Link popupClose iconF7="multiply_circle_fill"></Link>
                        <NavTitle>{props.edit ? fa.edit_item : fa.add_item}</NavTitle>
                    </NavRight>
                    <NavLeft>
                        <Button
                            id="submit"
                            fill
                            text={eprops.dit ? fa.buttons.edit : fa.buttons.add}
                            onClick={submit}
                        ></Button>
                    </NavLeft>
                </Navbar>
            );
        }
        if (dv.ios) {
            setNavbar(
                <Navbar>
                    <NavLeft>
                        <Link popupClose iconF7="multiply_circle_fill"></Link>
                        <NavTitle>{props.edit ? fa.edit_item : fa.add_item}</NavTitle>
                    </NavLeft>
                    <NavRight>
                        <Button
                            id="submit"
                            fill
                            text={props.edit ? fa.buttons.edit : fa.buttons.add}
                            onClick={submit}
                        ></Button>
                    </NavRight>
                </Navbar>
            );
        }
    }, [dv.os]);

    useEffect(() => {
        console.log('ItemProps =>', props)
        setFormDataState({ ...itemDetails });
    }, []);

    const calScore = (price, change = false) => {
        let arr = [
            { price: 100000, min: 1, max: 5 },
            { price: 1000000, min: 6, max: 30 },
            { price: 10000000, min: 31, max: 80 },
            { price: 100000000, min: 81, max: 200 },
        ];
        let max,
            score = 0;
        if (price > 0) {
            $$(
                props.edit ? "#range_score_slider-edit" : "#range_score_slider-add"
            ).empty();
            f7.range.destroy(
                props.edit ? "#range_score_slider-edit" : "#range_score_slider-add"
            );
            let a = arr.filter((a) => a.price >= price).shift();
            let res = Math.ceil((price * ((a.max * 100) / a.price)) / 100);
            max = res < a.min ? a.min : res;
            score = change ? (res < a.min ? a.min : res) : formDataState.score;
            $$("#item_score").val(score);
            setMax(max);
            f7.range.create({
                el: props.edit
                    ? "#range_score_slider-edit"
                    : "#range_score_slider-add",
                min: 1,
                max: max,
                value: score,
                label: true,
                scale: true,
                step: 1,
                scaleSteps: 5,
                scaleSubSteps: 5,
                formatScaleLabel: (value) => {
                    return parseInt(value);
                },
                on: {
                    change(e, v) {
                        $$("#item_score").val(v);
                    },
                    changed(e, v) {
                        setFormDataState({ ...formDataState, score: v });
                    },
                },
            });
        }
    };

    const loadFunctions = async () => {
        await handleCategory()
        await handleColor();
        await handleType();
        await handleSupplier();
        f7.form.fillFromData("#add_item_form", {
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

        $$("#s_id_t656535").find("a").addClass("disabled");
        $$("#s_id_t656535")
            .find(".item-after")
            .text("دسته بندی را انتخاب کنید.");
        $$("#s_id_m656535").find("a").addClass("disabled");
        $$("#s_id_m656535")
            .find(".item-after")
            .text("نوع کالا را انتخاب کنید.");
        $$("#s_id_s656535").find("a").addClass("disabled");
        $$("#s_id_s656535")
            .find(".item-after")
            .text("نوع کالا را انتخاب کنید.");
    };

    const handleHTML = useCallback(async () => {
        // await store.dispatch("getSupplier", {
        //     id: shopId,
        //     sup_id: itemDetails?.supplier_id,
        // });
        // await store.dispatch("getCategory", {
        //     id: shopId,
        //     cat_id: itemDetails?.category_id,
        //     type_id: itemDetails?.type_id,
        //     mod_id: itemDetails?.model_id,
        //     size_id: itemDetails?.size_id,
        // });

    }, [shopId]);

    const handleColor = async (e) => {
        let options = "";
        let option = "";
        await fetch(f7.params.home + "get-shop-colors")
            .then((response) => response.json())
            .then((data) => {
                data.forEach(function (opt) {
                    console.log("Color =>", opt);
                    option = opt;
                    options += "<option value=".concat(opt.id, " ").concat(String(opt.id) === String(opt.id) ? " selected" : "", ">").concat(opt.item_color, "</option>");
                });
                if (option.id !== "") {
                    $$("#s_id_r656535")
                        .find(".item-after")
                        .text(data.filter(function (o) { return String(o.id) === String(option.id); })[0].item_color);
                }
                if (data.length < 1) {
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
                if (option.id === "") {
                    $$("#s_id_r656535").find(".item-after").text(fa.select);
                }
            });
    }

    const handleType = async (cat_id) => {
        let id = ""
        $$("select#item_type_id").html("");
        var options = "";
        request.json(f7.params.home + "get-shop-types/" + cat_id, {}, function (fetchData, status, xhr) {
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
                id = opt.id;
                options += "<option value=".concat(opt.id, " ").concat(String(opt.id) === String(id)
                    ? " selected"
                    : "", ">").concat(opt.item_type, "</option>");
                setTypeId(opt.id);
            });
            if (id !== "") {
                $$("#s_id_t656535")
                    .find(".item-after")
                    .text(fetchData.filter(function (o) { return String(o.id) === String(id); })[0].item_type);
            }
            $$("#s_id_t656535").find("a").removeClass("disabled");
            options =
                "<option value=\"select\">".concat(fa.select, "</option>") +
                options;
            $$("select#item_type_id").html(options);
            if (id === "") {
                $$("#s_id_t656535").find(".item-after").text(fa.select);
            }
        });
    }

    const handleSupplier = async (e) => {
        let id = ""
        var options = "";
        request.json(f7.params.home + "get-shop-suppliers/" + props.shopId, {}, function (fetchData, status, xhr) {
            fetchData.forEach(function (opt) {
                id = opt.id;
                options += "<option value=".concat(opt.id, " ").concat(String(opt.id) === String(id) ? "selected" : "", " >").concat(opt.item_supplier, "</option>");
            });
            if (id !== "") {
                $$("#s_id_c656535")
                    .find(".item-after")
                    .text(fetchData.filter(function (o) { return String(o.id) === String(id); })[0].item_supplier);
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
            if (id === "") {
                $$("#s_id_c656535").find(".item-after").text(fa.select);
            }
        });
    }

    const handleCategory = async (e) => {
        let id = ""
         var options = "";
        request.json(f7.params.home + "get-shop-categories/" + props.shopId, {}, function (fetchData, status, xhr) {
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
                id = opt.id;
                options += "<option value=".concat(opt.id, "  ").concat(String(opt.id) === String(id) ? " selected" : "", " >").concat(opt.item_category, "</option>");
            });
            if (id !== "") {
                $$("#s_id_g656535")
                    .find(".item-after")
                    .text(fetchData.filter(function (o) { return String(o.id) === String(id); })[0].item_category);
            }
            if (id !== "" && typeId !== "") {
                store.dispatch("getType", {
                    id: typeId,
                    type_id: typeId,
                });
                store.dispatch("getModel", {
                    id: typeId,
                    mod_id: modelId,
                });
                store.dispatch("getSize", {
                    id: typeId,
                    size_id: size_id,
                });
            }
            options =
                "<option value=\"select\">".concat(fa.select, "</option>") +
                options;
            $$("select#item_cat_id").html(options);
            if (id === "") {
                $$("#s_id_g656535").find(".item-after").text(fa.select);
            }
        });
    }

    const handleSize = async (e) => {
        let id = e.target.value;
        $$("select#item_size_id").html("");
        let options = "";
        request.json(f7.params.home + "get-shop-sizes/" + typeId, function (fetchData) {
            if (fetchData.length < 1) {
                $$("select#item_size_id").html("");
                $$("#s_id_s656535")
                    .find(".item-after")
                    .text("یافت نشد!");
                $$("#s_id_s656535").find("a").removeClass("disabled");
                return false;
            }
            fetchData.forEach(function (opt) {
                options += "<option value=".concat(opt.id, " ").concat(String(opt.id) === String(id)
                    ? " selected"
                    : "", ">").concat(opt.item_size, "</option>");
            });
            if (id !== "") {
                $$("#s_id_s656535")
                    .find(".item-after")
                    .text(fetchData.filter(function (o) { return String(o.id) === String(id); })[0].item_size);
            }
            $$("#s_id_s656535").find("a").removeClass("disabled");
            options =
                "<option value=\"select\">".concat(fa.select, "</option>") +
                options;
            $$("select#item_size_id").html(options);
            if (id === "")
                $$("#s_id_s656535").find(".item-after").text(fa.select);
        });
    }

    const handleModel = async (e) => {
        let id = e.target.value;
        $$("select#item_model_id").html("");
        var options = "";
        request.json(f7.params.home + "get-shop-models/" + typeId, {}, function (fetchData, status, xhr) {
            if (fetchData.length < 1) {
                $$("select#item_model_id").html("");
                $$("#s_id_m656535")
                    .find(".item-after")
                    .text("یافت نشد!");
                $$("#s_id_m656535").find("a").removeClass("disabled");
                return false;
            }
            fetchData.forEach(function (opt) {
                options += "<option value=".concat(opt.id, " ").concat(String(opt.id) === String(id) ? " selected" : "", ">").concat(opt.item_model, "</option>");
            });
            if (id !== "") {
                $$("#s_id_m656535")
                    .find(".item-after")
                    .text(fetchData.filter(function (o) { return String(o.id) === String(id); })[0].item_model);
                    setModelId(id);
            }
            $$("#s_id_m656535").find("a").removeClass("disabled");
            options =
                "<option value=\"select\">".concat(fa.select, "</option>") +
                options;
            $$("select#item_model_id").html(options);
            if (id === "") {
                $$("#s_id_m656535").find(".item-after").text(fa.select);
            }
        });
    }
    const clearImages = () => {
        store.dispatch("setImages", []);
        store.state.images = [];
        $$("#item_images_i65497654654654").val("");
    };

    const submit = (e) => {
        const form = props.edit ? "#edit_item_form" : "#add_item_form";
        $$(this).addClass("disabled");
        f7.form.fillFromData("#add_item_form", {
            item_name: formDataState.item_name,
            item_price: formDataState.price,
            item_count: formDataState.Remain,
            item_score: formDataState.score,
        });
        let formData = f7.form.convertToData(form);

        formData["id"] = store.getters.shopId.value;
        formData.images = store.state.image;
        formData.unique_code = itemDetails?.unique_code;

        if (
            formData.item_name === "" ||
            formData.item_price < 1 ||
            formData.item_count < 1 ||
            formData.item_score < 1
        ) {
            $$(this).html(fa.buttons.add);
            $$(this).removeClass("disabled");
            notificationEmpty.open();
            return false;
        }

        if ($$("select#item_supplier_id")[0][0].selected) {
            formData.item_supplier_id = "";
        }
        if ($$("select#item_cat_id")[0][0].selected) {
            formData.item_cat_id = "";
        }
        if ($$("select#item_type_id")[0].length > 0) {
            if ($$("select#item_type_id")[0][0].selected) {
                formData.item_type_id = "";
            }
        }
        if ($$("select#item_model_id")[0].length > 0) {
            if ($$("select#item_model_id")[0][0].selected) {
                formData.item_model_id = "";
            }
        }
        if ($$("select#item_size_id")[0].length > 0) {
            if ($$("select#item_size_id")[0][0].selected) {
                formData.item_size_id = "";
            }
        }
        if ($$("select#item_color_id")[0].length > 0) {
            if ($$("select#item_color_id")[0][0].selected) {
                formData.item_color_id = "";
            }
        }

        postData(f7.params.home + "ShopItems/store-mobile", formData)
            .then((response) => response.json())
            .then((userData) => {
                if (userData > 0) {
                    store.state.image = [];
                    f7.$("#add_item_form").find("input").val("");
                    $$(this).html(fa.buttons.add);
                    $$(this).removeClass("disabled");
                    notificationOk.open();
                    store.dispatch("setItemDetail", userData);
                } else {
                    $$(this).html(fa.buttons.add);
                    $$(this).removeClass("disabled");
                    notificationError.open();
                }
            });
    };



    return (
        <Popup
            className={props.edit ? "edit-item" : "add-item"}
            noSwipeback
            onPopupOpened={handleHTML}
            onPopupOpen={loadFunctions}
            onPopupClose={clearImages}
        >
            <Page noNavbar={true} noToolbar={false} withSubnavbar={true}>
                {navbar}
                <List
                    form={true}
                    id={props.edit ? "edit_item_form" : "add_item_form"}
                    method={"post"}
                    className={"text-align-right"}
                >
                    <ListInput
                        floatingLabel
                        outline
                        autocomplete="off"
                        label={fa.form.item_name}
                        type="text"
                        name={"item_name"}
                        inputId={"item_name"}
                        id={"item_name_li"}
                        required
                        defaultValue={formDataState.item_name}
                        onChange={(e) =>
                            setFormDataState({
                                ...formDataState,
                                item_name: e.target.value,
                            })
                        }
                        clearButton
                        style={{ marginBottom: "-13px" }}
                    ></ListInput>
                    <ListInput
                        floatingLabel
                        outline
                        autocomplete="off"
                        label={fa.form.price}
                        inputmode="decimal"
                        name={"item_price"}
                        inputId={"item_price"}
                        id={"item_price_li"}
                        pattern="[0-9]*"
                        required
                        defaultValue={formDataState.price}
                        clearButton
                        style={{ marginBottom: "-13px" }}
                        onChange={(e) => {
                            inputNumber(e)
                            setFormDataState({
                                ...formDataState,
                                price: e.target.value,
                            });
                            calScore(e.target.value.replaceAll(",", ""), true);
                        }}
                    ></ListInput>
                    <ListInput
                        floatingLabel
                        outline
                        autocomplete="off"
                        label={fa.form.count}
                        name={"item_count"}
                        inputId={"item_count"}
                        id={"item_count_li"}
                        pattern="[0-9]*"
                        required
                        defaultValue={formDataState.Remain}
                        onChange={(e) =>
                            setFormDataState({
                                ...formDataState,
                                Remain: e.target.value,
                            })
                        }
                        clearButton
                        style={{ marginBottom: "-13px" }}
                    ></ListInput>

                    <ListInput
                        floatingLabel
                        outline
                        autocomplete="off"
                        label={fa.form.score}
                        name={"item_score"}
                        inputId={"item_score"}
                        id={"item_score_li"}
                        pattern="[0-9]*"
                        required
                        defaultValue={formDataState.score}
                        errorMessage={"حداکثر امتباز مجاز : " + max}
                        errorMessageForce={true}
                        clearButton
                        style={{ marginBottom: "-10px" }}
                        onChange={(e) => {
                            setFormDataState({
                                ...formDataState,
                                score: e.target.value,
                            });
                            if (e.target.value > max) {
                                setFormDataState({
                                    ...formDataState,
                                    score: max,
                                });
                            }
                            f7.range
                                .get(
                                    props.edit
                                        ? "#range_score_slider-edit"
                                        : "#range_score_slider-add"
                                )
                                .setValue(e.target.value);
                        }}
                    ></ListInput>
                    <ListItem className="mb-2 block mt-0">
                        <div
                            className="range-slider"
                            id={
                                props.edit
                                    ? "range_score_slider-edit"
                                    : "range_score_slider-add"
                            }
                        ></div>
                    </ListItem>
                    <ListItem
                        title={fa.form.item_supplier}
                        smartSelect
                        smartSelectParams={{
                            openIn: "popup",
                            scrollToSelectedItem: true,
                            popupCloseLinkText: fa.close_icon,
                            closeOnSelect: true,
                            //  renderSearchbar() {
                            //                       let self = this;
                            //                       return `<form class="searchbar">
                            //   <div class="searchbar-inner">
                            //     <div class="searchbar-input-wrap">
                            //       <input type="search" placeholder="ddsada" />
                            //       <i class="searchbar-icon"></i>
                            //       <span class="input-clear-button"></span>
                            //     </div>
                            //     <span class="searchbar-disable-button if-not-aurora">Cancel</span>
                            //   </div>
                            // </form>`
                            //
                            //                   },

                            renderItem(item) {
                                if (item.value === itemDetails?.supplier_id) {
                                    item.selected = true;
                                }
                                store.state.sid = item.id;
                                return `
                    <div class="row no-gap" id="row-${
                        item.value
                    }" style="border-bottom : 1px solid rgba(0,0,0,0.05);margin:0;align-items: normal;">
                    <div class=${item.value === "select" ? "col" : "col-70"}>
                     <li class="" style="top:4px">
                    <label class="item-radio item-content  ${
                        item.value === "select" ? "text-color-gray" : ""
                    }">
                    <input type="radio" name="radio-${item.id}" value="${
                                    item.value
                                }" ${item.selected ? "checked" : ""} />
                    <i class="icon icon-radio"></i>
                    <div class="item-inner">
                    <div class="item-title">${item.text}</div>
                    </div>
                    </label></li></div>
                    ${
                        item.value === "select"
                            ? ""
                            : `<a class="col-15 rosso-corsa_red custom-list_button link" href="/delete-supplier/${item.value}/"><span class="material-icons">delete</span></a>
                               <a class="col-15 crayola-blue custom-list_button link" href="/edit-supplier/${item.value}/"><span class="material-icons">edit</span></a>`
                    }

                    </div>`;
                            },
                            on: {
                                opened(popup) {
                                    $$(
                                        `<div class="fab fab-extended fab-center-bottom"><a href="/add-supplier/${store.state.shopId}"><i class="icon f7-icons">plus</i></a></div>`
                                    ).insertAfter(
                                        'div[data-select-name = "item_supplier_id"] .navbar'
                                    );
                                },
                            },
                        }}
                        id={"s_id_c656535"}
                    >
                        <select
                            name="item_supplier_id"
                            id={"item_supplier_id"}
                            className={"text-align-right"}
                        ></select>
                    </ListItem>
                    <ListItem
                        title={fa.form.item_category}
                        smartSelect
                        smartSelectParams={{
                            openIn: "popup",
                            scrollToSelectedItem: true,
                            popupCloseLinkText: fa.close_icon,
                            closeOnSelect: true,
                            renderItem(item) {
                                if (item.value === itemDetails?.category_id) {
                                    item.selected = true;
                                }
                                store.state.sid = item.id;
                                return `
                    <div class="row no-gap" id="row-${
                        item.value
                    }" style="border-bottom : 1px solid #ccc;margin:0;align-items: normal;">
                    <div class=${item.value === "select" ? "col" : "col-70"}>
                     <li class="" style="top:4px">
                    <label class="item-radio item-content  ${
                        item.value === "select" ? "text-color-gray" : ""
                    }">
                    <input type="radio" name="radio-${item.id}" value="${
                                    item.value
                                }" ${item.selected ? "checked" : ""} />
                    <i class="icon icon-radio"></i>
                    <div class="item-inner">
                    <div class="item-title">${item.text}</div>
                    </div>
                    </label></li></div>
                    ${
                        item.value === "select"
                            ? ""
                            : `<a class="col-15 rosso-corsa_red custom-list_button link" href="/delete-category/${item.value}"><span class="material-icons">delete</span></a>
                               <a class="col-15 crayola-blue custom-list_button link" href="/edit-category/${item.value}"><span class="material-icons">edit</span></a>`
                    }

                    </div>`;
                            },
                            on: {
                                opened(popup) {
                                    $$(
                                        `<div class="fab fab-extended fab-center-bottom"><a href="/add-category/${store.state.shopId}"><i class="icon f7-icons">plus</i></a></div>`
                                    ).insertAfter(
                                        'div[data-select-name = "item_cat_id"] .navbar'
                                    );
                                },
                                close: function (e) {
                                    if (e.getValue() === "select") {
                                        $$("#s_id_t656535")
                                            .find("a")
                                            .addClass("disabled");
                                        $$("#s_id_t656535")
                                            .find(".item-after")
                                            .text("دسته بندی را انتخاب کنید.");
                                        $$("#s_id_m656535")
                                            .find("a")
                                            .addClass("disabled");
                                        $$("#s_id_m656535")
                                            .find(".item-after")
                                            .text("نوع کالا را انتخاب کنید.");
                                        $$("#s_id_s656535")
                                            .find("a")
                                            .addClass("disabled");
                                        $$("#s_id_s656535")
                                            .find(".item-after")
                                            .text("نوع کالا را انتخاب کنید.");
                                        $$("select#item_type_id").prop(
                                            "selectedIndex",
                                            0
                                        );
                                        $$("select#item_cat_id").prop(
                                            "selectedIndex",
                                            0
                                        );
                                        $$("select#item_model_id").prop(
                                            "selectedIndex",
                                            0
                                        );
                                        $$("select#item_size_id").prop(
                                            "selectedIndex",
                                            0
                                        );
                                        return false;
                                    }
                                    store.dispatch("getType", {
                                        id: e.getValue(),
                                        type_id: itemDetails?.type_id,
                                    });
                                },
                            },
                        }}
                        id={"s_id_g656535"}
                    >
                        <select
                            name="item_cat_id"
                            id={"item_cat_id"}
                            className={"text-align-right"}
                            defaultValue={itemDetails?.category_id}
                        ></select>
                    </ListItem>
                    <ListItem
                        title={fa.form.item_type}
                        smartSelect
                        onChange={(e) => {
                            console.log("Closed", e);
                        }}
                        smartSelectParams={{
                            openIn: "popup",
                            scrollToSelectedItem: true,
                            popupCloseLinkText: fa.close_icon,
                            closeOnSelect: true,
                            disabled: true,
                            renderItem(item) {
                                if (item.value === itemDetails?.type_id) {
                                    item.selected = true;
                                }
                                store.state.sid = item.id;
                                return `
                    <div class="row no-gap" id="row-${
                        item.value
                    }" style="border-bottom : 1px solid #ccc;margin:0;align-items: normal;">
                    <div class=${item.value === "select" ? "col" : "col-70"}>
                     <li class="" style="top:4px">
                    <label class="item-radio item-content  ${
                        item.value === "select" ? "text-color-gray" : ""
                    }">
                    <input type="radio" name="radio-${item.id}" value="${
                                    item.value
                                }" ${item.selected ? "checked" : ""} />
                    <i class="icon icon-radio"></i>
                    <div class="item-inner">
                    <div class="item-title">${item.text}</div>
                    </div>
                    </label></li></div>
                    ${
                        item.value === "select"
                            ? ""
                            : `<a class="col-15 rosso-corsa_red custom-list_button link" href="/delete-type/${item.value}"><span class="material-icons">delete</span></a>
                               <a class="col-15 crayola-blue custom-list_button link" href="/edit-type/${item.value}"><span class="material-icons">edit</span></a>`
                    }

                    </div>`;
                            },
                            on: {
                                opened(popup) {
                                    $$(
                                        `<div class="fab fab-extended fab-center-bottom"><a href="/add-type/${$$(
                                            "#item_cat_id"
                                        ).val()}/${
                                            store.state.shopId
                                        }"><i class="icon f7-icons">plus</i></a></div>`
                                    ).insertAfter(
                                        'div[data-select-name = "item_type_id"] .navbar'
                                    );
                                },
                                close: function (e) {
                                    store.dispatch("getModel", {
                                        id: e.getValue(),
                                        mod_id: itemDetails?.model_id,
                                    });
                                    store.dispatch("getSize", {
                                        id: e.getValue(),
                                        size_id: itemDetails?.size_id,
                                    });
                                },
                            },
                        }}
                        id={"s_id_t656535"}
                    >
                        <select
                            name="item_type_id"
                            id={"item_type_id"}
                            className={"text-align-right"}
                        ></select>
                    </ListItem>
                    <ListItem
                        title={fa.form.item_model}
                        smartSelect
                        smartSelectParams={{
                            openIn: "popup",
                            scrollToSelectedItem: true,
                            popupCloseLinkText: fa.close_icon,
                            closeOnSelect: true,

                            renderItem(item) {
                                if (item.value === itemDetails?.model_id) {
                                    item.selected = true;
                                }
                                store.state.sid = item.id;
                                return `
                    <div class="row no-gap" id="row-${
                        item.value
                    }" style="border-bottom : 1px solid #ccc;margin:0;align-items: normal;">
                    <div class=${item.value === "select" ? "col" : "col-70"}>
                     <li class="" style="top:4px">
                    <label class="item-radio item-content  ${
                        item.value === "select" ? "text-color-gray" : ""
                    }">
                    <input type="radio" name="radio-${item.id}" value="${
                                    item.value
                                }" ${item.selected ? "checked" : ""} />
                    <i class="icon icon-radio"></i>
                    <div class="item-inner">
                    <div class="item-title">${item.text}</div>
                    </div>
                    </label></li></div>
                    ${
                        item.value === "select"
                            ? ""
                            : `<a class="col-15 rosso-corsa_red custom-list_button link" href="/delete-model/${item.value}"><span class="material-icons">delete</span></a>
                               <a class="col-15 crayola-blue custom-list_button link" href="/edit-model/${item.value}"><span class="material-icons">edit</span></a>`
                    }

                    </div>`;
                            },
                            on: {
                                opened(popup) {
                                    $$(
                                        `<div class="fab fab-extended fab-center-bottom"><a href="/add-model/${$$(
                                            "#item_type_id"
                                        ).val()}/${
                                            store.state.shopId
                                        }"><i class="icon f7-icons">plus</i></a></div>`
                                    ).insertAfter(
                                        'div[data-select-name = "item_model_id"] .navbar'
                                    );
                                },
                            },
                        }}
                        id={"s_id_m656535"}
                    >
                        <select
                            name="item_model_id"
                            id={"item_model_id"}
                            className={"text-align-right"}
                        ></select>
                    </ListItem>
                    <ListItem
                        title={fa.form.item_size}
                        smartSelect
                        smartSelectParams={{
                            openIn: "popup",
                            scrollToSelectedItem: true,
                            popupCloseLinkText: fa.close_icon,
                            closeOnSelect: true,
                            renderItem(item) {
                                if (item.value === itemDetails?.size_id) {
                                    item.selected = true;
                                }
                                store.state.sid = item.id;
                                return `
                    <div class="row no-gap" id="row-${
                        item.value
                    }" style="border-bottom : 1px solid #ccc;margin:0;align-items: normal;">
                    <div class=${item.value === "select" ? "col" : "col-70"}>
                     <li class="" style="top:4px">
                    <label class="item-radio item-content  ${
                        item.value === "select" ? "text-color-gray" : ""
                    }">
                    <input type="radio" name="radio-${item.id}" value="${
                                    item.value
                                }" ${item.selected ? "checked" : ""} />
                    <i class="icon icon-radio"></i>
                    <div class="item-inner">
                    <div class="item-title">${item.text}</div>
                    </div>
                    </label></li></div>
                    ${
                        item.value === "select"
                            ? ""
                            : `<a class="col-15 rosso-corsa_red custom-list_button link" href="/delete-size/${item.value}"><span class="material-icons">delete</span></a>
                               <a class="col-15 crayola-blue custom-list_button link" href="/edit-size/${item.value}"><span class="material-icons">edit</span></a>`
                    }

                    </div>`;
                            },
                            on: {
                                opened(popup) {
                                    $$(
                                        `<div class="fab fab-extended fab-center-bottom"><a href="/add-size/${$$(
                                            "#item_type_id"
                                        ).val()}/${
                                            store.state.shopId
                                        }"><i class="icon f7-icons">plus</i></a></div>`
                                    ).insertAfter(
                                        'div[data-select-name = "item_size_id"] .navbar'
                                    );
                                },
                            },
                        }}
                        id={"s_id_s656535"}
                    >
                        <select
                            name="item_size_id"
                            id={"item_size_id"}
                            className={"text-align-right"}
                        ></select>
                    </ListItem>
                    <ListItem
                        title={fa.form.item_color}
                        smartSelect
                        smartSelectParams={{
                            openIn: "popup",
                            scrollToSelectedItem: true,
                            popupCloseLinkText: fa.close_icon,
                            closeOnSelect: true,
                            renderItem(item) {
                                if (item.value === itemDetails?.color_id) {
                                    item.selected = true;
                                }
                                return `<div class="row no-gap" id="row-${
                                    item.value
                                }" style="border-bottom : 1px solid #ccc;margin:0;align-items: normal;">
                                    <div class=${
                                        item.value === "select"
                                            ? "col"
                                            : "col-70"
                                    }>
                                     <li class="" style="top:4px">
                                    <label class="item-radio item-content  ${
                                        item.value === "select"
                                            ? "text-color-gray"
                                            : ""
                                    }">
                                    <input type="radio" name="radio-${
                                        item.id
                                    }" value="${item.value}" ${
                                    item.selected ? "checked" : ""
                                } />
                                    <i class="icon icon-radio"></i>
                                    <div class="item-inner">
                                    <div class="item-title">${item.text}</div>
                                    </div>
                                    </label></li></div>
                                    ${
                                        item.value === "select"
                                            ? ""
                                            : `<a class="col-15 rosso-corsa_red custom-list_button link" href="/delete-color/${item.value}"><span class="material-icons">delete</span></a>
                                               <a class="col-15 crayola-blue custom-list_button link" href="/edit-color/${item.value}"><span class="material-icons">edit</span></a>`
                                    }
                                    </div>`;
                            },
                            on: {
                                open(popup) {
                                    const a = $$(
                                        'div[data-select-name = "item_color_id"] a'
                                    ).attr("can");
                                    $$(
                                        `<div class="fab fab-extended fab-center-bottom"><a href="/add-size/${$$(
                                            "#item_type_id"
                                        ).val()}/${
                                            store.state.shopId
                                        }"><i class="icon f7-icons">plus</i></a></div>`
                                    ).insertAfter(
                                        'div[data-select-name = "item_color_id"] .navbar'
                                    );
                                },
                            },
                        }}
                        id={"s_id_r656535"}
                    >
                        <select
                            name="item_color_id"
                            id={"item_color_id"}
                            className={"text-align-right"}
                        ></select>
                    </ListItem>

                    <input
                        type="file"
                        id="item_images_i65497654654654"
                        name="user_pic"
                        accept="image/*;capture=camera"
                        style={{ display: "none" }}
                        multiple
                        onChange={(e) => store.dispatch("uploadImage", e)}
                    />
                    <ListItem
                        link="#"
                        title={fa.buttons.images_list}
                        onClick={() => {
                            document
                                .getElementById("item_images_i65497654654654")
                                .click();
                        }}
                    >
                        <div
                            slot="after-title"
                            style={{
                                fontSize: "11px",
                                color: "var(--f7-theme-color)",
                                marginRight: "2px",
                            }}
                        >
                            {fa.image_count_limit}
                        </div>
                        <Icon
                            slot="after"
                            f7="photo_fill_on_rectangle_fill"
                        ></Icon>
                    </ListItem>
                </List>
                <Block strong className="align-content-center">
                    {image.map((img, index) => (
                        <div
                            className="chip"
                            key={index}
                            style={{
                                height: "70px",
                                marginLeft: "3px",
                                borderRadius: "5px",
                            }}
                        >
                            <div
                                className="chip-media"
                                style={{ width: "70px", height: "70px" }}
                            >
                                <img
                                    slot="media"
                                    style={{
                                        width: "70px",
                                        height: "70px",
                                        borderRadius: "5px",
                                    }}
                                    src={img}
                                />
                            </div>
                            <div className="chip-label">{index + 1}</div>
                            <a
                                href="#"
                                id={index}
                                className={"chip-delete"}
                                onClick={(e) =>
                                    store.dispatch("removeImage", e.target.id)
                                }
                            ></a>
                        </div>
                    ))}
                </Block>
            </Page>
        </Popup>
    );
};
