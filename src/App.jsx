/** @format */

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { PropTypes } from "prop-types";
import Routes from "./routes/Routes";
import { fetchItems } from "./redux/authentication/actions";

function App(props) {
  const { fetchItems1 } = props;
  useEffect(() => {
    fetchItems1();
  }, []);
  return <Route path="/" component={Routes} />;
}

App.propTypes = {
  fetchItems1: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  fetchItems1: () => dispatch(fetchItems())
});
export default connect(null, mapDispatchToProps)(App);
