import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  state = {
    val: 0
  };

  update = () =>this.setState({ val: this.state.val + 1 });

  componentWillMount() {
    console.log('mounting');
    this.setState({ m: 2 });
  }
  componentDidMount() {
    console.log('mounted', ReactDOM.findDOMNode(this));
    this.inc = setInterval(this.update, 500);
  }
  componentWillUnmount() {
    clearInterval(this.inc);
    console.log('unmounted');
  }
  render() {
    console.log('rendering');
    const {val, m} =  this.state;
    return (
      <button onClick={this.update}>{val * m}</button>
    )
  }
}

class Wrapper extends React.Component {
  mount = () => {
    ReactDOM.render(<App />, document.querySelector('#mount'));
  }

  unmount = () => {
    ReactDOM.unmountComponentAtNode(document.querySelector('#mount'));
  }

  render() {
    return (
      <div>
        <button onClick={this.mount}>Mount</button>
        <button onClick={this.unmount}>Un-mount</button>
        <div id="mount"></div>
      </div>
    )
  }
}

export default Wrapper;
