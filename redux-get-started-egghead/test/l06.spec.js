// pattern=Lesson06 npm run test:pattern

const describe = require('mocha').describe;
const it = require('mocha').it;
const assert = require('chai').assert;
import sinon from 'sinon';

import {createStore} from 'redux';

const counter = (state=0, action) => {

  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const render = () => {
  console.log('render:', store.getState());
};

const store = createStore(counter);
store.subscribe(render);

describe('Lesson06', () => {
  it('should render', () => {
    const spy = sinon.spy();
    store.subscribe(spy);
    store.dispatch({type: 'INCREMENT'});
    assert.isTrue(spy.called, 'Expected store.subscribe to be called');
  });

});
