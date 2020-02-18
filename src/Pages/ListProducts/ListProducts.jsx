import React from 'react';
import './ListProducts.css';
import ListFilter from './Components/ListFilter';
import CardProduct from './Components/CardProduct';
import lupa from './images/lupa.png';

class ListProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Você ainda não realizou uma Busca',
      results: [],
      valueradio: '',
      valorPesquisa: '',
    };
    this.pesquisa = this.pesquisa.bind(this);
    this.callback = this.callback.bind(this);
  }
  reduceFunction(res) {
    if (res.resolve === undefined) this.setState({ value: 'Nenhum Produto foi Encontrado' });
    this.setState({
      results:
        res.results.reduce((acc, curr) => {
          const { id, title, price, thumbnail } = curr;
          return [...acc, { id, title, price, thumbnail }];
        }, []),
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

  render() {
    const { value, results } = this.state;
    return (
      <div className="maxContain" >
        <div className="SearchList">
          <ListFilter callback={this.callback} />
        </div>
        <div className="header">
          <img src="https://image.flaticon.com/icons/svg/126/126083.svg" alt="carrinho de compras" />
          <div className="container-input">
            <div className="caixaLupa">
              <input
                className="searchBar"
                type="text"
                onKeyDown={(e) => { if (e.key === 'Enter') this.pesquisa(e); }}
              />
              <div className="lupa">
                <img src={lupa} alt="lupa" />
              </div>
            </div>
          </div>

          {(Object.keys(results).length === 0) ?
            <h1>{value}</h1> :
            <CardProduct arrCard={results} />
          }
        </div>
      </div>
    );
  }
}

export default ListProducts;
