import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import emptyBox from './images/empty_box.png';
import emptyShopCar from './images/empty_car.svg';
import '../ShoppingCart/ShoppingCart.css';
import backButton from './images/backButton.png';

function carregaImagemTitulo(title, image) {
  return (
    <div className="imagemTitulo">
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
}

function valorProduto(price) {
  return (
    <div className="valorProduto">
      <p>R$ {((price * 100) / 100).toFixed(2)}</p>
    </div>
  );
}

function finalizaCompra() {
  return (
    <div>
      <Link to={'/payment'}>
        <button>
          Finalizar Compra
        </button>
      </Link>
    </div>
  );
}

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

  static jsonParse(infoKey, i) {
    if (JSON.parse(localStorage.getItem(infoKey)).count > 0) {
      this.atualizaState(infoKey, i);
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      load: false,
      items: [],
    };
    this.atualizaState = this.atualizaState.bind(this);
    this.carregaProdutos = this.carregaProdutos.bind(this);
    this.totalProdutos = this.totalProdutos.bind(this);
    this.abaixaContador = this.abaixaContador.bind(this);
    this.aumentaContador = this.aumentaContador.bind(this);
    this.clearProduto = this.clearProduto.bind(this);
    this.addBtn = React.createRef();
  }

  componentDidMount() {
    const infoKey = Object.keys(localStorage);
    for (let i = 0; i < infoKey.length; i += 1) {
      if (infoKey[i].match(/Item/)) {
        ShoppingCart.jsonParse(infoKey[i], i);
      }
    }
  }

  atualizaState(infoKey, i) {
    const objKeys = JSON.parse(localStorage.getItem(infoKey[i]));
    if (Object.keys(objKeys)) {
      this.setState((state) => ({
        load: true,
        items: [...state.items, objKeys],
      }));
    }
  }

  clearProduto(id) {
    return (
      <button
        className="SomeAndRemove"
        type="button"
        onClick={(() => {
          const { items } = this.state;
          localStorage.removeItem(`Item${id}`);
          const itemUnit = items.find((item) => item.id === id);
          const resul = items.indexOf(itemUnit);
          const { count } = itemUnit;
          localStorage.setItem('CartCount', Number(localStorage.getItem('CartCount')) - count);
          items.splice(resul, 1);
          this.setState((state) => ({
            items: state.items,
          }));
        })}
      >
        <i className="material-icons">
          clear
        </i>
      </button>
    );
  }

  aumentaContador(value) {
    const { items } = this.state;
    const index = items.indexOf(items.find((e) => e.id === value));
    if (items[index].available_quantity > 0) {
      items[index].count += 1;
      this.setState({ items });
      items[index].available_quantity -= 1;
      localStorage.setItem(`Item${value}`, JSON.stringify(items[index]));
      localStorage.setItem('CartCount', Number(localStorage.getItem('CartCount')) + 1);
    }
  }

  abaixaContador(value) {
    const { items } = this.state;
    const countValue = items.find((e) => e.id === value);
    const index = items.indexOf(countValue);
    if (countValue.count >= 1) {
      items[index].count -= 1;
      items[index].available_quantity += 1;
      this.setState({ items });
      localStorage.setItem(`Item${value}`, JSON.stringify(items[index]));
      localStorage.setItem('CartCount', Number(localStorage.getItem('CartCount')) - 1);
    }
    if (countValue.count === 0) {
      items.splice(index, 1);
      localStorage.removeItem(`Item${value}`);
      this.setState({ items });
    }
  }

  carregaProdutos(items, index) {
    const { title, price, thumbnail, id } = items;
    return (
      <div className="containerCarrega" key={index}>
        {this.clearProduto(id)}
        {carregaImagemTitulo(title, thumbnail)}
        <div className="containerBotoes">
          <div className="somaReduz">
            <button
              className="SomeAndRemove"
              type="button"
              onClick={() => this.abaixaContador(id)}
            >
              <i className="material-icons">remove</i>
            </button>
          </div>
          {items.count}
          <div className="somaReduz">
            <button
              className="SomeAndRemove"
              type="button"
              onClick={() => this.aumentaContador(id)}
              ref={this.addBtn}
            >
              <i className="material-icons">add</i>
            </button>
          </div>
          {valorProduto(price)}
        </div>
      </div>
    );
  }

  totalProdutos() {
    const { items } = this.state;
    return (
      <div>
        Valor Total da Compra: R$
        {items.reduce((curr, acc) => (curr + (((Number(acc.count) * 100) / 100) *
          ((Number(acc.price) * 100) / 100))), 0).toFixed(2)
        }
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
        {finalizaCompra()}
      </div>
    );
  }
}
