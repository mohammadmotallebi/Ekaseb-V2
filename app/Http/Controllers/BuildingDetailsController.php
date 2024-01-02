<?php

namespace App\Http\Controllers;

use App\Models\BuildingDetail;
use App\Models\Contact;
use Illuminate\Http\Request;

class BuildingDetailsController extends Controller
{

    protected function buildingValidation()
    {
        $rules = [
            'contact_type_id' => 'required',
            'contact' => 'required',
        ];
        $messages = [
            'contact_type_id.required' => __('validation.required', ['attr' => __('lang.contact_type')]),
            'contact.required' => __('validation.required', ['attr' => __('lang.contact')]),
        ];
        $this->validate(request(), $rules, $messages);
    }

    public function getData($id)
    {
        $arr = array();
        $buildings = BuildingDetail::where('building_id', $id)->get();

        foreach ($buildings as $building) {
            $building->contact_type = Contact::find($building->contact_type_id)->contact;
            array_push($arr, $building);

        }
        return $arr;

    }


    public function createForm()
    {
        return view('Buildings.detail_add');
    }

    public function store()
    {
        $this->buildingValidation();

        $bd = new BuildingDetail([
            'building_id' => \request('bid'),
            'contact_type_id' => \request('contact_type_id'),
            'contact' => \request('contact'),
            'note' => \request('note'),
        ]);
        $bd->save();

        if ($bd->id > 0) {
            return 1;
        }
        return 0;
    }

    public function editForm($id)
    {
        return view('buildings.detail_edit', ['bd' => BuildingDetail::whereId($id)->first()]);
    }


    public function update()
    {
        $id = \request('id');
        $this->buildingValidation();
        BuildingDetail::find($id)->update([
            'contact_type_id' => \request('contact_type_id'),
            'contact' => \request('contact'),
            'note' => \request('note'),
        ]);
        return 1;
    }

    public function destroy()
    {
        $id = \request('id');
        BuildingDetail::whereId($id)->delete();
        if (!isset(BuildingDetail::find($id)->id)) {
            return 1;
        }
        return 0;
    }

}
