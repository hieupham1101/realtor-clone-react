import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../pages/hooks/useAuthStatus";

const PrivateRouter = () => {
  const { logIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <h1>Loading...</h1>;
  }
  return logIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRouter;
