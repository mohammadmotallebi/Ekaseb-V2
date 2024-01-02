<form method="post" id="chequeEditForm" class="was-validated" autocomplete="off">
    @if(previous_route() == 'payments')
        <div class="form-group row">
            <label for="user_id" class="col-2 col-form-label">{{ __('lang.user') }}</label>
            <div class="col-8">
                <select id="user_id" name="user_id" class="custom-select" required>
                    <option></option>
                    @foreach(usersList(['owner','renter']) as $x)
                        <option @if($cheque->user_id == $x->id) selected="selected"
                                @endif  value="{{$x->id}}">{{$x->name . ' ' . $x->family .' ('. $x->identity_code .')'}}</option>
                    @endforeach
                </select>
            </div>
        </div>
        <div class="form-group row" id="contracts-div" @if($cheque->contract_id == null) style="display:none" @endif >
            <label for="contract_id" class="col-2 col-form-label">{{ __('lang.contracts') }}</label>
            <div class="col-8">
                <select id="contract_id" name="contract_id" class="custom-select">
                    <option></option>
                    @foreach(userContractsEditForm($cheque->user_id) as $x)
                        <option @if($cheque->contract_id == $x->id) selected="selected"
                                @endif  value="{{ $x->id }}">{{ $x->text }}</option>
                    @endforeach
                </select>
            </div>
        </div>
    @endif
    <div class="form-group row">
        <label for="cheque_number" class="col-2 col-form-label">{{ __('lang.cheque_number') }}</label>
        <div class="col-8">
            <input id="cheque_number" name="cheque_number" value="{{ $cheque->cheque_number }}" type="text"
                   class="form-control" autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="payment_date" class="col-2 col-form-label">{{ __('lang.payment_date') }}</label>
        <div class="col-8">
            <input id="payment_date" value="{{ $cheque->payment_date }}" name="payment_date" type="text"
                   class="form-control" data-MdDateTimePicker="true" autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="fee" class="col-2 col-form-label">{{ __('lang.cheque_fee') }}</label>
        <div class="col-8">
            <input id="fee" name="fee" type="text" value="{{ number_format($cheque->fee) }}" class="form-control" money
                   autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="bank" class="col-2 col-form-label">{{ __('lang.bank_name') }}</label>
        <div class="col-8">
            <select id="bank" name="bank" class="custom-select" required>
                <option></option>
                @forelse(banks() as $x)
                    <option @if($cheque->bank == $x->id) selected="selected"
                            @endif value="{{$x->id}}">{{$x->bank_name}}</option>
                    @endforeach
            </select>
        </div>
    </div>
    <div class="form-group row">
        <label for="bank_branch" class="col-2 col-form-label">{{ __('lang.bank_branch') }}</label>
        <div class="col-8">
            <input id="bank_branch" value="{{ $cheque->bank_branch }}" name="bank_branch" type="text"
                   class="form-control" autocomplete="off">
        </div>
    </div>
    <div class="form-group row">
        <label for="cheque_date" class="col-2 col-form-label">{{ __('lang.cheque_date') }}</label>
        <div class="col-8">
            <input id="cheque_date" value="{{ $cheque->cheque_date }}" name="cheque_date" type="text"
                   class="form-control" data-MdDateTimePicker="true" autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="account_number" class="col-2 col-form-label">{{ __('lang.account_number') }}</label>
        <div class="col-8">
            <input id="account_number" value="{{ $cheque->account_number }}" name="account_number" type="text"
                   class="form-control" autocomplete="off">
        </div>
    </div>
    <div class="form-group row">
        <label for="payment_reason_id" class="col-2 col-form-label">{{ __('lang.payment_reason') }}</label>
        <div class="col-8">
            <select id="payment_reason_id" name="payment_reason_id" class="custom-select" required>
                <option></option>
                @forelse(paymentReasons((previous_route() === 'estates') ? '1' : '0') as $x)
                    <option @if($cheque->payment_reason_id == $x->id) selected="selected"
                            @endif value="{{$x->id}}">{{$x->reason}}</option>
                    @endforeach
            </select>
        </div>
    </div>
    <div class="form-group row">
        <label for="note" class="col-2 col-form-label">{{ __('lang.note') }}</label>
        <div class="col-8">
            <textarea id="note" name="note" class="form-control" rows="4">{{ $cheque->payment_note }}</textarea>
        </div>
    </div>
</form>
