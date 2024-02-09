<?php

namespace App\Http\Controllers;

use App\Models\Bank;
use App\Models\Payment;
use App\Models\PaymentReason;
use App\Models\Contract;
use App\Models\ContractUser;
use Illuminate\Http\Request;
use PhpParser\Builder;

class PaymentsController extends Controller
{
    public function showModal()
    {
        return view('payments.payments_modal');
    }

    public function show()
    {
        return view('payments.payments');
    }

    public function getDataModal($id)
    {
        $res = array();
        $payments = Payment::where('contract_unique_id', $id)->get();
        foreach ($payments as $payment) {
            $payment->username = ContractUser::find($payment->user_id)->name . ' ' . ContractUser::find($payment->user_id)->family;
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

    public function getData()
    {
        $res = array();
        $reasons = PaymentReason::where('for_contract', 0)->pluck('id')->all();
        $payments = Payment::whereIn('payment_reason_id', $reasons)->get();
//        dd(ContractUser::whereId(2309)->first());
        foreach ($payments as $payment) {
            $user = ContractUser::whereId($payment->user_id)->first();
            $payment->username = $user->name . ' ' . $user->family;
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

    public function checkPayment()
    {
        $id = \request('id');
        $arr = array();
        $sql = \DB::table('payments')
            ->select('payment_reason_id', \DB::raw('SUM(fee) as TotalFee'))
            ->where('contract_unique_id', $id)
            ->groupBy('payment_reason_id')
            ->get();

        foreach ($sql as $s) {
            $arr[$s->payment_reason_id] = intval($s->TotalFee);
        }

        return $arr;
    }

    public function paymentReset()
    {
        if (Contract::where('contract_unique_id', \request('id'))->count() == 0 and Payment::where('contract_unique_id', \request('id'))->count() > 0) {
            return Payment::where('contract_unique_id', \request('id'))->delete();
        }else{
            return 1;
        }
    }
}
