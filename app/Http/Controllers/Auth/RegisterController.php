<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Controllers\SmsController;
use App\Models\SMS;
use App\Models\User;
use App\Models\VerificationCode;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use App\Models\Verification;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
//        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */

//    protected function validator(array $data)
//    {
//        $messages = [
//            'identity_code.required' => 'وارد کرد کد ملی الزامیست!',
//            'identity_code.unique' => 'این کد ملی قبلا در سیستم ثبت شده است!',
//            'mobile.required' => 'وارد کرد شماره موبایل الزامیست!',
//            'mobile.unique' => 'این شماره موبایل قبلا در سیستم ثبت شده است!',
//            'identity_code.regex' => 'کد ملی باید ترکیبی از اعداد باشد!',
//            'mobile.integer' => 'شماره موبایل باید ترکیبی از اعداد باشد!',
//            'mobile.regex' => 'فرمت شماره موبایل صحیح نمیباشد.',
//            'name.required' => 'وارد کرد نام الزامیست!',
//            'family.required' => 'وارد کرد نام خانوادگی الزامیست!',
//            'password.required' => 'وارد کرد کلمه عبور الزامیست!',
//            'password_confirmation.required' => 'وارد کرد تکرار کلمه عبور الزامیست!',
//            'identity_code.size' => 'کد ملی باید :size رقم باشد.(بدون فاصله و خط فاصله)',
//            'mobile.size' => 'شماره موبایل باید :size رقم باشد!',
//            'password.min' => 'کلمه عبور حداقل باید :min حرف باشد!',
//            'password_confirmation.same' => 'تکرار کلمه عبور مطابقت ندارد!',
//        ];
//        return Validator::make($data, [
//            'identity_code' => ['required', 'regex:/[0-9]/', 'size:10','unique:users,identity_code'],
//            'mobile' => ['required', 'regex:/^(0)?9\d{9}$/', 'size:11','unique:users,mobile'],
//            'name' => ['required', 'string'],
//            'family' => ['required', 'string'],
//            'password' => ['required', 'string', 'min:8'],
//            'password_confirmation' => ['required','string', 'min:8','same:password'],
//        ],$messages);
//    }


//    public function register(Request $request)
//    {
//        $this->validator($request->all())->validate();


//        event(new Registered($user = User::create($request->all())));

//        User::find($user->id)->roles()->attach(3);
//
//        if($user->id > 0){
//            Auth::guard()->login($user);
//            DB::table('verification_codes')->insert(
//                ['user_id' => $user->id, 'verification_code' => rand(1000,9999)]
//            );
//        }
//            return view('auth.verify',['mobile' => $user->mobile]);
//    }

    public function sendCode(Request $request, $forget = 0): \Illuminate\Contracts\Validation\Validator|int
    {


        $mobile = $request->get('mobile');
        VerificationCode::where('valid_mobile', $mobile)->delete();

        if (!preg_match('/^(0)?9\d{9}$/', $mobile)) {
            return 4;
        }
        if ($forget == 0) {
            if (User::where('mobile', $mobile)->count() > 0) {
                return 3;
            }
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
        }

    }


//$sms = new SmsController();
//
//$mobile = $request->get('mobile');
//if(VerificationCode::where('valid_mobile', $mobile)->count() > 0){
//$t = VerificationCode::where('valid_mobile', $mobile)->first()->generate_time ;
//$timeout = \Illuminate\Support\Carbon::parse($t)->diffInMinutes(\Illuminate\Support\Carbon::now()->timezone('+03:30')->format('Y-m-d H:i:s.u'));
//}else{
//    $timeout = 3;
//}
//
//if(!preg_match('/^(0)?9\d{9}$/' ,$mobile)){
//    return 4;
//}
//if(User::where('mobile',$mobile)->count() > 0){
//    return 3;
//}
//
//if($timeout > 2 and VerificationCode::where('valid_mobile', $mobile)->count() > 0) {
//    VerificationCode::where('valid_mobile', $mobile)->delete();
//}
//if($timeout > 2) {
//    $id = VerificationCode::insertGetId(
//        ['valid_mobile' => $mobile, 'verification_code' => rand(1000, 9999)]
//    );
//    if ($id) {
//        $v = VerificationCode::whereId($id)->first()->verification_code;
//
//        $sms->sendSMS(
//            $mobile,
//            'کد فعالسازی = ' . $v,
//        );
//        return 1;
//    } else {
//        return 0;
//    }
//}

    public function checkVerification($mobile, $code)
    {
        if (VerificationCode::where('valid_mobile', $mobile)->where('verification_code', $code)->count() > 0) {
            $id = \App\Models\User::insertGetId(
                [
                    'mobile' => $mobile,
                    'password' => \Hash::make(\Str::random(8)),
                ]
            );
            \App\Models\User::find($id)->roles()->attach(3);
            VerificationCode::where('valid_mobile', $mobile)->where('verification_code', $code)->delete();
            return 1;
        } else {
            return 0;
        }
    }


    public function setPassword(Request $request)
    {
        $mobile = $request->get('mobile');
        if (strlen($request->get('password')) < 6) {
            return 2;
        } else if ($request->get('password') <> $request->get('password_confirmation')) {
            return 3;
        } else {
            User::where('mobile', $mobile)->update([
                'password' => \Hash::make($request->get('password')),
                'active' => 1,
            ]);

            Auth::attempt(['mobile' => arabicToEnglishNumber($mobile), 'password' => arabicToEnglishNumber($request->get('password'))], true);
            return 1;
        }
    }


    protected function guard()
    {
        return Auth::guard();
    }


    protected function registered(Request $request, $user)
    {
        //
    }

}
