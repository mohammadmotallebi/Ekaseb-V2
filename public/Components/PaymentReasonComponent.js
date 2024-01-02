paymentReasonsRender = function () {
    var $table = $('#payment-reason');
    window.operateEvents = {
        'click #edit': function (e, value, row, index) {
            var jc_h812548154 = $.confirm({
                title: fa.edit,
                content: 'url: payment-reason/edit/' + row.id,
                columnClass: 'm',
                theme: 'modern',
                type: 'blue',
                typeAnimated: true,
                buttons: {
                    confirm: {
                        text: fa.edit,
                        btnClass: 'btn-green',
                        action: function () {
                            postData('payment-reason/update', 'PATCH', getFormData('PaymentReasonForm', { id: row.id }))
                                .then(function (response) { return response.json(); })
                                .then(function (data) {
                                if (data === 1) {
                                    $table.bootstrapTable('refresh');
                                    notificationEditSuccess();
                                    jc_h812548154.close();
                                }
                                else {
                                    showErrorsNotification(data);
                                }
                            });
                            return false;
                        }
                    },
                    cancel: {
                        text: fa.buttons.close,
                        btnClass: 'btn-red'
                    }
                },
                onContentReady: function () {
                    modalSettings();
                    addQuickly('#add_fund', 'funds/create', 'funds/store', 'FundForm', '#fund_id', 'get-funds-select');
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
                            postData('payment-reason/destroy', 'delete', { id: row.id })
                                .then(function (response) { return response.json(); })
                                .then(function (data) {
                                if (data === 1) {
                                    $table.bootstrapTable('refresh');
                                    notificationDeleteSuccess();
                                }
                                else {
                                    notificationDeleteError();
                                }
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
    $('button#addpaymentreason').click(function (clickEvent) {
        var jc_5446444466 = $.confirm({
            title: fa.add,
            content: 'url: payment-reason/create',
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
                        postData('payment-reason/store', 'POST', getFormData('PaymentReasonForm'))
                            .then(function (response) { return response.json(); })
                            .then(function (data) {
                            if (data === 1) {
                                $table.bootstrapTable('refresh');
                                notificationAddSuccess();
                                jc_5446444466.close();
                            }
                            else {
                                showErrorsNotification(data);
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
                modalSettings();
                addQuickly('#add_fund', 'funds/create', 'funds/store', 'FundForm', '#fund_id', 'get-funds-select');
            }
        });
    });
};
//# sourceMappingURL=PaymentReasonComponent.js.map