import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    //console.log(props);
    const {img, name,price,seller, stock} = props.product;
    return (
        <div className="product">
           <div>
                <img src={img} alt="" srcset=""/>
           </div>

           <div className="product-name">
                <h4>{name}</h4>
                <br/>
                <p><small>by: {seller} </small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button onClick={() => props.handleAddProduct(props.product)} className="main-button"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
           </div>

        </div>
    );
};

export default Product;