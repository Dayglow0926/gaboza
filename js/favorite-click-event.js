const heart = document.querySelectorAll("i.bi.heart, i.bi.bi-heart");

heart.forEach((v) => {
  v.addEventListener("click", () => {
    v.classList.toggle("bi-heart-fill");
    v.classList.toggle("bi-heart");
  });
});
