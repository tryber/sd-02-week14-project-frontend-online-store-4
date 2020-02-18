import React, { Component } from 'react';

import './style.css';

import Stars from '../Stars/Stars';

class Avaliacoes extends Component {
  render() {
    const { rate } = this.props;
    return (
      <div className="comp_prod_details_av">
        <strong>Avaliações</strong>
        <div className="container">
          <div>
            <input type="text" placeholder="email" />
            <Stars rate={rate} />
          </div>
          <textarea placeholder="message" />
          <button>Avaliar</button>
        </div>
      </div>
    );
  }
}

export default Avaliacoes;
