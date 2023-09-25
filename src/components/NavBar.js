import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [active, setActive] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActive("Home");
    }
    if (location.pathname === "/user/add") {
      setActive("AddUser");
    }
  }, [location]);

  return (
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
            <li className="nav-item">
              <Link
                className={`nav-link ${active === "Home" ? "active" : ""}`}
                aria-current="page"
                to={"/"}
                onClick={() => setActive("Home")}
              >
                Home
              </Link>
            </li>
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
