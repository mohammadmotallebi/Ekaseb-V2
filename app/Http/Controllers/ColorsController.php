<?php

namespace App\Http\Controllers;

use App\Imports\ColorsImport;
use App\Models\Color;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Facades\Excel;

class ColorsController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function getIndex()
    {

        return view('colors.colors');
    }

    public function anyData()
    {
        return Color::all();

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('colors.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $color = new Colors([
            'color_name' => $request->get('color_name'),
        ]);
        $color->save();
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit()
    {

        return view('colors.edit');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        Color::whereId($request->id)->update([
            'color_name' => $request->get('color_name')
        ]);
    }


    public function destroy(Request $request)
    {
        $id = $request->id;
        Color::whereId($id)->delete();
    }

    public function destroySelections(Request $request)
    {
        $id = $request->id;
        Color::whereIn('id', $id)->delete();
    }

    public function import()
    {
        Excel::import(new ColorsImport, 'color.xlsx', 'upload');
    }
}
