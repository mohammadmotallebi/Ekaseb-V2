register = () => {
    let mobile_m6879843635465 = document.getElementById('mobile').value;

    document.getElementById('send-verification-code').addEventListener("click", function () {
        let mobile_m6879843635465 = document.getElementById('mobile').value;
        document.getElementById('send-verification-code').setAttribute('disabled', true);
        document.getElementById("change-icon-button-send-code").innerHTML =
            '<span class="spinner-border spinner-border-sm mb-1" role="status" aria-hidden="true"></span>';
        document.getElementById("change-text-button-send-code").innerHTML =
            'ارسال کد فعالسازی...';
        postData('send-code','POST',{'mobile': mobile_m6879843635465})
            .then(response => response.json())
            .then(data => {
                if (data === 1) {
                    document.getElementById("register-card-body").innerHTML =
                        `<div class="card-body p-0">
                                    <div class="text-center mt-3 mb-2"><img  src="../../public/images/verify.png" style="width:150px"/></div>
                                    <div class="row">
                                        <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                        <div class="col-lg-6">
                                            <div class="pt-5 pr-5 pl-5 pb-2">
                                                <div class="text-center">
                                                    <div
                                                        class="h6 text-gray-900 mb-4">تایید موبایل: ` + mobile_m6879843635465 +
                        `</div>
                                                </div>
                                                <form method="post" id="reg-form" class="verify">
                                                    <div class="form-group">
                                                    <input class="form-control text-center" dir="ltr" autofocus autocorrect="off" autocapitalize="none"  autocomplete="one-time-code" inputmode="numeric" pattern="[0-9]*" type="number" value="" id="code" name="one-time-code"
                                                           placeholder="کد چهار رقمی را وارد نمایید">
                                                        <div id="verify-error" class="help-block text-center color-red"
                                                             style="display:none">
                                                            <span>کد وارد شده اشتباه است.</span>
                                                        </div>
                                                    </div>
                                                    <button type="button" id="check-verification"
                                                            class="col-12 btn btn-info btn-icon-split">

                                            <span id="change-text-button-verify"
                                                  class="col-10 text">تایید شماره موبایل</span>
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
                                                  class="col-10 text">ارسال مجدد کد</span>
                                                            <span id="change-icon-button-resend" class="icon col-2">
                      <i class="fas fa-redo-alt mt-1"></i>
                    </span>
                                                        </button>

                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                    document.getElementById('resend_code').addEventListener("click", function () {
                        document.getElementById('resend_code').setAttribute('disabled', true);
                        document.getElementById("change-icon-button-resend").innerHTML =

                            '<span class="spinner-border spinner-border-sm mb-1" role="status" aria-hidden="true"></span>';
                        postData('send-code','POST',{'mobile': mobile_m6879843635465})

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
                                            'ارسال مجدد کد فعالسازی';
                                    }
                                }
                            }

                            tick();
                        }

                        countdown(2);//Mins of Time Out

                    });
                    document.getElementById('check-verification').addEventListener("click", function () {
                        let code_c6876844168 = document.getElementById('code').value;

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
                        postData('check-verification/' + mobile_m6879843635465.toString() + '/' + code_c6876844168.toString(),'GET')
                            .then(res => res.json())
                            .then(res => {

                                    if (res == 1) {
                                        document.getElementById("register-card-body").innerHTML = `
<div class="card-body p-0">

                   <div class="text-center mt-3 mb-2"><img  src="../../public/images/password.png" style="width:125px"/></div>
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div class="col-lg-7">
                        <div class="p-3">
                            <div class="text-center">
                                <h1 class="h5 text-gray-900 mb-4">برای خودتان یک کلمه عبور تعیین کنید.</h1>
                            </div>
                            <form class="user" role="form" id="passwordForm" method="post">
                            <div class="form-group row">
                            <div class="col-sm-6 mb-3 mb-sm-0">
                            <input id="set-password1" dir="ltr" type="text"
                                   class="form-control  text-center"
                                   name="set-password1"
                                   autocorrect="off" autocapitalize="none" autocomplete="off"
                                   placeholder="کلمه عبور"/>
                            <div id="password-error" class="help-block text-center color-red">

                            </div>
                                   </div>
                            <div class="col-sm-6">
                            <input id="set-password1_confirmation" dir="ltr" type="text" class="form-control  text-center"
                                    name="set-password1_confirmation"
                                    autocorrect="off" autocapitalize="none" autocomplete="off"
                                    placeholder="تکرار کلمه عبور">
                            </div>
                            </div>
                                 <button type="button" id="set-password"  class="col-12 btn btn-info btn-icon-split">
                                            <span class="col-10 text">ثبت کلمه عبور</span>
                                            <span class="icon col-2" id="change-icon-button-set-password">
                                            <i class="fas fa-lock mt-1"></i>
                                            </span>
                                 </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>`
                                        document.getElementById('set-password').addEventListener("click", function () {
                                            let password_p6879843635465 = document.getElementById('set-password1').value;
                                            let password_c6879843635465 = document.getElementById('set-password1_confirmation').value;
                                            postData('set-password','POST',{
                                                'mobile': mobile_m6879843635465,
                                                'password': password_p6879843635465,
                                                'password_confirmation': password_c6879843635465
                                            }).then(response => response.json())
                                                .then(data => {
                                                    if (data === 1) {
                                                        document.getElementById('set-password').setAttribute('disabled', true);
                                                        document.getElementById("change-icon-button-set-password").innerHTML =
                                                            '<span class="spinner-border spinner-border-sm mb-1" role="status" aria-hidden="true"></span>';
                                                        window.location.href = 'home';
                                                    } else if (data === 2) {
                                                        document.getElementById("password-error").innerHTML = 'کلمه عبور باید حداقل 6 حرف باشد.';

                                                        setTimeout(
                                                            function () {
                                                                document.getElementById("password-error").innerHTML = '';
                                                            }
                                                            , 3000)
                                                    } else if (data === 3) {
                                                        document.getElementById("password-error").innerHTML = 'تکرار کلمه عبور اشتباه است.';

                                                        setTimeout(
                                                            function () {
                                                                document.getElementById("password-error").innerHTML = '';
                                                            }
                                                            , 3000)
                                                    }
                                                })

                                        });
                                    } else {
                                        document.getElementById('verify-error').style.display = 'block';
                                        document.getElementById('check-verification').removeAttribute('disabled');
                                        document.getElementById("change-icon-button-verify").innerHTML =
                                            '<span class="fas fa-arrow-circle-left mt-1" role="status" aria-hidden="true"></span>';
                                        document.getElementById("change-text-button-verify").innerHTML =
                                            'تایید شماره موبایل';
                                        setTimeout(
                                            function () {
                                                document.getElementById('verify-error').style.display = 'none'
                                            }
                                            , 3000)
                                    }
                                })


                    })
                } else {
                    if (data === 3) {
                        document.getElementById("verify-error").innerHTML =
                            'این شماره موبایل قبلا در سیستم ثبت شده است!';
                        document.getElementById('send-verification-code').removeAttribute('disabled');
                        document.getElementById("change-icon-button-send-code").innerHTML =
                            '<i class="fas fa-user-plus mt-1"></i>';
                        document.getElementById("change-text-button-send-code").innerHTML =
                            'ثبت نام';
                    }
                    if (data === 4) {
                        document.getElementById("verify-error").innerHTML =
                            'فرمت شماره موبایل صحیح نمیباشد.';
                        document.getElementById('send-verification-code').removeAttribute('disabled');
                        document.getElementById("change-icon-button-send-code").innerHTML =
                            '<i class="fas fa-user-plus mt-1"></i>';
                        document.getElementById("change-text-button-send-code").innerHTML =
                            'ثبت نام';
                    }
                    if (data === 0) {
                        document.getElementById("verify-error").innerHTML =
                            'عملیات با خطا مواجه شد!';
                        document.getElementById('send-verification-code').removeAttribute('disabled');
                        document.getElementById("change-icon-button-send-code").innerHTML =
                            '<i class="fas fa-user-plus mt-1"></i>';
                        document.getElementById("change-text-button-send-code").innerHTML =
                            'ثبت نام';
                    }


                    setTimeout(
                        function () {
                            document.getElementById("verify-error").innerHTML = '';

                        }
                        , 3000)
                }
            })

    });

}

resetPassword = () => {
    let mobile_m6879843635465 = document.getElementById('mobile').value;

    document.getElementById('send-verification-code').addEventListener("click", function () {
        let mobile_m6879843635465 = document.getElementById('mobile').value;
        document.getElementById('send-verification-code').setAttribute('disabled', true);
        document.getElementById("change-icon-button-send-code").innerHTML =
            '<span class="spinner-border spinner-border-sm mb-1" role="status" aria-hidden="true"></span>';
        document.getElementById("change-text-button-send-code").innerHTML =
            'ارسال کد فعالسازی...';
        postData('password/send-code','POST',{'mobile': mobile_m6879843635465})
            .then(response => response.json())
            .then(data => {
                if (data === 1) {
                    document.getElementById("register-card-body").innerHTML =
                        `<div class="card-body p-0">
                                    <div class="text-center mt-3 mb-2"><img  src="../../public/images/verify.png" style="width:150px"/></div>
                                    <div class="row">
                                        <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                        <div class="col-lg-6">
                                            <div class="pt-5 pr-5 pl-5 pb-2">
                                                <div class="text-center">
                                                    <div
                                                        class="h6 text-gray-900 mb-4">تایید موبایل: ` + mobile_m6879843635465 +
                        `</div>
                                                </div>
                                                <form method="post" id="reg-form" class="verify">
                                                    <div class="form-group">
                                                    <input class="form-control text-center" dir="ltr" autofocus autocorrect="off" autocapitalize="none"  autocomplete="one-time-code" inputmode="numeric" pattern="[0-9]*" type="number" value="" id="code" name="one-time-code"
                                                           placeholder="کد چهار رقمی را وارد نمایید">
                                                        <div id="verify-error" class="help-block text-center color-red"
                                                             style="display:none">
                                                            <span>کد وارد شده اشتباه است.</span>
                                                        </div>
                                                    </div>
                                                    <button type="button" id="check-verification"
                                                            class="col-12 btn btn-info btn-icon-split">

                                            <span id="change-text-button-verify"
                                                  class="col-10 text">تایید شماره موبایل</span>
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
                                                  class="col-10 text">ارسال مجدد کد</span>
                                                            <span id="change-icon-button-resend" class="icon col-2">
                      <i class="fas fa-redo-alt mt-1"></i>
                    </span>
                                                        </button>

                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                    document.getElementById('resend_code').addEventListener("click", function () {
                        document.getElementById('resend_code').setAttribute('disabled', true);
                        document.getElementById("change-icon-button-resend").innerHTML =

                            '<span class="spinner-border spinner-border-sm mb-1" role="status" aria-hidden="true"></span>';
                        postData('send-code','POST',{'mobile': mobile_m6879843635465})
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
                                            'ارسال مجدد کد فعالسازی';
                                    }
                                }
                            }

                            tick();
                        }

                        countdown(2);//Mins of Time Out

                    });
                    document.getElementById('check-verification').addEventListener("click", function () {
                        let code_c6876844168 = document.getElementById('code').value;

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
                        postData('password/check-verification/' + mobile_m6879843635465.toString() + '/' + code_c6876844168.toString(),'GET',)
                            .then(response => response.json())
                            .then(res => {

                                    if (res === 1) {
                                        document.getElementById("register-card-body").innerHTML = `
<div class="card-body p-0">

                   <div class="text-center mt-3 mb-2"><img  src="../../public/images/password.png" style="width:125px"/></div>
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div class="col-lg-7">
                        <div class="p-3">
                            <div class="text-center">
                                <h1 class="h5 text-gray-900 mb-4">برای خودتان یک کلمه عبور تعیین کنید.</h1>
                            </div>
                            <form class="user" role="form" id="passwordForm" method="post">
                            <div class="form-group row">
                            <div class="col-sm-6 mb-3 mb-sm-0">
                            <input id="set-password1" dir="ltr" type="text"
                                   class="form-control  text-center"
                                   name="set-password1"
                                   autocorrect="off" autocapitalize="none" autocomplete="off"
                                   placeholder="کلمه عبور"/>
                            <div id="password-error" class="help-block text-center color-red">

                            </div>
                                   </div>
                            <div class="col-sm-6">
                            <input id="set-password1_confirmation" dir="ltr" type="text" class="form-control  text-center"
                                    name="set-password1_confirmation"
                                    autocorrect="off" autocapitalize="none" autocomplete="off"
                                    placeholder="تکرار کلمه عبور">
                            </div>
                            </div>
                                 <button type="button" id="set-password"  class="col-12 btn btn-info btn-icon-split">
                                            <span class="col-10 text">ثبت کلمه عبور</span>
                                            <span class="icon col-2" id="change-icon-button-set-password">
                                            <i class="fas fa-lock mt-1"></i>
                                            </span>
                                 </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>`
                                        document.getElementById('set-password').addEventListener("click", function () {
                                            let password_p6879843635465 = document.getElementById('set-password1').value;
                                            let password_c6879843635465 = document.getElementById('set-password1_confirmation').value;

                                            postData('set-password','POST',{
                                                'mobile': mobile_m6879843635465,
                                                'password': password_p6879843635465,
                                                'password_confirmation': password_c6879843635465
                                            }).then(response => response.json())
                                                .then(data => {
                                                    if (data === 1) {
                                                        document.getElementById('set-password').setAttribute('disabled', true);
                                                        document.getElementById("change-icon-button-set-password").innerHTML =
                                                            '<span class="spinner-border spinner-border-sm mb-1" role="status" aria-hidden="true"></span>';
                                                        window.location.href = 'home';
                                                    } else if (data === 2) {
                                                        document.getElementById("password-error").innerHTML = 'کلمه عبور باید حداقل 6 حرف باشد.';

                                                        setTimeout(
                                                            function () {
                                                                document.getElementById("password-error").innerHTML = '';
                                                            }
                                                            , 3000)
                                                    } else if (data === 3) {
                                                        document.getElementById("password-error").innerHTML = 'تکرار کلمه عبور اشتباه است.';

                                                        setTimeout(
                                                            function () {
                                                                document.getElementById("password-error").innerHTML = '';
                                                            }
                                                            , 3000)
                                                    }
                                                })

                                        });
                                    } else {
                                        document.getElementById('verify-error').style.display = 'block';
                                        document.getElementById('check-verification').removeAttribute('disabled');
                                        document.getElementById("change-icon-button-verify").innerHTML =
                                            '<span class="fas fa-arrow-circle-left mt-1" role="status" aria-hidden="true"></span>';
                                        document.getElementById("change-text-button-verify").innerHTML =
                                            'تایید شماره موبایل';
                                        setTimeout(
                                            function () {
                                                document.getElementById('verify-error').style.display = 'none'
                                            }
                                            , 3000)
                                    }
                                })


                    })
                } else {
                    if (data === 3) {
                        document.getElementById("verify-error").innerHTML =
                            'این شماره موبایل قبلا در سیستم ثبت شده است!';
                        document.getElementById('send-verification-code').removeAttribute('disabled');
                        document.getElementById("change-icon-button-send-code").innerHTML =
                            '<i class="fas fa-user-plus mt-1"></i>';
                        document.getElementById("change-text-button-send-code").innerHTML =
                            'ثبت نام';
                    }
                    if (data === 4) {
                        document.getElementById("verify-error").innerHTML =
                            'فرمت شماره موبایل صحیح نمیباشد.';
                        document.getElementById('send-verification-code').removeAttribute('disabled');
                        document.getElementById("change-icon-button-send-code").innerHTML =
                            '<i class="fas fa-user-plus mt-1"></i>';
                        document.getElementById("change-text-button-send-code").innerHTML =
                            'ثبت نام';
                    }
                    if (data === 0) {
                        document.getElementById("verify-error").innerHTML =
                            'عملیات با خطا مواجه شد!';
                        document.getElementById('send-verification-code').removeAttribute('disabled');
                        document.getElementById("change-icon-button-send-code").innerHTML =
                            '<i class="fas fa-user-plus mt-1"></i>';
                        document.getElementById("change-text-button-send-code").innerHTML =
                            'ثبت نام';
                    }


                    setTimeout(
                        function () {
                            document.getElementById("verify-error").innerHTML = '';

                        }
                        , 3000)
                }
            })

    });

}
login = () => {
    document.getElementById('login-button').addEventListener("click", function () {
        let identity_code_i654984321321 = document.getElementById('identity_code_i654984321321').value;
        let password_p654984321321 = document.getElementById('password_p654984321321').value;
        document.getElementById('login-button').setAttribute('disabled', true);
        document.getElementById("change-icon-button-login").innerHTML =
            '<span class="spinner-border spinner-border-sm mb-1" role="status" aria-hidden="true"></span>';
        document.getElementById("change-text-button-login").innerHTML =
            'در حال ورود...';
        postData('login','POST',{'identity_code': identity_code_i654984321321, 'password': password_p654984321321})
            .then(response => response.json())
            .then(data => {
                if (data == 1) {
                    window.location.href = 'home';
                } else if (data == 0) {
                    document.getElementById('login-button').removeAttribute('disabled');
                    document.getElementById("change-icon-button-login").innerHTML =
                        '<i class="fas fa-arrow-circle-left mt-1"></i>';
                    document.getElementById("change-text-button-login").innerHTML =
                        'ورود';
                    document.getElementById("login-error-l654984321321").innerHTML =
                        'نام کاربری یا کلمه عبور اشتباه است.';
                }
                setTimeout(
                    function () {
                        document.getElementById("login-error-l654984321321").innerHTML =
                            '';
                    }
                    , 3000)
            });

    });
}
