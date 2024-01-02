<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SmsController extends Controller
{
    public function sendSMS($r, $n): int
    {
        $response = \Http::timeout(10)->retry(0)->get('http://smsresa.ir/send_via_get/send_sms.php', [
            'username' => 'atm',
            'password' => '123',
            'sender_number' => '3000343638',
            'receiver_number' => $r,
            'note' => $n,
        ]);
        if ($response->serverError() or $response->clientError() or $response->failed()) {
            return 0;
        } else {
            return 1;
        }
    }
}
