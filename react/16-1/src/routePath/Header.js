import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "../style/Header.css";
import HomePage from "../componenet/HomePage";
import Products from "../componenet/Products";

const Header = () => {
  return (
    <BrowserRouter>
      <div>
        <ul className="header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">products</Link>
          </li>
        </ul>
      </div>

      
      <Route exact path="/products" component={Products}></Route>
      <Route exact path="/" component={HomePage}></Route>
    </BrowserRouter>
  );
};

export default Header;
