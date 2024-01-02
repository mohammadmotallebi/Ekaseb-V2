<?php

namespace App\Imports;

use App\Models\ItemCategory;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\WithStartRow;
use Maatwebsite\Excel\Concerns\ToCollection;

class CategoryImport implements ToCollection, WithStartRow
{

    protected $shop;

    public function __construct($shop)
    {
        $this->shop = $shop;
    }

    /**
     * @return mixed
     */
    public function getShop()
    {
        return $this->shop;
    }

    public function collection(Collection $rows)
    {
        foreach ($rows as $row) {
//            if(ItemCategory::where('item_category', $row[0])->where('shop_id',$this->getShop())->count() > 0)
//            {
//                return ItemCategory::where('shop_id',$this->getShop())->update([
//                    'item_category' => $row[0]
//                ]);
//            }else {
//                return ItemCategory::create([
//                    'item_category' => $row[0],
//                        'shop_id' => $this->getShop()
//                ]);
//            }
            ItemCategory::updateOrCreate(
                    ['item_category' => $row[0],'shop_id' => $this->getShop()]
                );
        }
    }
    public function startRow(): int
    {
        return 2;
    }
}