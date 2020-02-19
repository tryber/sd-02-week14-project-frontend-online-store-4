import React, { Component } from 'react';

import './style.css';
import Stars from '../Stars/Stars';

class Comments extends Component {
  render() {
    const { comments } = this.props;
    return (
      <div className="comp_comments">
        {comments.map((comment) => (
          <div key={comment.email}>
            <div>
              <p>{comment.email}</p>
              <Stars rate={comment.rate} />
            </div>
            <textarea disabled value={comment.message} />
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.shape({
    email: PropTypes.string,
    rate: PropTypes.number,
    message: PropTypes.string,
  }),
};

Comments.defaultProps = {
  comments: PropTypes.shape({
    email: '',
    rate: 0,
    message: '',
  }),
};

export default Comments;
