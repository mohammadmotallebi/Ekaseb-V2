<?php

namespace App\Providers;

use App\Models\Permission;
use App\Models\User;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Blade;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        \App\Models\User::class => \App\Policies\UsersPolicy::class
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        foreach ($this->getPermission() as $permission) {
            Gate::define($permission->name, function ($users) use ($permission) {
                return User::find(CurrentUserID())->hasRole($permission->roles);
            });
        }

//        foreach ($this->getPermission() as $permission) {
//            Gate::define($permission->name, function ($users) use ($permission) {
//                return hasPermissions($permission);
//            });
//        }

        Blade::if('role', function ($role) {
            return auth()->check() && \App\Models\User::find(CurrentUserID())->hasRole($role); //return this if statement inside php tag
        });
        Blade::if('permission', function (...$permission) {
            return auth()->check() && hasPermissions($permission) || auth()->user()->is_admin; //return this if statement inside php tag
        });

    }

    protected function getPermission()
    {
        return Permission::with('roles')->get();
    }


}
