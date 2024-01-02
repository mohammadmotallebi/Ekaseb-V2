@extends('app.main')
@section('content')
    {{--    {{ Auth::user()->name }}--}}
    <div class="card shadow mt-1">
        <div class="card-header py-3">
            <div class="row">

                <div class="col-xl-6 col-sm-6"><h6
                        class="font-weight-bold text-primary align-middle">@lang('lang.users')</h6></div>

            </div>
        </div>

        <div class="card-body">
            <div id="toolbar">
                @permission('user_add')
                    <button type="button" class="btn btn-info btn-sm"
                            id="userGroupEdit">@lang('lang.refreshButton') </button>
                    <button type="button" class="btn btn-success btn-sm" id="useradd">@lang('lang.addButton') </button>
                @endpermission
            </div>
            <table class="table table-striped"
                   id="users"
                   data-toggle="table"
                   data-pagination="true"
                   data-search="true"
                   data-url="{!! route('users') !!}"
                   data-locale="fa-IR"
                   data-height="470"
                   data-id-field="id"
                   data-click-to-select="true"
                   data-toolbar="#toolbar"
            >
                <thead>
                <tr>
                    <th data-checkbox="true"></th>
                    <th data-sortable="true" data-field="identity_code">@lang('lang.identity')</th>
                    <th data-sortable="true" data-field="name" data-formatter="nameFormatter">@lang('lang.name')</th>
                    <th data-sortable="true" data-field="birthday">@lang('lang.birthday')</th>
                    <th data-sortable="true" data-field="mobile">@lang('lang.mobile')</th>
                    <th data-sortable="true" data-field="email">@lang('lang.email')</th>
                    <th data-width="10%" data-field="operate" data-formatter="operateFormatter"
                        data-events="operateEvents" data-align="center" data-click-to-select="false"></th>
                </tr>
                </thead>
            </table>
        </div>

    </div>

    @push('scripts')

        <script>
            function operateFormatter(value, row, index) {
                return [
                    `<div class='btn-group' role='group' aria-label='Basic example'>
                    @permission('user_permission')<button type='button' ${(row.wild_card === '1') ? 'id=permission' : ''} data-placement='top' ${(row.wild_card === '0') ? 'disabled' : ''} data-container='body' title='@lang('lang.permission')' class='btn btn-info btn-sm'><i class='fa-solid fa-user-gear'></i></button>@endpermission
                    @permission('user_view')<button type='button' id='view' data-placement='top' data-container='body'  title='@lang('lang.view')' class='btn btn-warning btn-sm'><i class='fa fa-eye'></i></button>@endpermission
                    @permission('user_edit')<button type='button' id='edit' data-placement='top' data-container='body' title='@lang('lang.edit')' class='btn btn-primary btn-sm'><i class='fa fa-edit'></i></button>@endpermission
                    @permission('user_delete') <button type='button' id='delete' data-placement='top' data-container='body' title='@lang('lang.delete')' class='btn btn-danger btn-sm'><i class='fa fa-trash'></i></button>@endpermission</div>`,
                ].join('')
            }

            function nameFormatter(value, row, index) {
                if (row.name === null) {
                    row.name = ''
                }
                if (row.family === null) {
                    row.family = ''
                }
                return row.name + " " + row.family;
            }

            usersRender();
        </script>

    @endpush
@endsection


