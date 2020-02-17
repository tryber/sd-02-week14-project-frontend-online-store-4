import React, { Component } from 'react';

import './style.css';

class Stars extends Component {
  render() {
    return (
      <div className='comp_stars'>
        <i className="material-icons">
          star_border
        </i>
        <i className="material-icons">
          star_border
        </i>
        <i className="material-icons">
          star_border
        </i>
        <i className="material-icons">
          star_border
        </i>
        <i className="material-icons">
          star_border
        </i>
      </div>
    );
  }
}

export default Stars;
