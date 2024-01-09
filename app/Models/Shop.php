<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\ShopItem;
use App\Models\User;

class Shop extends Model
{
    protected $fillable = [
        'id',
        'shop_name',
        'shop_unique_id',
        'email',
        'website',
        'field',
        'estate_id',
    ];
    public $timestamps = false;

    public function shopItems(): HasMany
    {
        return $this->hasMany(ShopItem::class, 'shop_id', 'id');
    }

    public function userFavs(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'shop_user_fav');
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class);
    }


    public function estate(): BelongsToMany
    {
        return $this->belongsToMany(Estate::class);
    }

    public function types(): HasMany
    {
        return $this->hasMany(ItemType::class);
    }

    public $casts = [
        'estate_id' => \App\Casts\Integer::class,
        'field' => \App\Casts\Integer::class,
    ];
}
