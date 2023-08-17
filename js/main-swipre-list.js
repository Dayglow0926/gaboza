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

const swiper_hotplace = new Swiper(".main-travel-info__hotplace-list", {
  slidesPerView: 3,
  spaceBetween: 32,
  loop: true,
  scrollbar: {
    el: ".hotplace-swiper-scrollbar",
    hide: true,
  },

  navigation: {
    nextEl: ".hotplace-swiper-button-next",
    prevEl: ".hoplace-swiper-button-prev",
  },

  breakpoints: {
    1000: {
      slidesPerView: 3,
    },
  },
});

const swiper_hotplace2 = new Swiper(".hotplace-list2", {
  slidesPerView: 3,
  spaceBetween: 32,
  loop: true,
  scrollbar: {
    el: ".hotplace-swiper-scrollbar",
    hide: true,
  },

  navigation: {
    nextEl: ".hotplace-swiper-button-next",
    prevEl: ".hoplace-swiper-button-prev",
  },

  breakpoints: {
    1000: {
      slidesPerView: 3,
    },
  },
});
