/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading, setLoading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <progress className="progress w-56"></progress>;
    // setLoading(false);
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

//TODO - navigate take upore uthate hobe

export default PrivateRoute;
