<form method="post" id="chequeEditForm" class="was-validated" autocomplete="off">
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
            <input id="cost_date" value="{{ $cheque->cost_date }}" name="cost_date" type="text"
                   class="form-control" data-MdDateTimePicker="true" autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="price" class="col-2 col-form-label">{{ __('lang.price') }}</label>
        <div class="col-8">
            <input id="price" name="price" type="text" value="{{ number_format($cheque->price) }}" class="form-control" money
                   autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="bank" class="col-2 col-form-label">{{ __('lang.bank_name') }}</label>
        <div class="col-8">
            <select id="bank" name="bank" class="custom-select" required>
                <option></option>
                @foreach(banks() as $x)
                    <option @if($cheque->bank === $x->id) selected="selected"
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
        <label for="cost_type_id" class="col-2 col-form-label">{{ __('lang.cost_type') }}</label>
        <div class="col-8">
            <select id="cost_type_id" name="cost_type_id" class="custom-select" required>
                <option></option>
                @foreach(costTypes() as $x)
                    <option @if($cheque->cost_type_id === $x->id) selected="selected"
                            @endif value="{{$x->id}}">{{$x->cost_type}}</option>
                @endforeach
            </select>
        </div>
    </div>
    <div class="form-group row">
        <label for="note" class="col-2 col-form-label">{{ __('lang.note') }}</label>
        <div class="col-8">
            <textarea id="note" name="note" class="form-control" rows="4">{{ $cheque->note }}</textarea>
        </div>
    </div>
</form>
