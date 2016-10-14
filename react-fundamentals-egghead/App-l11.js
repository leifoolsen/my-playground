import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  static defaultProps = {
    val: 0
  };
  state = {
    increasing: false
  };

  update = () => ReactDOM.render(<App val={this.props.val+1} />, document.querySelector('#app'));

  componentWillReceiveProps(nextProps) {
    this.setState({increasing: nextProps.val > this.props.val});
  }

  shouldComponentUpdate = nextProps => nextProps.val % 5 === 0;

  componentDidUpdate(prevProps, prevState) {
    console.log('component did update, prevProps', prevProps);
  }

  render() {
    console.log('rendering', this.state.increasing);
    return (
      <button onClick={this.update}>{this.props.val}</button>
    )
  }
}

export default App;
