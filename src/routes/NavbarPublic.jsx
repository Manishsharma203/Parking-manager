/** @format */

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./NavBarPublic.module.css";

const NavBar = ({ location: { pathname } }) => {
  if (pathname.startsWith("/dash")) return null;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <Link to="/">
          <img
            className={`navbar-brand ml-3 ${styles.logo}`}
            src="/images/logo.png"
            alt="log"
          />
          <span className={`${styles.header} mx-2`}>iSP</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="mx-4 nav-item active">
              <Link to="/">
                <button
                  type="button"
                  className="btn btn-outline-dark my-1 col-sm-12"
                >
                  Home
                </button>
              </Link>
            </li>
            <li className="mx-4 nav-item active">
              <Link to="/register">
                <button
                  type="button"
                  className="btn btn-outline-dark my-1 col-sm-12"
                >
                  Register
                </button>
              </Link>
            </li>
            <li className="mx-4 nav-item active">
              <Link to="/dash">
                <button
                  type="button"
                  className="btn btn-outline-dark my-1 col-sm-12"
                >
                  Admin
                </button>
              </Link>
            </li>
            <li className="mx-4 nav-item active">
              <Link to="/login">
                <button
                  type="button"
                  className="btn btn-outline-dark my-1 col-sm-12"
                >
                  Log In
                </button>
              </Link>
            </li>
            <li className="mx-4 nav-item active">
              <Link to="/checkout">
                <button
                  type="button"
                  className="btn btn-outline-dark my-1 col-sm-12"
                >
                  Checkout
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

NavBar.propTypes = {
  location: PropTypes.string
};

NavBar.defaultProps = {
  location: ""
};

export default NavBar;
