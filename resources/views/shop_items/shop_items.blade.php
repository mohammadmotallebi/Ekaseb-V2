@extends('app.main')
@section('title') {{ __('lang.items') }} @endsection

@section('content')
    <div class="card shadow">
        <div class="card-header py-3">
            <div class="row">

                <div class="col-xl-6 col-sm-6"><h6
                        class="font-weight-bold text-primary align-middle">@lang('lang.items')</h6></div>


            </div>
        </div>
        <div class="card-body">
            <div id="toolbar">
                <div class='btn-group' role='group'>
                    <button type="button" data-toggle="tooltip" data-placement="top" title="{!! __('lang.add')  !!}"
                            class="btn btn-success btn-sm" id="additem">{!! __('lang.addButton')  !!}</button>
                    <button type="button" data-toggle="tooltip" data-placement="top" title="{!! __('lang.delete') !!}  "
                            class="btn btn-danger btn-sm" id="deleteitems">{!! __('lang.deleteButton')  !!} </button>
                </div>

            </div>
            <table
                class="table table-striped"
                id="items"
                data-toggle="table"
                data-pagination="true"
                data-search="true"
                data-url="get-shop-items-data"
                data-locale="fa-IR"
                data-height="470"
                data-id-field="id"
                data-thead-classes="thead-light"
                data-click-to-select="true"
                data-toolbar="#toolbar"
                data-server-sort="true"
                data-alignment-select-control-options="left"


            >
                <thead>
                <th data-checkbox="true"></th>
                <th data-sortable="true" data-filter-control="input"
                    data-filter-control-placeholder="{{ __('lang.item') }}" data-field="item_name"></th>
                <th data-sortable="true" data-field="price"
                    data-formatter="priceFormatter">{{ __('lang.price') }}</th>
                <th data-sortable="true" data-filter-control="select" data-filter-control-placeholder="فروشگاه"
                    data-field="shop_name"></th>
                <th data-sortable="true" data-filter-control="select" data-filter-control-placeholder="دسته بندی"
                    data-field="item_category_name"></th>
                <th data-sortable="true" data-field="Total">{{ __('lang.count') }}</th>
                <th data-sortable="true" data-field="Remain">{{ __('lang.remain') }}</th>
                <th data-sortable="true" data-field="score">{{ __('lang.score') }}</th>
                <th data-sortable="true" data-field="credit"
                    data-formatter="priceFormatter">{{ __('lang.credit') }}</th>
                <th data-width="10%" data-click-to-select="false" data-field="operate"
                    data-formatter="operateFormatter" data-events="operateEvents" data-align="center"></th>
                </thead>
            </table>
        </div>
    </div>

    @push('scripts')
        <script>
            function operateFormatter(value, row, index) {
                return [
                    "<div class='btn-group' role='group' aria-label='Basic example'>" +
                    {{--"<button type='button' id='minus' data-toggle='tooltip' data-placement='top'  title='@lang('lang.minus')' class='btn btn-warning btn-sm'><i class='fa fa-arrow-alt-circle-down'></i></button>" +--}}
                        "@can('shop-item_add') <button type='button' id='add' data-toggle='tooltip' data-placement='top'  title='@lang('lang.add')' class='btn btn-info btn-sm'><i class='fa fa-arrow-alt-circle-up'></i></button>@endcan" +
                    "@can('shop-item_edit') <button type='button' id='itemedit' data-toggle='tooltip' data-placement='top'  title='@lang('lang.edit')' class='btn btn-primary btn-sm'><i class='fa fa-edit'></i></button>@endcan" +
                    "@can('shop-item_delete') <button type='button' id='itemdelete' data-toggle='tooltip' data-placement='top' title='@lang('lang.delete')' class='btn btn-danger btn-sm'><i class='fa fa-trash'></i></button></div>@endcan",
                ].join('')
            }


            shopItemsRender();
        </script>
    @endpush
@endsection


