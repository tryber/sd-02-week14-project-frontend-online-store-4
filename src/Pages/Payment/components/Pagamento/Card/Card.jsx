import React, { Component } from 'react';

import './style.css';

class Card extends Component {
  render() {
  const { value, title = '' } = this.props;
    return (
      <div className="payment_pagamento_card">
        <input type="radio" id={value} name="payment" value={value} />
        <p>{title}</p>
        <i class="material-icons">
          credit_card
        </i>
      </div>
    );
  }
}

export default Card;
