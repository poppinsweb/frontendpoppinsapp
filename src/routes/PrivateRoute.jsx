import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const PrivateRoute = ({ element: Component, adminOnly, ...rest }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <Navigate to='/login' replace />
  }

  if (adminOnly && !user.admin) {
    return <Navigate to="/" replace />;
  }

  return <Route {...rest} element={<Component />} />;
};

export default PrivateRoute;
