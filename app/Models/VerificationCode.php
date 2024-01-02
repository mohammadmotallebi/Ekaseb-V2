<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\VerificationCode
 *
 * @property int $id
 * @property string|null $valid_mobile
 * @property int|null $verification_code
 * @property string $generate_time
 * @method static \Illuminate\Database\Eloquent\Builder|VerificationCode newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|VerificationCode newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|VerificationCode query()
 * @method static \Illuminate\Database\Eloquent\Builder|VerificationCode whereGenerateTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|VerificationCode whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|VerificationCode whereValidMobile($value)
 * @method static \Illuminate\Database\Eloquent\Builder|VerificationCode whereVerificationCode($value)
 * @mixin \Eloquent
 */
class VerificationCode extends Model
{
    use HasFactory;


    protected $fillable = ['valid_mobile', 'verification_code', 'generate_date'];


    public $timestamps = false;
}
