// create question array
const questions = [
  {
    question:"String values must be enclosed within _____ when being assigned to variables.",
    choices:["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
    answer:"c. quotes"
  },
  {
    question:"Inside which HTML element do we put the Javascript?",
    choices:["a. <js>", "b. <javascript>", "c. <scripting>", "d. <script>"],
    answer:"d. <script>"
  },
  {
    question: "Commonly used data types DO NOT include:",
    choices:["a. strings", "b. booleans", "c. alerts", "d. numbers"],
    answer:"c. alerts"
  },
  {
    question:"Arrays in JavaScript can be used to store ______.",
    choices:["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
    answer: "b. other arrays"
  },
  {
    question: "How do you create a function in JavaScript?",
    choices:["a. function = myFunction()", "b. function myFunction()", "c. function:myFunction()", "d. createMyFunction()"],
    answer: "b. function myFunction()"
  },
  {
    question:"How do you call a function named myFunction?",
    choices:["a. call myFunction()", "b. call function myFunction()", "c. myFunction()", "d. call myFunction"],
    answer: "c. myFunction()"
  },
  {
    question: "The first index of an array is _____.",
    choices:["a. 0", "b. 1", "c. 7", "d. any"],
    answer: "a. 0"
  },
  {
    question: "How do you add a comment in a JavaScript?",
    choices:["a. //This is a comment", "b. <!--This is a comment-->", "c. 'This is a comment", "d. * This is a comment *"],
    answer: "a. //This is a comment"
  },
  {
    question: "How to write an IF statement in JavaScript?",
    choices:["a. if i == 5 then", "b. if i = 5 then", "c. if(i == 5)", "d. if i = 5"],
    answer:"c. if(i == 5)"
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    choices:["a. onclick", "b. onchange", "c. onmouseover", "d. onmouseclick"],
    answer:"a. onclick"
  }
];

// reference the HTML elements

// timer elements
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

// start elements
var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

// question and answer elements
var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

// extra elements
var summary = document.getElementById("summary");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initialInput = document.getElementById("initialInput");
var everything = document.getElementById("everything");
var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;

// score section elements
var highScoreSection = document.getElementById("highScoreSection");
var finalScore = document.getElementById("finalScore");
var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn");
var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("listOfHighScores");

// timer function
var totalTime = 91;
function newQuiz() {
  questionIndex = 0;
  totalTime = 90;
  timeLeft.textContent = totalTime;
  initialInput.textContent = "";
  startDiv.style.display = "none";
  questionDiv.style.display = "block";
  timer.style.display = "block"
  timesUp.style.display = "none";
  // create the timer
  var startTimer = setInterval(function(){
    totalTime--;
    timeLeft.textContent = totalTime;
    if(totalTime <= 0) {
      clearInterval(startTimer);
      if(questionIndex < questions.length - 1) {
        gameOver();
      }
    }
  },1000);

  showQuiz();
};

// create a function to begin the quiz and progress the questions
function showQuiz() {
  nextQuestion();
}

// progress the question
function nextQuestion() {
  questionTitle.textContent = questions[questionIndex].question;
  choiceA.textContent = questions[questionIndex].choices[0];
  choiceB.textContent = questions[questionIndex].choices[1];
  choiceC.textContent = questions[questionIndex].choices[2];
  choiceD.textContent = questions[questionIndex].choices[3];
}

// create a function to check the answer to see if it is correct or wrong
function checkAnswer(answer) {

  var lineBreak = document.getElementById("lineBreak");
  lineBreak.style.display = "block";
  answerCheck.style.display = "block";

    if (questions[questionIndex].answer == questions[questionIndex].choices[answer]) {
    correctAns++;
    answerCheck.textContent = "Correct!";
  } else {
  totalTime -= 10;
  timeLeft.textContent = totalTime;
  answerCheck.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
  }

  questionIndex++;

  if (questionIndex < questions.length) {
    nextQuestion();
  }else {
    gameOver();

  } 
}

// create functions for user answers
function chooseA() { checkAnswer(0); }
function chooseB() { checkAnswer(1); }
function chooseC() { checkAnswer(2); }
function chooseD() { checkAnswer(3); }
function gameOver() {
  summary.style.display = "block";
  questionDiv.style.display = "none";
  startDiv.style.display = "none";
  timer.style.display = "none";
  timesUp.style.display = "block";
  finalScore.textContent = correctAns;
}

// store the highscores in local storage and allow the user to type initials for highscores
