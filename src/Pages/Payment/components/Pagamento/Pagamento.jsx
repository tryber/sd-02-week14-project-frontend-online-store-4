import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card/Card';
import './style.css';

class Pagamento extends Component {
  render() {
    const { red, name } = this.props.pagamento;
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

Pagamento.propTypes = {
  produtoHandle: PropTypes.func.isRequired,
  pagamento: PropTypes.shape({
    red: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pagamento;
