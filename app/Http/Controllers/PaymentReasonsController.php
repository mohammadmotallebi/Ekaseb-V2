<?php

namespace App\Http\Controllers;

use App\Models\PaymentReason;
use Illuminate\Http\Request;

class PaymentReasonsController extends Controller
{
    public function paymentReasons()
    {
        return view('paymentreasons.reasons');
    }

    public function getData()
    {
        $sql = \DB::table('payment_reasons')
            ->selectRaw('payment_reasons.id, payment_reasons.reason, funds.fund_name,payment_reasons.for_contract')
            ->join('funds', 'payment_reasons.fund_id', '=', 'funds.id')
            ->get();
        return $sql;
    }

    public function validation()
    {
        $rules = [
            'reason' => 'required',
            'fund_id' => 'required',
        ];
        $messages = [
            'reason.required' => __('validation.required', ['attr' => __('lang.payment_reason')]),
            'fund_id.required' => __('validation.required', ['attr' => __('lang.fund')]),
        ];
        $this->validate(request(), $rules, $messages);
    }

    public function create()
    {
        return view('paymentreasons.create');
    }

    public function store()
    {
        $this->validation();
        $new = PaymentReason::create(\request()->all());
        if ($new->id > 0) {
            return 1;
        } else {
            return 0;
        }
    }

    public function destroy()
    {

        return PaymentReason::destroy(\request('id'));

    }

    public function edit($id)
    {
        return view('paymentreasons.edit', ['res' => PaymentReason::whereId($id)->first()]);
    }

    public function update()
    {
        $this->validation();
        return PaymentReason::find(\request('id'))->update([
            'reason' => \request('reason'),
            'fund_id' => \request('fund_id'),
            'for_contract' => \request('for_contract'),

        ]);
    }
}
