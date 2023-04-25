
import '../scss/style.scss';

//Табы
document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
  const path = e.currentTarget.dataset.path;
  document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
  btn.classList.remove('tabs-nav__btn--active')});
  e.currentTarget.classList.add('tabs-nav__btn--active');

  document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
      tabsBtn.classList.remove('tabs-item--active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
      });
      });

      //Слайдер- бренды
      var swiper = new Swiper(".swiper", {
          slidesPerView: "auto",
          loop: false,
          spaceBetween: 15,
          pagination: {
              el: ".swiper-pagination",
              clickable: true,
              type: "bullets",
          },
          breakpoints: {
              768: {
              enabled: false,
              spaceBetween: 24,
              autoHeight: false,
              slidesPerView: 3,
              slidesPerGroup: 3,
              slidesPerColumn: 2,
          },
              965: {
              spaceBetween: 20,
          },
              1120: {
              spaceBetween: 33,
          },
          },
      });

          document.querySelector('.read-more').addEventListener('click', function () {
          if (this.innerHTML === 'Показать все') {
          document.querySelectorAll(".swiper-slide__768").forEach(el => el.style.display = 'flex');
            // document.querySelectorAll(".swiper-slide__show924").forEach(el => el.style.display = 'flex');
              this.innerHTML = 'Скрыть';
          } else if (window.innerWidth >= 1120) {
              document.querySelectorAll(".swiper-slide__768").forEach(el => el.style.display = 'none');
              document.querySelectorAll(".swiper-slide__show924").forEach(el => el.style.display = 'flex');
              this.innerHTML = 'Показать все';
          } else if (window.innerWidth >= 768) {
              document.querySelectorAll(".swiper-slide__768").forEach(el => el.style.display = 'none');
              document.querySelectorAll(".swiper-slide__show924").forEach(el => el.style.display = 'none');
              this.innerHTML = 'Показать все';
          } else {
              document.querySelectorAll(".swiper-slide__768").forEach(el => el.style.display = 'none');
              document.querySelectorAll(".swiper-slide__show924").forEach(el => el.style.display = 'flex');
              this.innerHTML = 'Показать все';
          }
      });

      // слайдер ремонт
var swiper = new Swiper(".mySwiper__repair", {
  slidesPerView: "auto",
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      enabled: false,
      spaceBetween: 24,
      autoHeight: false,
      slidesPerView: 3,
    },
    965: {
      spaceBetween: 20,
    },
    1120: {
      spaceBetween: 33,
    },
  },
});

      // Кнопка показать секции repair
document.querySelector('.read-more__repair').addEventListener('click', function () {
  if (this.innerHTML === 'Показать все') {
      document.querySelectorAll(".swiper-slide__repair").forEach(el => el.style.display = 'flex');
      document.querySelectorAll(".swiper-slide__repair924").forEach(el => el.style.display = 'flex');
      this.innerHTML = 'Скрыть';
  } else if (window.innerWidth >= 1120) {
      document.querySelectorAll(".swiper-slide__repair").forEach(el => el.style.display = 'none');
      document.querySelectorAll(".swiper-slide__repair768").forEach(el => el.style.display = 'flex');
      this.innerHTML = 'Показать все';
  } else if (window.innerWidth >= 768) {
      document.querySelectorAll(".swiper-slide__repair").forEach(el => {
      if (!el.classList.contains("swiper-slide__repair")) {
          el.style.display = 'none';
      }
  });
      document.querySelectorAll(".swiper-slide__repair768").forEach(el => el.style.display = 'none');
      this.innerHTML = 'Показать все';
  } else {
      document.querySelectorAll(".swiper-slide__repair").forEach(el => el.style.display = 'none');
      document.querySelectorAll(".swiper-slide__repair768").forEach(el => el.style.display = 'flex');
      this.innerHTML = 'Показать все';
  }
});


      // burger
const burgerBtn = document.querySelector('.burger');
const closeBtn = document.querySelector('.icon-exit');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuFooter = document.querySelector('.burger-menu__bottom');

burgerBtn.addEventListener('click', () => {
  burgerMenu.style.opacity = 0;
  burgerMenu.style.display = 'flex';
  burgerMenuFooter.style.position = 'sticky';
  burgerMenuFooter.style.bottom = 0;
  setTimeout(() => {
  burgerMenu.style.opacity = 1;

  }, 10);
});

closeBtn.addEventListener('click', () => {
  burgerMenu.style.opacity = 0;
  setTimeout(() => {
  burgerMenu.style.display = 'none';
  }, 300);
});

// СЛАЙДЕР СЕКЦИИ ПРАЙС
var swiper = new Swiper('.prices__swiper', {
  loop: false,
  clicable: true,
  pagination: {
    el: '.prices__swiper-pagination',
    clickable: true,
  },
  spaceBetween: 15,
  slidesPerView: "auto",
});

// modal
const modalBtnPhone = document.querySelector('.modal-btn__phone');
const modalWrapperPhone = document.querySelector('.modal-wrapper__phone');
const closeModalBtnPhone = document.querySelector('.close-modal-btn__phone');

modalBtnPhone.addEventListener('click', () => {
  modalWrapperPhone.style.display = 'block';
});

closeModalBtnPhone.addEventListener('click', () => {
  modalWrapperPhone.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target == modalWrapperPhone) {
    modalWrapperPhone.style.display = 'none';
  }
});

const modalBtn = document.querySelector('.modal-btn');
const modalWrapper = document.querySelector('.modal-wrapper');
const closeModalBtn = document.querySelector('.close-modal-btn');

modalBtn.addEventListener('click', () => {
  modalWrapper.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modalWrapper.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target == modalWrapper) {
    modalWrapper.style.display = 'none';
  }
});


