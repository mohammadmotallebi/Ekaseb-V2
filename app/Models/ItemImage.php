<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


/**
 * App\Models\ItemImage
 *
 * @property int $id
 * @property string|null $unique_code
 * @property string|null $image_url
 * @property string|null $caption
 * @method static \Illuminate\Database\Eloquent\Builder|ItemImage newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemImage newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemImage query()
 * @method static \Illuminate\Database\Eloquent\Builder|ItemImage whereCaption($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemImage whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemImage whereImageUrl($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ItemImage whereUniqueCode($value)
 * @mixin \Eloquent
 */
class ItemImage extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = ['unique_code', 'image_url', 'caption'];
}
