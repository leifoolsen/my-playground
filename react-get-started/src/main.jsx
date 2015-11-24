'use strict';

/*eslint-disable no-unused-vars*/
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/CommentBox.jsx';
/*eslint-disable no-unused-vars*/

import './main.scss';

/*
class App extends React.Component {
  constructor() {
    super();
    this.state = {name: 'Vipul'};
    this.alertUser = this.alertUser.bind(this);
  }
  render() {
    return <div>
      <button onClick={this.alertUser}>Click Me!</button>
    </div>;
  }
  alertUser() {
    console.log('Alert User');
    console.log(this.state);
  }
}
ReactDOM.render(<App name='Vipul'/>, document.querySelector('#react-mount'));
*/

ReactDOM.render(<CommentBox />, document.querySelector('#react-mount'));
