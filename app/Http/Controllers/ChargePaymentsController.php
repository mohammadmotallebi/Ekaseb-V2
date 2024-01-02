<?php

namespace App\Http\Controllers;

use App\Models\ChargePayment;
use App\Models\ChargeSetting;
use App\Models\Estate;
use App\Models\Contract;
use Illuminate\Http\Request;
use Psy\Command\Command;

class ChargePaymentsController extends Controller
{
    public function show($eid)
    {
        return view('charge.charge', ['estate' => ChargePayment::where('estate_id', $eid)->first()]);
    }

    public function getData($eid): array
    {
        $res = array();
        $charges = ChargePayment::where('estate_id', $eid)->get();
        foreach ($charges as $charge) {
            $charge->end = jAddMonths($charge->charge_start_date, charge_setting()->charge_per_months);
            $charge->expire = jAddDays($charge->charge_start_date, charge_setting()->delay_for_pay_charge_days);
            array_push($res, $charge);
        }
        return $res;
    }

    public function editCash($id)
    {
        return view('charge.cash', ['charge' => ChargePayment::whereId($id)->first()]);
    }

    public function editCheque($id)
    {
        return view('charge.cheque', ['charge' => ChargePayment::whereId($id)->first()]);
    }

    public function updateCash($id)
    {
        return ChargePayment::find($id)->update([
            'payment_date' => \request('payment_date'),
            'note' => \request('note'),
        ]);
    }

    public function insertCharge()
    {
        $id = 0;
        if (ChargePayment::where('setting_unique_key', charge_setting()->unique_key)->count() > 0) {
            return 0;
        } else {
            $estates = Estate::all();
            foreach ($estates as $estate) {
                if (isset(Contract::where('estate_id', $estate->id)->active()->start_date)) {
                    $start_date = Contract::where('estate_id', $estate->id)->active()->start_date;
                } else if (isset(Contract::where('estate_id', $estate->id)->inactive()->ban_date)) {
                    $start_date = Contract::where('estate_id', $estate->id)->inactive()->ban_date;
                } else {
                    $start_date = charge_setting()->start_date;
                }
                if ($estate->dimension >= charge_setting()->min_dimension) {
                    $dimension = charge_setting()->charge_price * $estate->dimension;
                } else {
                    $dimension = charge_setting()->charge_price * charge_setting()->min_dimension;
                }

                $o = ChargePayment::create([
                    'estate_id' => $estate->id,
                    'fee' => $dimension * charge_setting()->charge_per_months,
                    'setting_unique_key' => charge_setting()->unique_key,
                    'charge_start_date' => $start_date,
                    'bill_unique_key' => randomString(70)
                ]);
                $id = $o->id;
            }
            return $id;
        }
    }
}
