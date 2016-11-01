import React from 'react';

const WidgetList = (props) => (
  <ul className="widget-list">
    <li>Query: {props.location.query.message}</li>
    <li>Widget 1</li>
    <li>Widget 2</li>
    <li>Widget 3</li>
  </ul>
);

WidgetList.propTypes = {
  location: React.PropTypes.object,
};

export default WidgetList;
