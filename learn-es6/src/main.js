'use strict';
import Person from './components/Person';

function logResult(title, result) {
  console.log(title, result);
  const element = document.querySelector('#mount');
  const content = document.createElement('p');
  content.textContent = `${title}: ${result}`;
  element.appendChild(content);
}

class App {

  arrowDemo() {
    let r = [1, 2, 3].map(n => n * 2);
    logResult('Arrow demo', r);
  }

  fetchDemo() {
    fetch('test.html', { method: 'get' } )
      .then(response => response.text())
      .then(text => {
        logResult('Fetch demo', text);
      })
      .catch(err => console.error(err));
  }

  classDemo() {
    const person = new Person('Leif', 'Olsen');
    logResult('Class demo', person);
  }

  run() {
    //content.textContent = `${moment().format('YYYY-MM-DD HH:mm:ss')}: Yo ${person}`;
    this.arrowDemo();
    this.fetchDemo();
    this.classDemo();
  }
}


// Start
document.addEventListener('DOMContentLoaded', () => new App().run());
