// RUTAS PRIVADAS DE ADMIN
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { UserList } from "../pages/admin/UserList";
import { AdminFilterPage } from "../pages/admin/AdminFilterPage";
import { LandingPage } from "../pages/home/LandingPage";

export function AdminRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='admin' element={<AdminFilterPage />} />
        <Route path='list' element={<UserList />} />
        <Route path="landing" element={<LandingPage />} />
        <Route path='/*' element={<Navigate to='/admin' />} />
      </Routes>
    </>
  );
}
