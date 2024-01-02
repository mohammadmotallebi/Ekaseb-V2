<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ItemSupplier
 *
 * @property int $id
 * @property int|null $supplier_code
 * @property string $item_supplier
 * @property int $shop_id
 * @property string|null $add_date
 * @property int|null $status
 * @method static \Illuminate\Database\Eloquent\Builder|ItemSupplier newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemSupplier newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemSupplier query()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemSupplier whereAddDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemSupplier whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemSupplier whereItemSupplier($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemSupplier whereShopId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemSupplier whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemSupplier whereSupplierCode($value)
 * @mixin \Eloquent
 */
class ItemSupplier extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = ['id', 'supplier_code', 'item_supplier', 'shop_id', 'add_date', 'status'];
}
