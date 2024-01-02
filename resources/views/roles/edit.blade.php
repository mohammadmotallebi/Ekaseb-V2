<form method="post" id="RolesForm" class="was-validated">
    <div class="form-group row">
        <label for="name" class="col-2 col-form-label">@lang('lang.role.name')</label>
        <div class="col-8">
            <input id="name" name="name" type="text" class="form-control" value="{{ $role->name }}" autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="label" class="col-2 col-form-label">@lang('lang.role.label')</label>
        <div class="col-8">
            <input id="label" name="label" type="text" class="form-control" value="{{ $role->label }}" autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row justify-content-md-center mt-2">
        <div class="col-md-8">
            <div class="boxed-check-group boxed-check-success">
                <label class="boxed-check">
                    <input class="boxed-check-input" type="checkbox" name="access_to_app" onclick="checkboxSetValue(this)" @if($role->access_to_app == 1) checked @endif>
                    <div class="boxed-check-label">@lang('lang.access_to_app')</div>
                </label>
            </div>

        </div>
    </div>

</form>

