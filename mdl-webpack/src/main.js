'use strict';

import moment from 'moment';
import 'material-design-lite/material';

//require('material-design-lite/dist/images/tick.svg');
//require('material-design-lite/dist/images/tick-mask.svg');

// content
const element = document.querySelector('#index');

const h1 = document.createElement('h1');
h1.textContent = `${moment().format('YYYY-MM-DD HH:mm:ss')} - Yo MDL!`;
h1.insertAdjacentHTML('beforeend', '&nbsp;<i class="material-icons md-48">thumb_up</i>');
element.appendChild(h1);

const button = document.createElement('button');
const textNode = document.createTextNode('Click Me!!!');
button.appendChild(textNode);
button.className = 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent';
element.appendChild(button);
componentHandler.upgradeElement(button);

h1.insertAdjacentHTML('afterend', require('./html/palette-demo.html'));
h1.insertAdjacentHTML('afterend', require('./html/typography-demo.html'));
h1.insertAdjacentHTML('afterend', require('./html/material-design-icons-font-demo.html'));
h1.insertAdjacentHTML('afterend', require('./html/table-demo.html'));
h1.insertAdjacentHTML('afterend', require('./html/card-demo.html'));

