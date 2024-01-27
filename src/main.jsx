import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.jsx";
import "./styles/index.css";
import { ChildIDProvider } from "./context/ChildIDContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ChildIDProvider>
          <App />
        </ChildIDProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
