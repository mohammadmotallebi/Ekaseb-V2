<?php

namespace App\Repository\usersRepository;

interface UsersRepositoryInterface
{
    public function usersActivationQuery($id);
    public function shopSellsDetail($id, $sid);

    public function userBuyListQuery();
}
