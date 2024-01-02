<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Setting
 *
 * @property int|null $min_insert_shop_item
 * @property int|null $max_insert_shop_item
 * @property float|null $max_time_in_store
 * @property float|null $base_time_for_score
 * @property float|null $score_of_in_store
 * @property float|null $cash_score
 * @property float|null $cashless_score
 * @property int|null $number_of_item_code_digit
 * @property int|null $number_of_shop_unique_code_digit
 * @property int|null $credit_by_price
 * @property int|null $credit_by_credit
 * @method static \Illuminate\Database\Eloquent\Builder|Setting newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Setting newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Setting query()
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereBaseTimeForScore($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereCashScore($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereCashlessScore($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereCreditByCredit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereCreditByPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereMaxInsertShopItem($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereMaxTimeInStore($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereMinInsertShopItem($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereNumberOfItemCodeDigit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereNumberOfShopUniqueCodeDigit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Setting whereScoreOfInStore($value)
 * @mixin \Eloquent
 */
class Setting extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'min_insert_shop_item'
        , 'max_insert_shop_item'
        , 'max_time_in_store'
        , 'score_of_in_store'
        , 'cash_score'
        , 'cashless_score'
        , 'number_of_item_code_digit'
        , 'number_of_shop_unique_code_digit'
        , 'credit_by_price'
        , 'credit_by_credit'
    ];
}
