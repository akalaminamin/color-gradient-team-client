import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <h3>Loading....</h3>;
  }
  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
export default PrivateRoute;
