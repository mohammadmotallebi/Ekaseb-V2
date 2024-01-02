@extends('app.main')
@section('content')

    <div class="card shadow mt-1">
        <div class="card-header py-3">
            <div class="row">

                <div class="col-xl-6 col-sm-6"><h6
                        class="font-weight-bold text-primary align-middle">@lang('lang.cards')</h6></div>

            </div>
        </div>
        <div class="card-body">
            <div id="toolbar">
                <button type="button" data-toggle="tooltip" data-placement="top" title="@lang('lang.add')"
                        class="btn btn-success btn-sm" id="cardadd">@lang('lang.addButton')</button>
            </div>
            <table class="table table-striped"
                   id="shops"
                   data-toggle="table"
                   data-pagination="true"
                   data-search="true"
                   data-url="{!! route('cards') !!}"
                   data-locale="fa-IR"
                   data-thead-classes="thead-light"
                   data-height="470"
                   data-virtual-scroll-item-height="2"
                   data-id-field="id"
                   data-click-to-select="true"
                   data-toolbar="#toolbar">
                <thead>
                <th data-checkbox="true"></th>
                <th data-sortable="true" data-field="card_number">{{ __('lang.card') }}</th>
                <th data-sortable="true" data-field="shop_name">{{ __('lang.shopname') }}</th>
                <th data-sortable="true" data-field="full_name">{{ __('lang.user') }}</th>
                <th data-width="10%" data-sortable="true" data-field="status" data-align="center"
                    data-formatter="statusFormatter">{{ __('lang.status') }}</th>
                <th data-width="10%" data-field="operate" data-formatter="operateFormatter"
                    data-events="operateEvents" data-align="center" data-click-to-select="false"></th>
                </thead>
            </table>
        </div>
    </div>

    @push('scripts')
        <script>
            function operateFormatter(value, row, index) {
                return [
                    "<button type='button' id='changeStatus' data-toggle='tooltip' data-placement='top' title='@lang('lang.items')' class='btn btn-warning btn-sm'><i class='fa fa-sync'></i></button>"
                ].join('')
            }

            cardsRender();
        </script>
    @endpush

@endsection
