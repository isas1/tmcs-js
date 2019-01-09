/*eslint quote-props: "off"*/

// Browser detect

var not_chrome = navigator.userAgent.indexOf('Chrome') === -1
var is_explorer = navigator.userAgent.indexOf('MSIE') > -1
var is_firefox = navigator.userAgent.indexOf('Firefox') > -1
var is_safari = navigator.userAgent.indexOf('Safari') > -1
var is_opera = navigator.userAgent.toLowerCase().indexOf('op') > -1

// ***** STICKY NAV ***** //
const nav = document.querySelector('nav')
const topOfNav = nav.offsetTop // was let -eslint error
const iframe = document.querySelector('iframe')

if (iframe) {
  iframe.blur()
  nav.focus()
}

function fixNav() {
  if (window.scrollY >= topOfNav + 5) {
    document.body.style.paddingTop = `${nav.offsetHeight}px`
    document.body.classList.add('fixed-nav')
    nav.classList.add('nav-trans')
  } else {
    document.body.classList.remove('fixed-nav')
    nav.classList.remove('nav-trans')
    document.body.style.paddingTop = 0
  }
}

window.addEventListener('scroll', fixNav)

// ***** NAV HIGHLIGHT FOLLOW ***** //

const triggers = document.querySelectorAll('.a-nav')
const highlight = document.createElement('span')

function highlightLink() {
  if (window.innerWidth > 599) {
    highlight.classList.add('highlight')
    document.body.append(highlight)
  }
  const linkCoords = this.getBoundingClientRect()
  const coords = {
    height: linkCoords.height,
    left: linkCoords.left + window.scrollX,
    top: linkCoords.top + window.scrollY,
    width: linkCoords.width
  }
  highlight.style.width = `${coords.width}px`
  highlight.style.height = `${coords.height}px`
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
}

function removeHighlight() {
  highlight.classList.remove('highlight')
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink))
document.addEventListener('scroll', removeHighlight)(
  // CSS animated button for desktop only
  function() {
    const cssButton = document.querySelector('#css-button')
    const cssButtonLink = document.querySelector('#css-button a')

    if (window.innerWidth > 599 && !is_safari && not_chrome) {
      cssButton.classList.add('css-button')
      cssButtonLink.classList.add('effect1')
    } else {
      cssButton.classList.add('button-book')
      cssButtonLink.classList.add('effect1-button-safari')
    }
  }
)()
