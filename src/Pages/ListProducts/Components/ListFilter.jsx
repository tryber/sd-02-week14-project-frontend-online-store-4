import React from 'react';

class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    }
  }

  componentDidMount() {
    fetch('https://api.mercadolibre.com/sites/MLB/categories')
      .then(resolve => resolve.json())
      .then(result => this.setState({ term: result }))
  }

  render() {
    const { term } = this.state;
    return (
      <div>{(term !== '') ? term.map(categoria => (
        <div key={categoria.id}>
          <label id={categoria.id}><input type="checkbox" />{categoria.name}</label>
        </div>
      )) : term}</div>
    )
  }
}

export default SearchList;