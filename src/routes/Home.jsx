import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <div className={styles.body}>
      <div className={`jumbotron ${styles.top}`}>
        <div className={`${styles.heading1} mx-4 mt-5 mb-2`}>iSmartPark</div>
        <div className={`${styles.heading2} col-8 ml-4`}>
          Welcome to the parking lot management system of Nolan Edutech Pvt Ltd
        </div>
        <div className="mt-4 text-center">
          <Link to="/booking/userdetails">
            <button type="button" className="p-3 rounded-pill btn btn-primary">
              Book Your Slot here
            </button>
          </Link>
        </div>
      </div>
      <div className={`${styles.mid}`}>
        <div className="container d-flex flex-column text-center justify-content-center">
          <div className={`${styles.heading3} col-md-8 mx-auto my-5`}>
            A one stop solution for all your parking needs
          </div>
          <div className="offset-1 col-10">
            <div className="my-5 bg-warning d-flex flex-column flex-md-row rounded">
              <div className="col-md-9 text-center text-md-left pt-3 p-md-4">
                <div className={styles.texts}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div className="col-md-3 text-center text-md-right pb-2 py-md-3 pr-5">
                <img
                  className={styles.icons}
                  src="/images/iconlaptop.png"
                  alt="By Till Teenck, DE "
                />
              </div>
            </div>

            <div className="my-5 bg-warning d-flex flex-column-reverse flex-md-row rounded">
              <div className="col-md-3 text-center text-md-left pt-2 py-md-3 pr-5">
                <img
                  className={styles.icons}
                  src="/images/iconcar.png"
                  alt="By Vectors Point, PK "
                />
              </div>
              <div className="col-md-9 text-center text-md-right pt-3 p-md-4">
                <div className={styles.texts}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </div>

            <div className="my-5 bg-warning d-flex flex-column flex-md-row rounded">
              <div className="col-md-9 text-center text-md-left py-3 p-md-4">
                <div className={styles.texts}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
              <div className="col-md-3 text-center text-md-right pb-2 py-md-3 pr-5">
                <img
                  className={styles.icons}
                  src="/images/icontime.png"
                  alt="By Richard de Vos, NL"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
