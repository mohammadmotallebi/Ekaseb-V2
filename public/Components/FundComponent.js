fundsRender = function () {
    var $table = $('#funds');
    $table.on('load-success.bs.table', function (data) {
        $('[data-toggle="tooltip"]').tooltip();
    });
    window.operateEvents = {
        'click #edit': function (e, value, row, index) {
            rowID = row.id;
            $.confirm({
                title: fa.edit,
                content: "url: funds/".concat(row.id, "/edit"),
                columnClass: 'm',
                theme: 'modern',
                type: 'blue',
                typeAnimated: true,
                buttons: {
                    confirm: {
                        text: fa.edit,
                        btnClass: 'btn-green',
                        action: function () {
                            postData('funds/update', 'PATCH', getFormData('fundsForm', { id: row.id }))
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
        'click #payments_button': function (e, value, row, index) {
            $.confirm({
                title: '',
                content: "url: /fund/payments",
                columnClass: 'l',
                theme: 'modern',
                type: 'green',
                typeAnimated: true,
                container: 'body',
                containerFluid: true,
                buttons: {
                    close: {
                        text: fa.buttons.close,
                        btnClass: 'btn-red'
                    }
                },
                onContentReady: function () {
                    modalSettings();
                    $('#payments').bootstrapTable({
                        url: "/fund/".concat(row.id, "/payments"),
                    });
                }
            });
        },
        'click #costs_button': function (e, value, row, index) {
            $.confirm({
                title: '',
                content: "url: /fund/costs",
                columnClass: 'l',
                theme: 'modern',
                type: 'green',
                typeAnimated: true,
                container: 'body',
                containerFluid: true,
                buttons: {
                    close: {
                        text: fa.buttons.close,
                        btnClass: 'btn-red'
                    }
                },
                onContentReady: function () {
                    modalSettings();
                    $('#costs').bootstrapTable({
                        url: "/fund/".concat(row.id, "/costs"),
                    });
                }
            });
        },
    };
    $('button#addfund').click(function (clickEvent) {
        var jc_87125817 = $.confirm({
            title: fa.add,
            content: 'url: funds/create',
            columnClass: 'm',
            theme: 'modern',
            type: 'green',
            typeAnimated: true,
            buttons: {
                add: {
                    text: 'تایید',
                    btnClass: 'btn-green',
                    keys: ['enter'],
                    action: function () {
                        postData('funds/store', 'POST', getFormData('fundsForm'))
                            .then(function (response) { return response.json(); })
                            .then(function (data) {
                            if (data === 1) {
                                $table.bootstrapTable('refresh');
                                notificationAddSuccess();
                                jc_87125817.close();
                            }
                            else {
                                notificationAddError();
                            }
                        });
                        return false;
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
};
//# sourceMappingURL=FundComponent.js.map