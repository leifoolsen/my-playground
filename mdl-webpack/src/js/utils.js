
export function cleanElement(el, forceReflow=true) {

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
