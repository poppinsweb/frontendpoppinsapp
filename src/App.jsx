import React from "react";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import LandingPage from "./pages/home/LandingPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserList from "./pages/admin/UserList";
import AdminCreateUser from "./pages/admin/CreateUser";
import PrivateRoute from "./routes/PrivateRoute";
import { Navbar } from "./components/ui/Navbar";

export default function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/admin"
              element={<AdminDashboard />} 
              adminOnly={true} 
            />
            <Route
              path="/lista"
              element={<UserList />} 
              adminOnly={true} 
            />
            <Route
              path="/crear"
              element={<AdminCreateUser />}
              adminOnly={true}
            />
            {/* Añade más rutas según sea necesario */}
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}
