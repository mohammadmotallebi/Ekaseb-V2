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
    <div class="form-group row">
        <label for="password" class="col-2 col-form-label">{{ __('lang.password') }}</label>
        <div class="col-8">
            <input id="password" name="password" type="text" class="form-control" autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="address" class="col-2 col-form-label">{{ __('lang.address') }}</label>
        <div class="col-8">
            <textarea id="address" name="address" cols="40" rows="5" class="form-control" autocomplete="off"></textarea>
        </div>
    </div>
    <div class="form-group row justify-content-md-center mt-2">
        <div class="col-md-10">
            <div class="boxed-check-group boxed-check-success">
                <label class="boxed-check">
                    <input class="boxed-check-input" type="checkbox" name="add_to_contract_users" onclick="checkboxSetValue(this)">
                    <div class="boxed-check-label">@lang('lang.add_to_contract_users')</div>
                </label>
            </div>

        </div>
    </div>
    <div class="accordion" id="accordionExample">
        <div class="card">

                    <button class="btn btn-info btn-block text-center" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        جزئیات
                    </button>

    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
        <div class="card-body">
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
        <label for="mobile_back" class="col-2 col-form-label">{{ __('lang.mobile_back') }}</label>
        <div class="col-8">
            <input id="mobile_back" name="mobile_back" type="text" class="form-control" autocomplete="off" mobile>
        </div>
    </div>
    <div class="form-group row">
        <label for="ref_user" class="col-2 col-form-label">{{ __('lang.ref_user') }}</label>
        <div class="col-8">
            <select id="ref_user" name="ref_user" class="custom-select">
                <option></option>
                @forelse($ref as $x)
                    <option value="{{$x->id}}">{{$x->name .' '. $x->family}}</option>
                    @endforeach
            </select>
        </div>
    </div>
    <div class="form-group row">
        <label for="tel" class="col-2 col-form-label">{{ __('lang.tel') }}</label>
        <div class="col-8">
            <input id="tel" name="tel" type="text" class="form-control" autocomplete="off">
        </div>
    </div>
    <div class="form-group row">
        <label for="city" class="col-2 col-form-label">{{ __('lang.city') }}</label>
        <div class="col-8">
            <select id="city" name="city" class="custom-select">
                <option></option>
                @forelse($city as $x)
                    <option value="{{$x->id}}">{{$x->city_name}}</option>
                    @endforeach
            </select>
        </div>
    </div>
    <div class="form-group row">
        <label for="state" class="col-2 col-form-label">{{ __('lang.state') }}</label>
        <div class="col-8">
            <select id="state" name="state" class="custom-select">
                <option></option>

            </select>
        </div>
    </div>

    <div class="form-group row">
        <label for="email" class="col-2 col-form-label">{{ __('lang.email') }}</label>
        <div class="col-8">
            <input id="email" name="email" type="text" class="form-control" autocomplete="off">
        </div>
    </div>
    <div class="form-group row">
        <label for="job" class="col-2 col-form-label">{{ __('lang.job') }}</label>
        <div class="col-8">
            <select id="job" name="job" class="custom-select">
                <option></option>
                @forelse($job as $x)
                    <option value="{{$x->id}}">{{$x->job_name}}</option>
                    @endforeach
            </select>
        </div>
    </div>
    <div class="form-group row">
        <label for="father" class="col-2 col-form-label">{{ __('lang.father') }}</label>
        <div class="col-8">
            <input id="father" name="father" type="text" class="form-control" autocomplete="off">
        </div>
    </div>
    <div class="form-group row">
        <label for="wedding_date" class="col-2 col-form-label">{{ __('lang.wedding_date') }}</label>
        <div class="col-8">
            <input id="wedding_date" name="wedding_date" type="text" data-mddatetimepicker="true" data-placement="right"
                   class="form-control" autocomplete="off">
        </div>
    </div>
    <div class="form-group row">
        <label for="weight" class="col-2 col-form-label">{{ __('lang.weight') }}</label>
        <div class="col-8">
            <input id="weight" name="weight" type="text" class="form-control" autocomplete="off">
        </div>
    </div>
    <div class="form-group row">
        <label for="height" class="col-2 col-form-label">{{ __('lang.height') }}</label>
        <div class="col-8">
            <input id="height" name="height" type="text" class="form-control" autocomplete="off">
        </div>
    </div>
    <div class="form-group row">
        <label for="fav_color" class="col-2 col-form-label">{{ __('lang.fav_color') }}</label>
        <div class="col-8">
            <select id="fav_color" name="fav_color" class="custom-select">
                <option></option>
                @forelse($color as $x)
                    <option value="{{$x->id}}">{{$x->color_name}}</option>
                    @endforeach
            </select>
        </div>
    </div>
    </div>
    </div>
        </div>
    </div>

</form>
