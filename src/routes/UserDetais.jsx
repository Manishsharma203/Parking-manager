/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./UserDetails.module.css";
import Footer from "../components/common/Footer";
import { add1 } from "../redux/userActions";

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userCategory: "",
      mobile: "",
      vehicleNumber: "",
      vehicleType: "",
      uid: ""
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  clickHandler = () => {
    const x = Math.floor(Math.random() * 999) + 100;
    const { vehicleNumber } = this.state;
    this.state.uid = x + vehicleNumber;
    const { add } = this.props;
    add(this.state);
  };

  render() {
    const { vehicleType } = this.state;
    return (
      <div>
        <div className="d-flex mt-5">
          <div className="ml-sm-5">
            <img
              className={`${styles.img}`}
              src="/images/placeholder.png"
              alt="img"
            />
          </div>
          <div className={`${styles.htext} col ml-sm-2 mt-3`}>Welcome User</div>
        </div>

        <div className="d-flex flex-md-row flex-column-reverse my-2">
          <div className="col-md-6 col-12 border-right">
            <div className="container m-5">
              <div className="row pt-4">
                <div className={`${styles.number} text-center`}>1</div>
                <div className="h2 my-2 mx-5">User Details</div>
              </div>

              <div className="ml-2 my-4">
                <div>
                  <label className="my-2" htmlFor="name">
                    Name
                    <input
                      onChange={this.changeHandler}
                      name="name"
                      className={`${styles.inp} form-control`}
                      id="name"
                      type="text"
                      placeholder="Your Name Here"
                    />
                  </label>
                </div>
                <div className="my-2">User Category:</div>
                <div className={styles.inp}>
                  <select
                    onChange={this.changeHandler}
                    name="userCategory"
                    className="custom-select"
                  >
                    <option value="">choose category</option>
                    <option value="Visitor">Visitor</option>
                    <option value="Employee">Employee</option>
                  </select>
                </div>
              </div>
              <div className="my-4">
                <label className="ml-2" htmlFor="mobile">
                  Mobile Number
                  <input
                    onChange={this.changeHandler}
                    name="mobile"
                    className={`${styles.inp} form-control`}
                    id="mobile"
                    type="text"
                    placeholder="Your Mobile Number"
                  />
                </label>
              </div>
              <div>
                <label className="ml-2" htmlFor="vehicleNumber">
                  Vehicle Number
                  <input
                    onChange={this.changeHandler}
                    name="vehicleNumber"
                    className={`${styles.inp} form-control`}
                    id="vehicleNumber"
                    type="text"
                    placeholder="Your Vehicle Number"
                  />
                </label>
              </div>

              <div className="ml-2 my-4">
                <div className="my-2">Vehicle Type:</div>
                <div className={styles.inp}>
                  <select
                    onChange={this.changeHandler}
                    name="vehicleType"
                    className="custom-select"
                  >
                    <option value="">choose category</option>
                    <option value="Two Wheelers">Two Wheelers</option>
                    <option value="Light Duty Vehicle">
                      Light-Duty Vehicle
                    </option>
                    <option value="Heavy Duty Vehicle">
                      Heavy-Duty Vehicle
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* <div className="container m-5">
              <div className="row pt-4">
                <div className={`${styles.number} text-center`}>2</div>
                <div className="h2 my-2 mx-5">Time In</div>
              </div>
              <div className="ml-2 my-4">
                <label htmlFor="dateIn">
                  Select the date:
                  <input
                    className={`${styles.inp} form-control`}
                    type="date"
                    id="dateIn"
                  />
                </label>
              </div>
              <div className="ml-2 my-4">
                <label htmlFor="dateIn">
                  Select the Time:
                  <input
                    className={`${styles.inp} form-control`}
                    type="time"
                    id="dateIn"
                  />
                </label>
              </div>
            </div> */}
          </div>

          <div className="col-md-6 col-12">
            <img
              className={styles.carIcon}
              src="/images/carpark.jpg"
              alt="carpark"
            />
          </div>
        </div>
        <div className="text-center my-5">
          <Link to="/booking/parkingslots">
            <button
              onClick={this.clickHandler}
              type="button"
              className="btn btn-info"
              disabled={!vehicleType}
            >
              PROCEED
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}
// const mapStateToProps = (state) => ({

// })

UserDetails.propTypes = {
  add: PropTypes.func.isRequired
};
const mapDispatchToProps = dispatch => {
  return {
    add: a => dispatch(add1(a))
  };
};

export default connect(null, mapDispatchToProps)(UserDetails);
