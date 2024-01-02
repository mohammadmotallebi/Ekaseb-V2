<form method="post" id="estateDetailEditForm" class="was-validated" autocomplete="off">
    <div class="form-group row">
        <label for="price" class="col-2 col-form-label">{{ __('lang.price') }}</label>
        <div class="col-8">
            <input id="price" name="price" type="text" value="{{ $estate_detail->price }}" class="form-control" money
                   autocomplete="off" required/>
        </div>
    </div>
    <div class="form-group row">
        <label for="rent" class="col-2 col-form-label">{{ __('lang.rent') }}</label>
        <div class="col-8">
            <input id="rent" name="rent" type="text" value="{{ $estate_detail->rent }}" class="form-control" money
                   autocomplete="off" required/>
        </div>
    </div>
    <div class="form-group row">
        <label for="start_date" class="col-2 col-form-label">{{ __('lang.start_date') }}</label>
        <div class="col-8">
            <input id="start_date" name="start_date" type="text" value="{{ $estate_detail->start_date }}"
                   data-MdDateTimePicker="true" class="form-control" autocomplete="off" required/>
        </div>
    </div>
    <div class="form-group row">
        <label for="end_date" class="col-2 col-form-label">{{ __('lang.end_date') }}</label>
        <div class="col-8">
            <input id="end_date" name="end_date" type="text" data-MdDateTimePicker="true"
                   value="{{ $estate_detail->end_date }}" class="form-control" autocomplete="off" required/>
        </div>
    </div>
    <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" @if( $estate_detail->active == 1 ) checked="checked"
               @endif id="active" name="active">
        <label class="custom-control-label" for="active">{{ __('lang.active') }}</label>
    </div>
</form>
