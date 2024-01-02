<div id="floor_toolbar">
    <div class='btn-group' role='group' aria-label='Basic example'>
        <button type="button" data-toggle="tooltip" data-placement="top" title="{!! __('lang.add')  !!}"
                class="btn btn-success btn-sm" id="addfloor">{!! __('lang.addButton')  !!}</button>
    </div>
</div>
<table class="table table-striped"
       id="floors"
       data-toggle="table"
       data-pagination="false"
       data-search="true"
       data-locale="fa-IR"
       data-height="470"
       data-virtual-scroll-item-height="2"
       data-id-field="id"
       data-click-to-select="true"
       data-thead-classes="thead-light"
       data-toolbar="#floor_toolbar">
    <thead>
    <th data-checkbox="true"></th>
    <th data-sortable="true" data-field="floor">{{ __('lang.floor') }}</th>
    <th data-width="10%" data-field="operate" data-formatter="operateFormatterFloors"
        data-events="operateEvents" data-align="center" data-click-to-select="false"></th>
    </thead>
</table>

<script>
    function operateFormatterFloors(value, row, index) {
        return [
            "<div class='btn-group' role='group' aria-label='Basic example'>" +
            "<button type='button' id='edit' data-toggle='tooltip' data-placement='top'  title='@lang('lang.edit')' class='btn btn-primary btn-sm'><i class='fa fa-edit'></i></button>" +
            "<button type='button' id='delete' data-toggle='tooltip' data-placement='top' title='@lang('lang.delete')' class='btn btn-danger btn-sm'><i class='fa fa-trash'></i></button></div>",
        ].join('')
    }

    floorsRender();

</script>

