<div id="itemCat_toolbar">
    <div class='btn-group' role='group' aria-label='Basic example'>
        <button type="button" data-toggle="tooltip" data-placement="top" title="{!! __('lang.add')  !!}"
                class="btn btn-success btn-sm" id="additemCat">{!! __('lang.addButton')  !!}</button>
        <button type="button" data-toggle="tooltip" data-placement="top" title="{!! __('lang.delete') !!}  "
                class="btn btn-danger btn-sm" id="deleteitemCats">{!! __('lang.deleteButton')  !!} </button>
    </div>
</div>
<table class="table table-striped"
       id="itemCats"
       data-toggle="table"
       data-pagination="false"
       data-search="true"
       data-locale="fa-IR"
       data-height="470"
       data-virtual-scroll-item-height="2"
       data-id-field="id"
       data-click-to-select="true"
       data-thead-classes="thead-light"
       data-toolbar="#itemCat_toolbar">
    <thead>
    <th data-checkbox="true"></th>
    <th data-sortable="true" data-field="item_category_name">{{ __('lang.category') }}</th>
    <th data-width="10%" data-field="operate" data-formatter="operateFormatterItemCats"
        data-events="operateEvents" data-align="center" data-click-to-select="false"></th>
    </thead>
</table>

<script>
    var rowID;
    var name;

    function operateFormatterItemCats(value, row, index) {
        return [
            "<div class='btn-group' role='group' aria-label='Basic example'>" +
            "<button type='button' id='edit' data-toggle='tooltip' data-placement='top'  title='@lang('lang.edit')' class='btn btn-primary btn-sm'><i class='fa fa-edit'></i></button>" +
            "<button type='button' id='delete' data-toggle='tooltip' data-placement='top' title='@lang('lang.delete')' class='btn btn-danger btn-sm'><i class='fa fa-trash'></i></button></div>",
        ].join('')
    }

    itemCategoryRender();
</script>

