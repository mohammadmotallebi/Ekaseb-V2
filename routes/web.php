<?php


use App\Http\Controllers\ContractUsersController;
use App\Http\Controllers\ItemCreditsController;
use App\Http\Controllers\ItemPricesController;
use App\Http\Controllers\ItemScoresController;
use App\Http\Controllers\ItemSuppliersController;
use App\Http\Controllers\TableController;
use App\Imports\ShopItemsImport;
use App\Imports\ShopsImport;
use App\Imports\SupplierImport;
use App\Models\ContractUser;
use App\Models\ItemCode;
use App\Models\ShopItem;
use App\Models\Table;
use App\Models\User;
use App\Models\VerificationCode;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\User_CategoriesController;
use App\Http\Controllers\ShopsController;
use App\Http\Controllers\ShopItemsController;
use App\Http\Controllers\ItemCategoriesController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\GendersController;
use App\Http\Controllers\ColorsController;
use App\Http\Controllers\CardsController;
use App\Http\Controllers\RolesController;
use Maatwebsite\Excel\Facades\Excel;
use Milon\Barcode\DNS1D;
use Milon\Barcode\DNS2D;
use Milon\Barcode\Facades\DNS2DFacade;
use Nette\Utils\Json;
use function PHPUnit\Framework\isNull;

Route::get('/', function () {
    return redirect('home');
});

Route::get('/cordova', function () {
    return ['hello'];
});


Route::view('/admin-panel', 'admin-panel');


Route::post('/send-code', [\App\Http\Controllers\Auth\RegisterController::class, 'sendCode']);
Route::post('/internal-send-code', [\App\Http\Controllers\UsersController::class, 'internalSendCode'])->middleware('auth');
Route::get('/check-verification/{mobile}/{code}', [\App\Http\Controllers\Auth\RegisterController::class, 'checkVerification']);
Route::post('/set-password', [\App\Http\Controllers\Auth\RegisterController::class, 'setPassword']);

Route::view('password', 'auth.password');
Route::post('/password/send-code', [\App\Http\Controllers\Auth\ResetPasswordController::class, 'sendCode']);
Route::get('/password/check-verification/{mobile}/{code}', [\App\Http\Controllers\Auth\ResetPasswordController::class, 'checkVerification']);
Route::post('/password/set-password', [\App\Http\Controllers\Auth\ResetPasswordController::class, 'setPassword']);


Route::get('PermissionsList/{id}', [App\Http\Controllers\PermissionsController::class, 'index']);
Route::post('Permission/update/{id}', [App\Http\Controllers\PermissionsController::class, 'update']);
//users Route Start
Route::get('usersList', [UsersController::class, 'getIndex'])->name('user.list')->middleware('auth', 'permission:user_view');
Route::post('user_select_data', [UsersController::class, 'selectData'])->name('user.data')->middleware('auth', 'permission:user_view');
Route::get('get-users-data', [UsersController::class, 'anyData'])->name('users')->middleware('auth', 'permission:user_view');
Route::get('users/Detail/{id}', [UsersController::class, 'userDetail'])->name('userTotalBuy')->middleware('auth', 'permission:user_view');
Route::get('users/BillDetail', [UsersController::class, 'listBill'])->name('userBillDetail')->middleware('auth', 'permission:user_view');
Route::get('users/BillDetailData/{id}', [UsersController::class, 'listBillData'])->name('userBillDetailData')->middleware('auth', 'permission:user_view');
Route::get('users/create', [UsersController::class, 'create'])->middleware('auth', 'permission:user_add');
Route::get('users/create_quickly', [UsersController::class, 'createQuickly'])->middleware('auth', 'permission:user_add');
Route::post('users/store', [UsersController::class, 'store'])->name('cusAdd')->middleware('auth', 'permission:user_add');
Route::get('users/{id}/edit', [UsersController::class, 'edit'])->middleware('auth', 'permission:user_edit');
Route::patch('users/update', [UsersController::class, 'update'])->middleware('auth', 'permission:user_edit');
Route::delete('users/destroy', [UsersController::class, 'destroy'])->name('cusDelete')->middleware('auth', 'permission:user_delete');
Route::get('CategoryList', [User_CategoriesController::class, 'getIndex'])->name('category.list')->middleware('auth', 'permission:user_view');
Route::get('get-category-data', [User_CategoriesController::class, 'anyData'])->name('category')->middleware('auth', 'permission:user_view');
Route::get('users/create', [UsersController::class, 'select2'])->name('categoryselect')->middleware('auth', 'permission:user_add');
Route::get('users/{id}/view', [UsersController::class, 'show'])->middleware('auth', 'permission:user_view');
Route::get('Profile', [UsersController::class, 'editProfile'])->middleware('auth');
Route::post('Update', [UsersController::class, 'updateProfile'])->middleware('auth');
Route::get('get-user-info', [UsersController::class, 'userInfo'])->middleware('auth');
Route::get('get-user-buy-list', [UsersController::class, 'userBuysList'])->middleware('auth');
Route::get('get-user-theme', [UsersController::class, 'getUserTheme'])->middleware('auth');
Route::patch('user-darktheme', [UsersController::class, 'darkTheme'])->middleware('auth');
Route::patch('user-auto_darktheme', [UsersController::class, 'autoDarkTheme'])->middleware('auth');
Route::patch('user-change-theme', [UsersController::class, 'userChangeTheme'])->middleware('auth');
Route::get('get-user-loyalty-score', [UsersController::class, 'userCalculateLoyalty'])->middleware('auth');
Route::post('user-change-profile-picture', [UsersController::class, 'changeProfilePicture'])->middleware('auth');
Route::post('/update-identity', [UsersController::class, 'updateIdentity'])->middleware('auth');
Route::post('/update-mobile', [UsersController::class, 'updateMobile'])->middleware('auth');
Route::post('/update-password', [UsersController::class, 'updatePassword'])->middleware('auth');
Route::get('/get-user-shops', [UsersController::class, 'userShops'])->middleware('auth');
Route::get('/get-user-shops', [UsersController::class, 'userShops'])->middleware('auth');
Route::get('fav-shop-check/{id}', function ($id) {
    if (App\Models\User::find(CurrentUserID())->favShops()->whereId($id)->first()) {
        return 1;
    } else {
        return 0;
    }
});
Route::controller(\ContractUsersController::class)->prefix('contract-users')->group(function () {
    Route::get('/list', 'getIndex')->name('contractUserList');
    Route::get('/data', 'anyData')->name('contract_users');
    Route::get('/create', 'create');
    Route::post('/store', 'store');
    Route::get('/{id}/edit', 'edit');
    Route::get('/{id}/view', 'view');
    Route::patch('/update', 'update');
    Route::delete('/destroy', 'destroy');
});

Route::get('users/group_edit', [UsersController::class, 'userGroupEditFrom'])->middleware('auth');
Route::post('users/update_selected_users', [UsersController::class, 'updateSelectedUsers'])->middleware('auth');

//users Route End
//Shops Route Start
Route::get('ShopsList', [ShopsController::class, 'getIndex'])->name('shop.list')->middleware('auth', 'permission:shop_view');
Route::get('get-shops-data/{fav?}', [ShopsController::class, 'anyData'])->name('shops')->middleware('auth');
Route::get('get-shop-detail/{id}', [ShopsController::class, 'shopDetail'])->middleware('auth');
Route::get('get-fav-shops-data', [ShopsController::class, 'anyFavData'])->name('favs-shops')->middleware('auth');
Route::get('Shops/create', [ShopsController::class, 'create'])->middleware('auth', 'permission:shop_add');
Route::post('Shops/store', [ShopsController::class, 'store'])->name('shopAdd')->middleware('auth', 'permission:shop_add');
Route::get('Shops/{id}/edit', [ShopsController::class, 'edit'])->middleware('auth', 'permission:shop_edit');
Route::patch('Shops/update', [ShopsController::class, 'update'])->middleware('auth', 'permission:shop_edit');
Route::delete('Shops/destroy', [ShopsController::class, 'destroy'])->name('shopDelete')->middleware('auth', 'permission:shop_delete');
Route::get('Shops/{id}/view', [ShopsController::class, 'show'])->middleware('auth', 'permission:shop_view');
Route::get('Shops/Items', [ShopsController::class, 'Items'])->middleware('auth', 'permission:shop_item_view');
Route::get('Shops/get-shopItems-data/{id}', [ShopsController::class, 'ItemData'])->middleware('auth');
Route::get('Shops/get-items-data/{id}', [ShopsController::class, 'shopperItemData'])->middleware('auth');
Route::get('Shops/get-shopper-home', [ShopsController::class, 'getShopperHome'])->middleware('auth');
Route::get('/get-my-shops-name', function () {
    return \App\Models\User::find(CurrentUserID())->shops()->get(['id', 'shop_name']);
})->middleware('auth');
Route::get('/get-shop-categories/{id?}', [\App\Http\Controllers\ItemCategoriesController::class, 'getShopItemCategories'])->middleware('auth');
Route::get('/get-shop-suppliers/{id?}', [\App\Http\Controllers\ItemSuppliersController::class, 'getShopItemSuppliers'])->middleware('auth');
Route::get('/get-shop-types/{id?}', [\App\Http\Controllers\ShopItemsController::class, 'getShopItemTypes'])->middleware('auth');
Route::get('/get-shop-models/{id?}', [\App\Http\Controllers\ShopItemsController::class, 'getShopItemModels'])->middleware('auth');
Route::get('/get-shop-sizes/{id?}', [\App\Http\Controllers\ShopItemsController::class, 'getShopItemSizes'])->middleware('auth');
Route::get('/get-shop-colors/{id?}', [\App\Http\Controllers\ShopItemsController::class, 'getShopItemColors'])->middleware('auth');
Route::get('Shop/get-sell-list/{id}', [ShopsController::class, 'getSellsList'])->middleware('auth');
Route::get('Shop/get-first-shop', [ShopsController::class, 'getFirstShop'])->middleware('auth');
Route::get('confirm-sells', [ShopsController::class, 'confirmSell'])->middleware('auth');
Route::post('approve-bill', [ShopsController::class, 'approveBill'])->middleware('auth');
Route::post('Shop/add-to-fav', [ShopsController::class, 'addToFav'])->middleware('auth');
Route::post('Shop/delete-from-fav', [ShopsController::class, 'deleteFromFav'])->middleware('auth');
Route::get('count-of-approve-bill', [ShopsController::class, 'countOfApproveBill'])->middleware('auth');
Route::post('shop/import', [\App\Http\Controllers\ShopsController::class, 'importShop'])->middleware('auth', 'permission:contract_edit');

Route::get('/setting', function () {
    return setting();
});
Route::get('item/{price}', function ($price) {
    $arr = array(
        (object)['price' => 100000, 'min' => 1, 'max' => 5],
        (object)['price' => 1000000, 'min' => 6, 'max' => 30],
        (object)['price' => 10000000, 'min' => 31, 'max' => 80],
        (object)['price' => 100000000, 'min' => 81, 'max' => 200]);
    $max = $score = 0;
    $a = array();
    foreach ($arr as $ar) {
        if ($ar->price > intval($price)) {
            $a[] = $ar;
        }
        $r = $a[0] ?? null;
     if(isset($r)){
            $res = ceil(($price * ((($r->max * 100) / $r->price)) / 100));
            $max = ($res < $r->min) ? $r->min : $res;
            $score = ($res < $r->min) ? $r->min : $res;
        }
    }
    return $score;
//    return \App\Models\ItemPrice::whereIn('item_code',$c->)->get();
});
//Shops Route End
Route::get('color-import', [ColorsController::class, 'import']);
//ShopItems Route Start
Route::get('ShopItemsList', [ShopItemsController::class, 'getIndex'])->middleware('auth', 'permission:shop-item_view');
Route::get('get-shop-items-data', [ShopItemsController::class, 'anyData'])->middleware('auth', 'permission:shop-item_view');
Route::get('shop-items-modal', [ShopItemsController::class, 'showModal'])->middleware('auth', 'permission:shop-item_view');
Route::get('shop-items-modal-data/{id}', [ShopItemsController::class, 'itemsList'])->middleware('auth', 'permission:shop-item_view');
Route::get('shop-sold-modal', [ShopItemsController::class, 'soldModal'])->middleware('auth', 'permission:shop-item_view');
Route::get('shop-sold-modal-data/{id}', [ShopItemsController::class, 'soldList'])->middleware('auth', 'permission:shop-item_view');
Route::get('ShopItems/create/{shop}', [ShopItemsController::class, 'create'])->middleware('auth', 'permission:shop-item_add');
Route::get('ShopItems/create-multi', [ShopItemsController::class, 'createMulti'])->middleware('auth', 'permission:shop-item_add');
Route::post('ShopItems/store', [ShopItemsController::class, 'store'])->middleware('auth');
Route::post('ShopItems/store-mobile', [ShopItemsController::class, 'storeMobile'])->middleware('auth');
Route::post('ShopItems/edit-mobile', [ShopItemsController::class, 'editMobile'])->middleware('auth');
Route::patch('ShopItems/update-mobile', [ShopItemsController::class, 'updateMobile'])->middleware('auth');
Route::post('ShopItems/store-multi', [ShopItemsController::class, 'storeMulti'])->middleware('auth', 'permission:shop-item_add');
Route::delete('ShopItems/destroy', [ShopItemsController::class, 'destroy']);
Route::delete('ShopItems/destroy-selections', [ShopItemsController::class, 'destroySelections'])->middleware('auth', 'permission:shop-item_delete');
Route::get('ShopItems/{id}/edit', [ShopItemsController::class, 'edit'])->middleware('auth', 'permission:shop-item_edit');
Route::patch('ShopItems/update', [ShopItemsController::class, 'update'])->middleware('auth', 'permission:shop-item_edit');
Route::get('ShopItems/edit-multi', [ShopItemsController::class, 'editMulti'])->middleware('auth', 'permission:shop-item_edit');
Route::patch('ShopItems/update-multi', [ShopItemsController::class, 'updateMulti'])->middleware('auth', 'permission:shop-item_edit');
Route::get('ShopItems/add', [ShopItemsController::class, 'addNum'])->middleware('auth', 'permission:shop-item_edit');
Route::get('ShopItems/minus', [ShopItemsController::class, 'minusNum'])->middleware('auth', 'permission:shop-item_edit');
Route::get('ShopItems/get-item-codes/{id}', [ShopItemsController::class, 'getItemCode'])->middleware('auth');
Route::post('ShopItems/get-item-images', [ShopItemsController::class, 'getShopItemImages'])->middleware('auth');
Route::post('ShopItems/add-images', [ShopItemsController::class, 'addItemImages'])->middleware('auth');
Route::get('get-item-types/{id}/{shop}', [ShopItemsController::class, 'childTypes'])->middleware('auth');
Route::post('get-item-models/{id}', [ShopItemsController::class, 'childModels'])->middleware('auth');
Route::post('get-item-sizes/{id}', [ShopItemsController::class, 'childSizes'])->middleware('auth');
Route::post('get-item-suppliers/{shop}', [ShopItemsController::class, 'selectSuppliers'])->middleware('auth');
Route::post('get-item-colors-select', [ShopItemsController::class, 'selectColors'])->middleware('auth');
Route::get('ShopItemType/create', [ShopItemsController::class, 'createType'])->middleware('auth');
Route::post('ShopItemType/store', [ShopItemsController::class, 'storeType'])->middleware('auth');
Route::get('ShopItemType/edit', [ShopItemsController::class, 'editType'])->middleware('auth');
Route::patch('ShopItemType/update', [ShopItemsController::class, 'updateType'])->middleware('auth');
Route::get('ShopItemSupplier/create', [ItemSuppliersController::class, 'create'])->middleware('auth');
Route::post('ShopItemSupplier/store/{shop}', [ItemSuppliersController::class, 'store'])->middleware('auth');
Route::get('ShopItemSupplier/edit', [ShopItemsController::class, 'editSupplier'])->middleware('auth');
Route::patch('ShopItemSupplier/update', [ShopItemsController::class, 'updateSupplier'])->middleware('auth');
Route::delete('ShopItemSupplier/destroy', [ItemSuppliersController::class, 'destroy'])->middleware('auth');
Route::post('get-itemTypes-select/{cid}/{shopId}', [ShopItemsController::class, 'selectTypes'])->middleware('auth');
Route::delete('itemType/destroy', [ShopItemsController::class, 'destroyType'])->middleware('auth');
Route::get('ShopItemSize/create', [ShopItemsController::class, 'createSize'])->middleware('auth');
Route::post('ShopItemSize/store', [ShopItemsController::class, 'storeSize'])->middleware('auth');
Route::get('ShopItemSize/edit', [ShopItemsController::class, 'editSize'])->middleware('auth');
Route::patch('ShopItemSize/update', [ShopItemsController::class, 'updateSize'])->middleware('auth');
Route::delete('itemSize/destroy', [ShopItemsController::class, 'destroySize'])->middleware('auth');
Route::get('ShopItemModel/create', [ShopItemsController::class, 'createModel'])->middleware('auth');
Route::post('ShopItemModel/store', [ShopItemsController::class, 'storeModel'])->middleware('auth');
Route::get('ShopItemModel/edit', [ShopItemsController::class, 'editModel'])->middleware('auth');
Route::patch('ShopItemModel/update', [ShopItemsController::class, 'updateModel'])->middleware('auth');
Route::delete('itemModel/destroy', [ShopItemsController::class, 'destroyModel'])->middleware('auth');
Route::get('ShopItemColor/create', [ShopItemsController::class, 'createColor'])->middleware('auth');
Route::post('ShopItemColor/store', [ShopItemsController::class, 'storeColor'])->middleware('auth');
Route::get('ShopItemColor/edit', [ShopItemsController::class, 'editColor'])->middleware('auth');
Route::patch('ShopItemColor/update', [ShopItemsController::class, 'updateColor'])->middleware('auth');
Route::delete('itemColor/destroy', [ShopItemsController::class, 'destroyColor'])->middleware('auth');
Route::get('get-item-scores/{unique_code?}', [ItemScoresController::class, 'index'])->middleware('auth');
Route::get('get-item-credits/{unique_code?}', [ItemCreditsController::class, 'index'])->middleware('auth');
Route::get('get-item-prices/{unique_code?}', [ItemPricesController::class, 'index'])->middleware('auth');
Route::get('get-item-supplier/{unique_code?}', [ItemSuppliersController::class, 'index'])->middleware('auth');
Route::get('item-scores/create', [ItemScoresController::class, 'create'])->middleware('auth');
Route::post('item-scores/store', [ItemScoresController::class, 'store'])->middleware('auth');
Route::get('item-credits/create', [ItemCreditsController::class, 'create'])->middleware('auth');
Route::post('item-credits/store', [ItemCreditsController::class, 'store'])->middleware('auth');
Route::get('item-suppliers/create', [ItemSuppliersController::class, 'create'])->middleware('auth');
Route::post('item-supplier/store', [ItemSuppliersController::class, 'store'])->middleware('auth');
Route::get('destroy-null/{unique_code}', [ItemCreditsController::class, 'destroyNullItem'])->middleware('auth');
Route::get('item-prices/create', [ItemPricesController::class, 'create'])->middleware('auth');
Route::post('item-prices/store', [ItemPricesController::class, 'store'])->middleware('auth');
Route::post('items/insert_codes', [ShopItemsController::class, 'itemCodesInsert'])->middleware('auth');


Route::post('shop-item/import', [ShopsController::class, 'importItemShop']);
//ShopItems Route End

Route::get('/currentUserRole', function () {
    if (\App\Models\User::find(CurrentUserID())->roles()->first()->name == 'shop_admin') {
        return array_map('intval', \App\Models\User::find(CurrentUserID())->shops()->pluck('id')->toArray());
    }
});

Route::get('/get-role-name', function () {
    if (!isAdmin())
        return \App\Models\User::find(CurrentUserID())->roles()->first()->name;
});
Route::get('/c', function () {
    return \App\Models\User::find(CurrentUserID())->credits()->get();
});
//Cards Route Start
Route::get('CardsList', [CardsController::class, 'getIndex'])->name('card.list')->middleware('auth', 'permission:card_view');
Route::get('get-Cards-data', [CardsController::class, 'anyData'])->name('cards')->middleware('auth', 'permission:card_view');
Route::get('Cards/{id}/destroy', [CardsController::class, 'destroy'])->name('cardsDelete')->middleware('auth', 'permission:card_delete');
Route::get('Cards/{id}/edit', [CardsController::class, 'edit'])->middleware('auth', 'permission:card_edit');
Route::post('Cards/{id}/update', [CardsController::class, 'update'])->middleware('auth', 'permission:card_edit');

Route::get('EmptyCardsList', [CardsController::class, 'getIndexEmpty'])->name('emptycard.list')->middleware('auth', 'permission:card_view');
Route::get('get-EmptyCards-data', [CardsController::class, 'anyDataEmpty'])->name('emptycards')->middleware('auth', 'permission:card_view');
Route::get('Cards/{id}/destroy', [CardsController::class, 'destroy'])->name('cemptycardsDelete')->middleware('auth', 'permission:card_delete');
Route::get('EmptyCards/{id}/edit', [CardsController::class, 'edit'])->middleware('auth', 'permission:card_edit');
Route::post('EmptyCards/{id}/update', [CardsController::class, 'update'])->middleware('auth', 'permission:card_edit');
//Cards Route End

//States Route Start
Route::get('state/{id}', [UsersController::class, 'getState'])->middleware('auth');
//States Route End

//Colors Route Start
Route::get('ColorsList', [ColorsController::class, 'getIndex'])->name('color.list')->middleware('auth', 'permission:setting_all');
Route::get('get-Colors-data', [ColorsController::class, 'anyData'])->name('colors')->middleware('auth', 'permission:setting_all');
Route::get('Colors/create', [ColorsController::class, 'create'])->name('colorAddForm')->middleware('auth', 'permission:setting_all');
Route::post('Colors/store', [ColorsController::class, 'store'])->name('colorAdd')->middleware('auth', 'permission:setting_all');
Route::delete('Colors/destroy', [ColorsController::class, 'destroy'])->middleware('auth', 'permission:setting_all');
Route::delete('Colors/destroy-selections', [ColorsController::class, 'destroySelections'])->middleware('auth', 'permission:setting_all');
Route::get('Colors/edit', [ColorsController::class, 'edit'])->middleware('auth', 'permission:setting_all');
Route::patch('Colors/update', [ColorsController::class, 'update'])->middleware('auth', 'permission:setting_all');
//Colors Route End

//Cost Types Route Start
Route::get('cost-types', [\App\Http\Controllers\CostTypesController::class, 'costTypes'])->middleware('auth', 'permission:setting_all');
Route::get('get-cost-types-data', [\App\Http\Controllers\CostTypesController::class, 'getData'])->middleware('auth', 'permission:setting_all');
Route::get('cost-type/create', [\App\Http\Controllers\CostTypesController::class, 'create'])->middleware('auth', 'permission:setting_all');
Route::post('cost-type/store', [\App\Http\Controllers\CostTypesController::class, 'store'])->middleware('auth', 'permission:setting_all');
Route::delete('cost-type/destroy', [\App\Http\Controllers\CostTypesController::class, 'destroy'])->middleware('auth', 'permission:setting_all');
Route::get('cost-type/edit/{id}', [\App\Http\Controllers\CostTypesController::class, 'edit'])->middleware('auth', 'permission:setting_all');
Route::patch('cost-type/update', [\App\Http\Controllers\CostTypesController::class, 'update'])->middleware('auth', 'permission:setting_all');
//Cost Types Route End


//Payment Reasons Route Start
Route::get('payment-reasons', [\App\Http\Controllers\PaymentReasonsController::class, 'paymentReasons'])->middleware('auth', 'permission:setting_all');
Route::get('get-payment-reasons-data', [\App\Http\Controllers\PaymentReasonsController::class, 'getData'])->middleware('auth', 'permission:setting_all');
Route::get('payment-reason/create', [\App\Http\Controllers\PaymentReasonsController::class, 'create'])->middleware('auth', 'permission:setting_all');
Route::post('payment-reason/store', [\App\Http\Controllers\PaymentReasonsController::class, 'store'])->middleware('auth', 'permission:setting_all');
Route::delete('payment-reason/destroy', [\App\Http\Controllers\PaymentReasonsController::class, 'destroy'])->middleware('auth', 'permission:setting_all');
Route::get('payment-reason/edit/{id}', [\App\Http\Controllers\PaymentReasonsController::class, 'edit'])->middleware('auth', 'permission:setting_all');
Route::patch('payment-reason/update', [\App\Http\Controllers\PaymentReasonsController::class, 'update'])->middleware('auth', 'permission:setting_all');
//Payment Reasons Route End

//Funds Route Start
Route::get('funds', [\App\Http\Controllers\FundsController::class, 'index'])->middleware('auth', 'permission:setting_all');
Route::get('get-funds-data', [\App\Http\Controllers\FundsController::class, 'anyData'])->middleware('auth', 'permission:setting_all');
Route::post('get-funds-select', [\App\Http\Controllers\FundsController::class, 'selectData'])->middleware('auth', 'permission:setting_all');
Route::get('funds/create', [\App\Http\Controllers\FundsController::class, 'create'])->middleware('auth', 'permission:setting_all');
Route::post('funds/store', [\App\Http\Controllers\FundsController::class, 'store'])->middleware('auth', 'permission:setting_all');
Route::delete('funds/destroy', [\App\Http\Controllers\FundsController::class, 'destroy'])->middleware('auth', 'permission:setting_all');
Route::delete('funds/destroy-selections', [\App\Http\Controllers\FundsController::class, 'destroySelections'])->middleware('auth', 'permission:setting_all');
Route::get('funds/{id}/edit', [\App\Http\Controllers\FundsController::class, 'edit'])->middleware('auth', 'permission:setting_all');
Route::patch('funds/update', [\App\Http\Controllers\FundsController::class, 'update'])->middleware('auth', 'permission:setting_all');
Route::get('fund/payments', [\App\Http\Controllers\FundsController::class, 'showPayments'])->middleware('auth', 'permission:setting_all');
Route::get('fund/{id}/payments', [\App\Http\Controllers\FundsController::class, 'getPayments'])->middleware('auth', 'permission:setting_all');
Route::get('fund/{id}/costs', [\App\Http\Controllers\FundsController::class, 'getCosts'])->middleware('auth', 'permission:setting_all');
Route::get('fund/costs', [\App\Http\Controllers\FundsController::class, 'showCosts'])->middleware('auth', 'permission:setting_all');
//Funds Route End

//Roles Route Start
Route::get('RolesList', [RolesController::class, 'index'])->middleware('auth', 'permission:setting_all');
Route::get('get-roles-data', [RolesController::class, 'anyData'])->name('roles')->middleware('auth', 'permission:setting_all');
Route::get('Roles/create', [RolesController::class, 'create'])->name('roleAddForm')->middleware('auth', 'permission:setting_all');
Route::post('Roles/store', [RolesController::class, 'store'])->name('roleAdd')->middleware('auth', 'permission:setting_all');
Route::delete('Roles/destroy', [RolesController::class, 'destroy'])->middleware('auth', 'permission:setting_all');
Route::delete('Roles/destroy-selections', [RolesController::class, 'destroySelections'])->middleware('auth', 'permission:setting_all');
Route::get('Roles/edit/{id}', [RolesController::class, 'edit'])->middleware('auth', 'permission:setting_all');
Route::patch('Roles/update', [RolesController::class, 'update'])->middleware('auth', 'permission:setting_all');
//Roles Route End


//Genders Route Start
Route::get('GendersList', [GendersController::class, 'getIndex'])->name('gender.list')->middleware('auth', 'permission:setting_all');
Route::get('get-Genders-data', [GendersController::class, 'anyData'])->name('genders')->middleware('auth', 'permission:setting_all');
Route::get('Genders/create', [GendersController::class, 'create'])->name('genderAddForm')->middleware('auth', 'permission:setting_all');
Route::post('Genders/store', [GendersController::class, 'store'])->name('genderAdd')->middleware('auth', 'permission:setting_all');
Route::delete('Genders/destroy', [GendersController::class, 'destroy'])->middleware('auth', 'permission:setting_all');
Route::get('Genders/edit', [GendersController::class, 'edit'])->middleware('auth', 'permission:setting_all');
Route::patch('Genders/update', [GendersController::class, 'update'])->middleware('auth', 'permission:setting_all');
Route::delete('Genders/destroy-selections', [GendersController::class, 'destroySelections'])->middleware('auth', 'permission:setting_all');
//Genders Route End

//Floors Route Start
Route::get('floors', [\App\Http\Controllers\FloorsController::class, 'getIndex'])->middleware('auth', 'permission:setting_all');
Route::get('get-floors-data', [\App\Http\Controllers\FloorsController::class, 'anyData'])->middleware('auth', 'permission:setting_all');
Route::post('get-floors-select', [\App\Http\Controllers\FloorsController::class, 'selectData'])->middleware('auth', 'permission:setting_all');
Route::get('floor/create', [\App\Http\Controllers\FloorsController::class, 'create'])->middleware('auth', 'permission:setting_all');
Route::post('floor/store', [\App\Http\Controllers\FloorsController::class, 'store'])->middleware('auth', 'permission:setting_all');
Route::delete('floor/destroy', [\App\Http\Controllers\FloorsController::class, 'destroy'])->middleware('auth', 'permission:setting_all');
Route::get('floor/edit', [\App\Http\Controllers\FloorsController::class, 'edit'])->middleware('auth', 'permission:setting_all');
Route::patch('floor/update', [\App\Http\Controllers\FloorsController::class, 'update'])->middleware('auth', 'permission:setting_all');
//Floors Route End

//ShopItemCategories Route Start
Route::get('ShopItemCategoriesList', [ItemCategoriesController::class, 'getIndex'])->name('shopItemCategory.list')->middleware('auth', 'permission:setting_all');
Route::get('get-ShopItemCategories-data', [ItemCategoriesController::class, 'anyData'])->name('shopItemCategories')->middleware('auth', 'permission:setting_all');
Route::post('get-ShopItemCategories-select', [ItemCategoriesController::class, 'selectData'])->middleware('auth');
Route::get('ShopItemCategories/create', [ItemCategoriesController::class, 'create'])->name('shopItemCategoryAddForm')->middleware('auth', 'permission:setting_all');
Route::post('ShopItemCategories/store/{shop?}', [ItemCategoriesController::class, 'store'])->name('shopItemCategoryAdd')->middleware('auth');
Route::delete('ShopItemCategories/destroy', [ItemCategoriesController::class, 'destroy'])->middleware('auth');
Route::delete('ShopItemCategories/destroy-selections', [ItemCategoriesController::class, 'destroySelections'])->middleware('auth', 'permission:setting_all');
Route::get('ShopItemCategories/edit', [ItemCategoriesController::class, 'edit'])->middleware('auth', 'permission:setting_all');
Route::patch('ShopItemCategories/update', [ItemCategoriesController::class, 'update'])->middleware('auth');
Route::get('get-item-category', [ItemCategoriesController::class, 'anyData'])->middleware('auth');
//ShopItemCategories Route End

Auth::routes();
Route::get('logout', 'Auth\LoginController@logout');


Route::get('/home', [HomeController::class, 'index'])->name('home')->middleware('auth');
Route::get('get-home-data', [HomeController::class, 'getData'])->middleware('auth');
Route::get('get-cards-list', [HomeController::class, 'cardsList'])->middleware('auth');
Route::post('shop-item', [HomeController::class, 'item_detail'])->middleware('auth');
Route::get('save-item/{id}', [HomeController::class, 'saveItem'])->middleware('auth');

Route::get('/estates', [\App\Http\Controllers\EstatesController::class, 'show'])->name('estates')->middleware('auth', 'permission:estate_view');
Route::get('/get-estates-data', [\App\Http\Controllers\EstatesController::class, 'getData'])->name('get-estates-data')->middleware('auth', 'permission:estate_view');
Route::get('estates/create', [\App\Http\Controllers\EstatesController::class, 'createForm'])->middleware('auth', 'permission:estate_add');
Route::post('estates/store', [\App\Http\Controllers\EstatesController::class, 'store'])->middleware('auth', 'permission:estate_add');
Route::get('estate_detail/create', [\App\Http\Controllers\EstateDetailsController::class, 'createForm'])->middleware('auth', 'permission:estate_add');
Route::post('estate_detail/store', [\App\Http\Controllers\EstateDetailsController::class, 'store'])->middleware('auth', 'permission:estate_add');
Route::delete('estates/destroy', [\App\Http\Controllers\EstatesController::class, 'destroy'])->middleware('auth', 'permission:estate_delete');
Route::get('estates/{id}/edit', [\App\Http\Controllers\EstatesController::class, 'editForm'])->middleware('auth', 'permission:estate_edit');
Route::patch('estates/update', [\App\Http\Controllers\EstatesController::class, 'update'])->middleware('auth', 'permission:estate_edit');
Route::get('estates/{id}/view', [\App\Http\Controllers\EstatesController::class, 'viewEstate'])->middleware('auth', 'permission:estate_view');
Route::get('get_estate_detail/{id}', [\App\Http\Controllers\EstateDetailsController::class, 'getData'])->middleware('auth', 'permission:estate_view');
Route::get('estate_detail/{id}/edit', [\App\Http\Controllers\EstateDetailsController::class, 'editForm'])->middleware('auth', 'permission:estate_edit');
Route::patch('estate_detail/update', [\App\Http\Controllers\EstateDetailsController::class, 'update'])->middleware('auth', 'permission:estate_edit');
Route::delete('estate_detail/destroy', [\App\Http\Controllers\EstateDetailsController::class, 'destroy'])->middleware('auth', 'permission:estate_delete');

Route::get('/buildings', [\App\Http\Controllers\BuildingsController::class, 'show'])->name('buildings')->middleware('auth', 'permission:building_view');
Route::get('/get-buildings-data', [\App\Http\Controllers\BuildingsController::class, 'getData'])->middleware('auth', 'permission:building_view');
Route::post('/get-buildings-select', [\App\Http\Controllers\BuildingsController::class, 'selectData'])->middleware('auth', 'permission:building_view');
Route::get('buildings/create', [\App\Http\Controllers\BuildingsController::class, 'createForm'])->middleware('auth', 'permission:building_add');
Route::post('buildings/store', [\App\Http\Controllers\BuildingsController::class, 'store'])->middleware('auth', 'permission:building_add');
Route::get('building_detail/create', [\App\Http\Controllers\BuildingDetailsController::class, 'createForm'])->middleware('auth', 'permission:building_add');
Route::post('building_detail/store', [\App\Http\Controllers\BuildingDetailsController::class, 'store'])->middleware('auth', 'permission:building_add');
Route::delete('buildings/destroy', [\App\Http\Controllers\BuildingsController::class, 'destroy'])->middleware('auth', 'permission:building_delete');
Route::get('buildings/{id}/edit', [\App\Http\Controllers\BuildingsController::class, 'editForm'])->middleware('auth', 'permission:building_edit');
Route::patch('buildings/update', [\App\Http\Controllers\BuildingsController::class, 'update'])->middleware('auth', 'permission:building_edit');
Route::get('buildings/{id}/view', [\App\Http\Controllers\BuildingsController::class, 'viewBuilding'])->middleware('auth', 'permission:building_view');
Route::get('get_building_detail/{id}', [\App\Http\Controllers\BuildingDetailsController::class, 'getData'])->middleware('auth', 'permission:building_view');
Route::get('building_detail/{id}/edit', [\App\Http\Controllers\BuildingDetailsController::class, 'editForm'])->middleware('auth', 'permission:building_edit');
Route::patch('building_detail/update', [\App\Http\Controllers\BuildingDetailsController::class, 'update'])->middleware('auth', 'permission:building_edit');
Route::delete('building_detail/destroy', [\App\Http\Controllers\BuildingDetailsController::class, 'destroy'])->middleware('auth', 'permission:building_delete');


Route::get('/contracts', [\App\Http\Controllers\ContractsController::class, 'show'])->name('contracts')->middleware(['auth', 'permission:contract_demo,contract_view']);
Route::get('/get-contracts-data/{id}', [\App\Http\Controllers\ContractsController::class, 'getData'])->name('get-contracts-data')->middleware(['auth', 'permission:contract_demo,contract_view']);
Route::get('contracts/create/{eid}', [\App\Http\Controllers\ContractsController::class, 'createForm'])->middleware(['auth', 'permission:contract_demo,contract_add']);
Route::post('contracts/store', [\App\Http\Controllers\ContractsController::class, 'store'])->middleware(['auth', 'permission:contract_add,contract_demo']);
Route::delete('contracts/destroy', [\App\Http\Controllers\ContractsController::class, 'destroy'])->middleware(['auth', 'permission:contract_delete']);
Route::get('contracts/{id}/add-payment', [\App\Http\Controllers\ContractsController::class, 'addPaymentToContract'])->middleware(['auth', 'permission:contract_edit,contract_demo']);
Route::patch('contracts/update', [\App\Http\Controllers\ContractsController::class, 'update'])->middleware('auth', 'permission:contract_edit');
Route::get('contracts/{id}/view', [\App\Http\Controllers\ContractsController::class, 'viewContracts'])->middleware(['auth', 'permission:contract_demo,contract_view']);
Route::post('contracts/check-active', [\App\Http\Controllers\ContractsController::class, 'checkContract'])->middleware(['auth', 'permission:contract_demo,contract_view']);
Route::get('contracts/{id}/ban', [\App\Http\Controllers\ContractsController::class, 'banForm'])->middleware(['auth', 'permission:contract_edit,contract_demo']);
Route::patch('contracts/ban', [\App\Http\Controllers\ContractsController::class, 'banContract'])->middleware(['auth', 'permission:contract_edit,contract_demo']);
Route::post('contracts/ban-data', [\App\Http\Controllers\ContractsController::class, 'calRemainRent'])->middleware(['auth', 'permission:contract_edit,contract_demo']);
Route::post('contracts/calculate', [\App\Http\Controllers\ContractsController::class, 'calculate'])->middleware(['auth', 'permission:contract_edit,contract_demo']);
Route::get('contracts/{id}/print', [\App\Http\Controllers\ContractsController::class, 'printContract'])->middleware(['auth', 'permission:contract_edit']);
Route::get('contracts/{id}/files', [\App\Http\Controllers\ContractsController::class, 'files'])->middleware(['auth', 'permission:contract_edit']);
Route::get('contracts/{id}/file_data', [\App\Http\Controllers\ContractsController::class, 'fileData'])->middleware(['auth', 'permission:contract_edit']);
Route::post('contracts/check-file', [\App\Http\Controllers\ContractsController::class, 'checkFile'])->middleware(['auth', 'permission:contract_edit']);
Route::post('contracts/delete-file', [\App\Http\Controllers\ContractsController::class, 'deleteFile'])->middleware(['auth', 'permission:contract_edit']);
Route::post('contracts/upload-file', [\App\Http\Controllers\ContractsController::class, 'uploadFile'])->middleware(['auth', 'permission:contract_edit,contract_demo',]);
Route::post('contracts/generate-contract-id', [\App\Http\Controllers\ContractsController::class, 'genContractId'])->middleware(['auth', 'permission:contract_demo,contract_delete']);


Route::get('payments-modal', [\App\Http\Controllers\PaymentsController::class, 'showModal'])->name('payments-modal')->middleware('auth', 'permission:payment_view');
Route::get('payments', [\App\Http\Controllers\PaymentsController::class, 'show'])->name('payments')->middleware('auth', 'permission:payment_view');
Route::get('/get-payments-modal-data/{id?}', [\App\Http\Controllers\PaymentsController::class, 'getDataModal'])->middleware(['auth', 'permission:payment_view,contract_demo']);
Route::get('/get-payments-data', [\App\Http\Controllers\PaymentsController::class, 'getData'])->name('get-payments-data')->middleware('auth', 'permission:payment_view');
Route::get('cheques/create', [\App\Http\Controllers\ChequesController::class, 'createForm'])->middleware('auth', 'permission:payment_add');
Route::post('cheques/store', [\App\Http\Controllers\ChequesController::class, 'store'])->middleware('auth', 'permission:payment_add');
Route::delete('cheques/destroy', [\App\Http\Controllers\ChequesController::class, 'destroy'])->middleware('auth', 'permission:payment_delete');
Route::get('cheques/{id}/edit', [\App\Http\Controllers\ChequesController::class, 'editForm'])->middleware('auth', 'permission:payment_edit');
Route::patch('cheques/update', [\App\Http\Controllers\ChequesController::class, 'update'])->middleware('auth', 'permission:payment_edit');
Route::get('cheques/{id}/view', [\App\Http\Controllers\ChequesController::class, 'viewCheque'])->middleware('auth', 'permission:payment_view');
Route::get('cashs/create', [\App\Http\Controllers\CashsController::class, 'createForm'])->middleware('auth', 'permission:payment_add');
Route::post('cashs/store', [\App\Http\Controllers\CashsController::class, 'store'])->middleware('auth', 'permission:payment_add');
Route::delete('cashs/destroy', [\App\Http\Controllers\CashsController::class, 'destroy'])->middleware('auth', 'permission:payment_delete');
Route::get('cashs/{id}/edit', [\App\Http\Controllers\CashsController::class, 'editForm'])->middleware('auth', 'permission:payment_edit');
Route::patch('cashs/update', [\App\Http\Controllers\CashsController::class, 'update'])->middleware('auth', 'permission:payment_edit');
Route::get('cashs/{id}/view', [\App\Http\Controllers\CashsController::class, 'viewCash'])->middleware('auth', 'permission:payment_view');
Route::post('payment-check', [\App\Http\Controllers\PaymentsController::class, 'checkPayment'])->middleware('auth', 'permission:payment_add');;
Route::post('payment-reset', [\App\Http\Controllers\PaymentsController::class, 'paymentReset'])->middleware('auth', 'permission:payment_add,contract_demo');;

Route::get('charges/{eid}', [\App\Http\Controllers\ChargePaymentsController::class, 'show'])->name('charges')->middleware('auth', 'permission:payment_view');
Route::get('/get-charges-data/{eid}', [\App\Http\Controllers\ChargePaymentsController::class, 'getData'])->middleware('auth', 'permission:payment_view');
Route::get('/insert_charges', [\App\Http\Controllers\ChargePaymentsController::class, 'insertCharge'])->middleware('auth', 'permission:payment_view');
Route::get('/charges/cash/{id}/edit', [\App\Http\Controllers\ChargePaymentsController::class, 'editCash'])->middleware('auth', 'permission:payment_view');
Route::get('/charges/cheque/{id}/edit', [\App\Http\Controllers\ChargePaymentsController::class, 'editCheque'])->middleware('auth', 'permission:payment_view');
Route::patch('/charges/{id}/update/cash', [\App\Http\Controllers\ChargePaymentsController::class, 'updateCash'])->middleware('auth', 'permission:payment_view');
Route::patch('/charges/{id}/update/cheque', [\App\Http\Controllers\ChargePaymentsController::class, 'updateCheque'])->middleware('auth', 'permission:payment_view');


Route::get('costs', [\App\Http\Controllers\CostController::class, 'show'])->name('costs')->middleware('auth', 'permission:payment_view');
Route::get('/get-costs-data', [\App\Http\Controllers\CostController::class, 'getData'])->name('get-costs-data')->middleware('auth', 'permission:payment_view');
Route::get('cost/cheque/create', [\App\Http\Controllers\ChequesController::class, 'createCostForm'])->middleware('auth', 'permission:payment_add');
Route::post('cost/cheque/store', [\App\Http\Controllers\ChequesController::class, 'storeCost'])->middleware('auth', 'permission:payment_add');
Route::delete('cost/cheque/destroy', [\App\Http\Controllers\ChequesController::class, 'destroyCost'])->middleware('auth', 'permission:payment_delete');
Route::get('cost/cheque/{id}/edit', [\App\Http\Controllers\ChequesController::class, 'editCostForm'])->middleware('auth', 'permission:payment_edit');
Route::patch('cost/cheque/update', [\App\Http\Controllers\ChequesController::class, 'updateCost'])->middleware('auth', 'permission:payment_edit');
Route::get('cost/cheque/{id}/view', [\App\Http\Controllers\ChequesController::class, 'viewCostCheque'])->middleware('auth', 'permission:payment_view');
Route::get('cost/cash/create', [\App\Http\Controllers\CashsController::class, 'createCostForm'])->middleware('auth', 'permission:payment_add');
Route::post('cost/cash/store', [\App\Http\Controllers\CashsController::class, 'storeCost'])->middleware('auth', 'permission:payment_add');
Route::delete('cost/cash/destroy', [\App\Http\Controllers\CashsController::class, 'destroyCost'])->middleware('auth', 'permission:payment_delete');
Route::get('cost/cash/{id}/edit', [\App\Http\Controllers\CashsController::class, 'editCostForm'])->middleware('auth', 'permission:payment_edit');
Route::patch('cost/cash/update', [\App\Http\Controllers\CashsController::class, 'updateCost'])->middleware('auth', 'permission:payment_edit');
Route::get('cost/cash/{id}/view', [\App\Http\Controllers\CashsController::class, 'viewCostCash'])->middleware('auth', 'permission:payment_view');
Route::get('cheque-list', [\App\Http\Controllers\ChequesController::class, 'checkList'])->middleware('auth', 'permission:payment_view');
Route::get('cheque-list-data', [\App\Http\Controllers\ChequesController::class, 'cheque_list_data'])->middleware('auth', 'permission:payment_view');

Route::get('user_permission/{id}', [\App\Http\Controllers\TableController::class, 'index']);
Route::get('user_permission-mobile', [\App\Http\Controllers\PermissionsController::class, 'getUserPermissions']);
Route::post('user_permission/update/{id}', [\App\Http\Controllers\TableController::class, 'update'])->middleware('log');


Route::get('role-name', function () {
    return userRole('1')->name;
});

Route::get('test', function () {
    return usersList(['renter']);
});

Route::post('user-contracts', function () {
    return userContracts(request('userId'));
});

Route::get('generate-card/{count}', [CardsController::class, 'generateCard']);
Route::get('validation-card', [UsersController::class, 'validateCard'])->middleware('guest');


Route::get('/clear', function () {
    Artisan::call('cache:clear');
    Artisan::call('config:clear');
    Artisan::call('route:clear');
    return "Cache is cleared";
})->middleware('auth');


Route::get('fetch-user-data', [UsersController::class, 'fetchUserData'])->middleware('auth');
Route::get('hash', function () {
    return \Illuminate\Support\Facades\Hash::make('123456');
})->middleware('auth');
Route::get('/menu', function () {
    return view('app.main');
})->middleware('auth');
Route::get('/add-buy', function () {
    return view('app.main');
})->middleware('auth');
Route::get('/get-city-list', function () {
    return App\Models\City::all();
})->middleware('auth');
Route::get('/get-state-list/{ostan}', function ($ostan) {
    return App\Models\State::where('ostan', $ostan)->get();
})->middleware('auth');


Route::get('/get-role', function () {
    return \App\Models\User::find(CurrentUserID())->roles()->first()->id;
})->middleware('auth');
Route::get('/home', function () {
    if (\Illuminate\Support\Facades\Auth::check()) {
        return view('app.main', ['theme' => \App\Models\User::whereId(CurrentUserID())->first(['default_theme', 'darktheme', 'auto_darktheme'])]);
    } else {
        return redirect('login');
    }
})->middleware('auth');


Route::get('r', function () {
    return \Http::timeout(10)->retry(0)->get('http://smsresa.ir/send_via_get/send_sms.php', [
        'username' => 'atm',
        'password' => '123',
        'sender_number' => '3000343638',
        'receiver_number' => '09369510405',
        'note' => 'test',
    ]);
});

Route::get('re', function () {
    $cs = User::get();
    foreach ($cs as $c) {
        if (ContractUser::where('identity_code', $c->identity_code)->count() < 1) {
            ContractUser::create([
                'identity_code' => $c->identity_code,
                'name' => $c->name,
                'family' => $c->family,
                'father' => $c->father_name,
                'gender' => $c->gender,
                'building_id' => $c->building_id,
                'birthday' => $c->birthday,
                'mobile' => $c->mobile,
                'mobile_back' => $c->mobile_back,
                'tel' => $c->tel,
                'address' => $c->address,
            ]);
        }
    }
//        DB::select('Insert into contract_users(identity_code, name, family, building_id, gender, birthday, mobile, tel, address, mobile_back, shenasnameh, sadereh)
//SELECT        identity_code, name, family, building_id, gender, birthday, mobile, tel, address, mobile_back, shenasnameh, sadereh
//FROM            users where users.identity_code NOT Exist ('.$id.')');


});
Route::get('pas', function () {
    $cs = User::get();
    foreach ($cs as $c) {
        User::whereId($c->id)->update([
            'password' => Hash::make($c->mobile)
        ]);
    }
});

Route::get('php', function () {
    phpinfo();
});


Route::get('en', function () {
    $json = json_encode(['a' => 'testA']);
    return base64_encode($json);
});
Route::get('de', function () {

    return base64_decode('eyJhIjoidGVzdEEifQ==');
});
Route::post('login-modal', [\App\Http\Controllers\Auth\LoginController::class, 'login']);
Route::get('csrf-token', function () {
    return csrf_token();
});

Route::get('print_qr_codes', function () {
//    $qr = DNS2DFacade::getBarcodeSVG($item->item_code, 'QRCODE', '5', '5');
    $data = ItemCode::all();
    return view('Labels.print', ['items' => $data]);
});

Route::get('admin-panel' , function (){
    return view('Admin.index');
});
