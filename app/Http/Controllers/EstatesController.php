<?php

namespace App\Http\Controllers;

use App\Models\Contract;
use App\Models\ContractUser;
use App\Models\Estate;
use App\Models\EstateDetail;


class EstatesController extends Controller
{

    public function viewEstate($id)
    {

        return view('estates.view', ['estate' => Estate::whereId($id)->first(), 'owners' => Estate::find($id)->contractUsers()->get()]);
    }

    public function show()
    {
        return view('estates.estates');
    }

    public function getData()
    {
        $estates = Estate::all();
        $arr = array();
        foreach ($estates as $estate) {
            $estate->floor = getFloorName($estate->floor_id);
            $estate->charge = (intval(charge_setting()->charge_price) * intval($estate->dimension)) * charge_setting()->charge_per_months;
            array_push($arr, $estate);
        }
        return $arr;
    }

    public function createForm()
    {
        return view('estates.create', ['users' => ContractUser::all()]);
    }

    public function estateValidation($id = 0)
    {
        $rules = [
//            'old_id' => 'required|unique:App\Models\Estate,old_id,' . $id . ',id',
            'code' => 'required|unique:App\Models\Estate,code,' . $id . ',id',
            'floor_id' => 'required',
            'dimension' => ['required', 'regex:/^-?(?:\d+|\d*\.\d+)$/i'],
            'owners' => 'required',
            'building_id' => 'required',
        ];
        $messages = [
//            'old_id.unique' => __('validation.unique', ['attr' => __('lang.old_number')]),
            'old_id.required' => __('validation.required', ['attr' => __('lang.old_number')]),
            'code.unique' => __('validation.unique', ['attr' => __('lang.code')]),
            'code.required' => __('validation.required', ['attr' => __('lang.code')]),
            'floor_id.required' => __('validation.required', ['attr' => __('lang.floor')]),
            'dimension.required' => __('validation.required', ['attr' => __('lang.dimension')]),
            'dimension.regex' => __('validation.regex', ['attr' => __('lang.dimension')]),
            'owners.required' => __('validation.required', ['attr' => __('lang.owners')]),
            'building_id.required' => __('validation.required', ['attr' => __('lang.building_name')]),
        ];
        $this->validate(request(), $rules, $messages);
    }

    public function store()
    {
        $this->estateValidation();

        try {
            \DB::beginTransaction();
            $e = new Estate([
                'old_id' => request('old_id'),
                'building_id' => request('building_id'),
                'code' => request('code'),
                'floor_id' => request('floor_id'),
                'dimension' => request('dimension'),
                'telephone' => request('telephone', '0'),
                'postal' => request('postal', '0'),
                'powerid' => request('powerid', '0')
            ]);
            $e->save();
            \DB::commit();
            if ($e->id > 0) {
                $estate = Estate::find($e->id);
                $estate->contractUsers()->sync(\request('owners'));
                return 1;
            }

        } catch (\Exception $e) {
            \DB::rollBack();
            return 0;
        }

    }

    public function destroy()
    {
        $estate = Estate::find(\request('id'));
        $estate->destroy(\request('id'));
        EstateDetail::where('estate_id', \request('id'))->delete();
        Contract::where('estate_id', \request('id'))->delete();
        $estate->contractUsers()->detach();

        return 1;
    }

    public function editForm($id)
    {
        $users = Estate::find($id)->contractUsers()->get();
        $owners = array();
        foreach ($users as $user) {
            array_push($owners, $user->id);
        }
        return view('estates.edit', ['estate' => Estate::whereId($id)->first(), 'owners' => $owners, 'users' => ContractUser::all()]);
    }

    public function update()
    {
        $this->estateValidation(\request('id'));

        $update = Estate::whereId(\request('id'))->update([
            'building_id' => request('building_id'),
            'old_id' => request('old_id'),
            'code' => request('code'),
            'floor_id' => request('floor_id'),
            'dimension' => request('dimension'),
            'telephone' => request('telephone', '0'),
            'postal' => request('postal', '0'),
            'powerid' => request('powerid', '0')
        ]);
        $estate = Estate::find(\request('id'));
        $estate->contractUsers()->sync(\request('owners'));

        return $update;

    }
}
