/** @format */

import React from "react";
import PropTypes from "prop-types";
// import { connect } from "react-redux";

const BookingTable = props => {
  const { obj } = props;
  // console.log(props.obj);
  const bookings = obj;
  let idGen = 0;
  if (bookings.length === 0) {
    return <div className="display-3 text-center">No Booking Till Now</div>;
  }
  return (
    <div className="table-responsive-lg">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              #
            </th>
            <th scope="col" className="text-center">
              Name
            </th>
            <th scope="col" className="text-center">
              User Category
            </th>
            <th scope="col" className="text-center">
              Check-In Time
            </th>
            <th scope="col" className="text-center">
              Check-Out Time
            </th>
            <th scope="col" className="text-center">
              Vehicle Type
            </th>
            <th scope="col" className="text-center">
              Vehicle Number
            </th>
            <th scope="col" className="text-center">
              Slot
            </th>
            <th scope="col" className="text-center">
              Floor
            </th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(ele => {
            idGen += 1;
            return (
              <tr key={idGen}>
                <td className="text-center">{idGen}</td>
                <td className="text-center">{ele.name}</td>
                <td className="text-center">{ele.userCategory}</td>
                <td className="text-center">{ele.timeIn[1]}</td>
                <td className="text-center">
                  {ele.timeOut ? ele.timeOut[1] : "IN Parking"}
                </td>
                <td className="text-center">{ele.vehicleType}</td>
                <td className="text-center">{ele.vehicleNumber}</td>
                <td className="text-center">{ele.slotSelected}</td>
                <td className="text-center">{ele.floorSelected}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

BookingTable.propTypes = {
  obj: PropTypes.arrayOf(PropTypes.any)
};
BookingTable.defaultProps = {
  obj: []
};

export default BookingTable;
