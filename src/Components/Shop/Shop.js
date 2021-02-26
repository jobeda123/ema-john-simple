import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    //console.log(fakeData);
    const first10 = fakeData.slice(0,10);
    //console.log(first10);
    const [products, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product)=>{
        console.log("Added Product To Cart",product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                <h1>Total Product: {products.length}</h1>
                {
                    products.map(pd => <Product handleAddProduct={handleAddProduct} key={pd.key} product={pd}></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;