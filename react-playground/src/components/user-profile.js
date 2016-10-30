import React, { PropTypes } from 'react';

const UserProfile = (props) => <h1>User Profile for userId: {props.params.userId}</h1>;

UserProfile.propTypes = {
  params: PropTypes.object,
  userId: PropTypes.string,
};

export default UserProfile;
