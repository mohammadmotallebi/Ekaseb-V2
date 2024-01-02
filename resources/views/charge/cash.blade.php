<form method="post" id="cashChargeForm" class="was-validated" autocomplete="off">
    <div class="form-group row">
        <label for="fee" class="col-2 col-form-label">{{ __('lang.fee') }}</label>
        <div class="col-8">
            <input id="fee" name="fee" type="text" class="form-control text-center" money autocomplete="off" value="{{ number_format($charge->fee) }}" readonly required>
        </div>
    </div>
    <div class="form-group row">
        <label for="payment_date" class="col-2 col-form-label">{{ __('lang.date') }}</label>
        <div class="col-8">
            <input id="payment_date" name="payment_date" type="text" class="form-control"  value="{{ $charge->payment_date }}" data-MdDateTimePicker="true"
                   autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="note" class="col-2 col-form-label">{{ __('lang.note') }}</label>
        <div class="col-8">
            <textarea id="note" name="note" class="form-control" rows="4">{{ nl2br($charge->note) }}</textarea>
        </div>
    </div>
</form>

