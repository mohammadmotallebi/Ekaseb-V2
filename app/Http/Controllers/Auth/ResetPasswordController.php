<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Controllers\SmsController;
use App\Models\VerificationCode;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ResetPasswordController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function sendCode(Request $request)
    {

        $mobile = $request->get('mobile');
        VerificationCode::where('valid_mobile', $mobile)->delete();

        if (!preg_match('/^(0)?9\d{9}$/', $mobile)) {
            return 4;
        }

        if (User::where('mobile', $mobile)->count() < 1) {
            return 3;
        }

        if (User::where('mobile', $mobile)->count() === 1) {
            $id = VerificationCode::insertGetId(
                ['valid_mobile' => $mobile, 'verification_code' => rand(1000, 9999)]
            );
            if ($id) {
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


    public function checkVerification($mobile, $code)
    {
        if (VerificationCode::where('valid_mobile', $mobile)->where('verification_code', $code)->count() > 0) {
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
                'password' => \Hash::make($request->get('password'))
            ]);

            Auth::attempt(['mobile' => arabicToEnglishNumber($mobile), 'password' => arabicToEnglishNumber($request->get('password'))], true);
            return 1;
        }
    }
}
