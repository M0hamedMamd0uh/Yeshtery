import React, { Component } from "react";
import { ThreeCircles } from "react-loader-spinner";

export default class Loading extends Component {
  render() {
    return (
      <>
        <div className="center-element my-5">
          <ThreeCircles
            visible={true}
            height="60"
            width="60"
            color="#542e90"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      </>
    );
  }
}
