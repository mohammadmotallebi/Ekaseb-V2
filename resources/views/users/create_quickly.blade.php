<form method="post" id="userQuicklyForm" class="was-validated" autocomplete="off">
    <div class="form-group row">
        <label for="building_id" class="col-2 col-form-label">{{ __('lang.building') }}</label>
        <div class="input-group col-8">
            <select id="building_id" name="building_id" class="custom-select" required>
                @foreach(buildingsList() as $x)
                    <option value="{{$x->id}}">{{$x->building_name}}</option>
                @endforeach
            </select>
        </div>
    </div>
    <div class="form-group row">
        <label for="category" class="col-2 col-form-label">{{ __('lang.user_category') }}</label>
        <div class="col-8">
            <select id="category" name="category" class="custom-select" autocomplete="off">
                <option></option>
                @forelse(\App\Models\Role::all() as $x)
                    <option value="{{$x->id}}">{{$x->label}}</option>
                    @endforeach
            </select>
        </div>
    </div>
    <div class="form-group row">
        <label for="identity_code" class="col-2 col-form-label">{{ __('lang.identity') }}</label>
        <div class="col-8">
            <input id="identity_code" name="identity_code" type="text" class="form-control" autocomplete="off" melli
                   required>
        </div>
    </div>
    <div class="form-group row">
        <label for="name" class="col-2 col-form-label">{{ __('lang.name') }}</label>
        <div class="col-8">
            <input id="name" name="name" type="text" class="form-control" autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="family" class="col-2 col-form-label">{{ __('lang.family') }}</label>
        <div class="col-8">
            <input id="family" name="family" type="text" class="form-control" autocomplete="off" required>
        </div>
    </div>

    <div class="form-group row">
        <label for="mobile" class="col-2 col-form-label">{{ __('lang.mobile') }}</label>
        <div class="col-8">
            <input id="mobile" name="mobile" type="text" class="form-control" autocomplete="off" mobile required>
        </div>
    </div>
</form>
