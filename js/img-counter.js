function imgCounter() {
  const img = document.querySelectorAll(
    ".modal .modal-dialog .modal-content .modal-body .swiper.mySwiper2 .swiper-slide"
  );

  if (img.length <= 3) return;

  const imgCounter = document.createElement("div");
  imgCounter.classList.add("img-counter", "h-bold-32");
  imgCounter.innerText = `+ ${img.length - 3}`;

  const photoGallery = document.querySelector(
    ".photoGallerySub ul li:last-child"
  );
  photoGallery.prepend(imgCounter);
}

imgCounter();
