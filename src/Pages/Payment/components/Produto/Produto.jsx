import React, { Component } from 'react';

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

export default Produto;
