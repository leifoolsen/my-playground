import polyfill from './polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './config/config';
import logger, {LOG_LEVEL} from './logger/logger';
import App from './components/App';

import './styles.scss';

if(window) {
  /**
   * An event handler for the error event.
   * When an error is thrown, the following arguments are passed to the function:
   * @param msg The message associated with the error, e.g. “Uncaught ReferenceError: foo is not defined”
   * @param url The URL of the script or document associated with the error, e.g. “/dist/app.js”
   * @param lineNo The line number (if available)
   * @param columnNo The column number (if available)
   * @param error The Error object associated with this error (if available)
   * @return {boolean}
   * @see https://developer.mozilla.org/en/docs/Web/API/GlobalEventHandlers/onerror
   * @see https://blog.sentry.io/2016/01/04/client-javascript-reporting-window-onerror.html
   */
  window.onerror = function (msg, url, lineNo, columnNo, error) {
    const err = error || {};
    const detail = {
      name: err.name || msg || '',
      line: lineNo,
      column: columnNo,
      url: url || '',
      stack: err.stack || 'See browser console for detail',
    };

    logger.remoteLogger.log(LOG_LEVEL.error, msg, detail);
    return false;
  };

  /**
   * Flush logger
   */
  window.addEventListener('beforeunload', () => {
    logger.debug('Before unload. Flushing remote logger');
    logger.remoteLogger.flush();
  });
}

const run = () => {
  if (module.hot) {
    // AppContainer is a necessary wrapper component for HMR
    const AppContainer = require('react-hot-loader').AppContainer;

    const render = (Component) => {
      ReactDOM.render(
        <AppContainer>
          <Component/>
        </AppContainer>,
        document.getElementById('app')
      );
    };

    render(App);

    // Hot Module Replacement API
    module.hot.accept('./components/App', () => {
      const NextApp = require('./components/App').default;
      render(NextApp);
    });
  }
  else {
    ReactDOM.render(
      <App/>,
      document.getElementById('app')
    );
  }
};


// Add polyfills
try {
  polyfill()
    .then( () => run()); // Start the app
}
catch(err) {
  console.log('Error loading polyfills:', err); // eslint-disable-line no-console
}
