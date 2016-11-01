import React from 'react';
import { IndexLink } from 'react-router';

const NavLink = props => <IndexLink {...props} activeClassName="active" />;

export default NavLink;
