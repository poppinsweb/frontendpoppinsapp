import { Routes, Route, Navigate} from "react-router-dom";
import { LandingPage } from "../pages/home/LandingPage";
import { ConstructionPage } from "../pages/home/landingPages/ConstructionPage";
import { UserAuthPage } from "../pages/auth/UserAuthPage";

export function VisitorRoutes() {
  return (
    <Routes>
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/login" element={<UserAuthPage />} />
      <Route path="/construction" element={<ConstructionPage />} />
      <Route path='/*' element={<Navigate to='/landing' />} />
    </Routes>
  )
}
