/** @format */

import React from "react";
import { Redirect } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { loginAdmin } from "../redux/authentication/actions";
import styles from "./Register.module.css";
import Footer from "../components/common/Footer";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  signIn = async () => {
    const { email, password } = this.state;
    const { signInAdmin } = this.props;
    await signInAdmin({ email, password });
  };

  render() {
    const { isAuth1 } = this.props;
    if (isAuth1 === true) {
      return <Redirect to="/dash" />;
    }

    return (
      <div className={styles.login}>
        <div className="text-center my-3">
          <div className={styles.logText}>SIGN IN</div>
        </div>

        <div className="text-center py-5">
          <button
            className="btn"
            style={{ background: "#DF0016" }}
            type="button"
          >
            <img src="/images/loginG.png" alt="google-sign-in" />
          </button>
        </div>
        <div className="py-4 d-flex justify-content-center ">
          <div className="col-5">
            <hr className="bg-dark" />
          </div>
          <div className="col-1 text-center h5">OR</div>
          <div className="col-5">
            <hr className="bg-dark" />
          </div>
        </div>

        <div className=" py-5">
          <div className="my-2 text-center">
            <label className="ml-2 text-left" htmlFor="email">
              Email
              <input
                className="form-control"
                id="email"
                name="email"
                type="email"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="my-2 text-center">
            <label className="ml-2 text-left" htmlFor="password">
              Password
              <input
                className="form-control"
                id="password"
                name="password"
                type="password"
                onChange={this.handleChange}
              />
            </label>
          </div>
        </div>
        <div className="text-center py-2">
          {/* <Link to="/booking/userdetails"> */}
          <button type="button" className="btn" onClick={this.signIn}>
            Log in
          </button>
          {/* </Link> */}
        </div>
        <Footer />
      </div>
    );
  }
}

Login.propTypes = {
  signInAdmin: PropTypes.func.isRequired,
  isAuth1: PropTypes.bool.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    signInAdmin: payload => dispatch(loginAdmin(payload))
  };
};

const mapStateToProps = state => {
  return {
    isAuth1: state.authReducer.isAuth
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
