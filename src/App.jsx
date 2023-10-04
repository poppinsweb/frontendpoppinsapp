import { useContext } from "react";
import { AuthProvider, AuthContext } from "./context/AuthProvider"; // Componente del context
import { Navigate, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import "./styles/App.css";

import { LandingPage } from "./pages/home/LandingPage";
import { ConstructionPage } from "./pages/home/landingPages/ConstructionPage";
import { UserAuthPage } from "./pages/auth/UserAuthPage";

import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import { AdminRoutes } from "./routes/AdminRoutes";
import { AdminDashboard } from "./pages/admin/AdminDashboard";


function App() {
  const { login } = useContext(AuthContext)

  return (
    <>
        <Navbar />
        <Routes>
          {
            login.isAuth ? (
              <Route path="/admin" index element={<AdminRoutes />} />
            ) :
            <>
              <Route path="/*" index element={<LandingPage />} />
              <Route path="/construction" element={<ConstructionPage />} />
              <Route path="/login" element={<UserAuthPage />} />
            </>
          }
          
          
          
          
          
      

          

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
