import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Campo from '../Campo/Campo';

import './style.css';

class Produto extends Component {
  render() {
    const { obj } = this.props;
    const { image, availableQuantity, soldQuantity, condition } = obj;
    const { shipping: { freeShipping } } = obj;
    const { sellerAddress: { country: { name: country },
      state: { name: state }, city: { name: city } } } = obj;
    return (
      <div className="comp_product_details">
        <img src={image} alt="" />
        <div className="dados">
          <div className="campos">
            <Campo campo={availableQuantity} label={'estoque'} />
            <Campo campo={soldQuantity} label={'vendidos'} />
            <Campo campo={condition} label={'condição'} />
            <Campo campo={freeShipping.toString()} label={'frete'} />
          </div>
          <div className="endereco_vendedor">
            <strong>Endereço do vendedor: </strong>
            <div className='local'>
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
    availableQuantity: PropTypes.number,
    soldQuantity: PropTypes.number,
    condition: PropTypes.string,
    shipping: PropTypes.shape({
      freeShipping: PropTypes.bool,
    }).isRequired,
    sellerAddress: PropTypes.shape({
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
