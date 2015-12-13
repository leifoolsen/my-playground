'use strict';

import moment from 'moment';
import 'material-design-lite/material';

//require('material-design-lite/dist/images/tick.svg');
//require('material-design-lite/dist/images/tick-mask.svg');

// content
const element = document.querySelector('#container');
const content = document.createElement('h1');
content.textContent = `${moment().format('YYYY-MM-DD HH:mm:ss')} - Yo MDL!`;
content.insertAdjacentHTML('beforeend', '&nbsp;<i class="material-icons md-48">thumb_up</i>');
element.appendChild(content);

var button = document.createElement('button');
var textNode = document.createTextNode('Click Me!!!');
button.appendChild(textNode);
button.className = 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent';
document.getElementById('container').appendChild(button);
componentHandler.upgradeElement(button);
content.insertAdjacentHTML('afterend', '<br/>');


content.insertAdjacentHTML('afterend', require('./html/typography-demo.html'));

content.insertAdjacentHTML('afterend', require('./html/material-design-icons-font-demo.html'));
content.insertAdjacentHTML('afterend', '<br/>');

content.insertAdjacentHTML('afterend', require('./html/table-demo.html'));

content.insertAdjacentHTML('afterend', '<br/>');

content.insertAdjacentHTML('afterend', require('./html/card-demo.html'));

