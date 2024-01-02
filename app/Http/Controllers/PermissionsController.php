<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Role;


class PermissionsController extends Controller
{

    public function index($id)
    {
        $permissions = DB::select('SELECT        permissions.id as PermissionId,permissions.name as PermissionName,
              permissions.label as PermissionLabel, roles.name AS RoleName, roles.label AS RoleLabel,
              permission_role.permission_id, permission_role.role_id
FROM            permission_role INNER JOIN
                         roles ON permission_role.role_id = roles.id RIGHT OUTER JOIN
                         permissions ON permission_role.permission_id = permissions.id');

        return view('permissions.permissions', ['permissions' => $permissions, 'id' => $id]);
    }

    public function update(Request $request, $id)
    {
        Role::find($id)->permissions()->sync($request->get('ids'));
    }

    public function getUserPermissions()
    {

        return DB::table('permissions')
            ->join('permission_user', 'permissions.id', '=', 'permission_user.permission_id')
            ->join('users', 'permission_user.user_id', '=', 'users.id')
            ->select('users.id', 'permission_user.permission_id', 'permissions.name')
            ->where('users.id', CurrentUserID())
            ->get();

    }
}

