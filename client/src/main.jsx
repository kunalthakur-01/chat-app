import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import ContactContextProvider from "./context/ContactContext";
import { UserContextProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    {/* <ContactContextProvider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </ContactContextProvider> */}
  </UserContextProvider>
);