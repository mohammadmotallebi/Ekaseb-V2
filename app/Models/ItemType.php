<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\ItemType
 *
 * @property int $id
 * @property string $item_type
 * @property int $shop_item_category_id
 * @property int $shop_id
 * @property-read \App\Models\ShopItem $item
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\ItemModel[] $models
 * @property-read int|null $models_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\ItemSize[] $sizes
 * @property-read int|null $sizes_count
 * @method static \Illuminate\Database\Eloquent\Builder|ItemType newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemType newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemType query()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemType whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemType whereItemType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemType whereShopId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemType whereShopItemCategoryId($value)
 * @mixin \Eloquent
 */
class ItemType extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = ['id', 'item_type', 'shop_item_category_id', 'shop_id'];


    public function item(): BelongsTo
    {
        return $this->belongsTo(ShopItem::class);
    }


    public function models(): HasMany
    {
        return $this->hasMany(ItemModel::class);
    }

    public function sizes(): HasMany
    {
        return $this->hasMany(ItemSize::class);
    }

}
