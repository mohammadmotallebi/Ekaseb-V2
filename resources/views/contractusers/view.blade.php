<table class="table table-bordered table-striped table-responsive-lg table-active table-hover text-right">
    <tbody>
    <tr>
        <td>@lang('lang.identity')</td>
        <td>{{ $user->identity_code }}</td>
    </tr>
    <tr>
        <td>@lang('lang.name')</td>
        <td>{{ $user->name . ' ' . $user->family }}</td>
    </tr>
    <tr>
        <td>@lang('lang.gender')</td>
        <td>{{ $gender }}</td>
    </tr>
    <tr>
        <td>@lang('lang.father')</td>
        <td>{{ $user->father }}</td>
    </tr>
    <tr>
        <td>@lang('lang.birthday')</td>
        <td>{{ $user->birthday }}</td>
    </tr>
    <tr>
        <td>@lang('lang.mobile')</td>
        <td>{{ $user->mobile }}</td>
    </tr>
    <tr>
        <td>@lang('lang.mobile_back')</td>
        <td>{{ $user->mobile_back }}</td>
    </tr>
    <tr>
        <td>@lang('lang.tel')</td>
        <td>{{ $user->tel }}</td>
    </tr>
    <tr>
        <td>@lang('lang.address')</td>
        <td>{{ $user->address }}</td>
    </tr>
    </tbody>
</table>
