<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\MessageBag;
use Symfony\Component\Console\Input\Input;


class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
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
        $this->middleware('guest')->except('logout');

    }

    public function logout()
    {
        auth()->logout();
        return redirect('login');
    }

    protected function login()
    {
//        $s = arabicToEnglishNumber(request()->input('identity_code'));
//        if (strlen($s) == 10) {
//            return Auth::attempt(['identity_code' => arabicToEnglishNumber(request()->input('identity_code')), 'password' => arabicToEnglishNumber(request()->input('password'))], true);
//        } elseif (strlen($s) == 11) {
        if (Auth::attempt(['mobile' => arabicToEnglishNumber(request('identity_code')), 'password' => arabicToEnglishNumber(request('password'))], true)) {
            return 1;
        } else {
            return 0;
//            return Auth::attempt(['mobile' => arabicToEnglishNumber(request()->input('identity_code')), 'password' => arabicToEnglishNumber(request()->input('password'))], true);
        }


//
//        }
    }

}
