<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ItemScore
 *
 * @property int $id
 * @property string $item_code
 * @property string|null $unique_code
 * @property int $item_score
 * @property string|null $add_date
 * @property string|null $start_date
 * @property string|null $end_date
 * @property int|null $status
 * @method static \Illuminate\Database\Eloquent\Builder|ItemScore newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemScore newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemScore query()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemScore whereAddDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemScore whereEndDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemScore whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemScore whereItemCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemScore whereItemScore($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemScore whereStartDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemScore whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemScore whereUniqueCode($value)
 * @mixin \Eloquent
 */
class ItemScore extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = ['item_score', 'item_code', 'unique_code', 'add_date', 'start_date', 'end_date'];

}
