<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


/**
 * App\Models\ItemCategory
 *
 * @property int $id
 * @property string $item_category
 * @property int $shop_id
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\ItemType[] $types
 * @property-read int|null $types_count
 * @method static \Illuminate\Database\Eloquent\Builder|ItemCategory newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemCategory newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemCategory query()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemCategory whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemCategory whereItemCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemCategory whereShopId($value)
 * @mixin \Eloquent
 */
class ItemCategory extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'item_categories';
    protected $fillable = [
        'id',
        'item_category',
        'shop_id'
    ];

    public function types(): HasMany
    {
        return $this->hasMany(ItemType::class);
    }

}
