'use strict';

import React from 'react';  // eslint-disable-line no-unused-vars
import marked from 'marked';

/*
export default class Comment extends React.Component {

  // http://egorsmirnov.me/2015/06/14/react-and-es6-part2.html
  static propTypes = {
    author: React.PropTypes.string.isRequired,
    children: React.PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    const rawMarkup = marked(this.props.children.toString());

    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
}
*/

// Comment class as a stateless component:
// https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d#.v6dep9yv5
const Comment = (props) => {

  const rawMarkup = marked(props.children.toString(), {sanitize: true});

  return (
    <div className='comment'>
      <h2 className='comment-author'>{props.author}</h2>
      <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
    </div>
  );
};

// http://egorsmirnov.me/2015/06/14/react-and-es6-part2.html
Comment.propTypes = {
  author: React.PropTypes.string.isRequired,
  children: React.PropTypes.string
};

export default Comment;
