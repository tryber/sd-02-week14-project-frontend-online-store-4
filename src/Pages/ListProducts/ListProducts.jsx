import React from 'react';
import './ListProducts.css';
import ListFilter from './Components/ListFilter';
import CardProduct from './Components/CardProduct';

class ListProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Você ainda não realizou uma Busca',
      results: [],
    };
    this.pesquisa = this.pesquisa.bind(this);
  }

  pesquisa(e) {
    fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${e.target.value}`)
      .then((resolve) => resolve.json())
      .then((res) => {
        if (res.resolve === undefined) this.setState({ value: 'Nenhum Produto foi Encontrado' });
        this.setState({
          results:
            res.results.reduce((acc, curr) => {
              const { id, title, price, thumbnail } = curr;
              return [...acc, { id, title, price, thumbnail }];
            }, []),
        });
      });
  }

  render() {
    const { value, results } = this.state;
    return (
      <div className="maxContain" >
        <div className="SearchList">
          <ListFilter />
        </div>
        <div className="header">
          <img src="https://image.flaticon.com/icons/svg/126/126083.svg" alt="carrinho de compras" />
          <input
            className="searchBar"
            type="text"
            onKeyDown={(e) => { if (e.key === 'Enter') this.pesquisa(e); }}
          />
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
