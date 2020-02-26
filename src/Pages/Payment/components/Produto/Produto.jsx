import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Produto extends Component {
  render() {
    const { thumbnail, title, price, count } = this.props.produto;
    return (
      <div className="payment_comp_produto">
        <img src={thumbnail} alt="" />
        <div>
          <strong>unid:</strong>
          <p>{count}</p>
        </div>
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
    count: PropTypes.number,
  }),
};

Produto.defaultProps = {
  produto: {
    img: '',
    title: '',
    price: 0,
    count: 0,
  },
};

export default Produto;
