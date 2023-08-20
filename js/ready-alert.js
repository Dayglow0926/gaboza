const ready = document.querySelectorAll(".ready");

ready.forEach((v) => {
  v.addEventListener("click", () => {
    Swal.fire({
      title: "준비중!",
      text: "해당 페이지는 준비중입니다.",
      icon: "warning",
      confirmButtonText: "확인",
    });
  });
});

const share = document.querySelectorAll(".bi-share");

share.forEach((v) => {
  console.log(v);
  v.addEventListener("click", () => {
    Swal.fire({
      title: "공유!",
      text: "링크가 복사되었습니다!",
      icon: "success",
      confirmButtonText: "확인",
    });
  });
});
