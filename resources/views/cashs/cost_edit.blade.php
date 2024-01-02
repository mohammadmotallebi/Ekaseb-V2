<form method="post" id="cashEditForm" class="was-validated" autocomplete="off">
    <div class="form-group row">
        <label for="price" class="col-2 col-form-label">{{ __('lang.price') }}</label>
        <div class="col-8">
            <input id="price" name="price" type="text" value="{{ $cash->price }}" class="form-control" money autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="cost_date" class="col-2 col-form-label">{{ __('lang.date') }}</label>
        <div class="col-8">
            <input id="cost_date" name="cost_date" type="text" value="{{ $cash->cost_date }}" class="form-control" data-MdDateTimePicker="true"
                   autocomplete="off" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="cost_type_id" class="col-2 col-form-label">{{ __('lang.cost_type') }}</label>
        <div class="col-8">
            <select id="cost_type_id" name="cost_type_id" class="custom-select" required>
                <option></option>
                @forelse(costTypes() as $x)
                    <option @if($cash->cost_type_id == $x->id) selected="selected"
                            @endif value="{{$x->id}}">{{$x->cost_type}}</option>
                    @endforeach
            </select>
        </div>
    </div>
    <div class="form-group row">
        <label for="note" class="col-2 col-form-label">{{ __('lang.note') }}</label>
        <div class="col-8">
            <textarea id="note" name="note"  class="form-control" rows="4">{{ $cash->note }}</textarea>
        </div>
    </div>
</form>
