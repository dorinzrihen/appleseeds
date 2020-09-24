import React, { Component } from "react";
import Header from "./routePath/Header";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ProductCard from './componenet/ProductCard'

class Ecommerce extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/products/:id" component={ProductCard}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default Ecommerce;
