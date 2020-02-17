import React, { Component } from 'react';

import './style.css';
import Stars from '../Stars/Stars';

class Comments extends Component {
  render() {
    return (
      <div className='comp_comments'>
        <div>
          <p>fula@email.com</p>
          <Stars />
        </div>
        <hr />
        <div>
          <p>fula@email.com</p>
          <Stars />
        </div>
        <hr />
        <div>
          <p>fula@email.com</p>
          <Stars />
        </div>
      </div>
    );
  }
}

export default Comments;
