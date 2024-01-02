<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticate;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;

/**
 * App\Models\User
 *
 * @property int $id
 * @property string|null $identity_code
 * @property string|null $name
 * @property string|null $family
 * @property int|null $building_id
 * @property int|null $gender
 * @property string|null $birthday
 * @property string $mobile
 * @property string|null $mobile_back
 * @property string|null $shenasnameh
 * @property string|null $sadereh
 * @property string|null $ref_user
 * @property string|null $tel
 * @property int|null $city
 * @property int|null $state
 * @property string|null $address
 * @property string|null $password
 * @property string|null $email
 * @property int|null $job
 * @property string|null $father_name
 * @property string|null $wedding_date
 * @property string|null $weight
 * @property string|null $height
 * @property int|null $int_color
 * @property int|null $active
 * @property string|null $remember_token
 * @property string|null $user_pic
 * @property bool|null $is_admin
 * @property int|null $mobile_app
 * @property string|null $default_theme
 * @property int|null $darktheme
 * @property int|null $auto_darktheme
 * @property int|null $wild_card
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Card[] $cards
 * @property-read int|null $cards_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Contract[] $contracts
 * @property-read int|null $contracts_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\ShopperCredit[] $credits
 * @property-read int|null $credits_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Estate[] $estates
 * @property-read int|null $estates_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Shop[] $favShops
 * @property-read int|null $fav_shops_count
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Permission[] $permissions
 * @property-read int|null $permissions_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Role[] $roles
 * @property-read int|null $roles_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Shop[] $shops
 * @property-read int|null $shops_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\VerificationCode[] $verificationCode
 * @property-read int|null $verification_code_count
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereAutoDarktheme($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereBirthday($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereBuildingId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereDarktheme($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereDefaultTheme($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereFamily($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereFatherName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereGender($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereHeight($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereIdentityCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereIntColor($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereIsAdmin($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereJob($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereMobile($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereMobileApp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereMobileBack($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRefUser($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereSadereh($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereShenasnameh($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereState($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereTel($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUserPic($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereWeddingDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereWeight($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereWildCard($value)
 * @mixin \Eloquent
 */
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

    public function contracts(): HasMany
    {
        return $this->hasMany(Contract::class, 'renter_id', 'id');
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
