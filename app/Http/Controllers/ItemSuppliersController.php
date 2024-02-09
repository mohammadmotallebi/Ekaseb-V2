<?php

namespace App\Http\Controllers;

use App\Models\ItemSupplier;
use Illuminate\Http\Request;

class ItemSuppliersController extends Controller
{
    public function index($unique_code)
    {

        return ItemSupplier::where('unique_code', $unique_code)->get();
    }

    public function getShopItemSuppliers($id): array|\Illuminate\Database\Eloquent\Collection|\Illuminate\Support\Collection
    {
        return ItemSupplier::where('shop_id','=', $id)->orderBy('item_supplier')->get();
    }

    public function create()
    {
        return view('shop_items.item_supplier.create');
    }

    public function store($shop): int
    {
        if (ItemSupplier::where('shop_id', $shop)->count() > 0) {
            $c = ItemSupplier::where('shop_id', $shop)->orderBy('id', 'desc')->first();
            $code = $c->supplier_code + 1;
        } else {
            $code = 1;
        }
        $name = \request('item_name',\request('item_supplier'));
        $c = new ItemSupplier([
            'item_supplier' => arabicToEnglishNumber($name),
            'supplier_code' => intval($code),
            'shop_id' => $shop,
            'add_date' => fullDate(),
            'status' => 1,
        ]);
        $c->save();
        if ($c->id > 0) {
            return 1;
        }

        return 0;
    }
    public function update(Request $request)
    {
        $name = $request->get('item_name',\request('item_supplier'));
        return ItemSupplier::whereId($request->get('id'))->update([
            'item_supplier' => $name
        ]);
    }

    public function destroy(): int
    {
        $id = request('id');
        return ItemSupplier::whereId($id)->delete();
    }

}
