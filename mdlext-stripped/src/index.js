import 'whatwg-fetch';
import 'material-design-lite/material';

import 'mdl-ext';

import run from './app/app';
import './styles.scss';

if (module.hot) {
  // This tells Webpack that this file and all of its dependencies can be replaced.
  // See e.g: http://andrewhfarmer.com/webpack-hmr-tutorial/
  module.hot.accept();

  // Accept changes to this file for hot reloading.
  // Enabling this may result in multiple page loads (flashing screen)
  //module.hot.accept('./index.js');

  // Any changes to our App will cause a hotload re-render.
  module.hot.accept('./app/app', () => {
    const next = require('./app/app').default;
    next();
  });

  // Enables HTML HMR. Also enable/uncomment html-loader in webpack.config
  // Enabling this may result in multiple page loads (flashing screen)
  require('./index.html');
}

// Start
window.addEventListener('load', () => run());

