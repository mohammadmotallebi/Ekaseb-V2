<form method="post" id="userGEditForm" class="was-validated">
    <div class="form-group row">
        <label for="building_id" class="col-2 col-form-label">{{ __('lang.building') }}</label>
        <div class="col-8">
            <select id="building_id" name="building_id" class="custom-select" required>
                <option></option>
                @foreach(buildingsList() as $x)
                    <option value="{{$x->id}}">{{$x->building_name}}</option>
                @endforeach
            </select>
        </div>
    </div>
</form>
