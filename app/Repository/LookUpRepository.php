<?php


namespace App\Repository;


use App\Models\City;
use App\Models\Color;
use App\Models\Gender;
use App\Models\ItemCategory;
use App\Models\Job;
use App\Models\State;
use App\Models\Status;
use App\Models\User;
use App\Models\user_Categories;

class LookUpRepository implements LookUpRepositoryInterface
{

//    public function Categories()
//    {
//
//        $category = user_Categories::all()->where('status', '=', config('global.active'));
//
//        return $category;
//    }

    public function Genders()
    {

        return Gender::all()->where('status', '=', config('global.active'));

    }

    public function RefUser()
    {
        return User::all()->where('status', '=', config('global.active'));

    }

    public function Cities()
    {
        return City::all()->where('status', '=', config('global.active'));

    }

    public function States($id = '')
    {
        return State::all()->where('ostan', '=', $id);

    }

    public function Colors()
    {
        return Color::all()->where('status', '=', config('global.active'));

    }

    public function Jobs()
    {
        return Job::all()->where('status', '=', config('global.active'));

    }

    public function statuses()
    {
        return Status::all();

    }

    public function itemCategories()
    {
        return ItemCategory::all()->where('status', '=', config('global.active'));

    }

}
