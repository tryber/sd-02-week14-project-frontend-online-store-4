import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Produto extends Component {
  render() {
    const { img, title, price } = this.props.produto;
    return (
      <div className="payment_comp_produto">
        <img src={img} alt="" />
        <div>
          <strong>produto:</strong>
          <p>{title}</p>
        </div>
        <div>
          <strong>preço:</strong>
          <p>{price}</p>
        </div>
      </div>
    );
  }
}

Produto.propTypes = {
  produto: PropTypes.shape({
  img: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  }),
};

Produto.defaultProps = {
  produto: {
    img: '',
    title: '',
    price: 0,
  }
};

export default Produto;
