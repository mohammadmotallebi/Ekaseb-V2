<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Milon\Barcode\DNS1D;
use Milon\Barcode\DNS2D;


/**
 * App\Models\ShopItem
 *
 * @property int|null $id
 * @property string|null $unique_code
 * @property string $item_name
 * @property int $shop_id
 * @property int|null $item_count
 * @property int|null $item_supplier_id
 * @property int|null $item_cat_id
 * @property int|null $item_type_id
 * @property int|null $item_model_id
 * @property int|null $item_color_id
 * @property int|null $item_size_id
 * @property string|null $item_note
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\ItemCode[] $codes
 * @property-read int|null $codes_count
 * @method static \Illuminate\Database\Eloquent\Builder|ShopItem newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ShopItem newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ShopItem query()
 * @method static \Illuminate\Database\Eloquent\Builder|ShopItem whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ShopItem whereItemCatId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ShopItem whereItemColorId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ShopItem whereItemCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ShopItem whereItemModelId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ShopItem whereItemName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ShopItem whereItemNote($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ShopItem whereItemSizeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ShopItem whereItemSupplierId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ShopItem whereItemTypeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ShopItem whereShopId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ShopItem whereUniqueCode($value)
 * @mixin \Eloquent
 */
class ShopItem extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'id',
        'item_name',
        'unique_code',
        'item_name',
        'shop_id',
        'item_count',
        'status',
        'item_supplier_id',
        'item_cat_id',
        'item_type_id',
        'item_model_id',
        'item_color_id',
        'item_size_id',
        'item_note',
    ];

    protected $table = 'shop_items';

    public function codes(): HasMany
    {
        return $this->hasMany(ItemCode::class);
    }

    public function scopeWhereUc($query,$uc)
    {
        return $query->where('unique_code',$uc);
    }

}
