# EcmaScript2015

```
npm install
npm run dev
http://localhost:8080/webpack-dev-server/
```

## EcmaScript 2015 => ES5

### JQuery $
```javascript
const element = document.querySelector('#some-id');
console.log(element);
```

### JQuery $$
```javascript
const elements = document.querySelectorAll('div');
for (let el of elements) console.log(el);
```

### Ajax

Native / ES5
```javascript
if (window.XMLHttpRequest) { // Mozilla, Safari, ...
  request = new XMLHttpRequest();
} 
else if (window.ActiveXObject) { // IE
  try {
    request = new ActiveXObject('Msxml2.XMLHTTP');
  } 
  catch (e) {
    try {
      request = new ActiveXObject('Microsoft.XMLHTTP');
    } 
    catch (e) {}
  }
}

request.open('GET', 'test.html', true);
request.send(null);
console.log(request.response);
```


JQuery
```javascript
$.get('test.html', function(data, status){
  console.log('Status: ', status, ' Data: ', data);
});
```

EcmaScript2015
```javascript
fetch('test.html', { method: 'get' } )
  .then(response => response.text())
  .then(text => {
    console.log(text);
  })
  .catch(err => console.error(err));
```
  
### let, const

EcmaScript2015
```javascript
var a = 1;

{
  let b = 2;
}

console.log(a); // -> 1
console.log(b); // ReferenceError, b is undefined

const favorite = 7;
favourite = 1000; // -> compile error
 
{ 
  let x;
  {
    const x = "sneaky"; // -> // okay, block scoped name

    x = "foo"; // -> // compile error
  }
  // error, already declared in block
  let x = "inner"; 
}

// Loop scope
for (var i=1; i<=5; i++) {
    setTimeout(function(){
        console.log(i);
    }, i*100);
}
// 6,6,6,6,6

for (let i=1; i<=5; i++) {
    setTimeout(function(){
        console.log(i);
    }, i*100);
}
// 1,2,3,4,5
 
```

ES5
```javascript
var a = 1;

{
  var b = 2;
}

console.log(a); // -> 1
console.log(b); // -> 2

// Loop scope
for (var i=1; i<=5; i++) {
    setTimeout(function(){
        console.log(i);
    }, i*100);
}
// 6,6,6,6,6
```

### Object Literal Enhancements

#### Property Value Shorthands
EcmaScript2015
```javascript
var foo = 'foo';
var bar = 'bar';

var o = {foo, bar};

console.log(o); // {foo: 'foo', bar: 'bar'}
```

ES5
```javascript
var foo = 'foo';
var bar = 'bar';

var o = {foo: foo, bar: bar};
console.log(o); // {foo: 'foo', bar: 'bar'}
```

#### Destructing Property Value Shorthands
EcmaScript2015
```javascript
const obj = { x: 4, y: 1 };
const {x,y} = obj;
console.log(x); // 4
console.log(y); // 1
```


#### Native object merging - Object.assign
EcmaScript2015
```javascript
var o1 = {foo: 'foo'};
var o2 = {bar: 'bar'};
var o3 = {baz: 'baz', foo: 'qux'};

Object.assign(o1, o2, o3); // {foo: 'qux', bar: 'bar', baz: 'baz'}
console.log(o1); // {foo: 'qux', bar: 'bar', baz: 'baz'}
```


### Arrow Functions
Binds lexical this

Arrow function syntax
```javascript
var reflect = value => value;
```

Specifying arguments:
```javascript
    () => { ... } // no argument
     x => { ... } // one argument
(x, y) => { ... } // several arguments


// No argument
var myName = () => "LOL";

// effectively equivalent to:
var myName = function() {
    return "LOL";
};

// One argument
var reflect = value => value;

// effectively equivalent to:
var reflect = function(value) {
    return value;
};

// Several arguments
var sum = (num1, num2) => num1 + num2;

// effectively equivalent to:
var sum = function(num1, num2) {
    return num1 + num2;
};

```

Specifying a body:
```javascript
x => { return x * x }  // block
x => x * x  // expression, equivalent to previous line
```

Lexical this
```javascript
// For arrow functions, lexical this is implemented as follows.
x => x + this.y;

// is mostly syntactic sugar for
function (x) { return x + this.y }.bind(this)
```

EcmaScript 2015
```javascript
let r = [1, 2, 3].map(n => n * 2);
console.log(r);  // -> [ 2, 4, 6 ]


// Lexical this
const bob = {
  _name: 'Bob',
  _friends: ['Mary', 'Joe'],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + ' knows ' + f));
  }
}

// Event handling
var PageHandler = {

    id: "123456",

    init: function() {
        document.addEventListener("click",
                event => this.doSomething(event.type), false);
    },

    doSomething: function(type) {
        console.log("Handling " + type  + " for " + this.id);
    }
};
```

ES5
```javascript
var r = [1, 2, 3].map(function(n) { return n * 2; }, this);
console.log(r);  // -> [ 2, 4, 6 ]


// Lexical this
var bob = {
  _name: 'Bob',
  _friends: ['Mary', 'Joe'],
  printFriends: function printFriends() {
    this._friends.forEach(function (f) {
      return console.log(this._name + ' knows ' + f);
    }, this);
  }
};

// Event handling
var PageHandler = {

    id: "123456",

    init: function() {
        document.addEventListener("click", (function(event) {
            this.doSomething(event.type);
        }).bind(this), false);
    },

    doSomething: function(type) {
        console.log("Handling " + type  + " for " + this.id);
    }
};
```


### Template Strings

EcmaScript 2015
```javascript
// Basic usage with an expression placeholder
var person = 'Leif Olsen';
console.log(`Yo! ${person}!`);

// Expressions work just as well with object literals
var user = {name: 'Harry Potter'};
console.log(`Thanks for your reply, ${user.name}.`);

// Expression interpolation. One use is readable inline math.
var a = 50;
var b = 100;
console.log(`The number is ${a + b} and not ${2 * a + b}.`);

// Multi-line strings without needing \n\
console.log(`string text line 1
string text line 2`);

// Functions inside expressions
function fn() { return 'function result'; }
console.log(`foo ${fn()} bar`);
```

ES5
```javascript
'use strict';

// Basic usage with an expression placeholder
var person = 'Leif Olsen';
console.log('Yo! ' + person + '!');

// Expressions work just as well with object literals
var user = { name: 'Harry Potter' };
console.log('Thanks for your reply, ' + user.name + '.');

// Expression interpolation. One use is readable inline math.
var a = 50;
var b = 100;
console.log('The number is ' + (a + b) + ' and not ' + (2 * a + b) + '.');

// Multi-line strings:
console.log('string text line 1\nstring text line 2');

// Functions inside expressions
function fn() {
  return 'function result';
}
console.log('foo ' + fn() + ' bar');
```

### Default Parameters

EcmaScript 2015
```javascript

function greet(msg='hello', name='world') {
  console.log(msg,name);
}

greet();                 // -> hello world
greet('hey');            // -> hey world
greet(undefined, 'you'); // -> hello you
```

ES5
```javascript
function greet(msg, name) {
  (msg === undefined) && (msg = 'hello');
  (name === undefined) && (name = 'world');
  console.log(msg,name);
}

greet();                 // -> hello world
greet('hey');            // -> hey world
greet(undefined, 'you'); // -> hello you
```


### For-Of

EcmaScript 2015
```javascript
// Behind the scenes, this will get an iterator from the array 
// and loop through it, getting values from it.
for (let element of [1, 2, 3]) {
  console.log(element);
}
// => 1 2 3
```

ES5
```javascript
// Using a for loop
var a = [1,2,3];
for (var i = 0; i < a.length; ++i) {
    console.log(a[i]);
}
// => 1 2 3
```


### Rest & Spread

EcmaScript 2015
```javascript
const runners = ["Mary", "Andrew", "Craig", "Michael", "Kenneth", "Dave"];

function getLosers(first, second, third, ...losers) {
  return losers;
}

console.log(getLosers(...runners)); // -> "Michael", "Kenneth", "Dave" 
```


### Class

EcmaScript 2015
```javascript
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

const song = new Song("Wonderwall", "Oasis", "3:45");
song.start();
console.log(song.title, 'is playing', song.isPlaying);
```

ES5
```javascript
function Media(title, duration) {
  this.title = title;
  this.duration = duration;
  this.isPlaying = false;
}

Media.prototype.start = function start() {
  this.isPlaying = true;
};

Media.prototype.stop = function stop() {
  this.isPlaying = false;
};

function Song(title, artist, duration) {
  Media.call(this, title, duration);
  this.artist = artist;
}

Song.prototype = Object.create(Media.prototype);
```


### Private properties
The only way to get true privacy in JS is through scoping, so there is no way to have a property that is a
member of this that will be accessible only inside the component. The best way to store truly private data
in ES6 is keeping private properties in WeakMaps or using Symbols as keys for private properties. If you don't care
too much about keeping properties private, simply use the old default underscore prefix to indicate privacy.

#### Using symbols as keys for private properties

EcmaScript 2015
```javascript
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


const person = new ClassWithPrivateDataUsingSymbol("Leif", "Olsen");
person.age = 56;

console.log( person); // -> Leif Olsen, 56
```

#### Keeping private data in WeakMaps
Due to how WeapMaps work it won't prevent objects from beeing GC'ed.
As long as the WeakMaps are hidden from the outside world, the private data is safe.

EcmaScript 2015
```javascript
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

const person = new ClassWithPrivateDataUsingWeakMap("Leif", "Olsen");
console.log( person); // -> Leif Olsen, 55
```


#### Keeping private using underscores
The old default, just use a public property with an underscore prefix. While not a private property
by any stretch of the imagination, this is easily the simplest, most readable, and fastest approach.

EcmaScript 2015
```javascript
class ClassWithPrivateDataUsingUnderscore {
  constructor(_firstName, _lastName, _age=55) {
    this._firstName = _firstName;
    this._lastName = _lastName;
    this.age = _age;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get age() {
    return this._age;
  }

  set age(age) {
    this._age = age;
  }

  toString() {
    return `${this.firstName} ${this.lastName}, ${this.age}`;
  }
}

const person = new ClassWithPrivateDataUsingUnderscore("Leif", "Olsen");
person.age = 56;
console.log( person); // -> Leif Olsen, 56
```

### import export

EcmaScript 2015
```javascript
// ./lib/math.js

export function sum(x, y) {
  return x + y;
}
export const pi = 3.141593;


// ./components/Person.js
class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  getName() {
    return `${this.first} ${this.last}`;
  }
  toString() {
    return this.getName();
  }
}
export default Person;


// main.js
import {sum, pi} from './lib/math';
import Person from './components/Person';

console.log('2π = ' + sum(pi, pi));
console.log(new Person('Leif', 'Olsen');
```

ES5
```javascript
// ./lib/math.js
exports.sum = sum;
function sum(x, y) {
  return x + y;
}
var pi = exports.pi = 3.141593;

// main.js
var math = require('./lib/math');
console.log('2π = ' + math.sum(math.pi, math.pi));
```


## TODO

### New Array Features


### Maps and Sets


### Typed Arrays


### Iterables and iterators


### Generators


### Asynchronous programming


### Promises

The core idea behind promises is that a promise represents the result of an asynchronous operation. A promise is in one of three different states:

* pending - The initial state of a promise.
* fulfilled - The state of a promise representing a successful operation.
* rejected - The state of a promise representing a failed operation.

Once a promise is fulfilled or rejected, it is immutable (i.e. it can never change again).


Basic promise usage, See e.g. [David Walsh, JavaScript Promise API](https://davidwalsh.name/promises)
```javascript
// Produce a promise
var p = new Promise(function(resolve, reject) {
	
	// Do an async task async task and then...

	if(/* good condition */) {
		resolve('Success!');
	}
	else {
		reject('Failure!');
	}
});

// Consume
p.then(function() { 
	/* do something with the result */
}).catch(function() {
	/* error :( */
})
```

Promise composition
```javascript
var promises = ['foo','bar','baz'].map(value => {
  return Promise.resolve(value);
});

Promise.all(promises)
  .then(values => console.log(values)) // ['foo','bar','baz']
  .catch(error => console.log(error));
```


### @Decorators


#### @Debounce

#### @Throttle

#### @Decorate


### Reflect API


<!--
EcmaScript 2015
```javascript

```

ES5
```javascript

```
-->

## Useful links
* [ECMAScript 6 equivalents in ES5](https://github.com/addyosmani/es6-equivalents-in-es5)
* [Future JavaScript, ES6, ES7, JS2015 and beyond feature documentation and examples](https://github.com/jedrichards/es6)
* [ECMAScript 6 — New Features: Overview & Comparison](http://es6-features.org/)
* [ECMAScript 6 git.io/es6features](https://github.com/lukehoban/es6features)
* [Curated List of ES6 and ES7 Resources](http://golist.co/ecmascript-6-resources)
* [ES6 Coding Style](https://github.com/elierotenberg/coding-styles/blob/master/es6.md)
* [Exploring ES6](http://exploringjs.com/es6/index.html#toc_ch_maps-sets)
* [Understanding ECMAScript 6](https://leanpub.com/understandinges6/read)
