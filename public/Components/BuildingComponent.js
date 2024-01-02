buildingRender = function () {
    var $table = $('#buildings');
    var bid = 0;
    $table.on('load-success.bs.table', function (data) {
        $('[data-toggle="tooltip"]').tooltip();
    });
    $('#buildings').on('click-row.bs.table', function (field, row, $element) {
        bid = row.id;
    });
    window.operateBuildingEvents = {
        'click #edit': function (e, value, row, index) {
            var jc_55485 = $.confirm({
                title: fa.edit,
                content: 'url: buildings/' + row.id + '/edit',
                columnClass: 'l',
                theme: 'modern',
                type: 'green',
                typeAnimated: true,
                buttons: {
                    confirm: {
                        text: fa.edit,
                        btnClass: 'btn-green',
                        action: function () {
                            postData('buildings/update', 'PATCH', getFormData('buildingForm', {
                                id: row.id,
                            }))
                                .then(function (response) { return response.json(); })
                                .then(function (data) {
                                if (data === 1) {
                                    notificationEditSuccess();
                                    $('#buildings').bootstrapTable('refresh');
                                    jc_55485.close();
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
                    $('#buildingDetails').bootstrapTable({
                        url: '/get_building_detail/' + row.id,
                    });
                    $('#buildingDetails').on('click-row.bs.table', function (field, row, $element) {
                        jc_55485.$content.find('tr').removeClass('selected-row');
                        $($element).addClass('selected-row');
                    });
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
                            postData('buildings/destroy', 'DELETE', { id: row.id })
                                .then(function (data) {
                                $('#buildings').bootstrapTable('refresh');
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
            var jc = $.confirm({
                title: fa.view,
                content: 'url: buildings/' + row.id + '/view',
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
                    $('#buildingDetails').bootstrapTable({
                        url: '/get_building_detail/' + row.id,
                    });
                    $('#buildingDetails').on('click-row.bs.table', function (field, row, $element) {
                        jc.$content.find('tr').removeClass('selected-row');
                        $($element).addClass('selected-row');
                    });
                },
            });
        },
    };
    window.operateBuildingDetailEvents = {
        'click #edit': function (e, value, row, index) {
            var jc_77544 = $.confirm({
                title: fa.edit,
                content: 'url: building_detail/' + row.id + '/edit',
                columnClass: 'l',
                theme: 'modern',
                type: 'green',
                typeAnimated: true,
                buttons: {
                    confirm: {
                        text: fa.edit,
                        btnClass: 'btn-green',
                        action: function () {
                            postData('building_detail/update', 'PATCH', getFormData('buildingDetailEditForm', { id: row.id }))
                                .then(function (response) { return response.json(); })
                                .then(function (data) {
                                if (data === 1) {
                                    $('#buildingDetails').bootstrapTable('refresh');
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
                    modalSettings();
                    $('#estateDetails').bootstrapTable({
                        url: '/get_building_detail/' + row.id,
                    });
                },
                onClose: function () {
                }
            });
        },
        'click #delete': function (e, value, row, index) {
            $.confirm({
                title: fa.delete,
                content: fa.alert.building_detail_delete_confirm,
                buttons: {
                    confirm: {
                        text: fa.buttons.yes,
                        btnClass: 'btn-green',
                        action: function () {
                            postData('building_detail/destroy', 'DELETE', { id: row.id })
                                .then(function (response) { return response.json(); })
                                .then(function (data) {
                                if (data === 1) {
                                    $('#buildingDetails').bootstrapTable('refresh');
                                    notificationDeleteSuccess();
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
    $(document).on('click', 'button#buildingadd', function (clickEvent) {
        var jc_44855545468 = $.confirm({
            title: fa.add,
            content: 'url: buildings/create',
            columnClass: 'l',
            theme: 'modern',
            type: 'green',
            typeAnimated: true,
            buttons: {
                confirm: {
                    text: fa.add,
                    btnClass: 'btn-green',
                    action: function () {
                        postData('buildings/store', 'POST', getFormData('buildingForm'))
                            .then(function (response) { return response.json(); })
                            .then(function (data) {
                            if (data === 1) {
                                $('#buildings').bootstrapTable('refresh');
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
            },
            onClose: function () {
            }
        });
    });
    $(document).on('click', 'button#detailAdd', function (clickEvent) {
        var jc_84564331 = $.confirm({
            title: fa.add,
            content: 'url: building_detail/create',
            columnClass: 'l',
            theme: 'modern',
            type: 'green',
            typeAnimated: true,
            buttons: {
                confirm: {
                    text: fa.add,
                    btnClass: 'btn-green',
                    action: function () {
                        postData('building_detail/store', 'POST', getFormData('buildingDetailAddForm', { bid: bid }))
                            .then(function (response) { return response.json(); })
                            .then(function (data) {
                            if (data === 1) {
                                $('#buildingDetails').bootstrapTable('refresh');
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
                modalSettings();
            },
            onClose: function () {
            }
        });
    });
};
//# sourceMappingURL=BuildingComponent.js.map