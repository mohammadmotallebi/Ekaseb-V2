<?php /** @noinspection ALL */

namespace App\Http\Controllers;

use App\Models\Bill;
use App\Models\BillItem;
use App\Models\ItemCategory;
use App\Models\ItemCode;
use App\Models\ItemColor;
use App\Models\ItemCredit;
use App\Models\ItemModel;
use App\Models\ItemOff;
use App\Models\ItemPrice;
use App\Models\ItemScore;
use App\Models\ItemSize;
use App\Models\ItemSupplier;
use App\Models\ItemType;
use App\Models\Shop;
use App\Models\ShopItem;
use App\Models\ShopItemCategory;
use App\Models\ItemImage;
use App\Repository\LookUpRepositoryInterface;
use App\Repository\UsersRepository\UsersRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\HtmlString;
use Milon\Barcode\DNS2D;
use Milon\Barcode\Facades\DNS2DFacade;
use Illuminate\Validation\Rule;


class ShopItemsController extends Controller
{


    protected $lookUp;

    public function __construct(LookUpRepositoryInterface $lookUp, UsersRepositoryInterface $usersRepository)
    {
        $this->lookUp = $lookUp;
        $this->usersRepository = $usersRepository;
        $this->middleware('auth');
    }

    public function create($shop)
    {
        $category = ItemCategory::all();
        $color = ItemColor::all();
        $supplier = ItemSupplier::where('shop_id', $shop)->get();
        return view('shop_items.create', ['category' => $category, 'color' => $color, 'unique_code' => randomString(32), 'supplier' => $supplier]);
    }

    public function childTypes($id, $shop)
    {
        $a = array();
        $types = ItemType::where('shop_id', $shop)->where('shop_item_category_id', $id)->get();
        foreach ($types->all() as $x) {
            $a[] = ['id' => $x->id, 'text' => $x->item_type];
        }
        return \Response::json($a);
    }


    public function createMulti()
    {
        $category = $this->lookUp->ItemCategories();
        return view('shop_items.create_multi', ['category' => $category]);
    }

    //Item Type Start
    public function createType()
    {
        return view('shop_items.item_type.create');
    }

    public function storeType(Request $request)
    {
        $name = \request('item_name', \request('item_type'));
        $catId = \request('prId', \request('shop_item_category_id'));
        $shopId = \request('id', \request('shop_id'));
        $shopItemType = new ItemType([
            'item_type' => $name,
            'shop_item_category_id' => $catId,
            'shop_id' => $shopId,
        ]);
        $shopItemType->save();
        if ($shopItemType->id > 0) {
            return json_encode([
                'id' => $shopItemType->id,
                'name' => $name
            ]);
        } else {
            return 0;
        }
    }

    public function editType()
    {
        return view('shop_items.item_type.edit');
    }


    public function updateType(Request $request)
    {
        $id = $request->id;
        $name = \request('item_name', \request('item_type'));
        return ItemType::whereId($id)->update([
            'item_type' => $name
        ]);
    }

    public function destroyType(): int
    {
        $id = request('id');
        return ItemType::whereId($id)->delete();
    }

    public function selectTypes($cid, $shopId): array
    {
        $arr = array();
        $sql = ItemType::where('shop_item_category_id', $cid)->where('shop_id', $shopId)->get();
        foreach ($sql as $s) {
            $s->text = $s->item_type;
            array_push($arr, $s);
        }
        return $arr;
    }

    public function getShopItemTypes($id): array|\Illuminate\Database\Eloquent\Collection|\Illuminate\Support\Collection
    {
        return ItemType::where('shop_item_category_id', $id)->orderBy('item_type')->get();
    }

    //Item Type End

    //Item Supplier Start

    public function editSupplier()
    {

        return view('shop_items.item_supplier.edit');
    }

    public function updateSupplier()
    {
        $name = \request('item_name', \request('item_supplier'));
        return ItemSupplier::whereId(\request('id'))->update([
            'item_supplier' => $name
        ]);
    }


    public function selectSuppliers($shop): array
    {
        $arr = array();
        $sql = ItemSupplier::where('shop_id', $shop)->get();
        foreach ($sql as $s) {
            $s->text = $s->item_supplier;
            array_push($arr, $s);
        }
        return $arr;
    }


    //Item Type End


    //Item Model Start

    public function createModel()
    {
        return view('shop_items.item_model.create');
    }

    public function storeModel(Request $request)
    {
        $name = \request('item_name', \request('item_model'));
        $typeId = \request('prId', \request('item_type_id'));
        $shopItemModel = new ItemModel([
            'item_model' => $name,
            'item_type_id' => $typeId,
        ]);
        $shopItemModel->save();
        if ($shopItemModel->id > 0) {
            return json_encode([
                'id' => $shopItemModel->id,
                'name' => $name
            ]);
        } else {
            return 0;
        }
    }

    public function editModel()
    {

        return view('shop_items.item_model.edit');
    }

    public function updateModel(Request $request)
    {
        $id = $request->id;
        $name = \request('item_name', \request('item_model'));
        return ItemModel::whereId($id)->update([
            'item_model' => $name
        ]);
    }

    public function destroyModel(): int
    {
        $id = request('id');
        return ItemModel::whereId($id)->delete();
    }

    public function childModels($id)
    {
        $a = array();
        $models = ItemType::find($id)->models;
        foreach ($models as $x) {
            $a[] = ['id' => $x->id, 'text' => $x->item_model];
        }
        return \Response::json($a);
    }

    public function getShopItemModels($id)
    {
        return ItemModel::where('item_type_id', $id)->orderBy('item_model')->get();
    }
    //Item Model End

    //Item Size Start
    public function createSize()
    {
        return view('shop_items.item_size.create');
    }

    public function storeSize(Request $request)
    {
        $name = \request('item_name', \request('item_size'));
        $typeId = \request('prId', \request('item_type_id'));
        $shopItemSize = new ItemSize([
            'item_size' => $name,
            'item_type_id' => $typeId,
        ]);
        $shopItemSize->save();
        if ($shopItemSize->id > 0) {
            return json_encode([
                'id' => $shopItemSize->id,
                'name' => $name
            ]);
        } else {
            return 0;
        }
    }

    public function editSize()
    {

        return view('shop_items.item_size.edit');
    }

    public function updateSize(Request $request)
    {
        $id = $request->id;
        $name = \request('item_name', \request('item_size'));
        return ItemSize::whereId($id)->update([
            'item_size' => $name
        ]);
    }

    public function destroySize(): int
    {
        $id = request('id');
        return ItemSize::whereId($id)->delete();
    }

    public function childSizes($id)
    {
        $a = array();
        $sizes = ItemType::find($id)->sizes;
        foreach ($sizes as $x) {
            $a[] = ['id' => $x->id, 'text' => $x->item_size];
        }
        return \Response::json($a);
    }

    public function getShopItemSizes($id)
    {
        return ItemSize::where('item_type_id', $id)->orderBy('item_size')->get();
    }
    //Item Size End

    //Item Color Start
    public function createColor()
    {
        return view('shop_items.item_color.create');
    }

    public function storeColor()
    {
        $name = \request('item_name', \request('item_color'));
        $shopId = \request('id', \request('shop_id'));
        $shopItemColor = new ItemColor([
            'item_color' => $name,
            'shop_id' => $shopId,
        ]);
        $shopItemColor->save();
        if ($shopItemColor->id > 0) {
            return json_encode([
                'id' => $shopItemColor->id,
                'name' => $name
            ]);
        } else {
            return 0;
        }
    }

    public function editColor()
    {

        return view('shop_items.item_color.edit');
    }

    public function updateColor(Request $request)
    {
        $id = $request->id;
        $name = \request('item_name', \request('item_color'));
        return ItemColor::whereId($id)->update([
            'item_color' => $name
        ]);
    }

    public function destroyColor(): int
    {
        $id = request('id');
        return ItemColor::whereId($id)->delete();
    }

    public function selectColors()
    {
        $a = array();
        $colors = ItemColor::all();
        foreach ($colors as $x) {
            $a[] = ['id' => $x->id, 'text' => $x->item_color];
        }
        return \Response::json($a);
    }

    public function getShopItemColors($id)
    {
        return ItemColor::where('shop_id', $id)->orderBy('item_color')->get();
    }
    //Item Color End

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $id = $request->id;
        $shop = Shop::whereId($id)->first();
        $item_id = $shop->shop_unique_id . '' . randomCode(4);
        $count = arabicToEnglishNumber($request->get('item_count'));
        $items = new ShopItem([
            'id' => $item_id,
            'item_name' => $request->get('item_name'),
            'unique_code' => $request->get('unique_code'),
            'shop_id' => $id,
            'item_cat_id' => $request->get('item_cat_id'),
            'item_type_id' => $request->get('item_type_id'),
            'item_model_id' => $request->get('item_model_id'),
            'item_size_id' => $request->get('item_size_id'),
            'item_color_id' => $request->get('item_color_id'),
            'item_note' => $request->get('item_note'),
            'item_supplier_id' => $request->get('item_supplier_id'),
        ]);
        if ($items->save()) {
            for ($i = 0; $i < $count; $i++) {
                $c = $shop->shop_unique_id . '' . randomCode(setting()->number_of_item_code_digit - setting()->number_of_shop_unique_code_digit);
                $code = new ItemCode([
                    'item_id' => $request->get('unique_code'),
                    'item_code' => $c,
                ]);
                $code->save();
            }

        }


    }

    /**
     * @throws \Throwable
     */
    public function storeMobile(Request $request): \Throwable|\Exception|int
    {

        try {
            \DB::beginTransaction();
            $i = 1;
            $id = $request->id;
            $shop = Shop::find($id);
            $su = $shop->shop_unique_id;
            $item_id = $su . '' . randomCode(4);
            $uc = randomString(32);
            $count = arabicToEnglishNumber($request->get('item_count'));
            $images = \request()->images;
            ShopItem::create([
                'id' => $item_id,
                'item_name' => $request->get('item_name'),
                'unique_code' => $uc,
                'shop_id' => $id,
                'item_cat_id' => $request->get('item_cat_id'),
                'item_type_id' => $request->get('item_type_id'),
                'item_model_id' => $request->get('item_model_id'),
                'item_size_id' => $request->get('item_size_id'),
                'item_color_id' => $request->get('item_color_id'),
                'item_note' => $request->get('item_note'),
                'item_supplier_id' => $request->get('item_supplier_id'),
            ]);
            if (count($images) > 0) {
                foreach ($images as $image) {
                    ItemImage::insert([
                        'unique_code' => $uc,
                        'image_url' => $image,
                        'caption' => ''
                    ]);
                }
            }
            if (ItemCode::where('item_id', $uc)->count() > 0) {
                if ($count > ItemCode::where('item_id', $uc)->count()) {
                    $count = $count - ItemCode::where('item_id', $uc)->count();
                    while ($i <= $count) {
                        $item_code = $su . '' . randomCode(setting()->number_of_item_code_digit - setting()->number_of_shop_unique_code_digit);
                        if (ItemCode::create([
                            'item_id' => $uc,
                            'item_code' => $item_code,
                        ])) {
                            if (ItemPrice::create([
                                'item_price' => arabicToEnglishNumber(str_replace(',', '', $request->item_price)),
                                'item_code' => $item_code,
                                'unique_code' => $uc,
                                'add_date' => fullDate(),
                                'status' => 1,
                            ])) {
                                if (ItemCredit::create([
                                    'item_credit' => arabicToEnglishNumber(str_replace(',', '', $request->item_credit)),
                                    'item_code' => $item_code,
                                    'unique_code' => $uc,
                                    'add_date' => fullDate(),
                                    'start_date' => '',
                                    'end_date' => '',
                                    'status' => 1,
                                ])) {
                                    if (ItemScore::create([
                                        'item_score' => round(floatval(arabicToEnglishNumber(str_replace(',', '', $request->item_price))) * 0.00005),
                                        'item_code' => $item_code,
                                        'unique_code' => $uc,
                                        'add_date' => fullDate(),
                                        'start_date' => fullDate(),
                                        'end_date' => myDatePlus(30),
                                        'status' => 1,
                                    ])) {
                                        $i++;
                                    }
                                }
                            }
                        }

                    }
                    return $id;
                } else if (\request('count') < ItemCode::where('item_id', $uc)->count()) {
                    $count = ItemCode::where('item_id', $uc)->count() - \request('count');
                    if (ItemCode::where('item_id', $uc)->limit($count)->delete()) {
                        if (ItemPrice::where('unique_code', $uc)->limit($count)->delete()) {
                            if (ItemCredit::where('unique_code', $uc)->limit($count)->delete()) {
                                ItemScore::where('unique_code', $uc)->limit($count)->delete();
                            }
                        }
                    }
                    abort(500);
                }
            } else {
                while ($i <= arabicToEnglishNumber($request->item_count)) {
                    $item_code = $su . '' . randomCode(setting()->number_of_item_code_digit - setting()->number_of_shop_unique_code_digit);
                    if (ItemCode::create([
                        'item_id' => $uc,
                        'item_code' => $item_code,
                    ])) {
                        if (ItemPrice::create([
                            'item_price' => arabicToEnglishNumber(str_replace(',', '', $request->item_price)),
                            'item_code' => $item_code,
                            'unique_code' => $uc,
                            'add_date' => fullDate(),
                            'status' => 1,
                        ])) {
                            if (ItemCredit::create([
                                'item_credit' => arabicToEnglishNumber(str_replace(',', '', $request->item_credit)),
                                'item_code' => $item_code,
                                'unique_code' => $uc,
                                'add_date' => fullDate(),
                                'start_date' => '',
                                'end_date' => '',
                                'status' => 1,
                            ])) {
                                if (ItemScore::create([
                                    'item_score' => round(floatval(arabicToEnglishNumber(str_replace(',', '', $request->item_price))) * 0.00005),
                                    'item_code' => $item_code,
                                    'unique_code' => $uc,
                                    'add_date' => fullDate(),
                                    'start_date' => fullDate(),
                                    'end_date' => myDatePlus(30),
                                    'status' => 1,
                                ])) {
                                }
                            }
                        }
                    }
                    $i++;
                }
            }
            \DB::commit();
            return $id;
        } catch (\Throwable $throwable) {
            \DB::rollBack();
            report($throwable);
            return $throwable;
        }


    }

    public function itemCodesInsert()
    {
        if (\Cache::has('uc')) {
            $uc = cache('uc');
        } else {
            $uc = \request('uc');
        }

        $shop = Shop::find(\request('shop'));
        $i = 1;
        \Cache::forever('uc', $uc);
        try {
            DB::beginTransaction();
            if (ItemCode::where('item_id', $uc)->count() > 0) {
                if (\request('count') > ItemCode::where('item_id', $uc)->count()) {
                    $count = \request('count') - ItemCode::where('item_id', $uc)->count();
                    while ($i <= $count) {
                        $item_code = $shop->shop_unique_id . '' . randomCode(setting()->number_of_item_code_digit - setting()->number_of_shop_unique_code_digit);
                        if (ItemCode::create([
                            'item_id' => $uc,
                            'item_code' => $item_code,
                        ])) {
                            if (ItemPrice::create([
                                'item_price' => cache('price')[0]->item_price,
                                'item_code' => $item_code,
                                'unique_code' => $uc,
                                'add_date' => cache('price')[0]->add_date,
                                'status' => 1,
                            ])) {
                                if (ItemCredit::create([
                                    'item_credit' => cache('credit')[0]->item_credit,
                                    'item_code' => $item_code,
                                    'unique_code' => $uc,
                                    'add_date' => cache('credit')[0]->add_date,
                                    'start_date' => cache('credit')[0]->start_date,
                                    'end_date' => cache('credit')[0]->end_date,
                                    'status' => 1,
                                ])) {
                                    if (ItemScore::create([
                                        'item_score' => cache('score')[0]->item_score,
                                        'item_code' => $item_code,
                                        'unique_code' => $uc,
                                        'add_date' => cache('score')[0]->add_date,
                                        'start_date' => cache('score')[0]->start_date,
                                        'end_date' => cache('score')[0]->end_date,
                                        'status' => 1,
                                    ])) {
                                        $i++;
                                    }
                                }
                            }
                        }

                    }
                } else if (\request('count') < ItemCode::where('item_id', $uc)->count()) {
                    $count = ItemCode::where('item_id', $uc)->count() - \request('count');
                    if (ItemCode::where('item_id', $uc)->limit($count)->delete()) {
                        if (ItemPrice::where('unique_code', $uc)->limit($count)->delete()) {
                            if (ItemCredit::where('unique_code', $uc)->limit($count)->delete()) {
                                ItemScore::where('unique_code', $uc)->limit($count)->delete();
                            }
                        }
                    }
                }
            } else {
                while ($i <= \request('count')) {
                    ItemCode::create([
                        'item_id' => $uc,
                        'item_code' => $shop->shop_unique_id . '' . randomCode(setting()->number_of_item_code_digit - setting()->number_of_shop_unique_code_digit),
                    ]);
                    $i++;
                }
            }

            DB::commit();
            return \request('shop');
        } catch (\Exception $e) {
            DB::rollBack();
            \Cache::flush();
            return $e;
        }

    }

    public function updateMobile(Request $request)
    {
        $rules = [
            'name' => 'required|min:1',
            'unique_code' => ['required', Rule::unique('shop_items')->ignore($request->get('unique_code'), 'unique_code')],
            'active.start_date' => 'required|date|after_or_equal:'.fullDate(),
            'active.end_date' => 'required|date|after_or_equal:active.start_date',
        ];
        $messages = [
            'name.required' => __('validation.required', ['attr' => __('lang.name')]),
            'active.start_date.required' => __('validation.required', ['attr' => __('lang.start_date')]),
            'active.end_date.required' => __('validation.required', ['attr' => __('lang.end_date')]),
            'active.end_date.after_or_equal' => __('validation.after_or_equal', ['attr' => __('lang.end_date'), 'date' => __('lang.start_date')]),
            'active.start_date.after_or_equal' => __('validation.after_or_equal', ['attr' => __('lang.start_date')]),
        ];
        $this->validate($request, $rules, $messages);
        $uc = $request->get('unique_code');
        $images = $request->get('images');
        $dbImages = ItemImage::where('unique_code', $uc)->get()->count();
        $name = ShopItem::whereUc($uc)->first()->item_name;
        $c = ItemCode::where('unique_code', $uc)->get(['item_code', 'id']);
        $bill = BillItem::whereIn('item_code_id', $c->pluck('id')->toArray())->first()->item_id ?? 0;
        $codes = ItemCode::where('unique_code', $uc)->get()->except($bill)->pluck('item_code');
        $prices = ItemPrice::whereIn('item_code', $c->pluck('item_code')->toArray())->get();
        $credits = ItemCredit::whereIn('item_code', $c->pluck('item_code')->toArray())->get();
        $scores = ItemScore::whereIn('item_code', $c->pluck('item_code')->toArray())->get();
        $first_count = ItemCode::where('unique_code', $uc)->get()->except($bill)->count();
        $shop = Shop::find($request->shop);
        $i = 1;
        if ($request->get('name') !== $name) {
            ShopItem::whereUc($uc)->update(['item_name' => $request->get('name')]);
        }
        if (count($images) !== $dbImages) {
            $arr = array();
            ItemImage::where('unique_code', $uc)->delete();
            for ($j = 0; $j < count($images); $j++) {
                $arr[] = [
                    'unique_code' => $uc,
                    'image_url' => $images[$j]
                ];
            }
            ItemImage::insert($arr);
        }


        if (intval($request->count) > intval($first_count)) {
            $count = intval($request->count) - intval($first_count);
            while ($i <= $count) {
                $item_code = $shop->shop_unique_id . '' . randomCode(setting()->number_of_item_code_digit - setting()->number_of_shop_unique_code_digit);
                if (ItemCode::create([
                    'unique_code' => $uc,
                    'item_code' => $item_code,
                ])) {
                    if (ItemPrice::create([
                        'item_price' => $prices[0]->item_price,
                        'item_code' => $item_code,
                        'unique_code' => $uc,
                        'add_date' => $prices[0]->add_date,
                        'status' => 1,
                    ])) {
                        if (ItemCredit::create([
                            'item_credit' => $credits[0]->item_credit,
                            'item_code' => $item_code,
                            'unique_code' => $uc,
                            'add_date' => $credits[0]->add_date,
                            'start_date' => $credits[0]->start_date,
                            'end_date' => $credits[0]->end_date,
                            'status' => 1,
                        ])) {
                            if (ItemScore::create([
                                'item_score' => $scores[0]->item_score,
                                'item_code' => $item_code,
                                'unique_code' => $uc,
                                'add_date' => $scores[0]->add_date,
                                'start_date' => $scores[0]->start_date,
                                'end_date' => $scores[0]->end_date,
                                'status' => 1,
                            ])) {
                                $i++;
                            }
                        }
                    }
                }

            }

        }
        if (intval($request->count) < intval($first_count)) {
            $count = intval($first_count) - intval($request->count);
            $selected_code = array_slice($codes->toArray(), 0, $count);
            ItemCode::whereIn('item_code', $selected_code)->delete();
            ItemPrice::whereIn('item_code', $selected_code)->delete();
            ItemCredit::whereIn('item_code', $selected_code)->delete();
            ItemScore::whereIn('item_code', $selected_code)->delete();

        }
        $active_price = intval(str_replace(',', '', $request->active['off_price'] ?? 0));
        $active_percent = intval($request->active['off_percent'] ?? 0);
        $active_start_date = $request->active['start_date'] ?? fullDate();
        $active_end_date = $request->active['end_date'] ?? fullDate();
        $status;
        if (isset($active_price) && isset($active_percent) && $active_price > 0 && $active_percent > 0) {
            $offs = ItemOff::where('unique_code', $uc)->get();
            if (count($offs) > 0) {
                foreach ($offs as $off) {
                    if (intval($off->off_price) === $active_price && $off->start_date === $active_start_date && $off->end_date === $active_end_date) {
                        $status = 'REPEATED_ERROR';
                        break;
                    } else {
                        $status = 'EXIST';
                        break;
                    }
                }
            } else {
                $status = 'OK';
            }
            if ($status === 'EXIST') {
                if (ItemOff::where('unique_code','=', $uc)->where('status', '=','1')->update(['status' => 0])) {
                    $status = 'OK';
                }
            }
            if ($status === 'OK') {
                ItemOff::create([
                    'off_percent' => intval($request->active['off_percent']),
                    'off_price' => intval(str_replace(',', '', $request->active['off_price'])),
                    'start_date' => $request->active['start_date'],
                    'end_date' => $request->active['end_date'],
                    'unique_code' => $uc,
                    'status' => 1
                ]);
            }

        }

        return $request->shop;


    }

    public function editMobile(Request $request)
    {

        try {
            $activeOff = [];
            $uc = $request->get('unique_code');
            $images = ItemImage::where('unique_code', $uc)->get()->pluck('image_url')->toArray();
            $c = ItemCode::where('unique_code', $uc)->get()->pluck('id')->toArray();
            $bill = BillItem::whereIn('item_code_id', $c)->first()->item_id ?? 0;
            $codes = ItemCode::where('unique_code', $uc)->get()->except($bill)->pluck('item_code');
            $offs = ItemOff::where('unique_code', $uc)->get();
            $shopId = ShopItem::where('unique_code', $uc)->first()->shop_id;
            if (count($offs) > 0) {
                $activeOff = ItemOff::where('unique_code', $uc)->where('status', '=', 1)->get();
            } else {
                $activeOff = [['off_percent' => 0, 'off_price' => 0, 'start_date' => fullDate(), 'end_date' => fullDate(), 'status' => 0]];
            }
            $loaded = true;

        } catch (\Exception $e) {
            $loaded = false;
        }

        return json_encode(['unique_code' => $uc, 'shopId' => $shopId, 'codes' => $codes, 'offs' => $offs, 'images' => $images, 'active' => $activeOff[0], 'loaded' => $loaded,]);

    }

    public function addItemImages()
    {
        $uc = \request()->unique_code;
        $images = \request()->images;
        foreach ($images as $image) {
            ItemImage::insert([
                'unique_code' => $uc,
                'image_url' => $image,
                'caption' => ''
            ]);
        }
    }

    public function storeMulti(Request $request)
    {
        $id = $request->id;
        DB::beginTransaction();
        $qrcode = new DNS2D();
        try {
            $shop = Shop::whereId($id)->first();
            for ($i = 1; $i <= 10; $i++) {
                if ($request->get('item_' . '' . $i) <> '') {
                    $count = arabicToEnglishNumber($request->get('count_' . '' . $i));
                    $items = new ShopItem([
                        'item_name' => $request->get('item_' . '' . $i),
                        'shop_id' => $id,
                        'price' => arabicToEnglishNumber(str_replace(',', '', $request->get('price_' . '' . $i))),
                        'item_cat_id' => $request->get('cat_' . '' . $i),
                    ]);
                    $items->save();
                    if ($items->id > 0) {
                        for ($j = 0; $j < $count; $j++) {
                            $code = new ItemCode([
                                'item_id' => $items->id,
                                'item_code' => $shop->shop_unique_id . '' . randomCode(setting()->number_of_item_code_digit - setting()->number_of_shop_unique_code_digit),
                            ]);
                            $code->save();
                        }
                    }
                }
            }
            DB::commit();
            if (($items->id > 0) and ($code->id > 0)) {
                return '1';
            } else {
                DB::rollback();
                return '0';
            }
        } catch (\Exception $e) {
            DB::rollback();

            return '0';
        }

    }

    public function showModal()
    {
        return view('shop_items.shop_items_modal');
    }

    public function itemsList($id): array
    {
        $res = array();
        $items = DB::select('SELECT item_codes.item_code, item_codes.qrcode, bills.bill_number, bills.buy_date, bills.status, bills.user_id
                         FROM            bill_items RIGHT OUTER JOIN
                         bills ON bill_items.bill_id = bills.id RIGHT OUTER JOIN
                         item_codes ON bill_items.item_code_id = item_codes.id LEFT OUTER JOIN
                         shop_items ON item_codes.unique_code = shop_items.unique_code
                         WHERE shop_items.unique_code = ?', [$id]);

        foreach ($items as $item) {
            $item->qrcode = DNS2DFacade::getBarcodeSVG($item->item_code, 'QRCODE', '5', '5');
            array_push($res, $item);
        }
        return $res;
    }


    public function soldModal()
    {
        return view('shop_items.sold_items_modal');
    }

    public function soldList($id): array
    {

        $items = DB::select('SELECT       item_codes.item_code, bills.bill_number, bills.buy_date, bills.status, bills.user_id, item_prices.item_price, item_credits.item_credit, item_scores.item_score, item_suppliers.item_supplier, item_suppliers.supplier_code,
                         shop_items.item_name
FROM            bill_items INNER JOIN
                         bills ON bill_items.bill_id = bills.id LEFT OUTER JOIN
                         item_scores ON bill_items.item_score_id = item_scores.id RIGHT OUTER JOIN
                         item_suppliers RIGHT OUTER JOIN
                         shop_items ON item_suppliers.id = shop_items.item_supplier_id RIGHT OUTER JOIN
                         item_codes ON shop_items.unique_code = item_codes.unique_code ON bill_items.item_code_id = item_codes.id LEFT OUTER JOIN
                         item_credits ON bill_items.item_credit_id = item_credits.id LEFT OUTER JOIN
                         item_prices ON bill_items.item_price_id = item_prices.id
WHERE        (shop_items.unique_code = ? AND buy_date IS NOT NULL)', [$id]);

        return $items;
    }

    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        $shopitem = ShopItem::find($id);
        $uc = $shopitem->unique_code;
        $category = ItemCategory::where('shop_id', $shopitem->shop_id)->get();
        $c = ItemCode::where('item_id', $uc)->get(['item_code', 'id']);
        $bill = BillItem::whereIn('item_id', $c->pluck('id')->toArray())->first()->item_id ?? 0;
        $codes = ItemCode::where('item_id', $uc)->get()->except($bill)->pluck('item_code');
        $count = ItemCode::where('item_id', $uc)->get()->except($bill)->count();
        $color = ItemColor::all();
        $types = ItemType::where('shop_item_category_id', $shopitem->item_cat_id)->where('shop_id', $shopitem->shop_id)->get();
        $supplier = ItemSupplier::where('shop_id', $shopitem->shop_id)->get();
        $models = ItemModel::where('item_type_id', $shopitem->item_type_id)->get();
        $sizes = ItemSize::where('item_type_id', $shopitem->item_type_id)->get();
        return view('shop_items.edit',
            ['shopitem' => $shopitem,
                'category' => $category,
                'color' => $color,
                'types' => $types,
                'models' => $models,
                'sizes' => $sizes,
                'count' => $count,
                'supplier' => $supplier,
            ]);
    }


    public function update()
    {
        $id = \request('id');
        $update = ShopItem::where('id', $id)->update([
            'item_name' => \request('item_name'),
            'item_cat_id' => \request('item_cat_id'),
            'item_type_id' => \request('item_type_id'),
            'item_model_id' => \request('item_model_id'),
            'item_size_id' => \request('item_size_id'),
            'item_color_id' => \request('item_color_id'),
            'item_note' => \request('item_note'),
            'item_supplier_id' => \request('item_supplier_id'),
        ]);
        return $update;
    }


    public function addNum(Request $request)
    {
        $id = $request->id;
        $shop_id = $request->sid;
        $shop = Shop::whereId($shop_id)->first();
        $count = $request->num;
        for ($j = 0; $j < $count; $j++) {
            $code = new ItemCode([
                'item_id' => $id,
                'item_code' => $shop->shop_unique_id . '' . randomCode(setting()->number_of_item_code_digit - setting()->number_of_shop_unique_code_digit)
            ]);
            $code->save();
        }

    }

    public function minusNum()
    {
        ItemCode::where('item_id', request('id'))->get();
        for ($i = 0; $i < request('num'); $i++) {

        }
    }

    public function editMulti()
    {

        $category = $this->lookUp->ItemCategories();
//        $shopitem = ShopItem::find($id);
        return view('shop_items.edit_multi', ['category' => $category]);
    }


    public function updateMulti(Request $request)
    {
        $id = explode(',', $request->ids);
        DB::beginTransaction();

        try {
            for ($i = 0; $i < count($id); $i++) {
                if ($request->get('item_' . '' . $i) <> '') {
                    $edit = ShopItem::whereId($id[$i])->update([
                        'item_name' => $request->get('item_' . '' . $i),
                        'price' => str_replace(',', '', $request->get('price_' . '' . $i))
                    ]);
                }
            }
            DB::commit();
            if ($edit) {
                return '1';
            } else {
                DB::rollback();
                return '0';
            }
        } catch (\Exception $e) {
            DB::rollback();

            return '0';
        }


    }


    public function destroy(Request $request)
    {
        try {
            DB::beginTransaction();
            $id = $request->id;
            $shop = ShopItem::where('unique_code', $id)->first()->shop_id;
            $c = ItemCode::where('item_id', $id)->get()->pluck('id')->toArray();
            $bill = BillItem::whereIn('item_id', $c)->count();
            if ($bill === 0) {
                ShopItem::where('unique_code', $id)->delete();
                ItemCode::where('item_id', $id)->delete();
                ItemPrice::where('unique_code', $id)->delete();
                ItemCredit::where('unique_code', $id)->delete();
                ItemScore::where('unique_code', $id)->delete();
                DB::commit();
                return $shop;
            } else {
                return "EXIST_ERROR";
            }

        } catch (\Throwable $throwable) {
            DB::rollBack();
            return "ERROR";
        }

    }

    public function destroySelections(Request $request)
    {
        $ids = $request->ids;
        $unique_codes = ShopItem::whereIn('id', $ids)->pluck('unique_code')->all();
        try {
            DB::beginTransaction();
            ShopItem::whereIn('id', $ids)->delete();
            ItemCode::whereIn('item_id', $unique_codes)->delete();
            ItemScore::whereIn('unique_code', $unique_codes)->delete();
            ItemPrice::whereIn('unique_code', $unique_codes)->delete();
            DB::commit();
            return 1;
        } catch (\Throwable $throwable) {
            DB::rollBack();
            return $throwable->getMessage();
        }

    }

    public function getIndex()
    {

        return view('shop_items.shop_items');

    }

    public function anyData()
    {
//        return $this->usersRepository->shopItemsQueryAdmin();
    }


    public function getItemCode($id)
    {
        $res = array();
        $sql = DB::select('SELECT  bill_items.id,bills.buy_date,item_codes.item_code,item_prices.item_price price
FROM            shop_items RIGHT OUTER JOIN
                         item_codes ON shop_items.unique_code = item_codes.unique_code LEFT OUTER JOIN
                         bill_items INNER JOIN
                         bills ON bill_items.bill_id = bills.id INNER JOIN
                         shops ON bills.shop_id = shops.id LEFT OUTER JOIN
                         item_credits ON bill_items.item_credit_id = item_credits.id LEFT OUTER JOIN
                         item_scores ON bill_items.item_score_id = item_scores.id LEFT OUTER JOIN
                         item_prices ON bill_items.item_price_id = item_prices.id ON item_codes.id = bill_items.item_code_id
						    where item_codes.unique_code = ?
						    ORDER BY bills.buy_date desc', [$id]);

        foreach ($sql as $s) {
            if (setting()->credit_by_credit == 1) {
                $s->cashless_score = ($s->price / setting()->cash_score) * setting()->cashless_score;
            } else if (setting()->credit_by_price == 1) {
                $s->cashless_score = ($s->price / setting()->cash_score) * setting()->cashless_score;
            }
            if ($s->id > 0) {
                $s->status = 1;
                $s->icon = 'checkmark_circle_fill';
            } else {
                $s->status = 0;
                $s->icon = 'xmark_circle_fill';
                $s->buy_date = '';
            }
            $res[] = $s;
        }
        return $res;
    }

    public function getShopItemImages()
    {
        $uc = \request()->get('unique_code');
        return ItemImage::where('unique_code', $uc)->pluck('image_url');
    }


}
