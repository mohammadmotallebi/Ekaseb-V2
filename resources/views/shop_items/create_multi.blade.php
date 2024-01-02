<form id="add-multi-item" method="post">
    @csrf
    <div class="row">
        <div class="col">
            <b>{{ __('lang.item') }}</b>
        </div>
        <div class="col">
            <b>{{ __('lang.price') }}</b>
        </div>
        <div class="col">
            <b>{{ __('lang.count') }}</b>
        </div>
        <div class="col">
            <b>{{ __('lang.category') }}</b>
        </div>
    </div>

    <hr class="sidebar-divider">
    <div class="row">
        <div class="col">
            <input type="text" autocomplete="off" class="form-control" id="item_1" name="item_1"
                   value="{{ @old('item_1') }}" placeholder="{{ __('lang.item') }}">
        </div>
        <div class="col">
            <input type="text" money autocomplete="off" class="form-control" id="price_1" name="price_1"
                   value="{{ @old('price_1') }}" placeholder="{{ __('lang.price') }}">
        </div>
        <div class="col">
            <input type="text" autocomplete="off" class="form-control" id="count_1" name="count_1"
                   value="{{ @old('count_1') }}" placeholder="{{ __('lang.count') }}">
        </div>
        <div class="col">
            <select id="cat_1" name="cat_1" class="custom-select" required>
                <option></option>
                @forelse($category as $x)
                    <option value="{{$x->id}}">{{$x->item_category_name}}</option>
                    @endforeach
            </select>
        </div>
    </div>
    <div class="row mt-2">
        <div class="col">
            <input type="text" autocomplete="off" class="form-control" id="item_2" name="item_2"
                   placeholder="{{ __('lang.item') }}">
        </div>
        <div class="col">
            <input type="text" money autocomplete="off" class="form-control" id="price_2" name="price_2"
                   placeholder="{{ __('lang.price') }}">
        </div>
        <div class="col">
            <input type="text" autocomplete="off" class="form-control" id="count_2" name="count_2"
                   placeholder="{{ __('lang.count') }}">
        </div>
        <div class="col">
            <select id="cat_2" name="cat_2" class="custom-select" required>
                <option></option>
                @forelse($category as $x)
                    <option value="{{$x->id}}">{{$x->item_category_name}}</option>
                    @endforeach
            </select></div>
    </div>
    <div class="row mt-2">
        <div class="col">
            <input type="text" autocomplete="off" class="form-control" id="item_3" name="item_3"
                   placeholder="{{ __('lang.item') }}">
        </div>
        <div class="col">
            <input type="text" money autocomplete="off" class="form-control" id="price_3" name="price_3"
                   placeholder="{{ __('lang.price') }}">
        </div>
        <div class="col">
            <input type="text" autocomplete="off" class="form-control" id="count_3" name="count_3"
                   placeholder="{{ __('lang.count') }}">
        </div>
        <div class="col">
            <select id="cat_3" name="cat_3" class="custom-select" required>
                <option></option>
                @forelse($category as $x)
                    <option value="{{$x->id}}">{{$x->item_category_name}}</option>
                    @endforeach
            </select></div>
    </div>
    <div class="row mt-2">
        <div class="col">
            <input type="text" autocomplete="off" class="form-control" id="item_4" name="item_4"
                   placeholder="{{ __('lang.item') }}">
        </div>
        <div class="col">
            <input type="text" money autocomplete="off" class="form-control" id="price_4" name="price_4"
                   placeholder="{{ __('lang.price') }}">
        </div>
        <div class="col">
            <input type="text" autocomplete="off" class="form-control" id="count_4" name="count_4"
                   placeholder="{{ __('lang.count') }}">
        </div>
        <div class="col">
            <select id="cat_4" name="cat_4" class="custom-select" required>
                <option></option>
                @forelse($category as $x)
                    <option value="{{$x->id}}">{{$x->item_category_name}}</option>
                    @endforeach
            </select></div>
    </div>
    <div class="row mt-2">
        <div class="col">
            <input type="text" autocomplete="off" class="form-control" id="item_5" name="item_5"
                   placeholder="{{ __('lang.item') }}">
        </div>
        <div class="col">
            <input type="text" money autocomplete="off" class="form-control" id="price_5" name="price_5"
                   placeholder="{{ __('lang.price') }}">
        </div>
        <div class="col">
            <input type="text" autocomplete="off" class="form-control" id="count_5" name="count_5"
                   placeholder="{{ __('lang.count') }}">
        </div>
        <div class="col">
            <select id="cat_5" name="cat_5" class="custom-select" required>
                <option></option>
                @forelse($category as $x)
                    <option value="{{$x->id}}">{{$x->item_category_name}}</option>
                    @endforeach
            </select></div>
    </div>
    <div class="row mt-2">
        <div class="col">
            <input type="text" autocomplete="off" class="form-control" id="item_6" name="item_6"
                   placeholder="{{ __('lang.item') }}">
        </div>
        <div class="col">
            <input type="text" money autocomplete="off" class="form-control" id="price_6" name="price_6"
                   placeholder="{{ __('lang.price') }}">
        </div>
        <div class="col">
            <input type="text" autocomplete="off" class="form-control" id="count_6" name="count_6"
                   placeholder="{{ __('lang.count') }}">
        </div>
        <div class="col">
            <select id="cat_6" name="cat_6" class="custom-select" required>
                <option></option>
                @forelse($category as $x)
                    <option value="{{$x->id}}">{{$x->item_category_name}}</option>
                    @endforeach
            </select></div>
    </div>
    <div class="row mt-2">
        <div class="col">
            <input type="text" autocomplete="off" class="form-control" id="item_7" name="item_7"
                   placeholder="{{ __('lang.item') }}">
        </div>
        <div class="col">
            <input type="text" money autocomplete="off" class="form-control" id="price_7" name="price_7"
                   placeholder="{{ __('lang.price') }}">
        </div>
        <div class="col">
            <input type="text" autocomplete="off" class="form-control" id="count_7" name="count_7"
                   placeholder="{{ __('lang.count') }}">
        </div>
        <div class="col">
            <select id="cat_7" name="cat_7" class="custom-select" required>
                <option></option>
                @forelse($category as $x)
                    <option value="{{$x->id}}">{{$x->item_category_name}}</option>
                    @endforeach
            </select></div>
    </div>
    <div class="row mt-2">
        <div class="col">
            <input type="text" autocomplete="off" class="form-control" id="item_8" name="item_8"
                   placeholder="{{ __('lang.item') }}">
        </div>
        <div class="col">
            <input type="text" money autocomplete="off" class="form-control" id="price_8" name="price_8"
                   placeholder="{{ __('lang.price') }}">
        </div>
        <div class="col">
            <input type="text" autocomplete="off" class="form-control" id="count_8" name="count_8"
                   placeholder="{{ __('lang.count') }}">
        </div>
        <div class="col">
            <select id="cat_8" name="cat_8" class="custom-select" required>
                <option></option>
                @forelse($category as $x)
                    <option value="{{$x->id}}">{{$x->item_category_name}}</option>
                    @endforeach
            </select></div>
    </div>
    <div class="row mt-2">
        <div class="col">
            <input type="text" autocomplete="off" class="form-control" id="item_9" name="item_9"
                   placeholder="{{ __('lang.item') }}">
        </div>
        <div class="col">
            <input type="text" money autocomplete="off" class="form-control" id="price_9" name="price_9"
                   placeholder="{{ __('lang.price') }}">
        </div>
        <div class="col">
            <input type="text" autocomplete="off" class="form-control" id="count_9" name="count_9"
                   placeholder="{{ __('lang.count') }}">
        </div>
        <div class="col">
            <select id="cat_9" name="cat_9" class="custom-select" required>
                <option></option>
                @forelse($category as $x)
                    <option value="{{$x->id}}">{{$x->item_category_name}}</option>
                    @endforeach
            </select></div>
    </div>
    <div class="row mt-2">
        <div class="col">
            <input type="text" autocomplete="off" class="form-control" id="item_10" name="item_10"
                   placeholder="{{ __('lang.item') }}">
        </div>
        <div class="col">
            <input type="text" money autocomplete="off" class="form-control" id="price_10" name="price_10"
                   placeholder="{{ __('lang.price') }}">
        </div>
        <div class="col">
            <input type="text" autocomplete="off" class="form-control" id="count_10" name="count_10"
                   placeholder="{{ __('lang.count') }}">
        </div>
        <div class="col">
            <select id="cat_10" name="cat_10" class="custom-select" required>
                <option></option>
                @forelse($category as $x)
                    <option value="{{$x->id}}">{{$x->item_category_name}}</option>
                    @endforeach
            </select></div>
    </div>
</form>

