<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

/**
 * App\Models\Fund
 *
 * @property int $id
 * @property string|null $fund_name
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\CostType[] $cost_types
 * @property-read int|null $cost_types_count
 * @property-read \App\Models\Cost|null $costs
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\PaymentReason[] $payment_reasons
 * @property-read int|null $payment_reasons_count
 * @property-read \App\Models\Payment|null $payments
 * @method static \Illuminate\Database\Eloquent\Builder|Fund newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Fund newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Fund query()
 * @method static \Illuminate\Database\Eloquent\Builder|Fund whereFundName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Fund whereId($value)
 * @mixin \Eloquent
 */
class Fund extends Model
{
    use HasFactory;

    protected $fillable = ['fund_name'];

    /**
     * @var string
     */
    protected $primaryKey = 'id';

    public $timestamps = false;

    public function payment_reasons(): HasMany
    {
        return $this->hasMany(PaymentReason::class);
    }

    public function cost_types(): HasMany
    {
        return $this->hasMany(CostType::class);
    }

    public function payments(): HasOneThrough
    {
        return $this->hasOneThrough(Payment::class, PaymentReason::class);
    }

    public function costs(): HasOneThrough
    {
        return $this->hasOneThrough(Cost::class, CostType::class);
    }
}
