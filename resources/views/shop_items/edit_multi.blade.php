<form id="edit-multi-item" method="post">
    @method('patch')
    <div class="row">
        <div class="col">
            <b>{{ __('lang.item') }}</b>
        </div>
        <div class="col">
            <b>{{ __('lang.price') }}</b>
        </div>
        <div class="col">
            <b>{{ __('lang.category') }}</b>
        </div>
    </div>
    <div id="hidden"></div>
    <hr class="sidebar-divider">
    <div id="main-input"></div>
</form>
<script>
    var selected = $child.bootstrapTable('getSelections');
    for (var i = 0; i < getSelectionsCount($child); i++) {
        // $('form div#hidden').append('<input type="hidden" name="id_'+i+'" id="id_'+i+'">');
        $('form div#main-input').append('<div class="row  mt-2">' +
            '<div class="col">' +
            '<input type="text" class="form-control" id="item_' + i + '" name="item_' + i + '" placeholder="{{ __('lang.item') }}" autocomplete="off">' +
            '</div>' +
            '<div class="col">' +
            '<input type="text" class="form-control" id="price_' + i + '" money name="price_' + i + '" placeholder="{{ __('lang.price') }}" autocomplete="off">' +
            ' </div>' +
            '<div class="col">' +
            ' <select id="cat_' + i + '" name="cat_' + i + '" class="custom-select">' +
            '<option></option>' +
            '@forelse($category as $x)' +
            ' <option value="{{$x->id}}">{{$x->item_category_name}}</option>' +
            '  @endforeach' +
            '</select>' +
            '</div>' +
            ' </div>'
        );

        $('#id_' + i).val(selected[i].id);
        $('#item_' + i).val(selected[i].item_name);
        $('#price_' + i).val(selected[i].price);
        $('#count_' + i).val(selected[i].item_count);
        // edit_multi.$content.find('#cat_'+i).val(selected[i].item_cat_id);
        $('#cat_' + i).prop('selectedIndex', selected[i].item_cat_id).change();

    }
</script>

