<?php

namespace App\Http\Controllers;


use App\Models\ItemCategory;
use Illuminate\Http\Request;

class ItemCategoriesController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function getIndex()
    {

        return view('shopitemcategories.shopitemcategories');
    }

    public function anyData()
    {
        return ItemCategory::all();

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('shopitemcategories.create');
    }

    public function store()
    {
        $name = \request('item_name',\request('item_category'));
        $shopItemCategory = new ItemCategory([
            'item_category' => $name,
            'shop_id' => \request('shop')
        ]);
        $shopItemCategory->save();
        if ($shopItemCategory->id > 0) {
            return json_encode([
                'id' => $shopItemCategory->id,
                'name' => $name
            ]);
        } else {
            return 0;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    public function getShopItemCategories($id): array|\Illuminate\Database\Eloquent\Collection|\Illuminate\Support\Collection
    {
        return ItemCategory::where('shop_id',$id)->orderBy('item_category')->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit()
    {

        return view('shopitemcategories.edit');
    }

    public function update(Request $request)
    {
        $id = $request->id;
        $name = \request('item_name',\request('item_category'));
        return ItemCategory::whereId($id)->update([
            'item_category' => $name
        ]);
    }


    public function destroy(): int
    {
        $id = request('id');
        return ItemCategory::whereId($id)->delete();
    }

    public function destroySelections()
    {
        $id = request('id');
        ItemCategory::whereIn('id', $id)->delete();
    }

    public function selectData(): array
    {
        $arr = array();
        $sql = ItemCategory::get();
        foreach ($sql as $s) {
            $s->text = $s->item_category;
            array_push($arr, $s);
        }
        return $arr;
    }
}
