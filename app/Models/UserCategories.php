<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


/**
 * App\Models\UserCategories
 *
 * @property int $id
 * @property string|null $category_name
 * @property string|null $score سقف اعتبار قابل استفاده در روز
 * @property string|null $glyphs
 * @method static \Illuminate\Database\Eloquent\Builder|UserCategories newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UserCategories newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UserCategories query()
 * @method static \Illuminate\Database\Eloquent\Builder|UserCategories whereCategoryName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserCategories whereGlyphs($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserCategories whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserCategories whereScore($value)
 * @mixin \Eloquent
 */
class UserCategories extends Model
{
    protected $fillable = [
        'id', 'category_name', 'score', 'glyphs'
    ];
}
