

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
