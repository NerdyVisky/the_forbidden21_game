let total = 0;
let difficulty = localStorage.getItem('difficulty');
let userIncrement;
let turnIndicator = document.querySelector(".turn-indicator");
let compUpdate = document.querySelector(".compUpdate");
let totalDisplay = document.querySelector(".total-number");
let options = document.querySelector(".options");
let option1 = document.querySelector(".option-1");
let option2 = document.querySelector(".option-2");
let option3 = document.querySelector(".option-3");
let option4 = document.querySelector(".option-4");


let counterUpdate = () => {
  totalDisplay.innerHTML = total;
};
let counterReset = () => {
  total = 0;
  totalDisplay.innerHTML = total;
  compUpdate.innerText = "_";
  turnChangeToUser();
  option1.style.visibility = "visible";
  option2.style.visibility = "visible";
  option3.style.visibility = "visible";
  option4.style.visibility = "visible";
};
let turnChangeToComp = () => {
  options.style.cursor = "not-allowed";
  options.style.pointerEvents = "none";
  turnIndicator.style.background = "#e22929";
  turnIndicator.style.bottom = "120px";
};
let turnChangeToUser = () => {
  option1.innerText = total + 1;
  option2.innerText = total + 2;
  option3.innerText = total + 3;
  option4.innerText = total + 4;
  turnIndicator.style.background = "rgb(81, 119, 231)";
  turnIndicator.style.bottom = "-65px";
  options.style.pointerEvents = "auto";
  options.style.cursor = "pointer";
};
let hideInvalidOptions = () => {
  if (total == 20) {
    option2.style.visibility = "hidden";
    option3.style.visibility = "hidden";
    option4.style.visibility = "hidden";
  }
  if (total == 19) {
    option3.style.visibility = "hidden";
    option4.style.visibility = "hidden";
  }
  if (total == 18) {
    option4.style.visibility = "hidden";
  }
};
let isGameOver = () => {
  if (total == 21) {
    userWon();
  } else if (total == 20) {
    userLost();
  }
};
let userWon = () => {
  totalDisplay.innerText = "WON!";
  option1.style.visibility = "hidden";
  option2.style.visibility = "hidden";
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
  setTimeout(counterReset, 2500);
};
let userLost = () => {
  totalDisplay.innerText = "LOST!";
  setTimeout(counterReset, 2500);
};

let compTurn = () => {
  if (difficulty == "hard") {
    total += 5 - userIncrement;
  } else if (difficulty == "easy") {
    console.log("successs!!!!");
    if (total == 16 || total == 17 || total == 18 || total == 19) {
      total = 20;
    } else if (total == 20) {
      total = 21;
    } else {
      total += Math.round(1 + 3 * Math.random());
    }
  }
  compUpdate.innerText = total;
  totalDisplay.innerText = total;
  isGameOver();
  hideInvalidOptions();
  turnChangeToUser();
};

option1.addEventListener("click", () => {
  userIncrement = 1;
  total += userIncrement;
  counterUpdate();
  turnChangeToComp();
  setTimeout(compTurn, 1000);
});
option2.addEventListener("click", () => {
  userIncrement = 2;
  total += userIncrement;
  counterUpdate();
  turnChangeToComp();
  setTimeout(compTurn, 1000);
});
option3.addEventListener("click", () => {
  userIncrement = 3;
  total += userIncrement;
  counterUpdate();
  turnChangeToComp();
  setTimeout(compTurn, 1000);
});
option4.addEventListener("click", () => {
  userIncrement = 4;
  total += userIncrement;
  counterUpdate();
  turnChangeToComp();
  setTimeout(compTurn, 1000);
});
