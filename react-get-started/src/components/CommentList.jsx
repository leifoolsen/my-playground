'use strict';

/*eslint-disable no-unused-vars*/
import React from 'react';
import Comment from './Comment.jsx';  
/*eslint-disable no-unused-vars*/

export default class CommentList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="commentList">
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }
}
