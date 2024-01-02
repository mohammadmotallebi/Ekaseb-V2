@extends('app.main')
@section('content')
    {{--    {{ Auth::user()->name }}--}}
    <div class="card shadow mt-1">
        <div class="card-header py-3">
            <div class="row">

                <div class="col-xl-6 col-sm-6"><h6
                        class="font-weight-bold text-primary align-middle">{{ __('lang.estate') }}</h6></div>

            </div>
        </div>

        <div class="card-body">
            <div id="toolbar">
                @permission('estate_add')
                    <button type="button" class="btn btn-success btn-sm"
                            id="estateadd">@lang('lang.addButton') </button>@endpermission

            </div>
            <table class="table table-striped"
                   id="estates"
                   data-toggle="table"
                   data-pagination="true"
                   data-search="true"
                   data-url="{!! route('get-estates-data') !!}"
                   data-locale="fa-IR"
                   data-height="600"
                   data-id-field="id"
                   data-click-to-select="true"
                   data-toolbar="#toolbar"
            >
                <thead>
                <tr>
                    <th data-radio="true"></th>
                    <th data-sortable="true" data-field="old_id">{{ __('lang.old_number') }}</th>
                    <th data-sortable="true" data-field="code">{{ __('lang.estate_number') }}</th>
                    <th data-sortable="true" data-field="dimension">{{ __('lang.dimension') }}</th>
                    <th data-sortable="true" data-field="floor" >{{ __('lang.floor') }}</th>
                    <th data-sortable="true" data-field="charge" data-formatter="priceFormatter">{{ __('lang.charge') .'('. charge_setting()->charge_per_months .' '. __('lang.month').')' }}</th>
                    <th data-width="10%" data-field="operate" data-formatter="operateEstateFormatter"
                        data-events="operateEstateEvents" data-align="center" data-click-to-select="false"></th>
                </tr>
                </thead>
            </table>
        </div>
    </div>

    @push('scripts')

        <script>
            function operateEstateFormatter(value, row, index) {
                return [
                    `<div class='btn-group' role='group'>
                    @permission('contract_view')<button type='button' id='cview' data-placement='top' data-toggle='tooltip' data-container='body' title='@lang('lang.contract_list')' class='btn btn-success btn-sm'><i class='fa fa-list ' aria-hidden='true'></i></button>@endpermission
                    @permission('payment_view')<button type='button' id='charges' data-placement='top' data-toggle='tooltip' data-container='body' title='@lang('lang.charge')' class='btn btn-info btn-sm'><i class='fa fa-dollar-sign'></i></button>@endpermission
                    @permission('estate_view')<button type='button' id='view' data-placement='top' data-toggle='tooltip' data-container='body' title='@lang('lang.view')' class='btn btn-warning btn-sm'><i class='fa fa-eye'></i></button>@endpermission
                    @permission('estate_edit')<button type='button' id='edit' data-placement='top' data-toggle='tooltip' data-container='body' title='@lang('lang.edit')' class='btn btn-primary btn-sm'><i class='fa fa-edit'></i></button>@endpermission
                    @permission('estate_delete') <button type='button' id='delete' data-placement='top' data-toggle='tooltip' data-container='body' title='@lang('lang.delete')' class='btn btn-danger btn-sm'><i class='fa fa-trash'></i></button>@endpermission</div>`
                ].join('')
            }

            function operateContractFormatter(value, row, index) {
                return [
                    `<div class='btn-group' role='group'>
                    @permission('contract_print')<button type='button' id='print'  title='@lang('lang.contract_print')' class='btn btn-success btn-sm'><i class='fa fa-print' aria-hidden='true'></i></button>@endpermission
                    @permission('payment_view')<button type='button' id='contract_payments'  title='@lang('lang.contract_payments')' class='btn btn-info btn-sm'><i class='fa fa-money-bill' aria-hidden='true'></i></button>@endpermission
                    @permission('contract_view')<button type='button' id='view'  title='@lang('lang.view')' class='btn btn-warning btn-sm'><i class='fa fa-eye'></i></button>@endpermission
                    @permission('contract_delete') <button type='button' id='ban' title='@lang('lang.ban')' class='btn btn-danger btn-sm'><i class='fa fa-ban'></i></button>@endpermission</div>`
                ].join('')
            }

            function operateChequeFormatter(value, row, index) {
                return [
                    `<div class='btn-group' role='group'>
                    @permission('payment_view')<button type='button' id='view' data-placement='top' data-toggle='tooltip' data-container='body' title='@lang('lang.view')' class='btn btn-warning btn-sm'><i class='fa fa-eye'></i></button>@endpermission
                    @permission('payment_edit')<button type='button' id='edit' data-placement='top' data-toggle='tooltip' data-container='body' title='@lang('lang.edit')' class='btn btn-primary btn-sm'><i class='fa fa-edit'></i></button>@endpermission
                    @permission('payment_delete') <button type='button' id='delete' data-placement='top' data-toggle='tooltip' data-container='body' title='@lang('lang.delete')' class='btn btn-danger btn-sm'><i class='fa fa-trash'></i></button>@endpermission</div>`
                ].join('')
            }

            function operateEstateDetailFormatter(value, row, index) {
                return [
                    `<div class='btn-group' role='group'>
                    @permission('estate_edit')<button type='button' id='edit' data-placement='top' data-toggle='tooltip' data-container='body' title='@lang('lang.edit')' class='btn btn-primary btn-sm'><i class='fa fa-edit'></i></button>@endpermission
                    @permission('estate_delete') <button type='button' id='delete' data-placement='top' data-toggle='tooltip' data-container='body' title='@lang('lang.delete')' class='btn btn-danger btn-sm'><i class='fa fa-trash'></i></button>@endpermission</div>`
                ].join('')
            }

            function operateFileFormatter(value, row, index) {
                return [
                    `<div class='btn-group' role='group'>
                    @permission('estate_delete') <button type='button' id='delete' data-placement='top' data-toggle='tooltip' data-container='body' title='@lang('lang.delete')' class='btn btn-danger btn-sm'><i class='fa fa-trash'></i></button>@endpermission</div>`
                ].join('')
            }
            function chequeFeeFormatter(value, row, index) {
                return Intl.NumberFormat('fa-IR').format(row.fee);
            }

            function contractRentFormatter(value, row, index) {
                return Intl.NumberFormat('fa-IR').format(row.rent_monthly);
            }

            function contractFileLinkFormatter(value, row, index) {
                return `<a href="uploads/contracts/${row.spermissionned_contract}" target="_blank">چاپ فایل اسکن شده قرارداد</a>`;
            }

            function contractDepositFormatter(value, row, index) {
                return Intl.NumberFormat('fa-IR').format(row.deposit);
            }

            function contractTotalRentFormatter(value, row, index) {
                return Intl.NumberFormat('fa-IR').format(row.total_rent);
            }

            function contractRentDiscountFormatter(value, row, index) {
                return Intl.NumberFormat('fa-IR').format(row.rent_discount);
            }

            function contractDepositDiscountFormatter(value, row, index) {
                return Intl.NumberFormat('fa-IR').format(row.deposit_discount);
            }

            function floorFormatter(value, row, index) {
                return value.floor_id
            }


            // function totalrentyearlySorter(a, b, c, d) {
            //     if (((c.rent * c.dimension * 12)) > ((d.rent * d.dimension * 12))) return 1;
            //     if (((c.rent * c.dimension * 12)) < ((d.rent * d.dimension * 12))) return -1;
            //     return 0;
            // }
            //
            // function totalpriceSorter(a, b, c, d) {
            //     if ((c.price * c.dimension) > (d.price * d.dimension)) return 1;
            //     if ((c.price * c.dimension) < (d.price * d.dimension)) return -1;
            //     return 0;
            // }

            function rowStyle(row, index) {

                if (row.active == 1) {
                    return {
                        classes: 'success'
                    }
                }
                return {
                    classes: 'danger'
                }
            }


            estatesRender();
            contractsRender();
            paymentContractRender();
        </script>

    @endpush
@endsection
