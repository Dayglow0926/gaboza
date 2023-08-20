// 밑의 스와이퍼
let galleryThumbs = new Swiper(".gallery-thumbs", {
  slidesPerView: 6,
  slideToClickedSlide: true,
  loop: true,
  freeMode: true,
});

// 스와이퍼

const swiper = new Swiper(".swiper1", {
  slidesPerView: 1,
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


const test = document.querySelector(".br-15-30");

const testM=document.querySelector('.theme-title.mobile .br-15-30');

const themeCon = document.querySelector(".theme-title .flex-r h4");

const themeIc = document.querySelector(".theme-title-icon");

const themeConM = document.querySelector(".theme-title.mobile .flex-r h4");

const themeIcM = document.querySelector(".theme-title.mobile .theme-title-icon");

swiper.on("slideChange", function () {
  // 테마 버튼 네브 선언
  let themeTit = document.querySelectorAll(".banner-nav nav ul li button");

  // 테마 서브 타이틀
  let themeTitdetail = [
    "추천! 웰니스 관광지",
    "하동 알프스라는 별칭을 가진 여행지",
    "맑은 에너지로 가득한 휴가 여행지",
    "식도락, 풍광 좋은 자연 속 힐링여행",
    "함께 여행하기 좋은 반려동물 친화 관광도시",
  ];

  // 테마 서브 타이틀과 나오는 아이콘
  let themeTitIcon = ["☀", "🏞️", "🏄", "👩‍🦳👨‍", "🐶"];

  // 테마 버튼 네브 스와이퍼와 연동
  themeTit.forEach((val, i) => {
    if (i === this.realIndex) {
      val.classList.add("active");
      test.innerText = val.innerText;
      testM.innerText = val.innerText;
    } else val.classList.remove("active");
  });

  // 테마 서브 타이틀 배열 분배
  themeTitdetail.forEach((v, l) => {
    if (l === this.realIndex) {
      themeCon.innerText = v;
    }
  });

  // 테마 서브 타이틀의 아이콘 배열 분배
  themeTitIcon.forEach((v, i) => {
    if (i === this.realIndex) {
      themeIc.innerText = v;
      themeIcM.innerText = v;
    }
  });

  // 테마 모바일 서브 타이틀 분배
});


// 이미지 네브 선언
const NavImg = document.querySelectorAll(
  ".theme-con-img .theme-img-nav .list li"
);

// 이미지 네브의 리스트들 선언
const ImgArea = document.querySelectorAll(".theme-img-area .flex-r");

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


// sweet alert

document.querySelector('.detail-banner').addEventListener('click',()=>{
  swal('', "아직 준비중입니다.", 'warning');
})