/** @format */

import React from "react";
import PropTypes from "prop-types";

const BookedSlots = props => {
  const { slots } = props;
  return (
    <>
      {slots.map(slot => {
        if (slot.available === false) {
          return (
            <button
              type="button"
              className="btn m-2"
              key={slot.slot}
              style={{
                height: "40px",
                width: "90px",
                backgroundColor: "#fd5e53"
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
BookedSlots.propTypes = {
  slots: PropTypes.arrayOf(PropTypes.object)
};
BookedSlots.defaultProps = {
  slots: []
};
export default BookedSlots;
