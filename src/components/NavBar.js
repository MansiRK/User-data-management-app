import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  // State to track the active link in the navigation
  const [active, setActive] = useState("Home");

  // Get the current location using React Router's useLocation hook
  const location = useLocation();

  // Use useEffect to update the active link based on the current location
  useEffect(() => {
    // Check if the current location is the homepage ("/")
    if (location.pathname === "/") {
      setActive("Home"); // Set "Home" as active
    }
    // Check if the current location is the "Add User" page ("/user/add")
    if (location.pathname === "/user/add") {
      setActive("AddUser"); // Set "AddUser" as active
    }
  }, [location]); // This effect will run whenever the location changes

  return (
    // Navigation bar HTML structure
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid navbar-container">
        <Link className="navbar-brand" to={"/"}>
          User Data
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            {/* Home Link */}
            <li className="nav-item">
              <Link
                className={`nav-link ${active === "Home" ? "active" : ""}`}
                aria-current="page"
                to={"/"}
                onClick={() => setActive("Home")} // Update active link on click
              >
                Home
              </Link>
            </li>
            {/* Add User Link */}
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  active === "AddUser" ? "active" : "nav-link"
                }`}
                to={"/user/add"}
              >
                Add User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
