<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\BillItem
 *
 * @property int $id
 * @property int $bill_id
 * @property int|null $item_id
 * @property int|null $item_price_id
 * @property int|null $item_credit_id
 * @property int|null $item_score_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|BillItem newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BillItem newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BillItem query()
 * @method static \Illuminate\Database\Eloquent\Builder|BillItem whereBillId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BillItem whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BillItem whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BillItem whereItemCreditId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BillItem whereItemId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BillItem whereItemPriceId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BillItem whereItemScoreId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BillItem whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class BillItem extends Model
{

    protected $fillable = ['bill_id', 'item_id', 'item_price_id','item_credit_id','item_score_id', 'status'];

}
