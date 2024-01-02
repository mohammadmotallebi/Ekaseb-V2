<table class="table table-bordered table-striped table-responsive-lg table-active table-hover text-right">
    <tbody>
    <tr>
        <td class="view-td">@lang('lang.price')</td>
        <td>{{ number_format($cash->price) ?? ''}}</td>
    </tr>
    <tr>
        <td class="view-td">@lang('lang.cost_date')</td>
        <td>{{ $cash->cost_date ?? ''}}</td>
    </tr>
    <tr>
        <td class="view-td">@lang('lang.cost_type')</td>
        <td>{{ $cash->cost_type ?? ''}}</td>
    </tr>
    <tr>
        <td class="view-td">@lang('lang.note')</td>
        <td>{{ $cash->note ?? ''}}</td>
    </tr>
    </tbody>
</table>
