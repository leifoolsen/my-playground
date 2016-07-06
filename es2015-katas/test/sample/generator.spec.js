/*
 * A generator is a function that returns an iterator
 * Generators are functions that can be paused.
 */

const describe = require('mocha').describe;
const it = require('mocha').it;
const expect = require('chai').expect;
//const assert = require('chai').assert;

describe('generator', () => {

  function* greetGeneratorFunction() {
    yield 'h';
    yield 'e';
    yield 'l';
    yield 'l';
    yield 'o';
  }

  it('should say hello', () => {

    const greet = greetGeneratorFunction();
    let hello = '';
    for (let c of greet) {
      hello += c;
    }

    expect(hello).to.equal('hello');
  });

  it('is done after saying hello', () => {

    const greet = greetGeneratorFunction();
    let hello = '';
    for (let c of greet) {
      hello += c;
    }
    const next = greet.next();
    expect(next.done).to.be.true;
  });

});
