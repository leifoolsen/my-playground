// pattern=Lesson09 npm run test:pattern

const describe = require('mocha').describe;
const it = require('mocha').it;
const expect = require('chai').expect;
const deepFreeze = require('deep-freeze-es6');

const addCounter = list => [...list, 0]; // list.concat([0]);

const removeCounter = (list, index) => [...list.slice(0, index), ...list.slice(index+1)]; //list.slice(0, index).concat(list.slice(index+1));

const incrementCounter = (list, index) => {
  return [...list.slice(0, index), list[index]+1, ...list.slice(index+1)];
};

describe('Lesson09', () => {
  it('should add counter', () => {
    const listBefore = [];
    const listAfter  = [0];

    deepFreeze(listBefore);
    expect(addCounter(listBefore)).to.eql(listAfter);
  });

  it('should remove counter', () => {
    const listBefore = [0, 10, 20];
    const listAfter  = [0, 20];

    deepFreeze(listBefore);

    expect(removeCounter(listBefore, 1)).to.eql(listAfter);
  });

  it('should increment counter', () => {
    const listBefore = [0, 10, 20];
    const listAfter  = [0, 11, 20];

    deepFreeze(listBefore);

    expect(incrementCounter(listBefore, 1)).to.eql(listAfter);
  });

});
