<table class="table"
       id="charges"
       data-toggle="table"
       data-pagination="false"
       data-search="true"
       data-locale="fa-IR"
       data-height="470"
       data-virtual-scroll-item-height="2"
       data-id-field="id"
       data-click-to-select="true"
       data-row-style="rowChargeStyle"
       data-thead-classes="thead-light">
    <thead>
    <th data-radio="true"></th>
    <th data-sortable="true" data-field="fee" data-formatter="priceFormatter">{{ __('lang.charge') }}</th>
    <th data-sortable="true" data-field="charge_start_date">{{ __('lang.start_date') }}</th>
    <th data-sortable="true" data-field="end">{{ __('lang.end_date') }}</th>
        <th data-sortable="true" data-field="expire">{{ __('lang.expire') }}</th>
        <th data-sortable="true" data-field="payment_date" data-formatter="operateFormatterPay">{{ __('lang.payment_date') }}</th>
    <th data-width="10%" data-field="operate" data-formatter="operateFormatterCharges"
        data-align="center" data-events="operateChargeEvents" data-click-to-select="false"></th>
    </thead>
</table>

<script>
    function operateFormatterCharges(value, row, index) {
        return [
            "<div class='btn-group' role='group' aria-label='Basic example'>" +
            "<button type='button' id='cash' data-toggle='tooltip' data-placement='top'  title='@lang('lang.cash')' class='btn btn-info btn-sm'>@lang('lang.cash')</button>" +
            "<button type='button' id='cheque' data-toggle='tooltip' data-placement='top'  title='@lang('lang.cheque')' class='btn btn-success btn-sm'>@lang('lang.cheque')</button>" +
            "<button type='button' id='receipt' data-toggle='tooltip' data-placement='top' title='@lang('lang.receipt')' class='btn btn-primary btn-sm'>@lang('lang.receipt')</button></div>",
        ].join('')
    }

    function operateFormatterPay(value, row, index){
        if(row.payment_date === '' || row.payment_date === null){
            return 'پرداخت نشده';
        }else{
            return row.payment_date;
        }
    }

    function rowChargeStyle(row, index) {

        if (row.payment_date === '' || row.payment_date === null) {
            return {
                classes: 'danger'
            }
        }
        return {
            classes: 'success'
        }
    }
    chargesRender();
</script>

