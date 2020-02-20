import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

Card.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
};

Card.defaultProps = {
  value: '',
  title: '',
};

export default Card;
