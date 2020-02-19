import React, { Component } from 'react';

import './style.css';
import Stars from '../Stars/Stars';

class Comments extends Component {
  render() {
    console.log(this.state, this.props)
    const { comments } = this.props; 
    return (
      <div className="comp_comments">
        {comments.map((comment) => (
          <div key={comment.email}>
            <div>
              <p>{comment.email}</p>
              <Stars rate={comment.rate}  />
            </div>
            <textarea disabled value={comment.message} />
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Comments;
