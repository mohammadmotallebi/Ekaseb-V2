<?php

namespace App\Http\Controllers;

use App\Models\Contract;
use App\Models\Estate;
use App\Models\Reason;
use App\Models\ContractUser;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;

class ContractsController extends Controller
{
    public function viewContracts($id)
    {
        $d = Contract::whereId($id)->first();
        $estate = Estate::find($d->estate_id);
        $d->renter_name = ContractUser::find($d->renter_id)->name . ' ' . ContractUser::find($d->renter_id)->family;
        $s = datediff($d->end_date, jstrftime('%Y/%m/%d'));
        if ($d->ban_date <> '') {
            $ss = datediff($d->end_date, $d->ban_date);
        }


        $d->contract_detail = datediff($d->end_date, $d->start_date);
        if ($d->contract_detail->m == 0) {
            $d->tm = $d->contract_detail->y * 12;
        } else {
            $d->tm = $d->contract_detail->m;
        }
        $d->owners = $estate->contractUsers()->get();
        $d->remain_days = $s->days;
        $d->ban_remain_days = $ss->days ?? 0;
        $d->daily_rent = ceil((($d->rent_monthly - $d->rent_discount) * 12) / $d->contract_detail->days);
        $d->remain_rent = $d->daily_rent * $d->ban_remain_days;
        $d->m = $s->m;
        $d->d = $s->d;
        if ($d->ban_reason <> 0) {
            $d->ban_reason = Reason::find($d->ban_reason)->reason;
        }
        $d->total_rent = number_format(str_replace(',', '', $d->rent_monthly) * 12);


        return view('contracts.view', ['res' => $d]);
    }

    public function show()
    {
        return view('contracts.contracts');
    }

    public function getData($id)
    {
        $res = array();
        if(User::find(CurrentUserID())->can('contract_demo') and !isAdmin()) {
            $data = Contract::where('estate_id',  $id)->where('active', 1)->orderByDesc('active')->get();
        }
        else {
            $data = Contract::where('estate_id', $id)->orderByDesc('active')->get();
        }
        foreach ($data as $d) {
            $d->renter_name = ContractUser::find($d->renter_id)->name . ' ' . ContractUser::find($d->renter_id)->family;
            $s = datediff($d->end_date, jstrftime('%Y/%m/%d'));
            $d->contract_detail = datediff($d->end_date, $d->start_date);
            if ($d->contract_detail->m == 0) {
                $d->tm = $d->contract_detail->y * 12;
            } else {
                $d->tm = $d->contract_detail->m;
            }
            $d->remain_days = $s->days;
            $d->m = $s->m;
            $d->d = $s->d;
            $d->y = $d->contract_detail->y;
            $d->daily_rent = ceil((($d->rent_monthly - $d->rent_discount) * 12) / $d->contract_detail->days);
            $d->remain_rent = $d->daily_rent * $d->remain_days;
            if ($d->ban_reason <> 0) {
                $d->ban_reason = Reason::find($d->ban_reason)->reason;
            }
            $d->total_rent = str_replace(',', '', $d->rent_monthly) * 12;
            array_push($res, $d);
        }
        return $res;
    }

    public function createForm($eid)
    {
        $row = Contract::where('estate_id', $eid)->count() + 1;
        $code = Estate::find($eid)->code . jdate('Y') . $row;
        $dimension = Estate::find($eid)->dimension;
        return view('contracts.create', ['code' => $code,'dimension' => $dimension]);
    }

    public function genContractId()
    {
        $row = Contract::where('estate_id', \request('eid'))->count() + 1;
        return Estate::find(\request('eid'))->code . jdate('Y') . $row;
    }

    public function checkContract()
    {

        $c = \DB::table('contracts')->where([['active', '=', '1'], ['estate_id', '=', \request('id')]])->count();
        return $c;
    }

    public function contractValidation()
    {
        $rules = [
            'estate_id' => 'required',
            'contract_unique_id' => 'required|unique:App\Models\Contract,contract_unique_id',
            'renter_id' => 'required',
            'start_date' => 'required',
            'end_date' => 'required',
//            'charge' => 'required',
            'deposit' => 'required',
            'rent_price_monthly' => 'required',
            'rent' => 'required',
        ];
        $messages = [
            'renter_id.required' => __('validation.required', ['attr' => __('lang.renter_name')]),
            'start_date.required' => __('validation.required', ['attr' => __('lang.start_date')]),
            'end_date.required' => __('validation.required', ['attr' => __('lang.end_date')]),
//            'charge.required' => __('validation.required', ['attr' => __('lang.charge')]),
            'deposit.required' => __('validation.required', ['attr' => __('lang.deposit')]),
            'rent_price_monthly.required' => __('validation.required', ['attr' => __('lang.rent_price_monthly')]),
            'rent.required' => __('validation.required', ['attr' => __('lang.rent')]),
        ];
        $this->validate(request(), $rules, $messages);
    }

    public function store(Request $request)
    {
        $this->contractValidation();

        $contract = new Contract([
            'estate_id' => $request->get('estate_id'),
            'contract_unique_id' => $request->get('contract_unique_id'),
            'renter_id' => $request->get('renter_id'),
            'start_date' => $request->get('start_date'),
            'end_date' => $request->get('end_date'),
//                'charge' => intval(\Str::replace(',', '', $request->get('charge','0'))),
            'deposit' => intval(\Str::replace(',', '', arabicToEnglishNumber($request->get('deposit', '0')))),
            'rent_monthly' => intval(\Str::replace(',', '', arabicToEnglishNumber($request->get('rent_price_monthly', '0')))),
            'rent' => intval(\Str::replace(',', '', $request->get('rent', '0'))),
            'deposit_discount' => intval(\Str::replace(',', '', $request->get('deposit_discount', '0'))),
            'rent_discount' => intval(\Str::replace(',', '', $request->get('rent_discount', '0'))),
            'active' => 1,
        ]);
        $contract->save();
        if ($contract->id > 0) {
            return 1;
        } else {
            return 0;
        }


    }

    public function destroy()
    {
        Contract::destroy(\request('id'));
        return 1;
    }

    public function addPaymentToContract($id)
    {
        $d = Contract::where('contract_unique_id', $id)->first();
        $estate = Estate::find($d->estate_id);
        $d->renter_name = ContractUser::find($d->renter_id)->name . ' ' . ContractUser::find($d->renter_id)->family;
        $s = datediff($d->end_date, jstrftime('%Y/%m/%d'));
        if ($d->ban_date <> '') {
            $ss = datediff($d->end_date, $d->ban_date);
        }
        $d->contract_detail = datediff($d->end_date, $d->start_date);
        if ($d->contract_detail->m == 0) {
            $d->tm = $d->contract_detail->y * 12;
        } else {
            $d->tm = $d->contract_detail->m;
        }
        $d->owners = $estate->contractUsers()->get();
        $d->remain_days = $s->days;
        $d->ban_remain_days = $ss->days ?? 0;
        $d->daily_rent = ceil((($d->rent_monthly - $d->rent_discount) * 12) / $d->contract_detail->days);
        $d->remain_rent = $d->daily_rent * $d->ban_remain_days;
        $d->m = $s->m;
        $d->d = $s->d;
        if ($d->ban_reason <> 0) {
            $d->ban_reason = Reason::find($d->ban_reason)->reason;
        }
        $d->total_rent = number_format(str_replace(',', '', ($d->rent_monthly - $d->rent_discount)) * 12);
        $d->rent_yearly = ceil(($d->rent_monthly - $d->rent_discount) * 12);
//        $d->charge_yearly = ceil(($d->charge * $estate->dimension) * 12);
        $d->end_rent_monthly = $d->rent_monthly - $d->rent_discount;
        $d->end_deposit = ceil($d->deposit - $d->deposite_discount);
        return view('payments.payments_modal', ['res' => $d]);
    }

    public function update()
    {

        $id = \request('id');
        try {
            Contract::whereId($id)->update([
                'renter_id' => \request('renter_id'),
                'start_date' => \request('start_date'),
                'end_date' => \request('end_date'),
                'deposit' => str_replace(',', '', \request('deposit')),
                'rent' => str_replace(',', '', \request('rent')),
                'deposit_discount' => str_replace(',', '', \request('deposit_discount')),
                'rent_discount' => str_replace(',', '', \request('rent_discount')),
            ]);
            return 1;
        } catch (QueryException $e) {
            return $e;
        }

    }

    public function banContract()
    {

        $id = \request('id');
        $c = Contract::whereId($id)->update([
            'active' => 0,
            'ban_reason' => \request('reason'),
            'ban_date' => \request('ban_date'),
            'note' => \request('note'),

        ]);
        return 1;
    }

    public function banForm($id)
    {
        $d = Contract::whereId($id)->first();
        $estate = Estate::find($d->estate_id);
        $d->renter_name = ContractUser::find($d->renter_id)->name . ' ' . ContractUser::find($d->renter_id)->family;
        $s = datediff($d->end_date, jstrftime('%Y/%m/%d'));
        $d->contract_detail = datediff($d->end_date, $d->start_date);
        if ($d->contract_detail->m == 0) {
            $d->tm = $d->contract_detail->y * 12;
        } else {
            $d->tm = $d->contract_detail->m;
        }
        $d->owners = $estate->contractUsers()->get();
        $d->daily_rent = ceil(($d->rent_monthly - $d->rent_discount) / $d->contract_detail->days);
        $d->remain_rent = $d->daily_rent * $d->remain_days;
        $d->remain_days = $s->days;
        $d->m = $s->m;
        $d->d = $s->d;
        if ($d->ban_reason <> 0) {
            $d->ban_reason_des = Reason::find($d->ban_reason)->reason;
        }
        $d->total_rent = number_format(str_replace(',', '', $d->rent_monthly) * 12);


        return view('contracts.ban', ['res' => $d, 'ban' => Reason::all()]);
    }

    public function calRemainRent()
    {
        $date = \request('date');
        $id = \request('id');

        $d = Contract::whereId($id)->first();
        $estate = Estate::find($d->estate_id);
        $d->renter_name = ContractUser::find($d->renter_id)->name . ' ' . ContractUser::find($d->renter_id)->family;
        $d->contract_detail = datediff($d->end_date, $d->start_date);
        if ($date == '') {
            $s = datediff($d->end_date, jstrftime('%Y/%m/%d'));
        } else {
            $s = datediff($d->end_date, $date);
        }
        if ($d->contract_detail->m == 0) {
            $d->tm = $d->contract_detail->y * 12;
        } else {
            $d->tm = $d->contract_detail->m;
        }
        $d->owners = $estate->contractUsers()->get();
        $d->remain_days = datediff($d->end_date, jstrftime('%Y/%m/%d'))->days;
//        $d->daily_charge = (($d->charge * $estate->dimension) * 12) / $d->contract_detail->days;
        $d->daily_rent = (($d->rent_monthly - $d->rent_discount) * 12) / $d->contract_detail->days;
        $d->remain_rent = ceil($d->daily_rent * $d->remain_days);
//        $d->remain_charge = ceil($d->daily_charge * $d->remain_days);
        $d->m = $s->m;
        $d->d = $s->d;
        $d->total_rent = number_format(str_replace(',', '', $d->rent_monthly) * 12);

        return $d;
    }

    public function calculate()
    {
        $id = \request('estate_id');
        $percent = 0.03;
        if (Estate::find($id)->details()->count() > 0) {
            $main_rent = ceil(Estate::find($id)->details()->first()->rent * Estate::find($id)->dimension);
            $main_rent_yearly = ceil(Estate::find($id)->details()->first()->rent * Estate::find($id)->dimension) * 12;
        } else {
            $main_rent = 0;
            $main_rent_yearly = 0;
        }
        $main_deposit = $main_rent / $percent;
        $form_deposit = str_replace(',', '', \request('deposit', 0));
        $form_rent = str_replace(',', '', \request('rent', 0));
        $rent_discount = str_replace(',', '', \request('rent_discount', 0));
        $deposit_discount = str_replace(',', '', \request('deposit_discount', 0));
        $cal_deposit = ($main_rent - $form_rent) / $percent;
        $cal_rent = ($main_deposit - $form_deposit) * $percent;
        $yearly_rent = $cal_rent * 12;
        if (str_replace(',', '', \request('deposit', 0)) < 1) {
            $final_deposit = $main_deposit - $deposit_discount;
        } else {
            $final_deposit = $cal_deposit - $deposit_discount;
        }
        if (str_replace(',', '', \request('rent', 0)) < 1) {
            $final_rent = $main_rent - $rent_discount;
        } else {
            $final_rent = $cal_rent - $rent_discount;
        }

        $final_rent_yearly = $final_rent * 12;


        return json_encode([
            'main_deposit' => number_format($main_deposit),
            'main_rent' => number_format($main_rent),
            'main_rent_yearly' => number_format($main_rent_yearly),
            'deposit' => number_format($cal_deposit),
            'rent' => number_format($cal_rent),
            'yearly_rent' => number_format($yearly_rent),
            'final_deposit' => number_format($final_deposit),
            'final_rent' => number_format($final_rent),
            'final_rent_yearly' => number_format($final_rent_yearly),
        ]);
    }

    public function printContract($id)
    {
        $d = Contract::whereId($id)->first();
        $contract = Contract::find($id);
        $estate = Estate::find($d->estate_id);
        $d->estate = $estate->first();
        $d->renter = ContractUser::whereId($d->renter_id)->first();
        $s = datediff($d->end_date, jstrftime('%Y/%m/%d'));
        if ($d->ban_date <> '') {
            $ss = datediff($d->end_date, $d->ban_date);
        }
        $d->contract_detail = datediff($d->end_date, $d->start_date);
        if ($d->contract_detail->m == 0) {
            $d->tm = $d->contract_detail->y * 12;
        } else {
            $d->tm = $d->contract_detail->m;
        }
        $d->owners = $estate->contractUsers()->get();
        $d->payments = $contract->payments()->get();
        $d->remain_days = $s->days;
        $d->ban_remain_days = $ss->days ?? 0;
        $d->daily_rent = ceil((($d->rent_monthly - $d->rent_discount) * 12) / $d->contract_detail->days);
        $d->remain_rent = $d->daily_rent * $d->ban_remain_days;
        $d->m = $s->m;
        $d->d = $s->d;
        $d->y = $d->contract_detail->y;
        if ($d->ban_reason <> 0) {
            $d->ban_reason = Reason::find($d->ban_reason)->reason;
        }
        $d->total_rent = number_format(str_replace(',', '', $d->rent_monthly) * 12);
        return view('contracts.print', ['res' => $d]);
    }

    public function files($id)
    {

        return view('contracts.files');

    }

    public function fileData($id)
    {
        $array = array();
        if (isset(Contract::find($id)->scanned_contract)) {

            $array[0]['id'] = $id;
            $array[0]['scanned_contract'] = Contract::find($id)->scanned_contract;
            $array[0]['file_size'] = ceil(\Storage::disk('upload')->getSize('contracts/' . Contract::find($id)->scanned_contract) / 1024) . ' ' . __('lang.filesize.kb');

            return $array;
        }
        return 0;
    }

    public function checkFile()
    {
        $id = \request('id');
        $s = Contract::find($id)->scanned_contract;
        if ($s == '') {
            return 0;
        }
        return $s;
    }

    public function deleteFile()
    {
        $file = \request('file');
        $id = \request('id');

        \Storage::disk('upload')->delete('contracts/' . $file);

        if (\Storage::disk('upload')->missing('contracts/' . $file)) {
            Contract::whereId($id)->update([
                'scanned_contract' => NULL,
            ]);
            return 1;
        }
        return 0;
    }

    public function uploadFile(Request $request)
    {

        $request->contract_file->storeAs('contracts', 'contract_' . $request->data . '.pdf', 'upload');
        if (\Storage::disk('upload')->exists('contracts/contract_' . $request->data . '.pdf')) {
            Contract::whereId($request->data)->update([
                'scanned_contract' => 'contract_' . $request->data . '.pdf',
            ]);
            return 1;
        }
        return 0;

    }
}
