<div class="row mb3">
    <div class="col-xl-4 col-md-6 mb-4">
        <div class="card border-left-primary border-right-primary h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div
                            class="text-s font-weight-bold text-success text-uppercase mb-1">{{ __('lang.deposit') }}</div>
                        <div id="tdeposit" class="h5 mb-0 font-weight-bold text-gray-800">0</div>
                    </div>
                    <div class="col-auto">
                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-4 col-md-6 mb-4">
        <div class="card border-left-info border-right-info h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div
                            class="text-s font-weight-bold text-success text-uppercase mb-1">{{ __('lang.rent_price_monthly') }}</div>
                        <div id="mrent" class="h5 mb-0 font-weight-bold text-gray-800">0</div>
                    </div>
                    <div class="col-auto">
                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-4 col-md-6 mb-4">
        <div class="card border-left-success border-right-success h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div
                            class="text-s font-weight-bold text-success text-uppercase mb-1">{{ __('lang.rent_price_yearly') }}</div>
                        <div id="yrent" class="h5 mb-0 font-weight-bold text-gray-800">0</div>
                    </div>
                    <div class="col-auto">
                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

<form method="post" id="contractEditForm" class="was-validated" autocomplete="off">
    <div class="form-group row">
        <label for="renter_id" class="col-2 col-form-label">{{ __('lang.renter_name') }}</label>
        <div class="col-8">
            <select id="renter_id" name="renter_id" class="custom-select" required>
                <option></option>
                @forelse(usersList(['renter']) as $x)
                    <option value="{{$x->id}}"
                            @if($res->renter_id == $x->id) selected="selected" @endif>{{$x->name . ' ' . $x->family .' ('. $x->identity_code .')'}}</option>
                    @endforeach
            </select>
        </div>
    </div>

    <div class="form-group row">
        <label for="start_date" class="col-2 col-form-label">{{ __('lang.start_date') }}</label>
        <div class="col-8">
            <input id="start_date" name="start_date" type="text" class="form-control" value="{{ $res->start_date }}"
                   data-MdDateTimePicker="true" autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="end_date" class="col-2 col-form-label">{{ __('lang.end_date') }}</label>
        <div class="col-8">
            <input id="end_date" name="end_date" type="text" class="form-control" data-MdDateTimePicker="true"
                   value="{{ $res->end_date }}" autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">

        <label for="deposit" class="col-2 col-form-label">{{ __('lang.deposit') }}</label>
        <div class="col-8">
            <div class="input-group">
                <input id="deposit" name="deposit" type="text" class="form-control" value="{{ $res->deposit }}" money
                       value="0" autocomplete="off" required/>
                <div class="input-group-append">
                    <button class="btn btn-primary" id="cal_deposit" type="button" data-toggle="tooltip"
                            data-placement="top" title="{{ __('lang.cal_deposit') }}">
                        <i class="fas fa-sync-alt"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="form-group row">
        <label for="rent" class="col-2 col-form-label">{{ __('lang.rent_price_monthly') }}</label>
        <div class="col-8">
            <div class="input-group">
                <input id="rent" name="rent" type="text" class="form-control" money value="{{ $res->rent }}" value="0"
                       autocomplete="off" required/>
                <input id="rent-o" name="rent-o" type="hidden" class="form-control"/>
                <div class="input-group-append">
                    <button class="btn btn-info" id="cal_rent" type="button" data-toggle="tooltip" data-placement="top"
                            title="{{ __('lang.cal_rent') }}">
                        <i class="fas fa-sync-alt"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="form-group row">
        <label for="rent_yearly" class="col-2 col-form-label">{{ __('lang.rent_price_yearly') }}</label>
        <div class="col-8">
            <input id="rent_yearly" name="rent_yearly" type="text" class="form-control" value="0" money readonly/>
        </div>
    </div>
    <div class="form-group row">
        <label for="deposit_discount" class="col-2 col-form-label">{{ __('lang.deposit_discount') }}</label>
        <div class="col-8">
            <input id="deposit_discount" name="deposit_discount" value="{{ $res->deposit_discount }}" type="text" money
                   class="form-control">
        </div>
    </div>
    <div class="form-group row">
        <label for="rent_discount" class="col-2 col-form-label">{{ __('lang.rent_discount') }}</label>
        <div class="col-8">
            <input id="rent_discount" name="rent_discount" value="{{ $res->rent_discount }}" type="text"
                   class="form-control" money autocomplete="off"/>
        </div>
    </div>
</form>

<div class="alert alert-success">{{ __('lang.desc_final_value') }}</div>
<div class="row mt-3">
    <div class="col-xl-4 col-md-6 mb-4">
        <div class="card border-left-primary border-right-primary h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div
                            class="text-s font-weight-bold text-success text-uppercase mb-1">{{ __('lang.deposit') }}</div>
                        <div id="final_deposite" class="h5 mb-0 font-weight-bold text-gray-800">0</div>
                    </div>
                    <div class="col-auto">
                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-4 col-md-6 mb-4">
        <div class="card border-left-info border-right-info h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div
                            class="text-s font-weight-bold text-success text-uppercase mb-1">{{ __('lang.rent_price_monthly') }}</div>
                        <div id="final_rent" class="h5 mb-0 font-weight-bold text-gray-800">0</div>
                    </div>
                    <div class="col-auto">
                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-xl-4 col-md-6 mb-4">
        <div class="card border-left-success border-right-success h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div
                            class="text-s font-weight-bold text-success text-uppercase mb-1">{{ __('lang.rent_price_yearly') }}</div>
                        <div id="final_rent_yearly" class="h5 mb-0 font-weight-bold text-gray-800">0</div>
                    </div>
                    <div class="col-auto">
                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
