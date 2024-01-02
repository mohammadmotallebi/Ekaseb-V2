colorsRender = function () {
    var $table = $('#colors');
    window.operateEvents = {
        'click #edit': function (e, value, row, index) {
            rowID = row.id;
            $.confirm({
                title: fa.edit,
                content: 'url: Colors/edit',
                columnClass: 'm',
                theme: 'modern',
                type: 'blue',
                typeAnimated: true,
                buttons: {
                    confirm: {
                        text: fa.edit,
                        btnClass: 'btn-green',
                        action: function () {
                            postData('Colors/update', 'PATCH', getFormData('ColorsForm', { id: row.id }))
                                .then(function (data) {
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
                    $('#color_name').val(row.color_name);
                },
                onClose: function () {
                }
            });
        },
        'click #delete': function (e, value, row, index) {
            $.confirm({
                title: fa.delete,
                content: fa.alert.color_delete_confirm,
                type: 'red',
                buttons: {
                    confirm: {
                        text: fa.buttons.yes,
                        btnClass: 'btn-green',
                        action: function () {
                            postData('Colors/destroy', 'delete', { id: row.id })
                                .then(function (data) {
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
    };
    $('button#addcolor').click(function (clickEvent) {
        $.confirm({
            title: fa.add,
            content: 'url: Colors/create',
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
                        postData('Colors/store', 'POST', getFormData('ColorsForm'))
                            .then(function (data) {
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
    $('button#deletecolors').click(function (clickEvent) {
        if (getSelectionsCount($table) < 1) {
            notificationNotSelected();
            return false;
        }
        $.confirm({
            title: fa.delete,
            content: fa.alert.color_delete_confirm,
            type: 'red',
            buttons: {
                confirm: {
                    text: fa.buttons.yes,
                    btnClass: 'btn-green',
                    action: function () {
                        postData('Colors/destroy-selections', 'delete', { id: getIdSelections($table) })
                            .then(function (data) {
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
};
//# sourceMappingURL=ColorComponent.js.map