// RUTAS PRIVADAS DE ADMIN
// import { Routes, Route, Navigate } from "react-router-dom";
// import { UserList } from "../pages/admin/UserList";
// import { AdminDashboard } from "../pages/admin/AdminDashboard";
// import { LandingPage } from "../pages/home/LandingPage";
// // import { useAuth } from "../context/AuthProvider";

// import { UserToken } from "../pages/userPages/UserToken";
// import { PageUserChildData } from "../pages/userPages/PageUserChildData";
// import { PageIndependence } from "../pages/userPages/PageIndependence";
// import { PageSkillsFeeding } from "../pages/userPages/PageSkillsFeeding";
// import { PageUserResult } from "../pages/userPages/PageUserResult";
// import { PageSkillsGrooming } from "../pages/userPages/PageSkillsGrooming";
// import { PageSkillsDressing } from "../pages/userPages/PageSkillsDressing";
// import { PageHabitsFeeding } from "../pages/userPages/PageHabitsFeeding";
// import { PageHabitsSleeping } from "../pages/userPages/PageHabitsSleeping";
// import { PageHabitsResponsability } from "../pages/userPages/PageHabitsResponsability";
// // import { CreateUser } from "../pages/admin/CreateUser";
// import { PageUserAdultData } from "../pages/userPages/PageUserAdultData";

// export function AdminRoutes() {
//   // const { user } = useAuth();
  
//   return (
//     <>
//       <Routes>
//         {/* { user && user.rol === "admin" ? ( */}
//            <>
//             <Route path="/inicio" element={<LandingPage />} />
//              <Route path="/admin" element={<AdminDashboard />} />
//             {/* <Route path="/crear" element={<CreateUser />} /> */}
//             <Route path="/lista" element={<UserList />} />

//             <Route path="/adulto" element={<PageUserAdultData />} />
//             <Route path="/personales" element={<PageUserChildData />} />
//             <Route path="/token" element={<UserToken />} />
//             <Route path="/independencia" element={<PageIndependence />} />
//             <Route path="/habilidades-aseo" element={<PageSkillsGrooming />} />
//             <Route path="/habilidades-vestido" element={<PageSkillsDressing />} />
//             <Route path="/habilidades-alimentacion" element={<PageSkillsFeeding />} />
//             <Route path="/habitos-alimentacion" element={<PageHabitsFeeding />} />
//             <Route path="/habitos-dormir" element={<PageHabitsSleeping />} />
//             <Route path="/responsabilidades" element={<PageHabitsResponsability />} />
//             <Route path="/resultados" element={<PageUserResult />} />

//              <Route path="/*" element={<Navigate to="/admin" />} />
//            </>
//         {/* ) : ( */}
//            <>

//         {/* USUARIOS REGISTRADOS */}
//              <Route path="/inicio" element={<LandingPage />} />
//             <Route path="/personales" element={<PageUserChildData />} />
//             <Route path="/token" element={<UserToken />} />
//             <Route path="/encuesta" element={<PageIndependence />} />
//             <Route path="/habilidades-aseo" element={<PageSkillsGrooming />} />
//             <Route path="/habilidades-vestido" element={<PageSkillsDressing />} />
//             <Route path="/habilidades-alimentacion" element={<PageSkillsFeeding />} />
//             <Route path="/habitos-alimentacion" element={<PageHabitsFeeding />} />
//             <Route path="/habitos-dormir" element={<PageHabitsSleeping />} />
//             <Route path="/responsabilidades" element={<PageHabitsResponsability/>} />
//             <Route path="/resultados" element={<PageUserResult />} />
//           </>
//         {/* )} */}
//        </Routes>
//     </>
//   );
// }
