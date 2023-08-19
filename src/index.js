import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "./chakraTheme";

import "./style/index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <Router>
                <App />
            </Router>
        </ChakraProvider>
    </React.StrictMode>
);
