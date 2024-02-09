<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ContractUser extends Model
{
    protected $table = 'contract_users';

    public $timestamps = false;

    protected $fillable = ['id','identity_code', 'category_id', 'building_id', 'name', 'family', 'father', 'gender', 'birthday', 'password',
        'mobile', 'mobile_back', 'shenasnameh', 'sadereh', 'tel', 'address'];

    public function contracts(): HasMany
    {
        return $this->hasMany(Contract::class, 'renter_id', 'id');
    }
}
