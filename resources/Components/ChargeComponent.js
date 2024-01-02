// Charges Scripts Start
chargesRender = () => {
    let $table = $('#charges');
    window.operateChargeEvents = {
        'click #cash': function (e, value, row, index) {
            const jc_875482154 = $.confirm({
                title: fa.edit,
                content: `url: charges/cash/${row.id}/edit`,
                columnClass: 'm',
                theme: 'modern',
                type: 'blue',
                typeAnimated: true,
                buttons: {
                    confirm: {
                        text: fa.edit,
                        btnClass: 'btn-green',
                        action: function () {
                            postData(`charges/${row.id}/update/cash`, 'PATCH', getFormData('cashChargeForm', {id: row.id}))
                                .then(response => response.json())
                                .then(data => {
                                    if(data === 1) {
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
                    modalSettings()
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
            const jc_394820394802 = $.confirm({
                title: fa.edit,
                content: `url: charges/cheque/${row.id}/edit`,
                columnClass: 'l',
                theme: 'modern',
                type: 'blue',
                typeAnimated: true,
                buttons: {
                    confirm: {
                        text: fa.edit,
                        btnClass: 'btn-green',
                        action: function () {

                            postData('charges/update', 'PATCH', getFormData('chequeChargeForm', {id: row.id}))
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
                    modalSettings()
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
    }

}
// Charges Scripts End
