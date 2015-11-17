import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/*
class HelloWorld extends Component {
  render() {
    return <div>Hello {this.props.name} (class)</div>;
  }
}
ReactDOM.render(<HelloWorld  name="LOL" />, document.querySelector('#react-mount'));
*/

// Stateless function using ES6 arrow syntax
// See: https://facebook.github.io/react/docs/reusable-components.html
var HelloFatPointer = (props) => <div>Hello {props.name} (Stateless function using ES6 arrow syntax)</div>;

ReactDOM.render(<HelloFatPointer  name="LOL" />, document.querySelector('#react-mount'));
