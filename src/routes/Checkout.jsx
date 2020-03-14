import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { addCheckoutUserFirebase } from "../redux/userActions";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleNumber: "",
      name: "",
      uid: ""
    };
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  clickHandler = () => {
    const { vehicleNumber, name, uid } = this.state;
    // const { add } = this.props;
    const d = new Date();
    const d2 = d.getTime();
    const d3 = `${d.toLocaleDateString()} (${d.toLocaleTimeString()})`;
    const timeOut = [d2, d3];
    const obj = { vehicleNumber, name, timeOut, uid };
    // add(obj);
    const { addfirebase } = this.props;
    addfirebase(obj);
  };

  render() {
    return (
      <div>
        <div className="col-6 mx-auto card m-5 text-center shadow">
          <div className="card body my-5 border-white">
            <div>
              <label className="my-2" htmlFor="name">
                Name
                <input
                  onChange={this.changeHandler}
                  name="name"
                  className="col-12 form-control"
                  id="name"
                  type="text"
                />
              </label>
            </div>
            <div>
              <label className="ml-2" htmlFor="vehicleNumber">
                Vehicle Number
                <input
                  onChange={this.changeHandler}
                  name="vehicleNumber"
                  className="col-12 form-control"
                  id="vehicleNumber"
                  type="text"
                />
              </label>
            </div>
            <div>
              <label className="ml-2" htmlFor="uid">
                Confirmation ID
                <input
                  onChange={this.changeHandler}
                  name="uid"
                  className="col-12 form-control"
                  id="uid"
                  type="text"
                />
              </label>
            </div>
            <Link to="/checkout/bill">
              <button
                type="button"
                onClick={this.clickHandler}
                className="btn btn-info my-5 col-6 mx-auto"
              >
                CHECKOUT NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
Checkout.propTypes = {
  // add: PropTypes.func.isRequired,
  addfirebase: PropTypes.func.isRequired
};
// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = dispatch => {
  return {
    // add: a => dispatch(addCheckoutUser(a)),
    addfirebase: b => dispatch(addCheckoutUserFirebase(b))
  };
};

export default connect(null, mapDispatchToProps)(Checkout);
