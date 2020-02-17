import React, { Component } from 'react';

import './style.css';

class Campo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qt: 1,
    };
  }

  render() {
    const { qt } = this.state;
    return (
      <div className="comp_prod_details_qt">
        <strong>Quantidade</strong>
        <div className="container">
          <i className="material-icons">
            add
          </i>
          <p>{qt}</p>
          <i className="material-icons">
            remove
          </i>
          <button>Adicionar no carrinho</button>
        </div>
      </div>
    );
  }
}

export default Campo;
