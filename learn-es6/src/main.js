'use strict';
import {sum, pi} from './lib/math';
import Person from './components/Person';

function logResult(title, ...results) {
  console.log(title, results);
  const element = document.querySelector('#mount');
  const content = document.createElement('p');
  const d = new Date();
  content.textContent = `${d.getHours()}:${d.getSeconds()}:${d.getMinutes()}.${d.getMilliseconds()} - ${title}: ${results}`;
  element.appendChild(content);
}


class Media {
  constructor(title, duration, isPlaying = false) {
    this.title = title;
    this.duration = duration;
    this.isPlaying = isPlaying;
  }

  start() {
    this.isPlaying = true;
  }

  stop() {
    this.isPlaying = false;
  }
}

class Song extends Media {
  constructor(title, artist, duration, isPlaying = false) {
    super(title, duration, isPlaying);
    this.artist = artist;
  }
}

/*
 * The only way to get true privacy in JS is through scoping, so there is no way to have a property that is a
 * member of this that will be accessible only inside the component. The best way to store truly private data
 * in ES6 is keeping private properties in WeakMaps or using Symbols as keys for private properties
 */

const _firstName = Symbol('firstName');
const _lastName  = Symbol('lastName');
const _age       = Symbol('age');

class ClassWithPrivateDataUsingSymbol {
  constructor(firstName, lastName, age = 55) {
    this[_firstName] = firstName;
    this[_lastName]  = lastName;

    this.age = age;  // Since we're using a set method
  }

  get firstName() {
    return this[_firstName];
  }

  get lastName() {
    return this[_lastName];
  }

  get age() {
    return this[_age];
  }

  set age(age) {
    this[_age] = age;
  }

  toString() {
    return `${this.firstName} ${this.lastName}, ${this.age}`;
  }
}


/*
 * Due to how WeapMaps work it won't prevent objects from beeing GC'ed.
 * As long as the WeakMaps are hidden from the outside world, the private data is safe.
 */
const _privateProps = new WeakMap();
class ClassWithPrivateDataUsingWeakMap {
  constructor(firstName, lastName, age=55) {
    _privateProps.set(this, { firstName, lastName });
    this.age = age;
  }

  get firstName() {
    return _privateProps.get(this).firstName;
  }

  get lastName() {
    return _privateProps.get(this).lastName;
  }

  get age() {
    return _privateProps.get(this).age;
  }

  set age(age) {
    _privateProps.get(this).age = age;
  }

  toString() {
    return `${this.firstName} ${this.lastName}, ${this.age}`;
  }
}


class App {

  fetchDemo() {
    fetch('test.html', { method: 'get' } )
      .then(response => response.text())
      .then(text => {
        logResult('Fetch demo', text);
      })
      .catch(err => console.error(err));
  }

  blockScopeDemo() {
    var a = 1;

    {
      let b = 2; // eslint-disable-line no-unused-vars
    }

    logResult('Block Scope', a); // -> 1
    try {
      logResult('Block Scope', b); // ReferenceError, b is undefined
    }
    catch (err) {
      logResult('Block Scope', err);
    }

    // Loop scope
    for (var i=1; i<=5; i++) {
      setTimeout(function(){
        logResult('Loop Scope, var', i);
      }, i*100);
    }
    // 6,6,6,6,6

    for (let i=1; i<=5; i++) {
      setTimeout(function(){
        logResult('Loop Scope, let', i);
      }, i*100);
    }
    // 1,2,3,4,5
  }

  propertyInitialiserShorthandDemo() {
    const foo = 'foo';
    const bar = 'bar';

    const o = {foo, bar};

    logResult('propertyInitialiserShorthandDemo, initializing', JSON.stringify(o)); // {foo: 'foo', bar: 'bar'}

    const obj = { x: 4, y: 1 };
    const {x, y} = obj;
    logResult('propertyInitialiserShorthandDemo, destructing', 'x', x, 'y', y); // 4, 1}
  }

  nativeObjectMergingDemo() {
    const o1 = {foo: 'foo'};
    const o2 = {bar: 'bar'};
    const o3 = {baz: 'baz', foo: 'qux'};

    Object.assign(o1, o2, o3); // {foo: 'qux', bar: 'bar', baz: 'baz'}
    logResult('nativeObjectMergingDemo, Object.assign', JSON.stringify(o1)); // {foo: 'qux', bar: 'bar', baz: 'baz'}
  }

  arrowDemo() {
    let r = [1, 2, 3].map(n => n * 2);
    logResult('Arrow', r);

    // Lexical this
    const bob = {
      _name: 'Bob',
      _friends: ['Mary', 'Joe'],

      printFriends() {
        this._friends.forEach(f =>
          logResult('Arrow, lexical this', this._name + ' knows ' + f));
      }
    };
    bob.printFriends();
  }

  templateStringsDemo() {
    // Simple string substitution
    const name = "Leif";
    logResult('Template strings', `Yo, ${name}!`);

    // Member + function call
    const user = {name: 'Harry Potter'};
    logResult('Template strings, Member + function call', `Thanks for your reply, ${user.name.toUpperCase()}.`);

    // Expression interpolation.
    const a = 50;
    const b = 100;
    logResult('Template strings, Expression interpolation', `The number is ${a + b} and not ${2 * a + b}.`);

    // Multi-line strings without needing \n\
    logResult('Template strings, Multi-line strings', `string text line 1
string text line 2`);

    // Functions inside expressions
    function fn() { return 'function result'; }
    logResult('Template strings, Functions inside expressions', `foo, ${fn()}, bar`);
  }

  defaultParametersDemo() {
    function greet(msg='hello', name='world') {
      logResult('Default Parameters', msg, name);
    }
    greet();                 // -> hello world
    greet('hey');            // -> hey world
    greet(undefined, 'you'); // -> hello you
  }

  forOfDemo() {
    // Behind the scenes, this will get an iterator from the array
    // and loop through it, getting values from it.
    for (let element of [1, 2, 3]) {
      logResult('for-of', element);
    }
  }

  restSpreadDemo() {
    function getLosers(first, second, third, ...losers) {
      return losers;
    }

    const runners = ["Mary", "Andrew", "Craig", "Michael", "Kenneth", "Dave"];
    logResult('Rest & Spread', getLosers(...runners)); // -> "Michael", "Kenneth", "Dave"
  }

  classDemo() {
    const song = new Song("Wonderwall", "Oasis", "3:45");
    song.start();
    logResult('Class', song.title, 'is playing', song.isPlaying);
  }

  classWithPrivateDataUsingSymbolDemo() {
    const person = new ClassWithPrivateDataUsingSymbol("Leif", "Olsen");
    person.age = 56;

    logResult('ClassWithPrivateDataUsingSymbol', person);
  }

  classWithPrivateDataUsingWeakMapDemo() {
    const person = new ClassWithPrivateDataUsingWeakMap("Leif", "Olsen");
    person.age = 56;

    logResult('ClassWithPrivateDataUsingWeakMap', person);
  }

  importExportDemo() {
    logResult('Import Export function', '2π = ' + sum(pi, pi));
    logResult('Import Export class', new Person('Leif', 'Olsen'));
  }

  promiseDemo() {
    var promises = ['foo','bar','baz'].map(value => {
      return Promise.resolve(value);
    });

    Promise.all(promises)
      .then(values => logResult('Promise.all', values)) // ['foo','bar','baz']
      .catch(error => console.log(error));

    logResult('Code executing after Promise.all');
  }

  run() {
    //this.fetchDemo();
    //this.blockScopeDemo();
    //this.propertyInitialiserShorthandDemo();
    //this.nativeObjectMergingDemo();
    //this.arrowDemo();
    //this.templateStringsDemo();
    //this.defaultParametersDemo();
    //this.forOfDemo();
    //this.restSpreadDemo();
    this.classDemo();
    this.classWithPrivateDataUsingSymbolDemo();
    this.classWithPrivateDataUsingWeakMapDemo();
    //this.importExportDemo();
    //this.promiseDemo();
  }
}


// Start
document.addEventListener('DOMContentLoaded', () => new App().run());
