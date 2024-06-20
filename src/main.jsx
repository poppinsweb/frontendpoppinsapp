import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.jsx";
import "./styles/index.css";
import { EvaluationProvider } from "./context/EvaluationProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <EvaluationProvider>
          <App />
        </EvaluationProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
