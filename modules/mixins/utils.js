const pushHash = (hash) => {
  hash = hash
    ? hash.indexOf('#') === 0
      ? hash
      : '#' + hash
    : '';
  if (hash !== '') {
    location.hash = hash;
  } else if (history.replaceState) {
    var loc = window.location;
    history.replaceState(
      null,
      null,
      hash != ''
        ? loc.pathname + loc.search + hash
        : // remove hash
          loc.pathname + loc.search
    );
  }
}

const  getHash = () => {
  return window.location.hash.replace(/^#/, '');
}

const filterElementInContainer = (container) => (element) => container.contains ? container != element && container.contains(element) : !!(container.compareDocumentPosition(element) & 16)

const scrollOffset = (c, t) => c === document ?
  t.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) : getComputedStyle(c).position !== "static" ? t.offsetTop : (t.getBoundingClientRect().top + c.scrollTop)

export default {
  pushHash,
  getHash,
  filterElementInContainer,
  scrollOffset
};
