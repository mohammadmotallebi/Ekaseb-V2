<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\Shop
 *
 * @property int $id
 * @property string|null $shop_name
 * @property mixed|null $estate_id
 * @property int|null $field_id
 * @property int $shop_unique_id
 * @property string|null $email
 * @property string|null $website
 * @property int|null $shop_manager
 * @property mixed $field
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Estate[] $estate
 * @property-read int|null $estate_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\ShopItem[] $shopItems
 * @property-read int|null $shop_items_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\ItemType[] $types
 * @property-read int|null $types_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\User[] $userFavs
 * @property-read int|null $user_favs_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\User[] $users
 * @property-read int|null $users_count
 * @method static \Illuminate\Database\Eloquent\Builder|Shop newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Shop newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Shop query()
 * @method static \Illuminate\Database\Eloquent\Builder|Shop whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shop whereEstateId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shop whereFieldId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shop whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shop whereShopManager($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shop whereShopName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shop whereShopUniqueId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Shop whereWebsite($value)
 * @mixin \Eloquent
 */
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
        return $this->hasMany('App\Models\ShopItem', 'shop_id', 'id');
    }

    public function userFavs(): BelongsToMany
    {
        return $this->belongsToMany('App\Models\User', 'shop_user_fav');
    }

    public function users(): BelongsToMany
    {
        return $this->belongsToMany('App\Models\User');
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
