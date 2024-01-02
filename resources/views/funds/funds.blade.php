
@extends('app.main')
@section('content')
    {{--    {{ Auth::user()->name }}--}}
    <div class="card shadow mt-1">
        <div class="card-header py-3">
            <div class="row">

                <div class="col-xl-6 col-sm-6"><h6
                        class="font-weight-bold text-primary align-middle">{{ __('lang.funds') }}</h6></div>

            </div>
        </div>

        <div class="card-body">
            <div id="fund_toolbar">
    <div class='btn-group' role='group' aria-label='Basic example'>
        <button type="button" data-toggle="tooltip" data-placement="top" title="{!! __('lang.add')  !!}"
                class="btn btn-success btn-sm" id="addfund">{!! __('lang.addButton')  !!}</button>
        <button type="button" data-toggle="tooltip" data-placement="top" title="{!! __('lang.delete') !!}  "
                class="btn btn-danger btn-sm" id="deletefund">{!! __('lang.deleteButton')  !!} </button>
    </div>
</div>
<table class="table table-striped"
       id="funds"
       data-toggle="table"
       data-pagination="false"
       data-search="true"
       data-locale="fa-IR"
       data-url="get-funds-data"
       data-height="470"
       data-virtual-scroll-item-height="2"
       data-id-field="id"
       data-click-to-select="true"
       data-thead-classes="thead-light"
       data-toolbar="#fund_toolbar">
    <thead>
    <th data-sortable="true" data-field="fund_name">{{ __('lang.fund_name') }}</th>
    <th data-sortable="true" data-field="Payment" data-formatter="priceFormatter">{{ __('lang.input_cash') }}</th>
    <th data-sortable="true" data-field="Cost" data-formatter="priceFormatter">{{ __('lang.cost') }}</th>
    <th data-sortable="true" data-field="Debt" data-formatter="debtFormatter" data-sorter="debtSorter">{{ __('lang.debt_to_fund') }}</th>
    <th data-sortable="true" data-field="Credit" data-formatter="creditFormatter" data-sorter="debtSorter">{{ __('lang.creditor_to_fund') }}</th>
    <th data-width="10%" data-field="operate" data-formatter="operateFormatterFunds"
        data-events="operateEvents" data-align="center" data-click-to-select="false"></th>
    </thead>
</table>
        </div>
    </div>
    @push('scripts')
<script>
    function operateFormatterFunds(value, row, index) {
        return [
            "<div class='btn-group' role='group' aria-label='Basic example'>" +
            "<button type='button' id='payments_button' data-toggle='tooltip' data-placement='top'  title='@lang('lang.input_cash')' class='btn btn-success btn-sm'><i class='fa fa-chevron-circle-right'></i></button>" +
            "<button type='button' id='costs_button' data-toggle='tooltip' data-placement='top'  title='@lang('lang.cost')' class='btn btn-danger btn-sm'><i class='fa fa-chevron-circle-left'></i></button>" +
            "<button type='button' id='edit' data-toggle='tooltip' data-placement='top'  title='@lang('lang.edit')' class='btn btn-primary btn-sm'><i class='fa fa-edit'></i></button></div>",
        ].join('')
    }
    // function priceFormatter(value, row, index) {
    //         return Intl.NumberFormat('fa-IR').format(value);
    // }


    function debtFormatter(value, row, index) {
        let val = row.Payment -  row.Cost;
        if(val > 0){
            return 0;
        }else {
            return Intl.NumberFormat('fa-IR').format(val);
        }
    }
    function creditFormatter(value, row, index) {
        let val = row.Payment -  row.Cost;
        if(val < 0){
            return 0;
        }else {
            return Intl.NumberFormat('fa-IR').format(val);
        }
    }

    function debtSorter(a, b, c, d) {
        if (((c.Payment - c.Cost)) > ((d.Payment - d.Cost))) return 1;
        if (((c.Payment - c.Cost)) < ((d.Payment - d.Cost))) return -1;
        return 0;
    }

    fundsRender();
</script>

    @endpush
@endsection
