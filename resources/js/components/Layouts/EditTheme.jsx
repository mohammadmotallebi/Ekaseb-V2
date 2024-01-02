import React, {useState, useEffect} from 'react';

import {
    f7,
    Toggle,
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

export default () => {
    let [data_d654654665, setData_a654654665] = useState([]);

    useEffect(() => {

        request.json(f7.params.home + 'get-user-theme', function (data) {
            setData_a654654665([data]);
        });

    }, []);

    const setDarktheme_f654654665 = () => {
        if ($$('body').hasClass('theme-dark')) {
            postData(f7.params.home + 'user-darktheme', {darktheme: 0}, 'PATCH')
                .then(userData => {
                    $$('body').removeClass('theme-dark')
                });
        }
        if (!$$('body').hasClass('theme-dark')) {
            postData(f7.params.home + 'user-darktheme', {darktheme: 1}, 'PATCH')
                .then(userData => {
                    $$('body').addClass('theme-dark')
                });
        }
    }

    const setAutoDarktheme_f654654665 = () => {
        request.json(f7.params.home + 'get-user-theme', function (data) {
            if (data.auto_darktheme === '0') {
                postData(f7.params.home + 'user-auto_darktheme', {auto_darktheme: '1'}, 'PATCH')
                    .then(userData => {
                        f7.enableAutoDarkTheme();
                    });
            } else {
                postData(f7.params.home + 'user-auto_darktheme', {auto_darktheme: '0'}, 'PATCH')
                    .then(userData => {
                        f7.disableAutoDarkTheme();
                    });
            }

        });
    }

    return (
        <Page noNavbar={false} noToolbar={true}>
            <Navbar backLinkForce={true} innerClass={'current-theme-color'}>
                <div className="left">
                    <a href={'/menu'} className="link icon-only">
                        <i className="icon icon-back text-color-white"></i>
                    </a>
                </div>
                <div className="title">{fa.menu.theme}</div>
                <NavRight>

                </NavRight>
            </Navbar>
            {
                data_d654654665.map((item, index) =>
                    <List key={index}>
                        <ListItem title={fa.form.color_theme}
                                  smartSelect
                                  smartSelectParams={{
                                      openIn: 'sheet',
                                      closeOnSelect: true,
                                      scrollToSelectedItem: true,
                                      sheetCloseLinkText: [fa.close_icon],
                                      on: {
                                          close: (e) => {
                                              request.json(f7.params.home + 'get-user-theme', function (data) {
                                                  postData(f7.params.home + 'user-change-theme', {default_theme: e.getValue()}, 'PATCH')
                                                      .then(userData => {
                                                          $$('body').removeClass('color-theme-' + data.default_theme);
                                                          $$('body').addClass('color-theme-' + e.getValue());
                                                      });
                                              })
                                          }
                                      }
                                  }}
                        >
                            <select name="default_theme" defaultValue={item.default_theme}>
                                <option value="green">سبز روشن</option>
                                <option value="teal">سبز تیره</option>
                                <option value="lime">لیموئی</option>
                                <option value="pink">صورتی</option>
                                <option value="blue">آبی</option>
                                <option value="lightblue">آبی روشن</option>
                                <option value="darkblue">کاربنی</option>
                                <option value="red">قرمز</option>
                                <option value="darkred">زرشکی</option>
                                <option value="deeporange">نارنجی تیره</option>
                                <option value="orange">نارنجی روشن</option>
                                <option value="deeppurple">بنفش تیره</option>
                                <option value="purple">بنفش روشن</option>
                                <option value="customgray">خاکستری</option>
                            </select>
                        </ListItem>
                        <ListItem title={fa.form.darktheme}>
                            {
                                (item.darktheme === '1') ?
                                    <Toggle id={'darktheme_d654654665'} defaultChecked onChange={() => setDarktheme_f654654665()}/>
                                    :
                                    <Toggle id={'darktheme_d654654665'} onChange={() => setDarktheme_f654654665()}/>
                            }
                        </ListItem>
                        <ListItem title={fa.form.auto_darktheme}>
                            {
                                (item.auto_darktheme === '1') ?
                                    <Toggle id={'auto_darktheme_a654654665'} defaultChecked onChange={() => setAutoDarktheme_f654654665()}/>
                                    :
                                    <Toggle id={'auto_darktheme_a654654665'} onChange={() => setAutoDarktheme_f654654665()}/>

                            }
                        </ListItem>

                    </List>
                )
            }
        </Page>

    )
}
