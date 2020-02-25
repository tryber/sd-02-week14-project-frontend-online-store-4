import React, { Component } from 'react';
import Produto from './components/Produto/Produto';
import Comprador from './components/Comprador/Comprador';
import Pagamento from './components/Pagamento/Pagamento';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import './style.css';

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

function allStorageKeys() {
  const keys = Object.keys(localStorage);
  return keys;
}

function carregaProdutos() {
  const keys = allStorageKeys();
  const ids = keys.filter((key) => key.includes('Item'));
  return ids.map((id) => JSON.parse(localStorage.getItem(id)));
}

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campos: { ...campos },
      produtos: carregaProdutos(),
    };
    this.submitHandle = this.submitHandle.bind(this);
    this.produtoHandle = this.produtoHandle.bind(this);
  }

  submitHandle(e) {
    e.preventDefault();
    const campos2 = this.state.campos;
    // console.log(campos2['pagamento'])
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
        [name]: {
          ...this.state.campos[name],
          value,
        },
      },
    });
  }

  render() {
    const { produtos, campos } = this.state;
    const { pagamento } = campos;
    return (
      <div className="page_payment">
        {ShoppingCart.botaoVolta()}
        <p>Revise seus produtos</p>
        <form onSubmit={this.submitHandle}>
          <div className="products">
            {produtos.map((produto) => (
              <Produto key={produto.id} produto={produto} />
            ))}
          </div>
          <div className="comprador">
            <Comprador produtoHandle={this.produtoHandle} campos={campos} />
          </div>
          {/* <Pagamento produtoHandle={this.produtoHandle} red={pagamento.red} /> */}
          <div>
            <button onClick={this.submitHandle}>Pagar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Payment;
