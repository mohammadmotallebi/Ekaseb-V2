<form method="post" id="userForm" class="was-validated" autocomplete="off">
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
        <label for="father" class="col-2 col-form-label">{{ __('lang.father') }}</label>
        <div class="col-8">
            <input id="father" name="father" type="text" class="form-control"
                   autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="gender" class="col-2 col-form-label">{{ __('lang.gender') }}</label>
        <div class="col-8">
            <select id="gender" name="gender" class="custom-select">
                <option></option>
                @forelse($gender as $x)
                    <option value="{{$x->id}}">{{$x->gender_name}}</option>
                    @endforeach
            </select>
        </div>
    </div>
    <div class="form-group row">
        <label for="birthday" class="col-2 col-form-label">{{ __('lang.birthday') }}</label>
        <div class="col-8">
            <input id="birthday" name="birthday" type="text" data-mddatetimepicker="true" data-placement="right"
                   class="form-control" autocomplete="off">
        </div>
    </div>
    <div class="form-group row">
        <label for="mobile" class="col-2 col-form-label">{{ __('lang.mobile') }}</label>
        <div class="col-8">
            <input id="mobile" name="mobile" type="text" class="form-control" autocomplete="off" mobile required>
        </div>
    </div>
    <div class="form-group row">
        <label for="mobile_back" class="col-2 col-form-label">{{ __('lang.mobile_back') }}</label>
        <div class="col-8">
            <input id="mobile_back" name="mobile_back" type="text" class="form-control" autocomplete="off" mobile>
        </div>
    </div>
    <div class="form-group row">
        <label for="tel" class="col-2 col-form-label">{{ __('lang.tel') }}</label>
        <div class="col-8">
            <input id="tel" name="tel" type="text" class="form-control" autocomplete="off">
        </div>
    </div>

    <div class="form-group row">
        <label for="address" class="col-2 col-form-label">{{ __('lang.address') }}</label>
        <div class="col-8">
            <textarea id="address" name="address" cols="40" rows="5" class="form-control" autocomplete="off"></textarea>
        </div>
    </div>
</form>
