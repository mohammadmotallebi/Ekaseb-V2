// CostType Scripts Start
costTypesRender = () => {
    let $table = $('#cost-type');
    window.operateEvents = {
        'click #edit': function (e, value, row, index) {
            const jc_h812548154 = $.confirm({
                title: fa.edit,
                content: 'url: cost-type/edit/' + row.id,
                columnClass: 'm',
                theme: 'modern',
                type: 'blue',
                typeAnimated: true,
                buttons: {
                    confirm: {
                        text: fa.edit,
                        btnClass: 'btn-green',
                        action: function () {

                            postData('cost-type/update', 'PATCH', getFormData('CostTypeForm', {id: row.id}))
                                .then(response => response.json())
                                .then(data => {
                                    if (data === 1) {
                                        $table.bootstrapTable('refresh');
                                        notificationEditSuccess();
                                        jc_h812548154.close()
                                    } else {
                                        showErrorsNotification(data)
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
                    modalSettings()
                    addQuickly('#add_fund', 'funds/create', 'funds/store', 'FundForm','#fund_id', 'get-funds-select')

                },
                onClose: function () {

                }
            });

        },
        'click #delete': function (e, value, row, index) {
            $.confirm({
                title: fa.delete,
                content: fa.alert.color_delete_confirm,
                type: 'red',
                buttons: {
                    confirm: {
                        text: fa.buttons.yes,
                        btnClass: 'btn-green',
                        action: function () {
                            postData('cost-type/destroy', 'delete', {id: row.id})
                                .then(response => response.json())
                                .then(data => {
                                    if (data === 1) {
                                        $table.bootstrapTable('refresh');
                                        notificationDeleteSuccess();
                                    } else {
                                        notificationDeleteError()
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
    }

    $('button#addcosttype').click(function (clickEvent) {
        const jc_5446444466 = $.confirm({
            title: fa.add,
            content: 'url: cost-type/create',
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
                        postData('cost-type/store', 'POST', getFormData('CostTypeForm'))
                            .then(response => response.json())
                            .then(data => {
                                if (data === 1) {
                                    $table.bootstrapTable('refresh');
                                    notificationAddSuccess();
                                    jc_5446444466.close();
                                } else {
                                    showErrorsNotification(data)
                                }
                            });
                        return false;
                    }
                },
                cancel: {
                    text: 'بستن',
                    btnClass: 'btn-red'
                }
            },
            onContentReady: function () {
                modalSettings()
                addQuickly('#add_fund', 'funds/create', 'funds/store', 'FundForm','#fund_id', 'get-funds-select')

            }
        });
    });
}
// CostType Scripts End
