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
    price: '12',
  },
];

class Payment extends Component {
  render() {
    return (
      <div className="page_payment">
        <div className="products">
          <p>Revise seus produtos</p>
          {produtos.map((produto) => (
            <Produto key={produto.id} produto={produto} />
          ))}
        </div>
        <Comprador />
        <Pagamento />
        <div>
          <button>Pagar</button>
        </div>
      </div>
    );
  }
}

export default Payment;
