<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


/**
 * App\Models\Field
 *
 * @property int $id
 * @property string $filed_name
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Shop[] $shops
 * @property-read int|null $shops_count
 * @method static \Illuminate\Database\Eloquent\Builder|Field newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Field newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Field query()
 * @method static \Illuminate\Database\Eloquent\Builder|Field whereFiledName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Field whereId($value)
 * @mixin \Eloquent
 */
class Field extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'field_name'];
    public $timestamps = false;

    public function shops()
    {
        return $this->hasMany('App\Models\Shop');
    }

}
