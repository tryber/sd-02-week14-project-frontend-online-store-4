import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Campo extends Component {
  render() {
    const { label, campo } = this.props;
    return (
      <div className="comp_campo">
        <strong>{label}: </strong>
        <p>{campo}</p>
      </div>
    );
  }
}

Campo.propTypes = {
  label: PropTypes.string,
  campo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Campo.defaultProps = {
  label: '',
  campo: '',
};

export default Campo;
