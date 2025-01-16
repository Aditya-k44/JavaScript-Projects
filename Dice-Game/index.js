const container = document.querySelector(".dice-container");
const playBtn = document.querySelector(".play");
const diceImg1 = document.getElementById("dice1");
const diceImg2 = document.getElementById("dice2");
const diceImg3 = document.getElementById("dice3");
const diceImg4 = document.getElementById("dice4");
const diceImg5 = document.getElementById("dice5");
const diceImg6 = document.getElementById("dice6");

let oldNumbers = [2, 3];
let newNumbers = [];
const diceImgs = [diceImg1, diceImg2, diceImg3, diceImg4, diceImg5, diceImg6];

diceImgs[oldNumbers[0]].style.display = "block";
diceImgs[oldNumbers[1]].style.display = "block";

function displayNew() {
  diceImgs.forEach((dice) => (dice.style.display = "none"));

  const duplicate = container.lastElementChild.classList.contains("duplicate");
  if (duplicate) {
    const lastChild = container.lastElementChild;
    container.removeChild(lastChild);
  }

  oldNumbers = [...newNumbers];

  if (
    oldNumbers[0] >= 0 &&
    oldNumbers[1] >= 0 &&
    oldNumbers[0] === oldNumbers[1]
  ) {
    const clone = diceImgs[oldNumbers[0]].cloneNode(true);
    clone.style.display = "block";
    clone.classList.add("duplicate");

    container.appendChild(clone);
    diceImgs[oldNumbers[0]].style.display = "block";
  } else {
    if (oldNumbers[0] !== undefined)
      diceImgs[oldNumbers[0]].style.display = "block";
    if (oldNumbers[1] !== undefined)
      diceImgs[oldNumbers[1]].style.display = "block";
  }

  newNumbers = [];
}

function play() {
  const randomnum1 = Math.floor(Math.random() * 6);
  const randomnum2 = Math.floor(Math.random() * 6);

  if (randomnum1 > randomnum2) {
    container.style.flexDirection = "row-reverse";
  } else {
    container.style.flexDirection = "row";
  }

  newNumbers.push(randomnum1, randomnum2);

  displayNew();
  showResult(randomnum1, randomnum2);
}

function showResult(randomnum1, randomnum2) {
  if (randomnum1 > randomnum2) {
    document.getElementById("result").innerHTML = "Player1 Wins!";
  } else if (randomnum1 < randomnum2) {
    document.getElementById("result").innerHTML = "Player2 Wins!";
  } else {
    document.getElementById("result").innerHTML = "DRAW!";
  }
}

playBtn.addEventListener("click", play);
play();
