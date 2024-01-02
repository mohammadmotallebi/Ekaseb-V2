<!DOCTYPE html>
<html dir="rtl" lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @mobile

    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover">
    <meta name="apple-mobile-web-app-capable" content="yes">
    @if(Route::currentRouteName() != 'login' or Route::currentRouteName() != 'register' or Route::currentRouteName() != 'password')
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    @else
        <meta name="apple-mobile-web-app-status-bar-style" content="black">
    @endif
    <!-- Custom fonts for this template-->
    <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 414px) and (device-height: 716px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            href="/img/1136x640.png"
    />
    <meta name="apple-mobile-web-app-title" content="اتوماسیون فروشگاهی">
    @endmobile

    <link rel="icon" href="{{ url('favicon.ico?v=2') }}">
    <title>@yield('title')</title>
    <link rel="manifest" href="{{ asset('/manifest.json') }}">
    @handheld
    <link rel="apple-touch-icon" href="{{ asset('icons/apple-touch-icon.png') }}">
    <link href="{{ asset('images/splash.png') }}"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          rel=apple-touch-startup-image>
    @endhandheld

    @if (mobileApp())
        <link rel="stylesheet" href="{{ mix('finally/css/app.css') }}">
    @endif
    @unless(mobileApp())
        <link href="{{ asset('finally/css/all.css') }}" rel="stylesheet">
    @endunless


</head>

@yield('body')


