import React from 'react';
import { IndexLink } from 'react-router';

class MainLayout extends React.Component {
  render() {
    return (
      <div className="HolyGrail">
        <header className="HolyGrail-header">
          <p>Header</p>
        </header>
        <div className="HolyGrail-body">
          <main className="HolyGrail-content">
            <p>Main</p>
            {this.props.children}
          </main>
          <nav className="HolyGrail-nav">
            <ul>
              <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
              <li><IndexLink to="/users" activeClassName="active">Users</IndexLink></li>
              <li><IndexLink to="/widgets" activeClassName="active">Widgets</IndexLink></li>
            </ul>
          </nav>
        </div>
        <footer className="HolyGrail-footer">
          <p>Footer</p>
        </footer>
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: React.PropTypes.node,
};

export default MainLayout;
