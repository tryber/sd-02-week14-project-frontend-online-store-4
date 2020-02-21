import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Card extends Component {
  render() {
    const { value, title = '', icon } = this.props;
    return (
      <div className="payment_pagamento_card">
        <input type="radio" id={value} name="payment" value={value} />
        <p>{title}</p>
        <i className="material-icons">
          {icon}
        </i>
      </div>
    );
  }
}

Card.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
};

Card.defaultProps = {
  value: '',
  title: '',
  icon: '',
};

export default Card;
