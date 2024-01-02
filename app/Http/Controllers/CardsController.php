<?php

namespace App\Http\Controllers;

use App\Models\Card;
use App\Models\Shop;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CardsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    }

    public function getIndex()
    {

        return view('cards.cards', ['s' => '0']);
    }

    public function anyData()
    {
        $cards = DB::select('SELECT
        users.name + \' \' + users.family AS full_name,
        cards.card_number,
        cards.status, shops.shop_name
        FROM  cards LEFT OUTER JOIN
         users ON cards.user_id = users.id LEFT OUTER JOIN
        shops ON cards.shop_id = shops.id');

        return $cards;

    }

    public function getIndexEmpty()
    {

        return view('cards.cards', ['s' => '1']);
    }

    public function anyDataEmpty()
    {
        $cards = DB::select('select
	dbo.cards.card_number,
	dbo.cards.status
from
	dbo.cards
	left join
	dbo.users
	on
		dbo.cards.user_id = dbo.users.id
		where user_id is null');

        return $cards;

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function generateCard($count)
    {
        $shop = Shop::all();
        foreach ($shop as $x) {
            for ($i = 0; $i <= $count; $i++) {
                $cards = new Card([
                    'card_number' => $x->shop_unique_id . '' . str_shuffle('123456789159'),
                    'shop_id' => $x->id,
                ]);

                $cards->save();
            }
        }

    }
}
