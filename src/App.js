import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Products from './Products';
import Rooms from './Rooms';
import Checkout from './Checkout';


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
            <h1>Login page</h1>
          </Route>
          <Route path="/products">
            <Header/>
            <Products/>
          </Route>
          <Route path="/rooms">
            <Header/>
            <Rooms />
          </Route>

          <Route path="/">
            <Header/>
            <Home />
           
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
