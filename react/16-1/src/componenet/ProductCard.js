import React from "react";
import data from "../data/store";
import "../style/ProductCard.css";


class ProductCard extends React.Component{
    render(){
        const myCard = data.map((product,index) =>{
            if(product.id == this.props.match.params.id){
                return (<div className="productCard" key={index}>
                    <h1>{product.title}</h1>
                    <img src={product.imageUrl} alt={product.title}/>
                    <h2>price: {product.price}$</h2>
                    <h2>size: {product.size}</h2>
                </div>)
            }
        }) 
        return <>{myCard}</>;
    }
 
}

export default ProductCard;
