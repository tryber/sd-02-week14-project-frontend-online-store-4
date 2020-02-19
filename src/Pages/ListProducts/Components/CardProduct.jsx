import React from 'react';
import PropTypes from 'prop-types';
import './CardProduct.css';

class CardProduct extends React.Component {
  adicionaCart(idParam) {
    const { arrCard } = this.props;
    const produto = arrCard.find((card) => card.id === idParam);
    if (localStorage.getItem(idParam) === null) {
      localStorage
        .setItem(idParam, JSON.stringify(
          { ...produto, count: 1 }));
    } else {
      const objKeyInfo = JSON.parse(localStorage.getItem(idParam));
      const lS = { ...objKeyInfo, count: objKeyInfo.count += 1 };
      localStorage.setItem(idParam, JSON.stringify(lS));
    }
  }

  render() {
    const { arrCard } = this.props;
    return (
      <div className="containCard">
        {arrCard.map((element) => (
          <div className="cardComplete" key={element.id}>
            <div className="titleCard">
              <h5 className="titleCard">{element.title}</h5>
            </div>
            <div className="containerImg">
              <img className="cardImage" src={element.thumbnail} alt={element.title} />
            </div>
            <div>
              <h6>{((element.price * 100) / 100).toFixed(2)}</h6>
            </div>
            <div>
              <button
                className="buttonAddCart"
                value={element.id}
                onClick={(event) => { this.adicionaCart(event.target.value); }}
              >
                Adicionar no Carrinho
              </button>
            </div>
          </div>
        ))}
      </div>
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
