import React from 'react';
import {
    f7,
    Block,
    List,
    ListItem,
    Navbar,
    NavRight,
    Page,
} from "framework7-react";
import fa from "../lang/fa";
import '../../style.css';
import {request, Dom7 as $$} from "framework7";

import {postData} from "../Helper";

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetail: f7.store.getters.getUserDetail.value,
        }
    }

    componentDidMount() {
        let self = this;
        let notificationFull = f7.notification.create({
            icon: '<i class="f7-icons">checkmark_circle</i>',
            subtitle: [fa.alert.save_ok],
            closeTimeout: 3000,
            closeOnClick: true,
            cssClass: 'success',
        });
        let notificationError = f7.notification.create({
            icon: '<i class="f7-icons">multiply_circle_fill</i>',
            subtitle: [fa.alert.save_error],
            closeTimeout: 3000,
            closeOnClick: true,
        });
        let notificationCode = f7.notification.create({
            icon: '<i class="f7-icons">multiply_circle_fill</i>',
            subtitle: [fa.alert.verification_code_error],
            closeTimeout: 3000,
            closeOnClick: true,
        });
        document.getElementById("identity").addEventListener("click", function () {
            f7.dialog.create({
                title: fa.desc.change_identity,
                text: fa.desc.enter_identity,
                content: `<div class="dialog-input-field input"><input id="identity_i6549876513541" dir="ltr" type="text" class="dialog-input text-align-center" value="" pattern="[0-9]*"></div>`,
                buttons: [
                    {
                        text: 'تایید',
                        close: false,
                        color: 'green',
                        bold: true,
                        onClick: (dialog, e) => {
                            if ($$('#identity_i6549876513541').val() === '' || $$('#identity_i6549876513541').val().length < 10 || $$('#identity_i6549876513541').val().length > 10) {
                                $$('.dialog-text').addClass('text-color-red')
                                dialog.setText(fa.alert.identity_error);
                                return false;
                            }
                            postData(f7.params.home + 'update-identity', {identity_code: $$('#identity_i6549876513541').val()})
                                .then(response => response.json())
                                .then(data => {
                                    if (data !== 1) {
                                        $$('.dialog-text').addClass('text-color-red')
                                        dialog.setText(data);
                                        return false;
                                    } else {
                                        f7.notification.create({
                                            icon: '<i class="f7-icons">checkmark_circle</i>',
                                            subtitle: [fa.alert.save_ok],
                                            closeTimeout: 3000,
                                            closeOnClick: true,
                                            cssClass: 'success',
                                        }).open();
                                        $$('#identity .item-after span').text($$('#identity_i6549876513541').val());
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
        })
        $$('#mobile').click(function () {
            let mobile;
            f7.dialog.create({
                title: fa.desc.change_mobile,
                text: fa.desc.enter_mobile,
                content: `<div class="dialog-input-field input"><input id="mobile_m549798799555" dir="ltr" type="text" class="dialog-input text-align-center" value="" pattern="[0-9]*"></div>`,
                buttons: [
                    {
                        text: 'تایید',
                        close: false,
                        color: 'green',
                        bold: true,
                        onClick: (dialog, e) => {
                            mobile = $$('#mobile_m549798799555').val()
                            if (mobile === '') {
                                $$('.dialog-text').addClass('text-color-red')
                                dialog.setText(fa.alert.mobile_error);
                                return false;
                            }
                            postData('/internal-send-code', {'mobile': mobile})
                                .then(response => response.json())
                                .then(data => {
                                    if (data == 4 || data == 0) {
                                        $$('.dialog-text').addClass('text-color-red')
                                        dialog.setText(fa.alert.mobile_error)

                                        return false;
                                    }
                                    if (data == 3) {
                                        $$('.dialog-text').addClass('text-color-red')
                                        dialog.setText(fa.alert.mobile_is_exist)

                                        return false;
                                    }
                                    dialog.close()
                                    f7.dialog.create({
                                        title: fa.desc.verification_code,
                                        text: fa.desc.enter_sended_code,
                                        content: `<div class="dialog-input-field input"><input id="verification_v65467987964654" dir="ltr" type="text" class="dialog-input text-align-center" value="" pattern="[0-9]*"></div>`,
                                        buttons: [
                                            {
                                                text: 'تایید',
                                                close: false,
                                                color: 'green',
                                                bold: true,
                                                onClick: (dialog, e) => {
                                                    //****
                                                    if ($$('#verification_v65467987964654').val() == '') {
                                                        $$('.dialog-text').addClass('text-color-red')
                                                        dialog.setText(fa.alert.verification_code_error);
                                                        return false;
                                                    }
                                                    postData(f7.params.home + 'update-mobile', {
                                                        mobile: mobile,
                                                        verification: $$('#verification_v65467987964654').val()
                                                    })
                                                        .then(response => {
                                                            response.json()
                                                                .then(data => {
                                                                    if (data == 0) {
                                                                        $$('.dialog-text').addClass('text-color-red')
                                                                        dialog.setText(fa.alert.verification_code_error);
                                                                        return false;
                                                                    } else {
                                                                        notificationFull.open();
                                                                        $$('#mobile .item-after span').text(mobile);
                                                                        dialog.close();
                                                                    }
                                                                });
                                                        })
                                                    //****
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

                            //****
                        }

                    },
                    {
                        text: 'لغو',
                        close: true,
                        color: 'red',
                    }
                ]
            }).open();

        })
        $$('#password').click(function () {

            f7.dialog.create({
                title: fa.desc.change_password,
                text: fa.desc.enter_password,
                content: `<div class="list no-hairlines-md">
  <ul>
    <li class="item-content item-input item-input-with-info">
      <div class="item-inner">
        <div class="item-input-wrap">
          <input id="password_p65467987964654" name="password_p65467987964654" dir="ltr" type="text" class="text-align-center" placeholder="کلمه عبور" autocomplete="new-password">
          <span class="input-clear-button"></span>
          <div class="item-input-info text-color-red" id="password_p98798465446545"></div>
        </div>
      </div>
    </li>
    <li class="item-content item-input item-input-with-info">
      <div class="item-inner">
        <div class="item-input-wrap">
          <input id="confirm_c65467987964654" name="confirm_c65467987964654" dir="ltr" type="text" class="text-align-center" placeholder="تکرار کلمه عبور" autocomplete="new-password">
          <span class="input-clear-button"></span>
          <div class="item-input-info text-color-red" id="confirm_c6547987465416"></div>
        </div>
      </div>
    </li></ul></div>`,
                buttons: [
                    {
                        text: 'تایید',
                        close: false,
                        color: 'green',
                        bold: true,
                        onClick: (dialog, e) => {
                            //****
                            if ($$('#password_p65467987964654').val() == '') {
                                $$('#password_p98798465446545').html(fa.alert.password_empty)
                                setTimeout(function () {
                                    $$('#password_p98798465446545').html('')
                                    $$('#confirm_c6547987465416').html('')
                                }, 3000);
                                return false;
                            }
                            if ($$('#password_p65467987964654').val() != $$('#confirm_c65467987964654').val()) {
                                $$('#confirm_c6547987465416').html(fa.alert.confirm_password_error)
                                setTimeout(function () {
                                    $$('#password_p98798465446545').html('')
                                    $$('#confirm_c6547987465416').html('')
                                }, 3000);
                                return false;
                            }


                            postData(f7.params.home + 'update-password', {password: $$('#password_p65467987964654').val()})
                                .then(response => response.json())
                                .then(data => {
                                    if (data != 1) {
                                        $$('#password_p98798465446545').html(data)
                                        setTimeout(function () {
                                            $$('#password_p98798465446545').html('')
                                        }, 3000);
                                        return false;
                                    } else {
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
        })
    }


    render() {
        return (
            <Page noNavbar={false} noToolbar={true}>
                <Navbar backLinkForce={true} innerClass={'current-theme-color'}>
                    <div className="left">
                        <a href={'/menu'} className="link icon-only">
                            <i className="icon icon-back  text-color-white"></i>
                        </a>
                    </div>
                    <div className="title">{fa.menu.security}</div>
                    <NavRight>

                    </NavRight>
                </Navbar>
                <Block className={'text-align-right'} strong style={{background: 'rgb(255 235 0 / 38%)'}}>
                    {fa.desc.warning_security}
                </Block>
                <List>
                    <ListItem link={'#'} title={fa.form.identity} id={'identity'} after={this.state.userDetail.identity_code}></ListItem>
                    <ListItem link={'#'} title={fa.form.mobile} id={'mobile'} after={this.state.userDetail.mobile}></ListItem>
                    <ListItem link={'#'} title={fa.form.password} id={'password'} after={'********'}></ListItem>
                </List>
            </Page>
        )
    }


}
