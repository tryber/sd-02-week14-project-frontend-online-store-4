import React from 'react';

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
      <div>
        <input type="text" onChange={(e) => this.setState({ results: e.target.value })} />
        <h1>{(results === '') ? value : results}</h1>
      </div>
    );
  }
}

export default ListProducts;
