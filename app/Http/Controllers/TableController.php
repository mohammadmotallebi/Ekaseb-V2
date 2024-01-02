<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Table;
use App\Models\User;

class TableController extends Controller
{
    public function index($id)
    {
        $ts = Table::all();
        $arr = [];
        $i = 0;
        foreach ($ts as $t){
            $arr[$i] = [$t,Table::find($t->id)->permissions()->get()];
            $i++;
        }
        return view('permissions.userpermissions', ['data' => $arr, 'id' => $id]);;
    }

    public function update($id)
    {
        return User::find($id)->permissions()->sync(request('permissions'));
    }
}

