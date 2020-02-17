import React, { Component } from 'react';

import './style.css';

class Campo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, campo } = this.props;
    return (
      <div id='campo'>
        <strong>{label}: </strong>
        <p>{campo}</p>
      </div>
    );
  }
}

export default Campo;
