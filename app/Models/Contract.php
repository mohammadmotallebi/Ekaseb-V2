<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use SnoerenDevelopment\CurrencyCasting\Currency;

/**
 * App\Models\Contract
 *
 * @property int $id
 * @property string|null $contract_unique_id
 * @property mixed|null $estate_id
 * @property mixed|null $renter_id
 * @property string|null $start_date
 * @property string|null $end_date
 * @property mixed|null $rent
 * @property mixed|null $deposit
 * @property mixed|null $rent_monthly
 * @property mixed|null $deposit_discount
 * @property mixed|null $rent_discount
 * @property int|null $active
 * @property string|null $ban_date
 * @property mixed|null $ban_reason
 * @property string|null $note
 * @property string|null $scanned_contract
 * @property mixed $charge
 * @property-read \App\Models\Estate|null $Estate
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Payment[] $payments
 * @property-read int|null $payments_count
 * @method static \Illuminate\Database\Eloquent\Builder|Contract active()
 * @method static \Illuminate\Database\Eloquent\Builder|Contract inactive()
 * @method static \Illuminate\Database\Eloquent\Builder|Contract newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Contract newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Contract query()
 * @method static \Illuminate\Database\Eloquent\Builder|Contract whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contract whereBanDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contract whereBanReason($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contract whereContractUniqueId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contract whereDeposit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contract whereDepositDiscount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contract whereEndDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contract whereEstateId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contract whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contract whereNote($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contract whereRent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contract whereRentDiscount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contract whereRentMonthly($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contract whereRenterId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contract whereScannedContract($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contract whereStartDate($value)
 * @mixin \Eloquent
 */
class Contract extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = ['id', 'contract_unique_id', 'estate_id', 'renter_id', 'start_date', 'end_date', 'deposit', 'rent', 'rent_monthly', 'deposit_discount', 'rent_discount', 'active', 'ban_date', 'ban_reason', 'note', 'scanned_contract'];

    public function payments(): HasMany
    {
        return $this->hasMany(Payment::class, 'contract_unique_id', 'contract_unique_id');

    }

    public function Estate(): BelongsTo
    {
        return $this->belongsTo(Estate::class);
    }

    protected $casts = [
        'deposit' => \App\Casts\BigInt::class,
        'rent' => \App\Casts\BigInt::class,
        'deposit_discount' => \App\Casts\BigInt::class,
        'rent_discount' => \App\Casts\BigInt::class,
        'charge' => \App\Casts\BigInt::class,
        'rent_monthly' => \App\Casts\BigInt::class,
        'estate_id' => \App\Casts\Integer::class,
        'renter_id' => \App\Casts\Integer::class,
        'ban_reason' => \App\Casts\Integer::class,
    ];

    public function scopeActive($query)
    {
        return $query->where('active', 1)->first();
    }

    public function scopeInactive($query)
    {
        return $query->where('active', 0)->orderBy('id', 'desc')->first();
    }
}
