import React, { Component } from 'react';
import emptyBox from './images/empty_box.png';
import emptyShopCar from './images/empty_car.svg';
import '../ShoppingCart/ShoppingCart.css';
import backButton from './images/backButton.png';

export default class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false,
      items: [],
    };
  }


  loadingEmpty() {
    return (
      <div className="shoppingCart">
        <div className="buttonReturn">
          <img src={backButton} alt="backButton" />
        </div>
        <div className="clear" />
        <div className="emptyCarPai">
          <div className="emptyCar">
            <img src={emptyShopCar} alt="emptyCar" />
            <span>
            Carrinho de Compras
            </span>
          </div>
        </div>
        <div className="emptyBoxPai">
          <img className="emptyBox-Img" src={emptyBox} alt="emptyBox" />
          <span>
          Seu carrinho de compras está vazio.
          </span>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.loadingEmpty()}
      </div>
    );
  }
}
