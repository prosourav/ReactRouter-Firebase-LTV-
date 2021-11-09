import { createContext, useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp";
import Destination from "./components/Destination/Destination";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { firebase } from "./firebase.config";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    error: "",
    message: "",
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/destination/:name"
            element={
              <PrivateRoute>
                <Destination />{" "}
              </PrivateRoute>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/*" element={<h1> Error</h1>} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
