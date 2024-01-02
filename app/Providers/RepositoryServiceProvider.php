<?php

namespace App\Providers;

use App\Repository\LookUpRepository;
use App\Repository\LookUpRepositoryInterface;
use App\Repository\UsersRepository\UsersRepositoryInterface;
use App\Repository\UsersRepository\UsersRepositoryQueries;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->bind(UsersRepositoryInterface::class, UsersRepositoryQueries::class);
        $this->app->bind(LookUpRepositoryInterface::class, LookUpRepository::class);
    }
}
