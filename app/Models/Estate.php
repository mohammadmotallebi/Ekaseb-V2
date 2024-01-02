<?php

namespace App\Models;



use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

/**
 * App\Models\Estate
 *
 * @property int $id
 * @property string|null $old_id
 * @property string|null $code
 * @property mixed|null $building_id
 * @property string|null $dimension
 * @property mixed|null $floor_id
 * @property string|null $telephone
 * @property string|null $powerid
 * @property string|null $postal
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\ChargePayment[] $charges
 * @property-read int|null $charges_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\ContractUser[] $contractUsers
 * @property-read int|null $contract_users_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Contract[] $contracts
 * @property-read int|null $contracts_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Shop[] $shops
 * @property-read int|null $shops_count
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\User[] $users
 * @property-read int|null $users_count
 * @method static \Illuminate\Database\Eloquent\Builder|Estate newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Estate newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Estate query()
 * @method static \Illuminate\Database\Eloquent\Builder|Estate whereBuildingId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Estate whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Estate whereDimension($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Estate whereFloorId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Estate whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Estate whereOldId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Estate wherePostal($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Estate wherePowerid($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Estate whereTelephone($value)
 * @mixin \Eloquent
 */
class Estate extends Model
{
    use HasFactory;


    public $timestamps = false;
    protected $fillable = ['id', 'building_id', 'old_id', 'code', 'dimension', 'floor_id', 'telephone', 'postal', 'powerid'];
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class);
    }

    public function contractUsers(): BelongsToMany
    {
        return $this->belongsToMany(ContractUser::class);
    }
    public function shops(): HasMany
    {
        return $this->hasMany(Shop::class);
    }

    public function contracts(): HasMany
    {
        return $this->hasMany(Contract::class);
    }

    public function charges(): HasMany
    {
        return $this->hasMany(ChargePayment::class);
    }


    public $casts = [
        'floor_id' => \App\Casts\Integer::class,
        'building_id' => \App\Casts\Integer::class,
    ];


    public function getActivitylogOptions(): LogOptions
    {
        // TODO: Implement getActivitylogOptions() method.
    }
}
