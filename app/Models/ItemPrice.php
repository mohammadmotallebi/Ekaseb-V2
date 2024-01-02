<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ItemPrice
 *
 * @property int $id
 * @property string $item_code
 * @property string|null $unique_code
 * @property string $item_price
 * @property string $add_date
 * @property int $status
 * @method static \Illuminate\Database\Eloquent\Builder|ItemPrice newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemPrice newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemPrice query()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemPrice whereAddDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemPrice whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemPrice whereItemCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemPrice whereItemPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemPrice whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemPrice whereUniqueCode($value)
 * @mixin \Eloquent
 */
class ItemPrice extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = ['item_code', 'item_price','unique_code', 'add_date', 'status'];
}
