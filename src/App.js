import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Products from './Products';



function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
          <Header/>
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login page</h1>
          </Route>
          <Route path="/products">
          <Header/>
          <Products/>
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
