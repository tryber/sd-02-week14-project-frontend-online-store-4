import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import emptyBox from './images/empty_box.png';
import emptyShopCar from './images/empty_car.svg';
import '../ShoppingCart/ShoppingCart.css';
import backButton from './images/backButton.png';

export default class ShoppingCart extends Component {
  static loadingEmpty() {
    return (
      <div className="shoppingCart">
        <div className="buttonReturn">
          <Link className="buttonReturn" to="/">
            <img src={backButton} alt="backButton" />
          </Link>
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

  constructor(props) {
    super(props);
    this.state = {
      load: false,
      items: [],
    };
    this.atualizaState = this.atualizaState.bind(this);
  }

  atualizaState(objKeys) {
    this.setState((state) => ({
      items: [...state.items, objKeys],
    }));
  }

  componentDidMount() {
    const infoKey = Object.keys(localStorage);
    for (let i = 0; i < infoKey.length; i += 1) {
      const objKeys = JSON.parse(localStorage.getItem(infoKey[i]));
      this.atualizaState(objKeys);
    }
  }

  render() {
    const { load } = this.state;
    if (!load) return ShoppingCart.loadingEmpty();

    return (
      <div>
        Hello World!
      </div>
    );
  }
}
