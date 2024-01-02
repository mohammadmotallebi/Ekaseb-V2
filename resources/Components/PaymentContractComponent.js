// Payments Scripts Start
paymentContractRender = () => {

    // $('#contracts').on('load-success.bs.table', function (data) {
    //     $('[data-toggle="tooltip"]').tooltip();
    // });

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

                        $(document).on('select2:select', '#user_id', function (e) {
                            $('#contracts_id').html('');
                            postData('role-name', 'post', {id: e.params.data.id})
                                .then(response => response.json())
                                .then(data => {
                                    if (data.name === 'renter') {
                                        $('#contracts-div').show()
                                        $('#contract_id.custom-select').select2('data', null);
                                        postData('user-contracts/' + row.user_id, 'get')
                                            .then(response => response.json())
                                            .then(data => {
                                                let newOption = new Option(data.text, data.id, true, true);
                                                // Append it to the select
                                                $('#contract_id').append(newOption).trigger('change');
                                            });
                                    } else {
                                        $('#contracts-div').hide();
                                        $('#contracts_id').html('');
                                    }
                                })


                        });
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
            } else if (row.payment_method == 'cheque') {
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

                        $(document).on('select2:select', '#user_id', function (e) {
                            $('#contracts_id').html('');
                            postData('role-name', 'post', {id: e.params.data.id})
                                .then(response => response.json())
                                .then(data => {
                                    if (data.name === 'renter') {
                                        $('#contracts-div').show()
                                        $('#contract_id.custom-select').select2('data', null);
                                        postData('user-contracts/' + row.user_id, 'get')
                                            .then(response => response.json())
                                            .then(data => {
                                                let newOption = new Option(data.text, data.id, true, true);
                                                // Append it to the select
                                                $('#contract_id').append(newOption).trigger('change');
                                            });
                                    } else {
                                        $('#contracts-div').hide()
                                        $('#contracts_id').html('');
                                    }
                                })


                        });
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
            if (row.payment_method == 'cash') {
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
        let error = false;
        global.user_id = document.querySelector('#renter_id').value;
        document.querySelector('#contractForm').elements.forEach((el) => {
            if( el.id === 'rent' ||
                // el.id === 'charge'||
                el.id === 'renter_id'||
                el.id === 'start_date'||
                el.id === 'end_date'||
                el.id === 'deposit'||
                el.id === 'rent_price_monthly') {
                if (el.value === '' || el.value == null) {
                    error = true
                }
            }
        })

        if(error){
            notificationCustomError('فرم قرارداد را تکمیل نمایید!')
            return false;

        }
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

                        postData('payment-check', 'POST' ,{id:global.contract_unique_id})
                            .then(response => response.json())
                            .then(data => {
                                if(typeof data[2] === 'undefined'){
                                    data[2] = 0;
                                }
                                if(typeof data[1] === 'undefined'){
                                    data[1] = 0;
                                }
                                if((document.querySelector('#payment_reason_id').value === '2') && (contract.end_deposit < parseInt(data[2]) + parseInt(document.querySelector('#fee').value.replaceAll(',','')))){
                                    notificationCustomError('مبلغ دریافتی بیشتر از مقدار ودیعه میباشد!')
                                    return false;
                                }else if((document.querySelector('#payment_reason_id').value === '1') && (contract.rent_yearly < parseInt(data[1]) + parseInt(document.querySelector('#fee').value.replaceAll(',','')))) {
                                    notificationCustomError('مبلغ دریافتی بیشتر از مقدار اجاره میباشد!')
                                    return false;
                                }else{
                                    postData('cheques/store', 'POST', getFormData('chequeForm', {
                                        contract_unique_id: global.contract_unique_id,
                                        user_id: global.user_id
                                    }))
                                        .then(response => response.json())
                                        .then(data => {
                                            $('#payments').bootstrapTable('refresh');
                                            notificationAddSuccess();
                                            jc_85345349.close();
                                        });
                                }
                            })
                        return false;
                    }
                },
                cancel: {
                    text: fa.buttons.close,
                    btnClass: 'btn-red'
                }
            },
            onContentReady: function () {
                $(document).on('select2:select', '#user_id', function (e) {
                    $('#contract_id').html('');
                    postData('role-name', 'post', {id: e.params.data.id})
                        .then(response => response.json())
                        .then(data => {
                            if (data.name === 'renter') {
                                $('#contracts-div').show()
                                postData('user-contracts', 'post', {userId: e.target.value})
                                    .then(response => response.json())
                                    .then(data => {
                                        data.map((d) => (
                                            $('#contract_id').append(new Option(d.text, d.id, true, true)).trigger('change')
                                        ))
                                    });
                            } else {
                                $('#contracts-div').hide()
                                $('#contract_id').html('');
                            }
                        })


                });
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
        let contract_form_error = false;
        global.user_id = document.querySelector('#renter_id').value;
        document.querySelector('#contractForm').elements.forEach((el) => {
            if( el.id === 'rent' ||
                // el.id === 'charge'||
                el.id === 'renter_id'||
                el.id === 'start_date'||
                el.id === 'end_date'||
                el.id === 'deposit'||
                el.id === 'rent_price_monthly') {
                if (el.value === '' || el.value == null) {
                    contract_form_error = true
                }
            }
        })

        if(contract_form_error){
            notificationCustomError('فرم قرارداد را تکمیل نمایید!')
            return false;

        }
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

                        postData('payment-check', 'POST' ,{id:global.contract_unique_id})
                            .then(response => response.json())
                            .then(data => {
                                if(typeof data[2] === 'undefined'){
                                    data[2] = 0;
                                }
                                if(typeof data[1] === 'undefined'){
                                    data[1] = 0;
                                }
                                if(typeof data[3] === 'undefined'){
                                    data[3] = 0;
                                }
                                if((document.querySelector('#payment_reason_id').value === '2') && (contract.end_deposit < parseInt(data[2]) + parseInt(document.querySelector('#fee').value.replaceAll(',','')))){
                                    notificationCustomError('مبلغ دریافتی بیشتر از مقدار ودیعه میباشد!')
                                    return false;
                                }else if((document.querySelector('#payment_reason_id').value === '1') && (contract.rent_yearly < parseInt(data[1]) + parseInt(document.querySelector('#fee').value.replaceAll(',','')))) {
                                    notificationCustomError('مبلغ دریافتی بیشتر از مقدار اجاره میباشد!')
                                    return false;
                                }else{
                                    postData('cashs/store', 'POST', getFormData('cashForm', {
                                        contract_unique_id: global.contract_unique_id,
                                        user_id: global.user_id
                                    }))
                                        .then(response => response.json())
                                        .then(data => {
                                            $('#payments').bootstrapTable('refresh');
                                            notificationAddSuccess();
                                            jc_56477787.close();
                                        });
                                }
                            })
                        return false;
                    }
                },
                cancel: {
                    text: fa.buttons.close,
                    btnClass: 'btn-red'
                }
            },
            onContentReady: function () {
                $(document).on('select2:select', '#user_id', function (e) {
                    $('#contract_id').html('');
                    postData('role-name', 'post', {id: e.params.data.id})
                        .then(response => response.json())
                        .then(data => {
                            if (data.name === 'renter') {
                                $('#contracts-div').show()
                                postData('user-contracts', 'post', {userId: e.target.value})
                                    .then(response => response.json())
                                    .then(data => {
                                        data.map((d) => (
                                            $('#contract_id').append(new Option(d.text, d.id, true, true)).trigger('change')
                                        ))
                                    });
                            } else {
                                $('#contracts-div').hide()
                                $('#contract_id').html('');
                            }
                        })


                });
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
