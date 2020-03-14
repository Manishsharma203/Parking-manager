/** @format */

import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./ParkingSlots.module.css";
import Footer from "../components/common/Footer";
import { add2 } from "../redux/userActions";

class ParkingSlots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      levels: [],
      floors: [],
      obj: {
        floorSelected: "",
        floorPrice: "",
        slotSelected: "",
        timeIn: ""
      }
    };
  }

  componentDidMount = () => {
    const { totalFloors } = this.props;
    if (totalFloors.length !== 0) {
      this.setState({
        levels: totalFloors[0].Pslots,
        floors: totalFloors[0].floors
      });
    }
  };

  addDetails = (e, floors) => {
    const d = new Date();
    const d2 = d.getTime();
    // const d3 = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    // const d3 = d.toLocaleTimeString();
    const d3 = `${d.toLocaleDateString()} (${d.toLocaleTimeString()})`;
    const { obj1 } = this.state;
    this.setState({
      obj: {
        ...obj1,
        slotSelected: e.slot,
        floorSelected: floors[0],
        floorPrice: floors[1],
        timeIn: [d2, d3]
      }
    });
  };

  confirmDetails = () => {
    const { add } = this.props;
    const { obj } = this.state;
    add(obj);
  };

  clickHandler = e => {
    const { totalFloors } = this.props;

    for (let i = 0; i < totalFloors.length; i += 1) {
      if (totalFloors[i].floors[0] === e) {
        this.setState({
          levels: totalFloors[i].Pslots,
          floors: totalFloors[i].floors
        });
      }
    }
  };

  render() {
    const { levels } = this.state;
    const { floors } = this.state;
    const { totalFloors } = this.props;
    console.log(levels, totalFloors);
    return totalFloors.length > 0 ? (
      <div>
        <div className="d-flex flex-column flex-md-row">
          <div className={`${styles.floors} col-12 col-md-4 text-center`}>
            <div className="m-5">
              {totalFloors.map(e => (
                <div className="pt-5" key={e.floors[0]}>
                  <button
                    type="button"
                    className="btn m-5 px-5"
                    key={e.floors[0]}
                    onClick={() => this.clickHandler(e.floors[0])}
                  >
                    Floor {e.floors[0]}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="h2 ml-5 my-3">SELECT THE SLOT</div>
            <div className="h3 my-4 text-center">Floor {floors[0]}</div>
            <div className="h3 my-4 text-center text-success">
              <p>Floor charges : ₹ {floors[1]} / hr</p>
            </div>
            <div className="h5 my-5 text-center">For {floors[2]}</div>
            <div className={`container my-5 ${styles.mid}`}>
              <div className="row justify-content-center">
                {levels.map(e => (
                  <div
                    key={e.slot}
                    className="col-lg-3 col-md-4 text-center card mx-5 p-1"
                  >
                    <img
                      className={styles.img}
                      src="/images/slotImage.png"
                      alt="img"
                    />
                    <div className="card-title m-2">{e.slot}</div>
                    {e.available === false ? (
                      <div>
                        <div className="text-danger">Not available</div>
                      </div>
                    ) : (
                      <button
                        onClick={() => this.addDetails(e, floors)}
                        type="button"
                        className="btn"
                        id={e.slot}
                      >
                        Confirm slot
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center my-5">
              <Link to="/booking/confirmation">
                <button
                  onClick={() => this.confirmDetails(floors[2])}
                  type="button"
                  className="btn btn-info"
                >
                  CONFIRM BOOKING
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}
ParkingSlots.propTypes = {
  add: PropTypes.func.isRequired
};
ParkingSlots.propTypes = {
  totalFloors: PropTypes.arrayOf(PropTypes.array)
};
ParkingSlots.defaultProps = {
  totalFloors: []
  // history: {}
};
const mapStateToProps = state => {
  return {
    totalFloors: state.userreducers.floorIdentifier,
    currentUser: state.userreducers.currentUser
  };
};
const mapDispatchToProps = dispatch => {
  return {
    add: a => dispatch(add2(a))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ParkingSlots);
