@extends('app.main')
@section('title',__('lang.roles'))
@section('content')
    <div class="card shadow mt-1">
        <div class="card-header py-3">
            <div class="row">

                <div class="col-xl-6 col-sm-6"><h6
                        class="font-weight-bold text-primary align-middle">{{ __('lang.roles') }}</h6></div>


            </div>
        </div>
        <div class="card-body">
            <div id="role_toolbar">
                <div class='btn-group' role='group' aria-label='Basic example'>
                    <button type="button" data-toggle="tooltip" data-placement="top"
                            title="{!! __('lang.permissions')  !!}"
                            class="btn btn-info btn-sm" id="permissionList">{!! __('lang.permissions')  !!}</button>
                    <button type="button" data-toggle="tooltip" data-placement="top" title="{!! __('lang.add')  !!}"
                            class="btn btn-success btn-sm" id="addrole">{!! __('lang.addButton')  !!}</button>
                    <button type="button" data-toggle="tooltip" data-placement="top" title="{!! __('lang.delete') !!}  "
                            class="btn btn-danger btn-sm" id="deleteroles">{!! __('lang.deleteButton')  !!} </button>
                </div>
            </div>

            <table class="table table-striped"
                   id="roles"
                   data-toggle="table"
                   data-pagination="false"
                   data-search="true"
                   data-locale="fa-IR"
                   data-url="get-roles-data"
                   data-height="470"
                   data-virtual-scroll-item-height="2"
                   data-id-field="id"
                   data-click-to-select="true"
                   data-thead-classes="thead-light"
                   data-toolbar="#role_toolbar">
                <thead>
                <th data-radio="true"></th>
                <th data-sortable="true" data-field="name">{{ __('lang.role.name') }}</th>
                <th data-sortable="true" data-field="label">{{ __('lang.role.label') }}</th>
                <th data-width="10%" data-field="operate" data-formatter="operateFormatterRoles"
                    data-events="operateEvents" data-align="center" data-click-to-select="false"></th>
                </thead>
            </table>

        </div>
    </div>
    @push('scripts')
        <script>
            function operateFormatterRoles(value, row, index) {
                return [
                    "<div class='btn-group' role='group' aria-label='Basic example'>" +
                    "<button type='button' id='permission' data-toggle='tooltip' data-placement='top'  title='@lang('lang.permission')' class='btn btn-success btn-sm'><i class='fa fa-user'></i></button>" +
                    "<button type='button' id='edit' data-toggle='tooltip' data-placement='top'  title='@lang('lang.edit')' class='btn btn-primary btn-sm'><i class='fa fa-edit'></i></button>" +
                    "<button type='button' id='delete' data-toggle='tooltip' data-placement='top' title='@lang('lang.delete')' class='btn btn-danger btn-sm'><i class='fa fa-trash'></i></button></div>",
                ].join('')
            }

            rolesRender();

        </script>
    @endpush
@endsection
