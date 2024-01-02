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
var fa_1 = __importDefault(require("../lang/fa"));
var framework7_react_1 = require("framework7-react");
var framework7_1 = require("framework7");
var qr_scanner_1 = __importDefault(require("qr-scanner"));
var dv = (0, framework7_1.getDevice)();
var isNative = 1;
var Helper_1 = require("../Helper");
var BeatLoader_1 = __importDefault(require("react-spinners/BeatLoader"));
exports.default = function () {
    var _a = (0, react_1.useState)(''), finalResult = _a[0], setFinalResult = _a[1];
    var _b = (0, react_1.useState)(''), i = _b[0], setI = _b[1];
    var _c = (0, react_1.useState)(null), qrScanner = _c[0], setQrScanner = _c[1];
    var videoElem = (0, react_1.useRef)(null);
    var scan = (0, react_1.useCallback)(function () {
        (0, framework7_1.Dom7)('#qrcode_block').show();
        var videoElement = isNative ? videoElem.current : videoElem.current.video;
        videoElement.style.maxWidth = 'var(--f7-page-master-width)';
        videoElement.style.maxHeight = '400px';
        videoElement.style.border = '3px solid var(--f7-theme-color)';
        videoElement.style.borderRadius = '5px';
        var scanner = new qr_scanner_1.default(videoElement, function (result) {
            if (result.data.length === 15) {
                (0, framework7_1.Dom7)('#qrcode_block').hide();
                scanner.destroy();
            }
            handleChange(result.data);
            console.log(scanner);
        }, {
            returnDetailedScanResult: true,
            highlightScanRegion: true,
            highlightCodeOutline: true,
        });
        console.log(scanner);
        (0, framework7_1.Dom7)('.scan-region-highlight').find('svg.scan-region-highlight-svg').css('stroke', 'var(--f7-theme-color)');
        scanner._updateOverlay();
        scanner.setInversionMode('both');
        setQrScanner(scanner);
        scanner.start();
    }, []);
    var destroyQrReader = function () {
        if (qrScanner) {
            qrScanner.destroy();
            setQrScanner(null);
        }
    };
    function saveItem() {
        var notification = framework7_react_1.f7.notification.create({
            icon: '<i class="f7-icons">checkmark_circle</i>',
            subtitle: [fa_1.default.alert.add_item_ok],
            closeTimeout: 3000,
            closeOnClick: true,
            cssClass: 'success',
        });
        framework7_1.request.get(framework7_react_1.f7.params.home + 'save-item/' + i, function (res) {
            if (res === '1') {
                notification.open();
                framework7_react_1.f7.view.main.router.navigate('/home', { force: false });
            }
            else {
                framework7_react_1.f7.dialog.alert(fa_1.default.alert.save_error);
            }
        });
    }
    function successList(item) {
        return (react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(framework7_react_1.Block, null, react_1.default.createElement(framework7_react_1.Row, null, react_1.default.createElement(framework7_react_1.Col, null, react_1.default.createElement(framework7_react_1.Button, { fill: true, iconF7: 'floppy_disk', onClick: function () { return saveItem(); } }, fa_1.default.save)))), react_1.default.createElement(framework7_react_1.Block, { style: { margin: "5px 0" } }, react_1.default.createElement(framework7_react_1.Block, { inset: true, strong: true, className: "col mt-0 mb-1 ml-0 mr-0 pastel-blue-01 text-align-center", style: { minHeight: '120px', maxHeight: '150px', border: '1px solid #ae6706' } }, react_1.default.createElement(framework7_react_1.BlockHeader, { className: "text-align-center", style: { borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#ae6706", } }, fa_1.default.item_name), item.item_name ? (0, Helper_1.limitString)(item.item_name) : '---'), react_1.default.createElement(framework7_react_1.Swiper, { spaceBetween: 5, slidesPerView: 3, scrollbar: true, zoom: true }, react_1.default.createElement(framework7_react_1.SwiperSlide, null, react_1.default.createElement(framework7_react_1.Block, { inset: true, strong: true, className: "col mt-0 mb-0 ml-0 mr-0 pastel-orange-01 text-align-center", style: { minHeight: '120px', maxHeight: '150px', border: '1px solid #ae6706' } }, react_1.default.createElement(framework7_react_1.BlockHeader, { className: "text-align-center", style: { borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#ae6706", } }, fa_1.default.category), item.item_category ? (0, Helper_1.limitString)(item.item_category) : '---')), react_1.default.createElement(framework7_react_1.SwiperSlide, null, react_1.default.createElement(framework7_react_1.Block, { inset: true, strong: true, className: "col mt-0 mb-0 ml-0 mr-0 pastel-orange-01 text-align-center", style: { minHeight: '120px', maxHeight: '150px', border: '1px solid #ae6706' } }, react_1.default.createElement(framework7_react_1.BlockHeader, { className: "text-align-center", style: { borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#ae6706", } }, fa_1.default.type), item.item_type ? (0, Helper_1.limitString)(item.item_type) : '---')), react_1.default.createElement(framework7_react_1.SwiperSlide, null, react_1.default.createElement(framework7_react_1.Block, { inset: true, strong: true, className: "col mt-0 mb-0 ml-0 mr-0 pastel-orange-01 text-align-center", style: { minHeight: '120px', maxHeight: '150px', border: '1px solid #ae6706' } }, react_1.default.createElement(framework7_react_1.BlockHeader, { className: "text-align-center", style: { borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#ae6706", } }, fa_1.default.model), item.item_model ? (0, Helper_1.limitString)(item.item_model) : '---')), react_1.default.createElement(framework7_react_1.SwiperSlide, null, react_1.default.createElement(framework7_react_1.Block, { inset: true, strong: true, className: "col mt-0 mb-0 ml-0 mr-0 pastel-orange-01 text-align-center", style: { minHeight: '120px', maxHeight: '150px', border: '1px solid #ae6706' } }, react_1.default.createElement(framework7_react_1.BlockHeader, { className: "text-align-center", style: { borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#ae6706", } }, fa_1.default.size), item.item_size ? (0, Helper_1.limitString)(item.item_size) : '---')), react_1.default.createElement(framework7_react_1.SwiperSlide, null, react_1.default.createElement(framework7_react_1.Block, { inset: true, strong: true, className: "col mt-0 mb-0 ml-0 mr-0 pastel-orange-01 text-align-center", style: { minHeight: '120px', maxHeight: '150px' } }, react_1.default.createElement(framework7_react_1.BlockHeader, { className: "text-align-center", style: { borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#ae6706", } }, fa_1.default.color), item.item_color ? (0, Helper_1.limitString)(item.item_color) : '---')))), react_1.default.createElement(framework7_react_1.Block, { className: "row text-align-center", style: { margin: "5px 0" } }, react_1.default.createElement(framework7_react_1.Block, { inset: true, strong: true, className: "col mt-0 mb-0 ml-0 mr-0 pastel-green-01", style: { border: "1px solid rgb(35 136 18 / 47%)" } }, react_1.default.createElement(framework7_react_1.BlockHeader, { className: "text-align-center", style: { borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#238812", } }, fa_1.default.price), (0, Helper_1.number)(item.item_price)), react_1.default.createElement(framework7_react_1.Block, { inset: true, strong: true, className: "col mt-0 mb-0 ml-1 mr-1 pastel-green-01", style: { border: "1px solid rgb(35 136 18 / 47%)" } }, react_1.default.createElement(framework7_react_1.BlockHeader, { className: "text-align-center", style: { borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#238812", } }, fa_1.default.cashless_score), (0, Helper_1.number)(item.item_score)), react_1.default.createElement(framework7_react_1.Block, { inset: true, strong: true, className: "col mt-0 mb-0 ml-0 mr-0 pastel-green-01", style: { border: "1px solid rgb(35 136 18 / 47%)" } }, react_1.default.createElement(framework7_react_1.BlockHeader, { className: "text-align-center", style: { borderBottom: "1px solid rgba(255,255,255,0.4)", width: "100%", paddingBottom: "3px", color: "#238812", } }, fa_1.default.credit), (0, Helper_1.number)(item.item_credit))), react_1.default.createElement(framework7_react_1.Block, { strong: true, inset: true }, react_1.default.createElement(framework7_react_1.Swiper, { pagination: true, navigation: true, scrollbar: true, zoom: true, dir: 'ltr', effect: "creative", creativeEffect: {
                prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                },
                next: {
                    translate: ["100%", 0, 0],
                },
            } }, item.img.map(function (image, i) {
            return react_1.default.createElement(framework7_react_1.SwiperSlide, { key: i, zoom: true }, react_1.default.createElement("img", { src: image }));
        })))));
    }
    function handleChange(val) {
        setI(val);
        if (val.length === 15) {
            setFinalResult(react_1.default.createElement(framework7_react_1.Block, { className: 'text-align-center' }, react_1.default.createElement(BeatLoader_1.default, { color: "var(--f7-theme-color)" })));
            (0, framework7_1.Dom7)('#qrcode_block').hide();
            (0, framework7_1.request)({
                url: 'shop-item',
                method: 'POST',
                data: { id: val },
                dataType: 'json',
                contentType: 'application/json',
                success: function (data, status, xhr) {
                    setFinalResult(successList(data));
                    console.log(data);
                },
                error: function (xhr, status, message) {
                    setFinalResult('');
                    framework7_react_1.f7.toast.create({
                        icon: '<i class="f7-icons">exclamationmark_circle_fill</i>',
                        text: fa_1.default.alert.code_error,
                        position: 'center',
                        closeTimeout: 2000,
                    }).open();
                },
                complete: function (xhr, status) {
                }
            });
        }
        else {
            setFinalResult('');
        }
    }
    return (react_1.default.createElement(framework7_react_1.Page, { noSwipeback: true, onPageBeforeOut: destroyQrReader, onPageBeforeIn: function () { return (0, framework7_1.Dom7)('#qrcode_block').hide(); } }, (dv.android) ?
        react_1.default.createElement(framework7_react_1.Navbar, { innerClass: 'current-theme-color' }, react_1.default.createElement(framework7_react_1.NavRight, null, react_1.default.createElement(framework7_react_1.NavTitle, null, fa_1.default.add_buy))) :
        react_1.default.createElement(framework7_react_1.Navbar, { innerClass: 'current-theme-color' }, react_1.default.createElement(framework7_react_1.NavLeft, null, react_1.default.createElement(framework7_react_1.NavTitle, null, fa_1.default.add_buy))), react_1.default.createElement(framework7_react_1.List, { noHairlinesMd: true }, react_1.default.createElement(framework7_react_1.ListInput, { inputId: 'item_code', floatingLabel: true, label: fa_1.default.alert.enter_code, type: "text", autocomplete: "off", pattern: "[0-9]*", placeholder: fa_1.default.alert.enter_code, clearButton: true, onChange: function (event) { return handleChange(event.target.value); }, maxlength: '15', minLength: '15', defaultValue: '', onInputClear: function () { return setFinalResult(''); } }), react_1.default.createElement(framework7_react_1.Block, null, react_1.default.createElement(framework7_react_1.Button, { fill: true, raised: true, iconF7: 'qrcode', onClick: function () { return scan(qrScanner); }, className: 'mt-4' }, " ", fa_1.default.buttons.use_barcode_scanner))), react_1.default.createElement("div", { className: 'text-align-center', id: 'qrcode_block' }, react_1.default.createElement("video", { ref: videoElem, id: 'qr_scan_camera' })), finalResult));
};
//# sourceMappingURL=AddBuy.js.map