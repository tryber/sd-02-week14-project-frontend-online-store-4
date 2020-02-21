import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input/Input';
import './style.css';

class Comprador extends Component {
  render() {
    const cb = this.props.produtoHandle;
    const { nome, email, cpf, tel, cep, end, comp, cid, num, est } = this.props.campos;
    return (
      <div className="payment_comprador">
        <p>Informações do comprador</p>
        <div className="container">
          <Input name={'nome'} place={'Nome completo'} cb={cb} red={nome.red} />
          <Input name={'email'} place={'Email'} cb={cb} red={email.red} />
          <Input name={'cpf'} place={'CPF'} cb={cb} red={cpf.red} />
          <Input name={'tel'} place={'Telefone'} cb={cb} red={tel.red} />
        </div>
        <div className="container2">
          <Input name={'cep'} place={'Cep'} cb={cb} red={cep.red} />
          <Input name={'end'} place={'Endereço'} cb={cb} red={end.red} />
        </div>
        <div className="container3">
          <Input name={'comp'} place={'Complemento'} cb={cb} red={comp.red} />
          <Input name={'num'} place={'Número'} cb={cb} red={num.red} />
          <Input name={'cid'} place={'Cidade'} cb={cb} red={cid.red} />
          <Input name={'est'} place={'Estado'} cb={cb} red={est.red} />
        </div>
      </div>
    )
  };
}

Comprador.propTypes = {
  produtoHandle: PropTypes.func.isRequired,
  nome: PropTypes.string,
  email: PropTypes.string,
  cpf: PropTypes.string,
  tel: PropTypes.string,
  cep: PropTypes.string,
  end: PropTypes.string,
  comp: PropTypes.string,
  cid: PropTypes.string,
  num: PropTypes.string,
  est: PropTypes.string,
};

Comprador.defaultProps = {
  nome: '',
  email: '',
  cpf: '',
  tel: '',
  cep: '',
  end: '',
  comp: '',
  cid: '',
  num: '',
  est: '',
};

export default Comprador;
