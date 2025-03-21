import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.jsx";
import "./styles/index.css";
import { EvaluationProvider } from "./context/EvaluationProvider.jsx";
import { ChildProvider } from "./context/ChildProvider.jsx";
import { EvaluationTokenProvider } from "./context/EvaluationTokenProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ChildProvider>
        <EvaluationProvider>
          <EvaluationTokenProvider>
            <App />
          </EvaluationTokenProvider>
        </EvaluationProvider>
        </ChildProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
