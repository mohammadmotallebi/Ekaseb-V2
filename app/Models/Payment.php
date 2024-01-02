<?php

namespace App\Models;

use App\Casts\BigInt;
use App\Casts\Integer;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\Payment
 *
 * @property int $id
 * @property string|null $payment_method
 * @property string|null $payment_date
 * @property string|null $cheque_number
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
 * @property-read \App\Models\Contract|null $contract
 * @property-read Payment|null $payment_reason
 * @method static \Illuminate\Database\Eloquent\Builder|Payment newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Payment newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Payment query()
 * @method static \Illuminate\Database\Eloquent\Builder|Payment whereAccountNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payment whereBank($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payment whereBankBranch($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payment whereChequeDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payment whereChequeNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payment whereContractUniqueId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payment whereFee($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payment whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payment wherePassed($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payment wherePaymentDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payment wherePaymentMethod($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payment wherePaymentNote($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payment wherePaymentReasonId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payment whereUserId($value)
 * @mixin \Eloquent
 */
class Payment extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = ['id', 'payment_method', 'payment_date', 'cheque_number', 'user_id', 'contract_unique_id', 'fee', 'cheque_date', 'bank', 'bank_branch', 'account_number', 'payment_reason_id', 'passed', 'payment_note'];

    public function contract(): BelongsTo
    {
        return $this->belongsTo(Contract::class, 'contract_unique_id', 'contract_unique_id');
    }

    public function payment_reason(): BelongsTo
    {
        return $this->belongsTo(Payment::class);
    }

    protected $casts = [
        'fee' => BigInt::class,
        'user_id' => Integer::class,
        'payment_reason_id' => Integer::class,
    ];
}


