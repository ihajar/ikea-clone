import React from 'react';
import './Product.css';

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            
            <img src={image} alt="" />
            
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small> ‎¥‎ </small>
                    <strong>{price}</strong> 
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>
                
            <button>Add to basket</button>
            
        </div>
    )
}

export default Product;
