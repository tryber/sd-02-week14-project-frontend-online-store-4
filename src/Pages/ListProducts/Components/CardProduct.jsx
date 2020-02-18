import React from 'react';
import PropTypes from 'prop-types';
import './CardProduct.css';

class CardProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    }
  }

  adicionaCart(idParam) {
    console.log(idParam)
    const { arrCard } = this.props;
    console.log(arrCard)
    const produto = arrCard.find(card => card.id === idParam)
    console.log(produto);

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
            <div>
              <img className="cardImage" src={element.thumbnail} alt={element.title} />
            </div>
            <div>
              <h6>{((element.price * 100) / 100).toFixed(2)}</h6>
            </div>
            <div>
              <button
                className="buttonAddCart"
                value={element.id}
                onClick={(event) => { this.adicionaCart(event.target.value) }}
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
