<?php

namespace App\Http\Controllers;

use App\Http\Middleware\CurrentUser;
use App\Imports\ShopItemsImport;
use App\Imports\ShopsImport;
use App\Imports\SupplierImport;
use App\Models\Bill;
use App\Models\Estate;
use App\Models\ItemCode;
use App\Models\Shop;
use App\Models\ShopItem;
use App\Models\User;
use App\Repository\LookUpRepositoryInterface;
use App\Repository\UsersRepository\UsersRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Contracts\Queue\ShouldQueue;

class ShopsController extends Controller
{


    protected $usersRepositoryQueries;
    protected $lookUp;


    public function __construct(LookUpRepositoryInterface $lookUp, UsersRepositoryInterface $usersRepositoryQueries)
    {
        $this->usersRepositoryQueries = $usersRepositoryQueries;
        $this->lookUp = $lookUp;
        $this->rr = randomString();
        $this->middleware('auth');
    }

    private function validation()
    {
        $rules = [
            'shop_name' => 'required',
        ];
        $messages = [
            'shop_name.required' => __('validation.required', ['attr' => __('lang.shop_name')])];
        $this->validate(request(), $rules, $messages);
    }

    public function index()
    {
        $shops = Shop::get();
        return response()->json($shops);
    }

    public function create()
    {
        $estates = Estate::all();
        return view('shops.create', ['estates' => $estates ]);
    }

    public function store(Request $request)
    {
        $this->validation();
        $u = randomCode(setting()->number_of_shop_unique_code_digit);
        $unique = Shop::where('shop_unique_id', $u)->get();
        if (count($unique) < 1) {
            $int = $u;
        } else {
            $int = randomCode(4);
        }
        try {
            DB::beginTransaction();
            $shop = new Shop([
                'shop_name' => $request->get('shop_name'),
                'shop_unique_id' => $int,
                'email' => $request->get('email'),
                'website' => $request->get('website'),
                'estate_id' => $request->get('estate_id')
            ]);
            $shop->save();
            DB::commit();
            if ($shop->id > 0) {
                $s = Shop::find($shop->id);
                $s->users()->sync(\request('owners'));
                return 1;
            }
        } catch (\Exception $e) {
            DB::rollBack();
            return 0;
        }

    }


    public function show($id)
    {
        $shop = Shop::find($id);
        return view('shops.view', ['shop' => $shop]);
    }


    public function edit($id)
    {
        $estates = Estate::all();
        $shop = Shop::find($id);
        $users = Shop::find($id)->users()->get();
        $owners = array();
        foreach ($users as $user) {
            array_push($owners, $user->id);
        }
        return view('shops.edit', ['shop' => $shop, 'estates' => $estates, 'owners' => $owners]);
    }


    public function update(Request $request)
    {
        $this->validation();
        $id = $request->id;
        $shop = Shop::whereId($id)->update([
            'shop_name' => $request->get('shop_name'),
            'email' => $request->get('email'),
            'website' => $request->get('website'),
            'estate_id' => $request->get('estate_id'),
        ]);
        if ($shop) {
            $s = Shop::find($id);
            $s->users()->sync(\request('owners'));
            return 1;
        }
    }


    public function destroy(Request $request)
    {
        $id = $request->id;
        Shop::find($id)->delete();
    }


    public function getIndex()
    {
        return view('shops.shops');

    }

    public function shopDetail($id)
    {
        return Shop::whereId($id)->first();
    }

    public function anyData($fav = 0)
    {
        if ($fav == 0) {
            $shops = DB::table('shops')
                ->select('id', 'shop_name', 'shop_unique_id', 'website')
                ->selectRaw('(select user_id from shop_user_fav where shop_id = shops.id and user_id = ?) as fav', [CurrentUserID()])
                ->get();
        } else {
            if ($shops = User::find(CurrentUserID())->favShops()->whereId($fav)->get()) {
                $shops = Shop::whereId($fav)->get();
            }
        }
        return $shops;
    }

    public function confirmSell(): \Illuminate\Support\Collection
    {
        return DB::table('shop_items')
            ->select(
                'shop_items.item_name',
                'bills.id',
                'shop_items.shop_id',
                'item_prices.item_price as price',
                'item_codes.item_code',
                'bills.buy_date',
                'bills.user_id as customer',
                DB::raw('(select user_id from shop_user where shop_id = shop_items.shop_id) as shopper')
            )
            ->join('item_codes', 'shop_items.unique_code', '=', 'item_codes.unique_code')
            ->rightJoin('bill_items', function ($join) {
                $join->join('bills', 'bill_items.bill_id', '=', 'bills.id')
                    ->join('shops', 'bills.shop_id', '=', 'shops.id')
                    ->leftJoin('item_credits', 'bill_items.item_credit_id', '=', 'item_credits.id')
                    ->leftJoin('item_scores', 'bill_items.item_score_id', '=', 'item_scores.id')
                    ->leftJoin('item_prices', 'bill_items.item_price_id', '=', 'item_prices.id')
                    ->on('item_codes.id', '=', 'bill_items.item_code_id');
            })
            ->whereRaw('(select user_id from shop_user where shop_id = shop_items.shop_id) = ? and bills.status = ?', [CurrentUserID(), 0])
            ->get();
    }

    public function countOfApproveBill(): int
    {
        $sql = DB::table('shop_items')
            ->select(DB::raw('count(bills.id) as bills'))
            ->join('item_codes', 'shop_items.unique_code', '=', 'item_codes.unique_code')
            ->rightJoin('bill_items', function ($join) {
                $join->join('bills', 'bill_items.bill_id', '=', 'bills.id')
                    ->join('shops', 'bills.shop_id', '=', 'shops.id')
                    ->leftJoin('item_credits', 'bill_items.item_credit_id', '=', 'item_credits.id')
                    ->leftJoin('item_scores', 'bill_items.item_score_id', '=', 'item_scores.id')
                    ->leftJoin('item_prices', 'bill_items.item_price_id', '=', 'item_prices.id')
                    ->on('item_codes.id', '=', 'bill_items.item_code_id');
            })
            ->where(function ($query) {
                $query->whereRaw('(select user_id from shop_user where shop_id = shop_items.shop_id) = ?', [CurrentUserID()])
                    ->where('bills.status', '=', 0);
            })
            ->get();
        return $sql[0]->bills;
    }

    public function approveBill(): int
    {
        $update = Bill::find(request('id'))->update(['status' => 1]);
        if ($update === 1) {
            $sql = DB::table('users')
                ->rightJoin('bills', 'users.id', '=', 'bills.user_id')
                ->leftJoin('bill_items', 'bills.id', '=', 'bill_items.bill_id')
                ->join('item_codes', 'bill_items.item_code_id', '=', 'item_codes.id')
                ->join('shop_items', 'item_codes.unique_code', '=', 'shop_items.unique_code')
                ->leftJoin('shops', 'bills.shop_id', '=', 'shops.id')
                ->whereRaw('(SELECT user_id FROM shop_user WHERE shop_id = shop_items.shop_id) = ?', [CurrentUserID()])
                ->where('bills.status', '=', 0)
                ->count('bills.id');
            return $sql[0]->bills;
        }

        return 'error';
    }

    public function anyFavData($fav = 0)
    {
        if ($fav == 0) {
            $shops = User::find(CurrentUserID())->favShops()->get();
        } else {
            if ($shops = User::find(CurrentUserID())->favShops()->whereId($fav)->get()) {
                $shops = Shop::whereId($fav)->get();
            }
        }
        return $shops;
    }

    public function Items()
    {
        return view('shop_items.shop_items_modal');
    }

    public function ItemData($id): \Illuminate\Support\Collection
    {
        return DB::table('shop_items')
            ->select(
                'shop_items.item_name',
                'shop_items.shop_id',
                'shop_items.unique_code',
                'shop_items.id',
                'item_categories.item_category',
                'item_categories.id as category_id',
                'item_types.item_type',
                'item_types.id as type_id',
                'item_models.item_model',
                'item_models.id as model_id',
                'item_suppliers.item_supplier',
                'item_suppliers.id as supplier_id',
                'item_sizes.item_size',
                'item_colors.item_color',
                'item_sizes.id as size_id',
                'item_colors.id as color_id',
                DB::raw('(SELECT count(*) FROM bill_items INNER JOIN bills ON bill_items.bill_id = bills.id LEFT OUTER JOIN item_codes ON bill_items.item_code_id = item_codes.id WHERE item_codes.unique_code = shop_items.unique_code and (bills.status = 1)) as Sold'),
                DB::raw('((SELECT COUNT(*) FROM item_codes WHERE unique_code = shop_items.unique_code) - (SELECT count(*) FROM bill_items INNER JOIN bills ON bill_items.bill_id = bills.id LEFT OUTER JOIN item_codes ON bill_items.item_code_id = item_codes.id WHERE item_codes.unique_code = shop_items.unique_code and (bills.status = 1))) as Remain'),
                DB::raw('(SELECT COUNT(bills.id) FROM bill_items INNER JOIN bills ON bill_items.bill_id = bills.id INNER JOIN item_codes ON bill_items.item_code_id = item_codes.id WHERE item_codes.unique_code = shop_items.unique_code and bills.status = 0) as Approve'),
                DB::raw('(SELECT item_price FROM item_prices WHERE unique_code = shop_items.unique_code ORDER BY add_date DESC limit 1) as price'),
                DB::raw('(SELECT item_score FROM item_scores WHERE unique_code = shop_items.unique_code ORDER BY add_date DESC limit 1) as score'),
                DB::raw('(SELECT item_credit FROM item_credits WHERE unique_code = shop_items.unique_code ORDER BY add_date DESC limit 1) as credit'),
                DB::raw('(SELECT COUNT(*) FROM item_codes WHERE unique_code = shop_items.unique_code) as TotalItem')
            )
            ->leftJoin('item_categories', 'shop_items.item_cat_id', '=', 'item_categories.id')
            ->leftJoin('item_types', 'shop_items.item_type_id', '=', 'item_types.id')
            ->leftJoin('item_models', 'shop_items.item_model_id', '=', 'item_models.id')
            ->leftJoin('item_suppliers', 'shop_items.item_supplier_id', '=', 'item_suppliers.id')
            ->leftJoin('item_sizes', 'shop_items.item_size_id', '=', 'item_sizes.id')
            ->leftJoin('item_colors', 'shop_items.item_color_id', '=', 'item_colors.id')
            ->where('shop_items.shop_id', '=', $id)
            ->get();

    }
    public function shopperItemData($id)
    {

        return ShopItem::where('shop_id', $id)->get();

    }


    public function getShopperHome(): array
    {
        $c = 0;
        $shops = \App\Models\User::find(CurrentUserID())->shops()->pluck('id')->all();
        $details = DB::select('SELECT bills.shop_id, SUM(CAST(item_scores.item_score AS SIGNED)) UsedScore, SUM(CAST(item_credits.item_credit AS SIGNED)) UsedCredit
FROM shop_items
     INNER JOIN item_codes ON shop_items.unique_code=item_codes.unique_code
     RIGHT OUTER JOIN bill_items
                      INNER JOIN bills ON bill_items.bill_id=bills.id
                      INNER JOIN shops ON bills.shop_id=shops.id
                      LEFT OUTER JOIN item_credits ON bill_items.item_credit_id=item_credits.id
                      LEFT OUTER JOIN item_scores ON bill_items.item_score_id=item_scores.id
                      LEFT OUTER JOIN item_prices ON bill_items.item_price_id=item_prices.id ON item_codes.id=bill_items.item_code_id
					  WHERE        (bills.shop_id in (?))
GROUP BY bills.shop_id',[(int) implode(',',$shops)]);
        $shopperCredit = User::find(CurrentUserID())->credits()->sum('credit');

        foreach ($details as $detail) {
            $c += $detail->UsedCredit;
        }
        if ($shopperCredit - $c > 0) {
            $status = 1;
        } else {
            $status = 0;
        }

        $sells = DB::table('users')
            ->leftJoin('bills', 'users.id', '=', 'bills.user_id')
            ->leftJoin('bill_items', 'bills.id', '=', 'bill_items.bill_id')
            ->leftJoin('item_scores', 'bill_items.item_score_id', '=', 'item_scores.id')
            ->leftJoin('item_prices', 'bill_items.item_price_id', '=', 'item_prices.id')
            ->leftJoin('item_credits', 'bill_items.item_credit_id', '=', 'item_credits.id')
            ->leftJoin('item_codes', 'bill_items.item_code_id', '=', 'item_codes.id')
            ->select('users.id', DB::raw('COALESCE(SUM(CAST(item_prices.item_price AS SIGNED)), 0) AS sell'))
            ->where('users.id', '=', CurrentUserID())
            ->groupBy('users.id')
            ->orderByDesc('sell')
            ->take(1)
            ->get();


        return ['RemainCredit' => ($shopperCredit - $c) ?? 0, 'status' => $status ?? 0, 'Details' => $details[0] ?? '', 'totalSell' => number_format($sells[0]->sell) ?? 0];
    }

    // Get Shopper Sells List
    public function getSellsList($id)
    {
        // Generate a SQL Query for get Shopper Sells List ( Get Count Sells, Remain Items, Item Name, Item Unique code, Bill Status)
        $sql = DB::table('shop_items')
            ->select(
                'shop_items.item_name',
                'shop_items.shop_id',
                'shop_items.unique_code',
                'shop_items.id',
                DB::raw('(SELECT count(*) FROM bill_items INNER JOIN bills ON bill_items.bill_id = bills.id LEFT OUTER JOIN item_codes ON bill_items.item_code_id = item_codes.id WHERE item_codes.unique_code = shop_items.unique_code and (bills.status = 1)) as Sold'),
                DB::raw('((SELECT COUNT(*) FROM item_codes WHERE unique_code = shop_items.unique_code) - (SELECT count(*) FROM bill_items INNER JOIN bills ON bill_items.bill_id = bills.id LEFT OUTER JOIN item_codes ON bill_items.item_code_id = item_codes.id WHERE item_codes.unique_code = shop_items.unique_code and (bills.status = 1))) as Remain'),
                DB::raw('(SELECT COUNT(bills.id) FROM bill_items INNER JOIN bills ON bill_items.bill_id = bills.id INNER JOIN item_codes ON bill_items.item_code_id = item_codes.id WHERE item_codes.unique_code = shop_items.unique_code and bills.status = 0) as Approve'),
                DB::raw('(SELECT item_price FROM item_prices WHERE unique_code = shop_items.unique_code ORDER BY add_date DESC limit 1) as price'),
                DB::raw('(SELECT COUNT(*) FROM item_codes WHERE unique_code = shop_items.unique_code) as TotalItem')
            )
            ->where(DB::raw('(SELECT count(*) FROM bill_items INNER JOIN bills ON bill_items.bill_id = bills.id LEFT OUTER JOIN item_codes ON bill_items.item_code_id = item_codes.id WHERE item_codes.unique_code = shop_items.unique_code and (bills.status = 1))'),'>',0)
            ->where('shop_items.shop_id', '=', $id)
            ->get();
        return $sql;


    }

    public function getFirstShop()
    {
        return User::find(CurrentUserID())->shops()->first(['id', 'shop_name']);
    }

    public function addToFav()
    {
        User::find(CurrentUserID())->favShops()->attach(request('id'));
    }

    public function deleteFromFav()
    {
        User::find(CurrentUserID())->favShops()->detach(request('id'));
    }

    public function importShop(Request $request): int
    {

        $r = randomString();

        $request->excel_file->storeAs('excel', 'excel_' . $r . '.xlsx', 'upload');
        if (\Storage::disk('upload')->exists('excel/excel_' . $r . '.xlsx')) {
            Excel::import(new ShopsImport(), 'excel/excel_' . $r . '.xlsx', 'upload');
            return 1;
        }
        return 0;

    }

    public function importItemShop()
    {
        $r = randomString();
        try {
            \DB::beginTransaction();
            \request('item-excel_file')->storeAs('', 'excel_' . $r . '.xlsx', 'excel');
            if (\Storage::disk('excel')->exists('excel_' . $r . '.xlsx')) {
                $import = new ShopItemsImport(\request('shop'));
                $import->onlySheets(0, 1);
                Excel::import($import, 'excel_' . $r . '.xlsx', 'excel');
                sleep(3);
                Excel::import((new ShopItemsImport(\request('shop')))->onlySheets(2), 'excel_' . $r . '.xlsx', 'excel');
                \DB::commit();
                sleep(2);
                \Storage::disk('excel')->delete('excel_' . $r . '.xlsx');
                return 1;
            }
        } catch (\Throwable $throwable) {

            \DB::rollBack();

            return $throwable;

        }

    }

}
