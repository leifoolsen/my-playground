import React, { PropTypes } from 'react';

const About = (props) => <h1>About. Message: {props.params.message || 'Default message'}</h1>;

About.propTypes = {
  params: PropTypes.object,
  message: PropTypes.string,
};

export default About;
