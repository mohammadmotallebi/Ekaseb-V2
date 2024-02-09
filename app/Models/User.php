<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticate;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;

class User extends Authenticate
{
    use Notifiable;

    public $timestamps = false;

    protected $guarded = [];

//    protected $fillable = ['identity_code', 'category_id', 'building_id', 'name', 'family', 'gender', 'birthday', 'password',
//        'mobile', 'mobile_back', 'ref_user', 'shenasnameh', 'sadereh', 'tel', 'city', 'state', 'address', 'email',
//        'job', 'father_name', 'wedding_date', 'weight', 'height', 'int_color', 'active', 'user_pic', 'default_theme', 'darktheme', 'auto_darktheme'];

    protected $hidden = [
        'password', 'remember_token'
    ];

    protected $casts = [
        'is_admin' => 'boolean',
    ];


    public function cards(): HasMany
    {
        return $this->hasMany(Card::class, 'user_id', 'id');
    }

    public function favShops(): BelongsToMany
    {
        return $this->belongsToMany(Shop::class, 'shop_user_fav');
    }

    public function shops(): BelongsToMany
    {
        return $this->belongsToMany(Shop::class);
    }

    public function credits(): HasMany
    {
        return $this->hasMany(ShopperCredit::class);
    }

    public function getAuthPassword()
    {
        return $this->password;
    }

    public function estates(): BelongsToMany
    {
        return $this->belongsToMany(Estate::class);
    }



    public function hasRole($role): bool
    {
        if (Auth::user()->is_admin == 1) {

            return true;

        } else {
            if (is_string($role)) {
                return $this->roles->contains('name', $role);
            }
            return !!$role->intersect($this->roles)->count();
        }
    }

    public function assignRole($role)
    {
        $this->roles()->sync(Role::whereName($role)->firstOrFail());
    }

    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class);
    }

    public function verificationCode(): HasMany
    {
        return $this->hasMany(VerificationCode::class, 'user_id', 'id');
    }


    public function permissions(): BelongsToMany
    {
        return $this->belongsToMany(Permission::class);
    }

}
