costRender = function () {
    var $table = $('#cost');
    $table.on('load-success.bs.table', function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
    window.operateCostEvents = {
        'click #edit': function (e, value, row, index) {
            if (row.cost_method == 'cash') {
                var edit_cost = $.confirm({
                    title: fa.edit,
                    content: 'url: cost/cash/' + row.id + '/edit',
                    columnClass: 'l',
                    theme: 'modern',
                    type: 'green',
                    typeAnimated: true,
                    buttons: {
                        confirm: {
                            text: fa.edit,
                            btnClass: 'btn-green',
                            action: function () {
                                postData('cost/cash/update', 'PATCH', getFormData('cashEditForm', {
                                    id: row.id,
                                    contract_id: $('#contract_id').val(),
                                    user_id: $('#user_id').val()
                                }))
                                    .then(function (response) { return response.json(); })
                                    .then(function (data) {
                                    $('#costs').bootstrapTable('refresh');
                                    if (data === 1) {
                                        notificationEditSuccess();
                                    }
                                    else {
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
                        $('#cost_date').MdPersianDateTimePicker({
                            targetTextSelector: '#cost_date',
                            dateFormat: 'yyyy/MM/dd',
                            englishNumber: true,
                        });
                    },
                    onClose: function () {
                    }
                });
            }
            else if (row.cost_method === 'cheque') {
                $.confirm({
                    title: fa.edit,
                    content: 'url: cost/cheque/' + row.id + '/edit',
                    columnClass: 'l',
                    theme: 'modern',
                    type: 'green',
                    typeAnimated: true,
                    buttons: {
                        confirm: {
                            text: fa.edit,
                            btnClass: 'btn-green',
                            action: function () {
                                postData('cost/cheque/update', 'PATCH', getFormData('chequeEditForm', {
                                    id: row.id,
                                    contract_id: $('#contract_id').val(),
                                    user_id: $('#user_id').val()
                                }))
                                    .then(function (response) { return response.json(); })
                                    .then(function (data) {
                                    $('#cost').bootstrapTable('refresh');
                                    if (data === 1) {
                                        notificationEditSuccess();
                                    }
                                    else {
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
                        $('#cost_date').MdPersianDateTimePicker({
                            targetTextSelector: '#cost_date',
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
            if (row.cost_method === 'cheque') {
                var jc_1 = $.confirm({
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
                                postData('cost/cheque/destroy', 'DELETE', { id: row.id })
                                    .then(function (response) { return response.json(); })
                                    .then(function (data) {
                                    if (data === 1) {
                                        $('#costs').bootstrapTable('refresh');
                                        notificationDeleteSuccess();
                                        jc_1.close();
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
                    },
                    onContentReady: function () {
                    }
                });
            }
            else if (row.cost_method === 'cash') {
                var jc_2 = $.confirm({
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
                                postData('cost/cash/destroy', 'DELETE', { id: row.id })
                                    .then(function (response) { return response.json(); })
                                    .then(function (data) {
                                    if (data === 1) {
                                        $('#costs').bootstrapTable('refresh');
                                        notificationDeleteSuccess();
                                        jc_2.close();
                                    }
                                    else {
                                        notificationDeleteError();
                                    }
                                });
                                return false;
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
            }
        },
        'click #view': function (e, value, row, index) {
            if (row.cost_method === 'cash') {
                $.confirm({
                    title: fa.view,
                    content: 'url: cost/cash/' + row.id + '/view',
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
            else if (row.cost_method == 'cheque') {
                $.confirm({
                    title: fa.view,
                    content: 'url: cost/cheque/' + row.id + '/view',
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
    };
    $(document).on('click', 'button#chequeadd', function (clickEvent) {
        var jc_85345349 = $.confirm({
            title: fa.add,
            content: 'url: cost/cheque/create',
            columnClass: 'l',
            theme: 'modern',
            type: 'purple',
            typeAnimated: true,
            buttons: {
                confirm: {
                    text: fa.add,
                    btnClass: 'btn-green',
                    action: function () {
                        postData('cost/cheque/store', 'POST', getFormData('chequeForm'))
                            .then(function (response) { return response.json(); })
                            .then(function (data) {
                            if (data === 1) {
                                $('#costs').bootstrapTable('refresh');
                                notificationAddSuccess();
                                jc_85345349.close();
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
                $(document).on('click', '#cheque_list', function () {
                    var jc_853423523453 = $.confirm({
                        title: fa.cheque_list,
                        content: 'url: cheque-list',
                        columnClass: 'l',
                        theme: 'modern',
                        type: 'purple',
                        typeAnimated: true,
                        buttons: {
                            confirm: {
                                text: fa.add,
                                btnClass: 'btn-green',
                                action: function () {
                                }
                            },
                            cancel: {
                                text: fa.buttons.close,
                                btnClass: 'btn-red'
                            }
                        },
                        onContentReady: function () {
                            $('#cheques').bootstrapTable({
                                url: "cheque-list-data",
                                onDblClickRow: function (row, $element, field) {
                                    document.querySelector('#cheque_number').value = row.cheque_number;
                                    document.querySelector('#price').value = Intl.NumberFormat().format(row.fee);
                                    $('#bank').val(row.bank).trigger('change');
                                    document.querySelector('#bank_branch').value = row.bank_branch;
                                    document.querySelector('#account_number').value = row.account_number;
                                    document.querySelector('#cheque_date').value = row.cheque_date;
                                    jc_853423523453.close();
                                }
                            });
                        }
                    });
                });
                modalSettings();
                $('#cheque_date').MdPersianDateTimePicker({
                    targetTextSelector: '#cheque_date',
                    dateFormat: 'yyyy/MM/dd',
                    englishNumber: true,
                });
                $('#cost_date').MdPersianDateTimePicker({
                    targetTextSelector: '#cost_date',
                    dateFormat: 'yyyy/MM/dd',
                    englishNumber: true,
                });
            }
        });
    });
    $(document).on('click', 'button#cashadd', function (clickEvent) {
        var jc_56477787 = $.confirm({
            title: fa.add,
            content: 'url: cost/cash/create',
            columnClass: 'l',
            theme: 'modern',
            type: 'purple',
            typeAnimated: true,
            buttons: {
                confirm: {
                    text: fa.add,
                    btnClass: 'btn-green',
                    action: function () {
                        postData('cost/cash/store', 'POST', getFormData('cashForm'))
                            .then(function (response) { return response.json(); })
                            .then(function (data) {
                            if (data === 1) {
                                $('#costs').bootstrapTable('refresh');
                                notificationAddSuccess();
                                jc_56477787.close();
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
                $('#cost_date').MdPersianDateTimePicker({
                    targetTextSelector: '#cost_date',
                    dateFormat: 'yyyy/MM/dd',
                    englishNumber: true,
                });
            }
        });
    });
};
//# sourceMappingURL=CostComponent.js.map