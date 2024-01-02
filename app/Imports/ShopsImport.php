<?php

namespace App\Imports;

use App\Models\Shop;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Imports\HeadingRowFormatter;

HeadingRowFormatter::default('none');

class ShopsImport implements ToModel, WithHeadingRow
{

    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */

    public function model(array $row)
    {

        $u = randomCode(setting()->number_of_shop_unique_code_digit);
        $unique = Shop::where('shop_unique_id', $u)->get();
        if (count($unique) < 1) {
            $int = $u;
        } else {
            $int = randomCode(4);
        }
        return new Shop([
            'shop_name' => $row['نام فروشگاه'],
            'estate_id' => $row['مجتمع'],
            'shop_unique_id' => $int,
            'email' => $row['ایمیل'],
            'website' => $row['وبسایت'],
        ]);
    }
}
