<?php

namespace App\Http\Controllers;

use App\Models\CostType;
use App\Models\Fund;
use App\Models\User;
use App\Models\PaymentReason;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FundsController extends Controller
{

    public function index()
    {
        return view('funds.funds');
    }

    public function anyData()
    {
        $res = array();
        $funds = Fund::all();
        foreach ($funds as $fund) {
            $fund->Payment = Fund::find($fund->id)->payments()->sum('fee');
            $fund->Cost = Fund::find($fund->id)->costs()->sum('price');
            array_push($res, $fund);
        }
        return $res;
    }

    public function showPayments()
    {
        return view('payments.paymentforfund');
    }

    public function showCosts()
    {
        return view('costs.costforfund');
    }

    public function getPayments($id)
    {
        $res = array();
        $payments = Fund::find($id)->payments()->get();
        foreach ($payments as $payment) {
            $payment->username = User::find($payment->user_id)->name . ' ' . User::find($payment->user_id)->family;
            if ($payment->payment_method == 'cheque') {
                $payment->payment_method_farsi = 'چک';
            } else if ($payment->payment_method == 'cash') {
                $payment->payment_method_farsi = 'نقد';
            } else if ($payment->payment_method == 'receipt') {
                $payment->payment_method_farsi = 'رسید دیجیتالی';
            }
            $payment->reason = PaymentReason::find($payment->payment_reason_id)->reason;
            array_push($res, $payment);
        }
        return $res;
    }

    public function getCosts($id)
    {
        $res = array();
        $costs = Fund::find($id)->costs()->get();
        foreach ($costs as $cost) {
            if ($cost->cost_method == 'cheque') {
                $cost->cost_method_farsi = 'چک';
            } else if ($cost->payment_method == 'cash') {
                $cost->cost_method_farsi = 'نقد';
            } else if ($cost->payment_method == 'receipt') {
                $cost->cost_method_farsi = 'رسید دیجیتالی';
            }
            $cost->cost_type = CostType::find($cost->cost_type_id)->cost_type;
            array_push($res, $cost);
        }
        return $res;
    }


    public function selectData(): array
    {
        $arr = array();
        $sql = Fund::all();
        foreach ($sql as $s) {
            $s->text = $s->fund_name;
            unset($s->fund_name);
            array_push($arr, $s);
        }
        return $arr;
    }

    public function create()
    {
        return view('funds.create');
    }

    public function store(Request $request): int
    {
        $new = Fund::create([
            'fund_name' => $request->fund_name
        ]);
        if ($new->id > 0) {
            return 1;
        } else {
            return 0;
        }
    }


    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        return view('funds.edit', ['fund' => Fund::whereId($id)->first()]);
    }


    public function update(): int
    {
        return Fund::find(\request('id'))->update([
            'fund_name' => \request('fund_name')
        ]);

    }

//    public function destroy($id): int
//    {
//        return Fund::find($id)->destroy();
//    }


}
