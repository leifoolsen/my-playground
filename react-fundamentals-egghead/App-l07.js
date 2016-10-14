import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  state = {
    red: 0,
    green: 0,
    blue: 0
  };

  update = () => {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.range).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.range).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.range).value
    });
  };

  render = () => {
    return (
      <div>
        <Slider ref="red" update={this.update} />
        {this.state.red}
        <br/>
        <Slider ref="green" update={this.update} />
        {this.state.green}
        <br/>
        <Slider ref="blue" update={this.update} />
        {this.state.blue}
        <br/>
      </div>
    )
  }
}

class Slider extends React.Component {

  render () {
    return (
      <div>
        <input ref="range" type="range"
               min="0"
               max="255"
               onChange={this.props.update} />
      </div>
    )
  }
}

export default App;
