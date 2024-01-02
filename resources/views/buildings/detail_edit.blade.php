<form method="post" id="buildingDetailEditForm" class="was-validated" autocomplete="off">
    <div class="form-group row">
        <label for="contact_type_id" class="col-2 col-form-label">{{ __('lang.contact_type') }}</label>
        <div class="col-8">
            <select id="contact_type_id" name="contact_type_id" class="custom-select" required>
                <option></option>
                @foreach(contactsList() as $x)
                    <option @if($x->id == $bd->contact_type_id) selected="selected"
                            @endif value="{{$x->id}}">{{$x->contact}}</option>
                @endforeach
            </select>
        </div>
    </div>
    <div class="form-group row">
        <label for="contact" class="col-2 col-form-label">{{ __('lang.contact') }}</label>
        <div class="col-8">
            <input id="contact" name="contact" type="text" value="{{ $bd->contact }}" class="form-control"
                   autocomplete="off" required/>
        </div>
    </div>
    <div class="form-group row">
        <label for="note" class="col-2 col-form-label">{{ __('lang.note') }}</label>
        <div class="col-8">
            <textarea id="note" name="note" class="form-control" rows="5">{{ $bd->note }}</textarea>
        </div>
    </div>
</form>
