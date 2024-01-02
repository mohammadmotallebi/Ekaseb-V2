// Users Scripts Start
ContractUserRender = () => {
    let $table = $('#contract_users');
    // $table.on('check.bs.table', function (e, row, value, index) {
    //
    //
    // })

    window.operateEvents = {
        'click #edit': function (e, value, row, index) {
            $.confirm({
                title: fa.edit,
                content: 'url: ' + row.id + '/edit',
                columnClass: 'l',
                theme: 'modern',
                type: 'green',
                typeAnimated: true,
                buttons: {
                    confirm: {
                        text: fa.edit,
                        btnClass: 'btn-green',
                        action: function () {
                            postData('update', 'PATCH', getFormData('userForm', {id: row.id}))
                                .then(response => response.json())
                                .then(data => {
                                    $table.bootstrapTable('refresh');
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
                    $('#birthday').MdPersianDateTimePicker({
                        targetTextSelector: '#birthday',
                        dateFormat: 'yyyy/MM/dd',
                        englishNumber: true,
                    });
                    modalSettings();
                    cityState();
                },
                onClose: function () {
                }
            });
        },
        'click #delete': function (e, value, row, index) {
            $.confirm({
                title: fa.delete,
                content: fa.alert.user_delete_confirm,
                buttons: {
                    confirm: {
                        text: fa.buttons.yes,
                        btnClass: 'btn-green',
                        action: function () {
                            postData('destroy', 'DELETE', {id: row.id})
                                .then(response => response.json())
                                .then(data => {
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
                content: 'url: ' + row.id + '/view',
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

    }

    $(document).on('click', 'button#userGroupEdit', function (clickEvent) {
        if (getSelectionsCount($('#users')) < 1) {
            notificationNotSelected();
            return false;
        }
        $.confirm({
            title: 'لیست خرید',
            content: 'url: users/group_edit',
            columnClass: 'l',
            theme: 'modern',
            type: 'blue',
            typeAnimated: true,
            buttons: {
                confirm: {
                    text: fa.buttons.yes,
                    btnClass: 'btn-green',
                    action: function () {
                        postData('users/update_selected_users', 'POST', getFormData('userGEditForm', {ids: getIdSelections($('#users'))}))
                            .then(data => {
                                $('#users').bootstrapTable('refresh');
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
    });
    $(document).on('click', 'button#useradd', function (clickEvent) {
        $.confirm({
            title: fa.add,
            content: 'url: create',
            columnClass: 'l',
            theme: 'modern',
            type: 'green',
            typeAnimated: true,
            buttons: {
                confirm: {
                    text: fa.add,
                    btnClass: 'btn-green',
                    action: function () {
                        postData('store', 'POST', getFormData('userForm'))
                            .then(res => res.json())
                            .then(data => {
                                $table.bootstrapTable('refresh');
                                if (data > 0) {
                                    notificationAddSuccess()
                                } else {
                                    notificationAddError()
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
                $('#birthday').MdPersianDateTimePicker({
                    targetTextSelector: '#birthday',
                    dateFormat: 'yyyy/MM/dd',
                    englishNumber: true,
                });
                modalSettings();
                cityState();

            },
            onClose: function () {
            }
        });
    });
}
// Users Scripts End
