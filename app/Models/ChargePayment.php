<?php

namespace App\Models;

use App\Casts\BigInt;
use App\Casts\Integer;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\ChargePayment
 *
 * @property int $id
 * @property string|null $payment_method
 * @property string|null $payment_date
 * @property string|null $cheque_number
 * @property mixed|null $estate_id
 * @property mixed|null $user_id
 * @property string|null $contract_unique_id
 * @property mixed|null $fee
 * @property string|null $cheque_date
 * @property int|null $bank
 * @property string|null $bank_branch
 * @property string|null $account_number
 * @property mixed|null $payment_reason_id
 * @property int|null $passed
 * @property string|null $payment_note
 * @property string|null $setting_unique_key
 * @property string|null $bill_unique_key
 * @property string|null $charge_start_date
 * @property-read \App\Models\Estate|null $estate
 * @method static \Illuminate\Database\Eloquent\Builder|ChargePayment newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ChargePayment newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ChargePayment query()
 * @method static \Illuminate\Database\Eloquent\Builder|ChargePayment whereAccountNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChargePayment whereBank($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChargePayment whereBankBranch($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChargePayment whereBillUniqueKey($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChargePayment whereChargeStartDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChargePayment whereChequeDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChargePayment whereChequeNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChargePayment whereContractUniqueId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChargePayment whereEstateId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChargePayment whereFee($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChargePayment whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChargePayment wherePassed($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChargePayment wherePaymentDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChargePayment wherePaymentMethod($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChargePayment wherePaymentNote($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChargePayment wherePaymentReasonId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChargePayment whereSettingUniqueKey($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ChargePayment whereUserId($value)
 * @mixin \Eloquent
 */
class ChargePayment extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = ['id', 'payment_method', 'payment_date', 'cheque_number', 'estate_id', 'fee', 'cheque_date', 'bank', 'bank_branch', 'account_number', 'passed', 'payment_note', 'setting_unique_key', 'bill_unique_key', 'charge_start_date'];

    public function estate(): BelongsTo
    {
        return $this->belongsTo(Estate::class);
    }


    protected $casts = [
        'fee' => BigInt::class,
        'user_id' => Integer::class,
        'estate_id' => Integer::class,
        'payment_reason_id' => Integer::class,
    ];
}
