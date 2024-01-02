import React from "react";

import {createRoot} from 'react-dom/client';
import store from "./redux/store";
import {Provider} from "react-redux"
import App from "./App";
import Theme from "./Theme";

const root = createRoot(document.getElementById("admin_root") as HTMLElement);
root.render(<React.StrictMode>
    <Theme>
        <Provider store={store} >
        <App />
        </Provider>
    </Theme>
</React.StrictMode>)