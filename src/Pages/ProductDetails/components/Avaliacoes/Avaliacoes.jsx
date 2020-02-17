import React, { Component } from 'react';

import './style.css';

import Stars from '../Stars/Stars';

class Avaliacoes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='prod_details_av'>
        <strong>Avaliações</strong>
        <div className="container">
          <div>
            <input type="text" placeholder="email" />
            <Stars />
          </div>
          <textarea placeholder="message"></textarea>
          <button>Avaliar</button>
        </div>
      </div>
    );
  }
}

export default Avaliacoes;
