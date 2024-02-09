<?php

namespace App\Http\Controllers;

use App\Models\ItemScore;
use App\Models\ItemCode;

class ItemScoresController extends Controller
{
    public function index($unique_code)
    {

        return ItemScore::where('unique_code', $unique_code)->limit(1)->get();
    }

    public function create()
    {
        return view('Shop_Items.score.create');
    }

    public function store()
    {
        $codes = ItemCode::where('unique_code', request('unique_code'))->get();
        \Cache::forget('score');
        try {
            foreach ($codes as $code) {
                ItemScore::create([
                    'item_score' => \request('item_score'),
                    'item_code' => $code->item_code,
                    'unique_code' => request('unique_code'),
                    'add_date' => fullDate(),
                    'start_date' => \request('start_date'),
                    'end_date' => \request('end_date'),
                    'status' => 1,
                ]);

            }
            cache()->rememberForever('score', function () {
                return ItemScore::where('unique_code', request('unique_code'))->limit(1)->get();
            });
            return 1;
        } catch (\Exception $e) {
            return $e;
        }

    }

}
