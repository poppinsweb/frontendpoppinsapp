import { AuthProvider } from './context/authContext'; // Componente del context
import { Navigate, Routes, Route } from "react-router-dom";
import { AdminFilterPage } from "./pages/admin/AdminFilterPage";
import { Navbar } from "./components/layout/Navbar";
import { UserList } from "./pages/admin/UserList";
import { UserToken } from "./pages/userPages/UserToken";
import { LandingPage } from "./pages/home/LandingPage";
import { ConstructionPage } from "./pages/home/landingPages/ConstructionPage";
import { UserAuthPage } from "./pages/auth/UserAuthPage";
import { PageUserChildData } from "./pages/userPages/PageUserChildData";
import { PageIndependenceQuestions } from "./pages/userPages/PageIndependenceQuestions";
import { PageAbilityQuestions } from "./pages/userPages/PageAbilityQuestions";
import { PageHabitQuestions }from "./pages/userPages/PageHabitQuestions";
import { PageUserResult } from "./pages/userPages/PageUserResult";
import { UserRoutes } from "./routes/UserRoutes";


function App() {
  return (
    <>
    <Navbar />
      <AuthProvider>
        <Routes> 
          <Route path="/" element={<LandingPage />} /> 
          <Route path="/construction" element={<ConstructionPage />} />
          <Route path="/login" element={<UserAuthPage />} />
          <Route path="admin" element={<AdminFilterPage />} />
          <Route path="list" element={<UserList />} /> 
          {/* <Route path="/*" element={<Navigate to="/login" />} /> */}
          
        
          <Route path="token" element={<UserToken />} />
          <Route path="/personales" element={<PageUserChildData/>} />
          <Route path="/independencia" element={<PageIndependenceQuestions />} />
          <Route path="/habilidades" element={<PageAbilityQuestions />} />
          <Route path="/habitos" element={<PageHabitQuestions />} />
          <Route path="/resultados" element={<PageUserResult />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
