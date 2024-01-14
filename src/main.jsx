import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.jsx";
import "./styles/index.css";
// import { ApiProvider } from "./context/ApiProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        {/* <ApiProvider> */}
          <App />
        {/* </ApiProvider> */}
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
