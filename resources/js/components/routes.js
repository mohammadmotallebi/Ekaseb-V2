import React from "react";

import HomePage from "./Layouts/HomePage";
import ConfirmSell from "./Layouts/ConfirmSell";
import AddBuy from "./Layouts/AddBuy";
import Menu from "./Layouts/Menu";
import Shops from "./Layouts/Shops";
import BuysListPopup from "./Popups/BuysListPopup";
import CardsListPopup from "./Popups/CardsListPopup";
import EditSecurity from "./Layouts/EditSecurity";
import ShopDetails from "./Layouts/ShopDetails";
import AddItem from "./Layouts/AddItem";
import ItemDetailPopup from "./Popups/ItemDetailPopup";
import AddItemPopup from "./Popups/AddItemPopup";
import SellsList from "./Layouts/SellsList";
import BuysList from "./Layouts/BuysList";
import EditTheme from "./Layouts/EditTheme";
import FavShops from "./Layouts/FavShops";
import Costs from "./Layouts/Costs";
import EditProfile from "./Layouts/EditProfile";
import {f7} from "framework7-react";
import EditItem from "./Popups/EditItem";
import {request} from "framework7";
import {Dom7 as $$} from "framework7";
import fa from "./lang/fa";
import store from "./store/store";

export default [
    {
        path: "/home",
        name: "home_54647987654654",
        id: "home_54647987654654",
        component: HomePage,
        options: {
            transition: "f7-parallax",
            props: {},
        },
    },
    {
        path: "/confirm-sell",
        name: "confirm-sell_546874987654",
        id: "confirm-sell_98798456132",
        component: ConfirmSell,
        options: {
            transition: "f7-parallax",
            props: {},
        },
    },
    {
        path: "/add-buy",
        id: "add-buy_564987656513",
        name: "add-buy_564987656513",
        component: AddBuy,
        options: {
            transition: "f7-parallax",
        },
    },
    {
        path: "/card-list",
        component: CardsListPopup,
        options: {
            transition: "f7-circle",
        },
    },
    {
        path: "/buy-list",
        name: "buys_list",
        component: BuysListPopup,
        options: {
            transition: "f7-circle",
        },
    },
    {
        path: "/menu",
        id: "menu_6546543254658798",
        name: "menu_6546543254658798",
        component: Menu,
        options: {
            transition: "f7-push",
            reloadCurrent: true,
        },
    },
    {
        path: "/shops",
        id: "shops_548979846513",
        name: "shops_548979846513",
        component: Shops,
        options: {
            transition: "f7-flip",
        },
    },
    {
        path: "/fav-shops",
        name: "fav-shops",
        component: FavShops,
        fav: true,
        options: {
            transition: "f7-flip",
        },
    },
    {
        path: "/shop-details/:id",
        component: ShopDetails,
        detail: true,
        options: {
            transition: "f7-flip",
        },
    },
    {
        path: "/shop_details",
        component: ShopDetails,
        options: {
            transition: "f7-flip",
        },
    },
    {
        path: "/edit-profile",
        name: "profile",
        component: EditProfile,
        options: {
            transition: "f7-push",
            props: {
                detail: {},
                cities: [],
                states: [],
            },
        },
    },
    {
        path: "/edit-security",
        name: "security",
        component: EditSecurity,
        options: {
            transition: "f7-cover",

            props: {
                data: {},
            },
        },
    },
    {
        path: "/add-item",
        id: "add-item",
        component: AddItem,
        options: {
            transition: "f7-parallax",
        },
        ignoreCache: true,
    },

    {
        path: "/sells",
        id: "sells",
        component: SellsList,
        options: {
            transition: "f7-parallax",
        },
    },
    {
        path: "/buys",
        id: "buys_78979846546464",
        name: "buys_78979846546464",
        component: BuysList,
        options: {
            transition: "f7-parallax",
        },
    },
    {
        path: "/theme",
        id: "theme",
        component: EditTheme,
        options: {
            transition: "f7-parallax",
        },
    },
    {
        path: "/costs",
        id: "costs",
        component: Costs,
        options: {
            transition: "f7-parallax",
        },
    },
    {
        path: "/item_detail_popup/",
        id: "item_detail_popup",
        popup: {
            component: ItemDetailPopup,
        },
        options: {
            transition: "f7-parallax",
        },
    },
    {
        path: "/edit-item/:id",
        id: "edit_item_8657645653463",
        popup: {
            component: EditItem,
        }
    },
    {
        path: "/delete-item/:id",
        id: "delete_item_8657645653463",
        beforeEnter({ app, to, resolve }) {
            const data = { "id": to.params.id };
                f7.dialog.create({
                    title: fa.delete,
                    text: fa.desc.delete_record,
                    buttons: [
                        {
                            text: fa.buttons.delete,
                            onClick(dialog, e){
                                request({
                                    url: "ShopItems/destroy",
                                    data: data,
                                    contentType: "application/json",
                                    async: true,
                                    method: "delete",
                                    beforeCreate(xhr, pa) {},
                                    beforeOpen(xhr, parameters) {
                                        /**/
                                    },
                                    beforeSend(xhr) {},
                                    success(data, status, xhr) {
                                        if (data === "EXIST_ERROR") {
                                            f7.notification
                                                .create({
                                                    icon: '<i class="f7-icons">checkmark_circle</i>',
                                                    text: fa.alert
                                                        .delete_item_error,
                                                    closeTimeout: 3000,
                                                    closeOnClick: true,
                                                })
                                                .open(true);
                                            return false;
                                        }
                                        if (data === "ERROR") {
                                            f7.notification
                                                .create({
                                                    icon: '<i class="f7-icons">multiply_circle_fill</i>',
                                                    title: fa.alert.error,
                                                    text: fa.alert.delete_error,
                                                    closeTimeout: 3000,
                                                    closeOnClick: true,
                                                })
                                                .open(true);
                                            return false;
                                        }
                                        if (data > 0) {
                                            f7.notification
                                                .create({
                                                    icon: '<i class="f7-icons">checkmark_circle</i>',
                                                    text: fa.alert
                                                        .delete_success,
                                                    closeTimeout: 3000,
                                                    closeOnClick: true,
                                                })
                                                .open(true);
                                        }
                                        app.store.dispatch(
                                            "setItemDetail",
                                            data
                                        );

                                        resolve();
                                    },
                                    error(xhr, status, message) {},
                                    complete(xhr, status) {
                                        dialog.close(true);

                                    },
                                    statusCode: {},
                                });
                            }
                        },
                        {
                            text: fa.buttons.cancel,
                            onClick(dialog, e){
                                dialog.close(true)
                            }
                        }
                    ],
                }).open();


        },
    },
    {
        path: "/edit-supplier/:id/",
        beforeEnter: function ({ app, to, resolve }) {
            app.store.dispatch("editSmartSelectItem", {
                id: to.params.id,
                link: f7.params.home + "ShopItemSupplier/update",
                select: "select#item_supplier_id",
                caption: fa.supplier,
            });
            resolve();
        },
    },
    {
        path: "/add-supplier/:id",
        beforeEnter: function ({ app, to, resolve }) {
            app.store.dispatch("addToSmartSelect", {
                id: to.params.id,
                select: "select#item_supplier_id",
                uri: "ShopItemSupplier/store/" + to.params.id,
                delete_uri: "/delete-supplier/",
                edit_uri: "/edit-supplier/",
                caption: fa.supplier,
            });
            resolve();
        },
    },
    {
        path: "/delete-supplier/:id",
        beforeEnter: function ({ app, to, resolve }) {
            app.store.dispatch("deleteFromSmartSelect", {
                id: to.params.id,
                link: "ShopItemSupplier/destroy",
                select: "select#item_supplier_id",
                caption: fa.supplier,
            });
            resolve();
        },
    },
    {
        path: "/edit-category/:id",
        beforeEnter: function ({ app, to, resolve }) {
            app.store.dispatch("editSmartSelectItem", {
                id: to.params.id,
                link: "ShopItemCategories/update",
                select: "select#item_cat_id",
                caption: fa.category,
            });
            resolve();
        },
    },
    {
        path: "/add-category/:id",
        beforeEnter: function ({ app, to, resolve }) {
            app.store.dispatch("addToSmartSelect", {
                id: to.params.id,
                select: "select#item_cat_id",
                uri: "ShopItemCategories/store/" + to.params.id,
                delete_uri: "/delete-category/",
                edit_uri: "/edit-category/",
                caption: fa.category,
            });
            resolve();
        },
    },
    {
        path: "/delete-category/:id",
        beforeEnter: function ({ app, to, resolve }) {
            app.store.dispatch("deleteFromSmartSelect", {
                id: to.params.id,
                link: "ShopItemCategories/destroy",
                select: "select#item_cat_id",
                caption: fa.category,
            });
            resolve();
        },
    },
    {
        path: "/edit-type/:id",
        beforeEnter: function ({ app, to, resolve }) {
            app.store.dispatch("editSmartSelectItem", {
                id: to.params.id,
                link: "ShopItemType/update",
                select: "select#item_type_id",
                caption: fa.type,
            });
            resolve();
        },
    },
    {
        path: "/add-type/:catId/:id",
        beforeEnter: function ({ app, to, resolve }) {
            app.store.dispatch("addToSmartSelect", {
                id: to.params.id,
                prId: to.params.catId,
                select: "select#item_type_id",
                uri: "ShopItemType/store",
                delete_uri: "/delete-type/",
                edit_uri: "/edit-type/",
                caption: fa.type,
            });
            resolve();
        },
    },
    {
        path: "/delete-type/:id",
        beforeEnter: function ({ app, to, resolve }) {
            app.store.dispatch("deleteFromSmartSelect", {
                id: to.params.id,
                link: "itemType/destroy",
                select: "select#item_type_id",
                caption: fa.type,
            });
            resolve();
        },
    },
    {
        path: "/edit-model/:id",
        beforeEnter: function ({ app, to, resolve }) {
            app.store.dispatch("editSmartSelectItem", {
                id: to.params.id,
                link: "ShopItemModel/update",
                select: "select#item_model_id",
                caption: fa.model,
            });
            resolve();
        },
    },
    {
        path: "/add-model/:typeId/:id",
        beforeEnter: function ({ app, to, resolve }) {
            app.store.dispatch("addToSmartSelect", {
                id: to.params.id,
                prId: to.params.typeId,
                select: "select#item_model_id",
                uri: "ShopItemModel/store",
                delete_uri: "/delete-model/",
                edit_uri: "/edit-model/",
                caption: fa.model,
            });
            resolve();
        },
    },
    {
        path: "/delete-model/:id",
        beforeEnter: function ({ app, to, resolve }) {
            app.store.dispatch("deleteFromSmartSelect", {
                id: to.params.id,
                link: "itemModel/destroy",
                select: "select#item_model_id",
                caption: fa.model,
            });
            resolve();
        },
    },
    {
        path: "/edit-size/:id",
        beforeEnter: function ({ app, to, resolve }) {
            app.store.dispatch("editSmartSelectItem", {
                id: to.params.id,
                link: "ShopItemSize/update",
                select: "select#item_size_id",
                caption: fa.size,
            });
            resolve();
        },
    },
    {
        path: "/add-size/:typeId/:id",
        beforeEnter: function ({ app, to, resolve }) {
            app.store.dispatch("addToSmartSelect", {
                id: to.params.id,
                prId: to.params.typeId,
                select: "select#item_size_id",
                uri: "ShopItemSize/store",
                delete_uri: "/delete-size/",
                edit_uri: "/edit-size/",
                caption: fa.size,
            });
            resolve();
        },
    },
    {
        path: "/delete-size/:id",
        beforeEnter: function ({ app, to, resolve }) {
            app.store.dispatch("deleteFromSmartSelect", {
                id: to.params.id,
                link: "itemSize/destroy",
                select: "select#item_size_id",
                caption: fa.size,
            });
            resolve();
        },
    },
    {
        path: "/edit-color/:id",
        beforeEnter: function ({ app, to, resolve }) {
            app.store.dispatch("editSmartSelectItem", {
                id: to.params.id,
                link: "ShopItemColor/update",
                select: "select#item_color_id",
                caption: fa.color,
            });
            resolve();
        },
    },
    {
        path: "/add-color/:id",
        beforeEnter: function ({ app, to, resolve }) {
            app.store.dispatch("addToSmartSelect", {
                id: to.params.id,
                select: "select#item_color_id",
                uri: "ShopItemColor/store",
                delete_uri: "/delete-color",
                edit_uri: "/edit-color",
                caption: fa.color,
            });
            resolve();
        },
    },
    {
        path: "/delete-color/:id",
        beforeEnter: function ({ app, to, resolve }) {
            app.store.dispatch("deleteFromSmartSelect", {
                id: to.params.id,
                link: "itemColor/destroy",
                select: "select#item_color_id",
                caption: fa.color,
            });
            resolve();
        },
    },
    {
        path: "/update-item/",
        beforeEnter: function ({ app, to, resolve }) {
            const abortController = app.request.abortController();
            try {
                request({
                    url: "ShopItems/update-mobile",
                    data: app.store.getters.itemEditData.value,
                    contentType: "application/json",
                    async: true,
                    abortController: abortController,

                    method: "PATCH",
                    success(data, status, xhr) {
                        app.store.dispatch("setItemDetail", data);
                        resolve();
                    },
                    error(xhr, status, message) {},
                    complete(xhr, status) {
                        if (status === 200) {
                            f7.notification
                                .create({
                                    icon: '<i class="f7-icons">checkmark_circle</i>',
                                    text: fa.alert.save_ok,
                                    closeTimeout: 3000,
                                    closeOnClick: true,
                                })
                                .open(true);
                        } else {
                            f7.notification
                                .create({
                                    icon: '<i class="f7-icons">multiply_circle_fill</i>',
                                    title: fa.alert.error,
                                    text: JSON.parse(xhr.response).message,
                                    closeTimeout: 3000,
                                    closeOnClick: true,
                                })
                                .open(true);
                        }
                    },
                });
            } catch (e) {
                abortController.abort();
            }
        },
    },
];
