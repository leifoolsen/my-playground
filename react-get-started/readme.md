# Get started with React

```
npm install
./node_modules/.bin/webpack-dev-server --progress --colors
... or
npm run dev
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
* [React Hot Loader](http://gaearon.github.io/react-hot-loader/)
* [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate). Demonstrates how to use historyApiFallback to work with React router out of the box
* [Express & ES6 REST API Boilerplate](https://github.com/developit/express-es6-rest-api)
* [Getting Started with Redux, Egghead.IO](https://egghead.io/series/getting-started-with-redux)
* [Adding authentication to your React Flux app](https://auth0.com/blog/2015/04/09/adding-authentication-to-your-react-flux-app/)
* [Nock](https://github.com/pgte/nock)
* [Mocking API Requests in Node tests](http://javascriptplayground.com/blog/2013/08/mocking-web-requests/)
* [JSON Server](https://github.com/typicode/json-server)
* [Creating Demo APIs with json-server](https://egghead.io/lessons/nodejs-creating-demo-apis-with-json-server)
* [Node EasyMock Server](https://github.com/cyberagent/node-easymock)
* [FakeRest](https://github.com/marmelab/FakeRest)

### NoeJS Reading list
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

### ES6 Reading list
* [Understanding ECMAScript 6](https://leanpub.com/understandinges6/read)
* [Exploring ES6](http://exploringjs.com/)
* [ECMAScript 6 Learning](https://github.com/ericdouglas/ES6-Learning)
* [A Quick Tour Of ES6 (Or, The Bits You’ll Actually Use)](http://jamesknelson.com/es6-the-bits-youll-actually-use/)

### TODO
* Hot loading code. See: [Using React with Webpack Tutorial](https://blog.risingstack.com/using-react-with-webpack-tutorial/)
* npm install --save-dev webpack-dev-middleware webpack-hot-middleware 
* npm install --save-dev express nodemon

