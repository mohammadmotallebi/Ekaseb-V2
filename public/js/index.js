import { createRoot } from "react-dom/client";
import Framework7 from "framework7/bundle";
import Framework7React from "framework7-react";
import App from "./components/App";
import "framework7/css/bundle/rtl";
import "./style.css";
import "./style.less";
import "material-icons";
import "framework7-icons";
import React from "react";
Framework7.request.setup({
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-CSRF-TOKEN": document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content"),
    },
});
Framework7.use(Framework7React);
var root = createRoot(document.getElementById("app"));
root.render(React.createElement(App, null));
//# sourceMappingURL=index.js.map