import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { Link } from 'react-router-dom';
import LockIcon from '@material-ui/icons/Lock';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

import './Checkout.css';

function Checkout() {
    const [{basket}] = useStateValue();

     
    return (
        <div className="checkout">
            <div className="checkout__left">
                {basket?.length === 0 ? (
                    <div className="checkout__empty">
                        <img src="https://www.ikea.com/nl/en/shoppingcart/static/media/ill-alien.cb42647f.svg" alt=""/>
                        <h5>Shopping cart (0)</h5>
                        <div  className="checkout__emptyDetails">
                            <p>
                                Your shopping bag is currently empty
                            </p>
                            <Link to="/login" className="checkout__emptyLink">
                                Create an account
                            </Link>
                        </div>
                        
                        <div className="checkout__Redirect">
                            
                            <button>
                                <Link to="/products" className="checkout__buttonLink">
                                    Browse our products
                                </Link>
                            </button> 
                            <button>
                                <Link to="/login" className="checkout__buttonLink">
                                    Login
                                </Link>
                            </button>
                        </div>
                        <div className="checkout__emptyShow">
                            <div className="checkout__emptyExtra">
                                <LockIcon/>
                                <h5>Secure shopping</h5>
                                <p>with SSL data encryption</p>
                            </div>
                            <div className="checkout__emptyExtra">
                                <LoyaltyIcon/>
                                <h5>One year garantee</h5>
                                <p>to change your mind</p>
                            </div>
                        </div>
                        
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

            {basket.length > 0 && (
                <div className="checkout__right">
                    {/* <h2>Subtotal</h2> */}
                    <Subtotal/>
                </div>
            )}
        </div>
    );
}

export default Checkout;
