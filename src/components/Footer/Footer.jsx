import React, { Component } from "react";
import "./Footer.scss";
export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="container">
            <div className="row g-4">
              <div className="footer-details d-flex justify-content-between">
                <div className="row g-4">
                  <div className="col-lg-6 pe-0">
                    <div className="left-section">
                      <div className="logo">
                        <img
                          src={
                            process.env.PUBLIC_URL + "/images/logo-yellow.svg"
                          }
                          alt="logo"
                        />
                      </div>
                      <div className="text">
                        <p className="lead">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat.
                        </p>
                        <p className="lead">
                          Ut wisi enim ad minim veniam, quis nostrud exerci
                          tation ullamcorper suscipit lobortis nisl ut aliquip
                          ex ea commodo consequat. Duis autem vel eum iriure
                          dolor in hendrerit in vulputate velit esse molestie
                          consequat, vel illum dolore eu feugiat nulla. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit,
                          sed dia
                        </p>
                        <p className="lead">
                          m nonummy nibh euismod tincidunt ut laoreet dolore
                          magna aliquam erat volutpat. Ut wisi enim ad minim
                          veniam, quis
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="right-section">
                      <h4>Subscribe to our newsletter</h4>
                      <div className="subscribe position-relative">
                        <input type="text" placeholder="Enter Your Mail" />
                        <span className="position-absolute fw-bold center-element ">
                          Subscribe{" "}
                          <img
                            src={
                              process.env.PUBLIC_URL + "/images/subscribe.svg"
                            }
                            alt="subscribe"
                            className="ms-2"
                          />
                        </span>
                      </div>
                      <div className="linksAndsocial d-flex justify-content-between">
                        <div className="container">
                          <div className="row g-4">
                            <div className="col-9 col-lg-7 col-xl-8 ps-0">
                              <div className="links">
                                <ul className="list-unstyled ">
                                  <li>About Us</li>
                                  <li>Contact Us</li>
                                  <li>Track Order</li>
                                  <li>Terms & Conditions</li>
                                  <li>Privacy Policy</li>
                                  <li>Sell With Us</li>
                                  <li>Shipping And Returns</li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-3 col-lg-5 col-xl-4 pe-0">
                              <div className="socials">
                                <div className="facebook">
                                  <img
                                    src={
                                      process.env.PUBLIC_URL +
                                      "/images/facebook.svg"
                                    }
                                    alt="facebook"
                                  />
                                  <span>/YESHTERY</span>
                                </div>
                                <div className="linkedin">
                                  <img
                                    src={
                                      process.env.PUBLIC_URL +
                                      "/images/linkedin.svg"
                                    }
                                    alt="linkedin"
                                  />
                                  <span>/YESHTERY</span>
                                </div>
                                <div className="instagram">
                                  <img
                                    src={
                                      process.env.PUBLIC_URL +
                                      "/images/instagram.svg"
                                    }
                                    alt="instagram"
                                  />
                                  <span>/YESHTERY</span>
                                </div>
                                <div className="twitter">
                                  <img
                                    src={
                                      process.env.PUBLIC_URL +
                                      "/images/twitter.svg"
                                    }
                                    alt="twitter"
                                  />
                                  <span>/YESHTERY</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="last-footer m-0 center-element">
                <div className="container">
                  <div className="row g-4 my-3 my-lg-0 align-items-center ">
                    <div className=" col-lg-4 mt-2">
                      <p>© 2021 yeshtery, all rights reserved.</p>
                    </div>
                    <div className=" col-lg-4 mt-2 d-flex justify-content-center">
                      <div className="payment">
                        <img
                          src={process.env.PUBLIC_URL + "/images/visa.png"}
                          alt="visa"
                        />
                        <img
                          src={process.env.PUBLIC_URL + "/images/cash.png"}
                          alt="cash"
                        />
                        <img
                          src={
                            process.env.PUBLIC_URL + "/images/mastercard.png"
                          }
                          alt="mastercard"
                        />
                      </div>
                    </div>
                    <div className=" col-lg-4 mt-2">
                      <p className="poweredBy d-flex  align-items-center">
                        Powered By{" "}
                        <img
                          src={process.env.PUBLIC_URL + "/images/nasnav.png"}
                          alt="nasnav"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
