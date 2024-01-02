<?php

namespace App\Http\Controllers;

use App\Models\Cost;
use App\Models\CostType;

class CostController extends Controller
{
    public function show()
    {
        return view('costs.costs');
    }

    public function getData()
    {
        $res = array();
        $costs = Cost::all();
        foreach ($costs as $cost) {
            if ($cost->cost_method == 'cheque') {
                $cost->cost_method_farsi = 'چک';
            } else if ($cost->cost_method == 'cash') {
                $cost->cost_method_farsi = 'نقد';
            }
            $cost->cost_type = CostType::find($cost->cost_type_id)->cost_type;
            array_push($res, $cost);
        }
        return $res;
    }
}
