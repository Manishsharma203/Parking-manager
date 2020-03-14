/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import swal from "sweetalert";
import { changePrice, updatefloor } from "../../redux/userActions";

class PriceEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      floorPrice: "",
      floorNo: ""
    };
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      floorNo: value
    });
  };

  handleChangeInput = e => {
    this.setState({
      floorPrice: e.target.value
    });
  };

  priceSet = () => {
    const { floorPrice, floorNo } = this.state;
    const { changePrice1, floorspayload, floorsupload } = this.props;
    changePrice1({ floorNo, floorPrice });
    swal("Done!", "Price Changed Successfully", "success");
    floorsupload(floorspayload);
  };

  render() {
    const { floorPrice } = this.state;
    const { totalFloors } = this.props;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-7 col-lg-5 border border-light shadow-lg p-sm-3 p-lg-5 m-4 ">
            <div className="form-group">
              <label htmlFor="#floorNo">
                Select Floor
                <select
                  className="form-control"
                  id="floorNo"
                  style={{ width: "365px" }}
                  onChange={this.handleChange}
                >
                  <option value="">Select Floor</option>
                  {totalFloors.map(ele => {
                    return (
                      <option key={ele.floors[0]} value={ele.floors[0]}>
                        Floor {ele.floors[0]}
                      </option>
                    );
                  })}
                </select>
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="addPrice">
                Add New Price
                <input
                  className="form-control"
                  id="addPrice"
                  type="text"
                  value={floorPrice}
                  style={{ width: "365px" }}
                  placeholder="Enter new price"
                  onChange={this.handleChangeInput}
                />
              </label>
            </div>
            <div className="row justify-content-center">
              <button
                type="button"
                className="btn"
                style={{ backgroundColor: "#75daad" }}
                onClick={this.priceSet}
              >
                Change Price
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PriceEditor.propTypes = {
  changePrice1: PropTypes.func.isRequired
};

PriceEditor.propTypes = {
  totalFloors: PropTypes.arrayOf(PropTypes.array),
  floorspayload: PropTypes.objectOf(PropTypes.any),
  floorsupload: PropTypes.func.isRequired
};

PriceEditor.defaultProps = {
  totalFloors: [],
  floorspayload: []
};

const mapStateToProps = state => ({
  totalFloors: state.userreducers.totalFloors,
  floorspayload: state.userreducers.totalFloors
});

const mapDispatchToProps = dispatch => ({
  changePrice1: newPrice => dispatch(changePrice(newPrice)),
  floorsupload: b => dispatch(updatefloor(b))
});

export default connect(mapStateToProps, mapDispatchToProps)(PriceEditor);
