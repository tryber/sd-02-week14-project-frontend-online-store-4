import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Campo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qt: 0,
    };
    this.render2 = this.render2.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.addBtn = React.createRef();
    this.removeBtn = React.createRef();
  }

  componentDidMount() {
    const { obj } = this.props;
    const { id } = obj;
    const produto = JSON.parse(localStorage.getItem(`Item${id}`));
    this.setState({
      qt: produto.count,
    });
    if (produto.available_quantity === 0) {
      this.addBtn.current.setAttribute('disabled', 'disabled');
    }
    if (produto.count === 0) {
      this.removeBtn.current.setAttribute('disabled', 'disabled');
    }
  }

  add() {
    const { obj } = this.props;
    const { id } = obj;
    const produto = JSON.parse(localStorage.getItem(`Item${id}`));
    if (produto.available_quantity > 0) {
      this.setState((state) => ({ 
        qt: state.qt + 1,
      }),
      );
      produto.available_quantity -= 1;
      produto.count += 1;
      localStorage.removeItem(`Item${id}`);
      localStorage.setItem(`Item${id}`, JSON.stringify(produto));
      localStorage.setItem('CartCount', Number(localStorage.getItem('CartCount')) + 1);
      this.props.detailCount(produto.count);
    }
    if (produto.available_quantity === 0) {
      this.addBtn.current.setAttribute('disabled', 'disabled');
    }
    if (produto.count > 0) {
      this.removeBtn.current.removeAttribute('disabled');
    }
  }

  remove() {
    const { obj } = this.props;
    const { id } = obj;
    const produto = JSON.parse(localStorage.getItem(`Item${id}`));
    if (produto.available_quantity === 0) {
      this.setState((state) => ({ qt: (state.qt > 0) ? state.qt - 1 : 1 }));
      produto.available_quantity += 1;
      produto.count -= 1;
      localStorage.removeItem(`Item${id}`);
      localStorage.setItem(`Item${id}`, JSON.stringify(produto));
      localStorage.setItem('CartCount', Number(localStorage.getItem('CartCount')) - 1);
      this.props.detailCount(produto.count);
    }
    if (produto.count === 0) {
      this.removeBtn.current.setAttribute('disabled', 'disabled');
    }
    if (produto.available_quantity > 0) {
      this.addBtn.current.removeAttribute('disabled');
    }
  }

  render2(qt) {
    return (
      <div className="container">
        <div>
          <button
            className="SomeAndRemove"
            type="button"
            onClick={this.add}
            ref={this.addBtn}
          >
            <i className="material-icons">add</i>
          </button>
        </div>
        <p>{qt}</p>
        <div>
          <button
            className="SomeAndRemove"
            type="button"
            onClick={this.remove}
            ref={this.removeBtn}
          >
            <i className="material-icons">remove</i>
          </button>
        </div>
        <button type="button" onClick={() => this.props.enviaCard(this.state.qt)}>
          Adicionar no carrinho
        </button>
      </div>
    );
  }
  render() {
    const { qt } = this.state;
    return (
      <div className="comp_prod_details_qt">
        <strong>Quantidade</strong>
        {this.render2(qt)}
      </div>
    );
  }
}

export default Campo;

Campo.propTypes = PropTypes.shape({
  enviaCard: PropTypes.func,
}).isRequired;
