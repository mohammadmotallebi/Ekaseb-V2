<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\State
 *
 * @property int|null $id
 * @property string|null $name
 * @property int|null $shahr_type
 * @property int|null $ostan
 * @property int|null $shahrestan
 * @property int|null $bakhsh
 * @method static \Illuminate\Database\Eloquent\Builder|State newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|State newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|State query()
 * @method static \Illuminate\Database\Eloquent\Builder|State whereBakhsh($value)
 * @method static \Illuminate\Database\Eloquent\Builder|State whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|State whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|State whereOstan($value)
 * @method static \Illuminate\Database\Eloquent\Builder|State whereShahrType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|State whereShahrestan($value)
 * @mixin \Eloquent
 */
class State extends Model
{
    protected $fillable = [
        'name',
        'shahr_type',
        'ostan',
        'shahrestan',
        'bakhsh'
    ];
}
