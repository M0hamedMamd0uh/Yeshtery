import React, { Component } from "react";
import "./Breadcrumb.scss";
export default class Breadcrumb extends Component {
  render() {
    return (
      <>
        <div className="breadcrumb fw-semibold lead py-3">
          <div className="container">
            <span className="text-decoration-underline  "> Men</span> /{" "}
            <span className="text-decoration-underline  "> Clothing</span> /{" "}
            <span className="text-decoration-underline  "> Tops</span> /{" "}
            <span className="text-decoration-underline  ">Adidas</span> /{" "}
            <span>Adidas Black T-Shirt</span>
          </div>
        </div>
      </>
    );
  }
}
