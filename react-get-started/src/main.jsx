/*eslint-disable no-unused-vars*/
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello.jsx';
/*eslint-disable no-unused-vars*/

import './main.scss';

main();

function main() {
  ReactDOM.render(<Hello />, document.querySelector('#react-mount'));
}
