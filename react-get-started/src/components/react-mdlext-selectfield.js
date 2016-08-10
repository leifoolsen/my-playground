'use strict';

import React, {PropTypes} from 'react';
import { findDOMNode } from 'react-dom';

const cssClasses = (...classes) => {
  const isString = s => s != null && typeof s === 'string';

  const joinStrings = (a, b) => a ? `${a} ${b}` : b;

  const reduceClass = (prevResult, clazz) => isString(clazz)
    ? joinStrings(prevResult, clazz)
    : Object.keys(clazz)
      .filter( key => clazz[key] )
      .reduce( (result, key) => joinStrings(result, key), prevResult );

  return classes
    .filter( clazz => !!clazz)
    .reduce( (result, clazz) => reduceClass(result, clazz), '' );
};

//console.log('*****', '['+cssClasses( {'foo':true, 'bar':false, 'baz':true, 'bat':undefined }) + ']' ); // -> [foo baz]
//console.log('*****', '['+cssClasses( undefined, 'BUZZ', {'foo':true, 'bar':false, 'baz':true, 'bat':undefined }, null, 'BOO') + ']' ); // -> [BUZZ foo baz BOO]
//console.log('*****', '['+cssClasses( 'BAT', {'foo':false, 'bar':false, 'baz':false, 'bat':undefined }, 'FIZZ') + ']' ); // -> [BAT FIZZ]
//console.log('*****', '['+cssClasses( null, undefined, {'foo':null, 'bar':false, 'baz':false, 'bat':undefined } ) + ']' ); // -> []

// http://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
const pseudoId = (n = 12) => Array( n+1 ).join((`${Math.random().toString(36)}00000000000000000`).slice(2, 18)).slice(0, n);


// Based on: https://github.com/tleunen/react-mdl/blob/master/src/Textfield.js
class MdlextSelectfield extends React.Component {

  static displayName = 'MdlextSelectfield';

  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    floatingLabel: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.array.isRequired,
    required: PropTypes.bool,
    style: PropTypes.object,
    value: PropTypes.string,
  };
  static defaultProps = {
    //value: ''
  };

  constructor(props){
    super(props);
  }

  componentDidMount() {
    const element = findDOMNode(this);
    if ( element ) {
      if (this.props.error) {
        this.setAsInvalid();
      }
      window.componentHandler.upgradeElement(element, 'MaterialExtSelectfield');
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.required !== prevProps.required || this.props.error !== prevProps.error) {
      findDOMNode(this).MaterialExtSelectfield.checkValidity();
    }
    if (this.props.disabled !== prevProps.disabled) {
      findDOMNode(this).MaterialExtSelectfield.checkDisabled();
    }
    if (this.props.value !== prevProps.value && this.refs.select !== document.activeElement) {
      findDOMNode(this).MaterialExtSelectfield.change(this.props.value);
    }
    if (this.props.error) {
      // Every time the input gets updated by MDL (checkValidity() or change())
      // its invalid class gets reset. We have to put it again if the input is specifically set as "invalid"
      this.setAsInvalid();
    }
  }

  setAsInvalid() {
    const element = findDOMNode(this);
    if (element.className.indexOf('is-invalid') < 0) {
      element.className = cssClasses(element.className, 'is-invalid');
    }
  }

  render() {
    const { className, disabled, error, floatingLabel, id, label, onChange, options, required, style, value } = this.props;

    const customId = id || `select-${pseudoId()}`;

    const containerClasses = cssClasses(
      'mdlext-selectfield mdlext-js-selectfield',
      {'mdlext-selectfield--floating-label': floatingLabel},
      className
    );

    return (
      <div className={containerClasses} style={style}>
        <select id={customId} className='mdlext-selectfield__select' defaultValue={value}
                onChange={onChange} disabled={disabled} required={required} ref='select'>

          { options.map( option => <option key={option.value} value={option.value}>{option.label}</option> ) }
        </select>
        { label ?<label htmlFor={customId} className='mdlext-selectfield__label'>{label}</label>: null }
        { error ?<span className='mdlext-selectfield__error'>{error}</span>: null }
      </div>
    );
  }

}

export default MdlextSelectfield;
