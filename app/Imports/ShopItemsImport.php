<?php

namespace App\Imports;


use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Concerns\WithConditionalSheets;


class ShopItemsImport implements WithMultipleSheets
{
    use WithConditionalSheets;

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

    public function conditionalSheets(): array
    {
        return [
            0 => new SupplierImport($this->getShop()),
            1 => new CategoryImport($this->getShop()),
            2 => new ItemsImport($this->getShop())
        ];
//        return [2 => new ItemsImport($this->getShop())]


    }
}
