import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import ListProduct from './Pages/ListProducts/ListProducts';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListProduct}/>
        <Route path="/shopping-cart" component={ShoppingCart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
