contractsRender = function () {
    var $table = $('#contracts');
    window.operateContractEvents = {
        'click #edit': function (e, value, row, index) {
            $.confirm({
                title: fa.edit,
                content: 'url: contracts/' + row.id + '/edit',
                columnClass: 'l',
                theme: 'modern',
                type: 'green',
                typeAnimated: true,
                buttons: {
                    confirm: {
                        text: fa.edit,
                        btnClass: 'btn-green',
                        action: function () {
                            postData('contracts/update', 'PATCH', getFormData('contractEditForm', { id: row.id }))
                                .then(function (response) { return response.json(); })
                                .then(function (data) {
                                $('#contracts').bootstrapTable('refresh');
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
                    $('#start_date').MdPersianDateTimePicker({
                        targetTextSelector: '#start_date',
                        dateFormat: 'yyyy/MM/dd',
                        englishNumber: true,
                    });
                    $('#end_date').MdPersianDateTimePicker({
                        targetTextSelector: '#end_date',
                        dateFormat: 'yyyy/MM/dd',
                        englishNumber: true,
                    });
                    postData('contracts/calculate', 'POST', getFormData('contractEditForm', { estate_id: row.estate_id }))
                        .then(function (response) { return response.json(); })
                        .then(function (data) {
                        $('#yrent').text(data.main_rent_yearly);
                        $('#mrent').text(data.main_rent);
                        $('#tdeposit').text(data.main_deposit);
                        $('#rent_yearly').val(data.yearly_rent);
                        $('#final_deposite').text(data.final_deposit);
                        $('#final_rent').text(data.final_rent);
                        $('#final_rent_yearly').text(data.final_rent_yearly);
                    });
                    $('#cal_deposit').on('click', function () {
                        postData('contracts/calculate', 'POST', getFormData('contractEditForm', { estate_id: row.estate_id }))
                            .then(function (response) { return response.json(); })
                            .then(function (data) {
                            $('#deposit').val(data.deposit);
                            $('#deposit').focus();
                            $('#rent_yearly').val(data.yearly_rent);
                            $('#final_deposite').text(data.final_deposit);
                            $('#final_rent').text(data.final_rent);
                            $('#final_rent_yearly').text(data.final_rent_yearly);
                        });
                    });
                    $('#cal_rent').on('click', function () {
                        postData('contracts/calculate', 'POST', getFormData('contractEditForm', { estate_id: row.estate_id }))
                            .then(function (response) { return response.json(); })
                            .then(function (data) {
                            $('#rent').val(data.rent);
                            $('#rent').focus();
                            $('#rent_yearly').val(data.yearly_rent);
                            $('#final_deposite').text(data.final_deposit);
                            $('#final_rent').text(data.final_rent);
                            $('#final_rent_yearly').text(data.final_rent_yearly);
                        });
                    });
                },
                onClose: function () {
                }
            });
        },
        'click #ban': function (e, value, row, index) {
            $.confirm({
                title: fa.ban_contract,
                content: 'url: contracts/' + row.id + '/ban',
                columnClass: 'm',
                theme: 'modern',
                type: 'red',
                buttons: {
                    confirm: {
                        text: fa.buttons.yes,
                        btnClass: 'btn-green',
                        action: function () {
                            postData('contracts/ban', 'PATCH', getFormData('banForm', { id: row.id }))
                                .then(function (response) { return response.json(); })
                                .then(function (data) {
                                $('#contracts').bootstrapTable('refresh');
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
                    modalSettings();
                    $('#ban_date').MdPersianDateTimePicker({
                        targetTextSelector: '#ban_date',
                        dateFormat: 'yyyy/MM/dd',
                        englishNumber: true,
                    });
                    postData('contracts/ban-data', 'post', { id: row.id, 'date': $('#ban_date').val() })
                        .then(function (response) { return response.json(); })
                        .then(function (data) {
                        $('#rrd').text(data.remain_days);
                        $('#rr').text(Intl.NumberFormat('fa-IR').format(data.remain_rent));
                        $('#rc').text(Intl.NumberFormat('fa-IR').format(data.remain_charge));
                    });
                    $('#ban_date').on('hidden.bs.popover', function () {
                        postData('contracts/ban-data', 'post', { id: row.id, 'date': $('#ban_date').val() })
                            .then(function (response) { return response.json(); })
                            .then(function (data) {
                            $('#rrd').text(data.remain_days);
                            $('#rr').text(Intl.NumberFormat('fa-IR').format(data.remain_rent));
                            $('#rc').text(Intl.NumberFormat('fa-IR').format(data.remain_charge));
                        });
                    });
                }
            });
        },
        'click #view': function (e, value, row, index) {
            $.confirm({
                title: fa.view,
                content: 'url: contracts/' + row.id + '/view',
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
        },
        'click #contract_payments': function (e, value, row, index) {
            global.contract_unique_id = row.contract_unique_id;
            $.confirm({
                title: '',
                content: "url: /contracts/".concat(row.contract_unique_id, "/add-payment"),
                columnClass: 'xl',
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
                    contract.rent_yearly = parseInt(document.querySelector('#rent_yearly').value.replaceAll(',', ''));
                    contract.end_deposit = parseInt(document.querySelector('#end_deposit').value.replaceAll(',', ''));
                    $('#payments').bootstrapTable({
                        url: '/get-payments-modal-data/' + row.contract_unique_id,
                    });
                }
            });
        },
        'click #print': function (e, value, row, index) {
            var pjc = $.confirm({
                title: fa.view_contracts,
                content: "url:contracts/".concat(row.id, "/files"),
                columnClass: 'l',
                theme: 'modern',
                type: 'orange',
                typeAnimated: true,
                buttons: {
                    close: {
                        text: fa.buttons.close,
                        btnClass: 'btn-red'
                    }
                },
                onContentReady: function () {
                    $('#contract-file').bootstrapTable({
                        url: "contracts/".concat(row.id, "/file_data"),
                    });
                    $('#system-contract').on('click', function () {
                        window.open("contracts/".concat(row.id, "/print"), '_blank');
                    });
                    $('#upload-file').click(function () {
                        $('#contract_file').trigger('click');
                    });
                    $('#contract_file').on('change', function () {
                        uploadFileAjax('contracts/upload-file', '#upfile', row.id)
                            .then(function (response) { return response.json(); })
                            .then(function (data) {
                            $('#contract-file').bootstrapTable('refresh');
                        });
                    });
                }
            });
        }
    };
    window.operateFileEvents = {
        'click #delete': function (e, value, row, index) {
            $.confirm({
                title: fa.delete,
                content: fa.alert.file_delete_confirm,
                columnClass: 's',
                theme: 'modern',
                type: 'red',
                buttons: {
                    confirm: {
                        text: fa.buttons.yes,
                        btnClass: 'btn-green',
                        action: function () {
                            postData('contracts/delete-file', 'POST', { file: row.scanned_contract, id: row.id })
                                .then(function (response) { return response.json(); })
                                .then(function (data) {
                                if (data === 1) {
                                    $('#contract-file').bootstrapTable('remove', {
                                        field: 'id',
                                        values: row.id
                                    });
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
        },
    };
    $(document).on('click', 'button#contractadd', function (clickEvent) {
        addContract();
    });
    $(document).on('click', 'button#contract_demo_add', function (clickEvent) {
        addContract();
    });
    function addContract() {
        postData('contracts/check-active', 'post', { id: global.estate_id })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            if (data === 1) {
                $.alert('این مغازه یک قرار داد فعال دارد. ابتدا قرارداد فعال را غیر فعال کنید و سپس قرارداد جدید را ثبت نمایید.', 'توجه');
                return false;
            }
            else {
                var jc_283947293_1 = $.confirm({
                    title: '',
                    content: "url: contracts/create/".concat(global.estate_id),
                    columnClass: 'xl',
                    theme: 'modern',
                    type: 'blue',
                    typeAnimated: true,
                    container: 'body',
                    containerFluid: true,
                    buttons: {
                        confirm: {
                            text: fa.add_contract,
                            btnClass: 'btn-green',
                            action: function () {
                                postData('contracts/store', 'POST', getFormData('contractForm', {
                                    estate_id: global.estate_id,
                                    contract_unique_id: global.contract_unique_id
                                }))
                                    .then(function (response) { return response.json(); })
                                    .then(function (data) {
                                    if (data === 1) {
                                        $('#contracts').bootstrapTable('refresh');
                                        notificationAddSuccess();
                                        jc_283947293_1.close();
                                    }
                                    else {
                                        showErrorsNotification(data);
                                    }
                                });
                                return false;
                            }
                        },
                        cancel: {
                            text: fa.close,
                            btnClass: 'btn-red',
                            action: function () {
                                $.confirm({
                                    title: fa.caution,
                                    content: fa.alert.payment_reset_alert,
                                    columnClass: 'm',
                                    theme: 'modern',
                                    type: 'orange',
                                    typeAnimated: true,
                                    buttons: {
                                        confirm: {
                                            text: fa.buttons.yes,
                                            btnClass: 'btn-red',
                                            action: function () {
                                                postData('payment-reset', 'POST', { id: global.contract_unique_id })
                                                    .then(function (response) { return response.json(); })
                                                    .then(function (data) {
                                                    if (data === 1) {
                                                        jc_283947293_1.close();
                                                    }
                                                    else {
                                                        notificationDeleteError();
                                                    }
                                                });
                                            }
                                        },
                                        cancel: {
                                            text: fa.buttons.no,
                                            btnClass: 'btn-green'
                                        }
                                    }
                                });
                                return false;
                            }
                        }
                    },
                    onContentReady: function () {
                        var payment = {};
                        postData('contracts/generate-contract-id', 'POST', { eid: global.estate_id })
                            .then(function (response) { return response.json(); })
                            .then(function (data) {
                            if (data > 0) {
                                global.contract_unique_id = data;
                                $('#payments').bootstrapTable({
                                    url: '/get-payments-modal-data/' + global.contract_unique_id,
                                });
                            }
                            else {
                                notificationCustomError('خطا در کد قرارداد');
                                return false;
                            }
                        });
                        var el = document.querySelector('#renter_id');
                        el.onchange = function (e) {
                            global.user_id = e.target.value;
                        };
                        $('#start_date').MdPersianDateTimePicker({
                            targetTextSelector: '#start_date',
                            dateFormat: 'yyyy/MM/dd',
                            englishNumber: true,
                        });
                        $('#end_date').MdPersianDateTimePicker({
                            targetTextSelector: '#end_date',
                            dateFormat: 'yyyy/MM/dd',
                            englishNumber: true,
                        });
                        modalSettings();
                        document.querySelector('#rent').onkeyup = function (e) {
                            contract.first_rent = Math.round(e.target.value.replaceAll(',', '') * global.estate_dimension);
                            contract.first_deposit = Math.round(contract.first_rent / 0.03);
                            contract.input_monthly_rent = Math.round((contract.first_deposit - contract.input_deposit) * 0.03);
                            document.querySelector('#rent_price_monthly').value = Intl.NumberFormat('fa-IR').format(contract.input_monthly_rent);
                            document.querySelector('#end_rent').value = Intl.NumberFormat('fa-IR').format(contract.input_monthly_rent - contract.rent_discount);
                            document.querySelector('#end_deposit').value = Intl.NumberFormat('fa-IR').format(contract.input_deposit - contract.deposit_discount);
                            contract.end_deposit = contract.input_deposit - contract.deposit_discount;
                            contract.end_rent = contract.input_monthly_rent - contract.rent_discount;
                            contract.rent_yearly = Math.round(contract.end_rent * 12);
                            document.querySelector('#rent_yearly').value = Intl.NumberFormat('fa-IR').format(Math.round(contract.end_rent * 12));
                        };
                        document.querySelector('#deposit_discount').onkeyup = function (e) {
                            contract.deposit_discount = e.target.value.replaceAll(',', '');
                            document.querySelector('#end_deposit').value = Intl.NumberFormat('fa-IR').format(contract.input_deposit - contract.deposit_discount);
                            contract.end_deposit = contract.input_deposit - contract.deposit_discount;
                        };
                        document.querySelector('#rent_discount').onkeyup = function (e) {
                            contract.rent_discount = e.target.value.replaceAll(',', '');
                            document.querySelector('#end_rent').value = Intl.NumberFormat('fa-IR').format(contract.input_monthly_rent - contract.rent_discount);
                            contract.end_rent = contract.input_monthly_rent - contract.rent_discount;
                            contract.rent_yearly = Math.round(contract.end_rent * 12);
                            document.querySelector('#rent_yearly').value = Intl.NumberFormat('fa-IR').format(Math.round(contract.end_rent * 12));
                        };
                        document.querySelector('#deposit').onkeyup = function (e) {
                            if (contract.first_rent === 0) {
                                notificationCustomError('اجاره هر متر مغازه را وارد نمایید!');
                                document.getElementById('rent').focus();
                                e.target.value = '';
                                return false;
                            }
                            else {
                                contract.input_deposit = e.target.value.replaceAll(',', '');
                                var res = contract.first_deposit - contract.input_deposit;
                                contract.input_monthly_rent = Math.round(res * 0.03);
                                contract.rent_yearly = Math.round(res * 0.03) * 12;
                                document.getElementById('rent_price_monthly').value = Intl.NumberFormat('fa-IR').format(contract.input_monthly_rent);
                                document.querySelector('#end_rent').value = Intl.NumberFormat('fa-IR').format(contract.input_monthly_rent - contract.rent_discount);
                                document.querySelector('#end_deposit').value = Intl.NumberFormat('fa-IR').format(contract.input_deposit - contract.deposit_discount);
                                contract.end_deposit = contract.input_deposit - contract.deposit_discount;
                                contract.end_rent = contract.input_monthly_rent - contract.rent_discount;
                                contract.rent_yearly = Math.round(contract.end_rent * 12);
                                document.querySelector('#rent_yearly').value = Intl.NumberFormat('fa-IR').format(Math.round(contract.end_rent * 12));
                            }
                        };
                        document.querySelector('#rent_price_monthly').onkeyup = function (e) {
                            if (contract.first_rent === 0) {
                                notificationCustomError('اجاره هر متر مغازه را وارد نمایید!');
                                document.getElementById('rent').focus();
                                e.target.value = '';
                                return false;
                            }
                            else {
                                contract.input_monthly_rent = e.target.value.replaceAll(',', '');
                                var res = contract.first_rent - contract.input_monthly_rent;
                                contract.input_deposit = Math.round(res / 0.03);
                                contract.rent_yearly = parseInt(e.target.value.replaceAll(',', '')) * 12;
                                document.getElementById('deposit').value = Intl.NumberFormat('fa-IR').format(contract.input_deposit);
                                document.querySelector('#end_rent').value = Intl.NumberFormat('fa-IR').format(contract.input_monthly_rent - contract.rent_discount);
                                document.querySelector('#end_deposit').value = Intl.NumberFormat('fa-IR').format(contract.input_deposit - contract.deposit_discount);
                                contract.end_deposit = contract.input_deposit - contract.deposit_discount;
                                contract.end_rent = contract.input_monthly_rent - contract.rent_discount;
                                contract.rent_yearly = Math.round(contract.end_rent * 12);
                                document.querySelector('#rent_yearly').value = Intl.NumberFormat('fa-IR').format(Math.round(contract.end_rent * 12));
                            }
                        };
                    },
                    onClose: function () {
                        global.contract_unique_id = null;
                        global.user_id = null;
                        $('[data-toggle="tooltip"]').tooltip('hide');
                    }
                });
            }
        });
    }
    ;
};
//# sourceMappingURL=ContractComponent.js.map