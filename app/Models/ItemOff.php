<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ItemOff
 *
 * @property int $id
 * @property int|null $off_price
 * @property int|null $off_percent
 * @property string|null $start_date
 * @property string|null $end_date
 * @property string|null $unique_code
 * @property string|null $status
 * @method static \Illuminate\Database\Eloquent\Builder|ItemOff newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemOff newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemOff query()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemOff whereEndDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemOff whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemOff whereOffPercent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemOff whereOffPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemOff whereStartDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemOff whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemOff whereUniqueCode($value)
 * @mixin \Eloquent
 */
class ItemOff extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = ['off_price','off_percent','start_date','end_date','unique_code','status'];

    protected $table = 'item_offs';
}
