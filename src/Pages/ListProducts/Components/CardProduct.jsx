import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CardProduct.css';

class CardProduct extends Component {
  static adicionaCart(idParam, arrCard, state) {
    const produto = arrCard.find((card) => card.id === idParam);
    if (localStorage.getItem(`Item${idParam}`) === null) {
      localStorage
        .setItem(`Item${idParam}`, JSON.stringify(
          { ...produto, count: state }));
    } else {
      const objKeyInfo = JSON.parse(localStorage.getItem(`Item${idParam}`));
      const lS = { ...objKeyInfo, count: objKeyInfo.count += state };
      localStorage.setItem(`Item${idParam}`, JSON.stringify(lS));
    }
  }

  constructor(props) {
    super(props);
    this.carregaCardProduct = this.carregaCardProduct.bind(this);
  }

  carregaCardProduct(element, arrCard) {
    return (
      <div>
        <button
          className="buttonAddCart"
          value={element.id}
          onClick={(event) => {
            CardProduct.adicionaCart(event.target.value, arrCard, 1);
            this.props.numberCart();
          }}
        >
          Adicionar no Carrinho
        </button>
      </div>
    );
  }

  cardProduct() {
    const { arrCard, retornaParam } = this.props;
    return (
      <div className="containCard">
        {arrCard.map((element) => {
          const { shipping: { free_shipping: freeShipping } } = element;
          return (
            <div className="cardComplete" key={element.id}>
              <Link className="label" to={`/product-details/${element.id}`} onClick={() => retornaParam(element, arrCard)} >
                <div className="titleCard">
                  <h5 className="titleCardtitle">{element.title}</h5>
                </div>
                <div className="containerImg">
                  <img className="cardImage" src={element.thumbnail} alt={element.title} />
                </div>
                {(freeShipping) ?
                  <div>
                    <p>Entrega grátis</p>
                    <i className="material-icons">local_shipping</i>
                  </div> : ''}
                <div>
                  <h6>{((element.price * 100) / 100).toFixed(2)}</h6>
                </div>
              </Link>
              {this.carregaCardProduct(element, arrCard)}
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      this.cardProduct()
    );
  }
}
export default CardProduct;
CardProduct.propTypes = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}).isRequired;
