import React, { Component } from 'react';

import Card from './Card/Card';
import './style.css';

class Pagamento extends Component {
  render() {
    return (
      <div className="payment_pagamento">
        <div className="boleto">
          <strong>Boleto</strong>
          <Card value="boleto" icon="menu" />
        </div>
        <div className="cred">
          <strong>Cartão de crédito</strong>
          <div>
            <Card value="visa" title="Visa" icon="credit_card" />
            <Card value="elo" title="Elo" icon="credit_card" />
            <Card value="master_card" title="Master Card" icon="credit_card" />
          </div>
        </div>
      </div>
    );
  }
}

export default Pagamento;
