<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


/**
 * App\Models\ItemSize
 *
 * @property int $id
 * @property string|null $item_size
 * @property int|null $item_type_id
 * @property-read \App\Models\ItemType|null $type
 * @method static \Illuminate\Database\Eloquent\Builder|ItemSize newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemSize newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemSize query()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemSize whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemSize whereItemSize($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemSize whereItemTypeId($value)
 * @mixin \Eloquent
 */
class ItemSize extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = ['id', 'item_size', 'item_type_id'];


    public function type(): BelongsTo
    {
        return $this->belongsTo(ItemType::class);
    }
}
