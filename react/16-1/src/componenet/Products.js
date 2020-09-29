import React from "react";
import data from "../data/store";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ProductCard from "../componenet/ProductCard";

class Products extends React.Component {

  render() { 
    return (
      <div>
        <BrowserRouter>
          <div>
            <ul className="header">
              {data.map((product) => {
                return (
                  <li key={product.id}>
                    <Link to={`/products/${product.id}`}>{product.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Route exact path="/products/:id" component={ProductCard}></Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default Products;
