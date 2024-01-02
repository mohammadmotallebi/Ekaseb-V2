<table class="table table-bordered table-striped table-responsive-lg table-active table-hover text-right">
    <tbody>
    <tr>
        <td class="view-td">@lang('lang.old_number')</td>
        <td>{{ $estate->old_id ?? '' }}</td>
    </tr>
    <tr>
        <td class="view-td">@lang('lang.estate_number')</td>
        <td>{{ $estate->code ?? ''}}</td>
    </tr>
    <tr>
        <td class="view-td">@lang('lang.floor')</td>
        <td>{{ getFloorName($estate->floor_id) ?? ''}}</td>
    </tr>
    <tr>
        <td class="view-td">@lang('lang.owners')</td>
        <td>
            @foreach($owners as $owner)
                {{ $owner->name . ' ' . $owner->family . ' , ' }}
            @endforeach
        </td>
    </tr>
    <tr>
        <td class="view-td">@lang('lang.dimension')</td>
        <td>{{ $estate->dimension ?? ''}}</td>
    </tr>

    <tr>
        <td class="view-td">@lang('lang.tel')</td>
        <td>{{ $estate->telephone ?? ''  }}</td>
    </tr>
    <tr>
        <td class="view-td">@lang('lang.postal')</td>
        <td>{{ $estate->postal ?? ''  }}</td>
    </tr>
    <tr>
        <td class="view-td">@lang('lang.powerid')</td>
        <td>{{ $estate->powerid ?? '' }}</td>
    </tr>
    </tbody>
</table>

