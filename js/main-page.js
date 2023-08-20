const plusButton = document.querySelector(
  ".main-travel-info__gaboza-pick-button"
);

function movePage(page) {
  location.href = page;
}

function recommend() {
  let list = document.querySelectorAll(".main-travel-info__gaboza-pick-item");
  list.forEach((v) => {
    v.style.display = "flex";
  });

  document.querySelector(
    ".main-travel-info__gaboza-pick-button"
  ).style.display = "none";
}

plusButton.addEventListener("click", recommend);
