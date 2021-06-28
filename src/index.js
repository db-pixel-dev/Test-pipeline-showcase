// Support polyfills for IE browsers
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "core-js/stable";

// Import environment configurations
import { config } from "dotenv";

// Load environment variables
config()

// Import react engine
import React from "react";
import ReactDOM from "react-dom";

// Import local application components
import App from "App";
import AppContext from "contexts/AppContext";
import GlobalStyles from "globalStyles";

// Render core application services
ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
        <AppContext.Provider>
            <App />
        </AppContext.Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
