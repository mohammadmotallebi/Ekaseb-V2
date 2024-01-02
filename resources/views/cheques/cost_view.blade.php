<table class="table table-bordered table-striped table-responsive-lg table-active table-hover text-right">
    <tbody>
    <tr>
        <td class="view-td">@lang('lang.cheque_number')</td>
        <td>{{ $cheque->cheque_number ?? '' }}</td>
    </tr>
    <tr>
        <td class="view-td">@lang('lang.cheque_user')</td>
        <td>{{ $cheque->username ?? '' }}</td>
    </tr>
    <tr>
        <td class="view-td">@lang('lang.cheque_fee')</td>
        <td>{{ number_format($cheque->fee) ?? ''}}</td>
    </tr>
    <tr>
        <td class="view-td">@lang('lang.cheque_date')</td>
        <td>{{ $cheque->cheque_date ?? ''}}</td>
    </tr>
    <tr>
        <td class="view-td">@lang('lang.bank_name')</td>
        <td>{{ $cheque->bank_name ?? ''}}, شعبه {{ $cheque->bank_branch ?? ''}}</td>
    </tr>
    <tr>
        <td class="view-td">@lang('lang.account_number')</td>
        <td>{{ $cheque->account_number ?? ''}}</td>
    </tr>
    <tr>
        <td class="view-td">@lang('lang.payment_reason')</td>
        <td>{{ $cheque->reason ?? ''}}</td>
    </tr>
    <tr>
        <td class="view-td">@lang('lang.note')</td>
        <td>{{ $cheque->payment_note ?? ''}}</td>
    </tr>
    </tbody>
</table>
