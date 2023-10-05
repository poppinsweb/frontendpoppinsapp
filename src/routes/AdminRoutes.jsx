// RUTAS PRIVADAS DE ADMIN
import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { UserList } from "../pages/admin/UserList";
import { AdminDashboard } from "../pages/admin/AdminDashboard";
import { LandingPage } from "../pages/home/LandingPage";
import { useAuth } from "../hooks/useAuth";

import { UserToken } from "../pages/userPages/UserToken";
import { PageUserChildData } from "../pages/userPages/PageUserChildData";
import { PageIndependenceQuestions } from "../pages/userPages/PageIndependenceQuestions";
import { PageAbilityQuestions } from "../pages/userPages/PageAbilityQuestions";
import { PageHabitQuestions } from "../pages/userPages/PageHabitQuestions";
import { PageUserResult } from "../pages/userPages/PageUserResult";

export function AdminRoutes() {
  let { user } = useAuth();
  // console.log(user);
  if (user && user.email === "ale@mail.com") {
    user = "admin";
    console.log("Es admin");
  } else {
    console.log("No es admin");
  }
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
            <Route
              path="/independencia"
              element={<PageIndependenceQuestions />}
            />
            <Route path="/habilidades" element={<PageAbilityQuestions />} />
            <Route path="/habitos" element={<PageHabitQuestions />} />
            <Route path="/resultados" element={<PageUserResult />} />
            <Route path="/*" element={<Navigate to="/token" />} />
          </>
        )}
      </Routes>
    </>
  );
}
