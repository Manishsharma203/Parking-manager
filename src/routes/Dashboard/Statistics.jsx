/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Bar } from "react-chartjs-2";

class Statistics extends Component {
  constructor(props) {
    super(props);
    const { allUsers } = this.props;
    this.state = {
      chartData: {
        labels: [
          allUsers.length !== 0 &&
            allUsers.map(ele => {
              return ele.vehicleNumber;
            })
        ],
        datasets: [
          {
            label: "Vehicle Stayed Time",
            data: [
              allUsers.map(ele => {
                return (
                  ele.timeOut &&
                  (Number(ele.timeOut[0]) - Number(ele.timeIn[0])) / (1000 * 60)
                );
              })
            ]
          }
        ]
      }
    };
  }

  render() {
    const { chartData } = this.state;
    return (
      <div className="container">
        <Bar height={50} width={50} data={chartData} options={{}} />
      </div>
    );
  }
}

Statistics.propTypes = {
  allUsers: PropTypes.arrayOf(PropTypes.object)
};

Statistics.defaultProps = {
  allUsers: []
};

const mapStateToProps = state => {
  return {
    allUsers: state.userreducers.allUsers
  };
};

export default connect(mapStateToProps)(Statistics);
