<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Http\Middleware\CurrentUser;
use App\Models\Bill;
use App\Models\Card;
use App\Models\City;
use App\Models\Color;
use App\Models\ContractUser;
use App\Models\Gender;
use App\Models\Job;
use App\Models\State;
use App\Models\User;
use App\Repository\LookUpRepositoryInterface;
use App\Repository\UsersRepository\UsersRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\VerificationCode;


class UsersController extends Controller
{
    protected $usersRepositoryQueries;
    protected $lookUp;


    public function __construct(UsersRepositoryInterface $usersRepositoryQueries, LookUpRepositoryInterface $lookUp)
    {
        $this->usersRepositoryQueries = $usersRepositoryQueries;
        $this->lookUp = $lookUp;
//        Auth::logout();
//        $this->middleware('log');
    }

    public function create()
    {

        return view('users.create');
    }
    public function createQuickly()
    {

        return view('users.create_quickly');
    }

    public function per(User $users)
    {

        $id = Auth::user()->id;
        dd(User::find($id)->shops()->get());
    }

    public function userInfo()
    {
        $user_info = User::whereId(CurrentUserID())->first();
        $g = jalToger($user_info->birthday ?? fullDate());
        $s = $user_info->birthday ?? myDatePlus();
        $resG = explode('/', $g);
        $resS = explode('/', $s);
        $object_resG = (object)['y' => $resG[0], 'm' => $resG[1], 'd' => $resG[2]];
        $object_resS = (object)['y' => $resS[0], 'm' => $resS[1], 'd' => $resS[2]];
        $user_info->birthdayG = $object_resG;
        $user_info->birthdayS = $object_resS;
        $user_info->birthday = $user_info->birthday ?? fullDate();
        if ($user_info->name === null) {
            $user_info->name = '';
        }
        if ($user_info->family === null) {
            $user_info->family = '';
        }

        return $user_info;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rules =  [
            'name' => 'required',
            'identity_code' => 'required|unique:users|max:10|min:10',
            'mobile' => 'required|unique:contract_users|max:11|min:11',
            'family' => 'required',
        ];
        $messages = [
            'name.required' => __('validation.required', ['attr' => __('lang.name')]),
            'identity_code.required' => __('validation.required', ['attr' => __('lang.identity')]),
            'identity_code.unique' => __('validation.unique', ['attr' => __('lang.identity')]),
            'mobile.required' => __('validation.required', ['attr' => __('lang.mobile')]),
            'family.required' => __('validation.required', ['attr' => __('lang.family')]),
        ];
        $this->validate($request,$rules,$messages);
        $user = new User([
            'identity_code' => arabicToEnglishNumber($request->get('identity_code')),
            'name' => arabicToEnglishNumber($request->get('name')),
            'family' => arabicToEnglishNumber($request->get('family')),
            'gender' => $request->get('gender'),
            'building_id' => $request->get('building_id'),
            'birthday' => $request->get('birthday'),
            'mobile' => arabicToEnglishNumber($request->get('mobile')),
            'mobile_back' => arabicToEnglishNumber($request->get('mobile_back')),
            'ref_user' => $request->get('ref_user'),
            'tel' => arabicToEnglishNumber($request->get('tel')),
            'city' => $request->get('city'),
            'state' => $request->get('state'),
            'address' => arabicToEnglishNumber($request->get('address')),
            'password' => Hash::make(arabicToEnglishNumber($request->get('password'))),
            'email' => arabicToEnglishNumber($request->get('email')),
            'job' => $request->get('job'),
            'father_name' => arabicToEnglishNumber($request->get('father')),
            'wedding_date' => $request->get('wedding_date'),
            'weight' => arabicToEnglishNumber($request->get('weight')),
            'height' => arabicToEnglishNumber($request->get('height')),
            'int_color' => $request->get('fav_color'),
            'active' => 1,
            'default_theme' => 'blue',
            'darktheme' => 1,
            'auto_darktheme' => 1,
        ]);
        $user->save();
        if($request->add_to_contract_users == 1){
                ContractUser::create([
                    'identity_code' => arabicToEnglishNumber($request->get('identity_code')),
                    'name' => arabicToEnglishNumber($request->get('name')),
                    'family' => arabicToEnglishNumber($request->get('family')),
                    'father' => arabicToEnglishNumber($request->get('father')),
                    'gender' => $request->get('gender'),
                    'building_id' => $request->get('building_id'),
                    'birthday' => $request->get('birthday'),
                    'mobile' => arabicToEnglishNumber($request->get('mobile')),
                    'mobile_back' => arabicToEnglishNumber($request->get('mobile_back')),
                    'tel' => arabicToEnglishNumber($request->get('tel')),
                    'address' => arabicToEnglishNumber($request->get('address')),
                ]);
        }
        if ($user->id > 0) {
            $user->roles()->attach($request->get('category'));
        }
        return 1;
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Http\Response
     */
    public function show($id)
    {

        $user = User::find($id);
        if ($user->gender > 0) {
            $gender = Gender::find($user->gender);
            $g = $gender->gender_name;
        } else {
            $g = '';
        }

        if ($user->ref_user > 0) {
            $ref_user = User::find($user->ref_user);
            $r = $ref_user->name . '  ' . $ref_user->family;
        } else {
            $r = '';
        }
        if ($user->job > 0) {
            $job = Job::find($user->job);
            $j = $job->job_name;
        } else {
            $j = '';
        }
        if ($user->int_color > 0) {
            $color = Color::find($user->int_color);
            $c = $color->color_name;
        } else {
            $c = '';
        }
        if ($user->city > 0) {
            $city = City::find($user->city);
            $q = $city->city_name;
        } else {
            $q = '';
        }
        if ($user->state > 0) {
            $state = State::find($user->state);
            $s = $state->name;
        } else {
            $s = '';
        }


        return view('users.view', [
            'user' => $user,
            'gender' => $g,
            'ref_user' => $r,
            'job' => $j,
            'color' => $c,
            'city' => $q,
            'state' => $s,
        ]);

    }


    public function edit()
    {
        $id = request('id');
        $gen = $this->lookUp->Genders();
        $ref = $this->lookUp->RefUser();
        $city = $this->lookUp->Cities();
        $color = $this->lookUp->Colors();
        $job = $this->lookUp->Jobs();
        $status = $this->lookUp->Statuses();
        $user = User::find($id);
        $state = $this->lookUp->States($user->city);
        $card = User::find($id)->cards()->where('status', config('global.active'))->first();
        return view('users/edit', ['user' => $user, 'id' => $id, 'card' => $card,
            'gender' => $gen, 'ref' => $ref, 'city' => $city, 'state' => $state, 'color' => $color, 'job' => $job, 'status' => $status
        ]);
    }


    public function editProfile()
    {

        $id = Auth::user()->id;
        $gen = $this->lookUp->Genders();
        $ref = $this->lookUp->RefUser();
        $city = $this->lookUp->Cities();
        $color = $this->lookUp->Colors();
        $job = $this->lookUp->Jobs();
        $status = $this->lookUp->Statuses();
        $user = User::find($id);
        $state = $this->lookUp->States($user->city);
        $card = User::find($id)->cards()->where('status', config('global.active'))->first();

        return view('users/profile', ['user' => $user, 'id' => $id, 'card' => $card,
            'gender' => $gen, 'ref' => $ref, 'city' => $city, 'state' => $state, 'color' => $color, 'job' => $job, 'status' => $status
        ]);
    }

    public function updateProfile(Request $request)
    {
        $id = Auth::user()->id;

        $rules =  [
            'name' => 'required',
            'identity_code' => 'required|unique:App\Models\ContractUser,identity_code,'.$id.',id|max:10|min:10',
            'mobile' => 'required|unique:App\Models\ContractUser,mobile,'.$id.',id|max:11|min:11',
            'family' => 'required',
        ];
        $messages = [
            'name.required' => __('validation.required', ['attr' => __('lang.name')]),
            'identity_code.required' => __('validation.required', ['attr' => __('lang.identity')]),
            'identity_code.unique' => __('validation.unique', ['attr' => __('lang.identity')]),
            'mobile.required' => __('validation.required', ['attr' => __('lang.mobile')]),
            'family.required' => __('validation.required', ['attr' => __('lang.family')]),
        ];
        $this->validate($request,$rules,$messages);

        User::whereId($id)->update([
            'name' => arabicToEnglishNumber($request->get('name')),
            'family' => arabicToEnglishNumber($request->get('family')),
            'gender' => $request->get('gender'),
            'birthday' => $request->get('birthday'),
            'ref_user' => $request->get('ref_user'),
            'tel' => arabicToEnglishNumber($request->get('tel')),
            'city' => $request->get('city'),
            'state' => $request->get('state'),
            'address' => arabicToEnglishNumber($request->get('address')),
            'email' => arabicToEnglishNumber($request->get('email')),
            'job' => $request->get('job'),
            'father_name' => arabicToEnglishNumber($request->get('father_name')),
            'wedding_date' => $request->get('wedding_date'),
            'weight' => arabicToEnglishNumber($request->get('weight')),
            'height' => arabicToEnglishNumber($request->get('height')),
            'int_color' => $request->get('int_color'),
            'active' => '1'
        ]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $id = $request->id;
        $rules =  [
            'name' => 'required',
            'identity_code' => 'required|unique:App\Models\User,identity_code,'.$id.',id|max:10|min:10',
            'mobile' => 'required|unique:App\Models\User,mobile,'.$id.',id|max:11|min:11',
            'family' => 'required',
        ];
        $messages = [
            'name.required' => __('validation.required', ['attr' => __('lang.name')]),
            'identity_code.required' => __('validation.required', ['attr' => __('lang.identity')]),
            'identity_code.unique' => __('validation.unique', ['attr' => __('lang.identity')]),
            'mobile.required' => __('validation.required', ['attr' => __('lang.mobile')]),
            'family.required' => __('validation.required', ['attr' => __('lang.family')]),
        ];
        $this->validate($request,$rules,$messages);



        try {
            DB::beginTransaction();
            $edit = User::whereId($id)->update([
                'identity_code' => arabicToEnglishNumber($request->get('identity_code')),
                'name' => arabicToEnglishNumber($request->get('name')),
                'family' => arabicToEnglishNumber($request->get('family')),
                'gender' => $request->get('gender'),
                'building_id' => request('building_id'),
                'birthday' => $request->get('birthday'),
                'mobile' => arabicToEnglishNumber($request->get('mobile')),
                'mobile_back' => arabicToEnglishNumber($request->get('mobile_back')),
                'ref_user' => $request->get('ref_user'),
                'tel' => arabicToEnglishNumber($request->get('tel')),
                'city' => arabicToEnglishNumber($request->get('city')),
                'state' => $request->get('state'),
                'address' => $request->get('address'),
                'email' => arabicToEnglishNumber($request->get('email')),
                'job' => arabicToEnglishNumber($request->get('job')),
                'father_name' => arabicToEnglishNumber($request->get('father_name')),
                'wedding_date' => $request->get('wedding_date'),
                'weight' => arabicToEnglishNumber($request->get('weight')),
                'height' => arabicToEnglishNumber($request->get('height')),
                'int_color' => $request->get('int_color'),
                'active' => 1
            ]);
            if(ContractUser::where('identity_code',$request->get('identity_code'))->count() > 0) {
                ContractUser::where('identity_code', $request->get('identity_code'))->update([
                    'identity_code' => arabicToEnglishNumber($request->get('identity_code')),
                    'name' => arabicToEnglishNumber($request->get('name')),
                    'family' => arabicToEnglishNumber($request->get('family')),
                    'father' => arabicToEnglishNumber($request->get('father')),
                    'gender' => $request->get('gender'),
                    'building_id' => $request->get('building_id'),
                    'birthday' => $request->get('birthday'),
                    'mobile' => arabicToEnglishNumber($request->get('mobile')),
                    'mobile_back' => arabicToEnglishNumber($request->get('mobile_back')),
                    'tel' => arabicToEnglishNumber($request->get('tel')),
                    'address' => arabicToEnglishNumber($request->get('address')),
                ]);
            }


            DB::commit();
            if ($edit) {

                User::find($id)->roles()->detach();
                User::find($id)->roles()->attach($request->get('category_id'));
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

    public function updateIdentity(Request $request)
    {
        $message = [
            'unique' => __('lang.identity_unique'),
            'digits' => __('lang.identity_length'),
            'required' => __('lang.identity_required'),
        ];
        $rules = [
            'identity_code' => 'unique:users|digits:10|required',
        ];
        $v = \Validator::make($request->all(), $rules, $message);

        if ($v->fails()) {
            return json_encode($v->messages()->first());
        } else {
            return User::whereId(CurrentUserID())->update([
                'identity_code' => arabicToEnglishNumber($request->get('identity_code')),
            ]);
        }


    }

    public function updateMobile(Request $request): int
    {
        $mobile = $request->get('mobile');
        $code = $request->get('verification');
        if (VerificationCode::where('valid_mobile', $mobile)->where('verification_code', $code)->count() > 0) {

            User::whereId(CurrentUserID())->update([
                'mobile' => arabicToEnglishNumber($request->get('mobile'))
            ]);
            VerificationCode::where('valid_mobile', $mobile)->where('verification_code', $code)->delete();
            return 1;
        } else {
            return 0;
        }


    }

    public function updatePassword(Request $request)
    {
        $message = [
            'min' => __('lang.password_length'),
            'required' => __('lang.password_required'),
        ];
        $rules = [
            'password' => 'min:8|required',
        ];
        $v = \Validator::make($request->all(), $rules, $message);
        if ($v->fails()) {
            return json_encode($v->messages()->first());
        } else {
            return User::whereId(CurrentUserID())->update([
                'password' => Hash::make(arabicToEnglishNumber($request->get('password'))),
            ]);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $id = $request->id;
        User::find($id)->delete();
        Bill::where('user_id', '=', $id)->delete();

        return '1';
    }
    public function selectData()
    {
        $arr = array();
        $sql = User::all();
        foreach ($sql as $s) {
            $s->text = $s->name . ' ' . $s->family .' ('. $s->identity_code .')';
            array_push($arr, $s);
        }
        return $arr;
    }

    public function getIndex()
    {

        return view('users.users');

    }

    public function anyData()
    {

        return User::all();
    }

    public function getCard(Request $request)
    {
        $id = $request['id'];
        $card = DB::table('card_to_user')
            ->join('users', 'card_to_user.user_id', '=', 'users.identity_code')
            ->join('cards', 'card_to_user.card_id', '=', 'cards.id')
            ->select('cards.card_number as c')
            ->where('users.identity_code', '=', $id)
            ->get();
        return $card[0]->C;

    }

    public function usersQueryData($id)
    {
        $cus = $this->usersRepositoryQueries->usersActivationQuery($id);
        return $cus;
    }

    public function userDetail($id)
    {
        $y = 0;
        $z = 0;
        $q = '';
        $s = array();
        foreach ($this->usersRepositoryQueries->usersActivationQuery($id) as $k => $x) {
            $y += $x->total;
            $z += $x->totalcredit;

            array_push($s, $x->buy_date);
        }
        if (count($s) > 1) {
            $ss = max($s);
        } else {
            $ss = $s;
        }
        $q = User::find($id)->cards()->where('status', config('global.active'))->get();
        if (count($q) > 0) {
            $qq = arrayToObject($q)->card_number;
        } else {
            $qq = '';
        }
        $a = array(number_format($y), number_format($z), $qq, $ss);
        return $a;
    }

    public function listBill()
    {
        return view('bills.billdetail');
    }

    public function listBillData($id)
    {

        return $this->usersRepositoryQueries->usersActivationQuery($id);

    }

    public function userBuysList()
    {
        return $this->usersRepositoryQueries->userBuyListQuery();
    }

    public function getState($id)
    {
        $a = array();
        $state = City::find($id)->states;
        foreach ($state as $x) {
            $a[] = ['id' => $x->id, 'text' => $x->name];
        }
        return \Response::json($a);

    }

    public function userChangeTheme()
    {
        User::whereId(CurrentUserID())->update([
            'default_theme' => request()->get('default_theme'),
        ]);
    }

    public function darkTheme()
    {
        User::whereId(CurrentUserID())->update([
            'darktheme' => request()->get('darktheme'),
        ]);
    }

    public function autoDarkTheme()
    {
        User::whereId(CurrentUserID())->update([
            'auto_darktheme' => request()->get('auto_darktheme'),
        ]);
    }

    public function getUserTheme()
    {
        return User::whereId(CurrentUserID())->first(['default_theme', 'darktheme', 'auto_darktheme']);
    }

    public function select2()
    {
        $gen = $this->lookUp->Genders();
        $ref = $this->lookUp->RefUser();
        $city = $this->lookUp->Cities();
        $state = $this->lookUp->States();
        $color = $this->lookUp->Colors();
        $job = $this->lookUp->Jobs();
        $status = $this->lookUp->Statuses();

        return view('users/create', ['gender' => $gen, 'ref' => $ref, 'city' => $city, 'state' => $state, 'color' => $color, 'job' => $job, 'status' => $status]);
    }

    public function validateCard(Request $request)
    {
        $str = $request->str;
        $c = Card::where('card_number', $str)
            ->count();
        return $c;
    }

    public function fetchUserData()
    {
        return User::find(CurrentUserID());
    }

    public function userCalculateLoyalty()
    {
        $res = 0;
        $sql = DB::table('customer_enter_exit')
            ->selectRaw('shopping_date, CAST(((isnull(DATEDIFF(MINUTE,start_time ,end_time),0)
             / (select base_time_for_score from settings)) *
              (select score_of_in_store from settings)) as decimal(18,2)) stay_time')
            ->where('user_id', CurrentUserID())
            ->get();
        foreach ($sql as $s) {
            $res += $s->stay_time;
        }
        return $res;
    }

    public function changeProfilePicture()
    {
        User::whereId(CurrentUserID())->update([
            'user_pic' => request()->get('binary-image'),
        ]);
    }

    public function internalSendCode(Request $request): int
    {

        $mobile = $request->get('mobile');
        VerificationCode::where('valid_mobile', $mobile)->delete();

        if (!preg_match('/^(0)?9\d{9}$/', $mobile)) {
            return 4;
        }
        if (User::where('mobile', $mobile)->count() == 0) {
            $id = VerificationCode::insertGetId(
                ['valid_mobile' => $mobile, 'verification_code' => rand(1000, 9999)]
            );
            if ($id > 0) {
                $v = VerificationCode::whereId($id)->first()->verification_code;
                $sms = new SmsController();
                $sms->sendSMS(
                    $mobile,
                    'کد فعالسازی = ' . $v,
                );
                return 1;
            } else {
                return 0;
            }
        } else {
            return 3;
        }

    }

    public function userGroupEditFrom()
    {
        return view('users.group_edit');
    }

    public function updateSelectedUsers()
    {
        $ids = \request('ids');

        User::whereIn('id', $ids)->update([
            'building_id' => \request('building_id'),
        ]);

    }

    public function userGetActivity($id)
    {
        $owner = \App\Models\User::find($id)->estates()->count();
        $contract_renter = \App\Models\Contract::where('renter_id', $id)->count();
        $c = \App\Models\User::find($id)->estates()->pluck('id');
        $contract_owner = \App\Models\Contract::whereIn('estate_id', $c)->count();
        $payment = \App\Models\Payment::where('user_id', $id)->count();
        return ['owner' => $owner, 'contract_renter' => $contract_renter, 'contract_owner' => $contract_owner, 'payment' => $payment];
    }

    public function userShops()
    {
        return User::find(CurrentUserID())->shops()->pluck('id');

    }

}
