import React, { Component } from "react";
import "./ProductDetails.scss";

import blackColor from "../../images/blackColor.png";
import redColor from "../../images/redColor.png";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

export default class ProductDetails extends Component {
  render() {
    const {
      id,
      title,
      description,
      price,
      discountPercentage,
      rating,
      category,
      thumbnail,
      images = [],
    } = this.props.product || {};
    return (
      <>
        <Breadcrumb />
        <div className="productDetails">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="pictures-section">
                  <div className="main-photo center-element">
                    <div className="thumbnail">
                      <img
                        src={thumbnail}
                        alt="main product"
                        className="w-100"
                      />
                    </div>
                    <div className="rotateImage">
                      <img
                        src={process.env.PUBLIC_URL + "/images/deg.svg"}
                        alt="360 deg"
                        className="rotate"
                      />
                    </div>
                  </div>
                  <div className="slider d-flex align-items-center">
                    <div>
                      <img
                        src={process.env.PUBLIC_URL + "/images/arrowLeft.svg"}
                        alt="arrow left"
                      />
                    </div>

                    <div className="images d-flex justify-content-around">
                      {images.map((img, index) => {
                        return (
                          <div className="imgSlider center-element" key={index}>
                            <img src={img} alt="slider" className="w-100 " />
                          </div>
                        );
                      })}
                    </div>

                    <div>
                      <img
                        src={process.env.PUBLIC_URL + "/images/arrowRight.svg"}
                        alt="arrow right"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="product-details">
                  <div className="brand-logo">
                    <img
                      src={process.env.PUBLIC_URL + "/images/adidasSM.svg"}
                      alt="adidas"
                    />
                  </div>
                  <h5 className="proTitle mt-3 mb-2 ">{title}</h5>
                  <div className="description">
                    <p className="desc">{description}</p>
                    <p className="category">{category}</p>
                  </div>

                  <div className="rating d-flex align-items-center">
                    <div className="stars">
                      <img
                        src={process.env.PUBLIC_URL + "/images/star-fill.svg"}
                        alt="star-fill"
                      />
                      <img
                        src={process.env.PUBLIC_URL + "/images/star-fill.svg"}
                        alt="star-fill"
                      />
                      <img
                        src={process.env.PUBLIC_URL + "/images/star-fill.svg"}
                        alt="star-fill"
                      />
                      <img
                        src={process.env.PUBLIC_URL + "/images/star-fill.svg"}
                        alt="star-fill"
                      />
                      <img
                        src={process.env.PUBLIC_URL + "/images/star-empty.svg"}
                        alt="star-empty"
                      />
                    </div>
                    <div className="rate">{rating} of 5</div>
                    <div className="rate-number">22 Rates</div>
                  </div>

                  <div className="price d-flex align-items-center">
                    <div className="after-discount">
                      {price} <span className="pound">LE</span>
                    </div>
                    <div className="before-discount">
                      {Math.round((price * discountPercentage) / 100) + price}{" "}
                      <span className="pound">LE</span>
                    </div>
                    <div className="discount-percentage">
                      {Math.round(discountPercentage)}% Off
                    </div>
                  </div>

                  <div className="divider"></div>

                  <div className="size">
                    <h5>Size </h5>
                    <ul className="list-unstyled d-flex">
                      <li>Small</li>
                      <li>Meduim</li>
                      <li className="active">Large</li>
                      <li>X Large</li>
                      <li>XX Large</li>
                    </ul>
                  </div>
                  <div className="divider"></div>

                  <div className="color">
                    <h5>Color</h5>
                    <img src={blackColor} alt="black color" />
                    <img src={redColor} alt="red color" />
                  </div>
                  <div className="divider"></div>

                  <div className="quantity">
                    <h5>Quantity</h5>
                    <div className="quan d-flex justify-content-between align-items-center">
                      <div
                        className="minusIcon center-element"
                        onClick={this.props.decre}
                      >
                        <img
                          src={process.env.PUBLIC_URL + "/images/minus.svg"}
                          alt="minus"
                        />
                      </div>
                      <span>{this.props.quan}</span>
                      <div
                        className="plusIcon center-element"
                        onClick={this.props.incre}
                      >
                        <img
                          src={process.env.PUBLIC_URL + "/images/plus.svg"}
                          alt="plus"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="btns d-flex flex-wrap">
                    <button
                      className="center-element"
                      onClick={() => this.props.addTocart(id)}
                    >
                      Add To Cart
                    </button>
                    <button className="center-element">
                      Pickup From Store
                    </button>
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
