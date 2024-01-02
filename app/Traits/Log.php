<?php

namespace App\Traits;

use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Model;

trait Log
{

    public static function create()
    {

         return \App\Models\Log::create([
            'user_id' => CurrentUserID()
            ,'log_datetime' => fullDateTime()
            ,'table_name' => ''
            ,'log_type' => ''
            ,'request_info' => ''
            ,'data' =>  json_encode()
        ]);
    }
}