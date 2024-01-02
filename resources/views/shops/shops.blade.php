@extends('app.main')
@section('title',trans('lang.shops'))

@section('content')

    <form id="importExcel" method="post" style="display: none">
        @csrf
        <input type="file" name="excel_file" id="excel_file">

    </form>
    <form id="importItemExcel" method="post" style="display: none">
        @csrf
        <input type="file" name="item-excel_file" id="item-excel_file">

    </form>
    <div class="card shadow mt-1">
        <div class="card-header py-3">
            <div class="row">

                <div class="col-xl-6 col-sm-6"><h6
                        class="font-weight-bold text-primary align-middle">@lang('lang.shops')</h6></div>


            </div>
        </div>
        <div class="card-body">

            <div id="toolbar">
                <div class='btn-group' role='group'>
                <button type="button" data-toggle="tooltip" data-placement="top" title="@lang('lang.add')"
                        class="btn btn-success btn-sm" id="shopadd">@lang('lang.addButton')</button>
                <button type="button" data-toggle="tooltip" data-placement="top" title="@lang('lang.add')"
                        class="btn btn-info btn-sm" id="excel"><i class="fas fa-file-excel"></i></button>
                </div>

            </div>

            <table class="table table-striped"
                   id="shops"
                   data-toggle="table"
                   data-pagination="true"
                   data-search="true"
                   data-url="{!! route('shops') !!}"
                   data-locale="fa-IR"
                   data-height="300"
                   data-virtual-scroll-item-height="2"
                   data-id-field="id"
                   data-click-to-select="true"
                   data-thead-classes="thead-light"
                   data-toolbar="#toolbar">
                <thead>
                <th data-radio="true"></th>
                <th data-sortable="true" data-field="shop_name">@lang('lang.shopname')</th>
                <th data-sortable="true" data-field="shop_unique_id">@lang('lang.unique')</th>
                <th data-sortable="true" data-field="website" data-formatter="linkFormatter">@lang('lang.website')</th>
                <th data-width="10%" data-field="operate" data-formatter="operateFormatter"
                    data-events="operateEvents" data-align="center"></th>
                </thead>
            </table>
            <hr>
            <div id="toolbarItems">
                <div class='btn-group' role='group' aria-label='Basic example'>
{{--                    <button type="button" data-toggle="tooltip" data-placement="top"--}}
{{--                            title="{!! __('lang.addMulti')  !!}"--}}
{{--                            class="btn btn-info btn-sm"--}}
{{--                            id="addMultiChildItem">{!! __('lang.addMultiButton')  !!}</button>--}}
                    <button type="button" data-toggle="tooltip" data-placement="top" title="{!! __('lang.edit')  !!}"
                            class="btn btn-warning btn-sm"
                            id="editMultiChildItem">{!! __('lang.editButton')  !!}</button>
                    <button type="button" data-toggle="tooltip" data-placement="top" title="{!! __('lang.add')  !!}"
                            class="btn btn-success btn-sm" id="addChildItem">{!! __('lang.addButton')  !!}</button>
                    <button type="button" data-toggle="tooltip" data-placement="top" title="{!! __('lang.delete') !!}  "
                            class="btn btn-danger btn-sm"
                            id="deleteChildItems">{!! __('lang.deleteButton')  !!} </button>
                    <button type="button" data-toggle="tooltip" data-placement="top" title="@lang('lang.add')"
                            class="btn btn-info btn-sm" id="item-excel"><i class="fas fa-file-excel"></i></button>
                </div>

            </div>
            <table
                class="table table-striped"
                id="child"
                data-toggle="table"
                data-pagination="true"
                data-search="true"
                data-locale="fa-IR"
                data-height="300"
                data-id-field="id"
                data-click-to-select="true"
                data-thead-classes="thead-light"
                data-toolbar="#toolbarItems"
                data-detail-formatter="detailFormatter"

            >
                <thead>
                <tr>
                    <th data-checkbox="true"></th>
                    <th data-sortable="true" data-field="item_name">@lang('lang.item')</th>
                    <th data-sortable="true" data-field="price" data-formatter="priceFormatter">@lang('lang.price')</th>
                    <th data-sortable="true" data-field="credit" data-formatter="priceFormatter">@lang('lang.discount')</th>
                    <th data-sortable="true" data-field="score" >@lang('lang.score')</th>
                    <th data-sortable="true" data-field="TotalItem">{{ __('lang.count') }}</th>
                    <th data-sortable="true" data-field="Sold">{{ __('lang.sold') }}</th>
                    <th data-sortable="true" data-field="Remain">{{ __('lang.remain') }}</th>
                    <th data-sortable="true" data-field="Approve">{{ __('lang.not_approved') }}</th>
                    <th data-width="10%" data-click-to-select="false" data-field="operate"
                        data-formatter="childOperateFormatter" data-events="childOperateEvents"
                        data-align="center"></th>
                </tr>
                </thead>
            </table>
        </div>
    </div>

    @push('scripts')
        <script>
            $child = $('#child');

            function operateFormatter(value, row, index) {
                return [
                    "<div class='btn-group' role='group' aria-label='Basic example'>" +
                    "<button type='button' id='view' data-toggle='tooltip' data-placement='top'  title='@lang('lang.view')' class='btn btn-warning btn-sm'><i class='fa fa-eye'></i></button>" +
                    "<button type='button' id='edit' data-toggle='tooltip' data-placement='top'  title='@lang('lang.edit')' class='btn btn-primary btn-sm'><i class='fa fa-edit'></i></button>" +
                    "<button type='button' id='delete' data-toggle='tooltip' data-placement='top' title='@lang('lang.delete')' class='btn btn-danger btn-sm'><i class='fa fa-trash'></i></button></div>",
                ].join('')
            }

            function childOperateFormatter(value, row, index) {
                return [
                    "<div class='btn-group' role='group' aria-label='Basic example'>" +
                    "<button type='button' id='sold' data-toggle='tooltip' data-placement='top'  title='@lang('lang.sold')' class='btn btn-info btn-sm'><i class='fa fa-dollar-sign'></i></button>" +
                    "<button type='button' id='items' data-toggle='tooltip' data-placement='top'  title='@lang('lang.items')' class='btn btn-success btn-sm'><i class='fa fa-list'></i></button>" +
                    "<button type='button' id='itemedit' data-toggle='tooltip' data-placement='top'  title='@lang('lang.edit')' class='btn btn-primary btn-sm'><i class='fa fa-edit'></i></button>" +
                    "<button type='button' id='itemdelete' data-toggle='tooltip' data-placement='top' title='@lang('lang.delete')' class='btn btn-danger btn-sm'><i class='fa fa-trash'></i></button></div>",
                ].join('')
            }

            shopsRender();
        </script>
    @endpush
@endsection



