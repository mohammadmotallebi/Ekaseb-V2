<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class ShopperCreditsController extends Controller
{
    public function getCredit()
    {
        $c = 0;
        $status = 0;
        $shops = array();
        $shops = array_map('intval', \App\Models\User::find(CurrentUserID())->shops()->pluck('id')->toArray());

//        $details = DB::table('shop_items')
//            ->join('item_codes', 'shop_items.id', '=', 'item_codes.item_id')
//            ->leftJoin('bill_items', 'item_codes.id', '=', 'bill_items.item_id')
//            ->leftJoin('item_scores', 'shop_items.id', '=', 'item_scores.item_id')
//            ->select(DB::raw('
//            shop_items.id,shop_items.shop_id,
//             COUNT(item_codes.id) AS CountOfItems,
//             Count(bill_items.id) AS Sold,
//             (COUNT(item_codes.id) - Count(bill_items.id)) as RemainItem,
//              SUM(CAST(item_scores.score AS int)) AS TotalScore,
//             SUM(CAST(item_scores.credit AS int)) AS TotalCredit,
//             (Count(bill_items.id) * item_scores.score) as UsedScore,
//             (Count(bill_items.id) * item_scores.credit) as UsedCredit,
//             (SUM(CAST(item_scores.score AS int)) -(Count(bill_items.id) * item_scores.score)) As RemainScore,
//             (SUM(CAST(item_scores.credit AS int)) -(Count(bill_items.id) * item_scores.credit)) As RemainCredit'))
//            ->whereIn('shop_items.shop_id', $shops)
//            ->groupBy('shop_items.id', 'shop_items.shop_id', 'item_scores.score','item_scores.credit')
//            ->get();


    }
}
