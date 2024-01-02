@extends('app.header')
@section('body')
    @mobile
    <body class="overflow-hidden mobile-login-bg">
    @endmobile
    @desktop
    <body class="bg-gradient-primary">
    @enddesktop
    <div class="container">

        <!-- Outer Row -->
        <div class="row justify-content-center">

            <div class="col-xl-10 col-lg-12 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6">
                                <div class="pt-5 pr-5 pl-5 pb-2">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">@lang('lang.welcome')</h1>
                                    </div>
                                    <form method="post" id="reg-form" class="user"
                                          action="{{ route('login') }}">
                                        @csrf
                                        <div class="form-group">
                                            <input type="text" pattern="[0-9]*" class="form-control text-center"
                                                   id="identity_code_i654984321321"
                                                   name="identity_code_i654984321321" dir=ltr
                                                   placeholder="{{ __('lang.insert_your_phone') }}">
                                        </div>
                                        <div class="form-group">
                                            <input type="password"
                                                   class="form-control text-center {{ $errors->has('password') ? ' has-error' : '' }}"
                                                   id="password_p654984321321" dir=ltr name="password_p654984321321"
                                                   placeholder="@lang('lang.password')">

                                            <div class="help-block text-center color-red"
                                                 id="login-error-l654984321321">

                                            </div>


                                        </div>
                                        <button id="login-button" type="button"
                                                class="col-12 btn btn-info btn-icon-split">

                                            <span id="change-text-button-login"
                                                  class="col-10 text">@lang('lang.login')</span>
                                            <span id="change-icon-button-login" class="icon col-2">
                      <i class="fas fa-arrow-circle-left mt-1"></i>
                    </span>
                                        </button>
                                    </form>
                                    <hr>
                                    <div class="col-xs-12 text-center" role="group">

                                        <a class="btn btn-light btn-sm" href="password">
                                        <span class="icon mt-1">
                      <i class="fas fa-key mt-1"></i>
                    </span>
                                            <span class="text">{{ __('lang.forget_password') }}</span>

                                        </a>


                                        <a class="btn btn-light btn-sm" href="register">
                                            <span class="icon mt-1">
                      <i class="fas fa-user-plus mt-1"></i>
                    </span>
                                            <span class="text">{{ __('lang.register') }}</span>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>


    @include('app.footer')
    <script>
        login();
    </script>
    </body>

    </html>
@endsection
