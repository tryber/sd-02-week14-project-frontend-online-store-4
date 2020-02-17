import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Campo from '../Campo/Campo';

import './style.css';

class Produto extends Component {
  render() {
    const { obj } = this.props;
    const { image, available_quantity, sold_quantity, condition } = obj;
    const { shipping: { free_shipping } } = obj;
    const { seller_address: { country: { name: country }, state: { name: state }, city: { name: city } } } = obj;
    
    return (
      <div className="comp_product_details">
        <img src={image} alt=""/>
        <div className="dados">
          <div className="campos">
            <Campo campo={available_quantity} label={'estoque'} />
            <Campo campo={sold_quantity} label={'vendidos'} />
            <Campo campo={condition} label={'condição'} />
            <Campo campo={free_shipping.toString()} label={'frete'} />
          </div>
          <div className="endereco_vendedor">
            <strong>Endereço do vendedor: </strong>
            <div>
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
    image: PropTypes.string,
    available_quantity:PropTypes.number,
    sold_quantity: PropTypes.number,
    condition: PropTypes.string,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
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
