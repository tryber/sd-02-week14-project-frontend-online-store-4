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

function allStorageKeys() {
  const keys = Object.keys(localStorage);
  return keys;
}

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
    const { id } = this.props.passaObj;
    this.valueCart();
    let keys = allStorageKeys();
    keys = keys.filter((item) => item.includes(`${id}`));
    const storages = keys.map((item) => localStorage[item]);
    const comments = storages.map((item) => {
      const array = item.split(',');
      const comment = { email: array[0], message: array[1], rate: Number(array[2]) };
      return comment;
    });
    this.updateComment(comments);
  }

  updateComment(comments) {
    this.setState({
      comments: [...comments],
    });
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

  componentsRender() {
    const { passaObj } = this.props;
    const { title, price, installments } = passaObj;
    const { comments } = this.state;
    return (
      <div>
        <div className="title">
          <p>{title} - </p>
          <p>{price},00 R$</p>
        </div>
        <Produto obj={passaObj} />
        <Quantidade enviaCard={this.enviaArrCard} />
        <Avaliacoes
          rate={installments.rate}
          submitHandle={this.submitHandle}
          id={passaObj.id}
        />
        <Comments
          comments={comments}
        />
      </div>
    );
  }

  render() {
    const { passaObj } = this.props;
    const { title } = passaObj;
    const { detailCount } = this.state;
    return (
      <div className="page_productDetails">
        {ShoppingCart.botaoVolta()}
        {ListProduct.caixaCarrinho(detailCount)}
        {(title) ?
          this.componentsRender() :
          <div>
            <br />
            <span>Não Foi possivel carregar sua Pagina</span>
          </div>}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  passaObj: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    installments: PropTypes.shape({
      rate: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  passaArr: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })),
};


