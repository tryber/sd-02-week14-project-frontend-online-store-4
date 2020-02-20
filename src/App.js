import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import ListProduct from './Pages/ListProducts/ListProducts';
import ProductDetails from './Pages/ProductDetails/ProductDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objVazio: {},
    };
    this.bananinha = this.bananinha.bind(this);
  }

  bananinha(param) {
    this.setState({
      objVazio: param,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact path="/"
            render={(props) => (
              <ListProduct {...props} banana={this.bananinha} />
            )}
          />
          <Route path="/shopping-cart" component={ShoppingCart} />
          <Route
            path="/product-details/:id"
            render={(props) => (
              <ProductDetails {...props} passaObj={this.state.objVazio} />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
