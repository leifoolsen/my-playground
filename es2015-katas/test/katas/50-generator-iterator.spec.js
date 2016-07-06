// 50: Generator - iterator
// To do: make all tests pass, leave the assert lines unchanged!

const describe = require('mocha').describe;
const beforeEach = require('mocha').beforeEach;
const it = require('mocha').it;
const assert = require('chai').assert;

describe('a generator returns an iterable object', () => {

  const generatorFunction = function* (){
    yield 1;
    yield 2;
  };

  let generator;

  beforeEach(() => {
    generator = new generatorFunction();
  });

  it('a generator returns an object', () =>  {
    const typeOfTheGenerator = typeof generator;
    assert.equal(typeof generator, typeOfTheGenerator);
  });

  it('a generator object has a key `Symbol.iterator`', () => {
    const key = Symbol.iterator;
    assert.equal(key in generator, true);
  });

  it('a generator object has an iterator, which is a function', () => {
    const iterator = generator[Symbol.iterator];
    const theType = typeof iterator;
    const expected = 'function';

    assert.equal(theType, expected);
  });

  it('can be looped with `for-of`, which expects an iterable', () => {

    function iterateForOf(){
      for (let value of generator) {
        // no statements needed
      }
    }

    assert.doesNotThrow(iterateForOf);
  });

});
