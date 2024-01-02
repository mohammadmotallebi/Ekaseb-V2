<form method="post" id="chequeForm" class="was-validated" autocomplete="off">
    <div class="form-group row">
        <label for="cheque_number" class="col-2 col-form-label">{{ __('lang.cheque_number') }}</label>
        <div class="col-8">
            <input id="cheque_number" name="cheque_number" type="text" class="form-control" autocomplete="off" required>
        </div>
        <div class="col-1">
            <button type="button" class="btn btn-success" id="cheque_list">{!! __('lang.list_icon') !!} </button>
        </div>
    </div>
    <div class="form-group row">
        <label for="cost_date" class="col-2 col-form-label">{{ __('lang.cost_date') }}</label>
        <div class="col-8">
            <input id="cost_date" name="cost_date" type="text" class="form-control" data-MdDateTimePicker="true"
                   autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="price" class="col-2 col-form-label">{{ __('lang.cheque_fee') }}</label>
        <div class="col-8">
            <input id="price" name="price" type="text" class="form-control" money autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="bank" class="col-2 col-form-label">{{ __('lang.bank_name') }}</label>
        <div class="col-8">
            <select id="bank" name="bank" class="custom-select" required>
                <option></option>
                @forelse(banks() as $x)
                    <option value="{{$x->id}}">{{$x->bank_name}}</option>
                    @endforeach
            </select>
        </div>
    </div>
    <div class="form-group row">
        <label for="bank_branch" class="col-2 col-form-label">{{ __('lang.bank_branch') }}</label>
        <div class="col-8">
            <input id="bank_branch" name="bank_branch" type="text" class="form-control" autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="cheque_date" class="col-2 col-form-label">{{ __('lang.cheque_date') }}</label>
        <div class="col-8">
            <input id="cheque_date" name="cheque_date" type="text" class="form-control" data-MdDateTimePicker="true"
                   autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="account_number" class="col-2 col-form-label">{{ __('lang.account_number') }}</label>
        <div class="col-8">
            <input id="account_number" name="account_number" type="text" class="form-control" autocomplete="off"
                   required>
        </div>
    </div>
    <div class="form-group row">
        <label for="cost_type_id" class="col-2 col-form-label">{{ __('lang.cost_type') }}</label>
        <div class="col-8">
            <select id="cost_type_id" name="cost_type_id" class="custom-select" required>
                <option></option>
                @forelse(costTypes() as $x)
                    <option value="{{$x->id}}">{{$x->cost_type}}</option>
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
