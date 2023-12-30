import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthProvider";
import { Navbar } from "./components/ui/Navbar";
import { LandingPage } from "./pages/home/LandingPage";
import { ConstructionPage } from "./pages/home/landingPages/ConstructionPage";
import { UserAuthPage } from "./pages/auth/UserAuthPage";
import { AdminRoutes } from "./routes/AdminRoutes";
import "./styles/App.css";

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
