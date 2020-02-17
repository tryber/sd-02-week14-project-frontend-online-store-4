import React from 'react';
import './ListProducts.css';
import ListFilter from './Components/ListFilter';

class ListProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Você ainda não realizou uma Busca',
      results: {
        name: '',
        price: '',
        image: '',
      },
    };
    this.pesquisa = this.pesquisa.bind(this);
  }

  pesquisa(e) {
    fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${e.target.value}`)
      .then(resolve => resolve.json())
      .then(res => {
        this.setState((state)=> ({
          name: res.results.title,
        }))
      })
      console.log(this.state)
  }

  render() {
    const { value, results } = this.state;
    return (
      <div className="maxContain">
        <div className="SearchList">
          <ListFilter />
        </div>
        <div className="header">
          <img src="https://image.flaticon.com/icons/svg/126/126083.svg" alt="carrinho de compras" />
          <input
            className="searchBar"
            type="text"
            onKeyDown={(e) => { if (e.key === 'Enter') this.pesquisa(e) }}
          />
          <h1>{(results.name === '') ? value : results}</h1>
        </div>
      </div>
    );
  }
}

export default ListProducts;
