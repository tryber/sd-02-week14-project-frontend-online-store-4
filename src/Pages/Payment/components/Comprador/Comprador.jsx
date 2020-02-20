import React, { Component } from 'react';

import './style.css';

class Comprador extends Component {
  render() {
    return (
      <div className="payment_comprador">
          {/* <p>Informações do comprador</p> */}
          <div className="container">
            <input type="text" className="nome" placeholder="Nome completo" />
            <input type="email" className="email" placeholder="Email" />
            <input type="text" className="cpf" placeholder="cpf" />
            <input type="text" className="tel" placeholder="telefone" />
          </div>
          <div className="container2">
            <input type="text" className="cep" placeholder="CEP" />
            <input type="text" className="endereco" placeholder="Endereço" />
          </div>
          <div className="container3">
            <input type="text" className="comp" placeholder="Complemento" />
            <input type="text" className="num" placeholder="Número" />
            <input type="text" className="cid" placeholder="Cidade" />
            <input type="text" className="estado" placeholder="Estado" />
          </div>
        </div>
    );
  }
}

export default Comprador;
