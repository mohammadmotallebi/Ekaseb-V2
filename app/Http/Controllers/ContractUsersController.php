<?php

namespace App\Http\Controllers;

use App\Models\ContractUser;
use App\Models\Gender;
use Illuminate\Http\Request;

class ContractUsersController extends Controller
{
    public function getIndex()
    {

        return view('contractusers.users');

    }

    public function anyData()
    {
        return ContractUser::all();
    }

    public function create()
    {
        return view('contractusers.create',['gender' => Gender::all()]);
    }

    /**
     * @throws \Throwable
     */
    public function store(Request $request): int
    {
        $rules =  [
            'name' => 'required',
            'identity_code' => 'required|unique:contract_users|max:10|min:10',
            'mobile' => 'required|unique:contract_users|max:11|min:11',
            'family' => 'required',
        ];
        $messages = [
            'name.required' => __('validation.required', ['attr' => __('lang.name')]),
            'identity_code.required' => __('validation.required', ['attr' => __('lang.identity')]),
            'identity_code.unique' => __('validation.unique', ['attr' => __('lang.identity')]),
            'mobile.required' => __('validation.required', ['attr' => __('lang.mobile')]),
            'family.required' => __('validation.required', ['attr' => __('lang.family')]),
        ];
        $this->validate($request,$rules,$messages);
        try {
            \DB::beginTransaction();
            ContractUser::create([
                'identity_code' => arabicToEnglishNumber($request->get('identity_code')),
                'name' => arabicToEnglishNumber($request->get('name')),
                'family' => arabicToEnglishNumber($request->get('family')),
                'father' => arabicToEnglishNumber($request->get('father')),
                'gender' => $request->get('gender'),
                'building_id' => $request->get('building_id'),
                'birthday' => $request->get('birthday'),
                'mobile' => arabicToEnglishNumber($request->get('mobile')),
                'mobile_back' => arabicToEnglishNumber($request->get('mobile_back')),
                'tel' => arabicToEnglishNumber($request->get('tel')),
                'address' => arabicToEnglishNumber($request->get('address')),
            ]);
            \DB::commit();
            return 1;
        } catch (\Throwable $throwable) {
            \DB::rollBack();
            return 0;
        }

    }


    public function edit()
    {
        $id = request('id');
        $user = ContractUser::find($id);
        return view('contractusers.edit', ['user' => $user, 'id' => $id,'gender' => Gender::all()]);
    }

    /**
     * @throws \Throwable
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request): int
    {
        $id = $request->id;

        $rules =  [
            'name' => 'required',
            'identity_code' => 'required|unique:App\Models\ContractUser,identity_code,'.$id.',id|max:10|min:10',
            'mobile' => 'required|unique:App\Models\ContractUser,mobile,'.$id.',id|max:11|min:11',
            'family' => 'required',
        ];
        $messages = [
            'name.required' => __('validation.required', ['attr' => __('lang.name')]),
            'identity_code.required' => __('validation.required', ['attr' => __('lang.identity')]),
            'identity_code.unique' => __('validation.unique', ['attr' => __('lang.identity')]),
            'mobile.required' => __('validation.required', ['attr' => __('lang.mobile')]),
            'family.required' => __('validation.required', ['attr' => __('lang.family')]),
        ];
        $this->validate($request,$rules,$messages);

        try {
            \DB::beginTransaction();
            ContractUser::whereId($id)->update([
                'identity_code' => arabicToEnglishNumber($request->get('identity_code')),
                'name' => arabicToEnglishNumber($request->get('name')),
                'family' => arabicToEnglishNumber($request->get('family')),
                'father' => arabicToEnglishNumber($request->get('father')),
                'gender' => $request->get('gender'),
                'building_id' => $request->get('building_id'),
                'birthday' => $request->get('birthday'),
                'mobile' => arabicToEnglishNumber($request->get('mobile')),
                'mobile_back' => arabicToEnglishNumber($request->get('mobile_back')),
                'tel' => arabicToEnglishNumber($request->get('tel')),
                'address' => arabicToEnglishNumber($request->get('address')),
            ]);
            \DB::commit();
            return 1;
        } catch (\Throwable $throwable) {
            \DB::rollBack();
            return 0;
        }


    }

    public function view($id)
    {

        $user = ContractUser::find($id);
        if ($user->gender > 0) {
            $gender = Gender::find($user->gender);
            $g = $gender->gender_name;
        } else {
            $g = '';
        }

        return view('contractusers.view', [
            'user' => $user,
            'gender' => $g,
        ]);

    }

    public function destroy(Request $request): int
    {
        $id = $request->id;
        ContractUser::find($id)->delete();
        return 1;
    }
}
