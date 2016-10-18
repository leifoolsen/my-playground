// pattern=Lesson11 npm run test:pattern

const describe = require('mocha').describe;
const it = require('mocha').it;
const expect = require('chai').expect;
const deepFreeze = require('deep-freeze-es6');

const todos = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    default:
      return state;
  }
};


describe('Lesson11', () => {
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
});

