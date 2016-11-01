import React from 'react';
//import { IndexLink } from 'react-router';
import NavLink from './nav-link';

const MainLayout = props => (
  <div className="HolyGrail">
    <header className="HolyGrail-header">
      <p>Header</p>
    </header>
    <div className="HolyGrail-body">
      <main className="HolyGrail-content">
        <p>Main</p>
        {props.children}
      </main>
      <nav className="HolyGrail-nav">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/users">Users</NavLink></li>
          <li>
            <NavLink
              to={{
                pathname: '/widgets',
                query: { message: 'Hello from Route Query' }
              }}
            >
              Widgets
            </NavLink>
          </li>
          <li>
            <NavLink to="/about/">About</NavLink>
          </li>
        </ul>
      </nav>
    </div>
    <footer className="HolyGrail-footer">
      <p>Footer</p>
    </footer>
  </div>
);

MainLayout.propTypes = {
  children: React.PropTypes.node,
};

export default MainLayout;
