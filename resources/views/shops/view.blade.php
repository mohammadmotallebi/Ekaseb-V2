<table class="table table-bordered table-striped table-responsive-lg table-active table-hover text-right">
    <tbody>
    <tr>
        <td>@lang('lang.shopname')</td>
        <td>{{ $shop->shop_name }}</td>
    </tr>
    <tr>
        <td>@lang('lang.shopnumber')</td>
        <td>{{ $shop->shop_number }}</td>
    </tr>
    <tr>
        <td>@lang('lang.tel')</td>
        <td>{{ $shop->tel }}</td>
    </tr>
    <tr>
        <td>@lang('lang.mobile')</td>
        <td>{{ $shop->mobile }}</td>
    </tr>
    <tr>
        <td>@lang('lang.email')</td>
        <td>{{ $shop->email }}</td>
    </tr>
    <tr>
        <td>@lang('lang.website')</td>
        <td><a href="http://{{ $shop->website }}" target="_blank">{{ $shop->website }}</a></td>
    </tr>
    <tr>
        <td>@lang('lang.manager')</td>
        <td>{{ $shop->shop_manager }}</td>
    </tr>
    </tbody>
</table>
