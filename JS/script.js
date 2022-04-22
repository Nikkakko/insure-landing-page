const burgerOpen = document.querySelector('.navigation__burger--open');

const burgerMenu = document.querySelector('.menu__links');

const disableScrolling = function () {
  const x = window.scrollX;
  const y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
};

const enableScrolling = function () {
  window.onscroll = function () {};
};

burgerOpen.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');

  if (burgerMenu.classList.contains('active')) {
    disableScrolling();
    burgerOpen.innerHTML = `
    <img src="./images/icon-close.svg" alt="">
    `;
  } else {
    enableScrolling();
    burgerOpen.innerHTML = `
    <img src="./images/icon-hamburger.svg" alt="">
    `;
  }
});
