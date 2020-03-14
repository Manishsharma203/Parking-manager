import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ background: "#330F0B" }}>
        <div className="container">
          <div className="text-white d-flex justify-content-left">
            <div className="col-3 my-4">
              <div>
                <small>Caption 1</small>
              </div>
              <br />
              <div>
                <small>Features</small>
              </div>
              <div>
                <small>Security</small>
              </div>
              <div>
                <small>Bookings</small>
              </div>
              <div>
                <small>Sign In</small>
              </div>
              <div>
                <small>Register</small>
              </div>
            </div>
            <div className="col-3 my-4">
              <div>
                <small>Caption 2</small>
              </div>
              <br />
              <div>
                <small>About</small>
              </div>
              <div>
                <small>Careers</small>
              </div>
              <div>
                <small>Brand Center</small>
              </div>
              <div>
                <small>Get in touch</small>
              </div>
              <div>
                <small>Blog</small>
              </div>
            </div>
          </div>
          <div className="text-white text-center my-4">
            <div>
              <small>
                Made with{" "}
                <span role="img" aria-label="heart" aria-labelledby="heart">
                  ❤️
                </span>{" "}
                at Masai
              </small>
            </div>
            <div className="mb-4">
              <small>
                DISCLAIMER: We do not claim ownership of any of the images shown
                on this webiste{" "}
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
