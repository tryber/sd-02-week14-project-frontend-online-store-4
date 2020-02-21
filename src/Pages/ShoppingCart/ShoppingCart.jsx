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
    };
    this.atualizaState = this.atualizaState.bind(this);
    this.quantidadeProduto = this.quantidadeProduto.bind(this);
    this.carregaProdutos = this.carregaProdutos.bind(this);
    this.totalProdutos = this.totalProdutos.bind(this);
    this.finalizaCompra = this.finalizaCompra.bind(this);
    this.atualizaContador = this.atualizaContador.bind(this);
  }

  componentDidMount() {
    const infoKey = Object.keys(localStorage);
    for (let i = 0; i < infoKey.length; i += 1) {
      if (infoKey[i] !== 'CartCount' && !infoKey[i].match(/ProductDetails/)) {
        this.atualizaState(infoKey, i);
      }
    }
  }

  atualizaState(infoKey, i) {
    const objKeys = JSON.parse(localStorage.getItem(infoKey[i]));
    if (Object.keys(objKeys).length > 0) {
      this.setState((state) => ({
        load: true,
        items: [...state.items, objKeys],
      }));

    }

    quantidadeProduto(count) {
      return (
        <div className="somaReduz">
          <p>{count}</p>
        </div>
      );
    }

    clearProduto() {
      return (
        <button
          className="SomeAndRemove"
          type="button"
        >
          <i className="material-icons">
            clear
        </i>
        </button>
      );
    }

    carregaImagemTitulo(title, image) {
      return (
        <div className="imagemTitulo">
          <div>
            <img src={image} alt={title}></img>
          </div>
          <div>
            <p>{title}</p>
          </div>
        </div>
      );
    }

    atualizaContador(value) {
      const { items } = this.state
      const contador = items.find((valor) => valor.id === value).count
      this.quantidadeProduto(contador)
    }

    carregaProdutos(items, index) {
      const { title, price, thumbnail, count, id } = items;
      return (
        <div className="containerCarrega" key={index}>
          {this.clearProduto()}
          {this.carregaImagemTitulo(title, thumbnail)}
          <div className="containerBotoes">
            <div className="somaReduz">
              <button
                className="SomeAndRemove"
                type="button"
                onClick={() => this.atualizaContador(id)}
              >
                <i className="material-icons">remove</i>
              </button>
            </div>
            {this.quantidadeProduto(count)}
            <div className="somaReduz">
              <button
                className="SomeAndRemove"
                type="button"
                onClick={() => this.setState((state) => ({ count: state.count + 1 }))}
              >
                <i className="material-icons">add</i>
              </button>
            </div>
            {this.valorProduto(price)}
          </div>
        </div>
      );
    }

    valorProduto(price) {
      return (
        <div className="valorProduto">
          <p>R$ {price}</p>
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
      const { load, items } = this.state;
      if (!load) return ShoppingCart.loadingEmpty();
      return (
        <div className="containerGeral">
          {ShoppingCart.botaoVolta()}
          {items.map((item, index) => this.carregaProdutos(item, index))}
          {this.totalProdutos()}
          {this.finalizaCompra()}
        </div>
      );
    }
  }
