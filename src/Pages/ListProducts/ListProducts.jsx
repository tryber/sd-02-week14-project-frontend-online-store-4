import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ListProducts.css';
import ListFilter from './Components/ListFilter';
import CardProduct from './Components/CardProduct';
import lupa from './images/lupa.png';

class ListProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Você ainda não realizou uma Busca',
      results: [],
      valueradio: '',
      valorPesquisa: '',
      carrinhoCont: 0,
    };
    this.pesquisa = this.pesquisa.bind(this);
    this.callback = this.callback.bind(this);
    this.caixaLupa = this.caixaLupa.bind(this);
    this.returnParam = this.returnParam.bind(this);
    this.numberCart = this.numberCart.bind(this);
    this.ValorCarrinho = this.ValorCarrinho.bind(this);
  }
  componentDidMount() {
    this.ValorCarrinho()
  }
  ValorCarrinho() {
    this.setState({ carrinhoCont: localStorage.getItem('CartCount') })
  }
  reduceFunction(res) {
    if (res.resolve === undefined) this.setState({ value: 'Nenhum Produto foi Encontrado' });
    this.setState({
      results:
        res.results.reduce((acc, curr) => [...acc, curr], []),
    });
  }
  pesquisa(e) {
    const { valueradio } = this.state;
    fetch((this.state.valueradio === '') ? `https://api.mercadolibre.com/sites/MLB/search?q=${e}` : `https://api.mercadolibre.com/sites/MLB/search?category=${valueradio}&q=${e}`)
      .then((resolve) => resolve.json())
      .then((res) => {
        this.reduceFunction(res);
      });
  }

  callback(value) {
    this.setState({ valueradio: value });
    if (this.state.valorPesquisa === '') {
      fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${value}`)
        .then((resolve) => resolve.json())
        .then((res) => { this.reduceFunction(res); });
    }
  }

  caixaLupa() {
    return (
      <div className="container-input">
        <div className="caixaLupa">
          <input
            className="searchBar"
            type="text"
            onChange={(e) => this.setState({ valorPesquisa: e.target.value })}
            onKeyDown={(e) => { if (e.key === 'Enter') this.pesquisa(e.target.value); }}
          />
          <div className="lupa">
            <div>
              <img className="lupinha" src={lupa} alt="Lupa" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  returnParam(param) {
    const { banana } = this.props;
    banana(param);
  }

  numberCart() {
    this.setState((state) => {
      localStorage.setItem('CartCount', (state.carrinhoCont + 1))
      return ({ carrinhoCont: state.carrinhoCont + 1, })
    });
  }

  render() {
    const { value, results, carrinhoCont } = this.state;
    return (
      <div className="maxContain" >
        <div className="SearchList">
          <ListFilter callback={this.callback} />
        </div>
        <div className="header">
          <div className="container-cart">
            <Link className="carrinhoCart" to="/shopping-cart">
              <img src="https://image.flaticon.com/icons/svg/126/126083.svg" alt="carrinho de compras" />
              <span>{carrinhoCont}</span>
            </Link>
          </div>
          {this.caixaLupa()}
          {(Object.keys(results).length === 0) ?
            <h1>{value}</h1> :
            <CardProduct arrCard={results} numberCart={this.numberCart} retornaParam={this.returnParam} />
          }
        </div>
      </div>
    );
  }
}

export default ListProducts;
ListProducts.propTypes = PropTypes.shape({
  banana: PropTypes.func,
}).isRequired;
