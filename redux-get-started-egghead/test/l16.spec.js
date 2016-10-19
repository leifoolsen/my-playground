// pattern=Lesson16 npm run test:pattern

const describe = require('mocha').describe;
const it = require('mocha').it;
const expect = require('chai').expect;
const deepFreeze = require('deep-freeze-es6');

import {createStore} from 'redux';

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };

    default:
      return state;
  }
};

const todos = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];

    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));

    default:
      return state;
  }
};

const visibilityFilter = (
  state = 'SHOW_ALL', // default state
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](
          state[key],
          action
        );
        return nextState;
      },
      {} // empty initial nextState
    );
  };
};

const todoApp = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
});

describe('Lesson16', () => {

  it('should do some logging', () => {
    const store = createStore(todoApp);

    const logState = (stateText = 'Current state:') => {
      console.log(stateText);
      console.log(store.getState());
      console.log('--------------');
    };

    expect( () => {
      logState('Initial state:');

      console.log('Dispatching ADD_TODO.'); // first todo
      store.dispatch({
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux'
      });
      logState();

      console.log('Dispatching ADD_TODO.'); // second todo
      store.dispatch({
        type: 'ADD_TODO',
        id: 1,
        text: 'Go shopping'
      });
      logState();

      console.log('Dispatching TOGGLE_TODO.'); // toggle first todo
      store.dispatch({
        type: 'TOGGLE_TODO',
        id: 0
      });
      logState();

      console.log('Dispatching SET_VISIBILITY_FILTER');
      store.dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_COMPLETED'
      });
      logState();

    }).to.not.throw(Error);

  });

  it('should add TODO', () => {
    const stateBefore = [];

    const action = {
      type: 'ADD_TODO',
      id: 0,
      text: 'Learn Redux'
    };

    const stateAfter = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      }
    ];

    deepFreeze(stateBefore);
    deepFreeze(stateAfter);
    expect(todos(stateBefore, action)).to.eql(stateAfter);
  });

  it('should toggle TODO', () => {

    const stateBefore = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      },
      {
        id: 1,
        text: 'Go shopping',
        completed: false
      }
    ];
    const action = {
      type: 'TOGGLE_TODO',
      id: 1
    };
    const stateAfter = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      },
      {
        id: 1,
        text: 'Go shopping',
        completed: true
      }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(todos(stateBefore, action)).to.eql(stateAfter);
  });
});

