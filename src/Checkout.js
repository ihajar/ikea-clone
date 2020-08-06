import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
    const [{basket}] = useStateValue();

     
    return (
        <div className="checkout">
            {/* <h1> Your shopping Basket</h1> */}
            {basket?.length === 0 ? (
                <div>
                    <h2>Your shopping basket is empty</h2>
                    <p>
                        You have no items in your basket.
                        To buy one or "Add to basket" next to the item.
                    </p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>

                    {/* List out all of the checkout products */}
                    {basket?.map((item) => (
                        
                        <CheckoutProduct 
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                        />
                        ))}
                </div>
            )}
        </div>
    )
}

export default Checkout;
