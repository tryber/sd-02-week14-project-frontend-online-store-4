import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import ListProduct from '../ListProducts/ListProducts';
import './style.css';
import Produto from './components/Produto/Produto';
import Quantidade from './components/Quantidade/Quantidade';
import Avaliacoes from './components/Avaliacoes/Avaliacoes';
import Comments from './components/Comments/Comments';
import CardProduct from '../ListProducts/Components/CardProduct';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      detailCount: 0,
    };
    this.submitHandle = this.submitHandle.bind(this);
    this.enviaArrCard = this.enviaArrCard.bind(this);
  }

  componentDidMount() {
    this.valueCart();
  }
  valueCart() {
    this.setState({ detailCount: Number(localStorage.getItem('CartCount')) });
  }

  submitHandle(comment) {
    this.setState({
      comments: [...this.state.comments, comment],
    });
  }

enviaArrCard(stateQt) {
  const { passaObj, passaArr } = this.props;
  CardProduct.adicionaCart(passaObj.id, passaArr, stateQt);
  this.setState((state) => {
    localStorage.setItem('CartCount', (state.detailCount + stateQt));
    return ({ detailCount: state.detailCount + stateQt });
  });
}

  render() {
    const { passaObj } = this.props;
    const { title, price, installments } = passaObj;
    const { comments, detailCount } = this.state;
    return (
      <div className="page_productDetails">
        {ShoppingCart.botaoVolta()}
        {ListProduct.caixaCarrinho(detailCount)}
        {(title) ?
          <div>
            <div className="title">
              <p>{title} - </p>
              <p>{price},00 R$</p>
            </div>
            <Produto obj={passaObj} />
            <Quantidade enviaCard={this.enviaArrCard}/>
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
