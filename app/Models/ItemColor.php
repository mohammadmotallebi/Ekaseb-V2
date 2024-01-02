<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


/**
 * App\Models\ItemColor
 *
 * @property int $id
 * @property string|null $item_color
 * @property int|null $shop_id
 * @method static \Illuminate\Database\Eloquent\Builder|ItemColor newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemColor newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemColor query()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemColor whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemColor whereItemColor($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemColor whereShopId($value)
 * @mixin \Eloquent
 */
class ItemColor extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = ['id', 'item_color','shop_id'];

}
