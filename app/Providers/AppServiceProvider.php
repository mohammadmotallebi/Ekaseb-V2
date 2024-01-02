<?php

namespace App\Providers;

use Carbon\Carbon;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if ($this->app->isLocal()) {
            $this->app->register(\Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider::class);
        }

    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

        Carbon::setLocale('fa_IR');

        Carbon::macro('jdate', function ($format = '%Y/%m/%d', $tr_num = 'en') {
            return jstrftime($format, self::this()->timestamp, '', '', $tr_num);
        });

        Carbon::macro('jalali', function ($date) {
            $d = explode('/', $date);
            $timestamp = jmktime(0, 0, 0, intval($d[1]), intval($d[2]), intval($d[0]));
            return self::createFromTimestamp($timestamp);
        });


    }
}
