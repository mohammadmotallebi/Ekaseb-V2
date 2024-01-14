<?php


namespace App\Repository\UsersRepository;

use Illuminate\Support\Facades\DB;


class UsersRepositoryQueries implements UsersRepositoryInterface
{
    public function UsersActivationQuery($id, $limit = 0): array
    {
        if ($limit === 0) {
            $top = '';
        } else {
            $top = 'TOP ' . $limit;
        }
        return DB::select("SELECT $top item_prices.item_price, item_credits.item_credit, item_scores.item_score, item_codes.item_code, bills.user_id, bills.buy_date, shops.id, shop_items.item_name, shops.shop_name, item_scores.id itemscoreid, SUM(CAST(item_scores.item_score AS SIGNED)) totalscore, SUM(CAST(item_credits.item_credit AS SIGNED)) totalcredit, SUM(CAST(item_prices.item_price AS SIGNED)) total
FROM shop_items
     INNER JOIN item_codes ON shop_items.unique_code=item_codes.unique_code
     RIGHT OUTER JOIN bill_items
                      INNER JOIN bills ON bill_items.bill_id=bills.id
                      INNER JOIN shops ON bills.shop_id=shops.id
                      LEFT OUTER JOIN item_credits ON bill_items.item_credit_id=item_credits.id
                      LEFT OUTER JOIN item_scores ON bill_items.item_score_id=item_scores.id
                      LEFT OUTER JOIN item_prices ON bill_items.item_price_id=item_prices.id ON item_codes.id=bill_items.item_code_id
WHERE        (bills.user_id = ?)
GROUP BY item_prices.item_price, item_credits.item_credit, item_scores.item_score, item_codes.item_code, bills.user_id, bills.buy_date, shops.id, shop_items.item_name, shops.shop_name, item_scores.id
ORDER BY bills.buy_date DESC", [$id]);

    }

    public function shopSellsDetail($id, $sid): \Illuminate\Support\Collection
    {
        return DB::table('bill_items')
            ->join('bills', 'bill_items.bill_id', '=', 'bills.id')
            ->leftJoin('item_categories', 'item_categories.id', '=', 'shop_items.item_cat_id')
            ->leftJoin('shop_items', 'shop_items.shop_id', '=', 'shop_user.shop_id')
            ->leftJoin('shop_user', 'shop_items.shop_id', '=', 'shop_user.shop_id')
            ->leftJoin('item_codes', 'shop_items.unique_code', '=', 'item_codes.unique_code')
            ->leftJoin('item_scores', 'shop_items.id', '=', 'item_scores.item_code')
            ->select('shop_items.id', 'shop_items.item_name', 'shop_items.shop_id', 'shop_items.item_cat_id', 'bills.status', 'item_categories.item_category',
                'item_scores.item_score', 'item_scores.unique_code', 'item_scores.add_date', 'item_scores.start_date', 'item_scores.end_date', 'bills.buy_date')
            ->where('shop_user.user_id', $id)
            ->where('shop_items.shop_id', $sid)
            ->orderBy('bills.buy_date', 'DESC')
            ->get();
        // convert to SQL query
//         SELECT shop_items.id, shop_items.item_name, shop_items.shop_id, shop_items.item_cat_id, bills.status, item_categories.item_category, item_scores.item_score, item_scores.unique_code, item_scores.add_date, item_scores.start_date, item_scores.end_date, bills.buy_date
//         FROM bill_items
//         INNER JOIN bills ON bill_items.bill_id=bills.id
//         LEFT OUTER JOIN item_categories ON item_categories.id=shop_items.item_cat_id
//         LEFT OUTER JOIN shop_items ON shop_items.shop_id=shop_user.shop_id
//         LEFT OUTER JOIN shop_user ON shop_items.shop_id=shop_user.shop_id
//         LEFT OUTER JOIN item_codes ON shop_items.id=item_codes.item_id
//         LEFT OUTER JOIN item_scores ON shop_items.id=item_scores.item_code
//         WHERE (shop_user.user_id = 1) AND (shop_items.shop_id = 1)
//         ORDER BY bills.buy_date DESC

    }

    //
    public function userBuyListQuery()
    {
        $userId = CurrentUserID();
        return DB::table('shop_items')
            ->leftJoin('item_codes', 'shop_items.unique_code', '=', 'item_codes.unique_code')
            ->leftJoin('bills', 'bill_items.bill_id', '=', 'bills.id')
            ->leftJoin('shops', 'shop_items.shop_id', '=', 'shops.id')
            ->leftJoin('item_scores', 'shop_items.id', '=', 'item_scores.item_code')
            ->select(
                'bills.bill_number',
                'bills.status',
                'bills.shop_id',
                'bills.user_id',
                'bills.buy_date',
                'shop_items.item_name',
                'item_codes.item_code',
                'shops.shop_name'
            )
            ->where('bills.user_id', '=', $userId)
            ->get();
    }
}
