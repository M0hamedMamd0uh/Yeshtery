import React, { Component } from "react";
import "./MainNavbar.scss";

export default class MainNavbar extends Component {
  render() {
    return (
      <>
        <div className="mainNav">
          <div className="container">
            <div className="row g-4">
              <div className="main-box d-flex justify-content-between align-items-center flex-wrap">
                <div className="col-12 col-lg-4">
                  <div className="searchInput position-relative">
                    <img
                      src={process.env.PUBLIC_URL + "/images/search.svg"}
                      alt="search"
                      className="searchIcon position-absolute"
                    />
                    <input type="text" placeholder="Search" />
                  </div>
                </div>
                <div className="col-0  col-lg-4">
                  <div className="adidasLogo ">
                    <img
                      src={process.env.PUBLIC_URL + "/images/adidas.svg"}
                      alt="adidas"
                    />
                  </div>
                </div>
                <div className="col-12  col-lg-4">
                  <div className="icons">
                    <div className="cart" onClick={() => this.props.openCart()}>
                      <img
                        src={process.env.PUBLIC_URL + "/images/basket.svg"}
                        alt="Cart"
                      />
                      <span className="badge  ">{this.props.cartQuantity}</span>
                      <span>Cart</span>
                    </div>
                    <div className="wishlist">
                      <img
                        src={process.env.PUBLIC_URL + "/images/heart.svg"}
                        alt="Wishlist"
                      />
                      <span>Wishlist</span>
                    </div>
                    <div className="person">
                      <img
                        src={process.env.PUBLIC_URL + "/images/login.svg"}
                        alt="login"
                      />
                      <span>Login</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="categories">
          <div className="container p-sm-0  ">
            <ul className=" d-flex justify-content-between align-items-center list-unstyled gap-4 m-0">
              <li className="active">Men</li>
              <li>Women</li>
              <li>Unisex</li>
              <li>Kids</li>
              <li>Best Sellers</li>
              <li>New Arrivals</li>
              <li>Offers</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
