<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ChargeSetting
 *
 * @property int $id
 * @property int|null $charge_per_months
 * @property int|null $charge_price
 * @property string|null $start_date
 * @property string|null $min_dimension
 * @property int|null $delay_for_pay_charge_days
 * @property int|null $send_sms_after_expire_charge_delay_days
 * @property int|null $owner_charge_per_months
 * @property string|null $unique_key
 * @method static \Illuminate\Database\Eloquent\Builder|ChargeSetting newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ChargeSetting newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ChargeSetting query()
 * @method static \Illuminate\Database\Eloquent\Builder|ChargeSetting whereChargePerMonths($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChargeSetting whereChargePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChargeSetting whereDelayForPayChargeDays($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChargeSetting whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChargeSetting whereMinDimension($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChargeSetting whereOwnerChargePerMonths($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChargeSetting whereSendSmsAfterExpireChargeDelayDays($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChargeSetting whereStartDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChargeSetting whereUniqueKey($value)
 * @mixin \Eloquent
 */
class ChargeSetting extends Model
{
    use HasFactory;

    protected $fillable = [
        'charge_per_months'
        , 'charge_price'
        , 'owner_charge_per_months'
        , 'delay_for_pay_charge_days'
        , 'send_sms_after_expire_charge_delay_days'
        , 'owner_charge_per_months'
        , 'unique_key'
    ];
}
