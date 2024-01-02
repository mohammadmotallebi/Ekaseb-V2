// Floor Scripts Start
floorsRender = () => {
    let $table = $('#floors');
    window.operateEvents = {
        'click #edit': function (e, value, row, index) {
            rowID = row.id;
           const jc_9236429367 = $.confirm({
                title: fa.edit,
                content: 'url: floor/edit',
                columnClass: 'm',
                theme: 'modern',
                type: 'blue',
                typeAnimated: true,
                buttons: {
                    confirm: {
                        text: fa.edit,
                        btnClass: 'btn-green',
                        action: function () {

                            postData('floor/update', 'PATCH', getFormData('FloorForm', {id: row.id}))
                                .then(response => response.json())
                                .then(data => {
                                    if(data === 1){
                                        $table.bootstrapTable('refresh');
                                        notificationEditSuccess()
                                        jc_9236429367.close()
                                    }else{
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
                },
                onClose: function () {
                }
            });

        },
        'click #delete': function (e, value, row, index) {
          const jc_923642936 =  $.confirm({
                title: fa.delete,
                content: fa.alert.gender_delete_confirm,
                type: 'red',
                buttons: {
                    confirm: {
                        text: fa.buttons.yes,
                        btnClass: 'btn-green',
                        action: function () {
                            postData('floor/destroy', 'delete', {id: row.id})
                                .then(response => response.json())
                                .then(data => {
                                    if(data === 1){
                                        $table.bootstrapTable('refresh');
                                        notificationEditSuccess()
                                        jc_923642936.close()
                                    }else{
                                        showErrorsNotification(data)
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

    $('button#addfloor').click(function (clickEvent) {
        const jc_1928748154 = $.confirm({
            title: fa.add,
            content: 'url: floor/create',
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
                        postData('floor/store', 'POST', getFormData('FloorForm'))
                            .then(response => response.json())
                            .then(data => {
                                if(data === 1){
                                    $table.bootstrapTable('refresh');
                                    notificationEditSuccess()
                                    jc_1928748154.close()
                                }else{
                                    showErrorsNotification(data)
                                }

                            });;
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
}
// Genders Scripts End
