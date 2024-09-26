const btnOpen = document.querySelector('.nav_open');
const btnClose = document.querySelector('.nav_close');
const menuList = document.querySelector('.hamburger');

btnOpen.addEventListener('click', () => {
  menuList.classList.add('hamburger--open');
});

btnClose.addEventListener('click', () => {
  menuList.classList.remove('hamburger--open');
});







const swiper = new Swiper(".myswiper", {
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
});





for (var i = 0; i < document.getElementsByClassName('size_buttons-item').length; i++) {
  document.getElementsByClassName('size_buttons-item')[i].addEventListener("click", function () {
    this.classList.toggle("size_buttons-item--active");
  })
}







const btnChar = document.querySelector('.characteristic');
const char = document.querySelector('.characteristic_open');

btnChar.addEventListener('click', () => {
  char.classList.toggle('characteristic_open--active');
});

const btnAdd = document.querySelector('.additionally');
const add = document.querySelector('.additionally_open');

btnAdd.addEventListener('click', () => {
  add.classList.toggle('additionally_open--active');
});





const slider = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});