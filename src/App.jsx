import { useAuth } from "./context/AuthProvider";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/ui/Navbar";
import LandingPage from "./pages/home/LandingPage";
import LoginPage from "./pages/auth/LoginPage";
import Cart from "./pages/userPages/CartPage";
import { RegisterUser } from "./components/cart/Register";
import { Payment } from "./components/cart/Payment";
import { Construction } from "./components/home/Construction";
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";
import PrivateRoute from "./routes/PrivateRoute";
import { PageInfoEncuesta } from "./pages/home/landingPages/pageInfoEncuesta";
import { Materiales } from "./pages/home/landingPages/Materiales";
import { Footer } from "./components/home/Footer";

export default function App() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      {user && user.admin ? (
        <AdminRoutes />
      ) : (
        user && <UserRoutes />
      )}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/infoencuesta" element={<PageInfoEncuesta />} />
        <Route path="/materiales" element={<Materiales />} />
        <Route path="/login" element={<PrivateRoute element={<LoginPage />} redirectTo="/" />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/pago" element={<Payment />} />
      </Routes>
      <Footer />
    </>
  );
}

