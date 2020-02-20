import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

import Stars from '../Stars/Stars';

class Avaliacoes extends Component {
  constructor(props) {
    super(props);
    this.abacaxi = this.abacaxi.bind(this);
    this.updateRate = this.updateRate.bind(this);
    this.state = {
      comment: {
        email: '',
        message: '',
        rate: 0,
      },
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(name, value) {
    this.setState({
      comment: {
        ...this.state.comment,
        [name]: value,
      },
    });
  }

  updateRate(rate) {
    this.setState({
      comment: {
        ...this.state.comment,
        rate,
      },
    });
  }

  abacaxi() {
    const { comment } = this.state;
    this.props.submitHandle(comment);
  }

  render() {
    const { comment, rate } = this.state;
    const { email, message } = comment;
    return (
      <div className="comp_prod_details_av">
        <strong>Avaliações</strong>
        <div className="container">
          <div>
            <input type="text" placeholder="email" onChange={(e) => this.onChange('email', e.target.value)} value={email} />
            <Stars rate={rate} callback={this.updateRate} />
          </div>
          <textarea placeholder="mensagem" onChange={(e) => this.onChange('message', e.target.value)} value={message} />
          <button onClick={this.abacaxi}>Avaliar</button>
        </div>
      </div>
    );
  }
}

Avaliacoes.propTypes = {
  submitHandle: PropTypes.func,
};

Avaliacoes.defaultProps = {
  submitHandle: undefined,
  rate: 0,
};

export default Avaliacoes;
