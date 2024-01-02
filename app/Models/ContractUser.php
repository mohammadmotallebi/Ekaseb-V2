<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\ContractUser
 *
 * @property int $id
 * @property string|null $identity_code
 * @property string|null $name
 * @property string|null $family
 * @property string|null $father
 * @property int|null $building_id
 * @property int|null $gender
 * @property string|null $birthday
 * @property string $mobile
 * @property string|null $mobile_back
 * @property string|null $shenasnameh
 * @property string|null $sadereh
 * @property string|null $tel
 * @property string|null $address
 * @method static \Illuminate\Database\Eloquent\Builder|ContractUser newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ContractUser newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ContractUser query()
 * @method static \Illuminate\Database\Eloquent\Builder|ContractUser whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContractUser whereBirthday($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContractUser whereBuildingId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContractUser whereFamily($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContractUser whereFather($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContractUser whereGender($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContractUser whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContractUser whereIdentityCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContractUser whereMobile($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContractUser whereMobileBack($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContractUser whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContractUser whereSadereh($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContractUser whereShenasnameh($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContractUser whereTel($value)
 * @mixin \Eloquent
 */
class ContractUser extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = ['id','identity_code', 'category_id', 'building_id', 'name', 'family', 'father', 'gender', 'birthday', 'password',
        'mobile', 'mobile_back', 'shenasnameh', 'sadereh', 'tel', 'address'];
}
