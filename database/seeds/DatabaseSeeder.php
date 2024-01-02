<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i <= 10; $i++) {
            \Illuminate\Support\Facades\DB::table('shop_items')->insert([
                'item_name' => \Illuminate\Support\Str::random(10),
                'item_code' => \Illuminate\Support\Str::random(20),
                'shop_id' => 1,
                'price' => '200000',
                'item_count' => '2', // password
                'item_cat_id' => '1', // password
            ]);
        }
    }
}
