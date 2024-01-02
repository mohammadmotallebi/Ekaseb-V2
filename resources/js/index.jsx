import { createRoot } from "react-dom/client";

// Import Framework7
import Framework7 from "framework7/lite-bundle";

// Import Framework7-React plugin
import Framework7React from "framework7-react";
import {Dom7 as $$} from "framework7";
// Import main App component
import App from "./components/App";
// Framework7 styles
import "framework7/css/bundle/rtl";

import "./style.css";
import "material-icons";
import "framework7-icons";

Framework7.request.setup({
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "X-CSRF-TOKEN": $$('meta[name="csrf-token"]').attr("content")

    },
});

// Init Framework7-React plugin
Framework7.use(Framework7React);
// Framework7.use(Framework7Keypad);

const root = createRoot(document.getElementById("app"));
root.render(<App />);
