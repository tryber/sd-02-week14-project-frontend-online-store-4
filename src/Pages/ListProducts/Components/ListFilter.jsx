import React from 'react';
import PropTypes from 'prop-types';

class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
    this.trocaIcone = this.trocaIcone.bind(this);
  }

  componentDidMount() {
    fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((resolve) => resolve.json())
    .then((result) => {
      result.map((item) => ({ ...item, isSelected: false }));
      this.setState({ term: result });
    });
  }

  trocaIcone(index) {
    const icone = this.state.term;
    for (let i = 0; i < icone.length; i += 1) {
      this.setState({
        icone: icone[i].isSelected = false,
      });
    }
    this.setState({
      icone: !icone[index].isSelected ?
      icone[index].isSelected = true :
      icone[index].isSelected = false,
    });
  }

  render() {
    const { term } = this.state;
    const { callback } = this.props;
    return (
      <div className="container">{(term !== '') ? term.map((categoria, index) => (
        <label key={categoria.id} htmlFor={categoria.id} className="labels">{categoria.name}
          <div className="containerCategorias">
            <span>
              <i className="material-icons">
                { categoria.isSelected ? 'check_box' : 'check_box_outline_blank' }
              </i>
            </span>
            <input
              className="inputs"
              id={categoria.id}
              name="categoria"
              value={categoria.id}
              onClick={() => this.trocaIcone(index)}
              onChange={((e) => callback(e.target.value))}
              type="checkbox"
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
