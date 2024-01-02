@extends('app.header')
@section('body')
    @mobile
    <body id="verify" class="overflow-hidden mobile-login-bg">
    @endmobile
    @desktop
    <body id="verify" class="bg-gradient-primary">
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
                                        <div
                                            class="h6 text-gray-900 mb-4">@lang('lang.verify_mobile') {{ $mobile ?? '' }}</div>
                                    </div>
                                    <form method="post" id="reg-form" class="verify">
                                        @csrf
                                        <div class="form-group">
                                            <input type="text" class="form-control text-center" id="code" name="code"
                                                   placeholder="@lang('lang.enter_verification_code')">
                                            <div id="verify-error" class="help-block text-center color-red"
                                                 style="display:none">
                                                <span>{{ __('lang.verification_error') }}</span>
                                            </div>
                                        </div>
                                        <button type="button" id="check-verification"
                                                class="col-12 btn btn-info btn-icon-split">

                                            <span id="change-text-button-verify"
                                                  class="col-10 text">@lang('lang.verification')</span>
                                            <span id="change-icon-button-verify" class="icon col-2">
                      <i class="fas fa-arrow-circle-left mt-1"></i>
                    </span>
                                        </button>
                                    </form>
                                    <hr>
                                    <div class="col-xs-12 text-center" role="group">
                                        <button id="resend_code" type="button"
                                                class="col-12 btn btn-green btn-sm btn-icon-split">

                                            <span id="change-text-button-resend"
                                                  class="col-10 text">@lang('lang.resend_code')</span>
                                            <span id="change-icon-button-resend" class="icon col-2">
                      <i class="fas fa-redo-alt mt-1"></i>
                    </span>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>

    <script>

        document.getElementById('resend_code').addEventListener("click", function () {
            document.getElementById('resend_code').setAttribute('disabled', true);
            document.getElementById("change-icon-button-resend").innerHTML =

                '<span class="spinner-border spinner-border-sm mb-1" role="status" aria-hidden="true"></span>';

            function countdown(minutes) {
                let seconds = 60;
                let mins = minutes

                function tick() {
                    //This script expects an element with an ID = "counter". You can change that to what ever you want.
                    let counter = document.getElementById("change-text-button-resend");
                    let current_minutes = mins - 1
                    seconds--;
                    counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
                    if (seconds > 0) {
                        setTimeout(tick, 1000);
                    } else {
                        if (mins > 1) {
                            countdown(mins - 1);
                        } else if (mins === 1) {
                            document.getElementById('resend_code').removeAttribute('disabled');
                            document.getElementById("change-icon-button-resend").innerHTML =
                                '<i class="fas fa-redo-alt mt-1"></i>';
                            document.getElementById("change-text-button-resend").innerHTML =
                                '{{ __('lang.resend_code') }}';
                        }
                    }
                }

                tick();
            }

            countdown(2);

        });
        document.getElementById('check-verification').addEventListener("click", function () {
            let code_c6876844168 = document.getElementById('code').value;
            let mobile_m6876844168 = {{ $mobile }};
            if (code_c6876844168.length < 4) {
                document.getElementById('verify-error').style.display = 'block';
                setTimeout(
                    function () {
                        document.getElementById('verify-error').style.display = 'none'
                    }
                    , 3000)
                return false;
            }
            document.getElementById('check-verification').setAttribute('disabled', true);
            document.getElementById("change-icon-button-verify").innerHTML =
                '<span class="spinner-border spinner-border-sm mb-1" role="status" aria-hidden="true"></span>';
            document.getElementById("change-text-button-verify").innerHTML =
                'در حال اعتبارسنجی...';
            fetch('check-verification/0' + mobile_m6876844168.toString() + '/' + code_c6876844168.toString())
                .then(response => {
                    response.json().then(res => {
                        if (res == 1) {
                            document.getElementById('check-verification').classList.remove('btn-info');
                            document.getElementById('check-verification').classList.add('btn-success');
                            document.getElementById("change-icon-button-verify").innerHTML =
                                '<span class="spinner-border spinner-border-sm mb-1" role="status" aria-hidden="true"></span>';
                            document.getElementById("change-text-button-verify").innerHTML =
                                'موبایل شما تایید شد.';
                            setTimeout(
                                function () {
                                    location.href = '/home'
                                }
                                , 2000)
                        } else {

                            document.getElementById('verify-error').style.display = 'block';
                            document.getElementById('check-verification').removeAttribute('disabled');
                            document.getElementById("change-icon-button-verify").innerHTML =
                                '<span class="fas fa-arrow-circle-left mt-1" role="status" aria-hidden="true"></span>';
                            document.getElementById("change-text-button-verify").innerHTML =
                                '{{ __('lang.verification') }}';
                            setTimeout(
                                function () {
                                    document.getElementById('verify-error').style.display = 'none'
                                }
                                , 3000)
                        }
                    })
                })

        })
    </script>

    </body>

    </html>
@endsection
