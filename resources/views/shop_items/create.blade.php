<div class="row">
    <div class="col-6">
<form method="post" id="ShopItemsForm" class="was-validated">
    <input type="hidden" value="{{ (\Cache::has('uc')) ? cache('uc') : $unique_code }}" id="unique_code" name="unique_code"/>
    <div class="form-group row">
        <label for="item_name" class="col-2 col-form-label">@lang('lang.item')</label>
        <div class="col-10">
            <input id="item_name" name="item_name" type="text" class="form-control" autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="item_count" class="col-2 col-form-label">@lang('lang.count')</label>
        <div class="col-10">
            <input id="item_count" name="item_count" type="text" class="form-control" autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="item_supplier_id" class="col-sm-2 col-form-label">{{ __('lang.item_supplier') }}</label>
        <div class="input-group col-sm-10">
            <select id="item_supplier_id" name="item_supplier_id" class="custom-select" required>
                <option></option>
                @forelse($supplier as $x)
                    <option value="{{$x->id}}">{{$x->item_supplier}}</option>
                    @endforeach
            </select>
            <div class="input-group-append">
                <button class="btn btn-success btn-sm" id="add_supplier" type="button">{!! __('lang.addButton') !!}</button>
                <button class="btn btn-primary btn-sm" id="edit_supplier" type="button">{!! __('lang.editButton') !!}</button>
{{--                <button class="btn btn-danger btn-sm" id="delete_supplier" type="button">{!! __('lang.deleteButton') !!}</button>--}}
            </div>
        </div>
    </div>
    <div class="form-group row">
        <label for="item_cat_id" class="col-sm-2 col-form-label">{{ __('lang.category') }}</label>
        <div class="input-group col-sm-10">
            <select id="item_cat_id" name="item_cat_id" class="custom-select" required>
                <option></option>
                @forelse($category as $x)
                    <option value="{{$x->id}}">{{$x->item_category}}</option>
                    @endforeach
            </select>
            <div class="input-group-append">
                <button class="btn btn-success btn-sm" id="add_category" type="button">{!! __('lang.addButton') !!}</button>
                <button class="btn btn-primary btn-sm" id="edit_category" type="button">{!! __('lang.editButton') !!}</button>
{{--                <button class="btn btn-danger btn-sm" id="delete_category" type="button">{!! __('lang.deleteButton') !!}</button>--}}
            </div>
        </div>
    </div>
    <div class="form-group row">
        <label for="item_type_id" class="col-sm-2 col-form-label">{{ __('lang.item_type') }}</label>
        <div class="input-group col-sm-10">
            <select id="item_type_id" name="item_type_id" class="custom-select" required>
                <option></option>
            </select>
            <div class="input-group-append">
                <button class="btn btn-success btn-sm" id="add_type" type="button">{!! __('lang.addButton') !!}</button>
                <button class="btn btn-primary btn-sm" id="edit_type" type="button">{!! __('lang.editButton') !!}</button>
{{--                <button class="btn btn-danger btn-sm" id="delete_type" type="button">{!! __('lang.deleteButton') !!}</button>--}}
            </div>
        </div>
    </div>
    <div class="form-group row">
        <label for="item_model_id" class="col-sm-2 col-form-label">{{ __('lang.item_model') }}</label>
        <div class="input-group col-sm-10">
            <select id="item_model_id" name="item_model_id" class="custom-select" required>
                <option></option>
            </select>
            <div class="input-group-append">
                <button class="btn btn-success btn-sm" id="add_model" type="button">{!! __('lang.addButton') !!}</button>
                <button class="btn btn-primary btn-sm" id="edit_model" type="button">{!! __('lang.editButton') !!}</button>
{{--                <button class="btn btn-danger btn-sm" id="delete_model" type="button">{!! __('lang.deleteButton') !!}</button>--}}
            </div>
        </div>
    </div>
    <div class="form-group row">
        <label for="item_size_id" class="col-sm-2 col-form-label">{{ __('lang.item_size') }}</label>
        <div class="input-group col-sm-10">
            <select id="item_size_id" name="item_size_id" class="custom-select" required>
                <option></option>
            </select>
            <div class="input-group-append">
                <button class="btn btn-success btn-sm" id="add_size" type="button">{!! __('lang.addButton') !!}</button>
                <button class="btn btn-primary btn-sm" id="edit_size" type="button">{!! __('lang.editButton') !!}</button>
{{--                <button class="btn btn-danger btn-sm" id="delete_size" type="button">{!! __('lang.deleteButton') !!}</button>--}}
            </div>
        </div>
    </div>
    <div class="form-group row">
        <label for="item_color_id" class="col-sm-2 col-form-label">{{ __('lang.item_color') }}</label>
        <div class="input-group col-sm-10">
            <select id="item_color_id" name="item_color_id" class="custom-select" required>
                <option></option>
                @forelse($color as $x)
                    <option value="{{$x->id}}">{{$x->item_color}}</option>
                    @endforeach
            </select>
            <div class="input-group-append">
                <button class="btn btn-success btn-sm" id="add_color" type="button">{!! __('lang.addButton') !!}</button>
                <button class="btn btn-primary btn-sm" id="edit_color" type="button">{!! __('lang.editButton') !!}</button>
{{--                <button class="btn btn-danger btn-sm" id="delete_color" type="button">{!! __('lang.deleteButton') !!}</button>--}}
            </div>
        </div>
    </div>

    <div class="form-group row">
        <label for="item_note" class="col-2 col-form-label">@lang('lang.note')</label>
        <div class="col-10">
            <input id="item_note" name="item_note" type="text" class="form-control" autocomplete="off" required>
        </div>
    </div>
</form>
</div>
<div class="col-6 border-right-primary">
    <div id="pToolbar" class="float-left">
        @can('contract_add')
            <div class="btn-group" role="group" aria-label="Basic example">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-success btn-sm"
                            id="add_price">@lang('lang.add_price') </button>
                    <button type="button" class="btn btn-info btn-sm"
                            id="add_credit">@lang('lang.add_discount') </button>
                    <button type="button" class="btn btn-primary btn-sm"
                            id="add_score">@lang('lang.add_score') </button>
                </div>
            </div>
        @endcan

    </div>

    <table class="table"
           id="item_prices"
           data-toggle="table"
           data-pagination="false"
           data-search="false"
           data-locale="fa-IR"
           data-height="auto"
           data-id-field="id"
           data-click-to-select="true"
           data-toolbar="#pToolbar"
    >
        <thead>
        <tr>
            <th data-radio="true"></th>
            <th data-sortable="true" data-formatter="priceFormatter" data-field="item_price">{{ __('lang.price') }}</th>
            <th data-sortable="true" data-width="100px" data-field="add_date">{{ __('lang.date') }}</th>
        </tr>
        </thead>
    </table>

    <table class="table"
           id="item_credits"
           data-toggle="table"
           data-pagination="false"
           data-search="false"
           data-locale="fa-IR"
           data-height="auto"
           data-id-field="id"
           data-click-to-select="true"
           data-toolbar="#pToolbar"
    >
        <thead>
        <tr>
            <th data-radio="true"></th>
            <th data-sortable="true" data-formatter="priceFormatter" data-field="item_credit">{{ __('lang.discount') }}</th>
            <th data-sortable="true" data-width="100px" data-field="start_date">{{ __('lang.start_date') }}</th>
            <th data-sortable="true" data-width="100px" data-field="end_date">{{ __('lang.end_date') }}</th>
        </tr>
        </thead>
    </table>

    <table class="table"
           id="item_scores"
           data-toggle="table"
           data-pagination="false"
           data-search="false"
           data-locale="fa-IR"
           data-height="auto"
           data-id-field="id"
           data-click-to-select="true"
    >
        <thead>
        <tr>
            <th data-radio="true"></th>
            <th data-sortable="true" data-field="item_score">{{ __('lang.score') }}</th>
            <th data-sortable="true" data-width="100px" data-field="start_date">{{ __('lang.start_date') }}</th>
            <th data-sortable="true" data-width="100px" data-field="end_date">{{ __('lang.end_date') }}</th>
        </tr>
        </thead>
    </table>
</div>
</div>

