# Get started with React

```
npm install
npm run dev
http://localhost:8080/webpack-dev-server/
```

## How should we structure our code?

```
|
+-- src
|   +-- html
|   +-- js
|   |   +-- actions
|   |   +-- components
|   |   +-- constants
|   |   +-- dispatcher
|   |   +-- stores
|   +-- stylesheets
|   |   +-- base
|   |   +-- components
|   |   +-- layout
|   |   +-- pages
|   |   +-- themes
|   |   +-- utils
|   |   +-- vendor
+-- test
|   +-- js
|   |   +-- components
|   |   +-- lib
|   |   +-- mixins
```

### React Reading list
* [Official React tutorial](https://facebook.github.io/react/docs/tutorial.html)
* [Official React tutorial converted to es6](https://github.com/klaemo/react-es6)
* [React components with ES6](http://www.tamas.io/react-with-es6/)
* [A simple todo application using React JS with es6+](http://codepen.io/jcgertig/post/es6-react-todo-list-part-1)
* [Tutorial – Todo List](https://facebook.github.io/flux/docs/todo-list.html)
* [ReactJS For Stupid People](http://blog.andrewray.me/reactjs-for-stupid-people/)
* [Flux For Stupid People](http://blog.andrewray.me/flux-for-stupid-people/)
* [The ReactJS Controller View Pattern](http://blog.andrewray.me/the-reactjs-controller-view-pattern/)
* [LEARN REACT.JS A LITTLE AT A TIME](http://smashingboxes.com/ideas/learn-react-part-1)
* [Getting started with webpack and React, ES6 style](http://humaan.com/getting-started-with-webpack-and-react-es6-style/)
* [A cookbook for using Webpack with React JS](https://github.com/christianalfoni/react-webpack-cookbook)
* [The React.js Way: Getting Started Tutorial](https://blog.risingstack.com/the-react-way-getting-started-tutorial/)
* [Using React with Webpack Tutorial](https://blog.risingstack.com/using-react-with-webpack-tutorial/)
* [TUTORIAL: BUILD A DATE PICKER WITH REACT JS](http://dapperdeveloper.com/2015/09/21/tutorial-build-a-date-picker-with-react-js/)
* [Building stateless function components, new in React 0.14](https://egghead.io/lessons/react-building-stateless-function-components-new-in-react-0-14?utm_source=rss&utm_medium=feed&utm_campaign=rss_feed)
* [How to get started with React js in ES6](http://jpsierens.com/react-es6-get-started/)
* [Which Flux Implementation Should I Use With React?](http://jamesknelson.com/which-flux-implementation-should-i-use-with-react/)
* [Redux](http://rackt.org/redux/index.html)
* [Full-Stack Redux Tutorial](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html)
* [Building an ES6/JSX React/Flux App – Part 1 – the Views](http://shellmonger.com/2015/08/15/building-an-es6jsx-reactflux-app-part-1-the-views/)
* [Tutorial: Handcrafting an Isomorphic Redux Application](https://medium.com/@bananaoomarang/handcrafting-an-isomorphic-redux-application-with-love-40ada4468af4#.9p8dmvk7v)
* [Flux Stores and ES6](https://medium.com/@softwarecf/flux-stores-and-es6-9b453dbf9db#.iuv5ks4nb)
* [Introducing react-pacomo: Automatic namespacing for className](http://jamesknelson.com/taming-css-globals-with-react-without-webpack-or-inline-style/)
* [A system for structuring your React application’s styles](http://jamesknelson.com/a-system-for-structuring-your-react-applications-styles/)
* [Building a Router with Raw React](http://jamesknelson.com/routing-with-raw-react/)
* [React.js By Example: Interacting with the DOM](http://jamesknelson.com/react-js-by-example-interacting-with-the-dom/)
* [Structuring React Applications: Higher-Order Components](http://jamesknelson.com/structuring-react-applications-higher-order-components/)
* [React Auto Update Component](http://quaintous.com/2015/06/09/react-autoupdate-component/)
* [Tutorial: Setting Up a Simple Isomorphic React app](http://jmfurlott.com/tutorial-setting-up-a-simple-isomorphic-react-app/)
* [React Components with Material Design Lite](http://quaintous.com/2015/07/09/react-components-with-mdl/)
* [React-MDL](https://github.com/tleunen/react-mdl)
* [generator-react-webpack](https://github.com/newtriks/generator-react-webpack)
* [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit)
* [Unicorn Standard Starter Kit](https://github.com/unicorn-standard/starter-kit)
* [Adding authentication to your React Flux app](https://auth0.com/blog/2015/04/09/adding-authentication-to-your-react-flux-app/)
* [A complete ES7 Isomorphic Universal ReactJS boilerplate with alt as Flux library.](https://github.com/iam4x/isomorphic-flux-boilerplate)
* [A primer for building Single-Page Applications with](https://github.com/mikechau/react-primer-draft)
* [Awesome React](http://getawesomeness.com/get/react)
* [react-seed](https://github.com/badsyntax/react-seed). Check webpack setup
* [The React.js Way: Flux Architecture with Immutable.js](https://blog.risingstack.com/the-react-js-way-flux-architecture-with-immutable-js/)
* [Backend Apps with Webpack (Part I)](http://jlongster.com/Backend-Apps-with-Webpack--Part-I)
* [The ultimate Webpack setup](http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup)
* [webpack-express-boilerplate](https://github.com/christianalfoni/webpack-express-boilerplate)
* [Webpack and React tutorial - Taking the next steps](http://www.christianalfoni.com/articles/2015_10_01_Taking-the-next-step-with-react-and-webpack)
* [Using react-hot-loader with a webpack-dev-server and a node server](http://ctheu.com/2015/05/14/using-react-hot-loader-with-a-webpack-dev-server-and-a-node-server/)
* [Setup Webpack on an ES6 React app with SASS](http://marmelab.com/blog/2015/05/18/setup-webpack-for-es6-react-application-with-sass.html)
* [Redux: React Todo List Example (Adding a Todo)](https://egghead.io/lessons/javascript-redux-react-todo-list-example-adding-a-todo)
* [React with Flux by example - a simple Todo List dissected](http://reactkungfu.com/2015/07/react-with-flux-by-example-simple-todo-list-dissected/)
* [Redux](http://rackt.org/redux/index.html)
* [Fixed Data Tables for React](https://facebook.github.io/fixed-data-table/)
* [Relay](https://github.com/facebook/relay)
* [Immutable collections for JavaScript](https://github.com/facebook/immutable-js)
* [EventEmitter](https://github.com/facebook/emitter)
* [DataLoader](https://github.com/facebook/dataloader)
* [Dispatcher](https://facebook.github.io/flux/docs/dispatcher.html)
* [Event Emitter, Pub Sub or Deferred Promises … which should you choose?](https://otaqui.com/blog/1374/event-emitter-pub-sub-or-deferred-promises-which-should-you-choose/)
* [Using react-hot-loader with a webpack-dev-server and a node server](http://ctheu.com/2015/05/14/using-react-hot-loader-with-a-webpack-dev-server-and-a-node-server/)
* [How to communicate between React components](http://ctheu.com/2015/02/12/how-to-communicate-between-react-components/)
* [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)
* [Netflix Falcor](http://netflix.github.io/falcor/)
* [The Future of Web Development - React, Falcor, and ES6](http://engineering.widen.com/blog/future-of-the-web-react-falcor/)
* [generator-react-webpack V2.0](https://github.com/newtriks/generator-react-webpack#generator-react-webpack-v20)
* [webpack-howto](https://github.com/petehunt/webpack-howto)
* [react-webpack-express](https://github.com/mixxen/react-webpack-express)
* [react-webpack-node](https://github.com/choonkending/react-webpack-node). Boilerplate for React application with webpack using alt's Flux running on a node express server.
* [Express & ES6 REST API Boilerplate](https://github.com/developit/express-es6-rest-api)
* [Getting Started with Redux, Egghead.IO](https://egghead.io/series/getting-started-with-redux)
* [Adding authentication to your React Flux app](https://auth0.com/blog/2015/04/09/adding-authentication-to-your-react-flux-app/)
* [Nock](https://github.com/pgte/nock)
* [Mocking API Requests in Node tests](http://javascriptplayground.com/blog/2013/08/mocking-web-requests/)
* [JSON Server](https://github.com/typicode/json-server)
* [Creating Demo APIs with json-server](https://egghead.io/lessons/nodejs-creating-demo-apis-with-json-server)
* [Node EasyMock Server](https://github.com/cyberagent/node-easymock)
* [FakeRest](https://github.com/marmelab/FakeRest)
* [pushState With Webpack-dev-server](http://jaketrent.com/post/pushstate-webpack-dev-server/)
* [Create a character voting app using React, Node.js, MongoDB and Socket.IO](http://sahatyalkabov.com/create-a-character-voting-app-using-react-nodejs-mongodb-and-socketio/)
* [Simple Webpack React Starter](https://elements.heroku.com/buttons/cgreening/simple-webpack-react-starter)
* [How to Build a Todo App Using React, Redux, and Immutable.js](http://www.sitepoint.com/how-to-build-a-todo-app-using-react-redux-and-immutable-js/)
* [React seed](https://github.com/badsyntax/react-seed). A boilerplate for building React apps with ES6 and webpack.
* [react-webpack-es6-boilerplate](https://github.com/mikechau/react-webpack-es6-boilerplate)
* [Universal (isomorphic) boilerplate written in ES2015 for Node and the browser.](https://github.com/Kflash/trolly)
* [How to Build a Todo App Using React, Redux, and Immutable.js](http://www.sitepoint.com/how-to-build-a-todo-app-using-react-redux-and-immutable-js/)
* [Node.js and ES6 Instead of Java – A War Story](http://www.technology-ebay.de/the-teams/mobile-de/blog/nodejs-es6-war-story-2)
* [React Todo Redux](https://github.com/sitepoint-editors/react-redux-todo-app)
* [Building modular javascript applications in ES6 with React, Webpack and Babel](https://medium.com/@yamalight/building-modular-javascript-applications-in-es6-with-react-webpack-and-babel-538189cd485f#.2hqep8p4e)
* [Start from scratch with React/Redux](http://blog.simonstrom.xyz/start-from-scratch-with-reactredux/)
* [react-kickstart](https://github.com/vesparny/react-kickstart)
* [Approaches to testing React components - an overview](http://reactkungfu.com/2015/07/approaches-to-testing-react-components-an-overview/)
* [How to create a universal ReactJS application with bare ReactJS](http://blog.lunarlogic.io/2015/how-to-create-a-universal-reactjs-application-with-bare-reactjs/)
* [Universal React](https://24ways.org/2015/universal-react/)


### NoeJS and Express Reading list
* [Running scripts with npm](http://www.jayway.com/2014/03/28/running-scripts-with-npm/)
* [Node.js Tutorials](https://www.codementor.io/nodejs/tutorial)
* [NODESCHOOL](http://nodeschool.io/)
* [Howto Node](http://howtonode.org/)
* [webpack-express-boilerplate](https://github.com/christianalfoni/webpack-express-boilerplate)
* [Getting Started with Express - Up and Running](https://egghead.io/lessons/node-js-getting-started-with-express-up-and-running)
* [react-express-babel6](https://github.com/shantanuraj/react-express-babel6)
* [Using ES6/ES2015 in a Node.JS and Express](https://www.lookami.com/using-es6-es2015-in-a-node-js-express/)
* [Dropbox Express with ECMAScript 6+](http://notebook.erikostrom.com/2015/05/22/dropbox-express-with-ecmascript-6.html)
* [Express & ES6 REST API Boilerplate](https://github.com/developit/express-es6-rest-api)
* [nodemon](https://github.com/remy/nodemon)
* [Build a RESTful API Using Node and Express 4](https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4)
* [Building a Node.js REST API with Express](https://medium.com/@jeffandersen/building-a-node-js-rest-api-with-express-46b0901f29b6#.9bsnbvr41)
* [Node.js - Express Framework](http://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm)
* [ExpressJs Router Tutorial](https://codeforgeek.com/2015/05/expressjs-router-tutorial/)
* [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
* [Create a character voting app using React, Node.js, MongoDB and Socket.IO](http://sahatyalkabov.com/create-a-character-voting-app-using-react-nodejs-mongodb-and-socketio/)
* [Universal (isomorphic) boilerplate written in ES2015 for Node and the browser.](https://github.com/Kflash/trolly)
* [Example Node Server w/ Babel](https://github.com/babel/example-node-server)
* [NodeJS Express ES6 Hello world](https://github.com/500tech/nodejs-express-es6)
* [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
* [Expressive ES6 features that shine in Node.js 4.0](http://rethinkdb.com/blog/node-4/)
* [Configure your Node.js Applications](https://github.com/lorenwest/node-config)
* [Architecting a Secure RESTful Node.js app](http://thejackalofjavascript.com/architecting-a-restful-node-js-app/)
* [Passport - Simple, unobtrusive authentication for Node.js](http://passportjs.org/)
* [express-validator - An express.js middleware for node-validator.](https://github.com/ctavan/express-validator)
* [NodeJS Tutorial Playlist](https://www.youtube.com/playlist?list=PLZm85UZQLd2Q946FgnllFFMa0mfQLrYDL)
* [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)


### Logging
* [Morgan - HTTP request logger middleware for node.js](https://github.com/expressjs/morgan)
* [Winston - a multi-transport async logging library for node.js](https://github.com/winstonjs/winston)
* [Advanced logging with NodeJs](http://tostring.it/2014/06/23/advanced-logging-with-nodejs/)
* [Efficient JSON logging with NodeJS](http://logmatic.io/blog/efficient-json-logging-with-nodejs/)
* [3 Node.js Libraries Which Make Sophisticated Logging Simpler](https://www.loggly.com/blog/three-node-js-libraries-which-make-sophisticated-logging-simplers/)
* [Comparing Winston and Bunyan Node.js Logging](https://strongloop.com/strongblog/compare-node-js-logging-winston-bunyan/)
* [Bristol - Insanely configurable logging for Node.js](https://github.com/TomFrost/Bristol)
* [NODEJS LOGGING WITH BUNYAN AND AZURE](http://geeklearning.io/nodejs-logging-with-bunyan-and-azure/)
* [Logging - The Ultimate Guide](https://www.loggly.com/ultimate-guide/node-logging-basics/)
* [express-winston - winston middleware for express.js](https://github.com/bithavoc/express-winston)
* [Minilog - Lightweight client & server-side logging with Stream-API backends](http://mixu.net/minilog/)
* [JSNLog - Log JavaScript client side events in your server side logs](http://jsnlog.com/)
* [JSNLog @ Vimeo](https://vimeo.com/channels/jsnlog)
* [Service logging in JSON with Bunyan](https://nodejs.org/en/blog/module/service-logging-in-json-with-bunyan/)            
* [Log Magic](https://github.com/pquerna/node-logmagic)
* [Write Logs for Machines, use JSON](https://journal.paul.querna.org/articles/2011/12/26/log-for-machines-in-json/)
* [log.io - Real-time log monitoring in your browser](http://logio.org/)
* [Winston Middleware for Express](https://github.com/FormidableLabs/express-winston-middleware)
* [cookbook - beautiful logging winston](http://nodeqa.com/nodejs_ref/5)
* [WOODMAN - TAKES CARE OF YOUR LOGS](http://joshfire.github.io/woodman/)
* [js-Logger](https://github.com/jonnyreeves/js-logger)
* [JavaScript Logging: We Can Do Better!](http://engineering.cerner.com/blog/javascript-logging-we-can-do-better/)
* [canadarm - Canadarm makes JavaScript logging easy and seamless](https://github.com/cerner/canadarm)
* [Sentry - Sentry is a modern error logging and aggregation platform.](https://github.com/getsentry/sentry)
* [raptor-logging - Super simple logging system that works on the server and and in the browser.](https://github.com/raptorjs/raptor-logging)
* [Stumpy - The Kickass Logger](https://github.com/jstty/stumpy)
* [intel](http://seanmonstar.github.io/intel/)
* [Log4js - The Logging Framework for JavaScript](http://stritti.github.io/log4js/). No NPM!
* [debug - tiny node.js & browser debugging utility for your libraries and applications](https://github.com/visionmedia/debug)
* [Logger for Redux](https://github.com/fcomb/redux-logger)
* [TaggedLogger - A logger frontend for Winston that attaches tags to the messages.](https://bitbucket.org/maghoff/tagged-logger)


### Testing
* [Testing with webpack and Mocha](https://www.youtube.com/watch?v=_sLLjPzOrXI)
* [From Karma to Mocha, with a taste of jsdom](https://medium.com/podio-engineering-blog/from-karma-to-mocha-with-a-taste-of-jsdom-c9c703a06b21#.uqrd94da2)
* [Automated Node.js Testing with Jasmine](https://www.distelli.com/docs/tutorials/test-your-nodejs-with-jasmine)
* [TESTING](https://webpack.github.io/docs/testing.html)
* [How to easily test React components with Karma and Webpack](http://qiita.com/kimagure/items/f2d8d53504e922fe3c5c)
* [How to test React components using Karma and webpack](http://nicolasgallagher.com/how-to-test-react-components-karma-webpack/)
* [Node.js and ES6 Instead of Java – A War Story](http://www.technology-ebay.de/the-teams/mobile-de/blog/nodejs-es6-war-story-2)
* [js-tests-pro](https://github.com/500tech/js-tests-pro)
* [webpack-mocha-demo](https://github.com/jesseskinner/webpack-mocha-demo)
* [Universal (isomorphic) boilerplate written in ES2015 for Node and the browser.](https://github.com/kflash/trolly)
* [A modern React starter pack based on webpack](http://krasimirtsonev.com/blog/article/a-modern-react-starter-pack-based-on-webpack)
* [Testing in ES6 with Mocha and Babel 6](http://jamesknelson.com/testing-in-es6-with-mocha-and-babel-6/)
* [How to implement testing + code coverage on React with Karma, Babel, and Webpack](https://medium.com/@scbarrus/how-to-get-test-coverage-on-react-with-karma-babel-and-webpack-c9273d805063#.za25xszey)
* [How React Components Make UI Testing Easy](http://www.toptal.com/react/how-react-components-make-ui-testing-easy)
* [Setting up Unit Testing with Mocha and Chai](https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-setting-up-unit-testing-with-mocha-and-chai)
* [Adding ES6 Support to Tests using Mocha and Babel](https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-adding-es6-support-to-tests-using-mocha-and-babel)
* [Handle WebPack CSS imports when testing with Mocha](http://stackoverflow.com/questions/32683440/handle-webpack-css-imports-when-testing-with-mocha?lq=1)
* [Example Node Server w/ Babel](https://github.com/babel/example-node-server)
* [Simple Webpack React Starter](https://github.com/cgreening/simple-webpack-react-starter)
* [Universal (isomorphic) boilerplate written in ES2015 for Node and the browser.](https://github.com/Kflash/trolly)
* [Testing React on Jsdom](http://jaketrent.com/post/testing-react-with-jsdom/)
* [The missing piece to the React testing puzzle](https://medium.com/@bruderstein/the-missing-piece-to-the-react-testing-puzzle-c51cd30df7a0#.8ucasbug2)
* [React Testing Tools & Tricks](https://robertknight.github.io/react-testing/docs/react-london-talk.html#1)
* [React Testability](https://github.com/robertknight/react-testing)
* [Start from scratch with React/Redux](http://blog.simonstrom.xyz/start-from-scratch-with-reactredux/)
* [react-kickstart](https://github.com/vesparny/react-kickstart)


### ES6 Reading list
* [Understanding ECMAScript 6](https://leanpub.com/understandinges6/read)
* [Exploring ES6](http://exploringjs.com/)
* [ECMAScript 6 Learning](https://github.com/ericdouglas/ES6-Learning)
* [A Quick Tour Of ES6 (Or, The Bits You’ll Actually Use)](http://jamesknelson.com/es6-the-bits-youll-actually-use/)
* [Using the ES6 transpiler Babel on Node.js](http://www.2ality.com/2015/03/babel-on-node.html)
* [NodeJS and ES6](https://www.youtube.com/watch?v=PBLwtZRNh2M)
* [Finitely Iterating Infinite Data With ES6 Generators](http://derickbailey.com/categories/tips-and-tricks/)
* [ECMAScript 6 — New Features: Overview & Comparison](http://es6-features.org/)
* [JavaScript Promises](http://www.html5rocks.com/en/tutorials/es6/promises/)
* [That's so fetch!](https://jakearchibald.com/2015/thats-so-fetch/)
* [ECMAScript 6 equivalents in ES5](https://github.com/addyosmani/es6-equivalents-in-es5)
* [HTML5 Local Storage and Session Storage](http://javaninja.net/2015/08/html5-local-storage-and-session-storage/)
* [Storing Data on The Client with LocalStorage](http://blog.teamtreehouse.com/storing-data-on-the-client-with-localstorage)


### Etc
* [Building a Tree Diagram in D3.js](http://blog.pixelingene.com/2011/07/building-a-tree-diagram-in-d3-js/)
* [Refactoring to an Adaptive Model](http://martinfowler.com/articles/refactoring-adaptive-model.html)
* [The Twelve-Factor App](http://12factor.net/)
* [Node-RED](http://nodered.org/)
* [Node Red in 5 minutes](https://www.youtube.com/watch?v=f5o4tIz2Zzc)
* [Passwordless - Token-based authentication middleware for Express & Node.js](https://passwordless.net/)
* [Scoop.it - Node.js](http://www.scoop.it/t/node-js-by-eyal-vardi)
* [7 Minimal Node.js Web Frameworks for 2014 and Beyond](http://codecondo.com/7-minimal-node-js-web-frameworks/)
* [Koa - Koa is a new web framework designed by the team behind Express](http://koajs.com/)
* [Restify - restify is a node.js module built specifically to enable you to build correct REST web services](http://restify.com/)
* [Move.js - CSS3 JavaScript animation framework.](https://github.com/visionmedia/move.js)


### TODO
* Hot loading code. See: [Using React with Webpack Tutorial](https://blog.risingstack.com/using-react-with-webpack-tutorial/)
* [React Hot Loader](http://gaearon.github.io/react-hot-loader/)
* [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate). Demonstrates how to use historyApiFallback to work with React router out of the box
* [Using react-hot-loader with a webpack-dev-server and a node server](https://github.com/christianalfoni/webpack-express-boilerplate)
* npm install --save-dev webpack-dev-middleware webpack-hot-middleware


## Node Express notes

1: Install [express](http://expressjs.com/en/index.html), [nodemon](http://nodemon.io/), [babel-cli](https://babeljs.io/docs/usage/cli/),
[babel-preset-es2015](https://babeljs.io/docs/plugins/preset-es2015/) and [babel-preset-stage-0](https://babeljs.io/docs/plugins/preset-stage-0/)

```
npm install --save-dev express              # Express server
npm install --save-dev nodemon              # Autorefresh Express on code change
npm install --save-dev babel-cli            # Contains the babel command line interface. Installs babel-node in ./node-modules/.bin. Enables ES6 in Node
npm install --save-dev babel-preset-es2015  # Compile ES2015 to ES5
npm install --save-dev babel-preset-stage-0 # Enable ES7

```

2: Create server __`./api/express-server.js`__
```javascript
'use strict';
import express from 'express';

const app = express();
const server = app.listen(8081, 'localhost', () => {
  console.log(
   `Server running @ http://${server.address().address}:${server.address().port}.`);
});

app.get('/yo', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({yo: 'Yo Express!'});
});

```

3: Start Express server: <br/>
__`./node_modules/.bin/babel-node ./api/express-server.js --presets es2015,stage-0`__<br/>

4: To watch file changes, start Express server using __`nodemon`__: <br/>
__`./node_modules/.bin/nodemon ./api/express-server.js --exec ./node_modules/.bin/babel-node --presets es2015,stage-0`__


5: Open browser and navigate to: <br/>__`http://localhost:8081/yo`__

6: Press `Ctrl+C`to stop server

7: Move `--presets es2015,stage-0` into `.babelrc`
```javascript
{
  "presets": ["es2015", "stage-0", "react"],
  "plugins": []  
}
```

8: Add scripts in `package.json`
```javascript
"scripts": {
  "server": "./node_modules/.bin/babel-node ./api/express-server.js --presets es2015,stage-0",
  "watch-server": "./node_modules/.bin/nodemon ./api/express-server.js --watch api/ --ignore api/data/  --exec ./node_modules/.bin/babel-node --presets es2015,stage-0"
}
```

9: Start server with either `npm run server`or `npm run watch-server`

### Use Express as a rest server
```
npm install --save-dev body-parser     # node.js middleware for handling JSON, Raw, Text and URL encoded form data
npm install --save-dev cookie-parser   # Parse Cookie header and populate req.cookies with an object keyed by the cookie names
npm install --save-dev multer          # node.js middleware for handling multipart/form-data

```
TODO

### Express routing
TODO

### Webpack dev server with proxy to Express
```
npm install --save-dev node-http-proxy

```
Update __devserver__ section in webpack
```javascript
devServer: {
  contentBase: './src',
  port: 8080,
  progress: true,
  colors: true,
  hot: true,                  // adds the HotModuleReplacementPlugin.
  historyApiFallback: false,  // when false, dev server make directory listing, good feature to navigate in project
  quiet: false,
  noInfo: false,
  lazy: false,
  aggregateTimeout: 300,
  proxy: {
    // Our rest server
    '/api/*': {
      target: 'http://localhost:8081',
      secure: false
    }
  }
},
```

Use api in client
```javascript
fetch('/api/yo')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error('/api/yo', err.toString()));

```
