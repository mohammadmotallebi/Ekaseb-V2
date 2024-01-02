<?php


namespace App\Repository\UsersRepository;

use Illuminate\Support\Facades\DB;


class UsersRepositoryQueries implements UsersRepositoryInterface
{
    public function UsersActivationQuery($id, $limit = 0)
    {
        if ($limit == 0) {
            $top = '';
        } else {
            $top = 'TOP ' . $limit;
        }
        return DB::select("SELECT $top item_prices.item_price, item_credits.item_credit, item_scores.item_score, item_codes.item_code, bills.user_id, bills.buy_date, shops.id, shop_items.item_name, shops.shop_name, item_scores.id itemscoreid, SUM(CAST(item_scores.item_score AS SIGNED)) totalscore, SUM(CAST(item_credits.item_credit AS SIGNED)) totalcredit, SUM(CAST(item_prices.item_price AS SIGNED)) total
FROM shop_items
     INNER JOIN item_codes ON shop_items.unique_code=item_codes.item_id
     RIGHT OUTER JOIN bill_items
                      INNER JOIN bills ON bill_items.bill_id=bills.id
                      INNER JOIN shops ON bills.shop_id=shops.id
                      LEFT OUTER JOIN item_credits ON bill_items.item_credit_id=item_credits.id
                      LEFT OUTER JOIN item_scores ON bill_items.item_score_id=item_scores.id
                      LEFT OUTER JOIN item_prices ON bill_items.item_price_id=item_prices.id ON item_codes.id=bill_items.item_id
WHERE        (bills.user_id = ?)
GROUP BY item_prices.item_price, item_credits.item_credit, item_scores.item_score, item_codes.item_code, bills.user_id, bills.buy_date, shops.id, shop_items.item_name, shops.shop_name, item_scores.id
ORDER BY bills.buy_date DESC", [$id]);

    }

    public function ItemDetailQuery($item)
    {
        return DB::select("SELECT        shops.shop_name, shop_items.item_name, shop_items.price, item_scores.score, item_scores.credit, item_codes.item_code, CASE WHEN
                             (SELECT        COUNT(*)
                               FROM            bill_items
                               WHERE        item_id = item_codes.id) > 0 THEN 0 ELSE 1 END AS valid, shop_item_categories.item_category_name
FROM            item_codes LEFT OUTER JOIN
                         shop_items INNER JOIN
                         shops ON shop_items.shop_id = shops.id INNER JOIN
                         shop_item_categories ON shop_items.item_cat_id = shop_item_categories.id LEFT OUTER JOIN
                         item_scores ON shop_items.id = item_scores.item_id ON item_codes.item_id = shop_items.id
WHERE        item_codes.item_code = ?", [$item]);

    }

    public function ItemGroupQuery($item)
    {
        return DB::select("
SELECT        shop_items.id, shop_items.item_name, shop_items.item_cat_id, shop_items.price, CAST(item_scores.score AS float) AS Score, CAST(item_scores.credit AS float) AS Credit, COUNT(item_codes.item_code) AS Total,
                         COUNT(bill_items.item_id) AS Sold, COUNT(item_codes.item_code) - COUNT(bill_items.item_id) AS Remaining, shop_item_categories.item_category_name
FROM            item_scores RIGHT OUTER JOIN
                         shop_items INNER JOIN
                         shop_item_categories ON shop_items.item_cat_id = shop_item_categories.id ON item_scores.item_id = shop_items.id RIGHT OUTER JOIN
                         bill_items RIGHT OUTER JOIN
                         item_codes ON bill_items.item_id = item_codes.id ON shop_items.id = item_codes.item_id
WHERE        (shop_items.shop_id = ?) and (shop_items.status = 1)
GROUP BY shop_items.id, shop_items.item_name, shop_items.price, shop_items.item_cat_id, item_scores.score, item_scores.credit, shop_item_categories.item_category_name
						  ", [$item]);
    }

    public function itemDetailForShopper($item)
    {
        return DB::select("
SELECT     shop_items.id, shop_items.item_name, shop_items.item_cat_id , shop_items.price, Cast(score as float) Score, Cast(credit as float) Credit, COUNT(item_codes.item_code) AS Total, COUNT(bill_items.item_id)
                         AS Sold, COUNT(item_codes.item_code) - COUNT(bill_items.item_id) AS Remaining
FROM            bill_items RIGHT OUTER JOIN
                         item_codes ON bill_items.item_id = item_codes.id LEFT OUTER JOIN
                         shop_items LEFT OUTER JOIN
                         item_scores ON shop_items.id = item_scores.item_id ON item_codes.item_id = shop_items.id
WHERE        (shop_items.id = ?) and (shop_items.status = 1)
GROUP BY shop_items.id, shop_items.item_name, shop_items.price, shop_items.item_cat_id, score, credit
						  ", [$item]);
    }


    public function shopItemsQueryAdmin()
    {
        return DB::select("SELECT        shop_items.id, shop_items.item_name, shop_items.shop_id, shops.shop_name, item_codes.barcode, item_codes.qrcode, shop_items.price, shop_items.item_cat_id, shop_items.status,
                         shop_item_categories.item_category_name, item_scores.score,  item_scores.credit, item_scores.unique_code, item_scores.add_date, item_scores.start_date, item_scores.end_date, shops.shop_number,
                         shops.shop_unique_id, shops.tel, shops.mobile, shops.email, shops.website, shops.shop_manager, count(bill_items.item_id) Buy, count(item_codes.item_code) Total, count(item_codes.item_code) - count(bill_items.item_id) Remain
FROM            item_codes LEFT OUTER JOIN
                         bill_items ON item_codes.id = bill_items.item_id RIGHT OUTER JOIN
                         shop_items LEFT OUTER JOIN
                         shop_item_categories ON shop_items.item_cat_id = shop_item_categories.id ON item_codes.item_id = shop_items.id LEFT OUTER JOIN
                         item_scores ON shop_items.id = item_scores.item_id LEFT OUTER JOIN
                         shops ON shop_items.shop_id = shops.id
GROUP BY shop_items.id, shop_items.item_name, shop_items.shop_id, shops.shop_name, item_codes.barcode, item_codes.qrcode, shop_items.price, shop_items.item_count, shop_items.item_cat_id, shop_items.status,
                         shop_item_categories.item_category_name, item_scores.score, item_scores.unique_code, item_scores.add_date, item_scores.start_date, item_scores.end_date, item_scores.credit, shops.shop_number,
                         shops.shop_unique_id, shops.tel, shops.mobile, shops.email, shops.website, shops.shop_manager");
    }

    public function shopItemsQueryShopper()
    {
        return DB::select("SELECT        shop_items.id, shop_items.item_name, shop_items.shop_id, shops.shop_name, item_codes.qrcode, shop_items.price, shop_items.item_cat_id, shop_items.status,
                         shop_item_categories.item_category_name, item_scores.score, item_scores.credit, item_scores.unique_code, item_scores.add_date, item_scores.start_date, item_scores.end_date,
                         shops.shop_unique_id, shops.email, shops.website, shops.shop_manager, COUNT(bill_items.item_id) AS Buy, COUNT(item_codes.item_code) AS Total, COUNT(item_codes.item_code)
                         - COUNT(bill_items.item_id) AS Remain, shop_user.user_id
FROM            shop_user RIGHT OUTER JOIN
                         shops ON shop_user.shop_id = shops.id RIGHT OUTER JOIN
                         item_codes LEFT OUTER JOIN
                         bill_items ON item_codes.id = bill_items.item_id RIGHT OUTER JOIN
                         shop_items LEFT OUTER JOIN
                         shop_item_categories ON shop_items.item_cat_id = shop_item_categories.id ON item_codes.item_id = shop_items.id LEFT OUTER JOIN
                         item_scores ON shop_items.id = item_scores.item_id ON shops.id = shop_items.shop_id
						 where user_id = ?
GROUP BY shop_items.id, shop_items.item_name, shop_items.shop_id, shops.shop_name,  item_codes.qrcode, shop_items.price, shop_items.item_count, shop_items.item_cat_id, shop_items.status,
                         shop_item_categories.item_category_name, item_scores.score, item_scores.unique_code, item_scores.add_date, item_scores.start_date, item_scores.end_date, item_scores.credit,
                         shops.shop_unique_id,   shops.email, shops.website, shops.shop_manager, shop_user.user_id", [CurrentUserID()]);


    }

    public function shopItemsQueryShops($id)
    {

        return DB::select("SELECT        shop_items.id, shop_items.item_name, shop_items.shop_id, shops.shop_name, item_codes.barcode, item_codes.qrcode, shop_items.price, shop_items.item_cat_id, shop_items.status,
                         shop_item_categories.item_category_name, item_scores.score,  item_scores.credit, item_scores.unique_code, item_scores.add_date, item_scores.start_date, item_scores.end_date, shops.shop_number,
                         shops.shop_unique_id, shops.tel, shops.mobile, shops.email, shops.website, shops.shop_manager, count(bill_items.item_id) Buy, count(item_codes.item_code) Total, count(item_codes.item_code) - count(bill_items.item_id) Remain
FROM            item_codes LEFT OUTER JOIN
                         bill_items ON item_codes.id = bill_items.item_id RIGHT OUTER JOIN
                         shop_items LEFT OUTER JOIN
                         shop_item_categories ON shop_items.item_cat_id = shop_item_categories.id ON item_codes.item_id = shop_items.id LEFT OUTER JOIN
                         item_scores ON shop_items.id = item_scores.item_id LEFT OUTER JOIN
                         shops ON shop_items.shop_id = shops.id
                         where shop_id = ? and (shop_items.status = 1)
GROUP BY shop_items.id, shop_items.item_name, shop_items.shop_id, shops.shop_name, item_codes.barcode, item_codes.qrcode, shop_items.price, shop_items.item_count, shop_items.item_cat_id, shop_items.status,
                         shop_item_categories.item_category_name, item_scores.score, item_scores.unique_code, item_scores.add_date, item_scores.start_date, item_scores.end_date, item_scores.credit, shops.shop_number,
                         shops.shop_unique_id, shops.tel, shops.mobile, shops.email, shops.website, shops.shop_manager", [$id]);

    }

    public function shopSellsDetail($id, $sid)
    {
        return DB::select('SELECT        shop_items.id, shop_items.item_name, shop_items.shop_id, shop_items.price, shop_items.item_cat_id, bills.status, shop_item_categories.item_category_name,
                         item_scores.score, item_scores.credit, item_scores.unique_code, item_scores.add_date, item_scores.start_date, item_scores.end_date, bills.buy_date
FROM            bill_items INNER JOIN
                         bills ON bill_items.bill_id = bills.id LEFT OUTER JOIN
                         shop_item_categories RIGHT OUTER JOIN
                         shop_items LEFT OUTER JOIN
                         shop_user ON shop_items.shop_id = shop_user.shop_id ON shop_item_categories.id = shop_items.item_cat_id LEFT OUTER JOIN
                         item_codes ON shop_items.id = item_codes.item_id LEFT OUTER JOIN
                         item_scores ON shop_items.id = item_scores.item_id ON bill_items.item_id = item_codes.id
WHERE        (shop_user.user_id = ?) and (shop_items.shop_id = ?) ORDER BY bills.buy_date DESC', [$id, $sid]);
    }

    public function userBuyListQuery()
    {
        $userId = CurrentUserID();
        return DB::table('shop_items')
            ->leftJoin('item_codes', 'shop_items.id', '=', 'item_codes.item_id')
            ->rightJoin('bill_items', 'shop_items.id', '=', 'bill_items.item_id')
            ->leftJoin('bills', 'bill_items.bill_id', '=', 'bills.id')
            ->leftJoin('shops', 'shop_items.shop_id', '=', 'shops.id')
            ->leftJoin('item_scores', 'shop_items.id', '=', 'item_scores.item_code')
            ->select(
                'bills.bill_number',
                'bills.status',
                'bills.shop_id',
                'bills.user_id',
                'bills.buy_date',
                'bill_items.item_id',
                'shop_items.item_name',
                'item_codes.item_code',
                'shops.shop_name'
            )
            ->where('bills.user_id', '=', $userId)
            ->get();
    }
}
