/** @format */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Floor = props => {
  const { totalFloor } = props;
  const { handlerClick } = props;
  return (
    <div className="d-flex flex-column p-3">
      {totalFloor.map(ele => {
        return (
          <button
            key={ele.floors[0]}
            type="button"
            className="btn btn-dark m-2 text-light"
            onClick={() => handlerClick(ele.floors[0])}
          >
            Floor {ele.floors[0]}
          </button>
        );
      })}
    </div>
  );
};
Floor.propTypes = {
  handlerClick: PropTypes.func.isRequired,
  totalFloor: PropTypes.arrayOf(PropTypes.object)
};

Floor.defaultProps = {
  totalFloor: []
};

const mapStateToProps = state => {
  return {
    totalFloor: state.userreducers.totalFloors
  };
};

export default connect(mapStateToProps)(Floor);
