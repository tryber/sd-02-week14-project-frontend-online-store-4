import React, { Component } from 'react';

import Card from './Card/Card';
import './style.css';

class Pagamento extends Component {
  render() {
    return (
      <div className="payment_pagamento">
        <div className="boleto">
          <label>Boleto</label>
          <Card value='boleto' />
        </div>
        <div className="cred">
          <label>Cartão de crédito</label>
          <div>
            <Card value='visa' title='Visa' />
            <Card value='elo' title='Elo' />
            <Card value='master_card' title='Master Card' />
          </div>
        </div>
      </div>
    );
  }
}

export default Pagamento;
