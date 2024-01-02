<form method="post" id="ShopForm" class="was-validated">

    {{@csrf_field()}}
    <div class="form-group row">
        <label for="estate_id" class="col-2 col-form-label">@lang('lang.estate')</label>
        <div class="col-8">
            <select id="estate_id" name="estate_id" class="custom-select" required>
                <option></option>
                @forelse($estates as $x)
                    <option value="{{$x->id}}">{{$x->code .' ('. $x->old_id.')'. '-' . getFloorName($x->floor_id)}}</option>
                    @endforeach
            </select>
        </div>
    </div>

    <div class="form-group row">
        <label for="shop_name" class="col-2 col-form-label">@lang('lang.shopname')</label>
        <div class="col-8">
            <input id="shop_name" name="shop_name" type="text" class="form-control" autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="owner_id" class="col-2 col-form-label">{{ __('lang.shop_admin') }}</label>
        <div class="input-group col-sm-8">
            <select id="owner_id" name="owner_id" class="custom-select" multiple required>
                <option></option>
                @foreach(usersList() as $x)
                    <option value="{{$x->id}}">{{$x->name . ' ' . $x->family .' ('. $x->identity_code .')'}}</option>
                @endforeach
            </select>
            <div class="input-group-append">
                <button class="btn btn-success btn-sm" id="add_user" type="button">{!! __('lang.addButton') !!}</button>
                {{--                <button class="btn btn-danger btn-sm" id="delete_building" type="button">{!! __('lang.deleteButton') !!}</button>--}}
            </div>
        </div>
    </div>
    <div class="form-group row">
        <label for="email" class="col-2 col-form-label">@lang('lang.email')</label>
        <div class="col-8">
            <input id="email" name="email" type="text" class="form-control" autocomplete="off">
        </div>
    </div>
    <div class="form-group row">
        <label for="website" class="col-2 col-form-label">@lang('lang.website')</label>
        <div class="col-8">
            <input id="website" name="website" type="text" class="form-control" autocomplete="off">
        </div>
    </div>


</form>

