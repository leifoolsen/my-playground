"use strict";

/**
 * Code copied/modified from:
 *   https://github.com/jordanaustin/Details-Expander
 *   https://github.com/chemerisuk/better-details-polyfill
 *   http://codepen.io/stevef/pen/jiCBE
 *   http://blog.mxstbr.com/2015/06/html-details/
 *   http://html5doctor.com/the-details-and-summary-elements/
 *   http://zogovic.com/post/21784525226/simple-html5-details-polyfill
 *   http://www.sitepoint.com/fixing-the-details-element/
 *   https://www.smashingmagazine.com/2014/11/complete-polyfill-html5-details-element/
 */

const hasNativeDetailsSupport =  ('open' in document.createElement('details'));

function injectCSS() {

  if(hasNativeDetailsSupport) {
    return false;
  }

  /*
   Modified from: https://github.com/jordanaustin/Details-Expander/blob/master/src/css/main.css

   NOTE:
   These are defaults meant to mimic the default unstyled brower look.
   I highly recommend you style your details tags but don't do it here.
   Just overwrite the style. Almost everything can be fully customized.
   Anything that shouldn't be overwritten has an !important on it.

   Semantic (correct) markup example:

     <details role="group" open>
       <summary role="button">Show/Hide me</summary>
       <p>Some content ..... etc.</p>
     </details>

   Preserve display attribute example:

   <details role="group">
     <summary role="button">Show/Hide me</summary>
     <div>
        <p>Some content ..... etc.</p>
     </div>
   </details>

   */

  const css = `
    details, details>summary {
      display: block;
    }
    details > summary {
      min-height: 1.4em;
      padding: 0.125em;
    }
    details > summary:before {
      content:"►";
      font-size: 0.9em;
      position: relative;
      display: inline-block;
      width: 1em;
      height: 1em;
      margin-right: 0.3em;
      transform-origin: 0.4em 0.6em;
    }
    details[open] > summary:before {
      content:"▼"
    }
    details > *:not(summary) {
      display: none;
    }
    details[open] > *:not(summary) {
      display: block;

      /* Wrap detail elements in a div-tag if the original display attribute should be preserved */
      /* e.g. if you use an element with "display: flex", then wrap it inside a div */
      /* Too much hassle to make JS preserve original attribute */
    }
`;

  const style = document.createElement('style');
  style.textContent = css
    .replace(/(\/\*([^*]|(\*+[^*\/]))*\*+\/)/gm, '') // remove comments from CSS, see: http://www.sitepoint.com/3-neat-tricks-with-regular-expressions/
    .replace( /  +/gm, ' ' );                        // replaces consecutive spaces with a single space

  //console.log(style.textContent);
  document.head.insertBefore(style, document.head.firstChild);

  return true;
}

export function polyfillDetails(fromEl = document) {

  [...fromEl.querySelectorAll('details')].forEach(function(details) {

    // See: https://www.w3.org/TR/2011/WD-html5-author-20110705/the-details-element.html
    // See: https://www.w3.org/TR/html-aria/#index-aria-group
    details.setAttribute('role', 'group');

    // See: https://www.w3.org/WAI/GL/wiki/Using_aria-expanded_to_indicate_the_state_of_a_collapsible_element
    // See: https://www.w3.org/WAI/PF/aria-practices/
    // Should add ARIA attributes for ALL browsers because current native implementaions are weak:
    // See: https://bugs.webkit.org/show_bug.cgi?id=131111
    details.setAttribute('aria-expanded', (details.hasAttribute('open') ? 'true' : 'false'));


    // See: https://www.w3.org/TR/2011/WD-html5-author-20110705/the-details-element.html
    let summary = details.querySelector('summary:first-child');

    // If there is no child summary element, the user agent
    // should provide its own legend; "Details"
    if (!summary) {
      summary = document.createElement('summary');
      summary.textContent = 'Details';
      details.insertBefore(summary, details.firstChild);
    }

    // <summary> must be the first child of <details>
    if (details.firstChild !== summary) {
      details.removeChild(summary);
      details.insertBefore(summary, details.firstChild);
    }

    // See: https://www.w3.org/TR/html-aria/#index-aria-group
    summary.setAttribute('role', 'button');
    summary.tabIndex = 0;

    ['click', 'keydown'].forEach(function (name) {

      summary.addEventListener(name, event => {

        if (event.target === summary) {
          event.preventDefault();
          event.stopPropagation();

          if (!event.keyCode || event.keyCode === 13 || event.keyCode === 32) {
            if (details.hasAttribute('open')) {
              details.removeAttribute('open');
              details.setAttribute('aria-expanded', 'false');
            }
            else {
              details.setAttribute('open', 'open');
              details.setAttribute('aria-expanded', 'true');
            }
          }
        }
      }, true);
    });
  });

  return !hasNativeDetailsSupport;
}

document.addEventListener('DOMContentLoaded', () => {
  injectCSS();
  polyfillDetails(document);
});
