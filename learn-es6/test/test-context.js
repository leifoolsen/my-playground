'use strict';

var context = require.context('.', true, /(-spec\.js$)|(Test\.js$)/);
context.keys().forEach(context);
console.log(context.keys());
