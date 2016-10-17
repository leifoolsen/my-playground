// pattern=Lesson05 npm run test:pattern

const describe = require('mocha').describe;
const it = require('mocha').it;
const expect = require('chai').expect;

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

describe('Lesson05', () => {
  it('should increment 0 to 1', () => {
    const expectedResult = 1;
    expect(counter(0, {type: 'INCREMENT'})).to.equal(expectedResult);
  });

  it('should increment 1 to 2', () => {
    const expectedResult = 2;
    expect(counter(1, {type: 'INCREMENT'})).to.equal(expectedResult);
  });

  it('should decrement 2 to 1', () => {
    const expectedResult = 1;
    expect(counter(2, {type: 'DECREMENT'})).to.equal(expectedResult);
  });

  it('should decrement 1 to 0', () => {
    const expectedResult = 0;
    expect(counter(1, {type: 'DECREMENT'})).to.equal(expectedResult);
  });

  it('should return same state if unknown action', () => {
    const expectedResult = 0;
    expect(counter(0, {type: 'FOO_ACTION'})).to.equal(expectedResult);
  });

  it('should return initial state if undefined state is given', () => {
    const expectedResult = 0;
    expect(counter(undefined, {})).to.equal(expectedResult);
  });
});
