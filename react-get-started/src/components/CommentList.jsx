'use strict';

/*eslint-disable no-unused-vars*/
import React from 'react';
import Comment from './Comment.jsx';
/*eslint-disable no-unused-vars*/

/*
export default class CommentList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}
*/

// stateless component
// https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d#.v6dep9yv5
const CommentList = (props) => {
  const commentNodes = props.data.map((comment, i) => {
    return (
      <Comment author={comment.author} key={i}>
        {comment.text}
      </Comment>
    );
  });

  return (
    <div className='comment-list'>
      {commentNodes}
    </div>
  );
};

CommentList.propTypes = {
  data: React.PropTypes.array.isRequired
};

export default CommentList;
