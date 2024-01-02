// Genders Scripts Start
gendersRender = () => {
    let $table = $('#genders');
    window.operateEvents = {
        'click #edit': function (e, value, row, index) {
            rowID = row.id;
            $.confirm({
                title: fa.edit,
                content: 'url: Genders/edit',
                columnClass: 'm',
                theme: 'modern',
                type: 'blue',
                typeAnimated: true,
                buttons: {
                    confirm: {
                        text: fa.edit,
                        btnClass: 'btn-green',
                        action: function () {

                            postData('Genders/update', 'PATCH', getFormData('GendersForm', {id: row.id}))
                                .then(data => {
                                    $table.bootstrapTable('refresh');
                                    notificationEditSuccess()
                                });
                        }
                    },
                    cancel: {
                        text: fa.buttons.close,
                        btnClass: 'btn-red'
                    }
                },
                onContentReady: function () {
                    $('#gender_name').val(row.gender_name);
                },
                onClose: function () {

                }
            });

        },
        'click #delete': function (e, value, row, index) {
            $.confirm({
                title: fa.delete,
                content: fa.alert.gender_delete_confirm,
                type: 'red',
                buttons: {
                    confirm: {
                        text: fa.buttons.yes,
                        btnClass: 'btn-green',
                        action: function () {
                            postData('Genders/destroy', 'delete', {id: row.id})
                                .then(data => {
                                    $table.bootstrapTable('refresh');
                                    notificationDeleteSuccess()
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
    }

    $('button#addgender').click(function (clickEvent) {
        $.confirm({
            title: fa.add,
            content: 'url: Genders/create',
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
                        postData('Genders/store', 'POST', getFormData('GendersForm'))
                            .then(data => {
                                $table.bootstrapTable('refresh');
                                notificationAddSuccess()
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

    $('button#deletegenders').click(function (clickEvent) {
        if (getSelectionsCount($genderTable) < 1) {
            notificationNotSelected();
            return false;
        }
        $.confirm({
            title: fa.delete,
            content: fa.alert.gender_delete_confirm,
            type: 'red',
            buttons: {
                confirm: {
                    text: fa.buttons.yes,
                    btnClass: 'btn-green',
                    action: function () {
                        postData('Genders/destroy-selections', 'delete', {id: getIdSelections($table)})
                            .then(data => {
                                $table.bootstrapTable('refresh');
                                notificationDeleteSuccess()
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
// Genders Scripts End
