"use strict";

const zone = document.querySelector("#root");
const zoneArr = document.querySelectorAll(".cube");
const btn = document.querySelector(".btn");
const gameLine = document.querySelector(".gameLine");
const gameBlockArr = document.querySelectorAll(".gameLine_block");

const gameLineGame = [
  { start: 3, pole: [2, 4, 4, 8, 2, 2, 6, 8, 2, 4], end: 7 },
  { start: 1, pole: [2, 2, 8, 6, 8, 6, 2, 4, 2, 6], end: 9 },
  { start: 2, pole: [2, 2, 8, 4, 8, 6, 2, 4, 2, 6], end: 8 },
  { start: 7, pole: [8, 6, 8, 6, 2, 2, 8, 4, 2, 8], end: 5 }
];

btn.addEventListener("click", createZoneGame);

let intervalValue;
let randomStart;
let count = 0;
function createZoneGame(e) {
  e.preventDefault();
  btn.disabled = true;
  e.target.innerText = "Далее";
  randomStart = Math.floor(Math.random() * Math.floor(gameLineGame.length));

  zoneArr.forEach(el => (el.innerHTML = ""));
  gameBlockArr.forEach(el => (el.innerHTML = ""));
  count = 0;
  zoneArr[gameLineGame[randomStart].start - 1].innerHTML = "START";
  zoneArr[
    gameLineGame[randomStart].end - 1
  ].innerHTML = `<span id="WIN""><span>`;
  intervalValue = setInterval(linecreater, 500);
  zone.addEventListener("click", randomClick);
}

function linecreater() {
  switch (gameLineGame[randomStart].pole[count]) {
    case 2:
      gameBlockArr[count].innerHTML = `<img src="./SVG/arrow-down.svg"/>`;
      break;
    case 4:
      gameBlockArr[count].innerHTML = `<img src="./SVG/arrow-left.svg"/>`;
      break;
    case 6:
      gameBlockArr[count].innerHTML = `<img src="./SVG/arrow-right.svg"/>`;
      break;
    case 8:
      gameBlockArr[count].innerHTML = `<img src="./SVG/arrow-up.svg"/>`;
      break;
    default:
      clearInterval(intervalValue), console.log("ERROR");
  }
  count++;
}

function randomClick(e) {
  e.preventDefault();
  btn.disabled = false;
  if (e.target.children.length > 0) {
    zoneArr[
      gameLineGame[randomStart].end - 1
    ].innerHTML = ` <img src="./SVG/smile.svg"/>`;
  } else {
    zoneArr[
      gameLineGame[randomStart].end - 1
    ].innerHTML = ` <img src="./SVG/smile.svg"/>`;
    e.target.innerHTML = `<img src="./SVG/sad.svg"/>`;
  }
  zone.removeEventListener("click", randomClick);
}
