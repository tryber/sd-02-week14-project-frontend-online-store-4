import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.produtoHandle(e);
  }

  render() {
    const { name, place, cb, red } = this.props;
    return (
      <div className="payment_comprador_input">
        <input type="text" name={name} placeholder={place} onChange={cb} />
        { (red) ? <p>{name} é obrigatório</p> : (<p/>) }
      </div>
    );
  }
}

Input.propTypes = {
  produtoHandle: PropTypes.func,
  name: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  cb: PropTypes.func.isRequired,
  red: PropTypes.bool.isRequired,
};

Input.defaultProps = {
  produtoHandle: undefined,
};

export default Input;
