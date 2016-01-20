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
    this.fetchDemo();
    //this.blockScopeDemo();
    //this.arrowDemo();
    //this.templateStringsDemo();
    //this.defaultParametersDemo();
    //this.forOfDemo();
    //this.restSpreadDemo();
    //this.classDemo();
    //this.importExportDemo();
    //this.promiseDemo();
  }
}


// Start
document.addEventListener('DOMContentLoaded', () => new App().run());
