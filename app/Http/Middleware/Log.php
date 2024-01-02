<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models;

class Log
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        Models\User::log();
        return $next($request);
    }

    public function terminate($request, $response)
    {
        \DB::table('log')->insert([
            'note' => json_encode($response)
        ]);
    }
}
