<?php

namespace App\Repository\usersRepository;

interface UsersRepositoryInterface
{
    public function usersActivationQuery($id);

    public function ItemDetailQuery($item);

    public function ItemGroupQuery($item);

    public function itemDetailForShopper($item);

    public function shopItemsQueryAdmin();

    public function shopItemsQueryShopper();

    public function shopItemsQueryShops($id);

    public function shopSellsDetail($id, $sid);

    public function userBuyListQuery();
}
