// 밑의 스와이퍼
let galleryThumbs = new Swiper(".gallery-thumbs", {
  // spaceBetween: 10,
  // centeredSlides: true,
  slidesPerView: 6,
  // touchRatio:0.2,
  slideToClickedSlide: true,
  loop: true,
  freeMode: true,

  // watchSlidesProgress: true,
  // loopedSlides: 5,
});

// 스와이퍼

const swiper = new Swiper(".swiper1", {
  slidesPerView: 1,
  // spaceBetween: 350, //slide 간의 gap(margin)
  loop: true,
  autoplay: {
    delay: 1500,
  },
  speed: 500, //like transition

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  thumbs: {
    swiper: galleryThumbs,
  },
});

// swiper.controller.control = galleryThumbs;
// galleryThumbs.controller.control = swiper;

const test = document.querySelector(".br-15-30");

const themeCon = document.querySelector(".theme-title .flex-r h4");

const themeIc = document.querySelector(".theme-title-icon");

swiper.on("slideChange", function () {
  // 테마 버튼 네브 선언
  let themeTit = document.querySelectorAll(".banner-nav nav ul li button");

  // 테마 서브 타이틀
  let themeTitdetail = [
    "추천! 웰니스 관광지",
    "하동 알프스라는 별칭을 가진 여행지",
    "맑은 에너지로 가득한 휴가 여행지",
    "식도락, 풍광 좋은 자연 속 힐링여행",
    "함께 여행하기 좋은 반려동물 친화관광도시",
  ];

  // 테마 서브 타이틀과 나오는 아이콘
  let themeTitIcon = ["☀", "🏞️", "🏄", "👩‍🦳👨‍", "🐶"];

  console.log(this.realIndex);

  // 테마 버튼 네브 스와이퍼와 연동
  themeTit.forEach((val, i) => {
    if (i === this.realIndex) {
      val.classList.add("active");
      test.innerText = val.innerText;
    } else val.classList.remove("active");
  });

  // 테마 서브 타이틀 배열 분배
  themeTitdetail.forEach((v, l) => {
    if (l === this.realIndex) {
      themeCon.innerText = v;
      console.log(v);
    }
  });

  // 테마 서브 타이틀의 아이콘 배열 분배
  themeTitIcon.forEach((v, i) => {
    if (i === this.realIndex) {
      themeIc.innerText = v;
    }
  });
});

// const moreTheme=document.querySelector('.detail-banner');

// moreTheme.addEventListener('click',()=>{
//   alert('아직 준비중입니다');
// });

// 부트 스트랩 모달
const moreTheme = new bootstrap.Modal(document.querySelector(".detail-banner"));

// 이미지 네브 선언
const NavImg = document.querySelectorAll(
  ".theme-con-img .theme-img-nav .list li"
);

// 이미지 네브의 리스트들 선언
const ImgArea = document.querySelectorAll(".theme-img-area .flex-r");

// NavImg.forEach((v, i) => {
//   this.addEventListener("click", () => {
//     // v.classList.toggle("bi-heart-fill");
//     // v.classList.toggle("bi-heart");
//     console.log('click');
//   });
// });

console.log(ImgArea);

NavImg.forEach((v, i) => {
  // 이미지 네브 클릭하면 보이게
  v.addEventListener("click", () => {
    NavImg.forEach((a) => {
      a.classList.remove("active");
    });
    v.classList.add("active");

    ImgArea.forEach((b) => {
      b.classList.remove("active");
    });
    ImgArea[i].classList.add("active");
  });
});
