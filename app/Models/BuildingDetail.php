<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\BuildingDetail
 *
 * @property int $id
 * @property int|null $building_id
 * @property int|null $contact_type_id
 * @property string|null $contact
 * @property string|null $note
 * @method static \Illuminate\Database\Eloquent\Builder|BuildingDetail newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BuildingDetail newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|BuildingDetail query()
 * @method static \Illuminate\Database\Eloquent\Builder|BuildingDetail whereBuildingId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BuildingDetail whereContact($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BuildingDetail whereContactTypeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BuildingDetail whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|BuildingDetail whereNote($value)
 * @mixin \Eloquent
 */
class BuildingDetail extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'building_id', 'contact_type_id', 'contact', 'note'];
    public $timestamps = false;
}
