<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


/**
 * App\Models\ItemCredit
 *
 * @property int $id
 * @property string $item_code
 * @property int $item_credit
 * @property string|null $unique_code
 * @property string|null $add_date
 * @property string|null $start_date
 * @property string|null $end_date
 * @property int|null $status
 * @method static \Illuminate\Database\Eloquent\Builder|ItemCredit newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemCredit newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemCredit query()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemCredit whereAddDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemCredit whereEndDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemCredit whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemCredit whereItemCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemCredit whereItemCredit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemCredit whereStartDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemCredit whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemCredit whereUniqueCode($value)
 * @mixin \Eloquent
 */
class ItemCredit extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = ['item_credit', 'item_code','unique_code', 'add_date', 'start_date', 'end_date'];

}
