/** @format */

import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Footer from "../components/common/Footer";
import { checkout, updatefloor } from "../redux/userActions";
import Example from "./reactLoading";

class Bill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clickHandler = e => {
    const { checked, floorspayload, floorsupload } = this.props;
    checked(e);
    floorsupload(floorspayload);
  };

  render() {
    const { checkoutUser } = this.props;
    return (
      <div>
        {Object.keys(checkoutUser).length !== 0 ? (
          <div>
            <div className="m-5">
              <div className="h1">Thank you for visiting</div>
              <div className="h6 my-4">Here is your bill receipt</div>
            </div>
            <div
              className="m-5 border border-dark rounded text-white"
              style={{ background: "#9A5B63" }}
            >
              <div className="offset-1">
                <div className="d-flex">
                  <div className="my-5 col-3">Name:</div>
                  <div className="my-5 col">{checkoutUser.name}</div>
                </div>
                <div className="d-flex">
                  <div className="my-5 col-3">Vehicle Reg. No.:</div>
                  <div className="my-5 col">{checkoutUser.vehicleNumber}</div>
                </div>

                <div className="d-flex">
                  <div className="my-5 col-3">Check In Time:</div>
                  <div className="my-5 col">{checkoutUser.timeIn[1]}</div>
                </div>

                <div className="d-flex">
                  <div className="my-5 col-3">Check Out Time:</div>
                  <div className="my-5 col">{checkoutUser.timeOut[1]}</div>
                </div>
                <div className="d-flex">
                  <div className="my-5 col-3">Phone Number.:</div>
                  <div className="my-5 col">{checkoutUser.mobile}</div>
                </div>
                <div className="d-flex">
                  <div className="my-5 col-3">Final Price:</div>
                  <div className="my-5 col">₹ {checkoutUser.amount}</div>
                </div>
                <div className="d-flex">
                  <div className="my-5 col-3">Vehicle Type:</div>
                  <div className="my-5 col">{checkoutUser.vehicleType}</div>
                </div>
              </div>
            </div>
            <div className="text-center my-5">
              <Link to="/">
                <button
                  type="button"
                  onClick={() => this.clickHandler(checkoutUser)}
                  className="btn btn-info"
                >
                  Done
                </button>
              </Link>
            </div>
            <Footer />
          </div>
        ) : (
          <Example type="spin" color="#FFA375" />
        )}
      </div>
    );
  }
}

Bill.propTypes = {
  checkoutUser: PropTypes.objectOf(PropTypes.any),
  floorspayload: PropTypes.objectOf(PropTypes.any),
  checked: PropTypes.func.isRequired,
  floorsupload: PropTypes.func.isRequired
};
Bill.defaultProps = {
  checkoutUser: {},
  floorspayload: []
};
const mapStateToProps = state => ({
  checkoutUser: state.userreducers.temp,
  floorspayload: state.userreducers.totalFloors
});

const mapDispatchToProps = dispatch => ({
  checked: a => dispatch(checkout(a)),
  floorsupload: b => dispatch(updatefloor(b))
});

export default connect(mapStateToProps, mapDispatchToProps)(Bill);
