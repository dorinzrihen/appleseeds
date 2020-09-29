import React, { Component } from "react";
import Header from "./routePath/Header";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class Ecommerce extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
        </div>
      </BrowserRouter>
    );
  }
}

export default Ecommerce;
