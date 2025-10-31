import { Navigate, Outlet, useLocation } from "react-router";

import { useAuthStore } from "../store/auth";

export function ProtectedRoute() {
  const session = useAuthStore((s) => s.session);
  const isLoading = useAuthStore((s) => s.isLoading);
  const location = useLocation();

  if (isLoading) {
    // TODO: Replace this with a cool thingy
    return <div>Loading...</div>;
  }

  if (!session) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
