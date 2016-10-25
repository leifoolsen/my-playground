import 'babel-polyfill';
import './stylesheets/main.scss';
import React from 'react';
import { render } from 'react-dom';


class App extends React.Component {

  render() {
    return (
      <div>Hello Idiomatic Redux</div>
    );
  }
}

render(<App />, document.getElementById('root'));
