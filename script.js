var start = document.getElementById("start-btn");
start.addEventListener("click", startQuiz);
var timerEl = document.getElementById("timer");
var secondsLeft = 60;
var score = 0;
var question = document.getElementById("question");
//Variable that contains an object with questions and answers for the quiz
var questionsAndAnswers = [
  {
    question: "It is an example of boolean",
    answers: ["True", "22", "Boolean", "undefined"],
    rightAnswer: "True"
  },
  {
    question: "Random question2",
    answers: ["Answer1", "Answer2", "Answer3", "Answer4"],
    rightAnswer: "Answer1"
  },
  {
    question: "Random question3",
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
  currentQuestion();
}

function currentQuestion() {
  question.innerText = questionsAndAnswers.question;
}

function selectAnswer() {
  
}

function nextAnswer() {

}

