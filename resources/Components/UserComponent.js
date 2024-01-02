// Users Scripts Start
usersRender = () => {
    let $table = $("#users");
    $table.on("check.bs.table", function (e, row, value, index) {
        $.ajax({
            url: "users/Detail/" + row.id,
            beforeSend: function (xhr) {
                $("#card").text("");
                $("#totalCredit").text("");
                $("#totalBuy").text("");
                $("#lastDay").text("");
                $("#card").removeClass(
                    "spinner-border spinner-border-sm text-primary"
                );
                $("#card").addClass(
                    "spinner-border spinner-border-sm text-primary"
                );
                $("#totalBuy").removeClass(
                    "spinner-border spinner-border-sm text-primary"
                );
                $("#totalBuy").addClass(
                    "spinner-border spinner-border-sm text-primary"
                );
                $("#totalCredit").removeClass(
                    "spinner-border spinner-border-sm text-primary"
                );
                $("#lastDay").removeClass(
                    "spinner-border spinner-border-sm text-primary"
                );
                $("#totalCredit").addClass(
                    "spinner-border spinner-border-sm text-primary"
                );
                $("#lastDay").addClass(
                    "spinner-border spinner-border-sm text-primary"
                );
            },
        })

            .done(function (msg) {
                $("#card").removeClass(
                    "spinner-border spinner-border-sm text-primary"
                );
                $("#totalBuy").removeClass(
                    "spinner-border spinner-border-sm text-primary"
                );
                $("#totalCredit").removeClass(
                    "spinner-border spinner-border-sm text-primary"
                );
                $("#lastDay").removeClass(
                    "spinner-border spinner-border-sm text-primary"
                );
                if (msg != "") {
                    $("#card").text(msg[2]);
                    $("#totalBuy").text(msg[0]);
                    $("#totalCredit").text(msg[1]);
                    $("#lastDay").text(msg[3]);
                } else {
                }
            })
            .fail(function (jqXHR, textStatus, text) {
                $("#card").removeClass(
                    "spinner-border spinner-border-sm text-primary"
                );
                $("#totalBuy").removeClass(
                    "spinner-border spinner-border-sm text-primary"
                );
                $("#totalCredit").removeClass(
                    "spinner-border spinner-border-sm text-primary"
                );
                $("#lastDay").removeClass(
                    "spinner-border spinner-border-sm text-primary"
                );
                $("#card").text("---");
                $("#totalBuy").text("---");
                $("#totalCredit").text("---");
                $("#lastDay").text("---");
            });
    });

    window.operateEvents = {
        "click #edit": function (e, value, row, index) {
            const jc_5456464 = $.confirm({
                title: fa.edit,
                content: "url: users/" + row.id + "/edit",
                columnClass: "l",
                theme: "modern",
                type: "green",
                typeAnimated: true,
                buttons: {
                    confirm: {
                        text: fa.edit,
                        btnClass: "btn-green",
                        action: function () {
                            postData(
                                "users/update",
                                "PATCH",
                                getFormData("userForm", { id: row.id })
                            )
                                .then((response) => response.json())
                                .then((data) => {
                                    if (data === 1) {
                                        $table.bootstrapTable("refresh");
                                        notificationAddSuccess();
                                        jc_5456464.close();
                                    } else {
                                        showErrorsNotification(data);
                                    }
                                });
                            return false;
                        },
                    },
                    cancel: {
                        text: fa.close,
                        btnClass: "btn-red",
                    },
                },
                onContentReady: function () {
                    $("#birthday").MdPersianDateTimePicker({
                        targetTextSelector: "#birthday",
                        dateFormat: "yyyy/MM/dd",
                        englishNumber: true,
                    });
                    modalSettings();
                    cityState();
                },
                onClose: function () {},
            });
        },
        "click #delete": function (e, value, row, index) {
            $.confirm({
                title: fa.delete,
                content: fa.alert.user_delete_confirm,
                buttons: {
                    confirm: {
                        text: fa.buttons.yes,
                        btnClass: "btn-green",
                        action: function () {
                            postData("users/destroy", "DELETE", { id: row.id })
                                .then((response) => response.json())
                                .then((data) => {
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
            $.confirm({
                title: fa.view,
                content: "url: users/" + row.id + "/view",
                columnClass: "l",
                theme: "modern",
                type: "green",
                typeAnimated: true,
                buttons: {
                    close: {
                        text: fa.buttons.close,
                        btnClass: "btn-red",
                    },
                },
            });
        },
        "click #permission": function (e, value, row, index) {
            $.confirm({
                title: fa.permissions,
                content: "url: user_permission/" + row.id,
                columnClass: "m",
                theme: "modern",
                type: "info",
                typeAnimated: true,
                container: 'body',
                containerFluid: true,
                buttons: {
                    confirm: {
                        text: fa.buttons.save,
                        btnClass: "btn-green",
                        keys: ["enter"],
                        action: function () {
                            postData("user_permission/update/" + row.id, "POST", {
                                permissions: getCheckboxData("permission_form"),
                            }).then((data) => {
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
                    modalSettings()
                },
            });
        },
    };

    $(document).on("click", "button#totalBuyModal", function (clickEvent) {
        $.confirm({
            title: row.id,
            content: "url: users/BillDetail",
            columnClass: "xl",
            theme: "modern",
            type: "blue",
            typeAnimated: true,
            buttons: {
                cancel: {
                    text: "بستن",
                    btnClass: "btn-red",
                },
            },
            onContentReady: function () {},
        });
    });
    $(document).on("click", "button#userGroupEdit", function (clickEvent) {
        if (getSelectionsCount($("#users")) < 1) {
            notificationNotSelected();
            return false;
        }
        $.confirm({
            title: "لیست خرید",
            content: "url: users/group_edit",
            columnClass: "l",
            theme: "modern",
            type: "blue",
            typeAnimated: true,
            buttons: {
                confirm: {
                    text: fa.buttons.yes,
                    btnClass: "btn-green",
                    action: function () {
                        postData(
                            "users/update_selected_users",
                            "POST",
                            getFormData("userGEditForm", {
                                ids: getIdSelections($("#users")),
                            })
                        ).then((data) => {
                            $("#users").bootstrapTable("refresh");
                            notificationDeleteSuccess();
                        });
                    },
                },
                close: {
                    text: fa.buttons.no,
                    btnClass: "btn-red",
                },
            },
            onContentReady: function () {},
        });
    });
    $(document).on("click", "button#useradd", function (clickEvent) {
        const jc_5456464 = $.confirm({
            title: fa.add,
            content: "url: users/create",
            columnClass: "l",
            theme: "modern",
            type: "green",
            typeAnimated: true,
            buttons: {
                confirm: {
                    text: fa.add,
                    btnClass: "btn-green",
                    action: function () {
                        postData("users/store", "POST", getFormData("userForm"))
                            .then((res) => res.json())
                            .then((data) => {
                                if (data === 1) {
                                    $table.bootstrapTable("refresh");
                                    notificationAddSuccess();
                                    jc_5456464.close();
                                } else {
                                    showErrorsNotification(data);
                                }
                            });
                        return false;
                    },
                },
                cancel: {
                    text: fa.close,
                    btnClass: "btn-red",
                },
            },
            onContentReady: function () {
                $("#birthday").MdPersianDateTimePicker({
                    targetTextSelector: "#birthday",
                    dateFormat: "yyyy/MM/dd",
                    englishNumber: true,
                });
                modalSettings();
                cityState();
            },
            onClose: function () {},
        });
    });
    // $(document).on('click', 'button#add_user', function (clickEvent) {
    //     $.confirm({
    //         title: fa.add,
    //         content: 'url: users/create_quickly',
    //         columnClass: 'l',
    //         theme: 'modern',
    //         type: 'green',
    //         typeAnimated: true,
    //         buttons: {
    //             confirm: {
    //                 text: fa.add,
    //                 btnClass: 'btn-green',
    //                 action: function () {
    //                     postData('users/store', 'POST', getFormData('userForm'))
    //                         .then(res => res.json())
    //                         .then(data => {
    //                             $table.bootstrapTable('refresh');
    //                             if (data > 0) {
    //                                 notificationAddSuccess()
    //                             } else {
    //                                 notificationAddError()
    //                             }
    //                         });
    //
    //                 }
    //             },
    //             cancel: {
    //                 text: fa.close,
    //                 btnClass: 'btn-red'
    //             }
    //         },
    //         onContentReady: function () {
    //             $('#birthday').MdPersianDateTimePicker({
    //                 targetTextSelector: '#birthday',
    //                 dateFormat: 'yyyy/MM/dd',
    //                 englishNumber: true,
    //             });
    //             modalSettings();
    //             cityState();
    //
    //         },
    //         onClose: function () {
    //         }
    //     });
    // });
};
// Users Scripts End
