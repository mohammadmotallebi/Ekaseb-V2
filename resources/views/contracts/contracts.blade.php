<input type="hidden" id="var_yrent"/>
<input type="hidden" id="var_mrent"/>
<input type="hidden" id="estate_id"/>
<div id="cToolbar">
    <div class='btn-group' role='group'>
    @can('contract_add')
        <button type="button" class="btn btn-success btn-sm" id="contractadd">@lang('lang.addButton') </button>@endcan
        @can('contract_demo')<button type="button" class="btn btn-info btn-sm" id="contract_demo_add">@lang('lang.addDemoButton') </button>@endcan
    </div>

</div>
<table class="table"
       id="contracts"
       data-toggle="table"
       data-pagination="true"
       data-search="true"
       data-locale="fa-IR"
       data-height="auto"
       data-id-field="id"
       data-click-to-select="true"
       data-toolbar="#cToolbar"
       data-row-style="rowStyle"
>
    <thead>
    <tr>
        <th data-radio="true"></th>
        <th data-sortable="true" data-field="renter_name">{{ __('lang.renter_name') }}</th>
        <th data-sortable="true" data-field="start_date">{{ __('lang.start_date') }}</th>
        <th data-sortable="true" data-field="end_date">{{ __('lang.end_date') }}</th>
        <th data-sortable="true" data-field="remain_days">{{ __('lang.remain_days') }}</th>
        <th data-sortable="true" data-field="deposit"
            data-formatter="contractDepositFormatter">{{ __('lang.deposit') }}</th>
        <th data-sortable="true" data-field="rent_monthly"
            data-formatter="contractRentFormatter">{{ __('lang.rent_price_monthly') }}</th>
        <th data-sortable="true" data-field="total_rent"
            data-formatter="contractTotalRentFormatter">{{ __('lang.rent_price_yearly') }}</th>
        <th data-sortable="true" data-field="deposit_discount"
            data-formatter="contractDepositDiscountFormatter">{{ __('lang.deposit_discount') }}</th>
        <th data-sortable="true" data-field="rent_discount"
            data-formatter="contractRentDiscountFormatter">{{ __('lang.rent_discount') }}</th>
        <th data-width="10%" data-field="operate" data-formatter="operateContractFormatter"
            data-events="operateContractEvents" data-align="center" data-click-to-select="false"></th>
    </tr>
    </thead>
</table>

