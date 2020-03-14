/** @format */

import React from "react";
import PropTypes from "prop-types";

const AvailableSlots = props => {
  const { slots } = props;
  return (
    <>
      {slots.map(slot => {
        if (slot.available === true) {
          return (
            <button
              type="button"
              className="btn m-2"
              key={slot.slot}
              style={{
                height: "40px",
                width: "90px",
                backgroundColor: "#11ff77"
              }}
            >
              {slot.slot}
            </button>
          );
        }
        return null;
      })}
    </>
  );
};
AvailableSlots.propTypes = {
  slots: PropTypes.arrayOf(PropTypes.object)
};
AvailableSlots.defaultProps = {
  slots: []
};
export default AvailableSlots;
