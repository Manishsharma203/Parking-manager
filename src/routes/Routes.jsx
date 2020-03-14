/** @format */

import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardRoutes from "./DashboardRoutes";
import Login from "./Login";
import Register from "./Register";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import NavBarPublic from "./NavbarPublic";
import NoMatch from "./NoMatch";
import ParkingSlots from "./ParkingSlots";
import UserDetails from "./UserDetais";
import Confirmation from "./Confirmation";
import Bill from "./Bill";
import Checkout from "./Checkout";

const Routes = () => {
  return (
    <>
      <Route path="/" component={NavBarPublic} />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/dash" render={() => <DashboardRoutes />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/register" render={() => <Register />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route
          exact
          path="/booking/parkingslots"
          render={() => <ParkingSlots />}
        />
        <Route
          exact
          path="/booking/userdetails"
          render={() => <UserDetails />}
        />
        <Route
          exact
          path="/booking/confirmation"
          render={() => <Confirmation />}
        />
        <Route exact path="/checkout" render={() => <Checkout />} />
        <Route exact path="/checkout/bill" render={() => <Bill />} />
        <Route component={NoMatch} />
      </Switch>
    </>
  );
};

export default Routes;
