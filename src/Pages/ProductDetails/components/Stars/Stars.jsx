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
  }

  onClick(e) {
    this.updateStars(Number(e.target.getAttribute('name')));
  }

  zerarStars() {
    for (let i = 0; i < 5; i += 1) {
      this.icons[i].current.firstChild.innerText = 'star_border';
    }
  }

  updateStars(num) {
    this.zerarStars();
    if (num > 0) {
      for (let i = 0; i < num; i += 1) {
        this.icons[i].current.firstChild.innerText = 'star';
      }
    }
    if (this.props.callback) {
      this.props.callback(num);
    }
  }

  render() {
    const { disabled } = this.props;
    return (
      <div className="comp_stars" ref={this.container}>
        <button onClick={this.onClick} ref={this.icon} disabled={disabled}>
          <i className="material-icons" name="1">
            star_border
          </i>
        </button>
        <button onClick={this.onClick} ref={this.icon2} disabled={disabled}>
          <i className="material-icons" name="2">
            star_border
        </i>
        </button>
        <button onClick={this.onClick} ref={this.icon3} disabled={disabled}>
          <i className="material-icons" name="3">
            star_border
        </i>
        </button>
        <button onClick={this.onClick} ref={this.icon4} disabled={disabled}>
          <i className="material-icons" name="4">
            star_border
        </i>
        </button>
        <button onClick={this.onClick} ref={this.icon5} disabled={disabled}>
          <i className="material-icons" name="5">
            star_border
        </i>
        </button>
      </div>
    );
  }
}

Stars.propTypes = {
  rate: PropTypes.number,
  callback: PropTypes.func,
  disabled: PropTypes.string,
};

Stars.defaultProps = {
  rate: 0,
  callback: undefined,
  disabled: '',
};

export default Stars;
