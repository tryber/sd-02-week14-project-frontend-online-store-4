import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.cb(e);
  }

  render() {
    const { value, title = '', icon } = this.props;
    return (
      <div className="payment_pagamento_card">
        <input type="radio" id={value} name="pagamento" value={value} onChange={this.onChange} />
        <p>{title}</p>
        <i className="material-icons">
          {icon}
        </i>
      </div>
    );
  }
}

Card.propTypes = {
  cb: PropTypes.func.isRequired,
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
