import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminCreateUser from "../pages/admin/CreateUser";
import UserList from "../pages/admin/UserList";
import LoginPage from "../pages/auth/LoginPage";
import LandingPage from "../pages/home/LandingPage";

const routes = [
  { path: '/', component: LandingPage, exact: true },
  { path: '/login', component: LoginPage },
  { path: '/admin', coomponent: AdminDashboard, adminOnly: true },
  { path: '/create', coomponent: AdminCreateUser, adminOnly: true },
  { path: '/list', coomponent: UserList, adminOnly: true }
];

export default routes;
