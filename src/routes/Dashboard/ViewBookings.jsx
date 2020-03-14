/** @format */

import React, { Component } from "react";
import firebase from "firebase";
import Example from "../reactLoading";
import BookingTable from "../../components/common/BookingTable";

class ViewBookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demo: []
    };
  }

  componentDidMount = () => {
    const db = firebase.firestore();
    const fBaseAllUsers = db.collection("allUsers");
    const arr = [];
    fBaseAllUsers
      .get()
      .then(res => res.forEach(doc => arr.push(doc.data())))
      .then(() =>
        this.setState({
          demo: arr
        })
      )
      .catch(err => console.log("err", err));
  };

  render() {
    const { demo } = this.state;
    // console.log('demo',demo)
    return (
      <div>
        {demo.length !== 0 ? (
          <div className="container-fluid">
            <BookingTable obj={[...demo]} />
          </div>
        ) : (
          <Example type="spin" color="#1eb2a6" />
        )}
      </div>
    );
  }
}

export default ViewBookings;
