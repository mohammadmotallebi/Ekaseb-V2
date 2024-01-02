<form method="post" id="ShopItemTypeForm" class="was-validated">
    <input id="shop_item_category_id" name="shop_item_category_id" type="hidden" class="form-control" autocomplete="off" required >
    <input id="shop_id" name="shop_id" type="hidden" class="form-control" autocomplete="off" required >
    <div class="form-group row">
        <label for="item_type" class="col-3 col-form-label">@lang('lang.item_type')</label>
        <div class="col-8">
            <input id="item_type" name="item_type" type="text" class="form-control" autocomplete="off"
                   required>
        </div>
    </div>
</form>