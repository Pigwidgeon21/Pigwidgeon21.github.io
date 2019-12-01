let countdown = 0; // variable to set/clear intervals
let seconds = 1500; // seconds left on the clock
let workTime = 25;
let breakTime = 5;
let isBreak = true;
let isPaused = true;
let startButton =
React.createElement("div", null,
React.createElement("i", { class: "fas fa-play fa-2x" }),
React.createElement("i", { class: "fas fa-pause fa-2x" }));



const timerLabel = document.querySelector("#timer-label");
const timeLeft = document.querySelector("#time-left");
const startStop = document.querySelector("#start_stop");
const resetBtn = document.querySelector("#reset");
const sessionLength = document.querySelector("#session-length");
const breakLength = document.querySelector("#break-length");

const alarm = document.createElement('audio');

alarm.setAttribute("src", "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3");

// Event Listeners startStop/Reset//
startStop.addEventListener('click', () => {
  clearInterval(countdown);
  isPaused = !isPaused;
  if (!isPaused) {
    countdown = setInterval(timer, 1000);
  }
});

resetBtn.addEventListener('click', () => {
  clearInterval(countdown);
  seconds = workTime * 60;
  countdown = 0;
  isPaused = true;
  isBreak = true;
});

//timer

function timer() {
  seconds--;
  if (seconds < 0) {
    clearInterval(countdown);
    alarm.currentTime = 0;
    alarm.play();
    seconds = (isBreak ? breakTime : workTime) * 60;
    isBreak = !isBreak;
    countdown = setInterval(timer, 1000);
  }
}

// Update session/break //
let increment = 1;

let incrementFunctions =
{ "#session-increment": function () {workTime = Math.min(workTime + increment, 60);},
  "#session-decrement": function () {workTime = Math.max(workTime - increment, 5);},
  "#break-increment": function () {breakTime = Math.min(breakTime + increment, 60);},
  "#break-decrement": function () {breakTime = Math.max(breakTime - increment, 5);} };

for (var key in incrementFunctions) {
  if (incrementFunctions.hasOwnProperty(key)) {
    document.querySelector(key).onclick = incrementFunctions[key];
  }
}


// UPDATE HTML CONTENT //
function countdownDisplay() {
  let minutes = Math.floor(seconds / 60);
  let remainderSeconds = seconds % 60;
  timeLeft.textContent = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
}

function buttonDisplay() {
  if (isPaused && countdown === 0) {
    startStop.innerHTML = "Start";
  } else if (isPaused && countdown !== 0) {
    startStop.innerHTML = "Continue";
  } else {
    startStop.innerHTML = "Pause";
  }
}


function updateHTML() {
  countdownDisplay();
  buttonDisplay();
  isBreak ? timerLabel.textContent = "Session" : timerLabel.textContent = "Break";
  sessionLength.textContent = workTime;
  breakLength.textContent = breakTime;
}

window.setInterval(updateHTML, 100);

document.onclick = updateHTML;