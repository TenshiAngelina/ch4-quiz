var timerContainer = document.getElementById("timer-container");
var questionContainer = document.getElementById("questions-container");
var answerContainer = document.getElementById("answers-container");
var startContainer = document.getElementById("start-container");
var start = document.getElementById("start-btn");
start.addEventListener("click", startQuiz);
var timerEl = document.getElementById("timer");
var question = document.getElementById("question");
var secondsLeft = 60;
var score = 0;
var counter = 0;
var resultContainer = document.getElementById("result-container");
var answer1 = document.getElementById("answer-btn1");
var answer2 = document.getElementById("answer-btn2");
var answer3 = document.getElementById("answer-btn3");
var answer4 = document.getElementById("answer-btn4");
//Variable that contains an object with questions and answers for the quiz
var questionsAndAnswers = [
  {
    question: "It is an example of boolean",
    answers: ["True", "22", "Boolean", "undefined"],
    rightAnswer: "True"
  },
  {
    question: "It is the main programming language of the web",
    answers: ["Java", "JavaScript", "C++", "Python"],
    rightAnswer: "JavaScript"
  },
  {
    question: "It is a method to add a new element at the end of an array",
    answers: ["push", "pull", "pop", "shift"],
    rightAnswer: "push"
  },
];
//Ask for the user's initials and shows their score, saves the initials and score in Local Storage
function askInitials() {
  var initials = prompt("Type your initials");
  var scoreBoard = document.getElementById("result");
  scoreBoard.innerHTML = initials + " your score is " + score;
  localStorage.setItem(initials, score);
}
//Hide all answers and then calls for the function with the prompt
function gameOver() {
  timerContainer.classList.add("hide");
  questionContainer.classList.add("hide");
  answerContainer.classList.add("hide");
  startContainer.classList.add("hide");
  askInitials();
}
//Set timer function
function setTime() {
  var timerInterval = setInterval(function() {
      secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds left";
    if(secondsLeft === 0) {
      gameOver();
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
  question.innerHTML = questionsAndAnswers[counter].question;
  answer1.innerHTML = questionsAndAnswers[counter].answers[0];
  answer2.innerHTML = questionsAndAnswers[counter].answers[1];
  answer3.innerHTML = questionsAndAnswers[counter].answers[2];
  answer4.innerHTML = questionsAndAnswers[counter].answers[3];
};

function selectAnswer(event) {
  console.log(counter);
  console.log(questionsAndAnswers.length);
  var currentAnswer = event.target.textContent;
  if(currentAnswer === questionsAndAnswers[counter].rightAnswer) {
    score += 1;
  } else {
    secondsLeft -= 10;
  }
  if(counter === questionsAndAnswers.length-1) {
    gameOver();
    return;
  }
  counter++;
  currentQuestion();
};
