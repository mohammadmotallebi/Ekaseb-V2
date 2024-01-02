<?php

namespace App\Imports;

use App\Models\ItemSupplier;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithStartRow;


class SupplierImport implements ToCollection, WithStartRow
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
            if (ItemSupplier::where('shop_id', $this->getShop())->count() > 0) {
                $c = ItemSupplier::where('shop_id', $this->getShop())->orderBy('supplier_code', 'desc')->first();
                $code = $c->supplier_code + 1;
            }elseif(ItemSupplier::where('shop_id', $this->getShop())->count() == 0){
                $code = 1;
            }
            else {
                $code = 0;
            }

            ItemSupplier::updateOrCreate(
                    ['item_supplier' => $row[0],'shop_id' => $this->getShop()],
                        ['status' => 1]
                );
            ItemSupplier::where('item_supplier' ,$row[0])->where('shop_id' , $this->getShop())->whereNull('supplier_code')->update([
                'supplier_code' => intval($code)
            ]);
            ItemSupplier::where('item_supplier' ,$row[0])->where('shop_id' , $this->getShop())->whereNull('add_date')->update([
                'add_date' => fullDate()
            ]);

        }

    }

    public function startRow(): int
    {
        return 2;
    }
}