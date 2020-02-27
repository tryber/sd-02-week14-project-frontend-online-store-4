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
          <p>{((price * 100) / 100).toFixed(2)}</p>
        </div>
      </div>
    );
  }
}

Produto.propTypes = {
  produto: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
  }),
};

Produto.defaultProps = {
  produto: {
    thumbnail: '',
    title: '',
    price: 0,
    count: 0,
  },
};

export default Produto;
