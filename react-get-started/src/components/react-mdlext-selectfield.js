'use strict';

import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';

const stringList = (...args) => {
  const isString = str => str != null && typeof str === 'string';

  const flatten = list => list.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

  const objectToStrings = arg =>
    Object.keys(arg)
      .filter(key => arg[key])
      .map(key => key);
  return args
    .filter(arg => !!arg)
    .map(arg => isString(arg) ? arg : objectToStrings(arg))
    .reduce((result, arg) => result.concat(Array.isArray(arg) ? flatten(arg) : arg), []);
};

const joinCssClasses = (...classes) => stringList(...classes).join(' ');

// http://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
const pseudoId = (n = 12) => Array(n + 1).join((`${Math.random().toString(36)}00000000000000000`).slice(2, 18)).slice(0, n);


// Based on: https://github.com/tleunen/react-mdl/blob/master/src/Textfield.js
class MdlextSelectfield extends React.Component {

  static displayName = 'MdlextSelectfield';

  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    emptyOption: PropTypes.bool,
    error: PropTypes.bool,
    floatingLabel: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    labelKey: PropTypes.string,
    labelRenderer: PropTypes.func,
    name: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(
      PropTypes.any.isRequired
    ).isRequired,
    required: PropTypes.bool,
    style: PropTypes.object,
    value: PropTypes.string,
    valueKey: PropTypes.string,
    valueRenderer: PropTypes.func,
  };

  static defaultProps = {
    emptyOption: false,
    labelKey: 'label',
    value: '',
    valueKey: 'value',
  };

  componentDidMount() {
    const element = findDOMNode(this);
    if (element) {
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
      element.className = joinCssClasses(element.className, 'is-invalid');
    }
  }

  render() {
    const {
      className, disabled, emptyOption, error, floatingLabel,
      id, label, name, onChange, options, required, style, value,
    } = this.props;

    const customId = id || `select-${pseudoId()}`;

    const containerClasses = joinCssClasses(
      'mdlext-selectfield mdlext-js-selectfield',
      { 'mdlext-selectfield--floating-label': floatingLabel },
      className
    );

    const optionLabel = (option) => option[this.props.labelKey];
    const renderLabelFn = this.props.labelRenderer || optionLabel;

    const optionValue = (option) => option[this.props.valueKey];
    const renderValueFn = this.props.valueRenderer || optionValue;

    return (
      <div className={containerClasses} style={style}>
        <select id={customId} className="mdlext-selectfield__select"
                name={name} defaultValue={value} onChange={onChange} disabled={disabled} required={required} ref="select"
        >
          {emptyOption ? <option key="" value="" /> : null}
          {options.map(o => <option key={renderValueFn(o)} value={renderValueFn(o)} disabled={o.disabled} hidden={o.hidden}>{renderLabelFn(o)}</option>)}
        </select>
        {label ? <label htmlFor={customId} className="mdlext-selectfield__label">{label}</label> : null}
        {error ? <span className="mdlext-selectfield__error">{error}</span> : null}
      </div>
    );
  }
}

export default MdlextSelectfield;
