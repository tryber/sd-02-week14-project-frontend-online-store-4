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
          <div>
            <button opacity="100%" className="SomeAndRemove" type="button" onClick={() => this.setState((state) => ({ qt: state.qt + 1 }))}>
              <i className="material-icons">
                add
          </i>
            </button>
          </div>
          <p>{qt}</p>
          <div>
            <button opacity="100%" className="SomeAndRemove" type="button" onClick={() => this.setState((state) => ({ qt: (state.qt > 0) ? state.qt - 1 : false }))}>
              <i className="material-icons">
                remove
            </i>
            </button>
          </div>
          <button type="button">Adicionar no carrinho</button>
        </div>
      </div>
    );
  }
}

export default Campo;
