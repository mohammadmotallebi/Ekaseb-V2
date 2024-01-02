<form method="post" id="buildingForm" class="was-validated" autocomplete="off">
    <div class="form-group row">
        <label for="building_name" class="col-2 col-form-label">{{ __('lang.building_name') }}</label>
        <div class="col-8">
            <input id="building_name" name="building_name" value="{{ $building->building_name }}" type="text"
                   class="form-control" autocomplete="off" required>
        </div>
    </div>
</form>
<div id="cToolbar">
    @can('building_add')
        <button type="button" class="btn btn-success btn-sm" id="detailAdd">@lang('lang.addButton') افزودن گزینه تماس
        </button>@endcan

</div>
<div class="mt-3">
    <table class="table"
           id="buildingDetails"
           data-toggle="table"
           data-pagination="false"
           data-search="false"
           data-locale="fa-IR"
           data-height="auto"
           data-id-field="id"
           data-click-to-select="true"
           data-single-select="true"
           data-show-header="false"
    >
        <thead>
        <tr>
            <th data-sortable="true" data-field="contact_type"></th>
            <th data-sortable="true" data-field="contact"></th>
            <th data-sortable="true" data-field="note"></th>
            <th data-width="10%" data-field="operate" data-formatter="operateBuildingDetailFormatter"
                data-events="operateBuildingDetailEvents" data-align="center" data-click-to-select="false"></th>
        </tr>
        </thead>
    </table>
</div>
