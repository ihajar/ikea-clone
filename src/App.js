import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Products from './Products';
import Rooms from './Rooms';
import Checkout from './Checkout';
import Login from './Login';
import Signup from './Signup';
import Footer from './Footer';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function App() {
  const[{user}, dispatch] = useStateValue();

  // a Piece of code which runs on given condition
  // It's called useEffect and it will runs once the App componenet loads.
  // we create a listener to listen how many times the user login/logout or signup
  
  useEffect(() => {
   
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in ...
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        // the user is logged out ...
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      // Any cleanup operations go in here...
      unsubscribe();
    }
  }, []); 
  console.log("USER IS >>>>>", user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout />            
          </Route>

          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <Header/>
            <Signup/>
          </Route>
          <Route path="/products">
            <Header/>
            <Products/>
            <Footer/>
          </Route>
          <Route path="/rooms">
            <Header/>
            <Rooms />
            <Footer/>
          </Route>

          <Route path="/">
            <Header/>
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
