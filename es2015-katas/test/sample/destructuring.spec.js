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

  it('should have an undefined property', () => {
    const foo = { bar: 'pony' }
    const {baz} = foo
    expect(baz).to.be.undefined;
  });

  it('should access a nested property', () => {
    let foo = { bar: { deep: 'pony', dangerouslySetInnerHTML: 'lol' } }
    let {bar: { deep, dangerouslySetInnerHTML: sure }} = foo
    expect(deep).to.equal('pony');
    expect(sure).to.equal('lol');
  });

  it('should throw error if deep nested property does not exist', () => {
    expect( () => {
      let {foo:{bar}} = {baz: 'ouch'};
    }).to.throw('Cannot read');
  });

  it('should swap properties', () => {
    let left = 10
    let right = 20
    if (right > left) {
      [left, right] = [right, left]
    }
    expect(left).to.equal(20);
    expect(right).to.equal(10);
  });

  it('should skip elements', () => {
    var [,,a,b] = [1,2,3,4,5]
    expect(a).to.equal(3);
    expect(b).to.equal(4);
  });
});
