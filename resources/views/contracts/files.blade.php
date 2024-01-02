<style>
    input[type="file"] {
        display: none;
    }

</style>
<div class="container">
    <div class="row mb-5 justify-content-md-center">
        <div class="col col-6">
            <button class="btn btn-success btn-block" id="system-contract"><i
                    class="fa fa-print"></i> @lang('lang.contract_system_print')</button>
        </div>
    </div>

    <div class="row mt-5 justify-content-md-center">
        <div class="col col-6">
            <button id="upload-file" class="btn btn-info btn-block"><i
                    class="fa fa-upload"></i> @lang('lang.contract_scanned_upload') </button>
        </div>
    </div>
    <form id="upfile" method="post">
        @csrf
        <input type="file" name="contract_file" id="contract_file">
    </form>

    <div class="mt-3">
        <table
            id="contract-file"
            data-toggle="table"
            data-pagination="false"
            data-search="false"
            data-locale="fa-IR"
            data-height="auto"
            data-id-field="id"
            data-click-to-select="false"
            data-show-header="false"
        >
            <thead>
            <tr>

                <th data-field="scanned_contract" data-formatter="contractFileLinkFormatter">SC</th>
                <th data-field="file_size">FS</th>
                <th data-width="10%" data-field="operate" data-formatter="operateFileFormatter"
                    data-events="operateFileEvents" data-align="center" data-click-to-select="false"></th>
            </tr>
            </thead>
        </table>
    </div>
</div>
