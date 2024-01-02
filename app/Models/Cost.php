<?php

namespace App\Models;

use App\Casts\BigInt;
use App\Casts\Integer;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\Cost
 *
 * @property int $id
 * @property string|null $cost_method
 * @property mixed|null $cost_type_id
 * @property string|null $cost_date
 * @property mixed|null $price
 * @property string|null $note
 * @property string|null $cheque_number
 * @property string|null $cheque_date
 * @property int|null $bank
 * @property string|null $bank_branch
 * @property string|null $account_number
 * @property int|null $passed
 * @property-read \App\Models\CostType|null $cost_type
 * @method static \Illuminate\Database\Eloquent\Builder|Cost newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Cost newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Cost query()
 * @method static \Illuminate\Database\Eloquent\Builder|Cost whereAccountNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cost whereBank($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cost whereBankBranch($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cost whereChequeDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cost whereChequeNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cost whereCostDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cost whereCostMethod($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cost whereCostTypeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cost whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cost whereNote($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cost wherePassed($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Cost wherePrice($value)
 * @mixin \Eloquent
 */
class Cost extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = ['cost_type_id', 'cost_method', 'subject', 'cheque_number', 'cost_date', 'cheque_date', 'bank', 'bank_branch', 'account_number', 'price', 'note'];


    public function cost_type(): BelongsTo
    {
        return $this->belongsTo(CostType::class);
    }


    protected $casts = [
        'cost_type_id' => Integer::class,
        'price' => BigInt::class
    ];
}
