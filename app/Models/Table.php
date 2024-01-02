<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;


/**
 * App\Models\Table
 *
 * @property int $id
 * @property string $name
 * @property string $label
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Permission[] $permissions
 * @property-read int|null $permissions_count
 * @method static \Illuminate\Database\Eloquent\Builder|Table newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Table newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Table query()
 * @method static \Illuminate\Database\Eloquent\Builder|Table whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Table whereLabel($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Table whereName($value)
 * @mixin \Eloquent
 */
class Table extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = ['name', 'label'];

    public function permissions() : HasMany
    {
       return $this->hasMany(Permission::class);
    }
}
