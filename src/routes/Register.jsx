/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { registerAdmin } from "../redux/authentication/actions";
import styles from "./Register.module.css";
import Footer from "../components/common/Footer";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: "",
      userName: "",
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => console.log(this.state)
    );
  };

  signUp = () => {
    const { userName, userType, email, password } = this.state;
    const { register } = this.props;
    register({ userName, userType, email, password });
  };

  render() {
    return (
      <div className={styles.top}>
        <div className="text-center my-5">
          <div className={styles.regText}>REGISTRATION</div>
        </div>
        <div className="d-flex flex-md-row flex-column-reverse my-2">
          <div className="col-md-6 col-12 border-right">
            <div className="text-center d-flex my-5">
              <div className="m-2">Register as:</div>
              <div className="col mx-2">
                <select
                  className="custom-select"
                  name="userType"
                  onChange={this.handleChange}
                >
                  <option value="">choose category</option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
            <div className="my-4">
              <label className="ml-2" htmlFor="username">
                Enter Username
                <input
                  className="form-control"
                  id="username"
                  name="userName"
                  type="text"
                  onChange={this.handleChange}
                  style={{ width: "365px" }}
                />
              </label>
            </div>
            <div className="my-4">
              <label className="ml-2" htmlFor="email">
                Email id
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  type="text"
                  onChange={this.handleChange}
                  style={{ width: "365px" }}
                />
              </label>
            </div>
            {/* <div className="my-4">
              <label className="ml-2" htmlFor="username">
                Enter Security code (*for admin)
                <input
                  className="form-control"
                  id="username"
                  type="text"
                  style={{ width: "365px" }}
                />
              </label>
            </div> */}
            <div className="my-4">
              <label className="ml-2" htmlFor="pass">
                Password
                <input
                  className="form-control"
                  id="pass"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  style={{ width: "365px" }}
                />
              </label>
            </div>
            <div className="text-center py-5">
              <Link to="/booking/userdetails">
                <button type="button" className="btn" onClick={this.signUp}>
                  Sign Up
                </button>
              </Link>
            </div>
          </div>

          <div className="col-md-6 col-12">
            <img
              className={styles.regIcon}
              src="/images/regIcon.png"
              alt="regIcon"
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Register.propTypes = {
  register: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    register: payload => dispatch(registerAdmin(payload))
  };
};

export default connect(null, mapDispatchToProps)(Register);
