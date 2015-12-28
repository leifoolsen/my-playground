'use strict';

import moment from 'moment';
import 'material-design-lite/material';


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

// NOTE: Should use "https://github.com/jayphelps/core-decorators.js", but Babel has issues:
//   Decorators are not supported yet in 6.x pending proposal update.
//
// Debounce is designed to call function only once during one certain time. not matter how many time it called.
// Like: submit button click.
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// See: https://davidwalsh.name/javascript-debounce-function
// See: http://jsfiddle.net/1dr00xbn/
// See: https://gist.github.com/bcole808/c0c6877a53c59a77119f
// See: http://www.html5rocks.com/en/tutorials/speed/animations/

/*eslint-disable no-unused-vars*/
function debounce(func, wait=100, immediate=false, context=window) {
  var timeout;
  return function() {
    var context = this, args = arguments;

    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
/*eslint-disable no-unused-vars*/

// throttle is designed to call function in certain interval during constant call. Like: window.scroll.
// See: http://jsfiddle.net/1dr00xbn/
// See: https://gist.github.com/Eartz/fe651f2fadcc11444549
// See: https://developer.mozilla.org/en-US/docs/Web/Events/resize
// See: https://developer.mozilla.org/en-US/docs/Web/Events/scroll
// See: https://gist.github.com/bcole808/c0c6877a53c59a77119f
// See: http://www.html5rocks.com/en/tutorials/speed/animations/

/*eslint-disable no-unused-vars*/
var throttle = (func, ms=100, context=window) => {
  let to = null;
  let wait = false;
  return (...args) => {
    let later = () => {
      func.apply(context, args);
    };
    if(!wait)  {
      later();
      wait = true;
      to = setTimeout(() => {
        wait = false;
      }, ms);
    }
  };
};
/*eslint-disable no-unused-vars*/


class Header {
  headerId  = '#header';
  contentId = '#content';

  constructor() {
    let content = document.querySelector(this.contentId);
    this.header = document.querySelector(this.headerId);
    this.prevContentScrollTop = content.scrollTop;

    /*
    content.addEventListener('scroll',  throttle((event) =>
      this.handleScroll(event), 250, content)
    );
     content.addEventListener('scroll',  event =>
     this.handleScroll(event)
     );
    */
    content.addEventListener('scroll',  debounce((event) =>
      this.scrollContent(event), 100, false, content)
    );

    window.addEventListener('resize',  debounce((event) =>
      this.resizeHeader(event), 100, false, window)
    );
  }

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

  resizeHeader(event) {
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
  isSmallScreenClassName = 'is-small-screen';
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
  headerId       = '#header';

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
        this.header.resizeHeader(null);
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
