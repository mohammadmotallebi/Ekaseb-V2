<?php

namespace App\Repository;

interface LookUpRepositoryInterface
{
//    public function Categories();

    public function Genders();

    public function RefUser();

    public function Cities();

    public function States($id);

    public function Colors();

    public function jobs();

    public function Statuses();

    public function ItemCategories();
}
