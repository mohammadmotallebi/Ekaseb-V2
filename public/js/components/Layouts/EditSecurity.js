"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var framework7_react_1 = require("framework7-react");
var fa_1 = __importDefault(require("../lang/fa"));
require("../../style.css");
var framework7_1 = require("framework7");
var Helper_1 = require("../Helper");
var default_1 = (function (_super) {
    __extends(default_1, _super);
    function default_1(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            userDetail: framework7_react_1.f7.store.getters.getUserDetail.value,
        };
        return _this;
    }
    default_1.prototype.componentDidMount = function () {
        var self = this;
        var notificationFull = framework7_react_1.f7.notification.create({
            icon: '<i class="f7-icons">checkmark_circle</i>',
            subtitle: [fa_1.default.alert.save_ok],
            closeTimeout: 3000,
            closeOnClick: true,
            cssClass: 'success',
        });
        var notificationError = framework7_react_1.f7.notification.create({
            icon: '<i class="f7-icons">multiply_circle_fill</i>',
            subtitle: [fa_1.default.alert.save_error],
            closeTimeout: 3000,
            closeOnClick: true,
        });
        var notificationCode = framework7_react_1.f7.notification.create({
            icon: '<i class="f7-icons">multiply_circle_fill</i>',
            subtitle: [fa_1.default.alert.verification_code_error],
            closeTimeout: 3000,
            closeOnClick: true,
        });
        document.getElementById("identity").addEventListener("click", function () {
            framework7_react_1.f7.dialog.create({
                title: fa_1.default.desc.change_identity,
                text: fa_1.default.desc.enter_identity,
                content: "<div class=\"dialog-input-field input\"><input id=\"identity_i6549876513541\" dir=\"ltr\" type=\"text\" class=\"dialog-input text-align-center\" value=\"\" pattern=\"[0-9]*\"></div>",
                buttons: [
                    {
                        text: 'تایید',
                        close: false,
                        color: 'green',
                        bold: true,
                        onClick: function (dialog, e) {
                            if ((0, framework7_1.Dom7)('#identity_i6549876513541').val() === '' || (0, framework7_1.Dom7)('#identity_i6549876513541').val().length < 10 || (0, framework7_1.Dom7)('#identity_i6549876513541').val().length > 10) {
                                (0, framework7_1.Dom7)('.dialog-text').addClass('text-color-red');
                                dialog.setText(fa_1.default.alert.identity_error);
                                return false;
                            }
                            (0, Helper_1.postData)(framework7_react_1.f7.params.home + 'update-identity', { identity_code: (0, framework7_1.Dom7)('#identity_i6549876513541').val() })
                                .then(function (response) { return response.json(); })
                                .then(function (data) {
                                if (data !== 1) {
                                    (0, framework7_1.Dom7)('.dialog-text').addClass('text-color-red');
                                    dialog.setText(data);
                                    return false;
                                }
                                else {
                                    framework7_react_1.f7.notification.create({
                                        icon: '<i class="f7-icons">checkmark_circle</i>',
                                        subtitle: [fa_1.default.alert.save_ok],
                                        closeTimeout: 3000,
                                        closeOnClick: true,
                                        cssClass: 'success',
                                    }).open();
                                    (0, framework7_1.Dom7)('#identity .item-after span').text((0, framework7_1.Dom7)('#identity_i6549876513541').val());
                                    dialog.close();
                                }
                            });
                        }
                    },
                    {
                        text: 'لغو',
                        close: true,
                        color: 'red',
                    }
                ]
            }).open();
        });
        (0, framework7_1.Dom7)('#mobile').click(function () {
            var mobile;
            framework7_react_1.f7.dialog.create({
                title: fa_1.default.desc.change_mobile,
                text: fa_1.default.desc.enter_mobile,
                content: "<div class=\"dialog-input-field input\"><input id=\"mobile_m549798799555\" dir=\"ltr\" type=\"text\" class=\"dialog-input text-align-center\" value=\"\" pattern=\"[0-9]*\"></div>",
                buttons: [
                    {
                        text: 'تایید',
                        close: false,
                        color: 'green',
                        bold: true,
                        onClick: function (dialog, e) {
                            mobile = (0, framework7_1.Dom7)('#mobile_m549798799555').val();
                            if (mobile === '') {
                                (0, framework7_1.Dom7)('.dialog-text').addClass('text-color-red');
                                dialog.setText(fa_1.default.alert.mobile_error);
                                return false;
                            }
                            (0, Helper_1.postData)('/internal-send-code', { 'mobile': mobile })
                                .then(function (response) { return response.json(); })
                                .then(function (data) {
                                if (data == 4 || data == 0) {
                                    (0, framework7_1.Dom7)('.dialog-text').addClass('text-color-red');
                                    dialog.setText(fa_1.default.alert.mobile_error);
                                    return false;
                                }
                                if (data == 3) {
                                    (0, framework7_1.Dom7)('.dialog-text').addClass('text-color-red');
                                    dialog.setText(fa_1.default.alert.mobile_is_exist);
                                    return false;
                                }
                                dialog.close();
                                framework7_react_1.f7.dialog.create({
                                    title: fa_1.default.desc.verification_code,
                                    text: fa_1.default.desc.enter_sended_code,
                                    content: "<div class=\"dialog-input-field input\"><input id=\"verification_v65467987964654\" dir=\"ltr\" type=\"text\" class=\"dialog-input text-align-center\" value=\"\" pattern=\"[0-9]*\"></div>",
                                    buttons: [
                                        {
                                            text: 'تایید',
                                            close: false,
                                            color: 'green',
                                            bold: true,
                                            onClick: function (dialog, e) {
                                                if ((0, framework7_1.Dom7)('#verification_v65467987964654').val() == '') {
                                                    (0, framework7_1.Dom7)('.dialog-text').addClass('text-color-red');
                                                    dialog.setText(fa_1.default.alert.verification_code_error);
                                                    return false;
                                                }
                                                (0, Helper_1.postData)(framework7_react_1.f7.params.home + 'update-mobile', {
                                                    mobile: mobile,
                                                    verification: (0, framework7_1.Dom7)('#verification_v65467987964654').val()
                                                })
                                                    .then(function (response) {
                                                    response.json()
                                                        .then(function (data) {
                                                        if (data == 0) {
                                                            (0, framework7_1.Dom7)('.dialog-text').addClass('text-color-red');
                                                            dialog.setText(fa_1.default.alert.verification_code_error);
                                                            return false;
                                                        }
                                                        else {
                                                            notificationFull.open();
                                                            (0, framework7_1.Dom7)('#mobile .item-after span').text(mobile);
                                                            dialog.close();
                                                        }
                                                    });
                                                });
                                            }
                                        },
                                        {
                                            text: 'لغو',
                                            close: true,
                                            color: 'red',
                                        }
                                    ]
                                }).open();
                            });
                        }
                    },
                    {
                        text: 'لغو',
                        close: true,
                        color: 'red',
                    }
                ]
            }).open();
        });
        (0, framework7_1.Dom7)('#password').click(function () {
            framework7_react_1.f7.dialog.create({
                title: fa_1.default.desc.change_password,
                text: fa_1.default.desc.enter_password,
                content: "<div class=\"list no-hairlines-md\">\n  <ul>\n    <li class=\"item-content item-input item-input-with-info\">\n      <div class=\"item-inner\">\n        <div class=\"item-input-wrap\">\n          <input id=\"password_p65467987964654\" name=\"password_p65467987964654\" dir=\"ltr\" type=\"text\" class=\"text-align-center\" placeholder=\"\u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631\" autocomplete=\"new-password\">\n          <span class=\"input-clear-button\"></span>\n          <div class=\"item-input-info text-color-red\" id=\"password_p98798465446545\"></div>\n        </div>\n      </div>\n    </li>\n    <li class=\"item-content item-input item-input-with-info\">\n      <div class=\"item-inner\">\n        <div class=\"item-input-wrap\">\n          <input id=\"confirm_c65467987964654\" name=\"confirm_c65467987964654\" dir=\"ltr\" type=\"text\" class=\"text-align-center\" placeholder=\"\u062A\u06A9\u0631\u0627\u0631 \u06A9\u0644\u0645\u0647 \u0639\u0628\u0648\u0631\" autocomplete=\"new-password\">\n          <span class=\"input-clear-button\"></span>\n          <div class=\"item-input-info text-color-red\" id=\"confirm_c6547987465416\"></div>\n        </div>\n      </div>\n    </li></ul></div>",
                buttons: [
                    {
                        text: 'تایید',
                        close: false,
                        color: 'green',
                        bold: true,
                        onClick: function (dialog, e) {
                            if ((0, framework7_1.Dom7)('#password_p65467987964654').val() == '') {
                                (0, framework7_1.Dom7)('#password_p98798465446545').html(fa_1.default.alert.password_empty);
                                setTimeout(function () {
                                    (0, framework7_1.Dom7)('#password_p98798465446545').html('');
                                    (0, framework7_1.Dom7)('#confirm_c6547987465416').html('');
                                }, 3000);
                                return false;
                            }
                            if ((0, framework7_1.Dom7)('#password_p65467987964654').val() != (0, framework7_1.Dom7)('#confirm_c65467987964654').val()) {
                                (0, framework7_1.Dom7)('#confirm_c6547987465416').html(fa_1.default.alert.confirm_password_error);
                                setTimeout(function () {
                                    (0, framework7_1.Dom7)('#password_p98798465446545').html('');
                                    (0, framework7_1.Dom7)('#confirm_c6547987465416').html('');
                                }, 3000);
                                return false;
                            }
                            (0, Helper_1.postData)(framework7_react_1.f7.params.home + 'update-password', { password: (0, framework7_1.Dom7)('#password_p65467987964654').val() })
                                .then(function (response) { return response.json(); })
                                .then(function (data) {
                                if (data != 1) {
                                    (0, framework7_1.Dom7)('#password_p98798465446545').html(data);
                                    setTimeout(function () {
                                        (0, framework7_1.Dom7)('#password_p98798465446545').html('');
                                    }, 3000);
                                    return false;
                                }
                                else {
                                    notificationFull.open();
                                    dialog.close();
                                    window.location.href = 'home';
                                }
                            });
                        }
                    },
                    {
                        text: 'لغو',
                        close: true,
                        color: 'red',
                    }
                ]
            }).open();
        });
    };
    default_1.prototype.render = function () {
        return (react_1.default.createElement(framework7_react_1.Page, { noNavbar: false, noToolbar: true }, react_1.default.createElement(framework7_react_1.Navbar, { backLinkForce: true, innerClass: 'current-theme-color' }, react_1.default.createElement("div", { className: "left" }, react_1.default.createElement("a", { href: '/menu', className: "link icon-only" }, react_1.default.createElement("i", { className: "icon icon-back  text-color-white" }))), react_1.default.createElement("div", { className: "title" }, fa_1.default.menu.security), react_1.default.createElement(framework7_react_1.NavRight, null)), react_1.default.createElement(framework7_react_1.Block, { className: 'text-align-right', strong: true, style: { background: 'rgb(255 235 0 / 38%)' } }, fa_1.default.desc.warning_security), react_1.default.createElement(framework7_react_1.List, null, react_1.default.createElement(framework7_react_1.ListItem, { link: '#', title: fa_1.default.form.identity, id: 'identity', after: this.state.userDetail.identity_code }), react_1.default.createElement(framework7_react_1.ListItem, { link: '#', title: fa_1.default.form.mobile, id: 'mobile', after: this.state.userDetail.mobile }), react_1.default.createElement(framework7_react_1.ListItem, { link: '#', title: fa_1.default.form.password, id: 'password', after: '********' }))));
    };
    return default_1;
}(react_1.default.Component));
exports.default = default_1;
//# sourceMappingURL=EditSecurity.js.map