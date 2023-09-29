import { AuthProvider, authContext, useAuth } from "./context/authContext"; // Componente del context
import { Navigate, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { VisitorRoutes } from "./routes/VisitorRoutes";
import "./styles/App.css";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminRoutes } from "./routes/AdminRoutes";
import { useContext } from "react";

function App() {
  // const { login } = useContext(useAuth)
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes> 
          <Route path="/*" element={<VisitorRoutes />} />
          
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
