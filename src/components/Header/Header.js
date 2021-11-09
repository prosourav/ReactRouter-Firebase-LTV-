import React, { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";

const Header = () => {
  // const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  // console.log(setLoggedInUser);
  // const history = useNavigate();
  // const handleOnClick = () => {
  //   const url = "/login";
  //   history.push(url);
  // };
  return (
    <div className="heading">
      <Navbar expand="lg" className="container">
        MassTransit
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Link to="/home" className="mr-5 size" style={{ padding: "15px" }}>
              Home
            </Link>
            <Link
              to="/destination"
              className="mr-5 size"
              style={{ padding: "15px" }}
            >
              Destination
            </Link>
            <Link to="/blog" className="mr-5 size" style={{ padding: "15px" }}>
              Blog
            </Link>
            <Link
              to="/contact"
              className="mr-5 size"
              style={{ padding: "15px" }}
            >
              Contact
            </Link>
            <Link to="/Login" className="mr-5 size" style={{ padding: "15px" }}>
              Login
            </Link>
            <Link to="/Signup" className="mr-5 size">
              Signup
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
