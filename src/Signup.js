import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
    return (
        <div className="signup">
            <div className="signup__rightside">
                <div className="signup__hero">
                    <h2>
                        Create an <span>IKEA Family</span> profile
                    </h2>
                    <p>Already have an account?
                        <Link to="/login">
                            Login
                        </Link>
                    </p>
                </div>
                <div className="signup__heroImages">
                    <img src="https://images.pexels.com/photos/3992383/pexels-photo-3992383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                    <img src="https://images.pexels.com/photos/1330645/pexels-photo-1330645.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                    <img src="https://images.pexels.com/photos/1054974/pexels-photo-1054974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                    <img src="https://images.pexels.com/photos/3991265/pexels-photo-3991265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                    <img src="https://images.pexels.com/photos/3890171/pexels-photo-3890171.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                    <img src="https://images.pexels.com/photos/2875814/pexels-photo-2875814.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                    <img src="https://images.pexels.com/photos/2418645/pexels-photo-2418645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                    <img src="https://images.pexels.com/photos/3621486/pexels-photo-3621486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                    <img src="https://images.pexels.com/photos/3764496/pexels-photo-3764496.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                </div>
            </div>
            <div className="signup__lefside">
                <form>
                    <input type="text" placeholder="First name*"/>
                    <input type="text" placeholder="Surname*"/>
                    <input type="" placeholder="Date of birth*"/>


                </form>
            </div>
            
        </div>
    )
}

export default Signup;
