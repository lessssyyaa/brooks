const btnOpen = document.querySelector('.nav_open');
const btnClose = document.querySelector('.nav_close');
const menuList = document.querySelector('.hamburger');

btnOpen.addEventListener('click', () => {
    menuList.classList.add('hamburger--open');
});

btnClose.addEventListener('click', () => {
    menuList.classList.remove('hamburger--open');
});





const swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });