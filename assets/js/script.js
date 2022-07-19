const startButton = document.querySelector('start-btn button')
const questionContainer = document.querySelector('info-lis')
const exitButton = document.querySelector('exit-btn button')
const continueButton = document.querySelector('continue-btn button')
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
startButton.addEventListener('click', startGame)

const shuffledQuestions, currentQuestionIndex

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {


}

function selectAnswer() {

}

//  Questions JS Section  //

const questions = [
    {
        numb: 1,
        title: "Which built-in methid returns the character at the specified index",
        choices: ["characterAT()","getCharAt()","charAt()","None of the Above"],
        answer: "charAt()"
    },
    {
        numb: 2,
        title: "The condition in an if/else statement is enclosed with ________",
        choices: ["parentheses","quotes","curly brackets","square brackets"],
        answer: "parentheses"
    },
    {
        numb: 3,
        title:"Which of the following function of Number object returns a string value version of the current number?",
        choices: ["toString()","toFixed()","toLocaleString()","toPrecision()"],
        answer: "toString()"
    },
    {
        numb: 4,
        title:"What is an attribute used in html to decorate content?",
        choices: ["css","class","src","style",],
        answer: "style"
    },
    {
        numb: 5,
        title:"Which of the followeing html tags is NOT included in the beginning HEAD tag?",
        choices: ["link","meta","title","header"],
        answer: "header"
    }
]

// Highscore Keeping Section //
