import React, { useContext } from "react";
import { Navigate, Route, useLocation } from "react-router";
import { UserContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const location = useLocation();

  return loggedInUser.email ? children : <Navigate replace to="/login" />;
};

export default PrivateRoute;
