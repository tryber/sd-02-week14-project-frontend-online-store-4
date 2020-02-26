import React, { Component } from 'react';

import Card from './Card/Card';
import './style.css';

class Pagamento extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { red, name } = this.props;
    const cb = this.props.produtoHandle;
    return (
      <div className="payment_pagamento">
        <div className="container">
          <div className="boleto">
            <strong>Boleto</strong>
            <Card value="boleto" icon="menu" cb={cb} />
          </div>
          <div className="cred">
            <strong>Cartão de crédito</strong>
            <div>
              <Card value="visa" title="Visa" icon="credit_card" cb={cb} />
              <Card value="elo" title="Elo" icon="credit_card" cb={cb} />
              <Card value="master_card" title="Master Card" icon="credit_card" cb={cb} />
            </div>
          </div>
        </div>
        {(red) ? <p className="red">{name} é obrigatório</p> : <p />}
      </div>
    );
  }
}

export default Pagamento;
