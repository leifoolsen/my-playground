'use strict';

/*eslint-disable no-unused-vars*/
import React from 'react';
import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';
/*eslint-disable no-unused-vars*/

export default class CommentBox extends React.Component {

  static propTypes = {

  }
  static defaultProps = {
    data : [
      {id: 1, author: "Pete Hunt", text: "This is one comment"},
      {id: 2, author: "Jordan Walke", text: "This is *another* comment"},
      {id: 3, author: "LOL", text: "Oh MY!"}
    ]
  };

  state = {
    data: []
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
}
