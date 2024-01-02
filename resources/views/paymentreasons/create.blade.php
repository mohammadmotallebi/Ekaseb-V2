<form method="post" id="PaymentReasonForm" class="was-validated">

    <div class="form-group row">
        <label for="reason" class="col-2 col-form-label">@lang('lang.payment_reason')</label>
        <div class="col-8">
            <input id="reason" name="reason" type="text" class="form-control" autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="fund_id" class="col-2 col-form-label">{{ __('lang.fund') }}</label>
        <div class="col-8">
            <select id="fund_id" name="fund_id" class="custom-select" required>
                <option></option>
                @foreach(fundsList() as $x)
                    <option
                        value="{{$x->id}}">{{$x->fund_name}}</option>
                @endforeach
            </select>
        </div>
        <div class="col-2"><button type="button" data-toggle="tooltip" title="{{ __('lang.fund_add') }}" class="btn btn-success" id="add_fund">{!! __('lang.addButton') !!} </button></div>
    </div>
    <div class="form-group row justify-content-md-center mt-2">
        <div class="col-md-10">
            <div class="boxed-check-group boxed-check-success">
                <label class="boxed-check">
                    <input class="boxed-check-input" type="checkbox" name="for_contract" onclick="checkboxSetValue(this)">
                    <div class="boxed-check-label">@lang('lang.for_contract')</div>
                </label>
            </div>

        </div>
    </div>

</form>

