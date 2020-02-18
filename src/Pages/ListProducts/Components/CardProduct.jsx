import React from 'react';
import './CardProduct.css'
class CardProduct extends React.Component {
  render() {
    const { arrCard } = this.props;
    return (
      <div className="containCard">
        {arrCard.map((element) => (
          <div className="cardComplete" key={element.id}>
            <h5>{element.title}</h5>
            <img className="cardImage" src={element.thumbnail} alt={element.title} />
            <h6>{(element.price * 100 / 100).toFixed(2)}</h6>
          </div>
        ))}
      </div>
    )
  }
}
export default CardProduct;