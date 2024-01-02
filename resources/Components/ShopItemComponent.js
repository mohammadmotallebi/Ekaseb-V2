// ShopItems Scripts Start
shopItemsRender = () => {
    let $table = $('#items');

    window.operateEvents = {
        'click #itemedit': function (e, value, row, index) {
            let t = $.confirm({
                title: fa.edit,
                content: 'url: ShopItems/' + row.id + '/edit',
                columnClass: 'l',
                theme: 'modern',
                type: 'blue',
                typeAnimated: true,
                buttons: {
                    confirm: {
                        text: fa.edit,
                        btnClass: 'btn-green',
                        action: function () {
                            postData('ShopItems/update', 'PATCH', getFormData('ShopItemsForm', {id: row.id}))
                                .then(data => {
                                    $table.bootstrapTable('refresh');
                                    notificationEditSuccess();
                                });
                        }
                    },
                    cancel: {
                        text: fa.close,
                        btnClass: 'btn-red'
                    }
                },
                onContentReady: function () {
                    modalSettings();
                },
                onClose: function () {

                }
            });
        },
        'click #itemdelete': function (e, value, row, index) {
            $.confirm({
                title: fa.delete,
                content: fa.shop_delete_confirm,
                type: 'red',
                buttons: {
                    confirm: {
                        text: fa.buttons.yes,
                        btnClass: 'btn-green',
                        action: function () {

                            postData('ShopItems/destroy', 'DELETE', {'id': row.id})
                                .then(data => {
                                    $table.bootstrapTable('refresh');
                                    notificationDeleteSuccess();
                                });
                        }
                    },
                    close: {
                        text: fa.buttons.no,
                        btnClass: 'btn-red'
                    }
                }
            });
        },
        'click #add': function (e, value, row, index) {
            let t = $.confirm({
                title: fa.alert.add_num,
                content: '<input type="text" id="num" name="num" class="form-control" placeholder="تعداد را وارد نمایید...">',
                columnClass: 's',
                theme: 'modern',
                type: 'blue',
                typeAnimated: true,
                buttons: {
                    confirm: {
                        text: fa.add,
                        btnClass: 'btn-green',
                        action: function () {
                            postData('ShopItems/add', 'PATCH', {num: $('#num').val(), id: row.id, sid: row.shop_id})
                                .then(data => {
                                    $table.bootstrapTable('refresh');
                                    notificationEditSuccess();
                                });
                        }
                    },
                    cancel: {
                        text: fa.close,
                        btnClass: 'btn-red'
                    }
                },
                onContentReady: function () {
                    modalSettings();
                },
                onClose: function () {

                }
            });
        },
        'click #minus': function (e, value, row, index) {
            let t = $.confirm({
                title: fa.alert.minus_num,
                content: '<div class="alert alert-warning">' + ' حداکثر تعدادی که میتوانید از موجودی کالا کم کنید : ' + '<b style="color:red">' + row.Remain + '</b>' + '</div><br /><input type="text" id="num" name="num" class="form-control" placeholder="تعداد را وارد نمایید...">',
                columnClass: 's',
                theme: 'modern',
                type: 'blue',
                typeAnimated: true,
                buttons: {
                    confirm: {
                        text: fa.minus,
                        btnClass: 'btn-green',
                        action: function () {
                            if ($('#num').val() > row.Remain) {
                                new Noty({
                                    theme: 'relax',
                                    timeout: 2000,
                                    type: 'error',
                                    layout: 'topRight',
                                    text: 'مقدار وارد شده از مقدار مجاز بیشتر است!'
                                }).show();
                                return false;
                            } else {
                                postData('ShopItems/minus', 'PATCH', {
                                    num: $('#num').val(),
                                    id: row.id,
                                })
                                    .then(data => {
                                        $table.bootstrapTable('refresh');
                                        notificationEditSuccess();
                                    });
                            }
                        }
                    },
                    cancel: {
                        text: fa.close,
                        btnClass: 'btn-red'
                    }
                },
                onContentReady: function () {
                    modalSettings();
                },
                onClose: function () {

                }
            });
        },
    }

    $(document).on('click', 'button#additem', function (clickEvent) {

        $.confirm({
            title: fa.add,
            content: 'url: ShopItems/create',
            columnClass: 'l',
            theme: 'modern',
            type: 'purple',
            typeAnimated: true,
            buttons: {
                confirm: {
                    text: fa.add,
                    btnClass: 'btn-green',
                    action: function () {
                        postData('ShopItems/store', 'POST', getFormData('ShopItemsForm'))
                            .then(data => {
                                $table.bootstrapTable('refresh');
                                notificationAddSuccess();
                            });
                    }
                },
                cancel: {
                    text: fa.buttons.close,
                    btnClass: 'btn-red'
                }
            },
            onContentReady: function () {
                modalSettings();

            }
        });
    });

    $(document).on('click', 'button#deleteitems', function (clickEvent) {
        if (getSelectionsCount($table) < 1) {
            notificationNotSelected();
            return false;
        }
        $.confirm({
            title: fa.delete,
            content: fa.alert.item_delete_confirm,
            type: 'red',
            buttons: {
                confirm: {
                    text: fa.buttons.yes,
                    btnClass: 'btn-green',
                    action: function () {
                        postData('ShopItems/destroy-selections', 'DELETE', {ids: getIdSelections($table)})
                            .then(data => {
                                $child.bootstrapTable('refresh');
                                notificationDeleteSuccess();
                            });
                    }
                },
                close: {
                    text: fa.buttons.no,
                    btnClass: 'btn-red'
                }
            }
        });
    });


}
// ShopItems Scripts End
