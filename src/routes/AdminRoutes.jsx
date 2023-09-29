// RUTAS PRIVADAS DE ADMIN
import { useAuth } from "../context/authContext";
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { UserList } from "../pages/admin/UserList";
import { AdminDashboard } from "../pages/admin/AdminDashboard";
import { LandingPage } from "../pages/home/LandingPage";

export function AdminRoutes({ type, component }) {
  const { user } = useAuth();
  if (!user || user.type !== type) {
    return <Navigate to="/login" />
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/list' element={<UserList />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path='/*' element={<Navigate to='/admin' />} />
      </Routes>
    </>
  );
}
