// RUTAS PRIVADAS DE ADMIN
import { Routes, Route, Navigate } from "react-router-dom";
import { UserList } from "../pages/admin/UserList";
import { AdminDashboard } from "../pages/admin/AdminDashboard";
import { LandingPage } from "../pages/home/LandingPage";
import { useAuth } from "../hooks/useAuth";

import { UserToken } from "../pages/userPages/UserToken";
import { PageUserChildData } from "../pages/userPages/PageUserChildData";
import { PageIndependenceQuestions } from "../pages/userPages/PageIndependenceQuestions";
import { PageSkillsFeeding } from "../pages/userPages/PageSkillsFeeding";
import { PageUserResult } from "../pages/userPages/PageUserResult";
import { PageSkillsGrooming } from "../pages/userPages/PageSkillsGrooming";
import { PageSkillsDressing } from "../pages/userPages/PageSkillsDressing";
import { PageHabitsFeeding } from "../pages/userPages/PageHabitsFeeding";
import { PageHabitsSleeping } from "../pages/userPages/PageHabitsSleeping";
import { PageHabitsResponsability } from "../pages/userPages/PageHabitsResponsability";
import { CreateUser } from "../pages/admin/CreateUser";

export function AdminRoutes() {
  const { userRol } = useAuth();
  
  return (
    <>
      <Routes>
        {userRol && userRol.rol === "admin" ? (
          <>
            <Route path="/inicio" element={<LandingPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/crear" element={<CreateUser />} />
            <Route path="/list" element={<UserList />} />

            <Route path="/personales" element={<PageUserChildData />} />
            <Route path="/token" element={<UserToken />} />
            <Route path="/independencia" element={<PageIndependenceQuestions />} />
            <Route path="/habilidades-aseo" element={<PageSkillsGrooming />} />
            <Route path="/habilidades-vestido" element={<PageSkillsDressing />} />
            <Route path="/habilidades-alimentacion" element={<PageSkillsFeeding />} />
            <Route path="/habitos-alimentacion" element={<PageHabitsFeeding />} />
            <Route path="/habitos-dormir" element={<PageHabitsSleeping />} />
            <Route path="/responsabilidades" element={<PageHabitsResponsability />} />
            <Route path="/resultados" element={<PageUserResult />} />

            <Route path="/*" element={<Navigate to="/admin" />} />
          </>
        ) : (
          <>

        {/* todo el mundo */}
            <Route path="/inicio" element={<LandingPage />} />
            <Route path="/personales" element={<PageUserChildData />} />
            <Route path="/token" element={<UserToken />} />
            <Route path="/independencia" element={<PageIndependenceQuestions />} />
            <Route path="/habilidades-aseo" element={<PageSkillsGrooming />} />
            <Route path="/habilidades-vestido" element={<PageSkillsDressing />} />
            <Route path="/habilidades-alimentacion" element={<PageSkillsFeeding />} />
            <Route path="/habitos-alimentacion" element={<PageHabitFeeding />} />
            <Route path="/habitos-dormir" element={<PageHabitSleeping />} />
            <Route path="/responsabilidades" element={<PageResponsSkills />} />
            <Route path="/resultados" element={<PageUserResult />} />
            {/* <Route path="/*" element={<Navigate to="/token" />} /> */}
          </>
        )}
      </Routes>
    </>
  );
}
