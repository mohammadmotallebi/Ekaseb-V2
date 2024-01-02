<?php

namespace App\Http\Controllers;

use App\Models\Bank;
use App\Models\Cost;
use App\Models\CostType;
use App\Models\PaymentReason;
use App\Models\Payment;
use Illuminate\Database\QueryException;
use App\Models\User;

class CashsController extends Controller
{
    protected function cashValidation()
    {
        $rules = [
            'user_id' => 'required',
            'payment_date' => 'required',
            'fee' => 'required',
            'payment_reason_id' => 'required',
        ];
        $messages = [
            'user_id.required' => __('validation.required', ['attr' => __('lang.user')]),
            'payment_date.required' => __('validation.required', ['attr' => __('lang.payment_date')]),
            'fee.required' => __('validation.required', ['attr' => __('lang.fee')]),
            'payment_reason_id.required' => __('validation.required', ['attr' => __('lang.payment_reason_id')]),
        ];
        $this->validate(request(), $rules, $messages);
    }

    protected function cashCostValidation()
    {
        $rules = [
            'price' => 'required',
            'cost_date' => 'required',
            'cost_type_id' => 'required',
        ];
        $messages = [
            'price.required' => __('validation.required', ['attr' => __('lang.price')]),
            'cost_date.required' => __('validation.required', ['attr' => __('lang.cost_date')]),
            'cost_type_id.required' => __('validation.required', ['attr' => __('lang.cost_type')]),
        ];
        $this->validate(request(), $rules, $messages);
    }

    public function viewCash($id)
    {
        $cash = Payment::whereId($id)->first();
        $cash->username = User::find($cash->user_id)->name . ' ' . User::find($cash->user_id)->family;
        $cash->reason = PaymentReason::find($cash->payment_reason_id)->reason;
        return view('cashs.view', ['cash' => $cash]);
    }

    public function viewCostCash($id)
    {
        $cash = Cost::whereId($id)->first();
        $cash->cost_type = CostType::find($cash->cost_type_id)->cost_type;
        return view('cashs.cost_view', ['cash' => $cash]);
    }

    public function editForm($id)
    {
        return view('cashs.edit', ['cash' => Payment::whereId($id)->first()]);
    }

    public function editCostForm($id)
    {
        return view('cashs.cost_edit', ['cash' => Cost::whereId($id)->first()]);
    }

    public function updateCost()
    {
        $this->cashCostValidation();
        try {
            Cost::whereId(\request('id'))->update([
                'cost_date' => \request('cost_date'),
                'price' => str_replace(',', '', \request('price')),
                'cost_type_id' => \request('cost_type_id'),
                'note' => \request('note')
            ]);
            return 1;
        } catch (QueryException $e) {
            return 0;
        }


    }

    public function update()
    {
        $this->cashValidation();
        try {
            Payment::whereId(\request('id'))->update([
                'user_id' => \request('user_id'),
                'payment_date' => \request('payment_date'),
                'fee' => str_replace(',', '', \request('fee')),
                'payment_reason_id' => \request('payment_reason_id'),
                'payment_note' => \request('note')
            ]);
            return 1;
        } catch (QueryException $e) {
            return 0;
        }


    }

    public function destroyCost()
    {
        try {
            Cost::destroy(\request('id'));
            return 1;
        } catch (QueryException $e) {
            return 0;
        }
    }

    public function destroy()
    {
        try {
            Payment::destroy(\request('id'));
            return 1;
        } catch (QueryException $e) {
            return 0;
        }
    }

    public function createForm()
    {
        return view('cashs.create');
    }

    public function createCostForm()
    {
        return view('cashs.cost_create');
    }

    public function storeCost()
    {
        $this->cashCostValidation();
        $new = Cost::create([
            'cost_date' => \request('cost_date'),
            'cost_method' => 'cash',
            'price' => str_replace(',', '', \request('price')),
            'cost_type_id' => \request('cost_type_id'),
            'note' => \request('note')
        ]);
        if ($new->id > 0) {
            return 1;
        } else {
            return false;
        }

    }

    public function store()
    {
        $this->cashValidation();
        $new = Payment::create([
            'user_id' => \request('user_id'),
            'contract_unique_id' => \request('contract_unique_id'),
            'payment_date' => \request('payment_date'),
            'payment_method' => 'cash',
            'fee' => str_replace(',', '', \request('fee')),
            'payment_reason_id' => \request('payment_reason_id'),
            'payment_note' => \request('note')
        ]);
        if ($new->id > 0) {
            return 1;
        } else {
            return false;
        }

    }
}
