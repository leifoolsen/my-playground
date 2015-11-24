'use strict';

/*eslint-disable no-unused-vars*/
import React from 'react';
import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';
/*eslint-disable no-unused-vars*/

export default class CommentBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
}
