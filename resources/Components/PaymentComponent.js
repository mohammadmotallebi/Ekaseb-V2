// Payments Scripts Start
paymentRender = () => {
    let $table = $('#payments');
    $table.on('load-success.bs.table', function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
    window.operateChequeEvents = {
        'click #edit': function (e, value, row, index) {
            if (row.payment_method == 'cash') {
                let edit_payment = $.confirm({
                    title: fa.edit,
                    content: 'url: cashs/' + row.id + '/edit',
                    columnClass: 'l',
                    theme: 'modern',
                    type: 'green',
                    typeAnimated: true,
                    buttons: {
                        confirm: {
                            text: fa.edit,
                            btnClass: 'btn-green',
                            action: function () {
                                postData('cashs/update', 'PATCH', getFormData('cashEditForm', {
                                    id: row.id,
                                    contract_id: $('#contract_id').val(),
                                    user_id: $('#user_id').val()
                                }))
                                    .then(response => response.json())
                                    .then(data => {
                                        $('#payments').bootstrapTable('refresh');
                                        if (data === 1) {
                                            notificationEditSuccess();
                                        } else {
                                            notificationEditError();
                                        }

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
                        $('#payment_date').MdPersianDateTimePicker({
                            targetTextSelector: '#payment_date',
                            dateFormat: 'yyyy/MM/dd',
                            englishNumber: true,

                        });
                    },
                    onClose: function () {
                    }
                });
            } else if (row.payment_method === 'cheque') {
                $.confirm({
                    title: fa.edit,
                    content: 'url: cheques/' + row.id + '/edit',
                    columnClass: 'l',
                    theme: 'modern',
                    type: 'green',
                    typeAnimated: true,
                    buttons: {
                        confirm: {
                            text: fa.edit,
                            btnClass: 'btn-green',
                            action: function () {
                                postData('cheques/update', 'PATCH', getFormData('chequeEditForm', {
                                    id: row.id,
                                    contract_id: $('#contract_id').val(),
                                    user_id: $('#user_id').val()
                                }))
                                    .then(response => response.json())
                                    .then(data => {
                                        $('#payments').bootstrapTable('refresh');
                                        if (data === 1) {
                                            notificationEditSuccess();
                                        } else {
                                            notificationEditError();
                                        }

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
            }
        },
        'click #delete': function (e, value, row, index) {

            $.confirm({
                title: fa.delete,
                content: fa.alert.cheque_delete_confirm,
                columnClass: 's',
                theme: 'modern',
                type: 'red',
                buttons: {
                    confirm: {
                        text: fa.buttons.yes,
                        btnClass: 'btn-green',
                        action: function () {
                            postData('cheques/destroy', 'DELETE', {id: row.id})
                                .then(response => response.json())
                                .then(data => {
                                    $('#payments').bootstrapTable('refresh');
                                    notificationDeleteSuccess();
                                });
                        }
                    },
                    close: {
                        text: fa.buttons.no,
                        btnClass: 'btn-red'
                    }
                },
                onContentReady: function () {

                }
            });
        },
        'click #view': function (e, value, row, index) {
            if (row.payment_method === 'cash') {
                $.confirm({
                    title: fa.view,
                    content: 'url: cashs/' + row.id + '/view',
                    columnClass: 'l',
                    theme: 'modern',
                    type: 'green',
                    typeAnimated: true,
                    buttons: {
                        close: {
                            text: fa.buttons.close,
                            btnClass: 'btn-red'
                        }
                    }
                });
            } else if (row.payment_method == 'cheque') {
                $.confirm({
                    title: fa.view,
                    content: 'url: cheques/' + row.id + '/view',
                    columnClass: 'l',
                    theme: 'modern',
                    type: 'green',
                    typeAnimated: true,
                    buttons: {
                        close: {
                            text: fa.buttons.close,
                            btnClass: 'btn-red'
                        }
                    }
                });
            }

        },

    }
    $(document).on('click', 'button#chequeadd', function (clickEvent) {
        let jc_85345349 = $.confirm({
            title: fa.add,
            content: 'url: cheques/create',
            columnClass: 'l',
            theme: 'modern',
            type: 'purple',
            typeAnimated: true,
            buttons: {
                confirm: {
                    text: fa.add,
                    btnClass: 'btn-green',
                    action: function () {
                        postData('cheques/store', 'POST', getFormData('chequeForm'))
                            .then(response => response.json())
                            .then(data => {
                                if (data === 1) {
                                    $('#payments').bootstrapTable('refresh');
                                    notificationAddSuccess();
                                    jc_85345349.close();
                                } else {
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
                $('#cheque_date').MdPersianDateTimePicker({
                    targetTextSelector: '#cheque_date',
                    dateFormat: 'yyyy/MM/dd',
                    englishNumber: true,

                });
                $('#payment_date').MdPersianDateTimePicker({
                    targetTextSelector: '#payment_date',
                    dateFormat: 'yyyy/MM/dd',
                    englishNumber: true,

                });
            }
        });

    });
    $(document).on('click', 'button#cashadd', function (clickEvent) {
        let jc_56477787 = $.confirm({
            title: fa.add,
            content: 'url: cashs/create',
            columnClass: 'l',
            theme: 'modern',
            type: 'purple',
            typeAnimated: true,
            buttons: {
                confirm: {
                    text: fa.add,
                    btnClass: 'btn-green',
                    action: function () {

                        postData('cashs/store', 'POST', getFormData('cashForm'))
                            .then(response => response.json())
                            .then(data => {
                                if (data === 1) {
                                    $('#payments').bootstrapTable('refresh');
                                    notificationAddSuccess();
                                    jc_56477787.close();
                                } else {
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
                $('#payment_date').MdPersianDateTimePicker({
                    targetTextSelector: '#payment_date',
                    dateFormat: 'yyyy/MM/dd',
                    englishNumber: true,

                });
            }
        });

    });

}
// Payments Scripts End
