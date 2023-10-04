import { useContext } from "react";
import { AuthProvider, AuthContext } from "./context/AuthProvider"; // Componente del context
import { Navigate, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import "./styles/App.css";

import { LandingPage } from "./pages/home/LandingPage";
import { ConstructionPage } from "./pages/home/landingPages/ConstructionPage";
import { UserAuthPage } from "./pages/auth/UserAuthPage";

import { AdminRoutes } from "./routes/AdminRoutes";
import { UserRoutes } from "./routes/UserRoutes";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <Routes>
        {user ? (
          <>
            {/* <Route path="/*" element={<AdminRoutes />} /> */}
            <Route path="/*" element={<UserRoutes />} />
            <Route path="/" index element={<LandingPage />} />
            <Route path="/construction" element={<ConstructionPage />} />
          </>
        ) : (
          <>
            <Route path="/*" index element={<LandingPage />} />
            <Route path="/construction" element={<ConstructionPage />} />
            <Route path="/login" element={<UserAuthPage />} />
          </>
        )}

        {/* <Route path="/" element={
          <ProtectedRoutes>
            <Route path="/admin" index element={<AdminDashboard />} />
          </ProtectedRoutes>
          } 
          /> */}
      </Routes>
    </>
  );
}

export default App;
