<form method="post" id="ColorsForm" class="was-validated">

    {{@csrf_field()}}
    <div class="form-group row">
        <label for="color_name" class="col-2 col-form-label">@lang('lang.color')</label>
        <div class="col-8">
            <input id="color_name" name="color_name" type="text" class="form-control" value="" autocomplete="off"
                   required>

        </div>
    </div>

</form>

