'use strict';

import React, {PropTypes} from 'react';
import { findDOMNode } from 'react-dom';

class Hello extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    items: PropTypes.array.isRequired,
    label: PropTypes.string
  };
  static defaultProps = {
    value: ''
  };

  constructor(props){
    super(props);
  }

  componentDidMount() {
    //const element = findDOMNode(this);
    //if ( element ) {
    //  window.componentHandler.upgradeElement(element, 'MaterialExtSelectfield');
    //}
  }

  render() {
    const { value, disabled, required, items, label } = this.props;

    return (
      <div>
        <h1>Reat MDL Select</h1>

        <div>
          <select defaultValue={value} disabled={disabled} required={required}>
            { items.map( item => <option key={item.value} value={item.value}>{item.label}</option> ) }
          </select>
          { label ? <label>{label}</label> : null }
        </div>
      </div>
    )
  }

}

export default Hello;
