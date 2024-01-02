<div class="row">
    <div class="col-6">
<div class="alert alert-info">
    <b> @lang('lang.contract_number')</b> : <b dir="ltr"> {{ $code }} </b>
</div>
    </div>
    <div class="col-6">
        <div class="alert alert-success">
            <b> @lang('lang.dimension')</b> : <b dir="ltr"> {{ $dimension }} </b>   &nbsp;  <b>@lang('lang.meter')</b>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-6">

        <form method="post" id="contractForm" class="was-validated" autocomplete="off">
            <div class="form-group row">
                <label class="col-2 col-form-label"></label>
                <div class="col-12 col-md-4">
                    <input id="rent" dir="ltr" name="rent" type="text" money title="{{ __('lang.rent') }}" data-toggle="tooltip"
                           class="form-control text-center" placeholder="{{ __('lang.rent') }}"
                           autocomplete="off" required>
                </div>
                <div class="col-12 col-md-4">
                    <input id="charge" name="charge" dir="ltr" type="text" money title="{{ __('lang.charge') }}"
                           data-toggle="tooltip" class="form-control text-center"
                           placeholder="{{ __('lang.charge') }}"
                           autocomplete="off" required>
                </div>

            </div>
            <div class="form-group row">
                <label class="col-2 col-form-label">{{ __('lang.renter_name') }}</label>
                <div class="col-8">
                    <select id="renter_id" name="renter_id" class="custom-select" required>
                        <option></option>
                        @forelse(usersList(['renter']) as $x)
                            <option
                                value="{{$x->id}}">{{$x->name . ' ' . $x->family .' ('. $x->identity_code .')'}}</option>
                            @endforeach
                    </select>
                </div>
            </div>

            <div class="form-group row">
                <label class="col-2 col-form-label">{{ __('lang.date') }}</label>
                <div class="col-12 col-md-4">
                    <input id="start_date" name="start_date"  type="text" class="form-control"
                           data-MdDateTimePicker="true"  title="{{ __('lang.start_date') }}"
                           autocomplete="off" placeholder="{{ __('lang.of') }}" required>
                </div>
                <div class="col-12 col-md-4">
                    <input id="end_date" name="end_date" title="{{ __('lang.end_date') }}"
                           type="text" class="form-control" data-MdDateTimePicker="true"
                           autocomplete="off" placeholder="{{ __('lang.until') }}" required>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-2 col-form-label"></label>
                <div class="col-12 col-md-4">
                    <div class="input-group">
                        <input id="deposit" name="deposit" dir="ltr" data-toggle="tooltip" type="text"
                               title="{{ '<b>'.__('lang.deposit').'</b>' }}" class="form-control text-center"
                               placeholder="{{ __('lang.deposit') }}" money
                               autocomplete="off"
                               required/>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="input-group">
                        <input id="rent_price_monthly" name="rent_price_monthly" dir="ltr" type="text" class="form-control text-center"
                               data-toggle="tooltip" placeholder="{{ __('lang.rent_price_monthly') }}" money
                               autocomplete="off" title="{{ __('lang.rent_price_monthly') }}"
                               required/>
                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-2 col-form-label"> </label>
                <div class="col-12 col-md-4">
                    <input id="deposit_discount" dir="ltr" name="deposit_discount" type="text" money
                           placeholder="{{ __('lang.deposit_discount') }}" class="form-control text-center"
                           title="{{ __('lang.deposit_discount') }}" data-toggle="tooltip" autocomplete="off"/>

                </div>
                <div class="col-12 col-md-4">
                    <input id="rent_discount" dir="ltr" name="rent_discount" type="text"
                           placeholder="{{ __('lang.rent_discount') }}" title="{{ __('lang.rent_discount') }}"
                           data-toggle="tooltip" class="form-control text-center" money
                           autocomplete="off"/>
                </div>


            </div>
            <div class="form-group row">
                <label class="col-2 col-form-label"> </label>

                <div class="col-12 col-md-4">
                    <input id="charge_yearly" name="charge_yearly" dir="ltr" type="text" data-toggle="tooltip"
                           title="{{ __('lang.charge_yearly') }}" placeholder="{{ __('lang.charge_yearly') }}"
                           class="form-control text-center" money
                           readonly/>
                </div>
                <div class="col-12 col-md-4">
                    <input id="end_rent" name="end_rent" type="text"
                           placeholder="{{ __('lang.rent_end') }}" title="{{ __('lang.rent_end') }}"
                           data-toggle="tooltip" class="form-control"
                           readonly/>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-2 col-form-label"> </label>
                <div class="col-12 col-md-4">
                    <input id="end_deposit" name="end_deposit" type="text"
                           placeholder="{{ __('lang.deposit_end') }}" class="form-control"
                           title="{{ __('lang.deposit_end') }}" data-toggle="tooltip"  readonly/>

                </div>

                <div class="col-12 col-md-4">
                    <input id="rent_yearly" name="rent_yearly" dir="ltr" type="text" data-toggle="tooltip"
                           title="{{ __('lang.rent_price_yearly') }}" placeholder="{{ __('lang.rent_price_yearly') }}"
                           class="form-control text-center" money
                           readonly/>
                </div>

            </div>
        </form>
    </div>
    <div class="col-6 border-right-dark">
        <input type="hidden" id="contract_id">
        <input type="hidden" id="user_id">
        <div id="pToolbar">
            @can('contract_add')
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-success btn-sm"
                            id="chequeadd">@lang('lang.addChequeButton') </button>
                    <button type="button" class="btn btn-primary btn-sm"
                            id="cashadd">@lang('lang.addCashButton') </button>
                </div>
            @endcan

        </div>
        <table class="table"
               id="payments"
               data-toggle="table"
               data-pagination="false"
               data-search="false"
               data-locale="fa-IR"
               data-height="auto"
               data-id-field="id"
               data-click-to-select="true"
               data-toolbar="#pToolbar"
        >
            <thead>
            <tr>
                <th data-radio="true"></th>
                <th data-sortable="true" data-field="payment_method_farsi">{{ __('lang.payment_method') }}</th>
                <th data-sortable="true" data-field="payment_date">{{ __('lang.payment_date') }}</th>
                <th data-sortable="true" data-field="fee"
                    data-formatter="chequeFeeFormatter">{{ __('lang.cheque_fee') }}</th>
                <th data-sortable="true" data-field="reason">{{ __('lang.payment_reason') }}</th>
                <th data-width="10%" data-field="operate" data-formatter="operateChequeFormatter"
                    data-events="operateChequeEvents" data-align="center" data-click-to-select="false"></th>
            </tr>
            </thead>
        </table>


    </div>
</div>

