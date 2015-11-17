'use strict';

class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  getName() {
    return this.first + ' ' + this.last;
  }
  toString() {
    return this.getName();
  }
}
export default Person;
