'use strict';

import moment from 'moment';
import 'material-design-lite/material';

//require('material-design-lite/dist/images/tick.svg');
//require('material-design-lite/dist/images/tick-mask.svg');

// content
const element = document.querySelector('#container');
const content = document.createElement('h1');
content.textContent = `${moment().format('YYYY-MM-DD HH:mm:ss')} - Yo MDL!`;
element.appendChild(content);

var button = document.createElement('button');
var textNode = document.createTextNode('Click Me!!!');
button.appendChild(textNode);
button.className = 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent';

componentHandler.upgradeElement(button);
document.getElementById('container').appendChild(button);
content.insertAdjacentHTML('afterend', '<br/>');

content.insertAdjacentHTML('afterend', require('./html/table-demo.html'));

content.insertAdjacentHTML('afterend', '<br/>');

content.insertAdjacentHTML('afterend', require('./html/card-demo.html'));
