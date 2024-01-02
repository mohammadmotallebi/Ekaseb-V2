<form method="post" id="fundsForm" class="was-validated">

    {{@csrf_field()}}
    <div class="form-group row">
        <label for="fund_name" class="col-2 col-form-label">@lang('lang.color')</label>
        <div class="col-8">
            <input id="fund_name" name="fund_name" type="text" class="form-control" value="{{ $fund->fund_name }}" autocomplete="off"
                   required>

        </div>
    </div>

</form>

