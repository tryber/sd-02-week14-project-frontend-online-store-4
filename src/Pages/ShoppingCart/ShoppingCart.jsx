import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import emptyBox from './images/empty_box.png';
import emptyShopCar from './images/empty_car.svg';
import '../ShoppingCart/ShoppingCart.css';
import backButton from './images/backButton.png';

export default class ShoppingCart extends Component {
  static botaoVolta() {
    return (
      <div className="buttonReturn">
        <Link className="buttonReturn" to="/">
          <img src={backButton} alt="backButton" />
        </Link>
      </div>
    );
  }

  static loadingEmpty() {
    return (
      <div className="shoppingCart">
        {this.botaoVolta()}
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
      qt: '',
    };
    this.atualizaState = this.atualizaState.bind(this);
    this.quantidadeProduto = this.quantidadeProduto.bind(this);
    this.carregaProdutos = this.carregaProdutos.bind(this);
    this.totalProdutos = this.totalProdutos.bind(this);
    this.finalizaCompra = this.finalizaCompra.bind(this);
  }

  componentDidMount() {
    const infoKey = Object.keys(localStorage);
    for (let i = 0; i < infoKey.length; i += 1) {
      if (infoKey[i] === 'CartCount' && infoKey[i + 1] !== undefined) i += 1;
      const objKeys = JSON.parse(localStorage.getItem(infoKey[i]));
      this.atualizaState(objKeys);
    }
  }

  atualizaState(objKeys) {
    this.setState((state) => ({
      load: true,
      items: [...state.items, objKeys],
      qt: 1,
    }));
  }
  
  quantidadeProduto() {
    return (
      <div>
          <p>1</p>
      </div>
    );
  }

  carregaProdutos() {
    return (
      <div>
        <div>
          <button>Excluir</button>
        </div>
        <div>
          Imagem
        </div>
        <div>
          <button
            className="SomeAndRemove"
            type="button"
            onClick={() => this.setState((state) => ({ qt: state.qt + 1 }))}
          >
            <i className="material-icons">remove</i>
          </button>
        </div>
        {this.quantidadeProduto()}
        <div>
          <button
            className="SomeAndRemove"
            type="button"
            onClick={() => this.setState((state) => ({ qt: state.qt + 1 }))}
          >
            <i className="material-icons">add</i>
          </button>
        </div>
      </div>
    );
  }

  totalProdutos() {
    return (
      <div>
        Valor Total da Compra: R$ XXXX,XX
      </div>
    );
  }

  finalizaCompra() {
    return (
      <div>
        <button>
          Finalizar Compra
        </button>
      </div>
    );
  }

  render() {
    const { load } = this.state;
    if (!load) return ShoppingCart.loadingEmpty();

    return (
      <div>
        {this.carregaProdutos()}
        {this.totalProdutos()}
        {this.finalizaCompra()}
      </div>
    );
  }
}
