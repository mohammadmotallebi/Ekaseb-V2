<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\ItemModel
 *
 * @property int $id
 * @property string|null $item_model
 * @property int|null $item_type_id
 * @property-read \App\Models\ItemType|null $type
 * @method static \Illuminate\Database\Eloquent\Builder|ItemModel newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemModel newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemModel query()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemModel whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemModel whereItemModel($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemModel whereItemTypeId($value)
 * @mixin \Eloquent
 */
class ItemModel extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = ['id', 'item_model', 'item_type_id'];


    public function type(): BelongsTo
    {
        return $this->belongsTo(ItemType::class);
    }
}
