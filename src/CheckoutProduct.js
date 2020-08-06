import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {
    
    const [{basket}, dispatch] = useStateValue();
    console.log(id, image, title, price, rating);
    const removeFromBasket = () => {
        // remove item from basket ...
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    }
    
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small> ‎¥‎ </small>
                    <strong>{price}</strong> 
                </p>

                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
            
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
