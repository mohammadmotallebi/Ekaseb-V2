<form method="post" id="ShopItemScoreForm" class="was-validated">
    <div class="form-group row">
        <label for="item_score" class="col-3 col-form-label">@lang('lang.score')</label>
        <div class="col-8">
            <input id="item_score" name="item_score" type="text" class="form-control" autocomplete="off"
                   required>
        </div>
    </div>
    <div class="form-group row">
        <label for="start_date" class="col-3 col-form-label">@lang('lang.start_date')</label>
        <div class="col-8">
            <input id="start_date" name="start_date" type="text" class="form-control" autocomplete="off" data-MdDateTimePicker="true"
                   required>
        </div>
    </div>
    <div class="form-group row">
        <label for="end_date" class="col-3 col-form-label">@lang('lang.end_date')</label>
        <div class="col-8">
            <input id="end_date" name="end_date" type="text" class="form-control" autocomplete="off" data-MdDateTimePicker="true"
                   required>
        </div>
    </div>
</form>