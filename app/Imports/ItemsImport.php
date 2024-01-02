<?php

namespace App\Imports;

use App\Models\ItemCategory;
use App\Models\ItemPrice;
use App\Models\ItemScore;
use App\Models\ItemSupplier;
use Illuminate\Support\Collection;
use App\Models\Shop;
use App\Models\ShopItem;
use App\Models\ItemCode;

use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithStartRow;


class ItemsImport implements ToCollection, WithStartRow
{

    protected mixed $shop;


    public function __construct($shop)
    {
        $this->shop = $shop;

    }

    /**
     * @return mixed
     */
    public function getShop(): mixed
    {
        return $this->shop;
    }

    protected function calScore($price): int
    {
        $arr = [
            (object)['price' => 100000, 'min' => 1, 'max' => 5],
            (object)['price' => 1000000, 'min' => 6, 'max' => 30],
            (object)['price' => 10000000, 'min' => 31, 'max' => 80],
            (object)['price' => 100000000, 'min' => 81, 'max' => 200]];
        $max = $score = 0;
        $a = array();
        foreach ($arr as $ar) {
            if ($ar->price > intval($price)) {
                $a[] = $ar;
            }
            $r = $a[0] ?? null;
            if (isset($r)) {
                $res = ceil(($price * ((($r->max * 100) / $r->price)) / 100));
                $max = ($res < $r->min) ? $r->min : $res;
                $score = ($res < $r->min) ? $r->min : $res;
            }
        }
        return $score;
    }

    public function collection(Collection $rows)
    {

        foreach ($rows as $row) {
            $shop = Shop::whereId($this->getShop())->first();
            $item_id = $shop->shop_unique_id . '' . randomCode(4);
            $count = arabicToEnglishNumber(trim($row[1]));
            $code = (ShopItem::where('item_name', $row[0])->where('shop_id', $this->getShop())->count() > 0) ? ShopItem::where('item_name', trim($row[0]))->where('shop_id', $this->getShop())->first()->unique_code : randomString(32);
//            ExcelImport::create([
//               'imported_item_category' => $row[6],
//               'imported_item_supplier' => $row[5]
//            ]);
            ShopItem::updateOrCreate(
                ['item_name' => $row[0], 'shop_id' => $this->getShop()],
                ['item_cat_id' => ItemCategory::where('item_category', trim((string)$row[4]))->where('shop_id', $this->getShop())->first()->id ?? 0,
                    'item_supplier_id' => ItemSupplier::where('item_supplier', trim((string)$row[3]))->where('shop_id', $this->getShop())->first()->id ?? 0]
            );
            ShopItem::where('item_name', trim($row[0]))->where('shop_id', $this->getShop())->whereNull('id')->update([
                'id' => $item_id
            ]);
            ShopItem::where('item_name', trim($row[0]))->where('shop_id', $this->getShop())->whereNull('unique_code')->update([
                'unique_code' => $code
            ]);



           $score = $this->calScore($row[2]);
            if (ItemCode::where('item_id', $code)->doesntExist()) {
                $i = 0;
                while ($i < $count) {
                    $c = $shop->shop_unique_id . '' . randomCode(setting()->number_of_item_code_digit - setting()->number_of_shop_unique_code_digit);
                    ItemCode::create([
                        'item_id' => $code,
                        'item_code' => $c,
                    ]);
                    ItemPrice::updateOrCreate(
                        ['unique_code' => $code,
                            'item_price' => arabicToEnglishNumber(str_replace(',', '', $row[2])),
                            'add_date' => fullDate(),
                            'item_code' => $c,
                            'status' => 1]
                    );
                    ItemScore::create([
                        'unique_code' => $code,
                        'item_score' => $score,
                        'item_code' => $c,
                        'add_date' => fullDate(),
                        'start_date' => fullDate(),
                        'end_date' => myDatePlus(30)
                    ]);
                    $i++;
                }
            }
        }

    }

    public function startRow(): int
    {
        return 2;
    }
}