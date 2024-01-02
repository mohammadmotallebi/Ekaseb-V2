estatesRender = function () {
    var $table = $('#estates');
    var estate_id = 0;
    $table.on('click-row.bs.table', function ($element, row, field) {
        global.estate_id = row.id;
        global.estate_dimension = row.dimension;
    });
    $table.on('load-success.bs.table', function (data) {
        $('[data-toggle="tooltip"]').tooltip();
    });
    window.operateEstateEvents = {
        'click #edit': function (e, value, row, index) {
            var jc_87446454 = $.confirm({
                title: fa.edit,
                content: 'url: estates/' + row.id + '/edit',
                columnClass: 'l',
                theme: 'modern',
                type: 'green',
                typeAnimated: true,
                buttons: {
                    confirm: {
                        text: fa.edit,
                        btnClass: 'btn-green',
                        action: function () {
                            postData('estates/update', 'PATCH', getFormData('estateForm', {
                                id: row.id,
                                owners: $('#owner_id').val()
                            }))
                                .then(function (response) { return response.json(); })
                                .then(function (data) {
                                if (data === 1) {
                                    notificationEditSuccess();
                                    $table.bootstrapTable('refresh');
                                    jc_87446454.close();
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
                        btnClass: 'btn-red'
                    }
                },
                onContentReady: function () {
                    modalSettings();
                    addQuickly('#add_building', 'buildings/create', 'buildings/store', 'buildingForm', '#building_id', 'get-buildings-select');
                    addQuickly('#add_floor', 'floor/create', 'floor/store', 'FloorForm', '#floor_id', 'get-floors-select');
                },
                onClose: function () {
                }
            });
        },
        'click #delete': function (e, value, row, index) {
            $.confirm({
                title: fa.delete,
                content: fa.alert.estate_delete_confirm,
                buttons: {
                    confirm: {
                        text: fa.buttons.yes,
                        btnClass: 'btn-green',
                        action: function () {
                            postData('estates/destroy', 'DELETE', { id: row.id })
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
        'click #view': function (e, value, row, index) {
            $.confirm({
                title: fa.view,
                content: 'url: estates/' + row.id + '/view',
                columnClass: 'l',
                theme: 'modern',
                type: 'green',
                typeAnimated: true,
                buttons: {
                    close: {
                        text: fa.buttons.close,
                        btnClass: 'btn-red'
                    }
                },
                onContentReady: function () {
                    $('#estateDetails').bootstrapTable({
                        url: '/get_estate_detail/' + row.id,
                    });
                    var td = row.total_rent_monthly;
                    $('#tdeposit').text(Intl.NumberFormat('fa-IR').format(Math.round(td.replaceAll(',', '') / 0.03)));
                    $('#mrent').text(row.total_rent_monthly);
                    $('#yrent').text(row.total_rent_yearly);
                },
            });
        },
        'click #cview': function (e, value, row, index) {
            $.confirm({
                title: fa.view,
                content: 'url: /contracts',
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
                    $('#contracts').bootstrapTable({
                        url: '/get-contracts-data/' + row.id,
                    });
                },
                onClose: function () {
                    setNullGlobal();
                }
            });
        },
        'click #charges': function (e, value, row, index) {
            var jc_3984263946 = $.confirm({
                title: fa.view,
                content: 'url: /charges/' + row.id,
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
                    jc_3984263946.$content.find('#charges').bootstrapTable({
                        url: '/get-charges-data/' + row.id,
                    });
                },
                onClose: function () {
                }
            });
        }
    };
    window.operateEstateDetailEvents = {
        'click #edit': function (e, value, row, index) {
            var jc_77544 = $.confirm({
                title: fa.edit,
                content: 'url: estate_detail/' + row.id + '/edit',
                columnClass: 'l',
                theme: 'modern',
                type: 'green',
                typeAnimated: true,
                buttons: {
                    confirm: {
                        text: fa.edit,
                        btnClass: 'btn-green',
                        action: function () {
                            var active_64678854 = 0;
                            if ($('#active').is(':checked')) {
                                active_64678854 = 1;
                                $('.custom-control-label').css('color', '#1cc88a');
                            }
                            else {
                                active_64678854 = 0;
                                $('.custom-control-label').css('color', 'red');
                            }
                            postData('estate_detail/update', 'PATCH', getFormData('estateDetailEditForm', {
                                id: row.id,
                                active: active_64678854
                            }))
                                .then(function (response) { return response.json(); })
                                .then(function (data) {
                                if (data === 1) {
                                    $('#estateDetails').bootstrapTable('refresh');
                                    notificationEditSuccess();
                                    jc_77544.close();
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
                        btnClass: 'btn-red'
                    }
                },
                onContentReady: function () {
                    if ($('#active').is(':checked')) {
                        $('.custom-control-label').css('color', '#1cc88a');
                    }
                    else {
                        $('.custom-control-label').css('color', 'red');
                    }
                    $('#active').on('change', function () {
                        if ($(this).is(':checked')) {
                            $('.custom-control-label').css('color', '#1cc88a');
                        }
                        else {
                            $('.custom-control-label').css('color', 'red');
                        }
                    });
                    modalSettings();
                    $('#estateDetails').bootstrapTable({
                        url: '/get_estate_detail/' + row.id,
                    });
                },
                onClose: function () {
                }
            });
        },
        'click #delete': function (e, value, row, index) {
            $.confirm({
                title: fa.delete,
                content: fa.alert.estate_detail_delete_confirm,
                buttons: {
                    confirm: {
                        text: fa.buttons.yes,
                        btnClass: 'btn-green',
                        action: function () {
                            postData('estate_detail/destroy', 'DELETE', { id: row.id })
                                .then(function (response) { return response.json(); })
                                .then(function (data) {
                                if (data === 1) {
                                    $('#estateDetails').bootstrapTable('refresh');
                                    notificationDeleteSuccess();
                                }
                                else {
                                    notificationCustomError(fa.alert.estate_detail_delete_error);
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
    $(document).on('click', 'button#estateadd', function (clickEvent) {
        var jc_44855545468 = $.confirm({
            title: fa.add,
            content: 'url: estates/create',
            columnClass: 'l',
            theme: 'modern',
            type: 'green',
            typeAnimated: true,
            buttons: {
                confirm: {
                    text: fa.add,
                    btnClass: 'btn-green',
                    action: function () {
                        postData('estates/store', 'POST', getFormData('estateForm', { owners: $('#owner_id').val() }))
                            .then(function (response) { return response.json(); })
                            .then(function (data) {
                            if (data === 1) {
                                $table.bootstrapTable('refresh');
                                notificationAddSuccess();
                                jc_44855545468.close();
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
                    btnClass: 'btn-red'
                }
            },
            onContentReady: function () {
                modalSettings();
                addQuickly('#add_building', 'buildings/create', 'buildings/store', 'buildingForm', '#building_id', 'get-buildings-select');
                addQuickly('#add_floor', 'floor/create', 'floor/store', 'FloorForm', '#floor_id', 'get-floors-select');
            },
            onClose: function () {
            }
        });
    });
    $(document).on('click', 'button#detailAdd', function (clickEvent) {
        var jc_84564331 = $.confirm({
            title: fa.add,
            content: 'url: estate_detail/create',
            columnClass: 'l',
            theme: 'modern',
            type: 'green',
            typeAnimated: true,
            buttons: {
                confirm: {
                    text: fa.add,
                    btnClass: 'btn-green',
                    action: function () {
                        postData('estate_detail/store', 'POST', getFormData('estateDetailForm', { estate_id: estate_id }))
                            .then(function (response) { return response.json(); })
                            .then(function (data) {
                            if (data === 1) {
                                $('#estateDetails').bootstrapTable('refresh');
                                notificationAddSuccess();
                                jc_84564331.close();
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
                    btnClass: 'btn-red'
                }
            },
            onContentReady: function () {
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
            },
            onClose: function () {
            }
        });
    });
};
//# sourceMappingURL=EstateComponent.js.map