import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input/Input';
import './style.css';

class Comprador extends Component {
  static renderiza(cb, redNome, redEmail, redCpf,
    redTel, redCep, redEnd, redComp, redCid, redNum, redEst) {
    return (
      <div className="payment_comprador">
        <p>Informações do comprador</p>
        <div className="container">
          <Input name={'nome'} place={'Nome completo'} cb={cb} red={redNome} />
          <Input name={'email'} place={'Email'} cb={cb} red={redEmail} />
          <Input name={'cpf'} place={'CPF'} cb={cb} red={redCpf} />
          <Input name={'tel'} place={'Telefone'} cb={cb} red={redTel} />
        </div>
        <div className="container2">
          <Input name={'cep'} place={'Cep'} cb={cb} red={redCep} />
          <Input name={'end'} place={'Endereço'} cb={cb} red={redEnd} />
        </div>
        <div className="container3">
          <Input name={'comp'} place={'Complemento'} cb={cb} red={redComp} />
          <Input name={'num'} place={'Número'} cb={cb} red={redNum} />
          <Input name={'cid'} place={'Cidade'} cb={cb} red={redCid} />
          <Input name={'est'} place={'Estado'} cb={cb} red={redEst} />
        </div>
      </div>
    );
  }

  render() {
    const cb = this.props.produtoHandle;
    const {
      nome: { red: redNome },
      email: { red: redEmail },
      cpf: { red: redCpf },
      tel: { red: redTel },
      cep: { red: redCep },
      end: { red: redEnd },
      comp: { red: redComp },
      cid: { red: redCid },
      num: { red: redNum },
      est: { red: redEst },
    } = this.props.campos;

    return (
      <div>
        {Comprador.renderiza(cb, redNome, redEmail, redCpf,
          redTel, redCep, redEnd, redComp, redCid, redNum, redEst)}
      </div>
    );
  }
}

Comprador.propTypes = {
  produtoHandle: PropTypes.func,
  campos: PropTypes.shape({
    nome: PropTypes.shape({
      red: PropTypes.bool,
    }),
    email: PropTypes.shape({
      red: PropTypes.bool,
    }),
    cpf: PropTypes.shape({
      red: PropTypes.bool,
    }),
    tel: PropTypes.shape({
      red: PropTypes.bool,
    }),
    cep: PropTypes.shape({
      red: PropTypes.bool,
    }),
    end: PropTypes.shape({
      red: PropTypes.bool,
    }),
    comp: PropTypes.shape({
      red: PropTypes.bool,
    }),
    cid: PropTypes.shape({
      red: PropTypes.bool,
    }),
    num: PropTypes.shape({
      red: PropTypes.bool,
    }),
    est: PropTypes.shape({
      red: PropTypes.bool,
    }),
  }),
};

Comprador.defaultProps = {
  produtoHandle: undefined,
  campos: {
    nome: {
      red: false,
    },
    email: {
      red: false,
    },
    cpf: {
      red: false,
    },
    tel: {
      red: false,
    },
    cep: {
      red: false,
    },
    end: {
      red: false,
    },
    comp: {
      red: false,
    },
    cid: {
      red: false,
    },
    num: {
      red: false,
    },
    est: {
      red: false,
    },
  },
};

export default Comprador;
