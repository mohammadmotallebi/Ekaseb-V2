// Roles Scripts Start
rolesRender = () => {
    let $table = $('#roles');
    window.operateEvents = {
        'click #edit': function (e, value, row, index) {
            rowID = row.id;
            $.confirm({
                title: fa.edit,
                content: 'url: Roles/edit/'+row.id,
                columnClass: 'm',
                theme: 'modern',
                type: 'blue',
                typeAnimated: true,
                buttons: {
                    confirm: {
                        text: fa.edit,
                        btnClass: 'btn-green',
                        action: function () {

                            postData('Roles/update', 'PATCH', getFormData('RolesForm', {id: row.id}))
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

                },
                onClose: function () {

                }
            });

        },
        'click #delete': function (e, value, row, index) {
            $.confirm({
                title: fa.delete,
                content: fa.alert.role_delete_confirm,
                type: 'red',
                buttons: {
                    confirm: {
                        text: fa.buttons.yes,
                        btnClass: 'btn-green',
                        action: function () {
                            postData('Roles/destroy', 'delete', {id: row.id})
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
        'click #permission': function (e, value, row, index) {
            $.confirm({
                title: fa.permissions,
                content: 'url: PermissionsList/' + row.id,
                columnClass: 'm',
                theme: 'modern',
                type: 'info',
                typeAnimated: true,
                buttons: {
                    confirm: {
                        text: fa.buttons.save,
                        btnClass: 'btn-green',
                        keys: ['enter'],
                        action: function () {
                            postData('Permission/update/' + row.id, 'POST', {ids: getCheckboxData("permissions")})
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

                }
            });
        }
    }
    $('button#permissionList').click(function (clickEvent) {

    });
    $('button#addrole').click(function (clickEvent) {
        $.confirm({
            title: fa.add,
            content: 'url: Roles/create',
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
                        postData('Roles/store', 'POST', getFormData('RolesForm'))
                            .then(data => {
                                $table.bootstrapTable('refresh');
                                notificationAddSuccess();
                            });
                    }
                },
                cancel: {
                    text: 'بستن',
                    btnClass: 'btn-red'
                }
            },
            onContentReady: function () {

            }
        });
    });

    $('button#deleteroles').click(function (clickEvent) {
        if (getSelectionsCount($table) < 1) {
            notificationNotSelected();
            return false;
        }
        $.confirm({
            title: fa.delete,
            content: fa.alert.role_delete_confirm,
            type: 'red',
            buttons: {
                confirm: {
                    text: fa.buttons.yes,
                    btnClass: 'btn-green',
                    action: function () {
                        postData('Roles/destroy-selections', 'delete', {id: getIdSelections($table)})
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
    });
}
// Roles Scripts End
