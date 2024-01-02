<?php

namespace App\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;

class UsersPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct(User $user, User $u)
    {
        return $user->owns($u);
    }
}
