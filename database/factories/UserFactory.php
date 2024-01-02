<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(\App\ShopItem::class, function (Faker $faker) {
    return [
        'item_name' => $faker->name,
        'shop_id' => 1,
        'price' => '200000',
        'item_count' => '2', // password
        'item_cat_id' => '1', // password
    ];
});
