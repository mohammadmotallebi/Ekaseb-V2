<!DOCTYPE html>
<html dir="rtl" lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui, viewport-fit=cover">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-title" content="اتوماسیون فروشگاهی">


    <title>@yield('title')</title>
    <link rel="manifest" href="{{ asset('/manifest.json') }}">

    <link rel="apple-touch-icon" href="{{ asset('icons/apple-touch-icon.png') }}">
    <link href="{{ asset('images/splash.png') }}"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          rel=apple-touch-startup-image>

    <link rel="stylesheet" href="{{ mix('css/app.css') }}">


</head>
<body id="page-top" class="color-theme-blue">
</body>

<div dir="rtl" id="app-admin">


</div>
<script src="{{ mix('js/app.js') }}"></script>
</html>
