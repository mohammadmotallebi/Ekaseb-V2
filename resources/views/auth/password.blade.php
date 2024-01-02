@extends('app.main')

@section('body')
    @mobile
    <body id="register" class="overflow-hidden mobile-login-bg">
    @endmobile
    @desktop
    <body id="register" class="bg-gradient-primary">
    @enddesktop
    <div class="container">

        <div class="card o-hidden border-0 shadow-lg my-5" id="register-card-body">
            <div class="card-body p-0">
                <!-- Nested Row within Card Body -->
                <div class="text-center mt-3 mb-2"><img src="{{ asset('images/forget.png') }}" style="width:80px"/>
                </div>

                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div class="col-lg-7">
                        <div class="p-3">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">@lang('lang.recover_password')</h1>
                            </div>
                            <form class="user needs-validation" role="form" id="registerForm" method="post">
                                <div class="form-group row">
                                    <div class="col-sm-12">
                                        <input autocorrect="off" autofocus autocapitalize="none" inputmode="numeric"
                                               pattern="[0-9]*" type="number" class="form-control text-center" dir="ltr"
                                               id="mobile" name="mobile"
                                               value="{{ old('mobile') }}" placeholder="@lang('lang.mobile')">
                                        <div id="verify-error" class="help-block text-center color-red">

                                        </div>
                                    </div>
                                </div>
                                <button type="button" id="send-verification-code"
                                        class="col-12 btn btn-info btn-icon-split">

                                    <span id="change-text-button-send-code"
                                          class="col-10 text">@lang('lang.recover_password')</span>
                                    <span id="change-icon-button-send-code" class="icon col-2">
                      <i class="fas fa-key"></i>
                    </span>
                                </button>
                            </form>
                            <hr>
                            <div class="col-xs-12 text-center" role="group">

                                <a class="btn btn-light btn-sm" href="register">
                                        <span class="icon mt-1">
                      <i class="fas fa-user-plus"></i>
                    </span>
                                    <span class="text">{{ __('lang.register') }}</span>

                                </a>


                                <a class="btn btn-light btn-sm" href="login">
                                            <span class="icon mt-1">
                      <i class="fas fa-arrow-circle-left mt-1"></i>
                    </span>
                                    <span class="text">{{ __('lang.login') }}</span>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    @push('scripts')
        <script>
            resetPassword();
        </script>
    @endpush
    @include('app.footer')
    </body>

@endsection
