@extends('app.main')
@section('content')
    {{--    {{ Auth::user()->name }}--}}
    <div class="card shadow mt-1">
        <div class="card-header py-3">
            <div class="row">

                <div class="col-xl-6 col-sm-6"><h6
                        class="font-weight-bold text-primary align-middle">{{ __('lang.input_cash') }}</h6></div>

            </div>
        </div>
        <div class="card-body">
            <div id="costToolbar">
                @can('contract_add')
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-success btn-sm"
                                id="chequeadd">@lang('lang.addChequeButton') </button>
                        <button type="button" class="btn btn-primary btn-sm"
                                id="cashadd">@lang('lang.addCashButton') </button>
                    </div>
                @endcan

            </div>
            <table class="table"
                   id="costs"
                   data-toggle="table"
                   data-pagination="true"
                   data-url="{!! route('get-costs-data') !!}"
                   data-search="true"
                   data-locale="fa-IR"
                   data-height="470"
                   data-id-field="id"
                   data-click-to-select="true"
                   data-toolbar="#costToolbar"
            >
                <thead>
                <tr>
                    <th data-radio="true"></th>
                    <th data-sortable="true" data-width="100" data-field="cost_method_farsi">{{ __('lang.cost_method_farsi') }}</th>
                    <th data-sortable="true" data-field="cost_type">{{ __('lang.cost_type') }}</th>
                    <th data-sortable="true" data-width="100" data-field="cost_date">{{ __('lang.cost_date') }}</th>
                    <th data-sortable="true" data-width="100" data-field="price" data-formatter="priceFormatter">{{ __('lang.price') }}</th>
                    <th data-sortable="true" data-field="note">{{ __('lang.note') }}</th>
                    <th data-width="10%" data-field="operate" data-formatter="operateCostFormatter"
                        data-events="operateCostEvents" data-align="center" data-click-to-select="false"></th>
                </tr>
                </thead>
            </table>
        </div>
    </div>

    @push('scripts')

        <script>
            function operateCostFormatter(value, row, index) {
                return [
                    "<div class='btn-group' role='group'>" +
                    "@can('payment_view')<button type='button' id='view' data-placement='top' data-toggle='tooltip' data-container='body' title='@lang('lang.view')' class='btn btn-warning btn-sm'><i class='fa fa-eye'></i></button>@endcan" +
                    "@can('payment_edit')<button type='button' id='edit' data-placement='top' data-toggle='tooltip' data-container='body' title='@lang('lang.edit')' class='btn btn-primary btn-sm'><i class='fa fa-edit'></i></button>@endcan" +
                    "@can('payment_delete') <button type='button' id='delete' data-placement='top' data-toggle='tooltip' data-container='body' title='@lang('lang.delete')' class='btn btn-danger btn-sm'><i class='fa fa-trash'></i></button>@endcan</div>",
                ].join('')
            }


            function chequeFeeFormatter(value, row, index) {
                return Intl.NumberFormat('fa-IR').format(row.fee);
            }

            costRender();

        </script>

    @endpush
@endsection
