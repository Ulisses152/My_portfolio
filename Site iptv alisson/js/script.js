//Animations on Scroll.

const target = document.querySelectorAll('[data-anima]');
const animateClass = 'animate';

const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 3;
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animateClass);
    } else {
      element.classList.remove(animateClass);
    }
  });
}
animeScroll();

if (target.length) {
  window.addEventListener(
    'scroll',
    debounce(function () {
      animeScroll();
    }, 80),
  );
}
//Menu open/closed

const btn = document.getElementById('btn-mobile');

function toggleMenu() {
  const nav = document.getElementById('menu-closed');
  nav.classList.toggle('open-menu');
}
btn.addEventListener('click', toggleMenu);

const links = document.querySelectorAll('.nav-item');

links.forEach(function (link) {
  link.addEventListener('click', closedMenu);
});

function closedMenu() {
  const navBar = document.getElementById('menu-closed');
  navBar.classList.remove('open-menu');
}

links.addEventListener('click', closedMenu);
