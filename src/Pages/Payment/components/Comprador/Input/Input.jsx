import React, { Component } from 'react';

import './style.css'

class Input extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.produtoHandle(e);
  }

  render() {
    const { name, place, cb } = this.props;
    return (
      <div className="payment_comprador_input">
        <input type="text" name={name} placeholder={place} onChange={cb} />
      </div>
    );
  };
}

export default Input;
