// import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
// import { AuthContext, useAuth } from "./context/AuthProvider";
import { Navbar } from "./components/ui/Navbar";
import { LandingPage } from "./pages/home/LandingPage";
import { ConstructionPage } from "./pages/home/landingPages/ConstructionPage";
import { UserAuthPage } from "./pages/auth/UserAuthPage";
// import { AdminRoutes } from "./routes/AdminRoutes";
import { AdminDashboard } from "./pages/admin/AdminDashboard";

import "./styles/App.css";

import IndependencePage from "./pages/cards/IndependencePage";
import SkillsGroomingPage from "./pages/cards/SkillsGroomingPage";
import SkillsDressingPage from "./pages/cards/SkillsDressingPage";
import SkillsFeedingPage from "./pages/cards/SkillsFeedingPage";
import HabitsFeedingPage from "./pages/cards/HabitsFeedingPage";
import HabitsSleepingPage from "./pages/cards/HabitsSleepingPage";
import ResponsabilitiesPage from "./pages/cards/ResponsabilitiesPage";
import AditionalsPage from "./pages/cards/AditionalsPage";
import UserList from "./pages/admin/UserList";
import PageChildData from "./pages/userPages/PageChildData";

function App() {
  // const { user } = useAuth();
  // console.log(user.rol);

  return (
    <>
      <Navbar />
      <Routes>
        {/* {user ? ( */}
          <>
            {/* <Route path="/*" element={<AdminRoutes />} /> */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/lista" element={<UserList />} />

            <Route path="/" index element={<LandingPage />} />
            <Route path="/construction" element={<ConstructionPage />} />
          {/* </> */}
        {/* ) : ( */}
          {/* <> */}
            <Route path="/" index element={<LandingPage />} />
            <Route path="/construction" element={<ConstructionPage />} />
            <Route path="/" element={<UserAuthPage />} />
            <Route path="/personales" element={<PageChildData />} />
            <Route path="/independencia" element={<IndependencePage />} />
            <Route path="/habilidades-aseo" element={<SkillsGroomingPage />} />
            <Route path="/habilidades-vestido" element={<SkillsDressingPage />} />
            <Route path="/habilidades-alimentacion" element={<SkillsFeedingPage />} />
            <Route path="/habitos-alimentacion" element={<HabitsFeedingPage />} />
            <Route path="/habitos-dormir" element={<HabitsSleepingPage />} />
            <Route path="/responsabilidades" element={<ResponsabilitiesPage />} />
            <Route path="/adicionales" element={<AditionalsPage />} />

          </>
        {/* )} */}
      </Routes>
    </>
  );
}

export default App;
