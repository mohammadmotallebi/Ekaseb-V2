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
        <td>@lang('lang.ref_user')</td>
        <td>{{ $ref_user  }}</td>
    </tr>
    <tr>
        <td>@lang('lang.tel')</td>
        <td>{{ $user->tel }}</td>
    </tr>
    <tr>
        <td>@lang('lang.city')</td>
        <td>{{ $city }}</td>
    </tr>
    <tr>
        <td>@lang('lang.state')</td>
        <td>{{ $state }}</td>
    </tr>
    <tr>
        <td>@lang('lang.address')</td>
        <td>{{ $user->address }}</td>
    </tr>
    <tr>
        <td>@lang('lang.email')</td>
        <td>{{ $user->email }}</td>
    </tr>
    <tr>
        <td>@lang('lang.job')</td>
        <td>{{ $job }}</td>
    </tr>
    <tr>
        <td>@lang('lang.father')</td>
        <td>{{ $user->father_name }}</td>
    </tr>
    <tr>
        <td>@lang('lang.wedding_date')</td>
        <td>{{ $user->wedding_date }}</td>
    </tr>
    <tr>
        <td>@lang('lang.weight')</td>
        <td>{{ $user->weight }}</td>
    </tr>
    <tr>
        <td>@lang('lang.height')</td>
        <td>{{ $user->height }}</td>
    </tr>
    <tr>
        <td>@lang('lang.int_color')</td>
        <td>{{ $color }}</td>
    </tr>
    </tbody>
</table>
