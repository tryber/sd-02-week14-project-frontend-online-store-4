import React from 'react';
import PropTypes from 'prop-types';

class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      icone: false,
      iconeLoad: 'check_box_outline_blank',
    };
    this.trocaIcone = this.trocaIcone.bind(this);
  }

  componentDidMount() {
    fetch('https://api.mercadolibre.com/sites/MLB/categories')
      .then((resolve) => resolve.json())
      .then((result) => this.setState({ term: result, iconeLoad: [] }));
  }

  trocaIcone(value) {/* 
    const { term } = this.state;
    const index = term.indexOf(term.find((e) => e.id === value)); */
/* 
    const node = this.myRef.current;
    node.innerText = 'check_box_outline_blank'
    console.log(node); */
/*     term[index].count += 1;
    this.setState({ items });

    const { icone } = this.state;
    !icone ? this.setState({
      iconeLoad: 'check_box',
      icone: !icone,
    }) :
    this.setState({
      iconeLoad: 'check_box_outline_blank',
      icone: !icone,
    }); */
  }

  render() {
    const { term, iconeLoad } = this.state;
    const { callback } = this.props;
    return (
      <div className="container">{(term !== '') ? term.map((categoria) => (
        <label key={categoria.id} htmlFor={categoria.id} className="labels">{categoria.name}
          <div className="containerCategorias">
            <i className="material-icons">
            {iconeLoad}
            </i>
            <input
              className="inputs"
              id={categoria.id}
              name="categoria"
              value={categoria.id}
              onClick={() => this.trocaIcone(categoria.id)}
              onChange={((e) => callback(e.target.value))}
              type="radio"
            />
          </div>
        </label>
      )) : term}</div>
    );
  }
}

export default SearchList;

SearchList.propTypes = PropTypes.shape({
  callback: PropTypes.func,
}).isRequired;
