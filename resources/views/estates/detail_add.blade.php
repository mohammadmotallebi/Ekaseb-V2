<form method="post" id="estateDetailForm" class="was-validated" autocomplete="off">
    <div class="form-group row">
        <label for="price" class="col-2 col-form-label">{{ __('lang.price') }}</label>
        <div class="col-8">
            <input id="price" name="price" type="text" class="form-control" money autocomplete="off"/>
        </div>
    </div>
    <div class="form-group row">
        <label for="rent" class="col-2 col-form-label">{{ __('lang.rent') }}</label>
        <div class="col-8">
            <input id="rent" name="rent" type="text" class="form-control" money autocomplete="off"/>
        </div>
    </div>
    <div class="form-group row">
        <label for="start_date" class="col-2 col-form-label">{{ __('lang.start_date') }}</label>
        <div class="col-8">
            <input id="start_date" name="start_date" type="text" data-MdDateTimePicker="true" class="form-control"
                   autocomplete="off"/>
        </div>
    </div>
    <div class="form-group row">
        <label for="end_date" class="col-2 col-form-label">{{ __('lang.end_date') }}</label>
        <div class="col-8">
            <input id="end_date" name="end_date" type="text" data-MdDateTimePicker="true" class="form-control"
                   autocomplete="off"/>
        </div>
    </div>
</form>
