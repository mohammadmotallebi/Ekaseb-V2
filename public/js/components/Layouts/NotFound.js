"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var framework7_react_1 = require("framework7-react");
exports.default = function () { return (react_1.default.createElement(framework7_react_1.Page, null, react_1.default.createElement(framework7_react_1.Navbar, { title: "Not found", backLink: "Back" }), react_1.default.createElement(framework7_react_1.Block, { strong: true }, react_1.default.createElement("p", null, "Sorry"), react_1.default.createElement("p", null, "Requested content not found.")))); };
//# sourceMappingURL=NotFound.js.map