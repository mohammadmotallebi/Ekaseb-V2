<form method="post" id="CostTypeForm" class="was-validated">

    <div class="form-group row">
        <label for="cost_type" class="col-2 col-form-label">@lang('lang.cost_type')</label>
        <div class="col-8">
            <input id="cost_type" name="cost_type" type="text" class="form-control" value="{{ $res->cost_type }}" autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="fund_id" class="col-2 col-form-label">{{ __('lang.fund') }}</label>
        <div class="col-8">
            <select id="fund_id" name="fund_id" class="custom-select" required>
                <option></option>
                @foreach(fundsList() as $x)
                    <option @if($res->fund_id == $x->id) selected="selected"
                            @endif  value="{{ $x->id }}">{{ $x->fund_name }}</option>
                @endforeach
            </select>
        </div>
        <div class="col-2"><button type="button" data-toggle="tooltip" title="{{ __('lang.fund_add') }}" class="btn btn-success" id="add_fund">{!! __('lang.addButton') !!} </button></div>

    </div>

</form>

