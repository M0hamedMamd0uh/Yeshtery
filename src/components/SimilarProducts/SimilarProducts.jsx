import React, { Component } from "react";
import "./SimilarProducts.scss";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimilarProducts extends Component {
  settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 0,
        },
      },
    ],
  };

  render() {
    return (
      <>
        <div className="similarProducts">
          <div className="container">
            <h2 className="m-0">Similar Products</h2>
            <p className="m-0">You may like these products also</p>

            <div className="row g-4">
              <Slider {...this.settings}>
                {this.props?.products.map((pro) => {
                  return (
                    <div className="col-md-6 col-lg-4 col-xl-3" key={pro.id}>
                      <div
                        className="product-card mt-3"
                        title={pro.description}
                      >
                        <div className="product-image">
                          <img
                            src={pro.thumbnail}
                            alt="product"
                            className="w-100"
                          />
                          <div className="rotateImg">
                            <img
                              src={
                                process.env.PUBLIC_URL + "/images/rotateSM.svg"
                              }
                              alt="rotate"
                            />
                          </div>
                        </div>
                        <h6 className="title">{pro.title}</h6>
                        <p
                          className="description fw-bold"
                          title={pro.description}
                        >
                          {pro.description}
                        </p>

                        <div className="details d-flex justify-content-between align-items-center">
                          <div className="price d-flex flex-column align-items-start">
                            <div className="after-discount fw-bold">
                              {pro.price} <span>LE</span>
                            </div>
                            <div className="bottom-section d-flex align-items-center">
                              <div className="before-discount fw-semibold">
                                {Math.round(
                                  (pro.price * pro.discountPercentage) / 100
                                ) + pro.price}
                                <span> LE</span>
                              </div>
                              <div className="discount fw-bold">
                                {Math.round(pro.discountPercentage)}%
                              </div>
                            </div>
                          </div>
                          <div className="brand">
                            <img
                              src={
                                process.env.PUBLIC_URL + "/images/adidasSM.svg"
                              }
                              alt="adidas"
                            />
                          </div>
                        </div>
                        <div className="rating center-element">
                          <div className="stars d-flex align-items-center">
                            <img
                              src={
                                process.env.PUBLIC_URL + "/images/star-fill.svg"
                              }
                              alt="star-fill"
                            />
                            <img
                              src={
                                process.env.PUBLIC_URL + "/images/star-fill.svg"
                              }
                              alt="star-fill"
                            />
                            <img
                              src={
                                process.env.PUBLIC_URL + "/images/star-fill.svg"
                              }
                              alt="star-fill"
                            />
                            <img
                              src={
                                process.env.PUBLIC_URL + "/images/star-fill.svg"
                              }
                              alt="star-fill"
                            />
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/images/star-empty.svg"
                              }
                              alt="star-empty"
                            />
                          </div>
                          <div className="rate fw-bold">{pro.rating} of 5</div>
                        </div>
                        <div className="pickup">
                          <p className="text-center fw-semibold">
                            Pickup From :
                            <span className="fw-bolder"> Genena Mall</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </>
    );
  }
}
