'use strict';

/*eslint-disable no-unused-vars*/

import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/CommentBox.jsx';
/*eslint-disable no-unused-vars*/

import './main.scss';

/*
var structuredLog = require('structured-log');
var consoleSink = require('structured-log/console-sink');

var log = structuredLog.configure()
  .minLevel('DEBUG')
  .writeTo(consoleSink())
  .create();

log.info('Hello this is some information.');
log('Hello this is more information.');
log.warn('This is a warning.');
log.error('This is an error.');
log.debug('{a} + {b} = {c}', 1, 2, 3);
*/

/*
import Canadarm from 'canadarm';
Canadarm.init({
  onError: true,                  // Set to false if you do not want window.onerror set.
  wrapEvents: true,               // Set to false if you do not want all event handlers to be logged for errors
  logLevel: Canadarm.level.DEBUG,
  appenders: [
    Canadarm.Appender.standardLogAppender
  ],
  handlers: [
    Canadarm.Handler.beaconLogHandler('/api/client-log'),
    Canadarm.Handler.consoleLogHandler
  ]
});
Canadarm.debug('Canadarm client debugger enabled');
*/

/*
import Logger from 'js-logger';
// Log messages will be written to the window's console.
Logger.useDefaults({
  logLevel: Logger.DEBUG,
  formatter: function (messages, context) {
    messages.unshift(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
    if (context.name) messages.unshift('[' + context.name + ']');
  }
});
Logger.info('Client logging is now enabled');
*/




// logs are scoped to a namespace for easy filtering (here, the namespace is "app")
import logger from 'minilog';
logger.enable();
window.log = logger('app');

log
  .debug('debug message')
  .info('info message')
  .warn('warning')
  .error('this is an error message');


ReactDOM.render(<CommentBox url='/api/comments.json' pollInterval={2000}/>, document.querySelector('#react-mount'));

console.debug("Logged a debug message via console.log");
throw "Threw an error";
