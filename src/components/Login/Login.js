import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { UserContext } from "../../App";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  // location is null
  console.log("location from", location);
  console.log("form login", from);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleSignUp = () => {
    navigate("/Signup");
  };

  const handleLogin = () => {
    const newLogged = { ...user };
    newLogged.email = true;
    setLoggedInUser(newLogged);
    navigate(from, { replace: true });

    // here i used firebase 9 which is working great but i didnt use ,it will work great

    // const auth = getAuth();
    // createUserWithEmailAndPassword(auth, user.email, user.password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;

    //     navigate(from.pathname);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });
  };

  const handleChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };
  console.log("user:", user);

  return (
    <div>
      <h1>This is Login page</h1>

      <input
        type="email"
        value={user.email}
        name="email"
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        value={user.password}
        name="password"
        onChange={handleChange}
      />
      <br />
      <button onClick={handleLogin}>Login</button>

      <button onClick={handleSignUp}>Signup</button>
    </div>
  );
};

export default Login;
