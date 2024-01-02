<div id="reason_toolbar">
    <div class='btn-group' role='group' aria-label='Basic example'>
        <button type="button" data-toggle="tooltip" data-placement="top" title="{!! __('lang.add')  !!}"
                class="btn btn-success btn-sm" id="addpaymentreason">{!! __('lang.addButton')  !!}</button>
    </div>
</div>
<table class="table table-striped"
       id="payment-reason"
       data-toggle="table"
       data-pagination="false"
       data-search="true"
       data-locale="fa-IR"
       data-height="470"
       data-virtual-scroll-item-height="2"
       data-id-field="id"
       data-click-to-select="true"
       data-thead-classes="thead-light"
       data-toolbar="#reason_toolbar">
    <thead>
    <th data-sortable="true" data-field="reason">{{ __('lang.payment_reason') }}</th>
    <th data-sortable="true" data-field="fund_name">{{ __('lang.fund') }}</th>
    <th data-sortable="true" data-field="for_contract" data-formatter="operateFormatterForContract">{{ __('lang.for_contract') }}</th>
    <th data-width="10%" data-field="operate" data-formatter="operateFormatterPaymentReason"
        data-events="operateEvents" data-align="center" data-click-to-select="false"></th>
    </thead>
</table>

<script>
    function operateFormatterPaymentReason(value, row, index) {
        return [
            "<div class='btn-group' role='group' aria-label='Basic example'>" +
            "<button type='button' id='edit' data-toggle='tooltip' data-placement='top'  title='@lang('lang.edit')' class='btn btn-primary btn-sm'><i class='fa fa-edit'></i></button>" +
            "<button type='button' id='delete' data-toggle='tooltip' data-placement='top' title='@lang('lang.delete')' class='btn btn-danger btn-sm'><i class='fa fa-trash'></i></button></div>",
        ].join('')
    }
    function operateFormatterForContract(value, row, index) {
            if(value === '1'){
                return `<i class="fa fa-check-circle text-success text-lg"></i>`
            }else{
                return `<i class="fa fa-times-circle text-danger text-lg"></i>`
            }
    }

    paymentReasonsRender();
</script>

