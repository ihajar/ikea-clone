import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{}, dispatch] = useStateValue();
    const addToBasket = () => {
        // add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                image: image,
                title: title,
                price: price,
                rating: rating
            }
        })
    };
    
    return (
        <div className="product">
            
            <img src={image} alt="" />

            <div className="product__info">
                <p className="product__title">{title}</p>
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
                
            <button onClick={addToBasket} >Add to basket</button>
            
        </div>
    )
}

export default Product;
