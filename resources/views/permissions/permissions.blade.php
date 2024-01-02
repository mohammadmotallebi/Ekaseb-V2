<style>
    .list-group-item {
        user-select: none;
        text-align: right;
        margin-bottom: 0;
    }

    .list-group input[type="checkbox"] {
        display: none;
    }

    .list-group input[type="checkbox"] + .list-group-item {
        cursor: pointer;
    }

    .list-group input[type="checkbox"] + .list-group-item:before {
        content: "\2713";
        color: transparent;
        font-weight: bold;
    }

    .list-group input[type="checkbox"]:checked + .list-group-item {
        background-color: #2ecc71;
        color: #FFF;
    }

    .list-group input[type="checkbox"]:checked + .list-group-item:before {
        color: inherit;
        margin-right: 0;
        margin-left: 10px;
    }

    .list-group input[type="radio"] {
        display: none;
    }

    .list-group input[type="radio"] + .list-group-item {
        cursor: pointer;
    }

    .list-group input[type="radio"] + .list-group-item:before {
        content: "\2022";
        color: transparent;
        font-weight: bold;
        margin-right: 1em;
    }

    .list-group input[type="radio"]:checked + .list-group-item {
        background-color: #2ecc71;
        color: #FFF;
    }

    .list-group input[type="radio"]:checked + .list-group-item:before {
        color: inherit;
    }

</style>
<input type="hidden" id="role_id">
<div class="container">
    <div class="list-group">
        <form id="permissions">
            @foreach($permissions as $permission)
                <input type="checkbox" {{ ($permission->role_id == $id) ? 'checked' : ''  }} class="checkbox"
                       name="{{ $id }}" id="{{ $permission->PermissionName }}" value="{{ $permission->PermissionId }}">
                <label class="list-group-item"
                       for="{{ $permission->PermissionName }}">{{ $permission->PermissionLabel }}</label>
            @endforeach
        </form>
    </div>
</div>


