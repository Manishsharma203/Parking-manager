/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Floor from "../../components/common/floor";
import Example from "../reactLoading";
import AvailableSlots from "../../components/common/AvailableSlots";
import BookedSlots from "../../components/common/BookedSlots";
import { fetchItems } from "../../redux/authentication/actions";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Pslots: [],
      floor: "",
      isLoading: true
    };
  }

  componentDidMount = async () => {
    const { fetchItems1 } = this.props;
    await fetchItems1();
    const { totalFloors } = this.props;
    this.setState({
      Pslots: totalFloors[0].Pslots,
      floor: totalFloors[0].floors[0],
      isLoading: false
    });
  };

  handleClick = e => {
    const { totalFloors } = this.props;
    for (let i = 0; i < totalFloors.length; i += 1) {
      if (totalFloors[i].floors[0] === e) {
        this.setState({
          Pslots: totalFloors[i].Pslots,
          floor: totalFloors[i].floors[0]
        });
      }
    }
  };

  render() {
    const { Pslots, floor, isLoading } = this.state;
    return !isLoading ? (
      <div className="container-fluid bg-light">
        <div className="text-center display-3 p-1">Hello Admin</div>
        <div className="row">
          <div
            className="col-sm-12 col-md-4 col-lg-5"
            style={{ backgroundColor: "#75daad", height: "80vh" }}
          >
            <Floor handlerClick={this.handleClick} />
          </div>
          <div
            className="col-sm-12 col-md-8 col-lg-6 bg-light"
            style={{ height: "80vh" }}
          >
            <div className="row justify-content-center">
              <h1 className="text-center text-dark my-4 shadow-lg p-2">
                Manage Parking Slots - {floor}
              </h1>
            </div>
            <div className="row justify-content-center">
              <h2 className="text-center text-dark my-2">Booked Slots</h2>
            </div>
            <div className="row justify-content-center">
              <BookedSlots slots={Pslots} />
            </div>
            <div className="row justify-content-center">
              <h2 className="text-center text-dark my-2">Available Slots</h2>
            </div>
            <div className="row justify-content-center">
              <AvailableSlots slots={Pslots} />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="row justify-content-center">
        <Example type="spin" color="#1eb2a6" />{" "}
      </div>
    );
  }
}
Dashboard.propTypes = {
  totalFloors: PropTypes.arrayOf(PropTypes.object),
  fetchItems1: PropTypes.func.isRequired
};
Dashboard.defaultProps = {
  totalFloors: []
};
const mapStateToProps = state => {
  return {
    totalFloors: state.userreducers.totalFloors
  };
};

const mapDispatchToProps = dispatch => ({
  fetchItems1: () => dispatch(fetchItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
