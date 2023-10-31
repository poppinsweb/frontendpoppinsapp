import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider"; // Componente del context
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import "./styles/App.css";

import { LandingPage } from "./pages/home/LandingPage";
import { ConstructionPage } from "./pages/home/landingPages/ConstructionPage";
import { UserAuthPage } from "./pages/auth/UserAuthPage";

import { AdminRoutes } from "./routes/AdminRoutes";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <Routes>
        {user ? (
          <>
            <Route path="/*" element={<AdminRoutes />} />
            <Route path="/" index element={<LandingPage />} />
            <Route path="/construction" element={<ConstructionPage />} />
          </>
        ) : (
          <>
            <Route path="/" index element={<LandingPage />} />
            <Route path="/construction" element={<ConstructionPage />} />
            <Route path="/*" element={<UserAuthPage />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
