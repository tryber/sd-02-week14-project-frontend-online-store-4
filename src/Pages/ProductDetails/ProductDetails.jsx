import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import './style.css';

import Produto from './components/Produto/Produto';
import Quantidade from './components/Quantidade/Quantidade';
import Avaliacoes from './components/Avaliacoes/Avaliacoes';
import Comments from './components/Comments/Comments';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
    this.submitHandle = this.submitHandle.bind(this);
  }

  submitHandle(comment) {
    this.setState({
      comments: [...this.state.comments, comment],
    });
  }

  render() {
    const { passaObj } = this.props;
    const { title, price, installments } = passaObj;
    const { comments } = this.state;
    return (
      <div className="page_productDetails">
        {ShoppingCart.botaoVolta()}
        {(title) ?
          <div>
            <div className="title">
              <p>{title} - </p>
              <p>{price},00 R$</p>
            </div>
            <Produto obj={passaObj} />
            <Quantidade />
            <Avaliacoes rate={installments.rate} submitHandle={this.submitHandle} />
            <Comments
              comments={comments}
            /> </div> :
          <div>
            <br />
            <span>Não Foi possivel carregar sua Pagina</span>
          </div>}
      </div>
    );
  }
}

ProductDetails.propTypes = PropTypes.shape({
  installments: {
    rate: PropTypes.number,
  },
}).isRequired;

ProductDetails.defaultProps = {
  installments: {
    rate: 0,
  },
};
