<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;

class RolesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('roles.roles');
    }

    public function anyData()
    {
        return Role::all();

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('roles.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $role = new Role([
            'name' => $request->get('name'),
            'label' => $request->get('label'),
            'access_to_app' => (\request('access_to_app') === 'on') ? 1 : 0,
        ]);
        $role->save();
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
    public function edit($id)
    {
        return view('roles.edit', ['role' => Role::whereId($id)->first()]);
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
        Role::whereId($request->id)->update([
            'name' => $request->get('name'),
            'label' => $request->get('label'),
            'access_to_app' => (\request('access_to_app') === 'on') ? 1 : 0,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        Role::whereId($request->id)->delete();
    }

    public function destroySelections(Request $request)
    {
        $id = $request->id;
        Role::whereIn('id', $id)->delete();
    }
}
