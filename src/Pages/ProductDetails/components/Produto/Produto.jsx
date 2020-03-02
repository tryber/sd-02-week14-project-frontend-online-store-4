import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Campo from '../Campo/Campo';

import './style.css';

class Produto extends Component {
  render() {
    const { obj } = this.props;
    const { available_quantity: availableQuantity,
      sold_quantity: soldQuantity, condition } = obj;
    const { seller_address: { country: { name: country },
      state: { name: state }, city: { name: city } } } = obj;
    return (
      <div className="container-geral">
        <div className="dados">
          <div className="campos">
            <Campo campo={`${availableQuantity} unidade(s)`} label={'Estoque'} />
            <Campo campo={`${soldQuantity} vendido(s)`} label={'Vendidos'} />
            <Campo campo={(condition === 'new') ? 'Novo' : 'Usado'} label={'Condição'} />
          </div>
          <div className="endereco_vendedor">
            <strong>Endereço do vendedor: </strong>
            <div className="local">
              <Campo campo={country} label={'País'} />
              <Campo campo={state} label={'Estado'} />
              <Campo campo={city} label={'Cidade'} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Produto.propTypes = {
  obj: PropTypes.shape({
    thumbnail: PropTypes.string,
    available_quantity: PropTypes.number,
    sold_quantity: PropTypes.number,
    condition: PropTypes.string,
    shipping: PropTypes.shape({
      freeShipping: PropTypes.bool,
    }).isRequired,
    seller_address: PropTypes.shape({
      country: PropTypes.shape({
        name: PropTypes.string,
      }).isRequired,
      state: PropTypes.shape({
        name: PropTypes.string,
      }).isRequired,
      city: PropTypes.shape({
        name: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Produto;
