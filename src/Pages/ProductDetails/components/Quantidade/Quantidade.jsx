import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Campo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qt: 1,
    };
    this.render2 = this.render2.bind(this);
  }
  render2(qt) {
    return (
      <div className="container">
        <div>
          <button
            className="SomeAndRemove"
            type="button"
            onClick={() => this.setState((state) => ({ qt: state.qt + 1 }))}
          >
            <i className="material-icons">add</i>
          </button>
        </div>
        <p>{qt}</p>
        <div>
          <button
            className="SomeAndRemove"
            type="button"
            onClick={() => this.setState((state) => ({ qt: (state.qt > 1) ? state.qt - 1 : 1 }))}
          >
            <i className="material-icons">remove</i>
          </button>
        </div>
        <button type="button" onClick={() => this.props.enviaCard(this.state.qt)}>
          Adicionar no carrinho
        </button>
      </div>
    );
  }
  render() {
    const { qt } = this.state;
    return (
      <div className="comp_prod_details_qt">
        <strong>Quantidade</strong>
        {this.render2(qt)}
      </div>
    );
  }
}

export default Campo;

Campo.propTypes = PropTypes.shape({
  enviaCard: PropTypes.func,
}).isRequired;
