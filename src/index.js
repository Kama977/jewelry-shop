import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./Language/i18n";
import "react-toastify/dist/ReactToastify.css";
import { DarkModeProvider } from "./GlobalContext/Theme";
import Toptobtn from "./Components/Toptobtn";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DarkModeProvider>
    <Toptobtn />
    <App />
  </DarkModeProvider>
);
