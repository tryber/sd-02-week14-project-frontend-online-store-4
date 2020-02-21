import React, { Component } from 'react';
import Input from './Input/Input';
import './style.css';

class Comprador extends Component {
  render() {
    const cb = this.props.produtoHandle;
    return (
      <div className="payment_comprador">
        <p>Informações do comprador</p>
        <div className="container">
          <Input name={'nome'} place={'Nome completo'} cb={cb} />
          <Input name={'email'} place={'Email'} cb={cb} />
          <Input name={'cpf'} place={'CPF'} cb={cb} />
          <Input name={'tel'} place={'Telefone'} cb={cb} />
        </div>
        <div className="container2">
          <Input name={'cep'} place={'Cep'} cb={cb} />
          <Input name={'end'} place={'Endereço'} cb={cb} />
        </div>
        <div className="container3">
          <Input name={'comp'} place={'Complemento'} cb={cb} />
          <Input name={'num'} place={'Número'} cb={cb} />
          <Input name={'cid'} place={'Cidade'} cb={cb} />
          <Input name={'est'} place={'Estado'} cb={cb} />
        </div>
      </div>
    );
  };
}

export default Comprador;
