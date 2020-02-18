import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Stars extends Component {
  constructor(props) {
    super(props);
    this.icon = React.createRef();
    this.icon2 = React.createRef();
    this.icon3 = React.createRef();
    this.icon4 = React.createRef();
    this.icon5 = React.createRef();
    this.icons = [this.icon, this.icon2, this.icon3, this.icon4, this.icon5];
  }

  componentDidMount() {
    this.initStars();
  }

  initStars() {
    // const num = this.props.rate;
    const num = 2.55;
    if(num > 0) {
      const inteiro = Math.trunc(num);
      const decimal = Number((num).toFixed(1)).toString().split('.')[1];

      for(let i = 0; i < inteiro; i ++) {
        this.icons[i].current.innerText = 'star';
      }
  
      if (decimal > 3) {
        this.icons[inteiro].current.innerText = 'star_half';
      }
    }
  }

  render() {
    return (
      <div className="comp_stars">
        <i className="material-icons" ref={this.icon}>
          star_border
        </i>
        <i className="material-icons" ref={this.icon2}>
          star_border
        </i>
        <i className="material-icons" ref={this.icon3}>
          star_border
        </i>
        <i className="material-icons" ref={this.icon4}>
          star_border
        </i>
        <i className="material-icons" ref={this.icon5}>
          star_border
        </i>
      </div>
    );
  }
}

Stars.propTypes = {
  rate: PropTypes.number,
};

Stars.defaultProps = {
  rate: 0,
};

export default Stars;
