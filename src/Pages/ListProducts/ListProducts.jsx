import React from 'react';
import './ListProducts.css';
import ListFilter from './Components/ListFilter';

class ListProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Você ainda não realizou uma Busca',
      results: '',
    };
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
          <input className="searchBar" 
          type="text" 
          onChange={(e) => this.setState({ results: e.target.value })} />
          <h1>{(results === '') ? value : results}</h1>
        </div>
      </div>
    );
  }
}

export default ListProducts;
