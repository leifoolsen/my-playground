import React from 'react';
import { IndexLink } from 'react-router';

const UserList = () => (
  <ul className="user-list">
    <li><IndexLink to="users/2">Michael</IndexLink></li>
    <li><IndexLink to="users/1">Ryan</IndexLink></li>
    <li><IndexLink to="users/3">Dan</IndexLink></li>
    <li><IndexLink to="users/4">Matt</IndexLink></li>
    <li><IndexLink to="users/5">Tobias</IndexLink></li>
    <li><IndexLink to="users/6">Sebastian</IndexLink></li>
  </ul>
);

export default UserList;
