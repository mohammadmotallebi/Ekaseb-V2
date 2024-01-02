{{--<div id="toolbarModal">--}}
{{--    <div class='btn-group' role='group' aria-label='Basic example'>--}}
{{--        <button type="button" data-toggle="tooltip" data-placement="top" title="{!! __('lang.add')  !!}"--}}
{{--                class="btn btn-success btn-sm" id="additem">{!! __('lang.addButton')  !!}</button>--}}
{{--        <button type="button" data-toggle="tooltip" data-placement="top" title="{!! __('lang.delete') !!}  "--}}
{{--                class="btn btn-danger btn-sm" id="deleteitems">{!! __('lang.deleteButton')  !!} </button>--}}
{{--    </div>--}}
{{--</div>--}}
<table class="table table-striped"
       id="sold"
       data-toggle="table"
       data-pagination="false"
       data-search="true"
       data-locale="fa-IR"
       data-id-field="id"
       data-show-footer="true"
       data-thead-classes="thead-light">
    <thead>

    <th data-sortable="true" data-width="300" data-field="item_name" data-footer-formatter="nameFormatter">@lang('lang.item_name')</th>
    <th data-sortable="true" data-width="150" data-field="item_code">@lang('lang.item_code')</th>
    <th data-sortable="true" data-width="200" data-formatter="priceFormatter" data-footer-formatter="footerPriceFormatter" data-field="item_price">@lang('lang.price')</th>
    <th data-sortable="true" data-width="200" data-formatter="priceFormatter" data-footer-formatter="footerPriceFormatter" data-field="item_credit">@lang('lang.credit')</th>
    <th data-sortable="true" data-width="200" data-formatter="priceFormatter" data-footer-formatter="footerPriceFormatter" data-field="item_score">@lang('lang.score')</th>
    <th data-sortable="true" data-width="80" data-field="buy_date">@lang('lang.date')</th>

    </thead>
</table>

<script>
    function footerPriceFormatter(data) {
        const field = this.field
        return data.map(function (row) {
            return +row[field]
        }).reduce(function (sum, i) {
            return 'کل : ' +Intl.NumberFormat('fa-IR').format(sum + i)
        }, 0)
    }
    function nameFormatter(data) {
        return 'تعداد : '+data.length
    }
</script>





