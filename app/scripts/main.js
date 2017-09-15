const TweenLite = require('gsap/TweenLite');
const scrollTo = require('gsap/scrollToPlugin');
const debounce = require('lodash/debounce');
const throttle = require('lodash/throttle');

// Helpers
function hasClass(el, className) {
  return el.classList.contains(className);
}

function addClass(els, className) {
  const elements = 'forEach' in els ? els : [els];
  elements.forEach(el => el.classList.add(className));
}

function removeClass(els, className) {
  const elements = 'forEach' in els ? els : [els];
  elements.forEach(el => el.classList.remove(className));
}

// Global functions
 (function globalInitFunctions() {
   const mainNav = document.getElementById('main-nav');
   const landingSub = document.getElementById('landing__sub');
   let mainNavOffset = mainNav.offsetTop;

   (function initSmoothScroll() {
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
   }());

   function scrollPastNav() {
     if (window.scrollY >= mainNavOffset && !hasClass(document.body, 'scroll-past-nav')) {
       addClass(document.body, 'scroll-past-nav');
       document.body.style.paddingTop = `${mainNav.offsetHeight}px`;
     } else if (window.scrollY < mainNavOffset && hasClass(document.body, 'scroll-past-nav')) {
       removeClass(document.body, 'scroll-past-nav');
       document.body.style.paddingTop = 0;
     }
   }
   scrollPastNav();

   function spaceForFooter() {
     const footerHeight = document.getElementById('footer').clientHeight
     document.body.style.paddingBottom = `${footerHeight}px`;
   }
   window.addEventListener('load', spaceForFooter);

   // Scroll handler
   const scrollHandler = () => {
     scrollPastNav();
   };
   document.addEventListener('scroll', scrollHandler);

   // Resize handler
   const resizeHandler = debounce(() => {
     removeClass(document.body, 'scroll-past-nav');
     document.body.style.paddingTop = 0;
     mainNavOffset = mainNav.offsetTop;
     scrollPastNav();
     spaceForFooter();
   }, 100);
   window.addEventListener('resize', resizeHandler);
 }());

(function() {
  const modalOverlay = document.querySelector('.modal');
  const modalWrapper = document.querySelector('.modal__wrapper');
  const modalClose = document.querySelector('.modal__close');
  const modalContent = document.querySelector('.modal__content');
  const modalLoader = document.querySelector('.modal__loader');

  const mainNav = document.querySelector('.main-nav');
  const scrollTop = document.querySelector('.scroll-top');

  const infoButtons = document.querySelectorAll('.tag--info');

  const projectsFolder = './projects/';
  const errorMessage = (err) =>`
    <div class="container fade-in">
      <h1>Whoops!</h1>
      <h2>Error ${err.status || ''}: ${err.statusText || 'Please check your internet connection'}</h2>
      <p>
        It happens! Please try again later. I'd be thankful if you can let me know this happened.
      </p>
    </div>
  `;

  function modalOn(e) {
    e.preventDefault();
    modalLoader.classList.remove('hidden');
    document.body.classList.add('modal-on');
    mainNav.classList.add('hidden');
    scrollTop.classList.add('hidden');
    modalWrapper.scrollTop = 0;
  }

  function modalOff(e) {
    e.preventDefault();
    e.stopPropagation();
    document.body.classList.remove('modal-on');
    mainNav.classList.remove('hidden');
    scrollTop.classList.remove('hidden');
    modalContent.innerHTML = '';
  }

  function fetchProject(e) {
    const projectName = e.currentTarget.dataset.project;
    const project = fetch(`${projectsFolder}${projectName}.html`);

    modalOn(e);

    project.then( response => response.ok ? response : Promise.reject(response) )
           .then( data => data.text() )
           .then( html => { modalContent.innerHTML = html; })
           .then( prepareModalMedia )
           .catch( err => { modalContent.innerHTML = errorMessage(err); console.error(err); })
           .then( () => { modalLoader.classList.add('hidden') } )
  }

  function prepareModalMedia() {
    const media = modalContent.querySelector('.modal__media');
    const mediaLink = modalContent.querySelector('.modal__media-link');
    if( !media ) return;

    const loader = document.createElement('div');
    loader.className = 'modal__loader modal__loader--image fade-in';
    loader.innerHTML = `
      <span class="icon icon-image" aria-hidden="true"></span>
    <div class="sr-only">Loading content...</div>`;

    mediaLink.parentNode.insertBefore(loader, mediaLink);
    let mediaEvent = media.nodeName === 'VIDEO' ? 'oncanplay' : 'onload';
    media[mediaEvent] = () => {
      mediaLink.classList.add('fade-in-right@landscape');
      mediaLink.classList.remove('hidden');
      loader.classList.add('hidden');
    }
  }

  infoButtons.forEach( btn => btn.addEventListener('click', fetchProject) );
  modalClose.addEventListener('click', modalOff, false);
  modalOverlay.addEventListener('click', (e) => {
    e.stopPropagation();
    if( e.target === modalOverlay ) { modalOff(e); }
  });
  window.addEventListener('keydown', (e) => {
    if( e.keyCode === 27 ) { modalOff(e); }
  })

}());

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-96379415-2', 'auto');
ga('send', 'pageview');
