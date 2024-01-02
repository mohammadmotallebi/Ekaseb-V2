<?php

namespace App\Http\Controllers;

use App\Models\CostType;
use Illuminate\Http\Request;

class CostTypesController extends Controller
{
    public function costTypes()
    {
        return view('costTypes.types');
    }

    public function getData()
    {
        $sql = \DB::table('cost_types')
            ->selectRaw('cost_types.id, cost_types.cost_type, funds.fund_name')
            ->join('funds', 'cost_types.fund_id', '=', 'funds.id')
            ->get();
        return $sql;
    }

    public function validation()
    {
        $rules = [
            'cost_type' => 'required',
            'fund_id' => 'required',
        ];
        $messages = [
            'cost_type.required' => __('validation.required', ['attr' => __('lang.cost_type')]),
            'fund_id.required' => __('validation.required', ['attr' => __('lang.fund')]),
        ];
        $this->validate(request(), $rules, $messages);
    }

    public function create()
    {
        return view('costTypes.create');
    }

    public function store()
    {
        $this->validation();
        $new = CostType::create(\request()->all());
        if ($new->id > 0) {
            return 1;
        } else {
            return 0;
        }
    }

    public function destroy()
    {

        return CostType::destroy(\request('id'));

    }

    public function edit($id)
    {
        return view('costTypes.edit', ['res' => CostType::whereId($id)->first()]);
    }

    public function update()
    {
        $this->validation();
        return CostType::find(\request('id'))->update([
            'cost_type' => \request('cost_type'),
            'fund_id' => \request('fund_id'),

        ]);
    }
}
