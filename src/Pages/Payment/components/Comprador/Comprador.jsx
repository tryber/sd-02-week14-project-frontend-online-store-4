import React, { Component } from 'react';
import Input from './Input/Input';
import './style.css';

class Comprador extends Component {
  render() {
    const { cb } = this.props.produtoHandle;
    return (
      <div className="payment_comprador">
        <p>Informações do comprador</p>
        <div className="container">
          <Input name={'nome'} place={'Nome completo'} onChange={cb} />
          <Input name={'email'} place={'Email'} onChange={cb} />
          <Input name={'cpf'} place={'CPF'} onChange={cb} />
          <Input name={'tel'} place={'Telefone'} onChange={cb} />
        </div>
        <div className="container2">
          <Input name={'cep'} place={'Cep'} onChange={cb} />
          <Input name={'end'} place={'Endereço'} onChange={cb} />
        </div>
        <div className="container3">
          <Input name={'comp'} place={'Complemento'} onChange={cb} />
          <Input name={'num'} place={'Número'} onChange={cb} />
          <Input name={'cid'} place={'Cidade'} onChange={cb} />
          <Input name={'est'} place={'Estado'} onChange={cb} />
        </div>
      </div>
    );
  };
}

export default Comprador;
