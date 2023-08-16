const swiper = new Swiper(".main-img-banner-list", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  slidesPerView: 1,
  speed: 2500,
  loop: true,
  breakpoints: {
    1200: {
      slidesPerView: 1.5,
    },
  },
});

const swiper_bottom = new Swiper(".main-ad-list", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  slidesPerView: 1,
  speed: 2500,
  loop: true,
  breakpoints: {
    1000: {
      slidesPerView: 2,
    },
  },
});
