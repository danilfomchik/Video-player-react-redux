import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./app/store";

import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

import chakraTheme from "./style/chakraTheme";

import "./style/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ChakraProvider theme={chakraTheme}>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </ChakraProvider>
);
