'use strict';

import React, { Component, PropTypes } from 'react'; // eslint-disable-line no-unused-vars

export default class CommentForm extends React.Component {

  static propTypes = {
    submitComment: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    // ES7 Bind Operator. See: http://egorsmirnov.me/2015/08/16/react-and-es6-part3.html
    this.onSubmit = ::this.onSubmit; // equvivalent to: this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit (e) {
    e.preventDefault();

    const author = this.refs.author.value.trim();
    const text = this.refs.text.value.trim() ;

    if (!text || !author) {
      return;
    }

    this.props.submitComment({ author: author, text: text });
    this.refs.author.value = '';
    this.refs.text.value = '';
  }

  render() {
    return (
      <form className='comment-form' onSubmit={this.onSubmit}>
        <input type='text' placeholder='Your name' ref='author' />
        <input type='text' placeholder='Say something...' ref='text' />
        <input type='submit' value='Post' />
      </form>
    );
  }
}
