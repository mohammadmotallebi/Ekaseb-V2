<?php

namespace App\Http\Controllers;

use App\Models\Floor;
use Illuminate\Http\Request;

class FloorsController extends Controller
{
    public function getIndex()
    {

        return view('floors.floor');
    }

    public function anyData()
    {
        return Floor::all();

    }

    public function selectData()
    {
        $arr = array();
        $sql = Floor::all();
        foreach ($sql as $s) {
            $s->text = $s->floor;
            unset($s->floor);
            array_push($arr, $s);
        }
        return $arr;
    }

    public function create()
    {
        return view('floors.create');
    }

    public function store(Request $request)
    {
        $new = new Floor([
            'floor' => $request->get('floor'),
        ]);
        $new->save();
        if ($new->id > 0) {
            reseed('floors', $new->id);
            return 1;
        } else {
            return 0;
        }
    }


    public function show($id)
    {
        //
    }

    public function edit()
    {

        return view('floors.edit');
    }

    public function update(Request $request)
    {
        return Floor::whereId($request->id)->update([
            'floor' => $request->get('floor')
        ]);

    }

    public function destroy(Request $request)
    {
        $id = $request->id;
        return Floor::whereId($id)->delete();
    }
}
