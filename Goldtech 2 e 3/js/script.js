const target = document.querySelectorAll('[data-anima]');

const animaScroll = () => {
  let windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  target.forEach(function (element) {
    windowTop > element.offsetTop
      ? element.classList.add('animation')
      : element.classList.remove('animation');
  });
};
window.addEventListener('scroll', animaScroll);
