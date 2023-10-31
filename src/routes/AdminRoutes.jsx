// RUTAS PRIVADAS DE ADMIN
import { Routes, Route, Navigate } from "react-router-dom";
// import { Navbar } from "../components/layout/Navbar";
import { UserList } from "../pages/admin/UserList";
import { AdminDashboard } from "../pages/admin/AdminDashboard";
import { LandingPage } from "../pages/home/LandingPage";
import { useAuth } from "../hooks/useAuth";

import { UserToken } from "../pages/userPages/UserToken";
import { PageUserChildData } from "../pages/userPages/PageUserChildData";
import { PageIndependenceQuestions } from "../pages/userPages/PageIndependenceQuestions";
import { PageAbilityFeeding } from "../pages/userPages/PageAbilityFeeding";
import { PageUserResult } from "../pages/userPages/PageUserResult";
import { PageAbilityGrooming } from "../pages/userPages/PageAbilityGrooming";
import { PageAbilityDressing } from "../pages/userPages/PageAbilityDressing";
import { PageHabitFeeding } from "../pages/userPages/PageHabitFeeding";
import { PageHabitSleeping } from "../pages/userPages/PageHabitSleeping";
import PageResponsability from "../pages/userPages/PageResponsability";

export function AdminRoutes() {
  let { user } = useAuth();
  
  return (
    <>
      <Routes>
        {user === "admin" ? (
          <>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/list" element={<UserList />} />
            <Route path="/inicio" element={<LandingPage />} />
            <Route path="/*" element={<Navigate to="/admin" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<UserToken />} />
            <Route path="/personales" element={<PageUserChildData />} />
            <Route path="/token" element={<UserToken />} />
            <Route path="/independencia" element={<PageIndependenceQuestions />} />
            <Route path="/habilidades-aseo" element={<PageAbilityGrooming />} />
            <Route path="/habilidades-vestido" element={<PageAbilityDressing />} />
            <Route path="/habilidades-alimentacion" element={<PageAbilityFeeding />} />
            <Route path="/habitos-alimentacion" element={<PageHabitFeeding />} />
            <Route path="/habitos-dormir" element={<PageHabitSleeping />} />
            <Route path="/responsabilidades" element={<PageResponsability />} />
            <Route path="/resultados" element={<PageUserResult />} />
            <Route path="/*" element={<Navigate to="/token" />} />
          </>
        )}
      </Routes>
    </>
  );
}
