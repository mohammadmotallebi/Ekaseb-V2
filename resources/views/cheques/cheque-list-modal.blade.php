        <table class="table"
               id="cheques"
               data-toggle="table"
               data-pagination="false"
               data-search="true"
               data-locale="fa-IR"
               data-height="auto"
               data-id-field="id"
               data-click-to-select="true"
               data-toolbar="#chequeToolbar"
        >
            <thead>
            <tr>
                <th data-radio="true"></th>
                <th data-sortable="true" data-field="cheque_number">{{ __('lang.cheque_number') }}</th>
                <th data-sortable="true" data-field="cheque_fee" data-formatter="chequeFeeFormatter">{{ __('lang.cheque_fee') }}</th>
                <th data-sortable="true" data-field="cheque_date" >{{ __('lang.cheque_date') }}</th>
                <th data-sortable="true" data-field="bank_name">{{ __('lang.bank_name') }}</th>
            </tr>
            </thead>
        </table>


    </div>
</div>
