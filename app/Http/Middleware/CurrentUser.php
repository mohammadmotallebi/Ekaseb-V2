<?php

namespace App\Http\Middleware;


use Closure;
use Illuminate\Support\Facades\Auth;

class CurrentUser
{

    public function handle($request, Closure $next)
    {

        if (Auth::user()->active == 0) {
            return view('auth.verify', ['mobile' => \Illuminate\Support\Facades\Auth::user()->mobile]);
        }
        return $next($request);
    }
}
