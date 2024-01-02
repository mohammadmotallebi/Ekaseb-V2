<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\PaymentReason
 *
 * @property int $id
 * @property string|null $reason
 * @property int|null $fund_id
 * @property int|null $for_contract
 * @property-read \App\Models\Fund|null $fund
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Payment[] $payments
 * @property-read int|null $payments_count
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentReason newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentReason newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentReason query()
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentReason whereForContract($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentReason whereFundId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentReason whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PaymentReason whereReason($value)
 * @mixin \Eloquent
 */
class PaymentReason extends Model
{
    use HasFactory;

    protected $table = 'payment_reasons';
    public $timestamps = false;
    protected $fillable = ['id', 'reason', 'fund_id', 'for_contract'];

    public function fund(): BelongsTo
    {
        return $this->belongsTo(Fund::class);
    }

    public function payments(): HasMany
    {
        return $this->hasMany(Payment::class);
    }
}
