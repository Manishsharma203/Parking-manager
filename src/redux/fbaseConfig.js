/** @format */
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "parking-system-bed55.firebaseapp.com",
  databaseURL: "https://parking-system-bed55.firebaseio.com",
  projectId: "parking-system-bed55",
  storageBucket: "parking-system-bed55.appspot.com",
  messagingSenderId: "744314497782",
  appId: "1:744314497782:web:617cf805b5d8e8b20d9ad7",
  measurementId: "G-PV1SZ1NQFW"
};
firebase.initializeApp(firebaseConfig);
export default firebase;
