<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ExcelImport
 *
 * @property string|null $imported_item_supplier
 * @property string|null $imported_Item_category
 * @method static \Illuminate\Database\Eloquent\Builder|ExcelImport newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ExcelImport newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ExcelImport query()
 * @method static \Illuminate\Database\Eloquent\Builder|ExcelImport whereImportedItemCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ExcelImport whereImportedItemSupplier($value)
 * @mixin \Eloquent
 */
class ExcelImport extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = ['imported_item_category', 'imported_item_supplier'];
}
