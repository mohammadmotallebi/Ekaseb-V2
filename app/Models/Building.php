<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


/**
 * App\Models\Building
 *
 * @property int $id
 * @property string|null $building_name
 * @property-read \Illuminate\Database\Eloquent\Collection|Building[] $details
 * @property-read int|null $details_count
 * @method static \Illuminate\Database\Eloquent\Builder|Building newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Building newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Building query()
 * @method static \Illuminate\Database\Eloquent\Builder|Building whereBuildingName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Building whereId($value)
 * @mixin \Eloquent
 */
class Building extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'building_name'];
    public $timestamps = false;

    public function details()
    {
        return $this->hasMany('App\Models\Building');
    }
}
