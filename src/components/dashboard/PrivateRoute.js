import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const firebaseReducer = useSelector((state) => state.firebase.auth);
  console.log(firebaseReducer);
  
  const { isLoaded, isEmpty } = firebaseReducer;
  let location = useLocation();
  if (isLoaded === null) {
    return <h3>loading....</h3>;
  }
  if (isEmpty) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
export default PrivateRoute;
