<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


/**
 * App\Models\Floor
 *
 * @property int $id
 * @property string|null $floor
 * @property int|null $building_id
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Estate[] $estates
 * @property-read int|null $estates_count
 * @method static \Illuminate\Database\Eloquent\Builder|Floor newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Floor newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Floor query()
 * @method static \Illuminate\Database\Eloquent\Builder|Floor whereBuildingId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Floor whereFloor($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Floor whereId($value)
 * @mixin \Eloquent
 */
class Floor extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = ['id', 'floor'];

    public function estates(): HasMany
    {
       return $this->hasMany(Estate::class);
    }
}
