<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\EstateDetail
 *
 * @property int $id
 * @property int|null $estate_id
 * @property string|null $price
 * @property string|null $rent
 * @property string|null $start_date
 * @property string|null $end_date
 * @property int|null $active
 * @method static \Illuminate\Database\Eloquent\Builder|EstateDetail newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|EstateDetail newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|EstateDetail query()
 * @method static \Illuminate\Database\Eloquent\Builder|EstateDetail whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|EstateDetail whereEndDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|EstateDetail whereEstateId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|EstateDetail whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|EstateDetail wherePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|EstateDetail whereRent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|EstateDetail whereStartDate($value)
 * @mixin \Eloquent
 */
class EstateDetail extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = 'estate_details';

    protected $fillable = ['id', 'estate_id', 'price', 'rent', 'start_date', 'end_date', 'active'];

}
