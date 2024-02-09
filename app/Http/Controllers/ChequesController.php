<?php

namespace App\Http\Controllers;

use App\Models\Bank;
use App\Models\CostType;
use App\Models\Payment;
use App\Models\Cost;
use App\Models\PaymentReason;
use App\Models\User;
use Illuminate\Database\QueryException;

class ChequesController extends Controller
{
    protected function validation()
    {
        $rules = [
            'user_id' => 'required',
            'payment_date' => 'required',
            'cheque_number' => 'required|unique:App\Models\Payment,cheque_number'.(\request('id') ? ','.\request('id') : ''),
            'cheque_date' => 'required',
            'bank' => 'required',
            'bank_branch' => 'required',
            'account_number' => 'required',
            'fee' => 'required',
            'payment_reason_id' => 'required',
        ];
        $messages = [
            'user_id.required' => __('validation.required', ['attr' => __('lang.user')]),
            'payment_date.required' => __('validation.required', ['attr' => __('lang.payment_date')]),
            'fee.required' => __('validation.required', ['attr' => __('lang.fee')]),
            'payment_reason_id.required' => __('validation.required', ['attr' => __('lang.payment_reason')]),
            'cheque_number.required' => __('validation.required', ['attr' => __('lang.cheque_number')]),
            'cheque_number.unique' => __('validation.unique', ['attr' => __('lang.cheque_number')]),
            'cheque_date.required' => __('validation.required', ['attr' => __('lang.cheque_date')]),
            'bank.required' => __('validation.required', ['attr' => __('lang.bank_name')]),
            'bank_branch.required' => __('validation.required', ['attr' => __('lang.bank_branch')]),
            'account_number.required' => __('validation.required', ['attr' => __('lang.account_number')]),
        ];
        $this->validate(request(), $rules, $messages);
    }

    protected function costValidation()
    {
        $rules = [
            'cost_date' => 'required',
            'cheque_number' => 'required|unique:App\Models\Cost,cheque_number'.(\request('id') ? ','.\request('id') : ''),
            'cheque_date' => 'required',
            'bank' => 'required',
            'bank_branch' => 'required',
            'account_number' => 'required',
            'price' => 'required',
            'cost_type_id' => 'required',
        ];
        $messages = [
            'cost_date.required' => __('validation.required', ['attr' => __('lang.cost_date')]),
            'price.required' => __('validation.required', ['attr' => __('lang.cheque_fee')]),
            'cost_type_id.required' => __('validation.required', ['attr' => __('lang.cost_type')]),
            'cheque_number.required' => __('validation.required', ['attr' => __('lang.cheque_number')]),
            'cheque_number.unique' => __('validation.unique', ['attr' => __('lang.cheque_number')]),
            'cheque_date.required' => __('validation.required', ['attr' => __('lang.cheque_date')]),
            'bank.required' => __('validation.required', ['attr' => __('lang.bank_name')]),
            'bank_branch.required' => __('validation.required', ['attr' => __('lang.bank_branch')]),
            'account_number.required' => __('validation.required', ['attr' => __('lang.account_number')]),
        ];
        $this->validate(request(), $rules, $messages);
    }

    public function cheque_list_data(): array
    {
        $res = array();
        $cheques = Payment::where('payment_method', 'cheque')->where('passed', 0)->get();
        foreach ($cheques as $cheque) {
            $cheque->bank_name = Bank::find($cheque->bank)->bank_name;
            array_push($res, $cheque);
        }
        return $res;
    }

    public function checkList()
    {
        return view('cheques.cheque-list-modal');
    }

    public function viewCheque($id)
    {
        $cheque = Payment::whereId($id)->first();
        $cheque->username = User::find($cheque->user_id)->name . ' ' . User::find($cheque->user_id)->family;
        $cheque->reason = PaymentReason::find($cheque->payment_reason_id)->reason;
        $cheque->bank_name = Bank::find($cheque->bank)->bank_name;
        return view('cheques.view', ['cheque' => $cheque]);
    }

    public function viewCostCheque($id)
    {
        $cheque = Cost::whereId($id)->first();
        $cheque->reason = CostType::find($cheque->cost_type_id)->cost_type;
        $cheque->bank_name = Bank::find($cheque->bank)->bank_name;
        return view('cheques.cost_view', ['cheque' => $cheque]);
    }

    public function editForm($id)
    {
        return view('cheques.edit', ['cheque' => Payment::whereId($id)->first()]);
    }

    public function update(): int
    {
        $this->validation();
        try {
            Payment::whereId(\request('id'))->update([
                'user_id' => \request('user_id'),
                'payment_date' => \request('payment_date'),
                'cheque_number' => \request('cheque_number'),
                'fee' => str_replace(',', '', \request('fee')),
                'cheque_date' => \request('cheque_date'),
                'bank' => \request('bank'),
                'bank_branch' => \request('bank_branch'),
                'account_number' => \request('account_number'),
                'payment_reason_id' => \request('payment_reason_id'),
                'payment_note' => \request('note')
            ]);
            return 1;
        } catch (QueryException $e) {
            return 0;
        }


    }

    public function destroy(): int
    {
        return Payment::destroy(\request('id'));
    }

    public function destroyCost(): int
    {
        return Cost::destroy(\request('id'));
    }

    public function createForm()
    {
        return view('cheques.create');
    }

    public function createCostForm()
    {
        return view('cheques.cost_create');
    }

    public function store(): int
    {
        $this->validation();
        $new = Payment::create([
            'user_id' => \request('user_id'),
            'contract_unique_id' => \request('contract_unique_id'),
            'payment_date' => \request('payment_date'),
            'cheque_number' => \request('cheque_number'),
            'payment_method' => 'cheque',
            'fee' => str_replace(',', '', \request('fee')),
            'cheque_date' => \request('cheque_date'),
            'bank' => \request('bank'),
            'bank_branch' => \request('bank_branch'),
            'account_number' => \request('account_number'),
            'payment_reason_id' => \request('payment_reason_id'),
            'passed' => 0,
            'payment_note' => \request('note')
        ]);
        if ($new->id > 0) {
            return 1;
        } else {
            return 0;
        }

    }

    public function storeCost(): int
    {
        $this->costValidation();
        $new = Cost::create([
            'cost_date' => \request('cost_date'),
            'cheque_number' => \request('cheque_number'),
            'cost_method' => 'cheque',
            'price' => str_replace(',', '', \request('price')),
            'cheque_date' => \request('cheque_date'),
            'bank' => \request('bank'),
            'bank_branch' => \request('bank_branch'),
            'account_number' => \request('account_number'),
            'cost_type_id' => \request('cost_type_id'),
            'passed' => 0,
            'note' => \request('note')
        ]);
        if ($new->id > 0) {
            return 1;
        } else {
            return 0;
        }

    }
}
