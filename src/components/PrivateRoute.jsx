import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function PrivateRoute({ element }) {
  const isAuthenticated = useSelector((state) => state.Seller.isLoggedIn);

  return isAuthenticated ? element : <Navigate to={"/login"} />;
}

export default PrivateRoute;
