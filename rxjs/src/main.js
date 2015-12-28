'use strict';

class App {
  constructor(name) {
    this.name = name;
  }
  run() {
    const container = document.querySelector('#container');
    const content = document.createElement('h1');
    content.textContent = `${this.name} is running ...`;
    container.appendChild(content);

    console.log(`${this.name} is running ...`);
  }
}

// Start
document.addEventListener('DOMContentLoaded', () => new App('RxJS').run());
