import App from "@renderer/components/App.jsx";
import React from "react";
import store from "@renderer/storage/store.js";

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
