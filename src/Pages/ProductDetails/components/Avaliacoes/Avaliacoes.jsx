import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Avaliacoes.propTypes = {
  rate: PropTypes.number,
};

export default Avaliacoes;
