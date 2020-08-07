import React, {useState} from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';
 
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = event => {
        event.preventDefault(); // this gonna stops the refresh
        // do the login logic
        auth.signInWithEmailAndPassword(email, password)
         .then((auth) => {
            //  here logged in successfully, redirect to homepage
            history.push("/products");
         })
         .catch((e) => alert(e.message));
    }
    const register = event => {
        event.preventDefault(); // this gonna stops the refresh
        // do the register logic
        auth.createUserWithEmailAndPassword(email, password)
         .then(auth => {
            //  create a user and logged in, redirect to homepage
            history.push("/");
         })
         .catch((e) => alert(e.message));
    }


    return (
        <div className="loginpage">
            <div className="login__rightside">
                <div className="login__rightHeader">
                    <Link to="/">
                        <ArrowBackIcon className="login__rightArrow"/>
                     </Link>
                    <img src="https://i.pinimg.com/originals/87/57/3c/87573c4b482d35d350653994b2c96ad4.jpg" alt=""/>
                </div>

                <div className="login__rightHero">
                
                    <h2 className="login__rightTitle">
                        <span>Login </span>
                         to your IKEA account
                    </h2>
                    <p>
                        IKEA will ask you to confirm your contact method(s), 
                        due to security and legal reasons.
                    </p>
                </div>
                <div className="smallFooter">
                    <p>IKEA.nl - 
                     <a className="smallFooter__tag">Cookie Policy. </a>
                     and 
                     <a className="smallFooter__tag"> Privacy Policy.</a>
                    </p>
                    
                    <p>&copy; Inter IKEA Systems B.V. 1999-2020</p>
                </div>
            </div>
            <div className="login__leftside">
                <form classNam="login__form">
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder="Email/mobile number" className="login__input"/>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" placeholder="Password" className="login__input"/>
                    {/* <VisibilityIcon/> */}
                    <button onClick={login} type="submit" className="login__button">Login</button>
                    <Link to="/signup">
                        <button onClick={register} className="signup__button">Create account</button>
                    </Link>
                    
                </form>

                <div className="smallFooter-2">
                    <p>IKEA.nl - 
                     <a className="smallFooter__tag">Cookie Policy. </a>
                     and 
                     <a className="smallFooter__tag"> Privacy Policy.</a>
                    </p>
                    
                    <p>&copy; Inter IKEA Systems B.V. 1999-2020</p>
            </div>
            </div>
           
        </div>
    )
}

export default Login;
