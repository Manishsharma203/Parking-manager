/** @format */

import React from "react";
import { Link } from "react-router-dom";

// import styles from "./DashboardRoutes.module.css";

const NavBar = () => {
  return (
    <ul className="navbar nav " style={{ backgroundColor: "#75daad" }}>
      <li className="nav-item mr-auto col-sm-12 col-lg-3">
        <Link to="/" className="nav-link">
          <img
            className="navbar-brand"
            src="/images/logo.png"
            alt="log"
            style={{ width: "60px", height: "70px" }}
          />
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dash" style={{ fontSize: "20px" }}>
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link "
          to="/dash/priceeditor"
          style={{ fontSize: "20px" }}
        >
          Price Editor
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link"
          to="/dash/viewbookings"
          style={{ fontSize: "20px" }}
        >
          View Bookings
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link"
          to="/dash/statistics"
          style={{ fontSize: "20px" }}
        >
          Statistics
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
