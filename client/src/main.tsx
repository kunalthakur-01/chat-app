import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./context/UserContext";
import ContactContextProvider from "./context/ContactContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <UserContextProvider>
    <ContactContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContactContextProvider>
  </UserContextProvider>
);
