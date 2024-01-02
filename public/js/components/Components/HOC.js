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
var HOC = function (WrappedComponent, _a) {
    var data = _a.data;
    return (function (_super) {
        __extends(DataPickerExtended, _super);
        function DataPickerExtended() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DataPickerExtended.prototype.render = function () {
            return react_1.default.createElement(WrappedComponent, Object.assign({}, data));
        };
        return DataPickerExtended;
    }(react_1.default.Component));
};
exports.default = HOC;
//# sourceMappingURL=HOC.js.map