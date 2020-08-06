import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';

function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <h1> Your shopping Basket</h1>
        </div>
    )
}

export default Checkout;
