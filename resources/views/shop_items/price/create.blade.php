<form method="post" id="ShopItemPriceForm" class="was-validated">
    <div class="form-group row">
        <label for="item_price" class="col-3 col-form-label">@lang('lang.price')</label>
        <div class="col-8">
            <input id="item_price" name="item_price" type="text" class="form-control" money autocomplete="off"
                   required>
        </div>
    </div>
</form>