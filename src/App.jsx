import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home/Home";

export default class App extends Component {
  render() {
    return (
      <>
        <Home />
        <Toaster />
      </>
    );
  }
}
