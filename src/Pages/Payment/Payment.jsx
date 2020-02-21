import React, { Component } from 'react';

import Produto from './components/Produto/Produto';
import Comprador from './components/Comprador/Comprador';
import Pagamento from './components/Pagamento/Pagamento';
import './style.css';

const produtos = [
  {
    id: '1',
    title: 'óleo liza',
    img: 'https://static.carrefour.com.br/medias/sys_master/images/images/h5d/h25/h00/h00/9445790253086.jpg',
    price: 12,
  },
  {
    id: '2',
    title: 'óleo liza',
    img: 'https://static.carrefour.com.br/medias/sys_master/images/images/h5d/h25/h00/h00/9445790253086.jpg',
    price: 12,
  },
];

const campos = {
  nome: {
    name: 'Nome',
    value: '',
    red: false,
  },
  email: {
    name: 'Email',
    value: '',
    red: false,
  },
  cpf: {
    name: 'CPF',
    value: '',
    red: false,
  },
  tel: {
    name: 'Telefone',
    value: '',
    red: false,
  },
  cep: {
    name: 'CEP',
    value: '',
    red: false,
  },
  end: {
    name: 'Endereço',
    value: '',
    red: false,
  },
  comp: {
    name: 'Complemento',
    value: '',
    red: false,
  },
  num: {
    name: 'Número',
    value: '',
    red: false,
  },
  cid: {
    name: 'Cidade',
    value: '',
    red: false,
  },
  est: {
    name: 'Estado',
    value: '',
    red: false,
  },
  pagamento: {
    name: 'Forma de pagamento',
    value: '',
    red: false,
  },
};

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campos: { ...campos },
    };
    this.submitHandle = this.submitHandle.bind(this);
    this.produtoHandle = this.produtoHandle.bind(this);
  }

  submitHandle(e) {
    e.preventDefault();
    const campos2 = this.state.campos;
    const verifica = Object.keys(campos2).reduce((acc, key) => {
      if (campos2[key].value.length === 0) {
        this.setState((state) => ({
            campos: {
            ...state.campos,
            [key]: {
              ...state.campos[key],
              red: true,
            },
            },
          }),
        );
        return false;
      }
      return acc;
    }, true);

    if (verifica) {
      // redirect
    }
  }

  produtoHandle(e) {
    const { name, value } = e.target;
    this.setState({
      campos: {
        ...this.state.campos,
        [name]: value,
      },
    });
  }

  render() {
    return (
      <div className="page_payment">
        <p>Revise seus produtos</p>
        <form onSubmit={this.submitHandle}>
          <div className="products">
            <div>
              {produtos.map((produto) => (
                <Produto key={produto.id} produto={produto} />
              ))}
            </div>
          </div>
          <div className="comprador">
            <Comprador produtoHandle={this.produtoHandle} campos={this.state.campos} />
          </div>
          <Pagamento />
          <div>
            <button onClick={this.submitHandle}>Pagar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Payment;
