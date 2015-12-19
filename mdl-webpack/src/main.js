'use strict';

import moment from 'moment';
import 'material-design-lite/material';


function cleanElement(el, forceReflow = true) {
  // See: http://jsperf.com/empty-an-element/16
  while (el.lastChild) {
    el.removeChild(el.lastChild);
  }

  if(forceReflow) {
    // See: http://jsperf.com/force-reflow
    const d = el.style.display;
    el.style.display = "none";
    el.style.display = d;
  }
}


class Drawer {
  constructor(content) {
    const drawerId = "#drawer";
    const anchorQuery = `${drawerId} nav a`;
    const activeAnchorQuery = `${drawerId} nav a.mdl-navigation__link--current`;

    //console.log(document.querySelectorAll(`${this.drawerId} nav a`));
    for (let anchor of document.querySelectorAll(anchorQuery)) {
      anchor.addEventListener('click', event  => {
        event.preventDefault();
        event.stopPropagation();
        if(anchor.href !== anchor.baseURI) {
          const oldActive = document.querySelector(activeAnchorQuery);
          if(oldActive) {
            oldActive.classList.remove('mdl-navigation__link--current');
          }
          anchor.classList.add('mdl-navigation__link--current');

          // See: http://stackoverflow.com/questions/31536467/how-to-hide-drawer-upon-user-click
          const layout = document.querySelector('.mdl-layout');
          if(layout.classList.contains('is-small-screen')) {
            layout.MaterialLayout.drawerToggleHandler_();
          }
          content.show(anchor);
        }
      });
    }
  }
}

class Content {
  constructor() {
    this.contentId = '#content';
  }
  show(anchor) {
    let content = document.querySelector(this.contentId);

    fetch(anchor.href, { method: 'get' } )
      .then(response => response.text())
      .then(text => {
        //content.innerHTML = '';  // NOT the most efficient way to do this!
        cleanElement(content);
        content.insertAdjacentHTML('afterbegin', text);
        componentHandler.upgradeDom();
      })
      .catch(err => console.error(err))
    ;
  }
  index() {
    let content = document.querySelector(this.contentId);

    const h1 = document.createElement('h1');
    h1.textContent = `${moment().format('YYYY-MM-DD HH:mm:ss')} - Yo MDL!`;
    h1.insertAdjacentHTML('beforeend', '&nbsp;<i class="material-icons md-48">thumb_up</i>');
    content.appendChild(h1);

    const button = document.createElement('button');
    const textNode = document.createTextNode('Click Me');
    button.appendChild(textNode);
    button.className = 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent';
    content.appendChild(button);
    componentHandler.upgradeElement(button);

    content.insertAdjacentHTML('beforeend', require('./html/material-design-icons-font-demo.html'));
  }
}

class App {
  constructor() {
    this.content = new Content();
    new Drawer(this.content);
  }

  index() {
    this.content.index();
  }
}


// Start
document.addEventListener('DOMContentLoaded', () => {
  new App().index();
});


/*
 document.querySelector('.mdl-layout__drawer').addEventListener('click', function () {
 document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible');
 this.classList.remove('is-visible');
 }, false);
 */
