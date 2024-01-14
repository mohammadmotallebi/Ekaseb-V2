<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Milon\Barcode\DNS1D;
use Milon\Barcode\DNS2D;


class ShopItem extends Model
{
    public $timestamps = false;
    protected $guarded = [];

    protected $table = 'shop_items';

    public function codes(): HasMany
    {
        return $this->hasMany(ItemCode::class, 'unique_code', 'unique_code');
    }

    public function scopeWhereUc($query,$uc)
    {
        return $query->where('unique_code',$uc);
    }

}
