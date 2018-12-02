const FontFaceObserver = require('fontfaceobserver');

function initFontObservers() {
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
  ]).then(() => { document.body.classList.add('fonts-loaded'); })
    .catch(() => { document.body.classList.add('fonts-failed'); })
}

module.exports = initFontObservers;