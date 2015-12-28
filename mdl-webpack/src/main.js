'use strict';

import { debounce } from 'core-decorators';
import { throttle } from 'core-decorators';
import moment from 'moment';
import 'material-design-lite/material';


/*
 * Debounce vs Throttle
 * Throttle is designed to call function in certain interval during constant call. Like: window.scroll.
 * Debounce is designed to call function only once during one certain time. not matter how many time it called. Like: submit button click
 */

function cleanElement(el, forceReflow=true) {
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

class Header {
  headerId  = '#header';
  contentId = '#content';

  constructor() {
    let content = document.querySelector(this.contentId);
    this.header = document.querySelector(this.headerId);
    this.prevContentScrollTop = content.scrollTop;

    content.addEventListener('scroll',  event => this.scrollContent(event));
    window.addEventListener('resize', () => this.resizeHeader());
    window.addEventListener('orientationchange', () => this.resizeHeader());
  }

  @throttle
  scrollContent(event) {
    let content = event.target;
    let currentContentScrollTop = content.scrollTop;
    let scrollDiff = this.prevContentScrollTop - currentContentScrollTop;
    let headerTop = (parseInt( window.getComputedStyle( this.header ).getPropertyValue( 'top' ) ) || 0) + scrollDiff;

    if(currentContentScrollTop <= 0) {
      // Scrolled to the top. Header sticks to the top
      this.header.style.top = '0';
      this.header.classList.remove('is-scroll');
    }
    else if(scrollDiff > 0) {
      // Scrolled up. Header slides in
      this.header.style.top = ( headerTop > 0 ? 0 : headerTop ) + 'px';
      this.header.classList.add('is-scroll');
    }
    else if(scrollDiff < 0) {
      // Scrolled down
      this.header.classList.add('is-scroll');

      if (content.scrollHeight - content.scrollTop <= content.offsetHeight) {
        // Bottom of content
        this.header.style.top = '0';
      }
      else {
        this.header.style.top = ( Math.abs( headerTop ) > this.header.offsetHeight ? -this.header.offsetHeight : headerTop ) + 'px';
      }
    }

    this.prevContentScrollTop = currentContentScrollTop;
  }

  @debounce
  resizeHeader() {
    let content = document.querySelector(this.contentId);
    this.header.style.width = content.clientWidth + 'px';
  }
}

class Drawer {
  drawerId               = '#drawer';
  navLinkQuery           = `${this.drawerId} nav a.mdl-navigation__link`;
  currentNavClassName    = 'mdl-navigation__link--current';
  currentNavClass        = `.${this.currentNavClassName}`;
  layoutClass            = '.mdl-layout';
  //isSmallScreenClassName = 'is-small-screen';
  isVisibleClassName     = 'is-visible';

  constructor(content) {

    for (let anchor of document.querySelectorAll(this.navLinkQuery)) {

      anchor.addEventListener('click', event  => {
        event.preventDefault();
        event.stopPropagation();

        if(anchor.href !== anchor.baseURI) {
          this.setActiveNavLink_(anchor);
          this.closeDrawer_();
          content.show(anchor);
        }
      });
    }
  }
  setActiveNavLink_(navLinkNode) {
    const currentNav = navLinkNode.parentNode.querySelector(this.currentNavClass);
    if(currentNav) {
      currentNav.classList.remove(this.currentNavClassName);
    }
    navLinkNode.classList.add(this.currentNavClassName);
  }
  closeDrawer_() {
    // See: http://stackoverflow.com/questions/31536467/how-to-hide-drawer-upon-user-click
    // See: https://github.com/google/material-design-lite/blob/v1.0.6/material.js#L3234
    const layout = document.querySelector(this.layoutClass);
    const drawer = document.querySelector(this.drawerId);
    if(drawer.classList.contains(this.isVisibleClassName)) {
      layout.MaterialLayout.drawerToggleHandler_();
    }
  }
}

class Content {
  contentId      = '#content';
  contentPanelId = '#content-panel';
  //headerId       = '#header';

  constructor(header) {
    this.header = header;
  }
  show(anchor) {
    let content = document.querySelector(this.contentId);
    let contentPanel = document.querySelector(this.contentPanelId);

    fetch(anchor.href, { method: 'get' } )
      .then(response => response.text())
      .then(text => {
        cleanElement(contentPanel);
        contentPanel.insertAdjacentHTML('afterbegin', text);
        content.scrollTop = 0;
        this.header.resizeHeader();
        componentHandler.upgradeDom();
      })
      .catch(err => console.error(err))
    ;
  }
  index() {
    let contentPanel = document.querySelector(this.contentPanelId);

    const h1 = document.createElement('h1');
    h1.textContent = `${moment().format('YYYY-MM-DD HH:mm:ss')} - Yo MDL!`;
    h1.insertAdjacentHTML('beforeend', '&nbsp;<i class="material-icons md-48">thumb_up</i>');
    contentPanel.appendChild(h1);

    const button = document.createElement('button');
    const textNode = document.createTextNode('Click Me');
    button.appendChild(textNode);
    button.className = 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent';
    contentPanel.appendChild(button);
    componentHandler.upgradeElement(button);

    contentPanel.insertAdjacentHTML('beforeend', require('./html/material-design-icons-font-demo.html'));
    this.header.resizeHeader(null);
  }
}

class App {
  constructor() {
    this.header = new Header();
    this.content = new Content(this.header);
    new Drawer(this.content);
  }

  index() {
    this.content.index();
  }
}


// Start
document.addEventListener('DOMContentLoaded', () => new App().index());
