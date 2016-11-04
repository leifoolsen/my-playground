import React from 'react';
import { IndexLink } from 'react-router';
import { ROUTES } from './routes';

const SiteLayout = props => (
  <div className="site-layout">

    <header className="site-header">
      <div className="site-header__left-section">
        <div className="site-header__logo" />
      </div>
      <div className="site-header__diagonal" />
      <div className="site-header__right-section">
        <h1>Header content goes here</h1>
      </div>
    </header>

    <div className="site-layout__body">
      <div className="site-layout__wrapper">
        <main className="site-layout__content">
          <p>Main</p>
          {props.children}
        </main>
        <footer className="site-footer">
          <h4>Sticky Footer</h4>
        </footer>
      </div>

      <aside className="site-layout__sidebar-left">
        <p>Aside</p>
        <nav>
          <p>Nav</p>
          <ul>
            <li>
              <IndexLink to={ROUTES.startside} activeClassName="active">Home</IndexLink>
            </li>
            <li>
              <IndexLink to={ROUTES.om} activeClassName="active">About</IndexLink>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  </div>
);

SiteLayout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default SiteLayout;
