import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
              <Stars rate={comment.rate} disabled={'disabled'} />
            </div>
            <p>{comment.message}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    email: PropTypes.string,
    rate: PropTypes.number,
    message: PropTypes.string,
  })),
};

Comments.defaultProps = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    email: '',
    rate: 0,
    message: '',
  })),
};

export default Comments;
