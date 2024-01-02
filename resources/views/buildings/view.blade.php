<div class="alert alert-info text-lg-center font-weight-bold">{{ $building->building_name }}</div>

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
        </tr>
        </thead>
    </table>
</div>
