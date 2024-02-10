import React from "react";
import ReactDOM from "react-dom/client";
import { SettingsProvider } from "./context";
import App from "./App.jsx";
import "/src/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </React.StrictMode>,
);
