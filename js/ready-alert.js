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
