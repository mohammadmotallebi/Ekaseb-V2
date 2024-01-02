chargesRender = function () {
    var $table = $('#charges');
    window.operateChargeEvents = {
        'click #cash': function (e, value, row, index) {
            var jc_875482154 = $.confirm({
                title: fa.edit,
                content: "url: charges/cash/".concat(row.id, "/edit"),
                columnClass: 'm',
                theme: 'modern',
                type: 'blue',
                typeAnimated: true,
                buttons: {
                    confirm: {
                        text: fa.edit,
                        btnClass: 'btn-green',
                        action: function () {
                            postData("charges/".concat(row.id, "/update/cash"), 'PATCH', getFormData('cashChargeForm', { id: row.id }))
                                .then(function (response) { return response.json(); })
                                .then(function (data) {
                                if (data === 1) {
                                    $('table#charges').bootstrapTable('refresh');
                                    notificationEditSuccess();
                                }
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
                    $('#payment_date').MdPersianDateTimePicker({
                        targetTextSelector: '#payment_date',
                        dateFormat: 'yyyy/MM/dd',
                        englishNumber: true,
                    });
                },
            });
        },
        'click #cheque': function (e, value, row, index) {
            rowID = row.id;
            var jc_394820394802 = $.confirm({
                title: fa.edit,
                content: "url: charges/cheque/".concat(row.id, "/edit"),
                columnClass: 'l',
                theme: 'modern',
                type: 'blue',
                typeAnimated: true,
                buttons: {
                    confirm: {
                        text: fa.edit,
                        btnClass: 'btn-green',
                        action: function () {
                            postData('charges/update', 'PATCH', getFormData('chequeChargeForm', { id: row.id }))
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
                    modalSettings();
                    $('#payment_date').MdPersianDateTimePicker({
                        targetTextSelector: '#payment_date',
                        dateFormat: 'yyyy/MM/dd',
                        englishNumber: true,
                    });
                    $('#cheque_date').MdPersianDateTimePicker({
                        targetTextSelector: '#cheque_date',
                        dateFormat: 'yyyy/MM/dd',
                        englishNumber: true,
                    });
                },
                onClose: function () {
                }
            });
        },
    };
};
//# sourceMappingURL=ChargeComponent.js.map