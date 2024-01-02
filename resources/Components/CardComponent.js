// Cards Scripts Start
cardsRender = () => {
    window.operateEvents = {
        'click #changeStatus': function (e, value, row, index) {
        }
    }

    $('#cardadd').click(function () {
        $.confirm({
            title: fa.desc.generate_card,
            content: '<input type="text" class="form-control" id="countCard" placeholder="تعداد را وارد نمایید">',
            columnClass: 's',
            theme: 'modern',
            type: 'green',
            typeAnimated: true,
            buttons: {
                confirm: {
                    text: fa.buttons.ok,
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

            }
        });
    });
}
// Cards Scripts End
