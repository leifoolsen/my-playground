'use strict';

import React from 'react';

class Hello extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let { phrase, items } = this.props;

    return (
      <div>
        <h1>Hello from {phrase}!</h1>

        <select>
          <option key="0" value="">Velg</option>
          { items.map( item => <option key={item.id} value={item.value}>{item.label}</option> ) }
        </select>

      </div>
    )
  }

}

export default Hello;
