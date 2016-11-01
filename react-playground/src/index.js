import './stylesheets/main.scss';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import MainLayout from './components/main-layout';
import SearchLayout from './components/search-layout';
import PageNotFound from './components/page-not-found';
import Home from './components/home';
import AboutContainer from './components/about-container';
import About from './components/about';
import Contact from './components/contact';
import UserList from './components/user-list';
import UserProfile from './components/user-profile';
import WidgetList from './components/widget-list';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home} />

      <Route component={SearchLayout}>
        <Route path="users">
          <IndexRoute component={UserList} />
          <Route path=":userId" component={UserProfile} />
        </Route>

        <Route path="widgets" component={WidgetList} />
      </Route>

      <Route path="/about" component={AboutContainer}>
        <IndexRoute components={{ about: About, contact: Contact }} />
      </Route>

      <Route path="*" component={PageNotFound} />
    </Route>
  </Router>
);

render(router, document.getElementById('root'));
