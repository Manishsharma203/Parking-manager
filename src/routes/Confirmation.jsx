/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import swal from "sweetalert";
import Footer from "../components/common/Footer";
import {
  addCurrentUser,
  addCurrentUserFirebase,
  updatefloor
} from "../redux/userActions";

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clickHandler = e => {
    const { addUserFirebase } = this.props;
    const { addUser } = this.props;
    const { floorspayload, floorsupload, currentUser } = this.props;
    addUser(e);
    addUserFirebase(e);
    floorsupload(floorspayload);
    swal("Slot booked!! Your Confirmation ID is:", currentUser.uid);
  };

  render() {
    const { currentUser } = this.props;
    return (
      <div className="p-2">
        <div className="m-5">
          <div className="h1 text-success text-center ">
            Confirmation Receipt
          </div>
        </div>
        <div className="mx-auto border border-dark rounded col-sm-8 col-lg-4 justify-content-center">
          <div className="offset-1">
            <div className="d-flex">
              <div className="my-3 h5 ">
                Name:
                <span className="mx-4">{currentUser.name}</span>
              </div>
            </div>
            <div className="d-flex">
              <div className="my-3 h5">
                Confirmation ID:
                <span className="mx-4"> {currentUser.uid}</span>
              </div>
            </div>
            <div className="d-flex">
              <div className="my-3 h5">
                Phone Number.:
                <span className="mx-4"> {currentUser.mobile}</span>
              </div>
            </div>
            <div className="d-flex">
              <div className="my-3 h5">
                Vehicle Reg. No.:
                <span className="mx-4">{currentUser.vehicleNumber}</span>
              </div>
            </div>
            <div className="d-flex">
              <div className="my-3 h5">
                Vehicle Type:
                <span className="mx-4">{currentUser.vehicleType}</span>
              </div>
            </div>
            <div className="d-flex">
              <div className="my-3 h5">
                Parking slot:
                <span className="mx-4">{currentUser.slotSelected}</span>
              </div>
            </div>
            <div className="d-flex">
              <div className="my-3 h5">
                Check In Time:
                <span className="mx-4">{currentUser.timeIn[1]}</span>
              </div>
            </div>
            <div className="d-flex">
              <div className="my-3 h5">
                Parking Floor:
                <span className="mx-4">{currentUser.floorSelected}</span>
              </div>
            </div>
            <div className="d-flex">
              <div className="my-3 h5">
                User Category:
                <span className="mx-4">{currentUser.userCategory}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center my-3 h5">
          <Link to="/">
            <button
              type="button"
              onClick={() => this.clickHandler(currentUser)}
              className="btn btn-info"
            >
              Done
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}
Confirmation.propTypes = {
  currentUser: PropTypes.objectOf(PropTypes.any),
  addUser: PropTypes.func.isRequired,
  addUserFirebase: PropTypes.func.isRequired,
  floorspayload: PropTypes.objectOf(PropTypes.any),
  floorsupload: PropTypes.func.isRequired
};
Confirmation.defaultProps = {
  currentUser: {},
  floorspayload: []
};

const mapStateToProps = state => ({
  currentUser: state.userreducers.currentUser,
  floorspayload: state.userreducers.totalFloors
});

const mapDispatchToProps = dispatch => {
  return {
    addUser: a => dispatch(addCurrentUser(a)),
    addUserFirebase: b => dispatch(addCurrentUserFirebase(b)),
    floorsupload: b => dispatch(updatefloor(b))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
