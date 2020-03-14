/** @format */

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Dashboard from "./Dashboard/Dashboard";
import PriceEditor from "./Dashboard/PriceEditor";
import ViewBookings from "./Dashboard/ViewBookings";
import Statistics from "./Dashboard/Statistics";
import NavBar from "./Dashboard/NavBar";

const DashboardRoutes = props => {
  const { isAuth } = props;
  return !isAuth ? (
    <div>
      <Route path="/dash" render={NavBar} />
      <Route path="/dash" exact render={() => <Dashboard />} />
      <Route path="/dash/priceeditor" render={() => <PriceEditor />} />
      <Route path="/dash/viewbookings" render={() => <ViewBookings />} />
      <Route path="/dash/statistics" render={() => <Statistics />} />
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

DashboardRoutes.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});

export default connect(mapStateToProps)(DashboardRoutes);
