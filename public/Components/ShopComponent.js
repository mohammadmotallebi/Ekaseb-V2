shopsRender = function () {
    var rowID;
    var itemID;
    var unique_code = null;
    $table = $("#shops");
    $child = $("#child");
    $table.on("check.bs.table", function (e, row, value, index) {
        rowID = row.id;
        $child.bootstrapTable("refreshOptions", {
            url: "Shops/get-shopItems-data/" + rowID,
        });
    });
    function addItems() {
        addQuickly("#add_supplier", "ShopItemSupplier/create", "ShopItemSupplier/store/" + rowID, "ShopItemSupplierForm", "#item_supplier_id", "get-item-suppliers/" + rowID);
        addQuickly("#add_color", "ShopItemColor/create", "ShopItemColor/store", "ShopItemColorForm", "#item_color_id", "get-item-colors-select");
        addQuickly("#add_category", "ShopItemCategories/create", "ShopItemCategories/store", "ShopItemCategoriesForm", "#item_cat_id", "get-ShopItemCategories-select");
        addQuickly("#add_type", "ShopItemType/create", "ShopItemType/store", "ShopItemTypeForm", "#item_type_id", "0", function (e) {
            if ($("#item_cat_id").val() === "") {
                notificationCustomError("دسته بندی کالا انتخاب نشده است!");
                e.close();
            }
            e.onContentReady = function () {
                e.$content
                    .find("#shop_item_category_id")
                    .val($("#item_cat_id").val());
                e.$content.find("#shop_id").val(rowID);
            };
            e.onClose = function () {
                postData("get-itemTypes-select/" +
                    $("#item_cat_id").val() +
                    "/" +
                    rowID, "POST")
                    .then(function (res) { return res.json(); })
                    .then(function (d) {
                    $("#item_type_id")
                        .select2({
                        width: "100%",
                        language: "fa",
                        dir: "rtl",
                        theme: "bootstrap4",
                        placeholder: "انتخاب کنید...",
                        minimumResultsForSearch: 10,
                        data: d,
                    })
                        .val("0")
                        .trigger("change");
                });
            };
        });
        addQuickly("#add_model", "ShopItemModel/create", "ShopItemModel/store", "ShopItemModelForm", "#item_model_id", "0", function (e) {
            if ($("#item_type_id").val() === "") {
                notificationCustomError("نوع کالا انتخاب نشده است!");
                e.close();
            }
            e.onContentReady = function () {
                e.$content
                    .find("#item_type_id")
                    .val($("#item_type_id").val());
            };
            e.onClose = function () {
                postData("get-item-models/" + $("#item_type_id").val(), "POST")
                    .then(function (res) { return res.json(); })
                    .then(function (d) {
                    $("#item_model_id")
                        .select2({
                        width: "100%",
                        language: "fa",
                        dir: "rtl",
                        theme: "bootstrap4",
                        placeholder: "انتخاب کنید...",
                        minimumResultsForSearch: 10,
                        data: d,
                    })
                        .val("0")
                        .trigger("change");
                });
            };
        });
        addQuickly("#add_size", "ShopItemSize/create", "ShopItemSize/store", "ShopItemSizeForm", "#item_size_id", "0", function (e) {
            if ($("#item_type_id").val() === "") {
                notificationCustomError("نوع کالا انتخاب نشده است!");
                e.close();
            }
            e.onContentReady = function () {
                e.$content
                    .find("#item_type_id")
                    .val($("#item_type_id").val());
            };
            e.onClose = function () {
                postData("get-item-sizes/" + $("#item_type_id").val(), "POST")
                    .then(function (res) { return res.json(); })
                    .then(function (d) {
                    $("#item_size_id")
                        .select2({
                        width: "100%",
                        language: "fa",
                        dir: "rtl",
                        theme: "bootstrap4",
                        placeholder: "انتخاب کنید...",
                        minimumResultsForSearch: 10,
                        data: d,
                    })
                        .val("0")
                        .trigger("change");
                });
            };
        });
    }
    function editItems() {
        editQuickly("#edit_supplier", "ShopItemSupplier/edit", "ShopItemSupplier/update", "ShopItemSupplierForm", "#item_supplier_id", "get-item-suppliers/" + rowID, function (e) {
            e.onContentReady = function () {
                e.$content
                    .find("input")
                    .val($("#item_supplier_id").find(":selected").text());
            };
        }, "");
        editQuickly("#edit_category", "ShopItemCategories/edit", "ShopItemCategories/update", "ShopItemCategoriesForm", "#item_cat_id", "get-ShopItemCategories-select", function (e) {
            e.onContentReady = function () {
                e.$content
                    .find("input")
                    .val($("#item_cat_id").find(":selected").text());
            };
        }, "");
        editQuickly("#edit_type", "ShopItemType/edit", "ShopItemType/update", "ShopItemTypeForm", "#item_type_id", "0", function (e) {
            if ($("#item_cat_id").val() === "") {
                notificationCustomError("دسته بندی انتخاب نشده است!");
                e.close();
            }
            e.onContentReady = function () {
                e.$content
                    .find("input")
                    .val($("#item_type_id").find(":selected").text());
                e.$content
                    .find("#shop_item_category_id")
                    .val($("#item_cat_id").val());
                e.$content.find("#shop_id").val(rowID);
            };
            e.onClose = function () {
                $("#item_type_id").html("<option></option>");
                postData("get-itemTypes-select/" +
                    $("#item_cat_id").val() +
                    "/" +
                    rowID, "POST")
                    .then(function (res) { return res.json(); })
                    .then(function (d) {
                    $("#item_type_id").select2({
                        width: "100%",
                        language: "fa",
                        dir: "rtl",
                        theme: "bootstrap4",
                        placeholder: "انتخاب کنید...",
                        minimumResultsForSearch: 10,
                        data: d,
                    });
                });
            };
        });
        editQuickly("#edit_model", "ShopItemModel/edit", "ShopItemModel/update", "ShopItemModelForm", "#item_model_id", "0", function (e) {
            if ($("#item_type_id").val() === "") {
                notificationCustomError("نوع کالا انتخاب نشده است!");
                e.close();
            }
            e.onContentReady = function () {
                e.$content
                    .find("input")
                    .val($("#item_model_id").find(":selected").text());
                e.$content
                    .find("#item_type_id")
                    .val($("#item_type_id").val());
            };
            e.onClose = function () {
                $("#item_type_id").html("<option></option>");
                postData("get-item-models/" + $("#item_type_id").val(), "POST")
                    .then(function (res) { return res.json(); })
                    .then(function (d) {
                    $("#item_model_id").select2({
                        width: "100%",
                        language: "fa",
                        dir: "rtl",
                        theme: "bootstrap4",
                        placeholder: "انتخاب کنید...",
                        minimumResultsForSearch: 10,
                        data: d,
                    });
                });
            };
        });
        editQuickly("#edit_size", "ShopItemSize/edit", "ShopItemSize/update", "ShopItemSizeForm", "#item_size_id", "0", function (e) {
            if ($("#item_type_id").val() === "") {
                notificationCustomError("نوع کالا انتخاب نشده است!");
                e.close();
            }
            e.onContentReady = function () {
                e.$content
                    .find("input")
                    .val($("#item_size_id").find(":selected").text());
                e.$content
                    .find("#item_type_id")
                    .val($("#item_type_id").val());
            };
            e.onClose = function () {
                $("#item_type_id").html("<option></option>");
                postData("get-item-sizes/" + $("#item_type_id").val(), "POST")
                    .then(function (res) { return res.json(); })
                    .then(function (d) {
                    $("#item_size_id")
                        .select2({
                        width: "100%",
                        language: "fa",
                        dir: "rtl",
                        theme: "bootstrap4",
                        placeholder: "انتخاب کنید...",
                        minimumResultsForSearch: 10,
                        data: d,
                    })
                        .val("0")
                        .trigger("change");
                });
            };
        });
        editQuickly("#edit_color", "ShopItemColor/edit", "ShopItemColor/update", "ShopItemColorForm", "#item_color_id", "get-item-colors-select", function (e) {
            e.onContentReady = function () {
                e.$content
                    .find("input")
                    .val($("#item_color_id").find(":selected").text());
            };
        }, "");
    }
    function deleteItems() {
        deleteQuickly("#delete_category", "ShopItemCategories/destroy", "#item_cat_id", "get-ShopItemCategories-select");
        deleteQuickly("#delete_type", "itemType/destroy", "#item_type_id", "0", function (e) {
            if ($("#item_cat_id").val() === "") {
                notificationCustomError("دسته بندی انتخاب نشده است!");
                e.close();
            }
            if ($("#item_type_id").val() === "") {
                notificationCustomError("نوع کالا انتخاب نشده است!");
                e.close();
            }
            e.onClose = function () {
                postData("get-itemTypes-select/" +
                    $("#item_cat_id").val() +
                    "/" +
                    rowID, "POST")
                    .then(function (res) { return res.json(); })
                    .then(function (d) {
                    $("#item_type_id")
                        .select2({
                        width: "100%",
                        language: "fa",
                        dir: "rtl",
                        theme: "bootstrap4",
                        placeholder: "انتخاب کنید...",
                        minimumResultsForSearch: 10,
                        data: d,
                    })
                        .val("0")
                        .trigger("change");
                });
            };
        });
        deleteQuickly("#delete_model", "itemModel/destroy", "#item_model_id", "0", function (e) {
            if ($("#item_cat_id").val() === "") {
                notificationCustomError("دسته بندی انتخاب نشده است!");
                e.close();
            }
            if ($("#item_type_id").val() === "") {
                notificationCustomError("نوع کالا انتخاب نشده است!");
                e.close();
            }
            e.onClose = function () {
                postData("get-itemModels-select", "POST")
                    .then(function (res) { return res.json(); })
                    .then(function (d) {
                    $("#item_model_id")
                        .select2({
                        width: "100%",
                        language: "fa",
                        dir: "rtl",
                        theme: "bootstrap4",
                        placeholder: "انتخاب کنید...",
                        minimumResultsForSearch: 10,
                        data: d,
                    })
                        .val("0")
                        .trigger("change");
                });
            };
        });
        deleteQuickly("#delete_size", "itemSize/destroy", "#item_size_id", "0", function (e) {
            if ($("#item_cat_id").val() === "") {
                notificationCustomError("دسته بندی انتخاب نشده است!");
                e.close();
            }
            if ($("#item_type_id").val() === "") {
                notificationCustomError("نوع کالا انتخاب نشده است!");
                e.close();
            }
            e.onClose = function () {
                postData("get-itemSizes-select", "POST")
                    .then(function (res) { return res.json(); })
                    .then(function (d) {
                    $("#item_size_id")
                        .select2({
                        width: "100%",
                        language: "fa",
                        dir: "rtl",
                        theme: "bootstrap4",
                        placeholder: "انتخاب کنید...",
                        minimumResultsForSearch: 10,
                        data: d,
                    })
                        .val("0")
                        .trigger("change");
                });
            };
        });
        deleteQuickly("#delete_color", "itemColor/destroy", "#item_color_id", "get-ShopItemColors-select");
        deleteQuickly("#delete_supplier", "ShopItemSupplier/destroy", "#item_supplier_id", "get-item-suppliers/" + rowID);
    }
    window.operateEvents = {
        "click #edit": function (e, value, row, index) {
            var jc_44855545468 = $.confirm({
                title: fa.edit,
                content: "url: Shops/" + row.id + "/edit",
                columnClass: "l",
                theme: "modern",
                type: "blue",
                typeAnimated: true,
                buttons: {
                    confirm: {
                        text: fa.edit,
                        btnClass: "btn-green",
                        action: function () {
                            postData("Shops/update", "PATCH", getFormData("ShopForm", {
                                id: rowID,
                                owners: $("#owner_id").val(),
                            }))
                                .then(function (res) { return res.json(); })
                                .then(function (data) {
                                if (data === 1) {
                                    $table.bootstrapTable("refresh");
                                    notificationAddSuccess();
                                    jc_44855545468.close();
                                }
                                else {
                                    showErrorsNotification(data);
                                }
                            });
                            return false;
                        },
                    },
                    cancel: {
                        text: fa.buttons.close,
                        btnClass: "btn-red",
                    },
                },
                onContentReady: function () {
                    modalSettings();
                    addQuickly("button#add_user", "users/create_quickly", "users/store", "userQuicklyForm", "#owner_id", "user_select_data", function (e) {
                        e.onContentReady = function () {
                            modalSettings();
                            e.useBootstrap = true;
                            e.setColumnClass("l");
                            e.setTitle(fa.add_user);
                        };
                    });
                },
                onClose: function () {
                },
            });
        },
        "click #delete": function (e, value, row, index) {
            $.confirm({
                title: fa.delete,
                content: fa.alert.shop_delete_confirm,
                type: "red",
                buttons: {
                    confirm: {
                        text: fa.buttons.yes,
                        btnClass: "btn-green",
                        action: function () {
                            postData("Shops/destroy", "DELETE", {
                                id: row.id,
                            }).then(function (data) {
                                $table.bootstrapTable("refresh");
                                notificationDeleteSuccess();
                            });
                        },
                    },
                    close: {
                        text: fa.buttons.no,
                        btnClass: "btn-red",
                    },
                },
            });
        },
        "click #view": function (e, value, row, index) {
            rowID = row.id;
            $.confirm({
                title: fa.view,
                content: "url: Shops/" + rowID + "/view",
                columnClass: "l",
                theme: "modern",
                type: "orange",
                typeAnimated: true,
                buttons: {
                    close: {
                        text: fa.buttons.close,
                        btnClass: "btn-red",
                    },
                },
            });
        },
    };
    $("button#shopadd").click(function (clickEvent) {
        var jc_44855545468 = $.confirm({
            title: fa.add,
            content: "url: Shops/create",
            columnClass: "l",
            theme: "modern",
            type: "green",
            typeAnimated: true,
            buttons: {
                confirm: {
                    text: fa.add,
                    btnClass: "btn-green",
                    action: function () {
                        postData("Shops/store", "post", getFormData("ShopForm", {
                            owners: $("#owner_id").val(),
                        }))
                            .then(function (res) { return res.json(); })
                            .then(function (data) {
                            if (data === 1) {
                                $table.bootstrapTable("refresh");
                                notificationAddSuccess();
                                jc_44855545468.close();
                            }
                            else {
                                showErrorsNotification(data);
                            }
                        });
                        return false;
                    },
                },
                cancel: {
                    text: "بستن",
                    btnClass: "btn-red",
                },
            },
            onContentReady: function () {
                modalSettings();
                addQuickly("button#add_user", "users/create_quickly", "users/store", "userQuicklyForm", "#owner_id", "user_select_data", function (e) {
                    e.onContentReady = function () {
                        modalSettings();
                        e.useBootstrap = true;
                        e.setColumnClass("l");
                        e.setTitle(fa.add_user);
                    };
                });
            },
        });
    });
    $("button#excel").click(function () {
        $("#excel_file").trigger("click");
    });
    $("#excel_file").on("change", function () {
        uploadFileAjax("shop/import", "#importExcel")
            .then(function (response) { return response.json(); })
            .then(function (data) {
            if (data === 1) {
                $("#shops").bootstrapTable("refresh");
            }
        });
    });
    window.childOperateEvents = {
        "click #itemedit": function (e, value, row, index) {
            itemID = row.id;
            $("#unique_code").val(row.unique_code);
            $.confirm({
                title: fa.edit,
                content: "url: ShopItems/" + itemID + "/edit",
                columnClass: "xl",
                theme: "modern",
                type: "blue",
                typeAnimated: true,
                buttons: {
                    confirm: {
                        text: fa.edit,
                        btnClass: "btn-green",
                        action: function () {
                            postData("ShopItems/update", "PATCH", getFormData("ShopItemsEditForm", { id: itemID })).then(function (data) {
                                $child.bootstrapTable("refresh");
                                notificationEditSuccess();
                            });
                        },
                    },
                    cancel: {
                        text: fa.buttons.close,
                        btnClass: "btn-red",
                    },
                },
                onContentReady: function () {
                    modalSettings();
                    catTypes(rowID);
                    typeModels();
                    typeSizes();
                    $("#item_credits").bootstrapTable({
                        url: "/get-item-credits/" + row.unique_code,
                    });
                    $("#item_scores").bootstrapTable({
                        url: "/get-item-scores/" + row.unique_code,
                    });
                    $("#item_prices").bootstrapTable({
                        url: "/get-item-prices/" + row.unique_code,
                    });
                    document
                        .querySelector("#add_score")
                        .addEventListener("click", function (e) {
                        var jc = $.confirm({
                            title: fa.add,
                            content: "url: item-scores/create",
                            columnClass: "m",
                            theme: "modern",
                            type: "green",
                            typeAnimated: true,
                            buttons: {
                                confirm: {
                                    text: "تایید",
                                    btnClass: "btn-green",
                                    keys: ["enter"],
                                    action: function () {
                                        postData("item-scores/store", "POST", getFormData("ShopItemScoreForm", {
                                            unique_code: row.unique_code,
                                        }))
                                            .then(function (res) { return res.json(); })
                                            .then(function (data) {
                                            if (data === 1) {
                                                $("#item_scores").bootstrapTable("refresh");
                                                notificationAddSuccess();
                                                jc.close();
                                            }
                                            else {
                                                showErrorsNotification(data);
                                            }
                                        });
                                        return false;
                                    },
                                },
                                cancel: {
                                    text: "بستن",
                                    btnClass: "btn-red",
                                },
                            },
                            onContentReady: function () {
                                $("#start_date").MdPersianDateTimePicker({
                                    targetTextSelector: "#start_date",
                                    dateFormat: "yyyy/MM/dd",
                                    englishNumber: true,
                                });
                                $("#end_date").MdPersianDateTimePicker({
                                    targetTextSelector: "#end_date",
                                    dateFormat: "yyyy/MM/dd",
                                    englishNumber: true,
                                });
                            },
                        });
                    });
                    document
                        .querySelector("#add_credit")
                        .addEventListener("click", function (e) {
                        var jc = $.confirm({
                            title: fa.add,
                            content: "url: item-credits/create",
                            columnClass: "m",
                            theme: "modern",
                            type: "green",
                            typeAnimated: true,
                            buttons: {
                                confirm: {
                                    text: "تایید",
                                    btnClass: "btn-green",
                                    keys: ["enter"],
                                    action: function () {
                                        postData("item-credits/store", "POST", getFormData("ShopItemCreditForm", {
                                            unique_code: row.unique_code,
                                        }))
                                            .then(function (res) { return res.json(); })
                                            .then(function (data) {
                                            if (data === 1) {
                                                $("#item_credits").bootstrapTable("refresh");
                                                notificationAddSuccess();
                                                jc.close();
                                            }
                                            else {
                                                showErrorsNotification(data);
                                            }
                                        });
                                        return false;
                                    },
                                },
                                cancel: {
                                    text: "بستن",
                                    btnClass: "btn-red",
                                },
                            },
                            onContentReady: function () {
                                modalSettings();
                                $("#start_date").MdPersianDateTimePicker({
                                    targetTextSelector: "#start_date",
                                    dateFormat: "yyyy/MM/dd",
                                    englishNumber: true,
                                });
                                $("#end_date").MdPersianDateTimePicker({
                                    targetTextSelector: "#end_date",
                                    dateFormat: "yyyy/MM/dd",
                                    englishNumber: true,
                                });
                            },
                        });
                    });
                    document
                        .querySelector("#add_price")
                        .addEventListener("click", function (e) {
                        var jc = $.confirm({
                            title: fa.add,
                            content: "url: item-prices/create",
                            columnClass: "m",
                            theme: "modern",
                            type: "green",
                            typeAnimated: true,
                            buttons: {
                                confirm: {
                                    text: "تایید",
                                    btnClass: "btn-green",
                                    keys: ["enter"],
                                    action: function () {
                                        postData("item-prices/store", "POST", getFormData("ShopItemPriceForm", {
                                            unique_code: row.unique_code,
                                        }))
                                            .then(function (res) { return res.json(); })
                                            .then(function (data) {
                                            if (data === 1) {
                                                $("#item_prices").bootstrapTable("refresh");
                                                notificationAddSuccess();
                                                jc.close();
                                            }
                                            else {
                                                showErrorsNotification(data);
                                            }
                                        });
                                        return false;
                                    },
                                },
                                cancel: {
                                    text: "بستن",
                                    btnClass: "btn-red",
                                },
                            },
                            onContentReady: function () {
                                modalSettings();
                                $("#start_date").MdPersianDateTimePicker({
                                    targetTextSelector: "#start_date",
                                    dateFormat: "yyyy/MM/dd",
                                    englishNumber: true,
                                });
                                $("#end_date").MdPersianDateTimePicker({
                                    targetTextSelector: "#end_date",
                                    dateFormat: "yyyy/MM/dd",
                                    englishNumber: true,
                                });
                            },
                        });
                    });
                    addItems();
                    editItems();
                },
                onClose: function () { },
            });
        },
        "click #itemdelete": function (e, value, row, index) {
            $.confirm({
                title: fa.delete,
                content: fa.alert.shop_delete_confirm,
                type: "red",
                buttons: {
                    confirm: {
                        text: fa.yes,
                        btnClass: "btn-green",
                        action: function () {
                            postData("ShopItems/destroy", "DELETE", {
                                id: row.unique_code,
                            })
                                .then(function (res) { return res.json(); })
                                .then(function (data) {
                                if (data === 1) {
                                    $child.bootstrapTable("refresh");
                                    notificationDeleteSuccess();
                                }
                                else {
                                    notificationDeleteError();
                                }
                            });
                        },
                    },
                    close: {
                        text: fa.buttons.no,
                        btnClass: "btn-red",
                    },
                },
            });
        },
        "click #items": function (e, value, row, index) {
            var jc_39234234235 = $.confirm({
                title: fa.list + " " + row.item_name,
                content: "url: /shop-items-modal",
                columnClass: "l",
                theme: "modern",
                type: "green",
                typeAnimated: true,
                container: "body",
                containerFluid: true,
                buttons: {
                    close: {
                        text: fa.buttons.close,
                        btnClass: "btn-red",
                    },
                },
                onContentReady: function () {
                    jc_39234234235.$content.find("#items").bootstrapTable({
                        url: "/shop-items-modal-data/" + row.unique_code,
                    });
                },
                onClose: function () { },
            });
        },
        "click #sold": function (e, value, row, index) {
            var jc_39234234235 = $.confirm({
                title: fa.list + " " + row.item_name,
                content: "url: /shop-sold-modal",
                boxWidth: "70%",
                useBootstrap: false,
                theme: "modern",
                type: "green",
                typeAnimated: true,
                container: "body",
                containerFluid: true,
                buttons: {
                    close: {
                        text: fa.buttons.close,
                        btnClass: "btn-red",
                    },
                },
                onContentReady: function () {
                    jc_39234234235.$content.find("#sold").bootstrapTable({
                        url: "/shop-sold-modal-data/" + row.unique_code,
                    });
                },
                onClose: function () { },
            });
        },
    };
    $("button#addChildItem").click(function (clickEvent) {
        if (getSelectionsCount($table) < 1) {
            notificationNotSelected();
            return false;
        }
        $.confirm({
            title: fa.add,
            content: "url: ShopItems/create/" + rowID,
            columnClass: "xl",
            theme: "modern",
            type: "purple",
            typeAnimated: true,
            buttons: {
                confirm: {
                    text: fa.add,
                    btnClass: "btn-green",
                    action: function () {
                        postData("ShopItems/store", "post", getFormData("ShopItemsForm", { id: rowID })).then(function (data) {
                            $child.bootstrapTable("refresh");
                            notificationAddSuccess();
                        });
                    },
                },
                cancel: {
                    text: fa.buttons.close,
                    btnClass: "btn-red",
                },
            },
            onContentReady: function () {
                if (unique_code === null) {
                    unique_code = document.getElementById("unique_code").value;
                }
                modalSettings();
                $(document).on("change", "#item_count", function (e) {
                    postData("items/insert_codes", "POST", {
                        count: e.target.value,
                        uc: unique_code,
                        shop: rowID,
                    }).then(function (data) { });
                });
                catTypes(rowID);
                typeModels();
                typeSizes();
                $("#item_credits").bootstrapTable({
                    url: "/get-item-credits/" + unique_code,
                });
                $("#item_scores").bootstrapTable({
                    url: "/get-item-scores/" + unique_code,
                });
                $("#item_prices").bootstrapTable({
                    url: "/get-item-prices/" + unique_code,
                });
                document
                    .querySelector("#add_score")
                    .addEventListener("click", function (e) {
                    var jc = $.confirm({
                        title: fa.add,
                        content: "url: item-scores/create",
                        columnClass: "m",
                        theme: "modern",
                        type: "green",
                        typeAnimated: true,
                        buttons: {
                            confirm: {
                                text: "تایید",
                                btnClass: "btn-green",
                                keys: ["enter"],
                                action: function () {
                                    postData("item-scores/store", "POST", getFormData("ShopItemScoreForm", {
                                        unique_code: unique_code,
                                    }))
                                        .then(function (res) { return res.json(); })
                                        .then(function (data) {
                                        if (data === 1) {
                                            $("#item_scores").bootstrapTable("refresh");
                                            notificationAddSuccess();
                                            jc.close();
                                        }
                                        else {
                                            showErrorsNotification(data);
                                        }
                                    });
                                    return false;
                                },
                            },
                            cancel: {
                                text: "بستن",
                                btnClass: "btn-red",
                            },
                        },
                        onContentReady: function () {
                            $("#start_date").MdPersianDateTimePicker({
                                targetTextSelector: "#start_date",
                                dateFormat: "yyyy/MM/dd",
                                englishNumber: true,
                            });
                            $("#end_date").MdPersianDateTimePicker({
                                targetTextSelector: "#end_date",
                                dateFormat: "yyyy/MM/dd",
                                englishNumber: true,
                            });
                        },
                    });
                });
                document
                    .querySelector("#add_credit")
                    .addEventListener("click", function (e) {
                    var jc = $.confirm({
                        title: fa.add,
                        content: "url: item-credits/create",
                        columnClass: "m",
                        theme: "modern",
                        type: "green",
                        typeAnimated: true,
                        buttons: {
                            confirm: {
                                text: "تایید",
                                btnClass: "btn-green",
                                keys: ["enter"],
                                action: function () {
                                    postData("item-credits/store", "POST", getFormData("ShopItemCreditForm", {
                                        unique_code: unique_code,
                                    }))
                                        .then(function (res) { return res.json(); })
                                        .then(function (data) {
                                        if (data === 1) {
                                            $("#item_credits").bootstrapTable("refresh");
                                            notificationAddSuccess();
                                            jc.close();
                                        }
                                        else {
                                            showErrorsNotification(data);
                                        }
                                    });
                                    return false;
                                },
                            },
                            cancel: {
                                text: "بستن",
                                btnClass: "btn-red",
                            },
                        },
                        onContentReady: function () {
                            $("#start_date").MdPersianDateTimePicker({
                                targetTextSelector: "#start_date",
                                dateFormat: "yyyy/MM/dd",
                                englishNumber: true,
                            });
                            $("#end_date").MdPersianDateTimePicker({
                                targetTextSelector: "#end_date",
                                dateFormat: "yyyy/MM/dd",
                                englishNumber: true,
                            });
                        },
                    });
                });
                document
                    .querySelector("#add_price")
                    .addEventListener("click", function (e) {
                    var jc = $.confirm({
                        title: fa.add,
                        content: "url: item-prices/create",
                        columnClass: "m",
                        theme: "modern",
                        type: "green",
                        typeAnimated: true,
                        buttons: {
                            confirm: {
                                text: "تایید",
                                btnClass: "btn-green",
                                keys: ["enter"],
                                action: function () {
                                    postData("item-prices/store", "POST", getFormData("ShopItemPriceForm", {
                                        unique_code: unique_code,
                                    }))
                                        .then(function (res) { return res.json(); })
                                        .then(function (data) {
                                        if (data === 1) {
                                            $("#item_prices").bootstrapTable("refresh");
                                            notificationAddSuccess();
                                            jc.close();
                                        }
                                        else {
                                            showErrorsNotification(data);
                                        }
                                    });
                                    return false;
                                },
                            },
                            cancel: {
                                text: "بستن",
                                btnClass: "btn-red",
                            },
                        },
                        onContentReady: function () {
                            modalSettings();
                            $("#start_date").MdPersianDateTimePicker({
                                targetTextSelector: "#start_date",
                                dateFormat: "yyyy/MM/dd",
                                englishNumber: true,
                            });
                            $("#end_date").MdPersianDateTimePicker({
                                targetTextSelector: "#end_date",
                                dateFormat: "yyyy/MM/dd",
                                englishNumber: true,
                            });
                        },
                    });
                });
                addItems();
                editItems();
            },
            onClose: function () {
            },
        });
    });
    $("#addMultiChildItem").click(function (clickEvent) {
        if (getSelectionsCount($table) < 1) {
            notificationNotSelected();
            return false;
        }
        var add_multi = $.confirm({
            title: fa.add,
            content: "url: ShopItems/create-multi",
            columnClass: "xl",
            theme: "modern",
            type: "purple",
            typeAnimated: true,
            buttons: {
                confirm: {
                    text: fa.add,
                    btnClass: "btn-green",
                    action: function () {
                        postData("ShopItems/store-multi", "post", getFormData("add-multi-item", { id: rowID }))
                            .then(function (response) { return response.json(); })
                            .then(function (data) {
                            $child.bootstrapTable("refresh");
                            console.log(data);
                            if (data == 1) {
                                notificationAddSuccess();
                                add_multi.$content
                                    .find("input[type=text]")
                                    .val("");
                                add_multi.$content
                                    .find("select")
                                    .val(null)
                                    .trigger("change");
                            }
                            else {
                                notificationAddError();
                            }
                        });
                        return false;
                    },
                },
                cancel: {
                    text: fa.buttons.close,
                    btnClass: "btn-red",
                },
            },
            onContentReady: function () {
                modalSettings();
            },
            onClose: function () { },
        });
    });
    $("button#deleteChildItems").click(function (clickEvent) {
        if (getSelectionsCount($child) < 1) {
            notificationNotSelected();
            return false;
        }
        var del = $.confirm({
            title: fa.delete,
            content: fa.alert.item_delete_confirm,
            type: "red",
            buttons: {
                confirm: {
                    text: fa.buttons.yes,
                    btnClass: "btn-green",
                    action: function () {
                        postData("ShopItems/destroy-selections", "DELETE", {
                            ids: getIdSelections($child),
                        }).then(function (data) {
                            $child.bootstrapTable("refresh");
                            notificationDeleteSuccess();
                        });
                    },
                },
                close: {
                    text: fa.buttons.no,
                    btnClass: "btn-red",
                },
            },
        });
    });
    $("#editMultiChildItem").click(function () {
        var token = "{{ csrf_token() }}";
        if (getSelectionsCount($child) < 1) {
            notificationNotSelected();
            return false;
        }
        if (getSelectionsCount($table) < 1) {
            notificationNotSelected();
            return false;
        }
        $.confirm({
            title: fa.edit,
            content: "url: ShopItems/edit-multi",
            columnClass: "xl",
            theme: "modern",
            type: "purple",
            typeAnimated: true,
            buttons: {
                confirm: {
                    text: fa.edit,
                    btnClass: "btn-green",
                    action: function () {
                        postData("ShopItems/update-multi", "post", getFormData("edit-multi-item", { id: rowID }))
                            .then(function (response) { return response.json(); })
                            .then(function (data) {
                            if (data == 1) {
                                notificationEditSuccess();
                                $child.bootstrapTable("refresh");
                            }
                            else {
                                notificationEditError();
                            }
                        });
                        return false;
                    },
                },
                cancel: {
                    text: fa.buttons.close,
                    btnClass: "btn-red",
                },
            },
            onContentReady: function () {
                modalSettings();
            },
        });
    });
    $("button#item-excel").click(function () {
        $("#item-excel_file").trigger("click");
    });
    $("#item-excel_file").on("change", function () {
        uploadFileAjax("shop-item/import", "#importItemExcel", rowID)
            .then(function (response) { return response.json(); })
            .then(function (data) {
            if (data === 1) {
                $("#importItemExcel").bootstrapTable("refresh");
                document.getElementById("importItemExcel").reset();
                $child.bootstrapTable("refresh");
                notificationDeleteSuccess();
            }
            else {
                document.getElementById("importItemExcel").reset();
                notificationAddError();
            }
        });
    });
};
//# sourceMappingURL=ShopComponent.js.map