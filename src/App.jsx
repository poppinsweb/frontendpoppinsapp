import { useAuth } from "./context/AuthProvider";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/ui/Navbar";
import UserList from "./pages/admin/UserList";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateUser from "./pages/admin/CreateUser";
import LandingPage from "./pages/home/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import IndependencePage from "./pages/cards/IndependencePage";
import PageChildData from "./pages/userPages/PageChildData";
import EvaluationResultPage from "./pages/cards/EvaluationResultPage";
import { UserToken } from "./pages/userPages/UserToken";
import Cart from "./pages/userPages/CartPage";
import { RegisterUser } from "./components/cart/Register";
import { Payment } from "./components/cart/Payment";
import { Construction } from "./components/home/Construction";

export default function App() {
  const { user } = useAuth();
  // user ? console.log(user.admin) : console.log("no user");
  return (
    <>
      <Navbar />
      {user && user.admin === true ? (
        <Routes>
          <Route path="/lista" element={<UserList />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/crear" element={<CreateUser />} />
          <Route path="/personales" element={<PageChildData />} />
          <Route path="/encuesta" element={<IndependencePage />} />
          {/* <Route path="/habilidades-aseo" element={<SkillsGroomingPage />} />
          <Route path="/habilidades-vestido" element={<SkillsDressingPage />} />
          <Route path="/habilidades-alimentacion" element={<SkillsFeedingPage />} />
          <Route path="/habitos-alimentacion" element={<HabitsFeedingPage />} />
          <Route path="/habitos-dormir" element={<HabitsSleepingPage />} />
          <Route path="/responsabilidades" element={<ResponsabilitiesPage />} />
          <Route path="/adicionales" element={<AditionalsPage />} /> */}
          <Route path="/resultados" element={<EvaluationResultPage />} />
          <Route path="/token" element={<UserToken />} />
          {/* <Route path="/*" element={<Navigate to="/" />} /> */}
        </Routes>
      ) : (
        <Routes></Routes>
      )}
      {user && user.admin === false ? (
        <Routes>
          <Route path="/personales" element={<PageChildData />} />
          <Route path="/independencia" element={<IndependencePage />} />
          <Route path="/resultados" element={<EvaluationResultPage />} />
          <Route path="/token" element={<UserToken />} />
          {/* <Route path="/*" element={<Navigate to="/personales" />} /> */}
        </Routes>
      ) : (
        <Routes></Routes>
      )}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/pago" element={<Payment />} />
        {/* <Route path="/*" element={<Navigate to="/login" />} /> */}
      </Routes>
    </>
  );
}
