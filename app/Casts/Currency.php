<?php

namespace App\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;

class Currency implements CastsAttributes
{

    protected $algorithm;

    public function __construct($algorithm = null)
    {
        $this->algorithm = $algorithm;
    }

    public function get($model, $key, $value, $attributes)
    {
        return number_format($value);
    }

    public function set($model, $key, $value, $attributes)
    {
        return number_format($value);
    }
}
