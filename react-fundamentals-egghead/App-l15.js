import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      input: '/* Add your jsx here */',
      output: '',
      err: ''
    };

    this.update = this.update.bind(this);
  }

  update(e) {
    let code = e.target.value;
    try {
      this.setState({
        output: babel.transform(code, {
          stage: 0,
          loose: 'all'
        }).code,
        err: ''
      });
    }
    catch(err) {
      this.setState({err: err.message})
    }
  }

  render() {
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea onChange={this.update} defaultValue={this.state.input}></textarea>
          <pre>{this.state.output}</pre>
        </div>
      </div>
    );
  }
}

export default App;
