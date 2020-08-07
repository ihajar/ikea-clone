import React from 'react';
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


function App() {
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
