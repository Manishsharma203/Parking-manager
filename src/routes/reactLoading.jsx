/** @format */

import React from "react";
import { PropTypes } from "prop-types";
import ReactLoading from "react-loading";

const Example = ({ type, color }) => (
  <div className="col-6 justify-content-center d-flex py-3">
    <ReactLoading type={type} color={color} height={667} width={375} />
  </div>
);

Example.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Example;
