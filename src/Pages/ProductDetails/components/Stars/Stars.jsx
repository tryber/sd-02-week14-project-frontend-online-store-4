import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Stars extends Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.icon = React.createRef();
    this.icon2 = React.createRef();
    this.icon3 = React.createRef();
    this.icon4 = React.createRef();
    this.icon5 = React.createRef();
    this.icons = [this.icon, this.icon2, this.icon3, this.icon4, this.icon5];
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const { rate } = this.props;
    this.updateStars(rate);
    if (this.props.callback) this.container.current.classList.add('comp_stars_pointer');
  }

  updateStars(num) {
    this.zerarStars()
    if (num > 0) {
      for (let i = 0; i < num; i += 1) {
        this.icons[i].current.innerText = 'star';
      }
    }
    if (this.props.callback) {
      this.props.callback(num);
    } 
  }

  zerarStars() {
    for (let i = 0; i < 5; i += 1) {
      this.icons[i].current.innerText = 'star_border';
    }
  }

  onClick(e) {
    if (this.props.callback) {
      this.updateStars(Number(e.target.getAttribute('name')));
    }
  }

  render() {
    return (
      <div className="comp_stars" ref={this.container}>
        <i className="material-icons" ref={this.icon} onClick={this.onClick} name='1'>
          star_border
        </i>
        <i className="material-icons" ref={this.icon2} onClick={this.onClick} name='2'>
          star_border
        </i>
        <i className="material-icons" ref={this.icon3} onClick={this.onClick} name='3'>
          star_border
        </i>
        <i className="material-icons" ref={this.icon4} onClick={this.onClick} name='4'>
          star_border
        </i>
        <i className="material-icons" ref={this.icon5} onClick={this.onClick} name='5'>
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
