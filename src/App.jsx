import { AuthProvider } from './context/AuthContext'; // Componente del context
import { Navigate, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { UserToken } from "./pages/userPages/UserToken";
import { VisitorRoutes } from "./routes/VisitorRoutes";
import "./styles/App.css";


function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes> 
          <Route path="/*" element={<VisitorRoutes />} />

          <Route exact path='/token' element={<UserToken />} />

        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
