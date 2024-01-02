<table class="table table-bordered table-striped table-responsive-lg table-active table-hover text-right">
    <tbody>
    <tr>
        <td class="view-td">@lang('lang.cheque_fee')</td>
        <td>{{ number_format($cash->fee) ?? ''}}</td>
    </tr>
    <tr>
        <td class="view-td">@lang('lang.payment_date')</td>
        <td>{{ $cash->payment_date ?? ''}}</td>
    </tr>
    <tr>
        <td class="view-td">@lang('lang.payment_reason')</td>
        <td>{{ $cash->reason ?? ''}}</td>
    </tr>
    <tr>
        <td class="view-td">@lang('lang.note')</td>
        <td>{{ $cash->note ?? ''}}</td>
    </tr>
    </tbody>
</table>
