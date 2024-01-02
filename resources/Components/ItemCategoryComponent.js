// Item Category Scripts Start
itemCategoryRender = () => {
    let $table = $('#itemCats');

    window.operateEvents = {
        'click #edit': function (e, value, row, index) {
            rowID = row.id;
            var edit = $.confirm({
                title: fa.edit,
                content: 'url: ShopItemCategories/edit',
                columnClass: 'm',
                theme: 'modern',
                type: 'blue',
                typeAnimated: true,
                buttons: {
                    confirm: {
                        text: fa.edit,
                        btnClass: 'btn-green',

                        action: function () {

                            postData('ShopItemCategories/update', 'PATCH', getFormData('ShopItemCategoriesForm', {id: row.id}))
                                .then(data => {
                                    $table.bootstrapTable('refresh');
                                    notificationEditSuccess();
                                });
                        }
                    },
                    cancel: {
                        text: fa.buttons.close,
                        btnClass: 'btn-red'
                    }
                },
                onContentReady: function () {
                    $('#item_category_name').val(row.item_category_name);
                },
                onClose: function () {

                }
            });

        },
        'click #delete': function (e, value, row, index) {
            rowID = row.id;
            var del = $.confirm({
                title: fa.delete,
                content: fa.alert.delete_success,
                type: 'red',
                buttons: {
                    confirm: {
                        text: fa.buttons.yes,
                        btnClass: 'btn-green',
                        action: function () {
                            postData('ShopItemCategories/destroy', 'delete', {id: row.id})
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
    }

    $('button#additemCat').click(function (clickEvent) {
        $.confirm({
            title: fa.add,
            content: 'url: ShopItemCategories/create',
            columnClass: 'm',
            theme: 'modern',
            type: 'green',
            typeAnimated: true,
            buttons: {
                confirm: {
                    text: 'تایید',
                    btnClass: 'btn-green',
                    keys: ['enter'],
                    action: function () {
                        postData('ShopItemCategories/store', 'post', getFormData('ShopItemCategoriesForm'))
                            .then(data => {
                                $table.bootstrapTable('refresh');
                                notificationAddSuccess();
                            });
                    }
                },
                cancel: {
                    text: 'بستن',
                    btnClass: 'btn-red'
                }
            },
            onContentReady: function () {

            }
        });
    });

    $('button#deleteitemCats').click(function (clickEvent) {
        if (getSelectionsCount($table) < 1) {
            notificationNotSelected();
            return false;
        }
        var del = $.confirm({
            title: fa.delete,
            content: fa.alert.category_delete_confirm,
            type: 'red',
            buttons: {
                confirm: {
                    text: fa.buttons.yes,
                    btnClass: 'btn-green',
                    action: function () {
                        postData('ShopItemCategories/destroy-selections', 'delete', {id: getIdSelections($table)})
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
    });

}
// Item Category Scripts End
