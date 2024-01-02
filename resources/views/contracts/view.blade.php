<table class="table table-bordered table-striped table-responsive-lg table-active table-hover text-right">
    <tbody>
    <tr>
        <td class="view-td">{{ __('lang.renter_name') }}</td>
        <td>{{ $res->renter_name }}</td>
    </tr>
    <tr>
        <td class="view-td">{{ __('lang.start_date') }}</td>
        <td>{{ $res->start_date }}</td>
    </tr>
    <tr>
        <td class="view-td">{{ __('lang.end_date') }}</td>
        <td>{{ $res->end_date }}</td>
    </tr>
    <tr>
        <td class="view-td">{{ __('lang.remain_days') }}</td>
        <td>{{ $res->remain_days }}</td>
    </tr>
    <tr>
        <td class="view-td">{{ __('lang.deposit') }}</td>
        <td>{{ number_format($res->deposit) }}</td>
    </tr>
    <tr>
        <td class="view-td">{{ __('lang.rent_price_meter') }}</td>
        <td>{{ number_format($res->rent) }}</td>
    </tr>
    <tr>
        <td class="view-td">{{ __('lang.rent_price_monthly') }}</td>
        <td>{{ number_format($res->rent_monthly) }}</td>
    </tr>
    <tr>
        <td class="view-td">{{ __('lang.rent_price_yearly') }}</td>
        <td>{{ $res->total_rent }}</td>
    </tr>
    <tr>
        <td class="view-td">{{ __('lang.deposit_discount') }}</td>
        <td>{{ number_format($res->deposit_discount) }}</td>
    </tr>
    <tr>
        <td class="view-td">{{ __('lang.rent_discount') }}</td>
        <td>{{ number_format($res->rent_discount) }}</td>
    </tr>
    <tr>
        <td class="view-td">{{ __('lang.deactivate_date') }}</td>
        <td>{{ $res->ban_date }}</td>
    </tr>
    <tr>
        <td class="view-td">{{ __('lang.deactivate_reason') }}</td>
        <td>{{ $res->ban_reason }}</td>
    </tr>
    </tr>
    @unless($res->active)
        <tr>
            <td colspan="2"> قرار داد در تاریخ {!! '<b class="text-danger">'.$res->ban_date.'</b>' !!} با
                دلیل {!!  '<b class="text-danger">'.$res->ban_reason.'</b>' !!} لغو شد و
                مبلغ {!! '<b class="text-danger">'.number_format($res->remain_rent).'</b>' !!}
                به {!! '<b class="text-danger">'.$res->renter_name.'</b>' !!} پرداخت شد.
            </td>
        </tr>
    @endunless


    </tbody>
</table>
<div class="row">
    <div class="col-xl-4 col-md-6 mb-4">
        <div class="card border-left-primary border-right-primary h-100 py-2">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div
                            class="text-s font-weight-bold text-success text-uppercase mb-1">{{ __('lang.deposit') }}</div>
                        <div id="tdeposit"
                             class="h5 mb-0 font-weight-bold text-gray-800">{{ number_format($res->deposit) }}</div>
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
                        <div id="mrent"
                             class="h5 mb-0 font-weight-bold text-gray-800">{{ number_format($res->rent_monthly - $res->rent_discount) }}</div>
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
                        <div id="yrent"
                             class="h5 mb-0 font-weight-bold text-gray-800">{{ number_format(($res->rent_monthly - $res->rent_discount) * 12) }}</div>
                    </div>
                    <div class="col-auto">
                        <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
