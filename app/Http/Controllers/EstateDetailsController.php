<?php

namespace App\Http\Controllers;

use App\Models\Estate;
use App\Models\EstateDetail;
use Doctrine\DBAL\Query\QueryException;
use Illuminate\Http\Request;

class EstateDetailsController extends Controller
{
    public function getData()
    {
        $arr = array();
        $details = Estate::find(\request('id'))->details()->orderBy('active', 'desc')->get();
        foreach ($details as $detail) {
            $detail->rent = number_format($detail->rent);
            $detail->price = number_format($detail->price);
            array_push($arr, $detail);
        }
        return $arr;
    }

    public function createForm()
    {
        return view('estates.detail_add');
    }

    public function estateDetailValidation()
    {
        $rules = [
            'price' => 'required',
            'rent' => 'required',
            'start_date' => 'required',
            'end_date' => 'required',
        ];
        $messages = [
            'price.required' => __('validation.required', ['attr' => __('lang.price')]),
            'rent.required' => __('validation.required', ['attr' => __('lang.rent')]),
            'start_date.required' => __('validation.required', ['attr' => __('lang.start_date')]),
            'end_date.required' => __('validation.required', ['attr' => __('lang.end_date')]),
        ];
        $this->validate(request(), $rules, $messages);
    }

    public function store()
    {
        $this->estateDetailValidation();

        EstateDetail::where('estate_id', \request('estate_id'))->update(['active' => 0]);
        $detail = new EstateDetail([
            'estate_id' => \request('estate_id'),
            'price' => str_ireplace(',', '', request('price')),
            'rent' => str_ireplace(',', '', request('rent')),
            'start_date' => \request('start_date'),
            'end_date' => \request('end_date'),
        ]);
        $detail->save();
        EstateDetail::where('id', $detail->id)->update(['active' => 1]);

        if ($detail->id > 0) {
            return 1;
        } else {
            return 0;
        }
    }

    public function editForm($id)
    {
        return view('estates.detail_edit', ['estate_detail' => EstateDetail::whereId($id)->first()]);
    }

    public function update()
    {
        $id = \request('id');
        $active = \request('active');
        $estate_id = EstateDetail::find($id)->estate_id;
        $this->estateDetailValidation();
        try {
            EstateDetail::whereId($id)->update([
                'price' => str_ireplace(',', '', request('price')),
                'rent' => str_ireplace(',', '', request('rent')),
                'start_date' => \request('start_date'),
                'end_date' => \request('end_date'),
            ]);
            if ($active == 1) {
                EstateDetail::where('estate_id', $estate_id)->update(['active' => 0]);
                EstateDetail::where('id', $id)->update(['active' => 1]);
            }
            return 1;

        } catch (QueryException $exception) {
            return $exception;
        }

    }

    public function destroy()
    {
        $id = \request('id');
        if (EstateDetail::find($id)->active == 1) {
            return 0;
        } else {
            EstateDetail::destroy($id);
            return 1;
        }
    }
}
