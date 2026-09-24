import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../../stores/useAuthStore";

const ProtectedRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  // if not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to="./login" replace />;
  }

  // If authenticated, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;
