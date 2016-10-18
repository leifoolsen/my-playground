// pattern=Lesson13 npm run test:pattern

const describe = require('mocha').describe;
const it = require('mocha').it;
const expect = require('chai').expect;
const deepFreeze = require('deep-freeze-es6');

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


describe('Lesson13', () => {
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

