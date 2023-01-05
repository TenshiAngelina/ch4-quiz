// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

var start = document.getElementById("start-btn");
start.addEventListener("click", startQuiz);
var timerEl = document.getElementById("timer");
var secondsLeft = 60;
var score = 0;
var question = document.getElementById("question");
var answers = document.getElementsByClassName
//Variable that contains an object with questions and answers for the quiz
var questionsAndAnswers = [
  {
    title: "Random question",
    answers: ["Answer1", "Answer2", "Answer3", "Answer4"],
    rightAnswer: "Answer1"
  },
  {
    title: "Random question",
    answers: ["Answer1", "Answer2", "Answer3", "Answer4"],
    rightAnswer: "Answer1"
  },  {
    title: "Random question",
    answers: ["Answer1", "Answer2", "Answer3", "Answer4"],
    rightAnswer: "Answer1"
  },  {
    title: "Random question",
    answers: ["Answer1", "Answer2", "Answer3", "Answer4"],
    rightAnswer: "Answer1"
  },  
];

//Set timer function
function setTime() {
  var timerInterval = setInterval(function() {
      secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left";
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

//Start timer when Start button is clicked and hides Start button
function startQuiz() {
  setTime();
  start.classList.add("hide");
}

function selectAnswer() {
  
}