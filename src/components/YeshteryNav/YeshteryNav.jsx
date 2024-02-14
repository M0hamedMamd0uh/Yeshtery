import React, { Component } from "react";
import "./YeshteryNav.scss";

export default class YeshteryNav extends Component {
  render() {
    return (
      <>
        <nav className="yeshteryNav">
          <div className="container">
            <div className="main-box d-flex justify-content-between align-items-center">
              <div className="logo">
                <img
                  src={process.env.PUBLIC_URL + "/images/nav-icon.svg"}
                  alt="nav-icon"
                />
                <img
                  src={process.env.PUBLIC_URL + "/images/logo.svg"}
                  alt="logo"
                />
              </div>

              <div className="main-text ">
                <img
                  src={process.env.PUBLIC_URL + "/images/arrow-left.svg"}
                  alt="arrow-left"
                />
                <p className="offerText">
                  Valentine’s Day Offers! Buy Two Get One Free &nbsp;
                  <span className="shopNow text-decoration-underline fw-semibold">
                    Shop Now
                  </span>
                </p>
                <img
                  src={process.env.PUBLIC_URL + "/images/arrow-right.svg"}
                  alt="arrow-right"
                />
              </div>

              <div className="icons d-flex ">
                <div className="contactUs">
                  <img
                    src={process.env.PUBLIC_URL + "/images/contact.svg"}
                    alt="arrow-right"
                  />
                  <span>Contact Us</span>
                </div>
                <div className="trackOrder">
                  <img
                    src={process.env.PUBLIC_URL + "/images/cart.svg"}
                    alt="cart"
                  />
                  <span>Track Order</span>
                </div>
                <div className="findStore">
                  <img
                    src={process.env.PUBLIC_URL + "/images/location.svg"}
                    alt="location"
                  />
                  <span> Find A Store</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
