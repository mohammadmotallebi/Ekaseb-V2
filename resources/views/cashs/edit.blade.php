<form method="post" id="cashEditForm" class="was-validated" autocomplete="off">
    @if(previous_route() == 'payments')
        <div class="form-group row">
            <label for="user_id" class="col-2 col-form-label">{{ __('lang.user') }}</label>
            <div class="col-8">
                <select id="user_id" name="user_id" class="custom-select" required>
                    <option></option>
                    @foreach(usersList(['owner','renter']) as $x)
                        <option @if($cash->user_id == $x->id) selected="selected"
                                @endif  value="{{$x->id}}">{{$x->name . ' ' . $x->family .' ('. $x->identity_code .')'}}</option>
                    @endforeach
                </select>
            </div>
        </div>
        <div class="form-group row" id="contracts-div" @if($cash->contract_id == null) style="display:none" @endif >
            <label for="contract_id" class="col-2 col-form-label">{{ __('lang.contracts') }}</label>
            <div class="col-8">
                <select id="contract_id" name="contract_id" class="custom-select">
                    <option></option>
                    @foreach(userContractsEditForm($cash->user_id) as $x)
                        <option @if($cash->contract_id == $x->id) selected="selected"
                                @endif  value="{{ $x->id }}">{{ $x->text }}</option>
                    @endforeach
                </select>
            </div>
        </div>
    @endif
    <div class="form-group row">
        <label for="fee" class="col-2 col-form-label">{{ __('lang.fee') }}</label>
        <div class="col-8">
            <input id="fee" name="fee" value="{{ number_format($cash->fee) }}" type="text" class="form-control" money
                   autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="payment_date" class="col-2 col-form-label">{{ __('lang.date') }}</label>
        <div class="col-8">
            <input id="payment_date" name="payment_date" value="{{ $cash->payment_date }}" type="text"
                   class="form-control" data-MdDateTimePicker="true" autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="payment_reason_id" class="col-2 col-form-label">{{ __('lang.payment_reason') }}</label>
        <div class="col-8">
            <select id="payment_reason_id" name="payment_reason_id" class="custom-select" required>
                <option></option>
                @forelse(paymentReasons((previous_route() === 'estates') ? '1' : '0') as $x)
                    <option @if($cash->payment_reason_id == $x->id) selected="selected"
                            @endif value="{{$x->id}}">{{$x->reason}}</option>
                    @endforeach
            </select>
        </div>
    </div>
    <div class="form-group row">
        <label for="note" class="col-2 col-form-label">{{ __('lang.note') }}</label>
        <div class="col-8">
            <textarea id="note" name="note" class="form-control" rows="4"></textarea>
        </div>
    </div>
</form>
