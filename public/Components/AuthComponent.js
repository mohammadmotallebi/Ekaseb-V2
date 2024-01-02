register = function () {
    var mobile_m6879843635465 = document.getElementById('mobile').value;
    document.getElementById('send-verification-code').addEventListener("click", function () {
        var mobile_m6879843635465 = document.getElementById('mobile').value;
        document.getElementById('send-verification-code').setAttribute('disabled', true);
        document.getElementById("change-icon-button-send-code").innerHTML =
            '<span class="spinner-border spinner-border-sm mb-1" role="status" aria-hidden="true"></span>';
        document.getElementById("change-text-button-send-code").innerHTML =
            'ارسال کد فعالسازی...';
        fetch('send-code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector("[name='csrf-token']").content
            },
            body: JSON.stringify({ 'mobile': mobile_m6879843635465 }),
        })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            if (data === 1) {
                document.getElementById("register-card-body").innerHTML =
                    "<div class=\"card-body p-0\">\n                                    <div class=\"text-center mt-3 mb-2\"><img  src=\"../../public/images/verify.png\" style=\"width:150px\"/></div>\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-6 d-none d-lg-block bg-login-image\"></div>\n                                        <div class=\"col-lg-6\">\n                                            <div class=\"pt-5 pr-5 pl-5 pb-2\">\n                                                <div class=\"text-center\">\n                                                    <div\n                                                        class=\"h6 text-gray-900 mb-4\">\u062A\u0627\u06CC\u06CC\u062F \u0645\u0648\u0628\u0627\u06CC\u0644: " + mobile_m6879843635465 +
                        "</div>\n                                                </div>\n                                                <form method=\"post\" id=\"reg-form\" class=\"verify\">\n                                                    <div class=\"form-group\">\n                                                    <input class=\"form-control text-center\" dir=\"ltr\" autofocus autocorrect=\"off\" autocapitalize=\"none\"  autocomplete=\"one-time-code\" inputmode=\"numeric\" pattern=\"[0-9]*\" type=\"number\" value=\"\" id=\"code\" name=\"one-time-code\"\n                                                           placeholder=\"\u06A9\u062F \u0686\u0647\u0627\u0631 \u0631\u0642\u0645\u06CC \u0631\u0627 \u0648\u0627\u0631\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F\">\n                                                        <div id=\"verify-error\" class=\"help-block text-center color-red\"\n                                                             style=\"display:none\">\n                                                            <span>\u06A9\u062F \u0648\u0627\u0631\u062F \u0634\u062F\u0647 \u0627\u0634\u062A\u0628\u0627\u0647 \u0627\u0633\u062A.</span>\n                                                        </div>\n                                                    </div>\n                                                    <button type=\"button\" id=\"check-verification\"\n                                                            class=\"col-12 btn btn-info btn-icon-split\">\n\n                                            <span id=\"change-text-button-verify\"\n                                                  class=\"col-10 text\">\u062A\u0627\u06CC\u06CC\u062F \u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644</span>\n                                                        <span id=\"change-icon-button-verify\" class=\"icon col-2\">\n                      <i class=\"fas fa-arrow-circle-left mt-1\"></i>\n                    </span>\n                                                    </button>\n                                                </form>\n                                                <hr>\n                                                    <div class=\"col-xs-12 text-center\" role=\"group\">\n                                                        <button id=\"resend_code\" type=\"button\"\n                                                                class=\"col-12 btn btn-green btn-sm btn-icon-split\">\n\n                                            <span id=\"change-text-button-resend\"\n                                                  class=\"col-10 text\">\u0627\u0631\u0633\u0627\u0644 \u0645\u062C\u062F\u062F \u06A9\u062F</span>\n                                                            <span id=\"change-icon-button-resend\" class=\"icon col-2\">\n                      <i class=\"fas fa-redo-alt mt-1\"></i>\n                    </span>\n                                                        </button>\n\n                                                    </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>";
                document.getElementById('resend_code').addEventListener("click", function () {
                    document.getElementById('resend_code').setAttribute('disabled', true);
                    document.getElementById("change-icon-button-resend").innerHTML =
                        '<span class="spinner-border spinner-border-sm mb-1" role="status" aria-hidden="true"></span>';
                    fetch('send-code', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRF-TOKEN': document.querySelector("[name='csrf-token']").content
                        },
                        body: JSON.stringify({ 'mobile': mobile_m6879843635465 }),
                    });
                    function countdown(minutes) {
                        var seconds = 60;
                        var mins = minutes;
                        function tick() {
                            var counter = document.getElementById("change-text-button-resend");
                            var current_minutes = mins - 1;
                            seconds--;
                            counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
                            if (seconds > 0) {
                                setTimeout(tick, 1000);
                            }
                            else {
                                if (mins > 1) {
                                    countdown(mins - 1);
                                }
                                else if (mins === 1) {
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
                    countdown(2);
                });
                document.getElementById('check-verification').addEventListener("click", function () {
                    var code_c6876844168 = document.getElementById('code').value;
                    if (code_c6876844168.length < 4) {
                        document.getElementById('verify-error').style.display = 'block';
                        setTimeout(function () {
                            document.getElementById('verify-error').style.display = 'none';
                        }, 3000);
                        return false;
                    }
                    document.getElementById('check-verification').setAttribute('disabled', true);
                    document.getElementById("change-icon-button-verify").innerHTML =
                        '<span class="spinner-border spinner-border-sm mb-1" role="status" aria-hidden="true"></span>';
                    document.getElementById("change-text-button-verify").innerHTML =
                        'در حال اعتبارسنجی...';
                    fetch('check-verification/' + mobile_m6879843635465.toString() + '/' + code_c6876844168.toString())
                        .then(function (response) {
                        response.json().then(function (res) {
                            console.log(res);
                            if (res == 1) {
                                document.getElementById("register-card-body").innerHTML = "\n<div class=\"card-body p-0\">\n\n                   <div class=\"text-center mt-3 mb-2\"><img  src=\"../../public/images/password.png\" style=\"width:125px\"/></div>\n                <div class=\"row\">\n                    <div class=\"col-lg-5 d-none d-lg-block bg-register-image\"></div>\n                    <div class=\"col-lg-7\">\n                        <div class=\"p-3\">\n                            <div class=\"text-center\">\n                                <h1 class=\"h5 text-gray-900 mb-4\">\u0628\u0631\u0627\u06CC \u062E\u0648\u062F\u062A\u0627\u0646 \u06CC\u06A9 \u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631 \u062A\u0639\u06CC\u06CC\u0646 \u06A9\u0646\u06CC\u062F.</h1>\n                            </div>\n                            <form class=\"user\" role=\"form\" id=\"passwordForm\" method=\"post\">\n                            <div class=\"form-group row\">\n                            <div class=\"col-sm-6 mb-3 mb-sm-0\">\n                            <input id=\"set-password1\" dir=\"ltr\" type=\"text\"\n                                   class=\"form-control  text-center\"\n                                   name=\"set-password1\"\n                                   autocorrect=\"off\" autocapitalize=\"none\" autocomplete=\"off\"\n                                   placeholder=\"\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631\"/>\n                            <div id=\"password-error\" class=\"help-block text-center color-red\">\n\n                            </div>\n                                   </div>\n                            <div class=\"col-sm-6\">\n                            <input id=\"set-password1_confirmation\" dir=\"ltr\" type=\"text\" class=\"form-control  text-center\"\n                                    name=\"set-password1_confirmation\"\n                                    autocorrect=\"off\" autocapitalize=\"none\" autocomplete=\"off\"\n                                    placeholder=\"\u062A\u06A9\u0631\u0627\u0631 \u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631\">\n                            </div>\n                            </div>\n                                 <button type=\"button\" id=\"set-password\"  class=\"col-12 btn btn-info btn-icon-split\">\n                                            <span class=\"col-10 text\">\u062B\u0628\u062A \u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631</span>\n                                            <span class=\"icon col-2\" id=\"change-icon-button-set-password\">\n                                            <i class=\"fas fa-lock mt-1\"></i>\n                                            </span>\n                                 </button>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>";
                                document.getElementById('set-password').addEventListener("click", function () {
                                    var password_p6879843635465 = document.getElementById('set-password1').value;
                                    var password_c6879843635465 = document.getElementById('set-password1_confirmation').value;
                                    fetch('set-password', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json',
                                            'X-CSRF-TOKEN': document.querySelector("[name='csrf-token']").content
                                        },
                                        body: JSON.stringify({
                                            'mobile': mobile_m6879843635465,
                                            'password': password_p6879843635465,
                                            'password_confirmation': password_c6879843635465
                                        }),
                                    })
                                        .then(function (response) { return response.json(); })
                                        .then(function (data) {
                                        if (data === 1) {
                                            document.getElementById('set-password').setAttribute('disabled', true);
                                            document.getElementById("change-icon-button-set-password").innerHTML =
                                                '<span class="spinner-border spinner-border-sm mb-1" role="status" aria-hidden="true"></span>';
                                            window.location.href = 'home';
                                        }
                                        else if (data === 2) {
                                            document.getElementById("password-error").innerHTML = 'کلمه عبور باید حداقل 6 حرف باشد.';
                                            setTimeout(function () {
                                                document.getElementById("password-error").innerHTML = '';
                                            }, 3000);
                                        }
                                        else if (data === 3) {
                                            document.getElementById("password-error").innerHTML = 'تکرار کلمه عبور اشتباه است.';
                                            setTimeout(function () {
                                                document.getElementById("password-error").innerHTML = '';
                                            }, 3000);
                                        }
                                    });
                                });
                            }
                            else {
                                document.getElementById('verify-error').style.display = 'block';
                                document.getElementById('check-verification').removeAttribute('disabled');
                                document.getElementById("change-icon-button-verify").innerHTML =
                                    '<span class="fas fa-arrow-circle-left mt-1" role="status" aria-hidden="true"></span>';
                                document.getElementById("change-text-button-verify").innerHTML =
                                    'تایید شماره موبایل';
                                setTimeout(function () {
                                    document.getElementById('verify-error').style.display = 'none';
                                }, 3000);
                            }
                        });
                    });
                });
            }
            else {
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
                setTimeout(function () {
                    document.getElementById("verify-error").innerHTML = '';
                }, 3000);
            }
        });
    });
};
resetPassword = function () {
    var mobile_m6879843635465 = document.getElementById('mobile').value;
    document.getElementById('send-verification-code').addEventListener("click", function () {
        var mobile_m6879843635465 = document.getElementById('mobile').value;
        document.getElementById('send-verification-code').setAttribute('disabled', true);
        document.getElementById("change-icon-button-send-code").innerHTML =
            '<span class="spinner-border spinner-border-sm mb-1" role="status" aria-hidden="true"></span>';
        document.getElementById("change-text-button-send-code").innerHTML =
            'ارسال کد فعالسازی...';
        fetch('password/send-code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector("[name='csrf-token']").content
            },
            body: JSON.stringify({ 'mobile': mobile_m6879843635465 }),
        })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            if (data === 1) {
                document.getElementById("register-card-body").innerHTML =
                    "<div class=\"card-body p-0\">\n                                    <div class=\"text-center mt-3 mb-2\"><img  src=\"../../public/images/verify.png\" style=\"width:150px\"/></div>\n                                    <div class=\"row\">\n                                        <div class=\"col-lg-6 d-none d-lg-block bg-login-image\"></div>\n                                        <div class=\"col-lg-6\">\n                                            <div class=\"pt-5 pr-5 pl-5 pb-2\">\n                                                <div class=\"text-center\">\n                                                    <div\n                                                        class=\"h6 text-gray-900 mb-4\">\u062A\u0627\u06CC\u06CC\u062F \u0645\u0648\u0628\u0627\u06CC\u0644: " + mobile_m6879843635465 +
                        "</div>\n                                                </div>\n                                                <form method=\"post\" id=\"reg-form\" class=\"verify\">\n                                                    <div class=\"form-group\">\n                                                    <input class=\"form-control text-center\" dir=\"ltr\" autofocus autocorrect=\"off\" autocapitalize=\"none\"  autocomplete=\"one-time-code\" inputmode=\"numeric\" pattern=\"[0-9]*\" type=\"number\" value=\"\" id=\"code\" name=\"one-time-code\"\n                                                           placeholder=\"\u06A9\u062F \u0686\u0647\u0627\u0631 \u0631\u0642\u0645\u06CC \u0631\u0627 \u0648\u0627\u0631\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F\">\n                                                        <div id=\"verify-error\" class=\"help-block text-center color-red\"\n                                                             style=\"display:none\">\n                                                            <span>\u06A9\u062F \u0648\u0627\u0631\u062F \u0634\u062F\u0647 \u0627\u0634\u062A\u0628\u0627\u0647 \u0627\u0633\u062A.</span>\n                                                        </div>\n                                                    </div>\n                                                    <button type=\"button\" id=\"check-verification\"\n                                                            class=\"col-12 btn btn-info btn-icon-split\">\n\n                                            <span id=\"change-text-button-verify\"\n                                                  class=\"col-10 text\">\u062A\u0627\u06CC\u06CC\u062F \u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06CC\u0644</span>\n                                                        <span id=\"change-icon-button-verify\" class=\"icon col-2\">\n                      <i class=\"fas fa-arrow-circle-left mt-1\"></i>\n                    </span>\n                                                    </button>\n                                                </form>\n                                                <hr>\n                                                    <div class=\"col-xs-12 text-center\" role=\"group\">\n                                                        <button id=\"resend_code\" type=\"button\"\n                                                                class=\"col-12 btn btn-green btn-sm btn-icon-split\">\n\n                                            <span id=\"change-text-button-resend\"\n                                                  class=\"col-10 text\">\u0627\u0631\u0633\u0627\u0644 \u0645\u062C\u062F\u062F \u06A9\u062F</span>\n                                                            <span id=\"change-icon-button-resend\" class=\"icon col-2\">\n                      <i class=\"fas fa-redo-alt mt-1\"></i>\n                    </span>\n                                                        </button>\n\n                                                    </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>";
                document.getElementById('resend_code').addEventListener("click", function () {
                    document.getElementById('resend_code').setAttribute('disabled', true);
                    document.getElementById("change-icon-button-resend").innerHTML =
                        '<span class="spinner-border spinner-border-sm mb-1" role="status" aria-hidden="true"></span>';
                    fetch('password/send-code', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRF-TOKEN': document.querySelector("[name='csrf-token']").content
                        },
                        body: JSON.stringify({ 'mobile': mobile_m6879843635465 }),
                    });
                    function countdown(minutes) {
                        var seconds = 60;
                        var mins = minutes;
                        function tick() {
                            var counter = document.getElementById("change-text-button-resend");
                            var current_minutes = mins - 1;
                            seconds--;
                            counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
                            if (seconds > 0) {
                                setTimeout(tick, 1000);
                            }
                            else {
                                if (mins > 1) {
                                    countdown(mins - 1);
                                }
                                else if (mins === 1) {
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
                    countdown(2);
                });
                document.getElementById('check-verification').addEventListener("click", function () {
                    var code_c6876844168 = document.getElementById('code').value;
                    if (code_c6876844168.length < 4) {
                        document.getElementById('verify-error').style.display = 'block';
                        setTimeout(function () {
                            document.getElementById('verify-error').style.display = 'none';
                        }, 3000);
                        return false;
                    }
                    document.getElementById('check-verification').setAttribute('disabled', true);
                    document.getElementById("change-icon-button-verify").innerHTML =
                        '<span class="spinner-border spinner-border-sm mb-1" role="status" aria-hidden="true"></span>';
                    document.getElementById("change-text-button-verify").innerHTML =
                        'در حال اعتبارسنجی...';
                    fetch('password/check-verification/' + mobile_m6879843635465.toString() + '/' + code_c6876844168.toString())
                        .then(function (response) {
                        response.json().then(function (res) {
                            console.log(res);
                            if (res == 1) {
                                document.getElementById("register-card-body").innerHTML = "\n<div class=\"card-body p-0\">\n\n                   <div class=\"text-center mt-3 mb-2\"><img  src=\"../../public/images/password.png\" style=\"width:125px\"/></div>\n                <div class=\"row\">\n                    <div class=\"col-lg-5 d-none d-lg-block bg-register-image\"></div>\n                    <div class=\"col-lg-7\">\n                        <div class=\"p-3\">\n                            <div class=\"text-center\">\n                                <h1 class=\"h5 text-gray-900 mb-4\">\u0628\u0631\u0627\u06CC \u062E\u0648\u062F\u062A\u0627\u0646 \u06CC\u06A9 \u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631 \u062A\u0639\u06CC\u06CC\u0646 \u06A9\u0646\u06CC\u062F.</h1>\n                            </div>\n                            <form class=\"user\" role=\"form\" id=\"passwordForm\" method=\"post\">\n                            <div class=\"form-group row\">\n                            <div class=\"col-sm-6 mb-3 mb-sm-0\">\n                            <input id=\"set-password1\" dir=\"ltr\" type=\"text\"\n                                   class=\"form-control  text-center\"\n                                   name=\"set-password1\"\n                                   autocorrect=\"off\" autocapitalize=\"none\" autocomplete=\"off\"\n                                   placeholder=\"\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631\"/>\n                            <div id=\"password-error\" class=\"help-block text-center color-red\">\n\n                            </div>\n                                   </div>\n                            <div class=\"col-sm-6\">\n                            <input id=\"set-password1_confirmation\" dir=\"ltr\" type=\"text\" class=\"form-control  text-center\"\n                                    name=\"set-password1_confirmation\"\n                                    autocorrect=\"off\" autocapitalize=\"none\" autocomplete=\"off\"\n                                    placeholder=\"\u062A\u06A9\u0631\u0627\u0631 \u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631\">\n                            </div>\n                            </div>\n                                 <button type=\"button\" id=\"set-password\"  class=\"col-12 btn btn-info btn-icon-split\">\n                                            <span class=\"col-10 text\">\u062B\u0628\u062A \u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631</span>\n                                            <span class=\"icon col-2\" id=\"change-icon-button-set-password\">\n                                            <i class=\"fas fa-lock mt-1\"></i>\n                                            </span>\n                                 </button>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>";
                                document.getElementById('set-password').addEventListener("click", function () {
                                    var password_p6879843635465 = document.getElementById('set-password1').value;
                                    var password_c6879843635465 = document.getElementById('set-password1_confirmation').value;
                                    fetch('password/set-password', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json',
                                            'X-CSRF-TOKEN': document.querySelector("[name='csrf-token']").content
                                        },
                                        body: JSON.stringify({
                                            'mobile': mobile_m6879843635465,
                                            'password': password_p6879843635465,
                                            'password_confirmation': password_c6879843635465
                                        }),
                                    })
                                        .then(function (response) { return response.json(); })
                                        .then(function (data) {
                                        if (data === 1) {
                                            document.getElementById('set-password').setAttribute('disabled', true);
                                            document.getElementById("change-icon-button-set-password").innerHTML =
                                                '<span class="spinner-border spinner-border-sm mb-1" role="status" aria-hidden="true"></span>';
                                            window.location.href = 'home';
                                        }
                                        else if (data === 2) {
                                            document.getElementById("password-error").innerHTML = 'کلمه عبور باید حداقل 6 حرف باشد.';
                                            setTimeout(function () {
                                                document.getElementById("password-error").innerHTML = '';
                                            }, 3000);
                                        }
                                        else if (data === 3) {
                                            document.getElementById("password-error").innerHTML = 'تکرار کلمه عبور اشتباه است.';
                                            setTimeout(function () {
                                                document.getElementById("password-error").innerHTML = '';
                                            }, 3000);
                                        }
                                    });
                                });
                            }
                            else {
                                document.getElementById('verify-error').style.display = 'block';
                                document.getElementById('check-verification').removeAttribute('disabled');
                                document.getElementById("change-icon-button-verify").innerHTML =
                                    '<span class="fas fa-arrow-circle-left mt-1" role="status" aria-hidden="true"></span>';
                                document.getElementById("change-text-button-verify").innerHTML =
                                    'تایید شماره موبایل';
                                setTimeout(function () {
                                    document.getElementById('verify-error').style.display = 'none';
                                }, 3000);
                            }
                        });
                    });
                });
            }
            else {
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
                setTimeout(function () {
                    document.getElementById("verify-error").innerHTML = '';
                }, 3000);
            }
        });
    });
};
login = function () {
    document.getElementById('login-button').addEventListener("click", function () {
        var identity_code_i654984321321 = document.getElementById('identity_code_i654984321321').value;
        var password_p654984321321 = document.getElementById('password_p654984321321').value;
        document.getElementById('login-button').setAttribute('disabled', true);
        document.getElementById("change-icon-button-login").innerHTML =
            '<span class="spinner-border spinner-border-sm mb-1" role="status" aria-hidden="true"></span>';
        document.getElementById("change-text-button-login").innerHTML =
            'در حال ورود...';
        fetch('login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector("[name='csrf-token']").content
            },
            body: JSON.stringify({ 'identity_code': identity_code_i654984321321, 'password': password_p654984321321 }),
        })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            if (data == 1) {
                window.location.href = 'home';
            }
            else if (data == 0) {
                document.getElementById('login-button').removeAttribute('disabled');
                document.getElementById("change-icon-button-login").innerHTML =
                    '<i class="fas fa-arrow-circle-left mt-1"></i>';
                document.getElementById("change-text-button-login").innerHTML =
                    'ورود';
                document.getElementById("login-error-l654984321321").innerHTML =
                    'نام کاربری یا کلمه عبور اشتباه است.';
            }
            setTimeout(function () {
                document.getElementById("login-error-l654984321321").innerHTML =
                    '';
            }, 3000);
        });
    });
};
//# sourceMappingURL=AuthComponent.js.map