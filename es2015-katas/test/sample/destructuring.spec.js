/**
 * https://ponyfoo.com/articles/es6-destructuring-in-depth
 */

const describe = require('mocha').describe;
const it = require('mocha').it;
const expect = require('chai').expect;

describe('destructuring', () => {

  it('should destructure correctly', () => {
    const foo = { bar: 'pony', baz: 3 }
    const {bar, baz} = foo
    expect(bar).to.equal('pony');
    expect(baz).to.equal(3);
  });

  it('should map correctly', () => {
    const foo = { bar: 'pony', baz: 3 }
    var {bar: a, baz: b} = foo;
    expect(a).to.equal('pony');
    expect(b).to.equal(3);
  });

});
