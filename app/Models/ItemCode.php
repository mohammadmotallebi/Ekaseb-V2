<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


/**
 * App\Models\ItemCode
 *
 * @property int $id
 * @property string $item_id
 * @property string $item_code
 * @property string|null $qrcode
 * @property int $status
 * @method static \Illuminate\Database\Eloquent\Builder|ItemCode newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemCode newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemCode query()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemCode whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemCode whereItemCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemCode whereItemId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemCode whereQrcode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemCode whereStatus($value)
 * @mixin \Eloquent
 */
class ItemCode extends Model
{
    protected $table = 'item_codes';
    public $timestamps = false;

    protected $fillable = ['item_id', 'item_code', 'qrcode','status'];


}
