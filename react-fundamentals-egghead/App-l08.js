import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  render() {
    return (
      <Button><Heart/>REACT</Button>
    )
  }
}

class Button extends React.Component {

  render () {
    return (
      <button>{this.props.children}</button>
    )
  }
}

const Heart = () => <i className="material-icons">refresh</i>;

export default App;
