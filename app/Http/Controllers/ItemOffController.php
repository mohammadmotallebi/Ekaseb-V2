<?php

namespace App\Http\Controllers;

use App\Models\ItemOff;
use App\Http\Requests\StoreItemOffRequest;
use App\Http\Requests\UpdateItemOffRequest;

class ItemOffController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreItemOffRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreItemOffRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ItemOff  $itemOff
     * @return \Illuminate\Http\Response
     */
    public function show(ItemOff $itemOff)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ItemOff  $itemOff
     * @return \Illuminate\Http\Response
     */
    public function edit(ItemOff $itemOff)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateItemOffRequest  $request
     * @param  \App\Models\ItemOff  $itemOff
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateItemOffRequest $request, ItemOff $itemOff)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ItemOff  $itemOff
     * @return \Illuminate\Http\Response
     */
    public function destroy(ItemOff $itemOff)
    {
        //
    }
}
