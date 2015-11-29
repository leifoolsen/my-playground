/**
 * The FB tutorial, https://facebook.github.io/react/docs/tutorial.html, written with ES6
 */

'use strict';

/*eslint-disable no-unused-vars*/
import React from 'react';
import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';
/*eslint-disable no-unused-vars*/

export default class CommentBox extends React.Component {

  static propTypes = {
    url: React.PropTypes.string.isRequired,
    pollInterval: React.PropTypes.number.isRequired
  };

  static defaultProps = {
    //
  };

  state = {
    data: []
  };

  constructor(props) {
    super(props);

    // ES7 Bind Operator. See: http://egorsmirnov.me/2015/08/16/react-and-es6-part3.html
    this.postComment = ::this.postComment; // equvivalent to: this.postComment = this.postComment.bind(this);
  }

  componentDidMount () {
    this.loadComments();
    //setInterval(() => this.loadComments(), this.props.pollInterval);
  }

  loadComments () {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.setState({ data: data }))
      .catch(err => console.error(this.props.url, err.toString()));
  }

  postComment (comment) {
    fetch(this.props.url, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment)
    })
    .then(response => response.json())
    .then(data => this.setState({ data: this.state.data.concat(data) }))  // ... or call loadComments()
    .catch(err => console.error(this.props.url, err.toString()));
  }

  render() {
    return (
      <div className="commentBox">
        <h2>Comments</h2>
        <CommentList data={this.state.data} />
        <CommentForm submitComment={this.postComment} />
      </div>
    );
  }
}
