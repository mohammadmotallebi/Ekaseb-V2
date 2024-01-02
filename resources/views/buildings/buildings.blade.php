@extends('app.main')
@section('content')
    {{--    {{ Auth::user()->name }}--}}
    <div class="card shadow mt-1">
        <div class="card-header py-3">
            <div class="row">

                <div class="col-xl-6 col-sm-6"><h6
                        class="font-weight-bold text-primary align-middle">{{ __('lang.buildings') }}</h6></div>

            </div>
        </div>
        <i class="fab fa-pencil-square-o"></i>
        <div class="card-body">
            <div id="bToolbar">
                @can('building_add')
                    <button type="button" class="btn btn-success btn-sm"
                            id="buildingadd">@lang('lang.addButton') </button>@endcan

            </div>
            <table class="table table-striped"
                   id="buildings"
                   data-toggle="table"
                   data-pagination="true"
                   data-search="true"
                   data-url="get-buildings-data"
                   data-locale="fa-IR"
                   data-height="470"
                   data-id-field="id"
                   data-click-to-select="true"
                   data-toolbar="#bToolbar"
            >
                <thead>
                <tr>
                    <th data-radio="true"></th>
                    <th data-sortable="true" data-field="building_name">{{ __('lang.building_name') }}</th>
                    <th data-width="10%" data-field="operate" data-formatter="operateBuildingFormatter"
                        data-events="operateBuildingEvents" data-align="center" data-click-to-select="false"></th>
                </tr>
                </thead>
            </table>
        </div>

    </div>

    @push('scripts')

        <script>
            function operateBuildingFormatter(value, row, index) {
                return [
                    `<div class='btn-group' role='group'>
                    @can('building_view')<button type='button' id='view' data-placement='top' data-toggle='tooltip' data-container='body' title='@lang('lang.view')' class='btn btn-warning btn-sm'><i class='fa fa-eye'></i></button>@endcan
                    @can('building_edit')<button type='button' id='edit' data-placement='top' data-toggle='tooltip' data-container='body' title='@lang('lang.edit')' class='btn btn-primary btn-sm'><i class='fa fa-edit'></i></button>@endcan`
                ].join('')
            }

            function operateBuildingDetailFormatter(value, row, index) {
                return [
                    `<div class='btn-group' role='group'>
                    @can('building_edit')<button type='button' id='edit' data-placement='top' data-toggle='tooltip' data-container='body' title='@lang('lang.edit')' class='btn btn-primary btn-sm'><i class='fa fa-edit'></i></button>@endcan
                    @can('building_delete') <button type='button' id='delete' data-placement='top' data-toggle='tooltip' data-container='body' title='@lang('lang.delete')' class='btn btn-danger btn-sm'><i class='fa fa-trash'></i></button>@endcan</div>`
                ].join('')
            }

            buildingRender();
        </script>

    @endpush
@endsection
