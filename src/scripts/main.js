require('./ga');
const initFontObservers = require('./fontObservers');
const initModalSystem = require('./modal');
const initSmoothScroll = require('./smoothScroll');

initFontObservers();
initModalSystem();
initSmoothScroll();

// Birthday click easter egg
const inlineCodeBirthday = document.getElementById('inline-code-birthday');
inlineCodeBirthday.addEventListener('click', handleBirthdayClick);

function handleBirthdayClick() {
  event.preventDefault();
  const todayYear = new Date().getFullYear();
  const babyBoiBirthday = new Date(2016, 9, 20).getFullYear();
  event.target.textContent = `${todayYear - babyBoiBirthday} years`;
  event.target.classList.remove('inline-code--interactive');
  inlineCodeBirthday.removeEventListener('click', handleBirthdayClick);
}
