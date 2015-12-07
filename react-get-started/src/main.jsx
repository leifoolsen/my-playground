'use strict';

/*eslint-disable no-unused-vars*/
import Logger from 'js-logger';
import moment from 'moment';

import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './components/CommentBox.jsx';
/*eslint-disable no-unused-vars*/

import './main.scss';


// Log messages will be written to the window's console.
Logger.useDefaults({
  logLevel: Logger.DEBUG,
  formatter: function (messages, context) {
    messages.unshift(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
    if (context.name) messages.unshift('[' + context.name + ']');
  }
});
Logger.info('Client logging is now enabled');

ReactDOM.render(<CommentBox url='/api/comments.json' pollInterval={2000}/>, document.querySelector('#react-mount'));



/*
 import Canadarm from 'Canadarm';
 Canadarm.init({
 onError: true,                  // Set to false if you do not want window.onerror set.
 wrapEvents: false,              // Set to false if you do not want all event handlers to be logged for errors
 logLevel: Canadarm.level.DEBUG, // Will only send logs for level of WARN and above.
 appenders: [
 Canadarm.Appender.standardLogAppender
 ],
 handlers: [
 //Canadarm.Handler.beaconLogHandler('http://example.com/beacon.gif'),
 Canadarm.Handler.consoleLogHandler
 ]
 });

 */
