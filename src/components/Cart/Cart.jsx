import React, { Component } from "react";
import "./Cart.scss";
export default class Cart extends Component {
  render() {
    const { id, description, price, thumbnail, quantity } =
      this.props.cartItems[0] || [];

    return (
      <>
        <div
          className="cart-details"
          style={this.props.isOpen ? { right: "0" } : { right: "-1000px" }}
        >
          <div className="close-btn text-end">
            <img
              src={process.env.PUBLIC_URL + "/images/close.svg"}
              alt="close btn"
              onClick={() => this.props.openCart()}
            />
          </div>
          <h4 className="cartTitle text-center fw-bold">My Cart</h4>
          <h5 className="summaryText fw-bold">Cart Summary</h5>
          {this.props.cartItems.length !== 0 ? (
            <>
              <div className="cart-summary">
                <div className="prod-details d-flex gap-3">
                  <div className="pro-img">
                    <img src={thumbnail} alt="product" className="w-100" />
                  </div>
                  <div className="pro-info">
                    <p className="fw-semibold mb-1">{description}</p>
                    <div className="quantity fw-bold">
                      Quantity:{" "}
                      <span className="quantityNumber">{quantity}</span>
                    </div>
                    <div className="quanPriceAndRemove d-flex justify-content-between align-items-center flex-wrap gap-2">
                      <p className="fw-bold m-0 flex-grow-1">
                        {price} <span>LE</span>
                      </p>
                      <button
                        onClick={() => this.props.removeItem(id)}
                        className="flex-grow-1"
                      >
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="total fw-bold text-center">
                Total: <span>{price * quantity}</span> LE
              </div>
              <div className="buttons">
                <button>Review Cart</button>
                <button>Complete Checkout</button>
              </div>
            </>
          ) : (
            <>
              <p className="text-center lead  my-5 fs-4">
                You have no items yet..
              </p>
            </>
          )}
        </div>
      </>
    );
  }
}
