import React, {useEffect, useReducer, useState} from 'react';
import {Button, f7, List, ListInput, ListItem, Navbar, useStore, NavRight, Page} from "framework7-react";
import fa from "../lang/fa";
import '../../style.css';
import ImageCropper from "../Popups/ImageCropper";
import imageCompression from 'browser-image-compression';
import {request, Dom7 as $$} from "framework7";
import {postData} from "../Helper";
import DatePicker from "../Components/DatePicker";


export default (props) => {

    const [image, setImage] = useState();
    const handleImageUpload = (event) => {
        let imageFile = event.target.files[0];

        let options = {
            maxSizeMB: 0.05,
            maxWidthOrHeight: 300,
            useWebWorker: true
        }
        imageCompression(imageFile, options)
            .then(function (compressedFile) {
                imageCompression.getDataUrlFromFile(compressedFile).then(function (result) {
                    setImage(result);

                })

                f7.popup.open('.image-crop');

            })
            .catch(function (error) {
            });
    }

    useEffect(() => {

    }, []);

    function submit(e) {
        let myUserData = {
            ...f7.form.convertToData('#profile'),
            "address": f7.textEditor.get('#address').value
        };
        postData(f7.params.home + 'Update', myUserData)
            .then(userData => {
                f7.notification.create({
                    icon: '<i class="f7-icons">checkmark_circle</i>',
                    subtitle: [fa.alert.save_ok],
                    closeTimeout: 3000,
                    closeOnClick: true,
                    cssClass: 'success',
                }).open();
            });

    }

    // $$('#city select').on('change', function (e) {
    //     let options = '';
    //     $$('li#state select').empty();
    //     request.json(f7.params.home+'get-state-list/' + f7.form.convertToData('#profile').city,function(states){
    //
    //                 states.forEach(function (state) {
    //                     options += '<option value=' + state.id + '>' + state.name + '</option>';
    //                 })
    //                 $$('#state select').html(options);
    //             })
    // });

    return (
        <Page noToolbar={true} infinitePreloader={true}>
            <Navbar backLinkForce={false} innerClass={'current-theme-color'}>
                <div className="left">
                    <a href={'/menu'} className="link icon-only">
                        <i className="icon icon-back text-color-white"></i>
                    </a>
                </div>
                <div className="title">{fa.menu.edit_profile}</div>
                <NavRight style={{paddingLeft: "5px"}}><Button raised fill onClick={() => submit()} id={'submit'}>{fa.save}</Button></NavRight>
            </Navbar>

            <List inlineLabels form={true} id={'profile'} method={'post'} className={'text-align-right'}>
                <ListItem>
                    <input type='file' id='user_pic' name='user_pic' accept="image/*;capture=camera"
                           style={{display: 'none'}} value='' onChange={(e) => handleImageUpload(e)}/>
                    <img className={'img-profile items-center-relative'} id={'img-profile'}
                         src={(props.detail.user_pic) ? props.detail.user_pic : 'img/avatar.png'}
                         onClick={() => document.getElementById('user_pic').click()}
                         alt=''/>
                </ListItem>
                <ListInput
                    label={fa.form.name}
                    type="text"
                    placeholder={fa.form.placeholder.name}
                    defaultValue={props.detail.name}
                    name={'name'}
                    inputId={'name'}

                >
                </ListInput>
                <ListInput
                    label={fa.form.family}
                    type="text"
                    placeholder={fa.form.placeholder.family}
                    defaultValue={props.detail.family}
                    name={'family'}
                    inputId={'family'}
                >
                </ListInput>
                <ListItem
                    title={fa.gender}
                    smartSelect
                    smartSelectParams={{openIn: 'sheet', sheetCloseLinkText: [fa.close_icon]}}
                >
                    <select name="gender" id={'gender'} className={'text-align-right'}
                            defaultValue={props.detail.gender}>
                        <option value={1}>{fa.male}</option>
                        <option value={2}>{fa.female}</option>
                    </select>
                </ListItem>

                <DatePicker
                    label={fa.form.birthday}
                    type="text"
                    parentId={'profile'}
                    indexAfter={7}
                    minYear={f7.params.date.year - 80}
                    maxYear={f7.params.date.year}
                    placeholder={fa.form.placeholder.birthday}
                    name={'birthday'}
                    id={'birthday'}
                    value={props.detail.birthday}
                >
                </DatePicker>

                <ListInput
                    label={fa.form.tel}
                    type="text"
                    inputStyle={{direction: 'ltr'}}
                    placeholder={fa.form.placeholder.tel}
                    defaultValue={props.detail.tel}
                    pattern="[0-9]*"
                    name={'tel'}
                    id={'tel'}
                >
                </ListInput>

                <ListItem
                    title={fa.form.city}
                    smartSelect
                    id={'city'}
                    smartSelectParams={{
                        openIn: 'popup',
                        searchbar: true,
                        searchbarPlaceholder: [fa.form.placeholder.search_city],
                        popupCloseLinkText: [fa.close_icon],
                        searchbarDisableText: [fa.searchbarDisableText],
                        scrollToSelectedItem: true,
                        navbarColorTheme: 'red',
                        closeOnSelect: true,
                        on: {
                            close: function () {
                                let options = '';
                                $$('li#state select').empty();
                                request.json(f7.params.home + 'get-state-list/' + f7.form.convertToData('#profile').city, function (states) {

                                    states.forEach(function (state) {
                                        options += '<option value=' + state.id + '>' + state.name + '</option>';
                                    })
                                    $$('#state select').html(options);
                                })
                            }
                        },


                    }}
                >
                    <select id={'city'} name="city" defaultValue={props.detail.city}>
                        {
                            props.cities.map((city) =>
                                <option key={city.id} value={city.id}>
                                    {city.city_name}
                                </option>
                            )
                        }
                    </select>
                </ListItem>
                <ListItem
                    title={fa.form.state}
                    smartSelect
                    id={'state'}
                    smartSelectParams={{
                        openIn: 'popup',
                        searchbar: true,
                        searchbarPlaceholder: [fa.form.placeholder.search_state],
                        popupCloseLinkText: [fa.close_icon],
                        searchbarDisableText: [fa.searchbarDisableText],
                        scrollToSelectedItem: true,
                        closeOnSelect: true,
                        navbarColorTheme: 'red',
                    }}
                >
                    <select name="state" id={'state'} defaultValue={props.detail.state}>
                        {
                            props.states.map((state) =>
                                <option key={state.id} value={state.id}>
                                    {state.name}
                                </option>
                            )
                        }
                    </select>
                </ListItem>
                <ListInput
                    label={fa.form.email}
                    type="text"
                    inputStyle={{direction: 'ltr'}}
                    placeholder={fa.form.placeholder.email}
                    defaultValue={props.detail.email}
                    name={'email'}
                    id={'email'}
                >
                </ListInput>
                <ListInput
                    type="texteditor"
                    label={fa.form.address}
                    placeholder={fa.form.placeholder.address}
                    resizable
                    textEditorParams={{
                        mode: 'popover',
                        buttons: ['bold', 'italic', 'underline', 'strikeThrough'],
                        id: 'address',
                        class: 'address'
                    }}
                    value={props.detail.address}
                    // onTextEditorChange={(value) => this.setState({listEditorValue: value})}
                />
                <ListInput
                    label={fa.form.father}
                    type="text"
                    placeholder={fa.form.placeholder.father}
                    defaultValue={props.detail.father_name}
                    name={'father_name'}
                    id={'father_name'}
                >
                </ListInput>
                <ListInput
                    label={fa.form.height}
                    type="text"
                    inputStyle={{direction: 'ltr'}}
                    placeholder={fa.form.placeholder.height}
                    defaultValue={props.detail.height}
                    name={'height'}
                    pattern="[0-9]*"
                    id={'height'}
                >
                </ListInput>
                <ListInput
                    label={fa.form.weight}
                    type="text"
                    inputStyle={{direction: 'ltr'}}
                    placeholder={fa.form.placeholder.weight}
                    defaultValue={props.detail.weight}
                    name={'weight'}
                    pattern="[0-9]*"
                    id={'weight'}
                >
                </ListInput>
            </List>
            <ImageCropper image={image}/>
        </Page>
    )

}


