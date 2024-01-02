<table class="table"
       id="payments"
       data-toggle="table"
       data-pagination="true"
       data-search="true"
       data-locale="fa-IR"
       data-height="470"
       data-id-field="id"
       data-click-to-select="true"
       data-toolbar="#pToolbar"
>
    <thead>
    <tr>
        <th data-sortable="true" data-field="reason">{{ __('lang.payment_reason') }}</th>
        <th data-sortable="true" data-field="username">{{ __('lang.user') }}</th>
        <th data-sortable="true" data-field="payment_method_farsi">{{ __('lang.payment_method') }}</th>
        <th data-sortable="true" data-field="payment_date">{{ __('lang.payment_date') }}</th>
        <th data-sortable="true" data-field="fee" data-formatter="priceFormatter">{{ __('lang.fee') }}</th>
    </tr>
    </thead>
</table>
