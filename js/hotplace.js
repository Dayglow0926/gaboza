let allItems = Array.from(document.querySelectorAll(".item"));

function hashCheck(target, checkHash) {
  // console.log(target, checkHash);
  target.forEach((v) => {
    let index = checkHash.indexOf(v);
    if (index != -1) checkHash.splice(index, 1);
  });
  return checkHash.length === 0 ? true : false;
}

function setVisibility() {
  let onButton = document.querySelectorAll(".filters li .on > button");
  let value = "";

  onButton.forEach((v) => {
    value += " " + v.value;
  });
  value = new Set(value.trim().split(" "));

  allItems.map(function (el) {
    if (
      // (" " + el.classList + " ").replace(/[\n\t]/g, " ").indexOf(value) > -1
      hashCheck([...el.classList], [...value])
    ) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
}

// const btn = document.getElementById("printText");

// btn.addEventListener("click", () => {
//   const divNode = document.getElementById("content");
//   divNode.innerHTML = `<p>Hello,JavaScript</p>`;

//   console.log(divNode.innerHTML);
// });

// 공유버튼 이벤트
function shareBtn() {
  //alert("공유 링크가 복사되었습니다.");
}

// 위치(btnChange1), 컨셉(btnChange2), 지수(btnChange3) 필터링 버튼선택변경
const btnChange1 = document.querySelectorAll(".location-wrap .blue-border-btn");

// 태그 이름 변경시키기
const locationName = document.querySelector(".hp-search-tit span:nth-child(1)");
const conceptName = document.querySelector(".hp-search-tit span:nth-child(2)");

function btnChangeFn(event, type) {
  event.forEach((v) => {
    // console.log(v);
    v.addEventListener("click", () => {
      // v.classList.toggle("on");
      event.forEach((v) => {
        v.classList.remove("on");
      });
      v.classList.add("on");
      if (type === "location") locationName.innerText = v.innerText;
      else if (type === "concept") conceptName.innerText = v.innerText;
      setVisibility();
    });
  });
}

btnChangeFn(btnChange1, "location");

const btnChange2 = document.querySelectorAll(".concept-wrap .blue-border-btn");

btnChangeFn(btnChange2, "concept");

const btnChange3 = document.querySelectorAll(".hp-wrap .red-border-btn");

btnChangeFn(btnChange3);

// 하트 클릭 시 변경이벤트
const hearts = document.querySelectorAll(".heart");
const p = document.querySelectorAll(".hp-like-num");
for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener("click", function () {
    // 숫자 count 변경
    /* 빈 변수를 설정하고,
  꽉찬 하트(?)(.bi-heart-fill)을 누르면 더하기, 그렇지 않으면 빼기 연산해서 
  변수에 대입 */
    let heartCounts;
    if (hearts[i].classList.contains("bi-heart-fill")) {
      heartCounts = Number(p[i].innerText) - 1;
    } else {
      heartCounts = Number(p[i].innerText) + 1;
    }
    p[i].innerHTML = `<i class="bi bi-heart-fill"></i> ${heartCounts}`;

    // 하트 변경 > 변경 로직이 밑에 있어야 생각하기 편합니다.
    hearts[i].classList.toggle("bi-heart-fill");
    hearts[i].classList.toggle("bi-heart");
  });
}
