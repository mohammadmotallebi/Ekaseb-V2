"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var fa_1 = __importDefault(require("../lang/fa"));
var framework7_react_1 = require("framework7-react");
var qr_scanner_1 = __importDefault(require("qr-scanner"));
qr_scanner_1.default.WORKER_PATH = '../js/qr-scanner-worker.min.js';
function barcodeScan() {
    var video = document.getElementById('barcode-scanner');
    var qrScanner = new qr_scanner_1.default(video, function (result) { return console.log('decoded qr code:', result); });
    qrScanner.start();
}
exports.default = function (props) {
    return (react_1.default.createElement(framework7_react_1.Popup, { className: 'barcode', swipeToClose: true, onPopupOpened: function () { return barcodeScan(); } }, react_1.default.createElement(framework7_react_1.Page, null, react_1.default.createElement(framework7_react_1.Navbar, { title: fa_1.default.add_credit }, react_1.default.createElement(framework7_react_1.NavRight, null, react_1.default.createElement(framework7_react_1.Link, { popupClose: true, iconF7: 'multiply_circle_fill' }))))));
};
//# sourceMappingURL=Barcode.js.map