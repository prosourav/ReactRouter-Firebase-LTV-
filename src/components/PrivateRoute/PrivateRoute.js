import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { UserContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const location = useLocation();

  console.log("location from private route: ", location);

  return loggedInUser.email ? (
    children
  ) : (
    <Navigate replace to="/login" state={{ from: location }} />
  );
};

export default PrivateRoute;
