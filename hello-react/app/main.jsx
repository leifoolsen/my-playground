import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends Component {
  render() {
    return <div>Hello  {this.props.name}</div>;
  }
}

ReactDOM.render(<HelloWorld  name="LOL" />, document.querySelector('#react-mount'));
