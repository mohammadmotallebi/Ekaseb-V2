<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ShopperCredit
 *
 * @property int $id
 * @property int|null $user_id
 * @property int|null $credit
 * @property string|null $credit_date
 * @method static \Illuminate\Database\Eloquent\Builder|ShopperCredit newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ShopperCredit newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ShopperCredit query()
 * @method static \Illuminate\Database\Eloquent\Builder|ShopperCredit whereCredit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ShopperCredit whereCreditDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ShopperCredit whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ShopperCredit whereUserId($value)
 * @mixin \Eloquent
 */
class ShopperCredit extends Model
{
    use HasFactory;

    protected $table = 'shopper_credits';

    protected $fillable = ['user_id', 'credit', 'credit_date'];
}
