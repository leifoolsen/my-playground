import React, { PropTypes } from 'react';

const AboutContainer = ({ about, contact }) => <div>{about}{contact}</div>;

AboutContainer.propTypes = {
  about: PropTypes.node,
  contact: PropTypes.node,
};

export default AboutContainer;
