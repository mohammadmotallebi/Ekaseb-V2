<div id="type_toolbar">
    <div class='btn-group' role='group' aria-label='Basic example'>
        <button type="button" data-toggle="tooltip" data-placement="top" title="{!! __('lang.add')  !!}"
                class="btn btn-success btn-sm" id="addcosttype">{!! __('lang.addButton')  !!}</button>
    </div>
</div>
<table class="table table-striped"
       id="cost-type"
       data-toggle="table"
       data-pagination="false"
       data-search="true"
       data-locale="fa-IR"
       data-height="470"
       data-virtual-scroll-item-height="2"
       data-id-field="id"
       data-click-to-select="true"
       data-thead-classes="thead-light"
       data-toolbar="#type_toolbar">
    <thead>
    <th data-sortable="true" data-field="cost_type">{{ __('lang.cost_type') }}</th>
    <th data-sortable="true" data-field="fund_name">{{ __('lang.fund') }}</th>
    <th data-width="10%" data-field="operate" data-formatter="operateFormatterCostType"
        data-events="operateEvents" data-align="center" data-click-to-select="false"></th>
    </thead>
</table>

<script>
    function operateFormatterCostType(value, row, index) {
        return [
            "<div class='btn-group' role='group' aria-label='Basic example'>" +
            "<button type='button' id='edit' data-toggle='tooltip' data-placement='top'  title='@lang('lang.edit')' class='btn btn-primary btn-sm'><i class='fa fa-edit'></i></button>" +
            "<button type='button' id='delete' data-toggle='tooltip' data-placement='top' title='@lang('lang.delete')' class='btn btn-danger btn-sm'><i class='fa fa-trash'></i></button></div>",
        ].join('')
    }

    costTypesRender();
</script>

