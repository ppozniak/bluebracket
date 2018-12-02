function initModal() {
  const modalOverlay = document.querySelector('.modal');
  const modalWrapper = document.querySelector('.modal__wrapper');
  const modalClose = document.querySelector('.modal__close');
  const modalContent = document.querySelector('.modal__content');
  const modalLoader = document.querySelector('.modal__loader');

  const mainNav = document.querySelector('.main-nav');
  const scrollTop = document.querySelector('.scroll-top');

  const infoButtons = document.querySelectorAll('.tag--info');

  const projectsFolder = './projects/';
  const errorMessage = (err) => `
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

    project.then(response => response.ok ? response : Promise.reject(response))
      .then(data => data.text())
      .then(html => { modalContent.innerHTML = html; })
      .then(prepareModalMedia)
      .catch(err => { modalContent.innerHTML = errorMessage(err); console.error(err); })
      .then(() => { modalLoader.classList.add('hidden') })
  }

  function prepareModalMedia() {
    const media = modalContent.querySelector('.modal__media');
    const mediaLink = modalContent.querySelector('.modal__media-link');
    if (!media) return;

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

  infoButtons.forEach(btn => btn.addEventListener('click', fetchProject));
  modalClose.addEventListener('click', modalOff, false);

  modalOverlay.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target === modalOverlay) { modalOff(e); }
  });

  window.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) { modalOff(e); }
  });
}

module.exports = initModal;