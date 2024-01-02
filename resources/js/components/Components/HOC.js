"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const HOC = (WrappedComponent, { data }) => {
    return class DataPickerExtended extends react_1.default.Component {
        render() {
            return react_1.default.createElement(WrappedComponent, Object.assign({}, data));
        }
    };
};
exports.default = HOC;
