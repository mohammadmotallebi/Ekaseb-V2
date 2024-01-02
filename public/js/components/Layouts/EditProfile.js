"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function () { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var framework7_react_1 = require("framework7-react");
var fa_1 = __importDefault(require("../lang/fa"));
require("../../style.css");
var ImageCropper_1 = __importDefault(require("../Popups/ImageCropper"));
var browser_image_compression_1 = __importDefault(require("browser-image-compression"));
var framework7_1 = require("framework7");
var Helper_1 = require("../Helper");
var DatePicker_1 = __importDefault(require("../Components/DatePicker"));
exports.default = function (props) {
    var _a = (0, react_1.useState)(), image = _a[0], setImage = _a[1];
    var handleImageUpload = function (event) {
        var imageFile = event.target.files[0];
        var options = {
            maxSizeMB: 0.05,
            maxWidthOrHeight: 300,
            useWebWorker: true
        };
        (0, browser_image_compression_1.default)(imageFile, options)
            .then(function (compressedFile) {
            browser_image_compression_1.default.getDataUrlFromFile(compressedFile).then(function (result) {
                setImage(result);
            });
            framework7_react_1.f7.popup.open('.image-crop');
        })
            .catch(function (error) {
        });
    };
    (0, react_1.useEffect)(function () {
    }, []);
    function submit(e) {
        var myUserData = Object.assign(Object.assign({}, framework7_react_1.f7.form.convertToData('#profile')), { "address": framework7_react_1.f7.textEditor.get('#address').value });
        (0, Helper_1.postData)(framework7_react_1.f7.params.home + 'Update', myUserData)
            .then(function (userData) {
            framework7_react_1.f7.notification.create({
                icon: '<i class="f7-icons">checkmark_circle</i>',
                subtitle: [fa_1.default.alert.save_ok],
                closeTimeout: 3000,
                closeOnClick: true,
                cssClass: 'success',
            }).open();
        });
    }
    return (react_1.default.createElement(framework7_react_1.Page, { noToolbar: true, infinitePreloader: true }, react_1.default.createElement(framework7_react_1.Navbar, { backLinkForce: false, innerClass: 'current-theme-color' }, react_1.default.createElement("div", { className: "left" }, react_1.default.createElement("a", { href: '/menu', className: "link icon-only" }, react_1.default.createElement("i", { className: "icon icon-back text-color-white" }))), react_1.default.createElement("div", { className: "title" }, fa_1.default.menu.edit_profile), react_1.default.createElement(framework7_react_1.NavRight, { style: { paddingLeft: "5px" } }, react_1.default.createElement(framework7_react_1.Button, { raised: true, fill: true, onClick: function () { return submit(); }, id: 'submit' }, fa_1.default.save))), react_1.default.createElement(framework7_react_1.List, { inlineLabels: true, form: true, id: 'profile', method: 'post', className: 'text-align-right' }, react_1.default.createElement(framework7_react_1.ListItem, null, react_1.default.createElement("input", { type: 'file', id: 'user_pic', name: 'user_pic', accept: "image/*;capture=camera", style: { display: 'none' }, value: '', onChange: function (e) { return handleImageUpload(e); } }), react_1.default.createElement("img", { className: 'img-profile items-center-relative', id: 'img-profile', src: (props.detail.user_pic) ? props.detail.user_pic : 'img/avatar.png', onClick: function () { return document.getElementById('user_pic').click(); }, alt: '' })), react_1.default.createElement(framework7_react_1.ListInput, { label: fa_1.default.form.name, type: "text", placeholder: fa_1.default.form.placeholder.name, defaultValue: props.detail.name, name: 'name', inputId: 'name' }), react_1.default.createElement(framework7_react_1.ListInput, { label: fa_1.default.form.family, type: "text", placeholder: fa_1.default.form.placeholder.family, defaultValue: props.detail.family, name: 'family', inputId: 'family' }), react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.gender, smartSelect: true, smartSelectParams: { openIn: 'sheet', sheetCloseLinkText: [fa_1.default.close_icon] } }, react_1.default.createElement("select", { name: "gender", id: 'gender', className: 'text-align-right', defaultValue: props.detail.gender }, react_1.default.createElement("option", { value: 1 }, fa_1.default.male), react_1.default.createElement("option", { value: 2 }, fa_1.default.female))), react_1.default.createElement(DatePicker_1.default, { label: fa_1.default.form.birthday, type: "text", parentId: 'profile', indexAfter: 7, minYear: framework7_react_1.f7.params.date.year - 80, maxYear: framework7_react_1.f7.params.date.year, placeholder: fa_1.default.form.placeholder.birthday, name: 'birthday', id: 'birthday', value: props.detail.birthday }), react_1.default.createElement(framework7_react_1.ListInput, { label: fa_1.default.form.tel, type: "text", inputStyle: { direction: 'ltr' }, placeholder: fa_1.default.form.placeholder.tel, defaultValue: props.detail.tel, pattern: "[0-9]*", name: 'tel', id: 'tel' }), react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.form.city, smartSelect: true, id: 'city', smartSelectParams: {
            openIn: 'popup',
            searchbar: true,
            searchbarPlaceholder: [fa_1.default.form.placeholder.search_city],
            popupCloseLinkText: [fa_1.default.close_icon],
            searchbarDisableText: [fa_1.default.searchbarDisableText],
            scrollToSelectedItem: true,
            navbarColorTheme: 'red',
            closeOnSelect: true,
            on: {
                close: function () {
                    var options = '';
                    (0, framework7_1.Dom7)('li#state select').empty();
                    framework7_1.request.json(framework7_react_1.f7.params.home + 'get-state-list/' + framework7_react_1.f7.form.convertToData('#profile').city, function (states) {
                        states.forEach(function (state) {
                            options += '<option value=' + state.id + '>' + state.name + '</option>';
                        });
                        (0, framework7_1.Dom7)('#state select').html(options);
                    });
                }
            },
        } }, react_1.default.createElement("select", { id: 'city', name: "city", defaultValue: props.detail.city }, props.cities.map(function (city) { return react_1.default.createElement("option", { key: city.id, value: city.id }, city.city_name); }))), react_1.default.createElement(framework7_react_1.ListItem, { title: fa_1.default.form.state, smartSelect: true, id: 'state', smartSelectParams: {
            openIn: 'popup',
            searchbar: true,
            searchbarPlaceholder: [fa_1.default.form.placeholder.search_state],
            popupCloseLinkText: [fa_1.default.close_icon],
            searchbarDisableText: [fa_1.default.searchbarDisableText],
            scrollToSelectedItem: true,
            closeOnSelect: true,
            navbarColorTheme: 'red',
        } }, react_1.default.createElement("select", { name: "state", id: 'state', defaultValue: props.detail.state }, props.states.map(function (state) { return react_1.default.createElement("option", { key: state.id, value: state.id }, state.name); }))), react_1.default.createElement(framework7_react_1.ListInput, { label: fa_1.default.form.email, type: "text", inputStyle: { direction: 'ltr' }, placeholder: fa_1.default.form.placeholder.email, defaultValue: props.detail.email, name: 'email', id: 'email' }), react_1.default.createElement(framework7_react_1.ListInput, { type: "texteditor", label: fa_1.default.form.address, placeholder: fa_1.default.form.placeholder.address, resizable: true, textEditorParams: {
            mode: 'popover',
            buttons: ['bold', 'italic', 'underline', 'strikeThrough'],
            id: 'address',
            class: 'address'
        }, value: props.detail.address }), react_1.default.createElement(framework7_react_1.ListInput, { label: fa_1.default.form.father, type: "text", placeholder: fa_1.default.form.placeholder.father, defaultValue: props.detail.father_name, name: 'father_name', id: 'father_name' }), react_1.default.createElement(framework7_react_1.ListInput, { label: fa_1.default.form.height, type: "text", inputStyle: { direction: 'ltr' }, placeholder: fa_1.default.form.placeholder.height, defaultValue: props.detail.height, name: 'height', pattern: "[0-9]*", id: 'height' }), react_1.default.createElement(framework7_react_1.ListInput, { label: fa_1.default.form.weight, type: "text", inputStyle: { direction: 'ltr' }, placeholder: fa_1.default.form.placeholder.weight, defaultValue: props.detail.weight, name: 'weight', pattern: "[0-9]*", id: 'weight' })), react_1.default.createElement(ImageCropper_1.default, { image: image })));
};
//# sourceMappingURL=EditProfile.js.map