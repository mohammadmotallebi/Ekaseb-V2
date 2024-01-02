<?php

namespace App\Models;

use App\Casts\Integer;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\CostType
 *
 * @property int $id
 * @property string|null $cost_type
 * @property mixed|null $fund_id
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Cost[] $costs
 * @property-read int|null $costs_count
 * @property-read \App\Models\Fund|null $fund
 * @method static \Illuminate\Database\Eloquent\Builder|CostType newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|CostType newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|CostType query()
 * @method static \Illuminate\Database\Eloquent\Builder|CostType whereCostType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CostType whereFundId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CostType whereId($value)
 * @mixin \Eloquent
 */
class CostType extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = ['cost_type', 'fund_id'];


    public function fund(): BelongsTo
    {
        return $this->belongsTo(Fund::class);
    }

    public function costs(): HasMany
    {
        return $this->hasMany(Cost::class);
    }

    protected $casts = [
        'fund_id' => Integer::class,
    ];

}
