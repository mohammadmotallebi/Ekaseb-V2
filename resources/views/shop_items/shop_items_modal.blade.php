{{--<div id="toolbarModal">--}}
{{--    <div class='btn-group' role='group' aria-label='Basic example'>--}}
{{--        <button type="button" data-toggle="tooltip" data-placement="top" title="{!! __('lang.add')  !!}"--}}
{{--                class="btn btn-success btn-sm" id="additem">{!! __('lang.addButton')  !!}</button>--}}
{{--        <button type="button" data-toggle="tooltip" data-placement="top" title="{!! __('lang.delete') !!}  "--}}
{{--                class="btn btn-danger btn-sm" id="deleteitems">{!! __('lang.deleteButton')  !!} </button>--}}
{{--    </div>--}}
{{--</div>--}}
<table class="table table-striped"
       id="items"
       data-toggle="table"
       data-pagination="false"
       data-search="true"
       data-locale="fa-IR"
       data-height="470"
       data-virtual-scroll-item-height="2"
       data-id-field="id"
       data-click-to-select="true"
       data-thead-classes="thead-light">
    <thead>
    <th data-radio="true"></th>
    <th data-sortable="true" data-field="item_code">@lang('lang.item_code')</th>
    <th data-sortable="false" data-field="qrcode">@lang('lang.qrcode')</th>
    <th data-sortable="true" data-width="80"  data-field="bill_number">@lang('lang.billid')</th>
    <th data-sortable="true" data-field="buy_date">@lang('lang.date')</th>
    <th data-width="150" data-sortable="true" data-field="status"  data-formatter="statusFormatter">@lang('lang.status')</th>
    </thead>
</table>
<script>
    function qrcodeFormatter(value, row, index) {

    }
    function statusFormatter(value, row, index) {

            if (value === '0') {
                return `<span class="text-danger">@lang('lang.not_approved')</span>`
            } else if(value === '1') {
                return `<span class="text-success">@lang('lang.approved')</span>`
            }else{
            return `<span class="text-primary">@lang('lang.not_sold')</span>`
        }
    }
</script>




