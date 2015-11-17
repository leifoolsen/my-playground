'use strict';

import Person from './components/Person.js';

var element = document.querySelector('#container');
var h1 = document.createElement('h1');
h1.classList.add('Person');
h1.textContent = 'Hello ' + new Person('Leif', 'Olsen');
element.appendChild(h1);
