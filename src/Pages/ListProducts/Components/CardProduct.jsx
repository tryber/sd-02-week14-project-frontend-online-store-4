import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CardProduct.css';

class CardProduct extends Component {
  static adicionaCart(idParam, arrCard, state) {
    const produto = arrCard.find((card) => card.id === idParam);
    if (localStorage.getItem(idParam) === null) {
      localStorage
        .setItem(idParam, JSON.stringify(
          { ...produto, count: state }));
    } else {
      const objKeyInfo = JSON.parse(localStorage.getItem(idParam));
      const lS = { ...objKeyInfo, count: objKeyInfo.count += state };
      localStorage.setItem(idParam, JSON.stringify(lS));
    }
  }

  cardProduct() {
    const { arrCard, retornaParam } = this.props;
    return (
      <div className="containCard">
        {arrCard.map((element) => (
          <div className="cardComplete" key={element.id}>
            <Link className="label" to={`/product-details/${element.id}`} onClick={() => retornaParam(element, arrCard)} >
              <div className="titleCard">
                <h5 className="titleCard">{element.title}</h5>
              </div>
              <div className="containerImg">
                <img className="cardImage" src={element.thumbnail} alt={element.title} />
              </div>
              <div>
                <h6>{((element.price * 100) / 100).toFixed(2)}</h6>
              </div>
            </Link>
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
          </div>
        ))}
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
