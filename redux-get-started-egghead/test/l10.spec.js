// pattern=Lesson10 npm run test:pattern

const describe = require('mocha').describe;
const it = require('mocha').it;
const expect = require('chai').expect;
const deepFreeze = require('deep-freeze-es6');

const toggleTodo = todo => {

  //return Object.assign({}, todo, {
  //  completed: !todo.completed
  //});

  return {
    ...todo,
    completed: !todo.completed
  };
};


describe('Lesson10', () => {
  it('should toggle TODO', () => {
    const todoBefore = {
      id: 0,
      text: 'Learn Redux',
      completed: false
    };
    const todoAfter  = {
      id: 0,
      text: 'Learn Redux',
      completed: true
    };
    deepFreeze(todoBefore);
    expect(toggleTodo(todoBefore)).to.eql(todoAfter);
  });
});

