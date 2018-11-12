/*eslint no-console: "off"*/
/*eslint quote-props: "off"*/

// ***** STICKY NAV ***** //
const nav = document.querySelector('nav');
const topOfNav = nav.offsetTop; // was let -eslint error
console.log(window);

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = `${nav.offsetHeight}px`;
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', fixNav);


// ***** NAV HIGHLIGHT FOLLOW ***** //
const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');


function highlightLink() {
  highlight.classList.add('highlight');
  document.body.append(highlight);
  const linkCoords = this.getBoundingClientRect();
  const coords = {
    height: linkCoords.height,
    left: linkCoords.left + window.scrollX,
    top: linkCoords.top + window.scrollY,
    width: linkCoords.width
  }
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
  // console.log(linkCoords);
}

function removeHighlight() {
  highlight.classList.remove('highlight');
  // console.log("Remove highlight here");
}

triggers.forEach(a => a.addEventListener("mouseenter", highlightLink));
document.addEventListener("scroll", removeHighlight);