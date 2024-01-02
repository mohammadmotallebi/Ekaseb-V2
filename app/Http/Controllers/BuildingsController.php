<?php

namespace App\Http\Controllers;

use App\Models\Building;
use App\Models\BuildingDetail;
use Illuminate\Http\Request;

class BuildingsController extends Controller
{
    protected function buildingValidation()
    {
        $rules = [
            'building_name' => 'required',
        ];
        $messages = [
            'building_name.required' => __('validation.required', ['attr' => __('lang.building_name')]),
        ];
        $this->validate(request(), $rules, $messages);
    }

    public function show()
    {
        return view('buildings.buildings');
    }

    public function selectData()
    {
        $arr = array();
        $sql = Building::all();
        foreach ($sql as $s) {
            $s->text = $s->building_name;
            unset($s->building_name);
            array_push($arr, $s);
        }
        return $arr;
    }

    public function getData()
    {
        return Building::all();
    }

    public function createForm()
    {
        return view('buildings.create');
    }

    public function viewBuilding()
    {
        return view('buildings.view', ['building' => Building::whereId(\request('id'))->first()]);
    }

    public function store()
    {

        $this->buildingValidation();
        $building = new Building([
            'building_name' => \request('building_name')
        ]);

        $building->save();

        if ($building->id > 0) {
            return 1;
        }
        return 0;

    }

    public function editForm($id)
    {
        return view('buildings.edit', ['building' => Building::whereId($id)->first()]);
    }

    public function update()
    {
        $this->buildingValidation();
        $id = \request('id');

        Building::find($id)->update([
            'building_name' => \request('building_name'),
        ]);

        return 1;
    }
}
