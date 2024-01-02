<?php
namespace App\Repository\UsersRepository;


use Illuminate\Support\ServiceProvider;


class UsersRepoServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        
    }


    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('App\Repository\UsersRepository\UsersRepositoryInterface', 'App\Repository\UsersRepository\UsersRepositoryQueries');
    }
}