import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const PublickRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const location = useLocation();
  if (currentUser) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
};
export default PublickRoute;
