require('gsap/ScrollToPlugin');
const TweenLite = require('gsap/TweenLite');
const debounce = require('lodash/debounce');

// Main nav
const mainNav = document.getElementById('main-nav');
let mainNavOffset = mainNav.offsetTop;

function initSmoothScroll() {
  const DURATION = 1.1;
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      const hash = link.getAttribute('href');
      if (hash === '#') {
        return false;
      }

      const target = document.querySelector(hash);
      if (!target) {
        return false;
      }

      const mainNavHeight = mainNav.clientHeight;
      const mainNavOffset = mainNav.offsetTop;
      const targetOffset = target.offsetTop > mainNavOffset
        ? target.offsetTop - mainNavHeight
        : target.offsetTop;

      TweenLite.to(window, DURATION, {
        scrollTo: targetOffset,
        ease: 'Power2.easeInOut'
      });

      return true;
    });
  });
}

// Calculate space for footer
function spaceForFooter() {
  const footerHeight = document.getElementById('footer').clientHeight
  document.body.style.marginBottom = `${footerHeight}px`;
}
window.addEventListener('load', spaceForFooter);

// Attaching main nav
function scrollPastNav() {
  const isPastNav = window.scrollY >= mainNavOffset;
  const bodyHasClass = document.body.classList.contains('scroll-past-nav');
  if (isPastNav && !bodyHasClass) {
    document.body.classList.add('scroll-past-nav');
    document.body.style.paddingTop = `${mainNav.offsetHeight}px`;
  } else if (!isPastNav && bodyHasClass) {
    document.body.classList.remove('scroll-past-nav');
    document.body.style.paddingTop = 0;
  }
}
scrollPastNav();

// Scroll handler
document.addEventListener('scroll', scrollPastNav);

// Resize handler
const resizeHandler = debounce(() => {
  document.body.classList.remove('scroll-past-nav');
  document.body.style.paddingTop = 0;
  mainNavOffset = mainNav.offsetTop;
  scrollPastNav();
  spaceForFooter();
}, 100);
window.addEventListener('resize', resizeHandler);

module.exports = initSmoothScroll;