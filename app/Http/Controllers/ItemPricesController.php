<?php

namespace App\Http\Controllers;

use App\Models\ItemCode;
use App\Models\ItemPrice;

class ItemPricesController extends Controller
{
    public function index($unique_code)
    {
        return ItemPrice::where('unique_code', $unique_code)->limit(1)->get();
    }

    public function create()
    {
        return view('Shop_Items.price.create');
    }

    public function store()
    {
        $codes = ItemCode::where('item_id', cache('uc'))->get();
        \Cache::forget('price');
        try {
            foreach ($codes as $code) {
                ItemPrice::create([
                    'item_price' => arabicToEnglishNumber(str_replace(',', '', \request('item_price'))),
                    'item_code' => $code->item_code,
                    'unique_code' => cache('uc'),
                    'add_date' => fullDate(),
                    'status' => 1,
                ]);
            }

            cache()->rememberForever('price',  function (){
               return ItemPrice::where('unique_code',cache('uc'))->limit(1)->get();
            });
            return 1;
        } catch (\Exception $e) {

            return $e;
        }

    }

}
