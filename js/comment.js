const commentButton = document.querySelector(".commentBtn > button");
const textarea = document.querySelector("#tform > textarea");
const commentCount = document.querySelector("#commentGO > h3 > span");

const commentList = [
  {
    profile: "../img/profile1.png",
    comment: "댓글 내용 입니다.",
    nikcname: "햄스터",
    createDate: "2023. 8. 12",
  },
  {
    profile: "../img/profile1.png",
    comment: "댓글 내용 입니다.",
    nikcname: "햄스터",
    createDate: "2023. 8. 11",
  },
  {
    profile: "../img/profile1.png",
    comment: "댓글 내용 입니다.",
    nikcname: "햄스터",
    createDate: "2023. 8. 10",
  },
  {
    profile: "../img/profile1.png",
    comment: "댓글 내용 입니다.",
    nikcname: "햄스터",
    createDate: "2023. 8. 09",
  },
];

function commentDelete(t) {
  t.parentNode.remove();
  commentCounter();
}

//댓글 폼 함수
function commentDOM(comment, nikcname, createDate) {
  const li = document.createElement("li");
  const profile = document.createElement("div");
  profile.classList.add("profile");

  const profile_img = document.createElement("img");
  profile_img.src = "../img/profile2.png";
  profile_img.alt = "profile2";

  const txtReply = document.createElement("div");
  txtReply.classList.add("txtReply");

  const p = document.createElement("p");
  p.innerText = comment;

  const dateReply = document.createElement("div");
  dateReply.classList.add("dateReply", "h-regular-14");

  const name = document.createElement("em");
  name.innerText = nikcname;

  const span = document.createElement("span");
  let date;
  if (createDate === undefined) {
    date = new Date();
    span.innerText = `${date.getFullYear()}. ${date.getMonth()}. ${date.getDate()}`;
  } else {
    span.innerText = createDate;
  }

  const deleteButton = document.createElement("div");
  deleteButton.classList.add("comment-delete");

  deleteButton.onclick = function () {
    commentDelete(this);
  };

  const trashIcon = document.createElement("i");
  trashIcon.classList.add("bi", "bi-trash");

  deleteButton.append(trashIcon);

  dateReply.append(name, span);
  txtReply.append(p, dateReply);
  profile.append(profile_img);
  li.append(profile, txtReply);
  li.append(deleteButton);

  return li;
}

//댓글 append 함수
function commentAppend() {
  if (textarea.value.trim() === "") {
    textarea.value = "";
    return;
  }

  const ul = document.querySelector(".listReply > ul");
  const li = commentDOM(textarea.value, "guest");

  ul.prepend(li);
  textarea.value = "";
  commentCounter();
}

function commentCounter() {
  const commentLi = document.querySelectorAll(".listReply > ul > li");
  commentCount.innerText = commentLi.length;
}

//textarea에서 enter 입력시 댓글 입력 실행
function mykeydown() {
  let enter = false;
  window.onkeydown = (e) => {
    if (e.keyCode == 13) {
      commentAppend();
      return false;
    }
  };
}

function init() {
  commentList.forEach((v, index) => {
    const li = commentDOM(v.comment, v.nikcname, v.createDate);
    const ul = document.querySelector(".listReply > ul");

    ul.append(li);
  });
}

commentButton.addEventListener("click", commentAppend);
// init();
commentCounter();
