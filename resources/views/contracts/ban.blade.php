<form method="post" id="banForm" class="was-validated" autocomplete="off">
    <div class="form-group row">
        <label for="reason" class="col-4 col-form-label">{{ __('lang.deactivate_reason') }}</label>
        <div class="col-8">
            <select id="reason" name="reason" class="custom-select" required>
                <option></option>
                @forelse($ban as $b)
                    <option @if($b->id == $res->ban_reason) selected="selected"
                            @endif value="{{$b->id}}">{{ $b->reason }}</option>
                    @endforeach
            </select>
        </div>
    </div>

    <div class="form-group row">
        <label for="ban_date" class="col-4 col-form-label">{{ __('lang.deactivate_date') }}</label>
        <div class="col-8">
            <input id="ban_date" name="ban_date" type="text" class="form-control" data-MdDateTimePicker="true"
                   autocomplete="off" required value="{{ $res->ban_date }}"/>
        </div>
    </div>
    <div class="form-group row">
        <label for="note" class="col-4 col-form-label">{{ __('lang.note') }}</label>
        <div class="col-8">
            <textarea id="note" name="note" class="form-control" rows="5">{{ $res->note }}</textarea>
        </div>
    </div>
</form>
<div class="row">
    <div class="col-xl-12 col-md-12 mb-12">
        <div class="card border-left-primary border-right-primary h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div id="days"
                             class="h5 mb-0 font-weight-bold text-gray-800"> {!! '<span id="rrd" class="text-danger">'.$res->remain_days.'</span>' !!}
{{--                            @if($res->m == 0)--}}
                                روز از قرارداد باقی مانده است.
{{--                                عبارتی {!! '<span id="ry"  class="text-danger">'.$res->contract_detail->y .'</span>' !!} سال--}}
{{--                                و {!! '<span id="rm"  class="text-danger">'.$res->contract_detail->m .'</span>' !!} ماه--}}
{{--                                و {!! '<span id="rd"  class="text-danger">'.$res->contract_detail->d .'</span>' !!} روز--}}
{{--                            @elseif($res->m <> 0)--}}
{{--                                روز از قرارداد باقی مانده است. به--}}
{{--                                عبارتی {!! '<span id="rm"  class="text-danger">'.$res->m .'</span>' !!} ماه--}}
{{--                                و {!! '<span id="rd"  class="text-danger">'.$res->d .'</span>' !!} روز--}}
{{--                            @endif--}}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row mt-1">
    <div class="col-xl-12 col-md-12 mb-12">
        <div class="card border-left-success border-right-success h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div id="debts" class="h5 mb-0 font-weight-bold text-gray-800"> طلب مستاجر از کرایه
                            : {!! '<span id="rr"  class="text-danger">'.$res->remain_rent.'</span>' !!}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="row mt-1">
    <div class="col-xl-12 col-md-12 mb-12">
        <div class="card border-left-danger border-right-danger h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div id="debts" class="h5 mb-0 font-weight-bold text-gray-800"> طلب مستاجر از شارژ
                            : {!! '<span id="rc"  class="text-danger">'.$res->remain_charge.'</span>' !!}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
