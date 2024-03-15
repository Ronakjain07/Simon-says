// 1) any keypress to start the game
// 2) btn flash + level1
// user sequence and game sequence
// 3) btn press(event listener) -> check user that the sequence mtaches with the game sequence
// 4)if sequence  = same -> level up else game over!

let userSeq = [];
let gameSeq = [];

let button = document.querySelector(".button");

let buttons = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

button.addEventListener("click", function () {
  if (started == false) {
    console.log("Game Started");
    started = true;
    levelUp();
  }
});
// let body = document.querySelector("body");
// body.addEventListener("click", function () {
//   if (started == false) {
//     console.log("Game Started");
//     started = true;
//     levelUp();
//   }
// });

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 100);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randomIndex = Math.floor(Math.random() * 4);
  let randColor = buttons[randomIndex];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    let body = document.querySelector("body");
    body.style.backgroundColor = "red";
    setInterval(function () {
      body.style.backgroundColor = "white";
    }, 250);
    h2.innerHTML = `Game over! Your score was <b>${level * 10}</b> <br> `;
    reset();
  }
}

function userFlash(btn) {
  btn.classList.add("flash1");
  setTimeout(function () {
    btn.classList.remove("flash1");
  }, 100);
}

function btnPress() {
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
