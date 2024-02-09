<?php

use App\Models\Role;
use App\Models\User;
use Milon\Barcode\DNS2D;
use Milon\Barcode\Facades\DNS2DFacade;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * description
 *
 * @param
 * @return
 */
function kabiseh($year)
{
    $arr = collect(['1403', '1407', '1411', '1416', '1420', '1424', '1428', '1432', '1436', '1440']);
    $filter = $arr->filter(function ($value) use ($year) {
        return $value === $year;
    })->count();
    return $filter;
}


function setting()
{
    return \App\Models\Setting::first();
}

function charge_setting()
{
    return \App\Models\ChargeSetting::orderBy('id', 'desc')->first();
}

function arrayToObject($a)
{
    foreach ($a as $x) {
        return $x;
    }

}

function CurrentUserID()
{
    if (Auth::check()) {
        return Auth::user()->id;
    } else {
        return redirect('login');
    }
}

function isAdmin()
{

    if (Auth::user()->is_admin == 1) {
        return true;
    }


}

function mobileApp()
{
    if (Auth::user()) {
        if (\App\Models\User::find(CurrentUserID())->roles()->first()->access_to_app == 1) {
            return true;
        }
    }


}

function randomCode($length)
{

    $chars = "0123456789";
    $r = str_split($chars);
    $o = '';
    for ($i = 1; $i <= $length; $i++) {
        $o .= $r[rand(0, 9)];
    }

    $o = preg_replace('/^0/', rand(1, 9), $o);

    return $o;
}

function randomString($length = 10): string
{
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

function arabicToEnglishNumber($string)
{
    $range = range(0, 9);
    $e = '';
// Persian
    $persianDecimal = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
// Arabic
    $arabicDecimal = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
// number Arabic
    $arabic = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
// number Persian
    $persian = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
//Decimal
    $decimal = ['،', '٬'];
    $string = str_replace($persianDecimal, $range, $string);
    $string = str_replace($arabicDecimal, $range, $string);
    $string = str_replace($arabic, $range, $string);
    $string = str_replace($decimal, $e, $string);
    return str_replace($persian, $range, $string);
}

function fullDate()
{
    return jstrftime('%Y/%m/%d');
}

function fullDateTime()
{
    return jstrftime('%Y-%m-%e %H:%M:%S');
}

function fullTime()
{
    return jstrftime('%H:%M:%S');
}

function myDatePlus($int = 0)
{

    $date = new DateTime(Date('Y-m-d'));
    $date->modify($int . ' day');
    $arg = $date->format('Y,m,d');
    $resg = explode(',', $arg);
    $arj = gregorian_to_jalali($resg[0], $resg[1], $resg[2], '/');
    $resj = explode('/', $arj);
    if ($resj[1] < 10) {
        $resj[1] = '0' . $resj[1];
    }
    if ($resj[2] < 10) {
        $resj[2] = '0' . $resj[2];
    }
    return $resj[0] . '/' . $resj[1] . '/' . $resj[2];
}

function nDatePlus($int = 0)
{

    $date = new DateTime(Date('Y-m-d'));
    $date->modify($int . ' day');
    $arg = $date->format('Y,m,d');
    $resg = explode(',', $arg);
    $arj = gregorian_to_jalali($resg[0], $resg[1], $resg[2], '/');
    $resj = explode('/', $arj);
    if ($resj[1] < 10) {
        $resj[1] = '0' . $resj[1];
    }
    if ($resj[2] < 10) {
        $resj[2] = '0' . $resj[2];
    }
    return $resj[0] . '' . $resj[1] . '' . $resj[2];
}

function myMonthPlus($d, $int)
{
    if ($d != '') {

        $dd = jalToger($d);
        $date = new DateTime(Date($dd));
        $date->modify($int . ' month');
        $arg = $date->format('Y,m,d');
        $resg = explode(',', $arg);
        $arj = gregorian_to_jalali($resg[0], $resg[1], $resg[2], '/');
        $resj = explode('/', $arj);
        if ($resj[1] < 10) {
            $resj[1] = '0' . $resj[1];
        }
        if ($resj[2] < 10) {
            $resj[2] = '0' . $resj[2];
        }
        return $resj[0] . '/' . $resj[1] . '/' . $resj[2];
    } else {
        return '';
    }
}

function jAddMonths($date, $n): string
{
    $r = explode('/', $date);
    $m = intval($r[1] + $n);
    $y = intval($r[0]);
    $d = intval($r[2]);
    if ($m > 12) {
        $y = $y + 1;
        $m = $m - 12;
    }
    if ($m < 10) {
        $m = '0' . $m;
    }
    if ($d < 10) {
        $d = '0' . $d;
    }
    return $y . '/' . $m . '/' . $d;
}

function jAddDays($date, $n): string
{
    $r = explode('/', $date);
    $d = intval($r[2] + $n);
    $m = intval($r[1]);
    $y = $r[0];
    if ($m < 7 && $d > 31) {
        $m = $m + 1;
        $d = $d - 31;
    }
    if (kabiseh($y) > 0) {
        if ($m > 6 && $d > 30) {
            $m = $m + 1;
            $d = $d - 30;
        }
    } else {
        if ($m > 6 && $m < 12 && $d > 30) {
            $m = $m + 1;
            $d = $d - 30;
        }
        if ($m == 12 && $d > 29) {
            $m = $m + 1;
            $d = $d - 29;
        }


    }
    if ($m > 12) {
        $y = $y + 1;
        $m = $m - 12;
    }


    if ($m < 10) {
        $m = '0' . $m;
    }
    if ($d < 10) {
        $d = '0' . $d;
    }
    return $y . '/' . $m . '/' . $d;
}

function shortDate($d)
{
    $res = explode('/', $d);
    switch ($res[1]) {
        case '01':
            $m = 'فروردین';
            break;
        case '02':
            $m = 'اردیبهشت';
            break;
        case '03':
            $m = 'خرداد';
            break;
        case '04':
            $m = 'تیر';
            break;
        case '05':
            $m = 'مرداد';
            break;
        case '06':
            $m = 'شهریور';
            break;
        case '07':
            $m = 'مهر';
            break;
        case '08':
            $m = 'آبان';
            break;
        case '09':
            $m = 'آذر';
            break;
        case '10':
            $m = 'دی';
            break;
        case '11':
            $m = 'بهمن';
            break;
        case '12':
            $m = 'اسفند';
            break;
    }
    return $res[0] . ' ' . $m;

}

function gerTojal($d)
{
    include_once "jdf.php";
    $date = new DateTime($d);
    $arg = $date->format('Y,m,d');
    $resg = explode(',', $arg);
    $arj = gregorian_to_jalali($resg[0], $resg[1], $resg[2], '/');
    $resj = explode('/', $arj);
    if ($resj[1] < 10) {
        $resj[1] = '0' . $resj[1];
    }
    if ($resj[2] < 10) {
        $resj[2] = '0' . $resj[2];
    }
    return $resj[0] . '/' . $resj[1] . '/' . $resj[2];
}

function jalToger($d)
{

    $resg = explode('/', $d);
    $arj = jalali_to_gregorian($resg[0], $resg[1], $resg[2], '-');
    $resj = explode('-', $arj);

    return $resj[0] . '/' . $resj[1] . '/' . $resj[2];
}

class numToWord
{

    protected $digit1 = array(
        0 => 'صفر',
        1 => 'یک',
        2 => 'دو',
        3 => 'سه',
        4 => 'چهار',
        5 => 'پنج',
        6 => 'شش',
        7 => 'هفت',
        8 => 'هشت',
        9 => 'نه',
    );
    protected $digit1_5 = array(
        1 => 'یازده',
        2 => 'دوازده',
        3 => 'سیزده',
        4 => 'چهارده',
        5 => 'پانزده',
        6 => 'شانزده',
        7 => 'هفده',
        8 => 'هجده',
        9 => 'نوزده',
    );
    protected $digit2 = array(
        1 => 'ده',
        2 => 'بیست',
        3 => 'سی',
        4 => 'چهل',
        5 => 'پنجاه',
        6 => 'شصت',
        7 => 'هفتاد',
        8 => 'هشتاد',
        9 => 'نود'
    );
    protected $digit3 = array(
        1 => 'صد',
        2 => 'دویست',
        3 => 'سیصد',
        4 => 'چهارصد',
        5 => 'پانصد',
        6 => 'ششصد',
        7 => 'هفتصد',
        8 => 'هشتصد',
        9 => 'نهصد',
    );
    protected $steps = array(
        1 => 'هزار',
        2 => 'میلیون',
        3 => 'میلیارد',
        4 => 'بیلیون',
        5 => 'تریلیون',
        6 => 'کادریلیون',
        7 => 'کوینتریلیون',
        8 => 'سکستریلیون',
        9 => 'سپتریلیون',
        10 => 'اکتریلیون',
        11 => 'نونیلیون',
        12 => 'دسیلیون',
    );
    protected $t = array(
        'and' => 'و',
    );

    public function numberToWords($number)
    {
        $formated = number_format($number);
        $groups = explode(',', $formated);

        $steps = count($groups);

        $parts = array();
        foreach ($groups as $step => $group) {
            $group_words = self::groupToWords($group);
            if ($group_words) {
                $part = implode(' ' . $this->t['and'] . ' ', $group_words);
                if (isset($this->steps[$steps - $step - 1])) {
                    $part .= ' ' . $this->steps[$steps - $step - 1];
                }
                $parts[] = $part;
            }
        }
        return implode(' ' . $this->t['and'] . ' ', $parts);
    }

    protected function groupToWords($group)
    {
        $d3 = floor($group / 100);
        $d2 = floor(($group - $d3 * 100) / 10);
        $d1 = $group - $d3 * 100 - $d2 * 10;

        $group_array = array();

        if ($d3 != 0) {
            $group_array[] = $this->digit3[$d3];
        }

        if ($d2 == 1 && $d1 != 0) { // 11-19
            $group_array[] = $this->digit1_5[$d1];
        } else if ($d2 != 0 && $d1 == 0) { // 10-20-...-90
            $group_array[] = $this->digit2[$d2];
        } else if ($d2 == 0 && $d1 == 0) { // 00
        } else if ($d2 == 0 && $d1 != 0) { // 1-9
            $group_array[] = $this->digit1[$d1];
        } else { // Others
            $group_array[] = $this->digit2[$d2];
            $group_array[] = $this->digit1[$d1];
        }

        if (!count($group_array)) {
            return FALSE;
        }

        return $group_array;
    }
}

function timeMinus($a, $b)
{
    $x = explode(":", $a);
    $y = explode(":", $b);
    $e = $y[0] * 60 + str_replace('00', '0', $y[1]);
    $r = $x[0] * 60 + str_replace('00', '0', $x[1]);
    $z = ($e - $r);
    $w = $z / 60;
    $q = $z % 60;
    if (abs($q) < 10) {
        $q = '0' . abs($q);
    } else {
        $q = abs($q);
    }
    if (abs($w) < 10) {
        $w = ((int)$w);
    } else {
        $w = ((int)$w);
    }
    echo $w . ':' . $q;
}

function ltimeMinus($a, $b)
{
    $x = explode(":", $a);
    $y = explode(":", $b);
    $e = $y[0] * 60 + str_replace('00', '0', $y[1]);
    $r = $x[0] * 60 + str_replace('00', '0', $x[1]);
    $z = ($e - $r);
    $w = $z / 60;
    $q = $z % 60;
    if (abs($q) < 10) {
        $q = '0' . abs($q);
    } else {
        $q = abs($q);
    }
    if (abs($w) < 10) {
        $w = ((int)$w);
    } else {
        $w = ((int)$w);
    }
    return $w . ':' . $q;
}

function rtimeMinus($a, $b)
{
    $x = explode(":", $a);
    $y = explode(":", $b);
    $e = $y[0] * 60 + str_replace('00', '0', $y[1]);
    $r = $x[0] * 60 + str_replace('00', '0', $x[1]);
    $z = ($e - $r);
    $w = $z / 60;
    $q = $z % 60;
    if ($z <= 0) {
        return '00:00';
    } else {
        if (abs($q) < 10) {
            $q = '0' . abs($q);
        } else {
            $q = abs($q);
        }
        if (abs($w) < 10) {
            $w = ((int)$w);
        } else {
            $w = ((int)$w);
        }
        return $w . ':' . $q;
    }
}

function rtimePlus($a, $b)
{
    $x = explode(":", $a);
    $y = explode(":", $b);
    $e = $y[0] * 60 + str_replace('00', '0', $y[1]);
    $r = $x[0] * 60 + str_replace('00', '0', $x[1]);
    $z = ($e + $r);
    $w = $z / 60;
    $q = $z % 60;
    if (abs($q) < 10) {
        $q = '0' . abs($q);
    } else {
        $q = abs($q);
    }
    if (abs($w) < 10) {
        $w = abs((int)$w);
    } else {
        $w = abs((int)$w);
    }
    return $w . ':' . $q;
}

function coding($str)
{
    return \Illuminate\Support\Facades\Hash::make($str);
}

function datediff($startDate, $endDate)
{
// Parse dates for conversion
    $startArry = explode('/', $startDate);
    $endArry = explode('/', $endDate);

// Convert dates to Julian Days
    $start_date = jalali_to_gregorian($startArry["0"], $startArry["1"], $startArry["2"], '-');
    $end_date = jalali_to_gregorian($endArry["0"], $endArry["1"], $endArry["2"], '-');
    $date1 = date_create($start_date);
    $date2 = date_create($end_date);
// Return difference
    if ($date2 > $date1) {
        return date_diff($date1, $date1);
    }
    return date_diff($date2, $date1);
}

function usersList($roles = [])
{
    if (count($roles) === 0) {
        return \App\Models\User::where('active', 1)->where('name', '<>', '')->where('family', '<>', '')->get();
    }

    $arr = array();
    $users = \App\Models\User::where('active', 1)->where('name', '<>', '')->where('family', '<>', '')->get();
    foreach ($users as $user) {
        foreach ($roles as $role) {
            if (userRole($user->id)?->name === $role) {
                $user->role = userRole($user->id)->name;
                $arr[] = $user;
            }
        }
    }
    return $arr;
}
function contractUsersList($roles = [])
{
    if (count($roles) === 0) {
        return \App\Models\ContractUser::where('name', '<>', '')->where('family', '<>', '')->get();
    }

    $arr = array();
    $users = \App\Models\ContractUser::where('name', '<>', '')->where('family', '<>', '')->get();
    foreach ($users as $user) {
        foreach ($roles as $role) {
            if (contractUserRole($user->id)->name === $role) {
                $user->role = contractUserRole($user->id)->name;
                $arr[] = $user;
            }
        }
    }
    return $arr;
}
function userRole($id)
{
    return \App\Models\User::find($id)->roles()->first(['name', 'label']);
}

function contractUserRole($id)
{
    return \App\Models\ContractUser::find($id)->roles()->first(['name', 'label']);
}

function floorsList()
{
    return \App\Models\Floor::all();
}
function userContracts($userId)
{
    $arr = array();
    $contracts = \App\Models\User::find($userId)->contracts()->get(['id', 'estate_id']);
    foreach ($contracts as $contract) {
        $contract->text = 'شماره واحد : ' . $contract->estate_id;
        unset($contract->estate_id);
        $arr[] = $contract;
    }
    return $arr;
}

function userContractsEditForm($userId)
{
    $arr = array();
    $contracts = \App\Models\ContractUser::find($userId)->contracts()->get(['id', 'estate_id']);
    foreach ($contracts as $contract) {
        $contract->text = 'شماره واحد : ' . $contract->estate_id;
        unset($contract->estate_id);
        $arr[] = $contract;
    }
    return $arr;
}

function getFloorName($id)
{
    return \App\Models\Floor::find($id)->floor;
}

function getEstateDetails($id)
{
    return \App\Models\EstateDetail::where('estate_id', $id)->first();
}

function banks()
{
    return \App\Models\Bank::all();
}

function bankName($id)
{
    return \App\Models\Bank::find($id)->bank_name;
}

function paymentReasons($f = null)
{
    if ($f === null) {
        return \App\Models\PaymentReason::get();
    }

    return \App\Models\PaymentReason::where('for_contract', $f)->get();
}

function costTypes()
{
    return \App\Models\CostType::all();
}

function paymentReason($id)
{
    return \App\Models\PaymentReason::find($id)->reason;
}

function getLang($p)
{
    return Lang::get($p);
}

function previous_route()
{
    $previousRequest = app('request')->create(app('url')->previous());

    try {
        $routeName = app('router')->getRoutes()->match($previousRequest)->getName();
    } catch (NotFoundHttpException $exception) {
        return null;
    }

    return $routeName;
}

function getDiskUrl($disk, $file)
{
    return \Storage::disk($disk)->url($file);
}

function contactsList()
{
    return \App\Models\Contact::all();
}

function buildingsList()
{
    return \App\Models\Building::all();
}

function getBuildingName($id)
{
    return \App\Models\Building::find($id)->building_name;
}

function fundsList()
{
    return \App\Models\Fund::all();
}

function reseed($table, $id)
{
    return DB::statement('DBCC CHECKIDENT (?, RESEED,?)', [$table, $id]);
}

function qrcode($code, $size = 50)
{
    return DNS2DFacade::getBarcodePNG($code, 'QRCODE');
}
function qrcodePng($code, $size = 5)
{
    return DNS2DFacade::getBarcodePNG((string) $code, 'QRCODE', $size, $size);
}


function accessApp(): bool
{
    if(Role::where('access_to_app') == 1){
        return true;
    }
    return false;
}
 function hasPermissions($permissions = [] ,$userId = 0) : bool
{
    if($userId == 0){
        $u = CurrentUserID();
    }
    if(Auth::user()->wild_card) {
        $ps = User::find($u)->permissions()->pluck('name')->toArray();
    }else {
        $ps = User::find($u)->roles()->first()->permissions()->pluck('name')->toArray();
    }
    foreach ($permissions as $permission) {
        if (in_array($permission, $ps))
            return true;
    }
    return false;

}

function array_1st_element($my_array)
{
    list($k) = array_keys($my_array);
    $result  = array($k=>$my_array[$k]);
    unset($my_array[$k]);
    return $result;
}