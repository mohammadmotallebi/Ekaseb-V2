<form method="post" id="estateForm" class="was-validated" autocomplete="off">
    <div class="form-group row">
        <label for="building_id" class="col-sm-2 col-form-label">{{ __('lang.building') }}</label>
        <div class="input-group col-sm-8">
        <select id="building_id" name="building_id" class="custom-select" required>
            @foreach(buildingsList() as $x)
                <option value="{{$x->id}}">{{$x->building_name}}</option>
            @endforeach
        </select>
            <div class="input-group-append">
                <button class="btn btn-success btn-sm" id="add_building" type="button">{!! __('lang.addButton') !!}</button>
                <button class="btn btn-danger btn-sm" id="delete_building" type="button">{!! __('lang.deleteButton') !!}</button>
        </div>
        </div>
    </div>
    <div class="form-group row">
        <label for="old_id" class="col-sm-2 col-form-label">{{ __('lang.old_number') }}</label>
        <div class="col-8">
            <input id="old_id" name="old_id" type="text" class="form-control" autocomplete="off" required>
        </div>
    </div>

    <div class="form-group row">
        <label for="code" class="col-2 col-form-label">{{ __('lang.estate_number') }}</label>
        <div class="col-8">
            <input id="code" name="code" type="text" class="form-control" autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="floor_id" class="col-sm-2 col-form-label">{{ __('lang.floor') }}</label>
        <div class="input-group col-sm-8">
            <select id="floor_id" name="floor_id" class="custom-select" required>
                <option></option>
                @foreach(floorsList() as $x)
                    <option value="{{$x->id}}">{{$x->floor}}</option>
                @endforeach
            </select>
            <div class="input-group-append">
                <button class="btn btn-success btn-sm" id="add_floor" type="button">{!! __('lang.addButton') !!}</button>
                <button class="btn btn-danger btn-sm" id="delete_building" type="button">{!! __('lang.deleteButton') !!}</button>
            </div>
        </div>
    </div>

    <div class="form-group row">
        <label for="owner_id" class="col-2 col-form-label">{{ __('lang.owner_name') }}</label>
        <div class="col-8">
            <select id="owner_id" name="owner_id" class="custom-select" multiple required>
                <option></option>
                @foreach($users as $x)
                    <option value="{{$x->id}}">{{$x->name . ' ' . $x->family .' ('. $x->identity_code .')'}}</option>
                @endforeach
            </select>
        </div>
    </div>
    <div class="form-group row">
        <label for="dimension" class="col-2 col-form-label">{{ __('lang.dimension') }}</label>
        <div class="col-8">
            <input id="dimension" name="dimension" type="text" class="form-control" autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="telephone" class="col-2 col-form-label">{{ __('lang.tel') }}</label>
        <div class="col-8">
            <input id="telephone" name="telephone" type="text" class="form-control" autocomplete="off">
        </div>
    </div>
    <div class="form-group row">
        <label for="postal" class="col-2 col-form-label">{{ __('lang.postal') }}</label>
        <div class="col-8">
            <input id="postal" name="postal" type="text" class="form-control" autocomplete="off"/>
        </div>
    </div>
    <div class="form-group row">
        <label for="powerid" class="col-2 col-form-label">{{ __('lang.powerid') }}</label>
        <div class="col-8">
            <input id="powerid" name="powerid" type="text" class="form-control" autocomplete="off"/ >
        </div>
    </div>
</form>
