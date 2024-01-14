<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\BillItem;

class Bill extends Model
{
    protected $guarded = [];

    public function items(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(BillItem::class);
    }
}
