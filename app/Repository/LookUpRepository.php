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

        $gender = Gender::all()->where('status', '=', config('global.active'));
        return $gender;

    }

    public function RefUser()
    {
        $refUser = User::all()->where('status', '=', config('global.active'));
        return $refUser;

    }

    public function Cities()
    {
        $city = City::all()->where('status', '=', config('global.active'));
        return $city;

    }

    public function States($id = '')
    {
        $state = State::all()->where('ostan', '=', $id);
        return $state;

    }

    public function Colors()
    {
        $color = Color::all()->where('status', '=', config('global.active'));
        return $color;

    }

    public function Jobs()
    {
        $job = Job::all()->where('status', '=', config('global.active'));
        return $job;

    }

    public function statuses()
    {
        $status = Status::all();
        return $status;

    }

    public function itemCategories()
    {
        $i = ItemCategory::all()->where('status', '=', config('global.active'));
        return $i;

    }

}
