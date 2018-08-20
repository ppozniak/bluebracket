const TweenLite = require('gsap/TweenLite');
const scrollTo = require('gsap/ScrollToPlugin');
const debounce = require('lodash/debounce');
const FontFaceObserver = require('fontfaceobserver');
require('./ga');

(function initFontObservers() {
  const Ubuntu = new FontFaceObserver('Ubuntu');
  const UbuntuBold = new FontFaceObserver('Ubuntu', {
    weight: 500
  });
  const UbuntuItalic = new FontFaceObserver('Ubuntu', {
    style: 'italic'
  });
  const UbuntuMono = new FontFaceObserver('Ubuntu Mono');

  const threshold = 1400;
  Promise.all([
    Ubuntu.load(null, threshold),
    UbuntuBold.load(null, threshold),
    UbuntuItalic.load(null, threshold),
    UbuntuMono.load(null, threshold)
  ]).then( () => {document.body.classList.add('fonts-loaded'); } )
    .catch( () => {document.body.classList.add('fonts-failed'); } )
}());


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
     const isPastNav = window.scrollY >= mainNavOffset;
     const bodyHasClass = document.body.classList.contains('scroll-past-nav');
     if ( isPastNav && !bodyHasClass ) {
       document.body.classList.add('scroll-past-nav');
       document.body.style.paddingTop = `${mainNav.offsetHeight}px`;
     } else if ( !isPastNav && bodyHasClass ) {
       document.body.classList.remove('scroll-past-nav');
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
 }());


(function initModal() {
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
